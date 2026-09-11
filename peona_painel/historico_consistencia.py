# -*- coding: utf-8 -*-
"""
Histórico imutável do Teste de Consistência.

Regra:
  · chave única = (competencia_teste, segmento, janela)
  · registros existentes = bloqueados (não recalcular / não sobrescrever)
  · nova competência elegível = calcular e acrescentar
  · lacunas históricas (ex.: variação média) permanecem como ausência

Arquivos canônicos (em peona_painel/data/):
  · historico_consistencia.csv
  · historico_consistencia.json
  · historico_consistencia_auditoria.jsonl  (trilha; sem correção automática)
"""
from __future__ import annotations

import csv
import hashlib
import json
import shutil
from copy import deepcopy
from datetime import datetime
from pathlib import Path

from parse_consistencia import (
    ANS_MEDIA_INF,
    ANS_MEDIA_SUP,
    ANS_MENSAL_INF,
    ANS_MENSAL_SUP,
    CORTE_METODOLOGIA,
    INICIO_6M,
    _class_ans,
    _status_consolidado,
    _variacao_sinal,
    montar_consistencia_oficial,
)

PASTA_PAINEL = Path(__file__).resolve().parent
PASTA_DATA = PASTA_PAINEL / "data"
PASTA_PROJ = PASTA_PAINEL.parent

ARQ_CSV = PASTA_DATA / "historico_consistencia.csv"
ARQ_JSON = PASTA_DATA / "historico_consistencia.json"
ARQ_AUDIT = PASTA_DATA / "historico_consistencia_auditoria.jsonl"
ARQ_BACKUP_DIR = PASTA_DATA / "historico_backups"

VERSAO_METODOLOGIA = "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1"
# Maturação dos avisos: observa a competência de referência + 3 meses seguintes
DEFASAGEM_TESTE_MESES = 3

CAMPOS_IMUTAVEIS = (
    "competencia",
    "tipo",
    "janela",
    "peona_estimada",
    "peona_real",
    "diferenca",
    "variacao_mensal",
    "variacao_media",
    "status_mensal_ans",
    "status_media_ans",
    "status",
)


def _now_iso() -> str:
    return datetime.now().isoformat(timespec="seconds")


def _shift_months(comp_iso: str, delta: int) -> str:
    y, m = map(int, comp_iso.split("-")[:2])
    m0 = m - 1 + delta
    y2 = y + m0 // 12
    m2 = m0 % 12 + 1
    return f"{y2:04d}-{m2:02d}-01"


def _janela_para(comp_teste: str) -> str:
    return "12m" if comp_teste <= CORTE_METODOLOGIA else "6m"


def chave(rec: dict) -> tuple[str, str, str]:
    return (
        str(rec.get("competencia") or ""),
        str(rec.get("tipo") or ""),
        str(rec.get("janela") or _janela_para(str(rec.get("competencia") or ""))),
    )


def _num_eq(a, b, tol: float = 1e-9) -> bool:
    if a is None and b is None:
        return True
    if a is None or b is None:
        return False
    try:
        return abs(float(a) - float(b)) <= tol
    except (TypeError, ValueError):
        return str(a) == str(b)


def _fingerprint(rec: dict) -> str:
    payload = {k: rec.get(k) for k in CAMPOS_IMUTAVEIS}
    raw = json.dumps(payload, ensure_ascii=False, sort_keys=True, default=str)
    return hashlib.sha256(raw.encode("utf-8")).hexdigest()


def _rotulo_status_mensal(codigo: str | None) -> str:
    if codigo == "dentro":
        return "Consistente"
    if codigo == "fora":
        return "Não consistente"
    return "—"


def _rotulo_status_media(codigo: str | None, var_media) -> str:
    if var_media is None or codigo in (None, "nao_disponivel", "nao_avaliavel"):
        return "—"
    if codigo == "dentro":
        return "Consistente"
    if codigo == "fora":
        return "Não consistente"
    return "—"


def _rotulo_resultado(status: str | None, var_media) -> str:
    if status == "consistente":
        return "Consistente"
    if status == "nao_consistente":
        return "Não consistente"
    if status in ("avaliacao_parcial", "nao_avaliavel", "nao_executado") or var_media is None:
        return "—"
    return "—"


def _para_registro_historico(rec: dict, *, peona_comp: str | None, data_inclusao: str) -> dict:
    comp = rec["competencia"]
    janela = rec.get("janela") or _janela_para(comp)
    n = 12 if janela == "12m" else 6
    peona_est = rec.get("peona_estimada", rec.get("peona"))
    peona_real = rec.get("peona_real", rec.get("runoff_puro"))
    var_m = rec.get("variacao_mensal", rec.get("diferenca_pct"))
    var_a = rec.get("variacao_media")
    st_m = rec.get("status_mensal_ans")
    st_a = rec.get("status_media_ans")
    st = rec.get("status")

    out = {
        "competencia": comp,
        "competencia_label": rec.get("competencia_label"),
        "competencia_teste": comp,
        "competencia_peona": peona_comp or _shift_months(comp, DEFASAGEM_TESTE_MESES),
        "tipo": rec.get("tipo"),
        "segmento": rec.get("tipo"),
        "janela": janela,
        "janela_meses": rec.get("janela_meses") or n,
        "janela_bloco": rec.get("janela_bloco") or janela,
        "peona_estimada": peona_est,
        "peona_real": peona_real,
        "peona": peona_est,
        "runoff_puro": peona_real,
        "diferenca": rec.get("diferenca"),
        "diferenca_pct": var_m,
        "variacao_mensal": var_m,
        "variacao_media": var_a,
        "media_completa": var_a is not None,
        "status_mensal_ans": st_m,
        "status_mensal_rotulo": rec.get("status_mensal_rotulo") or _rotulo_status_mensal(st_m),
        "status_media_ans": st_a,
        "status_media_rotulo": rec.get("status_media_rotulo")
        or _rotulo_status_media(st_a, var_a),
        "status": st,
        "status_rotulo": rec.get("status_rotulo") or _rotulo_resultado(st, var_a),
        "status_mensagem": rec.get("status_mensagem"),
        "resultado_consolidado": _rotulo_resultado(st, var_a),
        "status_mensal_exibicao": _rotulo_status_mensal(st_m),
        "status_media_exibicao": _rotulo_status_media(st_a, var_a),
        "pendente": bool(rec.get("pendente")),
        "periodo_resumo": False,
        "regime": rec.get("regime"),
        "fonte_regra": rec.get("fonte_regra"),
        "fonte_arquivo": rec.get("fonte_arquivo"),
        "fonte_aba": rec.get("fonte_aba"),
        "fonte": rec.get("fonte"),
        "fonte_detalhe": rec.get("fonte_detalhe"),
        "ans_mensal_inf": ANS_MENSAL_INF,
        "ans_mensal_sup": ANS_MENSAL_SUP,
        "ans_media_inf": ANS_MEDIA_INF,
        "ans_media_sup": ANS_MEDIA_SUP,
        "mudanca_metodologica": INICIO_6M,
        "data_inclusao": rec.get("data_inclusao") or data_inclusao,
        "versao_metodologia": rec.get("versao_metodologia") or VERSAO_METODOLOGIA,
        "bloqueado": True,
        "fingerprint": None,
    }
    out["fingerprint"] = _fingerprint(out)
    return out


def carregar_historico(caminho_csv: Path | None = None) -> list[dict]:
    path = caminho_csv or ARQ_CSV
    if path.exists():
        with path.open("r", encoding="utf-8-sig", newline="") as f:
            rows = list(csv.DictReader(f, delimiter=";"))
        out = []
        for r in rows:
            rec = dict(r)
            for k in (
                "peona_estimada",
                "peona_real",
                "peona",
                "runoff_puro",
                "diferenca",
                "diferenca_pct",
                "variacao_mensal",
                "variacao_media",
                "ans_mensal_inf",
                "ans_mensal_sup",
                "ans_media_inf",
                "ans_media_sup",
            ):
                if k in rec and rec[k] not in (None, "", "None"):
                    try:
                        rec[k] = float(str(rec[k]).replace(",", "."))
                    except ValueError:
                        rec[k] = None
                elif k in rec:
                    rec[k] = None
            if rec.get("janela_meses") not in (None, "", "None"):
                try:
                    rec["janela_meses"] = int(float(rec["janela_meses"]))
                except ValueError:
                    pass
            for k in ("pendente", "periodo_resumo", "bloqueado", "media_completa"):
                if k in rec:
                    rec[k] = str(rec[k]).lower() in ("1", "true", "sim", "yes")
            out.append(rec)
        return out
    if ARQ_JSON.exists():
        return json.loads(ARQ_JSON.read_text(encoding="utf-8"))
    return []


def _escrever_csv(regs: list[dict], path: Path) -> None:
    if not regs:
        path.write_text("", encoding="utf-8")
        return
    cols: list[str] = []
    seen = set()
    prefer = [
        "competencia",
        "competencia_teste",
        "competencia_peona",
        "competencia_label",
        "tipo",
        "segmento",
        "janela",
        "janela_meses",
        "peona_estimada",
        "peona_real",
        "diferenca",
        "variacao_mensal",
        "variacao_media",
        "status_mensal_ans",
        "status_media_ans",
        "status",
        "status_mensal_exibicao",
        "status_media_exibicao",
        "resultado_consolidado",
        "data_inclusao",
        "versao_metodologia",
        "bloqueado",
        "fingerprint",
    ]
    for c in prefer:
        if any(c in r for r in regs) and c not in seen:
            cols.append(c)
            seen.add(c)
    for r in regs:
        for c in r:
            if c not in seen:
                cols.append(c)
                seen.add(c)

    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8-sig", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols, delimiter=";", extrasaction="ignore")
        w.writeheader()
        for r in regs:
            row = {}
            for c in cols:
                v = r.get(c)
                if isinstance(v, float):
                    row[c] = f"{v:.12g}".replace(".", ",")
                elif isinstance(v, bool):
                    row[c] = "true" if v else "false"
                elif v is None:
                    row[c] = ""
                else:
                    row[c] = v
            w.writerow(row)


def salvar_historico(regs: list[dict]) -> None:
    PASTA_DATA.mkdir(parents=True, exist_ok=True)
    ordenados = sorted(
        regs,
        key=lambda r: (r.get("competencia") or "", r.get("tipo") or "", r.get("janela") or ""),
    )
    _escrever_csv(ordenados, ARQ_CSV)
    ARQ_JSON.write_text(
        json.dumps(ordenados, ensure_ascii=False, indent=2, default=str),
        encoding="utf-8",
    )


def _backup(regs: list[dict]) -> Path | None:
    if not regs:
        return None
    ARQ_BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    dest = ARQ_BACKUP_DIR / f"historico_consistencia_{stamp}.json"
    dest.write_text(
        json.dumps(regs, ensure_ascii=False, indent=2, default=str), encoding="utf-8"
    )
    if ARQ_CSV.exists():
        shutil.copy2(ARQ_CSV, ARQ_BACKUP_DIR / f"historico_consistencia_{stamp}.csv")
    return dest


def _audit(evento: dict) -> None:
    PASTA_DATA.mkdir(parents=True, exist_ok=True)
    with ARQ_AUDIT.open("a", encoding="utf-8") as f:
        f.write(json.dumps(evento, ensure_ascii=False, default=str) + "\n")


def validar_imutabilidade(antes: list[dict], depois: list[dict]) -> dict:
    mapa_antes = {chave(r): r for r in antes}
    mapa_depois = {}
    dups = []
    for r in depois:
        k = chave(r)
        if k in mapa_depois:
            dups.append(k)
        mapa_depois[k] = r

    alterados = []
    for k, ra in mapa_antes.items():
        rb = mapa_depois.get(k)
        if rb is None:
            continue
        for campo in CAMPOS_IMUTAVEIS:
            va, vb = ra.get(campo), rb.get(campo)
            if campo in (
                "peona_estimada",
                "peona_real",
                "diferenca",
                "variacao_mensal",
                "variacao_media",
            ):
                if not _num_eq(va, vb):
                    alterados.append(
                        {"chave": k, "campo": campo, "antes": va, "depois": vb}
                    )
            else:
                if (va or None) != (vb or None) and str(va or "") != str(vb or ""):
                    alterados.append(
                        {"chave": k, "campo": campo, "antes": va, "depois": vb}
                    )

    excluidos = [k for k in mapa_antes if k not in mapa_depois]
    ok = len(alterados) == 0 and len(excluidos) == 0 and len(dups) == 0
    return {
        "ok": ok,
        "n_alterados": len(alterados),
        "n_excluidos": len(excluidos),
        "n_duplicidades": len(dups),
        "alterados": alterados[:20],
        "excluidos": excluidos[:20],
        "duplicidades": dups[:20],
    }


class HistoricoImmutavelError(RuntimeError):
    pass


def seed_historico_inicial(forcar: bool = False) -> dict:
    existente = carregar_historico()
    if existente and not forcar:
        return {
            "acao": "ja_existia",
            "n_registros": len(existente),
            "mensagem": "Histórico já existe — carga inicial não sobrescrita.",
        }

    pack = montar_consistencia_oficial()
    agora = _now_iso()
    regs = []
    for r in pack.get("registros") or []:
        if r.get("periodo_resumo"):
            continue
        if r.get("tipo") not in ("MH", "OD"):
            continue
        if r.get("pendente") or r.get("variacao_mensal") is None:
            continue
        regs.append(
            _para_registro_historico(
                r,
                peona_comp=_shift_months(r["competencia"], 3),
                data_inclusao=agora,
            )
        )

    mapa = {}
    for r in regs:
        mapa[chave(r)] = r
    regs = list(mapa.values())

    if existente and forcar:
        _backup(existente)

    salvar_historico(regs)
    _audit(
        {
            "evento": "seed_inicial",
            "em": agora,
            "n_registros": len(regs),
            "versao_metodologia": VERSAO_METODOLOGIA,
            "forcar": forcar,
        }
    )
    return {
        "acao": "seed",
        "n_registros": len(regs),
        "mensagem": f"Carga inicial gravada com {len(regs)} testes bloqueados.",
    }


def _media_janela_do_historico(
    hist: list[dict], tipo: str, comp: str, n: int, var_nova: float, janela: str
) -> float | None:
    comps = []
    y, m = map(int, comp.split("-")[:2])
    for _ in range(n):
        comps.append(f"{y:04d}-{m:02d}-01")
        m -= 1
        if m == 0:
            m = 12
            y -= 1
    comps = list(reversed(comps))

    mapa = {
        (r.get("tipo"), r.get("competencia"), r.get("janela") or _janela_para(r.get("competencia") or "")): r.get(
            "variacao_mensal"
        )
        for r in hist
        if r.get("tipo") == tipo
    }
    vals = []
    for c in comps:
        if c == comp:
            vals.append(var_nova)
            continue
        v = mapa.get((tipo, c, janela))
        if v is None:
            return None
        vals.append(float(v))
    return sum(vals) / len(vals) if vals else None


def _candidato_fonte(
    pack_regs: list[dict], comp: str, tipo: str, janela: str
) -> dict | None:
    for r in pack_regs:
        if (
            r.get("competencia") == comp
            and r.get("tipo") == tipo
            and (r.get("janela") or _janela_para(comp)) == janela
            and not r.get("periodo_resumo")
        ):
            return r
    return None


def _enriquecer_novo(rec_fonte: dict, hist: list[dict]) -> dict:
    comp = rec_fonte["competencia"]
    tipo = rec_fonte["tipo"]
    janela = rec_fonte.get("janela") or _janela_para(comp)
    n = 12 if janela == "12m" else 6
    estimada = rec_fonte.get("peona_estimada", rec_fonte.get("peona"))
    real = rec_fonte.get("peona_real", rec_fonte.get("runoff_puro"))
    var = rec_fonte.get("variacao_mensal")
    if var is None:
        var = _variacao_sinal(estimada, real)

    pendente = False
    motivo = None
    if estimada is not None and (real is None or real == 0 or var is None):
        pendente = True
        motivo = "Teste ainda não disponível na fonte oficial."

    media = None
    if not pendente and var is not None:
        if janela == "12m" and comp <= CORTE_METODOLOGIA:
            media = None
        else:
            media = _media_janela_do_historico(hist, tipo, comp, n, var, janela)

    st_m = _class_ans(None if pendente else var, ANS_MENSAL_INF, ANS_MENSAL_SUP)
    if pendente:
        st_a = _class_ans(None, ANS_MEDIA_INF, ANS_MEDIA_SUP)
    elif media is None:
        st_a = {
            "codigo": "nao_disponivel",
            "rotulo": "Não disponível",
            "mensagem": "Variação média da janela não disponível na fonte oficial.",
        }
    else:
        st_a = _class_ans(media, ANS_MEDIA_INF, ANS_MEDIA_SUP)

    cons = _status_consolidado(pendente, motivo, st_m, st_a, comp)

    base = {
        **rec_fonte,
        "janela": janela,
        "janela_meses": n,
        "peona_estimada": estimada,
        "peona_real": real,
        "peona": estimada,
        "runoff_puro": real,
        "diferenca": (estimada - real)
        if estimada is not None and real is not None
        else rec_fonte.get("diferenca"),
        "variacao_mensal": var,
        "diferenca_pct": var,
        "variacao_media": media,
        "media_completa": media is not None,
        "status_mensal_ans": st_m["codigo"],
        "status_mensal_rotulo": st_m["rotulo"],
        "status_media_ans": st_a["codigo"],
        "status_media_rotulo": st_a["rotulo"],
        "pendente": pendente,
        **cons,
    }
    if pendente:
        base["status"] = "nao_executado"
        base["status_rotulo"] = "Pendente"
    return base


def complementar_registros_faltantes(hist: list[dict], fonte_regs: list[dict]) -> list[dict]:
    """
    Acrescenta chaves (comp, tipo, janela) que existem na fonte e ainda não
    estão no histórico bloqueado. Não altera nem preenche lacunas de registros
    já existentes.
    """
    mapa = {chave(r): r for r in hist}
    acrescentados = []
    agora = _now_iso()
    for cand in fonte_regs:
        if cand.get("periodo_resumo") or cand.get("tipo") not in ("MH", "OD"):
            continue
        if cand.get("pendente") or cand.get("variacao_mensal") is None:
            continue
        janela = cand.get("janela") or cand.get("janela_bloco") or _janela_para(
            cand["competencia"]
        )
        k = (cand["competencia"], cand["tipo"], janela)
        if k in mapa:
            continue
        enriquecido = _enriquecer_novo({**cand, "janela": janela}, hist + acrescentados)
        if enriquecido.get("pendente") or enriquecido.get("variacao_mensal") is None:
            continue
        novo = _para_registro_historico(
            enriquecido,
            peona_comp=_shift_months(cand["competencia"], DEFASAGEM_TESTE_MESES),
            data_inclusao=agora,
        )
        acrescentados.append(novo)
        mapa[k] = novo
    return acrescentados


def processar_nova_peona(
    peona_comp: str | None = None,
    *,
    caminho_input: Path | None = None,
    caminho_acomp: Path | None = None,
) -> dict:
    seed_info = seed_historico_inicial(forcar=False)
    hist = carregar_historico()
    antes = deepcopy(hist)

    pack = montar_consistencia_oficial(caminho_input, caminho_acomp)
    fonte_regs = pack.get("registros") or []

    # Complementa janelas faltantes (ex.: 12m a partir de out/2025) sem tocar nos existentes
    extra = complementar_registros_faltantes(hist, fonte_regs)
    if extra:
        hist.extend(extra)

    if not peona_comp:
        comps = [r["competencia"] for r in fonte_regs if r.get("competencia")]
        peona_comp = _shift_months(max(comps), 3) if comps else None

    if not peona_comp:
        raise HistoricoImmutavelError(
            "Não foi possível determinar a competência da PEONA."
        )

    teste_comp = _shift_months(peona_comp, -3)
    # A partir de out/2025 há duas janelas elegíveis em paralelo (6m e 12m)
    janelas_elegiveis = (
        ["12m"] if teste_comp <= CORTE_METODOLOGIA else ["6m", "12m"]
    )

    mapa = {chave(r): r for r in hist}
    novos = list(extra)  # inclusões complementares (ex.: 12m) já são "novos"
    duplicidades = []
    segmentos_incluidos = []
    mensagens = []
    for e in extra:
        mensagens.append(
            f"{e.get('tipo')} {e.get('competencia')} ({e.get('janela')}): "
            "janela complementar incluida no historico."
        )
        if e.get("tipo") and e["tipo"] not in segmentos_incluidos:
            segmentos_incluidos.append(e["tipo"])

    for tipo in ("MH", "OD"):
        for janela in janelas_elegiveis:
            k = (teste_comp, tipo, janela)
            if k in mapa:
                duplicidades.append(k)
                mensagens.append(
                    f"{tipo} {teste_comp} ({janela}): Teste ja existente - historico preservado."
                )
                continue

            cand = _candidato_fonte(fonte_regs, teste_comp, tipo, janela)
            if (
                cand is None
                or cand.get("variacao_mensal") is None
                or cand.get("pendente")
            ):
                mensagens.append(
                    f"{tipo} {teste_comp} ({janela}): sem teste elegivel na fonte - nenhum registro acrescentado."
                )
                continue

            enriquecido = _enriquecer_novo(cand, hist)
            if (
                enriquecido.get("pendente")
                or enriquecido.get("variacao_mensal") is None
            ):
                mensagens.append(
                    f"{tipo} {teste_comp} ({janela}): teste ainda nao disponivel - nao incluido."
                )
                continue

            novo = _para_registro_historico(
                enriquecido, peona_comp=peona_comp, data_inclusao=_now_iso()
            )
            hist.append(novo)
            mapa[k] = novo
            novos.append(novo)
            if tipo not in segmentos_incluidos:
                segmentos_incluidos.append(tipo)
            mensagens.append(f"{tipo} {teste_comp} ({janela}): novo teste incluido.")

    valid = validar_imutabilidade(antes, hist)
    if not valid["ok"]:
        _audit(
            {
                "evento": "ABORTADO_imutabilidade",
                "em": _now_iso(),
                "peona_comp": peona_comp,
                "teste_comp": teste_comp,
                "validacao": valid,
            }
        )
        raise HistoricoImmutavelError(
            "Atualização interrompida: histórico imutável violado. "
            f"alterados={valid['n_alterados']} excluídos={valid['n_excluidos']} "
            f"duplicidades={valid['n_duplicidades']}"
        )

    seen = set()
    dups_final = []
    for r in hist:
        k = chave(r)
        if k in seen:
            dups_final.append(k)
        seen.add(k)
    if dups_final:
        raise HistoricoImmutavelError(
            f"Duplicidades detectadas no histórico: {dups_final[:5]}"
        )

    if novos:
        _backup(antes)
        salvar_historico(hist)

    relatorio = {
        "peona_processada": peona_comp,
        "competencia_teste": teste_comp,
        "janelas": janelas_elegiveis,
        "novos_incluidos": len(novos),
        "segmentos_incluidos": segmentos_incluidos,
        "registros_historicos_preservados": len(antes),
        "registros_historicos_alterados": 0,
        "registros_historicos_excluidos": 0,
        "duplicidades_encontradas": len(duplicidades),
        "total_historico": len(hist),
        "seed": seed_info,
        "mensagens": mensagens,
        "erros": [],
    }
    _audit({"evento": "processar_nova_peona", "em": _now_iso(), **relatorio})
    return {
        "historico": hist,
        "novos": novos,
        "relatorio": relatorio,
        "meta_fonte": pack.get("meta") or {},
    }


def montar_consistencia_do_historico(peona_comp: str | None = None) -> dict:
    result = processar_nova_peona(peona_comp)
    hist = result["historico"]
    meta_fonte = result["meta_fonte"]
    rel = result["relatorio"]

    pack_aux = montar_consistencia_oficial()
    acomp = pack_aux.get("acompanhamento_total") or []

    meta = {
        **(meta_fonte or {}),
        "fonte_consistencia": "historico_imutavel",
        "arquivo_historico_csv": ARQ_CSV.name,
        "arquivo_historico_json": ARQ_JSON.name,
        "versao_metodologia": VERSAO_METODOLOGIA,
        "relatorio_processamento": rel,
        "n_historico_bloqueado": len(hist),
        "imutavel": True,
    }
    return {
        "registros": hist,
        "acompanhamento_total": acomp,
        "meta": meta,
        "relatorio": rel,
    }


def imprimir_relatorio(rel: dict) -> None:
    def mm(iso: str | None) -> str:
        if not iso:
            return "—"
        y, m = iso.split("-")[:2]
        meses = [
            "jan",
            "fev",
            "mar",
            "abr",
            "mai",
            "jun",
            "jul",
            "ago",
            "set",
            "out",
            "nov",
            "dez",
        ]
        return f"{meses[int(m) - 1]}/{y}"

    segs = rel.get("segmentos_incluidos") or []
    seg_txt = (
        " e ".join(
            "Médico-Hospitalar" if s == "MH" else "Odontológico" for s in segs
        )
        or "—"
    )
    print("-- Relatorio - Teste de Consistencia (historico imutavel) --")
    print(f"PEONA processada: {mm(rel.get('peona_processada'))}")
    print(f"Competencia do teste: {mm(rel.get('competencia_teste'))}")
    print(f"Novos testes incluidos: {rel.get('novos_incluidos', 0)}")
    print(f"Segmentos: {seg_txt}")
    print(
        f"Registros historicos preservados: {rel.get('registros_historicos_preservados', 0)}"
    )
    print(
        f"Registros historicos alterados: {rel.get('registros_historicos_alterados', 0)}"
    )
    print(
        f"Registros historicos excluidos: {rel.get('registros_historicos_excluidos', 0)}"
    )
    print(f"Duplicidades encontradas: {rel.get('duplicidades_encontradas', 0)}")
    for m in rel.get("mensagens") or []:
        print(f"  - {m}")


if __name__ == "__main__":
    import argparse

    ap = argparse.ArgumentParser(
        description="Histórico imutável do Teste de Consistência"
    )
    ap.add_argument("--seed", action="store_true", help="Força carga inicial")
    ap.add_argument("--peona", default=None, help="Competência da PEONA YYYY-MM-01")
    ap.add_argument("--validar", action="store_true", help="Valida imutabilidade")
    args = ap.parse_args()

    if args.seed:
        print(seed_historico_inicial(forcar=True))
    elif args.validar:
        h1 = carregar_historico()
        v = validar_imutabilidade(h1, h1)
        print(v)
        raise SystemExit(0 if v["ok"] else 1)
    else:
        out = processar_nova_peona(args.peona)
        imprimir_relatorio(out["relatorio"])
        print(f"Total no histórico: {len(out['historico'])}")
