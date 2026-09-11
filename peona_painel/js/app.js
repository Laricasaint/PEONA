/* Painel executivo PEONA — apenas exibe window.PEONA_DATA (saídas R + planilha) */
(function () {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));
  const charts = {};
  const state = {
    tab: "visao",
    ano: null,
    modo: "mes",
    competencia: null,
    meses: [],
    consistSeg: "MH",
    consistJanela: 6,
    consistChart: "mensal",
    evoSeg: "total",
    evoChartMode: "valor",
    mhJanela: 6,
    odJanela: 6,
    roJanela: 6,
    roSeg: "MH",
    fonteTecnica: {},
    vgFocusComp: null,
    vgHoverComp: null,
  };

  function D() {
    if (!window.PEONA_DATA) throw new Error("Dados não carregados.");
    return window.PEONA_DATA;
  }
  function brl(v) {
    if (v == null || Number.isNaN(Number(v))) return "—";
    return Number(v).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  function pct(v, c = 2) {
    if (v == null || Number.isNaN(Number(v))) return "—";
    return (Number(v) * 100).toLocaleString("pt-BR", {
      minimumFractionDigits: c,
      maximumFractionDigits: c,
    }) + "%";
  }
  function mmAAAA(iso) {
    if (!iso) return "—";
    const [y, m] = iso.slice(0, 10).split("-");
    return `${m}/${y}`;
  }
  function esc(s) {
    return String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }
  function clsNum(v) {
    if (v == null || Number.isNaN(v)) return "";
    return v >= 0 ? "pos" : "neg";
  }
  function icon(st) {
    return {
      consistente: "✓",
      nao_consistente: "✕",
      nao_executado: "–",
      nao_avaliavel: "–",
      pendente: "–",
      aprovado: "✓",
      aprovado_ressalvas: "!",
      reprovado: "✕",
      executado: "●",
    }[st] || "•";
  }
  function badge(st, rotulo) {
    const map = {
      consistente: "badge-ok",
      nao_consistente: "badge-err",
      nao_executado: "badge-na",
      nao_avaliavel: "badge-na",
      pendente: "badge-warn",
      aprovado: "badge-ok",
      aprovado_ressalvas: "badge-warn",
      reprovado: "badge-err",
      executado: "badge-info",
    };
    return `<span class="badge ${map[st] || "badge-info"}">${icon(st)} ${esc(rotulo)}</span>`;
  }

  function comps() {
    return D().meta.competencias_disponiveis || [];
  }
  function anos() {
    return [...new Set(comps().map((c) => c.slice(0, 4)))].sort();
  }
  function mesesAno(a) {
    return comps().filter((c) => c.startsWith(String(a)));
  }
  function row(c) {
    return D().consolidado_6m.find((r) => r.competencia === c);
  }
  function prev(c) {
    const list = comps();
    const i = list.indexOf(c);
    return i > 0 ? row(list[i - 1]) : null;
  }
  function ref() {
    return state.meses.slice().sort().at(-1) || state.competencia;
  }
  function filtrados() {
    const sorted = mesesOrdenados();
    if ((state.modo === "intervalo" || state.modo === "ano") && sorted.length >= 2) {
      const lo = sorted[0];
      const hi = sorted.at(-1);
      const set = new Set(comps().filter((c) => c >= lo && c <= hi));
      return D().consolidado_6m.filter((r) => set.has(r.competencia));
    }
    const set = new Set(state.meses);
    return D().consolidado_6m.filter((r) => set.has(r.competencia));
  }

  function statusConsist(comp, tipo) {
    // Série oficial híbrida: um registro por competência/segmento (janela oficial).
    const all = (D().consistencia || []).filter(
      (r) =>
        r.competencia === comp &&
        !r.periodo_resumo &&
        (r.tipo === "MH" || r.tipo === "OD")
    );
    const oficiais = all.filter((r) => r.janela_oficial);
    const pool = oficiais.length ? oficiais : all;
    if (tipo === "TOTAL") {
      const mh = pool.find((r) => r.tipo === "MH");
      const od = pool.find((r) => r.tipo === "OD");
      if (!mh && !od)
        return {
          status: "nao_executado",
          rotulo: "Não disponível",
          mensagem: "Teste não disponível para a competência selecionada.",
        };
      const partes = [mh, od].filter(Boolean);
      const detalhe = (r) => `${r.tipo}: ${r.status_mensagem || r.status_rotulo}`;
      if (partes.some((r) => r.status === "nao_executado" || r.pendente))
        return {
          status: "nao_executado",
          rotulo: "Pendente",
          mensagem: partes.map(detalhe).join(" · "),
        };
      if (partes.some((r) => r.status === "nao_avaliavel"))
        return {
          status: "nao_avaliavel",
          rotulo: "Não avaliável",
          mensagem: partes.map(detalhe).join(" · "),
        };
      if (partes.every((r) => r.status === "consistente"))
        return {
          status: "consistente",
          rotulo: "Consistente",
          mensagem: partes.map(detalhe).join(" · "),
        };
      return {
        status: "nao_consistente",
        rotulo: "Não consistente",
        mensagem: partes.map(detalhe).join(" · "),
      };
    }
    const r = pool.find((x) => x.tipo === tipo);
    if (!r)
      return {
        status: "nao_executado",
        rotulo: "Não disponível",
        mensagem: "Teste não disponível para a competência selecionada.",
      };
    return { status: r.status, rotulo: r.status_rotulo, mensagem: r.status_mensagem };
  }

  function destroyChart(key) {
    if (charts[key]) {
      charts[key].destroy();
      delete charts[key];
    }
  }

  /** Ajusta o canvas em px inteiros + DPR alto (Windows 125%/150%). */
  function queueChartSharpen(keys) {
    const dpr = Math.max(window.devicePixelRatio || 1, 2);
    const run = () => {
      (keys || Object.keys(charts)).forEach((k) => {
        const ch = charts[k];
        if (!ch || typeof ch.resize !== "function") return;
        const canvas = ch.canvas;
        const parent = canvas?.parentElement;
        if (parent) {
          const rect = parent.getBoundingClientRect();
          const w = Math.max(1, Math.floor(rect.width));
          const h = Math.max(1, Math.floor(rect.height));
          canvas.style.width = `${w}px`;
          canvas.style.height = `${h}px`;
        }
        if (ch.options) ch.options.devicePixelRatio = dpr;
        ch.resize();
      });
    };
    requestAnimationFrame(() => requestAnimationFrame(run));
  }

  function syncVgEvoLegend(serieLabel, visible) {
    const wrap = $("#vg-evolucao-wrap");
    if (!wrap) return;
    let el = $("#vg-evo-legend");
    if (!el) {
      el = document.createElement("div");
      el.id = "vg-evo-legend";
      el.className = "vg-evo-legend";
      el.setAttribute("aria-hidden", "false");
      wrap.insertAdjacentElement("afterend", el);
    }
    if (!visible) {
      el.hidden = true;
      el.setAttribute("aria-hidden", "true");
      return;
    }
    el.hidden = false;
    el.setAttribute("aria-hidden", "false");
    el.innerHTML = `
      <span class="vg-evo-leg-item"><i class="vg-evo-swatch serie" aria-hidden="true"></i>${esc(serieLabel)}</span>
      <span class="vg-evo-leg-item"><i class="vg-evo-swatch media" aria-hidden="true"></i>Média do período</span>`;
  }

  const MESES_ABR_TL = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  let timelineDrag = null;
  let timelineBuilt = false;

  function initFiltros() {
    const a = anos();
    $("#filtro-ano").innerHTML = a.map((x) => `<option value="${x}">${x}</option>`).join("");
    const recente = D().meta.competencia_mais_recente;
    state.ano = recente.slice(0, 4);
    state.competencia = recente;
    state.meses = [recente];
    state.modo = "mes";
    $("#filtro-ano").value = state.ano;
    $("#filtro-modo").value = "mes";
    preencherMeses();
    $("#filtro-mes").value = recente;
    $("#filtro-ini").value = recente.slice(0, 7);
    $("#filtro-fim").value = recente.slice(0, 7);
    renderTimeline(true);
    syncTimelineUI();
  }

  function preencherMeses() {
    const m = mesesAno(state.ano);
    $("#filtro-mes").innerHTML = m.map((c) => `<option value="${c}">${mmAAAA(c)}</option>`).join("");
  }

  function mesesOrdenados() {
    return (state.meses || []).slice().sort((a, b) => a.localeCompare(b));
  }
  /** Normaliza valor de <input type="month"> (YYYY-MM) para competência ISO. */
  function ymToComp(ym) {
    const m = String(ym || "").trim().match(/^(\d{4})-(\d{1,2})/);
    if (!m) return null;
    return `${m[1]}-${String(m[2]).padStart(2, "0")}-01`;
  }
  function periodLabelText() {
    const modo = state.modo || $("#filtro-modo").value || "mes";
    if (modo === "ano") return `Ano ${state.ano || ""}`.trim();
    const sorted = mesesOrdenados();
    if (modo === "intervalo" && sorted.length > 1) {
      return `${mmAbr(sorted[0])} a ${mmAbr(sorted.at(-1))}`;
    }
    return mmAbr(state.competencia || sorted[0]);
  }

  function syncTimelineUI() {
    const modo = $("#filtro-modo").value || state.modo || "mes";
    state.modo = modo;
    $("#box-mes").classList.toggle("hidden", modo !== "mes");
    $("#box-ini").classList.toggle("hidden", modo !== "intervalo");
    $("#box-fim").classList.toggle("hidden", modo !== "intervalo");
    const lab = $("#period-selected-label");
    if (lab) lab.textContent = periodLabelText();
    updateTimelineSelection();
  }

  function groupCompsByYear() {
    const years = anos();
    /* Ano completo no slicer (jan–dez): meses sem PEONA ficam desabilitados
       até a próxima atualização — ex.: ago–dez/2026 já aparecem para seleção futura. */
    return years.map((year) => {
      const months = [];
      for (let m = 1; m <= 12; m++) {
        months.push(`${year}-${String(m).padStart(2, "0")}-01`);
      }
      return [year, months];
    });
  }

  function competenciaDisponivel(comp) {
    return comps().includes(comp);
  }

  function tooltipTimeline(comp) {
    const r = row(comp);
    const disponivel = competenciaDisponivel(comp);
    const modo = state.modo || "mes";
    const tipo =
      modo === "ano" ? "Ano completo" : modo === "intervalo" ? "Intervalo de meses" : "Mês específico";
    const valor = r ? `PEONA: ${brl(r.peona_total)}` : "Sem PEONA carregada";
    return [
      `Competência ${mmAbr(comp)}`,
      disponivel ? "Disponível" : "Indisponível — aguarda atualização",
      `Seleção: ${tipo}`,
      valor,
    ].join("\n");
  }

  function renderTimeline(force) {
    const root = $("#timeline");
    if (!root) return;
    if (timelineBuilt && !force) {
      updateTimelineSelection();
      return;
    }
    const groups = groupCompsByYear();
    root.innerHTML = groups
      .map(([year, months]) => {
        const cols = months
          .map((c) => {
            const mi = Number(c.slice(5, 7)) - 1;
            const label = MESES_ABR_TL[mi] || c.slice(5, 7);
            const disponivel = competenciaDisponivel(c);
            const dis = disponivel ? "" : " disabled";
            return `<div class="timeline-month-col${dis}" data-comp="${c}" title="${esc(tooltipTimeline(c))}">
              <span class="timeline-month">${label}</span>
              <span class="timeline-segment" aria-hidden="true"></span>
            </div>`;
          })
          .join("");
        return `<div class="timeline-year-block" data-year="${year}">
          <button type="button" class="timeline-year" data-year="${year}" title="Selecionar ano ${year}">${year}</button>
          <div class="timeline-months">${cols}</div>
        </div>`;
      })
      .join("");
    timelineBuilt = true;
    updateTimelineSelection();
    scrollTimelineToSelection();
  }

  function updateTimelineSelection() {
    const sorted = mesesOrdenados();
    const ini = sorted[0];
    const fim = sorted.at(-1);
    const multi = sorted.length > 1;
    const selected = new Set(
      multi && ini && fim
        ? comps().filter((c) => c >= ini && c <= fim)
        : sorted
    );
    $$("#timeline .timeline-month-col").forEach((el) => {
      const c = el.dataset.comp;
      const on = selected.has(c);
      const seg = el.querySelector(".timeline-segment");
      el.classList.toggle("selected-single", on && !multi);
      el.classList.toggle("range-start", multi && c === ini);
      el.classList.toggle("range-end", multi && c === fim);
      if (seg) {
        seg.classList.toggle("selected", on && !multi);
        seg.classList.toggle("in-range", on && multi);
      }
      el.title = tooltipTimeline(c);
    });
  }

  function scrollTimelineToSelection() {
    const scroll = $("#timeline-scroll");
    const target =
      $("#timeline .timeline-month-col.selected-single") ||
      $("#timeline .timeline-month-col.range-end") ||
      $("#timeline .timeline-month-col.range-start");
    if (!scroll || !target) return;
    /* Se a timeline cabe inteira, não rolar — evita parecer desalinhada */
    if (scroll.scrollWidth <= scroll.clientWidth + 1) {
      scroll.scrollLeft = 0;
      return;
    }
    const sr = scroll.getBoundingClientRect();
    const tr = target.getBoundingClientRect();
    if (tr.left < sr.left || tr.right > sr.right) {
      const delta = tr.left + tr.width / 2 - (sr.left + sr.width / 2);
      scroll.scrollLeft += delta;
    }
  }

  function applyCompetenciaMes(comp) {
    state.ano = comp.slice(0, 4);
    $("#filtro-ano").value = state.ano;
    $("#filtro-modo").value = "mes";
    preencherMeses();
    $("#filtro-mes").value = comp;
    $("#filtro-ini").value = comp.slice(0, 7);
    $("#filtro-fim").value = comp.slice(0, 7);
    aplicarFiltros();
  }

  function applyIntervalo(a, b) {
    const ini = a <= b ? a : b;
    const fim = a <= b ? b : a;
    const range = comps().filter((c) => c >= ini && c <= fim);
    state.ano = fim.slice(0, 4);
    state.modo = "intervalo";
    state.meses = range;
    state.competencia = range.at(-1) || fim;
    state.vgFocusComp = null;
    state.vgHoverComp = null;
    $("#filtro-ano").value = state.ano;
    $("#filtro-modo").value = "intervalo";
    $("#filtro-ini").value = ini.slice(0, 7);
    $("#filtro-fim").value = fim.slice(0, 7);
    preencherMeses();
    $("#filtro-mes").value = state.competencia;
    if (!range.length) {
      $("#alerta-periodo").textContent = "Intervalo sem competências disponíveis.";
      $("#alerta-periodo").classList.remove("hidden");
    } else {
      $("#alerta-periodo").classList.add("hidden");
    }
    syncTimelineUI();
    render();
  }

  function applyAnoCompleto(year) {
    const disp = mesesAno(year);
    if (!disp.length) return;
    state.ano = year;
    $("#filtro-ano").value = year;
    $("#filtro-modo").value = "ano";
    preencherMeses();
    $("#filtro-mes").value = disp.at(-1);
    $("#filtro-ini").value = disp[0].slice(0, 7);
    $("#filtro-fim").value = disp.at(-1).slice(0, 7);
    aplicarFiltros();
  }

  function aplicarFiltros() {
    $("#alerta-periodo").classList.add("hidden");
    state.vgFocusComp = null;
    state.vgHoverComp = null;
    state.ano = $("#filtro-ano").value;
    state.modo = $("#filtro-modo").value;
    const disp = mesesAno(state.ano);

    if (!disp.length && state.modo !== "intervalo") {
      state.meses = [];
      state.competencia = null;
      $("#alerta-periodo").textContent = "Não há competências com PEONA neste ano.";
      $("#alerta-periodo").classList.remove("hidden");
      syncTimelineUI();
      render();
      return;
    }

    if (state.modo === "mes") {
      let c = $("#filtro-mes").value;
      if (!disp.includes(c)) c = disp.at(-1);
      $("#filtro-mes").value = c;
      state.meses = [c];
      state.competencia = c;
    } else if (state.modo === "ano") {
      state.meses = disp.slice();
      state.competencia = disp.at(-1);
      $("#filtro-mes").value = state.competencia;
      $("#filtro-ini").value = disp[0].slice(0, 7);
      $("#filtro-fim").value = state.competencia.slice(0, 7);
    } else {
      const ini = ymToComp($("#filtro-ini").value);
      const fim = ymToComp($("#filtro-fim").value);
      const lo = ini && fim ? (ini <= fim ? ini : fim) : ini || fim;
      const hi = ini && fim ? (ini <= fim ? fim : ini) : fim || ini;
      const range =
        lo && hi ? comps().filter((c) => c >= lo && c <= hi) : [];
      if (!range.length) {
        state.meses = [];
        state.competencia = null;
        $("#alerta-periodo").textContent = "Intervalo sem competências disponíveis.";
        $("#alerta-periodo").classList.remove("hidden");
        syncTimelineUI();
        render();
        return;
      }
      state.meses = range;
      state.competencia = range.at(-1);
      state.ano = state.competencia.slice(0, 4);
      $("#filtro-ano").value = state.ano;
      $("#filtro-ini").value = range[0].slice(0, 7);
      $("#filtro-fim").value = range.at(-1).slice(0, 7);
    }
    syncTimelineUI();
    render();
  }

  function irRecente() {
    const c = D().meta.competencia_mais_recente;
    state.ano = c.slice(0, 4);
    state.modo = "mes";
    state.meses = [c];
    state.competencia = c;
    state.vgFocusComp = null;
    state.vgHoverComp = null;
    $("#filtro-ano").value = state.ano;
    $("#filtro-modo").value = "mes";
    preencherMeses();
    $("#filtro-mes").value = c;
    $("#filtro-ini").value = c.slice(0, 7);
    $("#filtro-fim").value = c.slice(0, 7);
    $("#alerta-periodo").classList.add("hidden");
    syncTimelineUI();
    scrollTimelineToSelection();
    render();
  }

  function setTab(tab) {
    state.tab = tab;
    document.body.classList.toggle("hide-period", tab === "metodologia" || tab === "input");
    $$(".tabs .tab").forEach((b) => {
      const on = b.dataset.tab === tab;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
      if (on) {
        try {
          b.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
        } catch (_) { /* ignore */ }
      }
    });
    $$(".panel").forEach((p) => p.classList.toggle("active", p.id === `tab-${tab}`));
    render();
  }

  function bindTimeline() {
    const root = $("#timeline");
    if (!root) return;
    let suppressClick = false;

    root.addEventListener("click", (e) => {
      if (suppressClick) {
        suppressClick = false;
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      const yearBtn = e.target.closest(".timeline-year");
      if (yearBtn) {
        e.preventDefault();
        applyAnoCompleto(yearBtn.dataset.year);
        return;
      }
      const col = e.target.closest(".timeline-month-col");
      if (!col || col.classList.contains("disabled")) return;
      const comp = col.dataset.comp;
      if (e.shiftKey && (mesesOrdenados()[0] || state.competencia)) {
        applyIntervalo(mesesOrdenados()[0] || state.competencia, comp);
      } else {
        applyCompetenciaMes(comp);
      }
    });

    root.addEventListener("mousedown", (e) => {
      const col = e.target.closest(".timeline-month-col");
      if (!col || col.classList.contains("disabled") || e.button !== 0 || e.target.closest(".timeline-year")) return;
      timelineDrag = { start: col.dataset.comp, end: col.dataset.comp, moved: false };
    });

    document.addEventListener("mousemove", (e) => {
      if (!timelineDrag) return;
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const col = el && el.closest ? el.closest(".timeline-month-col") : null;
      if (!col || col.classList.contains("disabled")) return;
      if (col.dataset.comp !== timelineDrag.end) {
        timelineDrag.end = col.dataset.comp;
        timelineDrag.moved = timelineDrag.end !== timelineDrag.start;
        const a = timelineDrag.start;
        const b = timelineDrag.end;
        const lo = a <= b ? a : b;
        const hi = a <= b ? b : a;
        const preview = new Set(comps().filter((c) => c >= lo && c <= hi));
        $$("#timeline .timeline-month-col").forEach((node) => {
          const c = node.dataset.comp;
          const on = preview.has(c);
          const seg = node.querySelector(".timeline-segment");
          node.classList.toggle("range-start", on && c === lo && preview.size > 1);
          node.classList.toggle("range-end", on && c === hi && preview.size > 1);
          node.classList.toggle("selected-single", on && preview.size === 1);
          if (seg) {
            seg.classList.toggle("selected", on && preview.size === 1);
            seg.classList.toggle("in-range", on && preview.size > 1);
          }
        });
      }
    });

    document.addEventListener("mouseup", () => {
      if (!timelineDrag) return;
      const { start, end, moved } = timelineDrag;
      timelineDrag = null;
      if (moved && start && end && start !== end) {
        suppressClick = true;
        applyIntervalo(start, end);
      }
    });
  }

  /* ---------- Visão Geral ---------- */
  const MESES_PT = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ];
  const EVO_CFG = {
    total: {
      key: "peona_total",
      varKey: "variacao_r_total",
      pctKey: "variacao_pct_total",
      label: "Consolidado",
    },
    mh: {
      key: "peona_mh",
      varKey: "variacao_r_mh",
      pctKey: "variacao_pct_mh",
      label: "Médico-Hospitalar",
    },
    od: {
      key: "peona_od",
      varKey: "variacao_r_od",
      pctKey: "variacao_pct_od",
      label: "Odontológico",
    },
  };

  function mesNome(iso) {
    if (!iso) return "—";
    return MESES_PT[Number(iso.slice(5, 7)) - 1] || "—";
  }
  function mmAbr(iso) {
    if (!iso) return "—";
    const nomes = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    return `${nomes[Number(iso.slice(5, 7)) - 1]}/${iso.slice(0, 4)}`;
  }
  /** Eixo de gráficos: jan/26 (mais curto para fonte maior). */
  function mmCurto(iso) {
    if (!iso) return "—";
    const nomes = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    return `${nomes[Number(iso.slice(5, 7)) - 1]}/${iso.slice(2, 4)}`;
  }
  const CHART_FONT = "General Sans, Segoe UI, Arial, sans-serif";
  function chartFont(size, weight = "400") {
    return { family: CHART_FONT, size, weight };
  }
  function brlMi(v, dig = 1) {
    if (v == null || Number.isNaN(Number(v))) return "—";
    return (
      "R$ " +
      (Number(v) / 1e6).toLocaleString("pt-BR", {
        minimumFractionDigits: dig,
        maximumFractionDigits: dig,
      }) +
      " mi"
    );
  }
  function brlMilhoes(v, dig = 1) {
    if (v == null || Number.isNaN(Number(v))) return "—";
    return (
      "R$ " +
      (Number(v) / 1e6).toLocaleString("pt-BR", {
        minimumFractionDigits: dig,
        maximumFractionDigits: dig,
      }) +
      " milhões"
    );
  }
  /** Aumento da provisão = maior obrigação (atenção); redução = alívio. */
  function clsProv(v) {
    if (v == null || Number.isNaN(Number(v))) return "";
    if (Number(v) > 0) return "prov-up";
    if (Number(v) < 0) return "prov-down";
    return "";
  }
  function formatAtualizado(iso) {
    if (!iso) return { texto: "Atualizado em —", title: "" };
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) {
      const m = String(iso).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
      if (m) {
        return {
          texto: `Atualizado em ${m[3]}/${m[2]}/${m[1]} às ${m[4]}:${m[5]}`,
          title: iso,
        };
      }
      return { texto: `Atualizado em ${iso}`, title: iso };
    }
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    const hh = String(d.getHours()).padStart(2, "0");
    const mi = String(d.getMinutes()).padStart(2, "0");
    return {
      texto: `Atualizado em ${dd}/${mm}/${yyyy} às ${hh}:${mi}`,
      title: iso,
    };
  }
  function evoPeriodoCurto(rows) {
    if (!rows.length) return "—";
    const a = rows[0].competencia;
    const b = rows[rows.length - 1].competencia;
    if (a === b) return mmAbr(a);
    return `${mmAbr(a)} a ${mmAbr(b)}`;
  }
  function evoSubtitulo(rows) {
    if (!rows.length) return "—";
    const a = rows[0].competencia;
    const b = rows[rows.length - 1].competencia;
    if (a === b) return `Valores apurados em ${mesNome(a)} de ${a.slice(0, 4)}`;
    if (a.slice(0, 4) === b.slice(0, 4)) {
      return `Valores apurados de ${mesNome(a)} a ${mesNome(b)} de ${b.slice(0, 4)}`;
    }
    return `Valores apurados de ${mmAbr(a)} a ${mmAbr(b)}`;
  }
  function motivoConsist(msg) {
    if (!msg) return "Resultado não localizado na planilha";
    if (/janela incompleta/i.test(msg)) return "Janela mínima ainda não disponível";
    return msg;
  }
  function statusRumoIpasgo(row) {
    if (!row || row.peona_rumo == null || row.peona_ipasgo == null) {
      return { rotulo: "Não disponível", detalhe: "Comparação não disponível para a competência" };
    }
    if (row.variacao_pct == null) {
      return { rotulo: "Disponível", detalhe: brl(row.diferenca) };
    }
    if (Math.abs(row.variacao_pct) < 1e-6) {
      return { rotulo: "Próximo", detalhe: pct(row.variacao_pct) };
    }
    if (row.variacao_pct > 0) {
      return { rotulo: "IPASGO acima", detalhe: pct(row.variacao_pct) };
    }
    return { rotulo: "IPASGO abaixo", detalhe: pct(row.variacao_pct) };
  }
  function serieEvolucao(c) {
    let rows = filtrados().slice().sort((a, b) => a.competencia.localeCompare(b.competencia));
    if (rows.length < 2) {
      const anoSerie = D()
        .consolidado_6m.filter((x) => x.competencia.startsWith(c.slice(0, 4)))
        .sort((a, b) => a.competencia.localeCompare(b.competencia));
      if (anoSerie.length >= 2) rows = anoSerie;
    }
    return rows;
  }

  /** Cápsula de variação com semântica de provisão (↑ obrigação = vermelho). */
  function varPill(pctVal) {
    if (pctVal == null || Number.isNaN(Number(pctVal))) return "";
    const n = Number(pctVal);
    let cls = "stable";
    let ico = "●";
    let txt = pct(0);
    if (n > 0) {
      cls = "up";
      ico = "▲";
      txt = "+" + pct(n);
    } else if (n < 0) {
      cls = "down";
      ico = "▼";
      txt = pct(n); // já inclui sinal negativo via locale
    }
    return `<span class="var-pill ${cls}"><span class="ico">${ico}</span>${txt}</span>`;
  }

  function signedPctLabel(pctVal) {
    if (pctVal == null || Number.isNaN(Number(pctVal))) return "";
    const n = Number(pctVal) * 100;
    const abs = Math.abs(n).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    if (n > 0) return `+${abs}%`;
    if (n < 0) return `-${abs}%`;
    return `0,00%`;
  }
  function brlMiDelta(v, dig = 1) {
    if (v == null || Number.isNaN(Number(v))) return "—";
    const n = Number(v);
    const abs = (Math.abs(n) / 1e6).toLocaleString("pt-BR", {
      minimumFractionDigits: dig,
      maximumFractionDigits: dig,
    });
    if (n > 0) return `+R$ ${abs} mi`;
    if (n < 0) return `-R$ ${abs} mi`;
    return `R$ ${abs} mi`;
  }
  function clsProvVar(v) {
    if (v == null || Number.isNaN(Number(v))) return "prov-stable";
    if (Number(v) > 0) return "prov-up";
    if (Number(v) < 0) return "prov-down";
    return "prov-stable";
  }
  /** Δ e V da PEONA consolidada vs mês imediatamente anterior na série completa. */
  function varMensalPeona(curr) {
    if (!curr || curr.peona_total == null) return { delta: null, pct: null, prevComp: null };
    const p = prev(curr.competencia);
    if (!p || p.peona_total == null || Number(p.peona_total) === 0) {
      return { delta: null, pct: null, prevComp: p?.competencia || null };
    }
    const delta = Number(curr.peona_total) - Number(p.peona_total);
    const pctV = Number(curr.peona_total) / Number(p.peona_total) - 1;
    return { delta, pct: pctV, prevComp: p.competencia };
  }
  function linhasPeriodoIntervalo() {
    const sorted = mesesOrdenados();
    if (sorted.length >= 2) {
      const lo = sorted[0];
      const hi = sorted.at(-1);
      // Intervalo contínuo inclusivo (ini e fim), via comps oficiais
      const fromComps = comps()
        .filter((c) => c >= lo && c <= hi)
        .map((c) => row(c))
        .filter(Boolean);
      if (fromComps.length) return fromComps;
      // Fallback: seleção explícita em state.meses
      return sorted.map((c) => row(c)).filter(Boolean);
    }
    return sorted.map((c) => row(c)).filter(Boolean);
  }
  function comentariosPeriodo(rows) {
    if (!rows || rows.length < 2) return [];
    const ini = rows[0];
    const fim = rows[rows.length - 1];
    const out = [];
    const deltaPer =
      ini.peona_total != null && fim.peona_total != null
        ? Number(fim.peona_total) - Number(ini.peona_total)
        : null;

    if (deltaPer != null) {
      if (deltaPer > 0) {
        out.push({
          tom: "up",
          titulo: "Variação no período",
          texto: `A PEONA aumentou ${brlMiDelta(deltaPer)} entre ${mmAbr(ini.competencia)} e ${mmAbr(fim.competencia)}.`,
        });
      } else if (deltaPer < 0) {
        out.push({
          tom: "down",
          titulo: "Variação no período",
          texto: `A PEONA reduziu ${brlMi(Math.abs(deltaPer))} entre ${mmAbr(ini.competencia)} e ${mmAbr(fim.competencia)}.`,
        });
      } else {
        out.push({
          tom: "stable",
          titulo: "Variação no período",
          texto: `A PEONA manteve-se estável entre ${mmAbr(ini.competencia)} e ${mmAbr(fim.competencia)}.`,
        });
      }
    }

    const vars = rows
      .map((r) => ({ comp: r.competencia, ...varMensalPeona(r) }))
      .filter((x) => x.delta != null);
    const elevacoes = vars.filter((x) => x.delta > 0);
    if (elevacoes.length) {
      const maior = elevacoes.reduce((a, b) => (b.delta > a.delta ? b : a));
      out.push({
        tom: "peak",
        titulo: "Maior elevação mensal",
        texto: `Ocorreu em ${mmAbr(maior.comp)}${
          maior.delta != null ? ` (${brlMiDelta(maior.delta)})` : ""
        }.`,
      });
    }
    const menor = rows.reduce((a, b) =>
      Number(b.peona_total) < Number(a.peona_total) ? b : a
    );
    const maior = rows.reduce((a, b) =>
      Number(b.peona_total) > Number(a.peona_total) ? b : a
    );
    if (menor && menor.competencia !== maior.competencia) {
      out.push({
        tom: "low",
        titulo: "Menor posição do período",
        texto: `Observada em ${mmAbr(menor.competencia)} (${brlMi(menor.peona_total)}).`,
      });
    }

    if (deltaPer != null && Math.abs(deltaPer) > 1e-6) {
      const dMh =
        ini.peona_mh != null && fim.peona_mh != null
          ? Number(fim.peona_mh) - Number(ini.peona_mh)
          : null;
      if (dMh != null) {
        const share = dMh / deltaPer;
        if (Number.isFinite(share) && Math.abs(share) <= 2) {
          out.push({
            tom: "info",
            titulo: "Composição da variação",
            texto: `O segmento Médico-Hospitalar respondeu por ${pct(share)} da variação total.`,
          });
        }
      }
    }

    const partsOd = rows
      .map((r) => (r.peona_total ? r.peona_od / r.peona_total : null))
      .filter((x) => x != null && Number.isFinite(x));
    if (partsOd.length >= 2) {
      const minOd = Math.min(...partsOd);
      const maxOd = Math.max(...partsOd);
      out.push({
        tom: "info",
        titulo: "Participação odontológica",
        texto: `Permaneceu entre ${pct(minOd)} e ${pct(maxOd)} no período.`,
      });
    }

    return out.slice(0, 3);
  }
  function syncVgPeriodoHighlight(refComp) {
    const focus = state.vgFocusComp;
    const hover = state.vgHoverComp;
    $$("#vg-periodo-tbody tr").forEach((tr) => {
      const comp = tr.dataset.comp;
      tr.classList.toggle("vg-row-atual", comp === refComp);
      tr.classList.toggle("vg-row-focus", !!focus && comp === focus);
      tr.classList.toggle(
        "vg-row-hover",
        !!hover && comp === hover && comp !== focus && comp !== refComp
      );
    });
  }
  function applyVgChartFocus(rows, refComp) {
    const focus = state.vgFocusComp || refComp;
    const evoSeg = state.evoSeg || "total";
    const cfg = EVO_CFG[evoSeg] || EVO_CFG.total;
    if (charts.vgEvo && rows?.length) {
      const ds = charts.vgEvo.data.datasets[0];
      if (ds) {
        ds.pointRadius = rows.map((x) => (x.competencia === focus ? 5 : 2.5));
        ds.pointBackgroundColor = rows.map((x) =>
          x.competencia === focus ? "#007940" : "#FFFFFF"
        );
        ds.pointBorderColor = rows.map((x) =>
          x.competencia === focus ? "#2F302A" : "#007940"
        );
        charts.vgEvo.update("none");
      }
    }
    if (charts.vgVar && rows?.length) {
      const ds = charts.vgVar.data.datasets[0];
      if (ds) {
        const pctVals = rows.map((x) =>
          x[cfg.pctKey] == null ? null : Number(x[cfg.pctKey]) * 100
        );
        ds.backgroundColor = pctVals.map((v, i) => {
          if (v == null) return "#D8D3C8";
          const base =
            v > 0
              ? "rgba(180,35,24,0.72)"
              : v < 0
              ? "rgba(0,121,64,0.72)"
              : "rgba(47,48,42,0.45)";
          if (rows[i].competencia === focus) {
            return v > 0
              ? "rgba(180,35,24,0.95)"
              : v < 0
              ? "rgba(0,121,64,0.95)"
              : "rgba(47,48,42,0.7)";
          }
          return base;
        });
        ds.borderWidth = rows.map((x) => (x.competencia === focus ? 1.5 : 0));
        ds.borderColor = rows.map((x) =>
          x.competencia === focus ? "#2F302A" : "transparent"
        );
        charts.vgVar.update("none");
      }
    }
  }
  function bindVgPeriodoTable(rows, refComp, chartRows) {
    const tbody = $("#vg-periodo-tbody");
    if (!tbody) return;
    tbody.querySelectorAll("tr").forEach((tr) => {
      tr.addEventListener("click", () => {
        const comp = tr.dataset.comp;
        state.vgFocusComp = state.vgFocusComp === comp ? null : comp;
        syncVgPeriodoHighlight(refComp);
        applyVgChartFocus(chartRows || rows, refComp);
        const chart = charts.vgEvo || charts.vgVar;
        if (chart && state.vgFocusComp) {
          const idx = (chartRows || rows).findIndex((x) => x.competencia === state.vgFocusComp);
          if (idx >= 0) {
            const tooltip = chart.tooltip;
            if (tooltip) {
              const meta = chart.getDatasetMeta(0);
              const el = meta?.data?.[idx];
              if (el) {
                chart.setActiveElements([{ datasetIndex: 0, index: idx }]);
                tooltip.setActiveElements([{ datasetIndex: 0, index: idx }], {
                  x: el.x,
                  y: el.y,
                });
                chart.update("none");
              }
            }
          }
        } else if (chart) {
          chart.setActiveElements([]);
          chart.tooltip?.setActiveElements([], { x: 0, y: 0 });
          chart.update("none");
        }
      });
    });
  }
  function renderPeriodoDetalhe(refComp) {
    const card = $("#vg-periodo-card");
    if (!card) return [];
    const rows = linhasPeriodoIntervalo();
    const multi = state.meses.length > 1 && rows.length > 1;
    card.classList.toggle("hidden", !multi);
    const subEl = card.querySelector(".section-subtitle, .card-sub");
    if (!multi) {
      if (subEl) {
        subEl.textContent = "Posição da provisão em cada competência selecionada";
      }
      $("#vg-periodo-resumo").innerHTML = "";
      $("#vg-periodo-notas").innerHTML = "";
      $("#vg-periodo-tbody").innerHTML = "";
      return rows;
    }

    const ini = rows[0];
    const fim = rows[rows.length - 1];
    if (subEl) {
      subEl.textContent = `Competências de ${mmAbr(ini.competencia)} a ${mmAbr(fim.competencia)}`;
    }
    const deltaPer =
      ini.peona_total != null && fim.peona_total != null
        ? Number(fim.peona_total) - Number(ini.peona_total)
        : null;
    const pctPer =
      ini.peona_total != null &&
      fim.peona_total != null &&
      Number(ini.peona_total) !== 0
        ? Number(fim.peona_total) / Number(ini.peona_total) - 1
        : null;
    const maxR = rows.reduce((a, b) =>
      Number(b.peona_total) > Number(a.peona_total) ? b : a
    );
    const minR = rows.reduce((a, b) =>
      Number(b.peona_total) < Number(a.peona_total) ? b : a
    );

    $("#vg-periodo-resumo").innerHTML = `
      <div class="item"><span class="k">Competência inicial</span><span class="v">${esc(mmAbr(ini.competencia))}</span></div>
      <div class="item"><span class="k">Competência final</span><span class="v">${esc(mmAbr(fim.competencia))}</span></div>
      <div class="item"><span class="k">Variação do período</span><span class="v ${clsProvVar(deltaPer)}" title="${esc(brl(deltaPer))}">${esc(brlMiDelta(deltaPer))} · ${esc(signedPctLabel(pctPer) || "—")}</span></div>
      <div class="item"><span class="k">Maior PEONA</span><span class="v" title="${esc(brl(maxR.peona_total))}">${esc(brlMi(maxR.peona_total))} · ${esc(mmAbr(maxR.competencia))}</span></div>
      <div class="item"><span class="k">Menor PEONA</span><span class="v" title="${esc(brl(minR.peona_total))}">${esc(brlMi(minR.peona_total))} · ${esc(mmAbr(minR.competencia))}</span></div>
    `;

    const notas = comentariosPeriodo(rows);
    const insightIco = {
      up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>',
      down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>',
      stable: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/></svg>',
      peak: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 17 6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>',
      low: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3v3a2 2 0 0 1-2 2H3"/><path d="m3 3 7.07 7.07"/><circle cx="17" cy="17" r="5"/></svg>',
      info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
    };
    $("#vg-periodo-notas").innerHTML = notas
      .map((n) => {
        const tom = n.tom || "info";
        return `<article class="vg-insight vg-insight--${tom}">
          <span class="vg-insight-ico">${insightIco[tom] || insightIco.info}</span>
          <div class="vg-insight-body">
            <strong class="vg-insight-title">${esc(n.titulo || "Leitura")}</strong>
            <p class="vg-insight-text">${esc(n.texto)}</p>
          </div>
        </article>`;
      })
      .join("");

    $("#vg-periodo-tbody").innerHTML = rows
      .map((r) => {
        const v = varMensalPeona(r);
        const partMh = r.peona_total ? r.peona_mh / r.peona_total : null;
        const partOd = r.peona_total ? r.peona_od / r.peona_total : null;
        const isFinal = r.competencia === refComp;
        const cls = [
          isFinal ? "vg-row-atual" : "",
          state.vgFocusComp === r.competencia ? "vg-row-focus" : "",
        ]
          .filter(Boolean)
          .join(" ");
        return `<tr class="${cls}" data-comp="${esc(r.competencia)}" tabindex="0">
          <td>${esc(mmAbr(r.competencia))}${
            isFinal ? '<span class="vg-tag-atual">Posição atual</span>' : ""
          }</td>
          <td title="${esc(brl(r.peona_total))}">${esc(brlMi(r.peona_total))}</td>
          <td title="${esc(brl(r.peona_mh))}">${esc(brlMi(r.peona_mh))}</td>
          <td title="${esc(brl(r.peona_od))}">${esc(brlMi(r.peona_od))}</td>
          <td class="${clsProvVar(v.delta)}" title="${esc(brl(v.delta))}">${esc(brlMiDelta(v.delta))}</td>
          <td class="${clsProvVar(v.pct)}" title="${esc(signedPctLabel(v.pct) || "—")}">${esc(signedPctLabel(v.pct) || "—")}</td>
          <td>${esc(pct(partMh))}</td>
          <td>${esc(pct(partOd))}</td>
        </tr>`;
      })
      .join("");

    return rows;
  }

  function renderVisao() {
    const c = ref();
    const r = row(c);
    const p = prev(c);
    if (!r) {
      $("#vg-kpis").innerHTML =
        `<div class="kpi"><div class="lbl">Sem dados</div><div class="val">—</div></div>`;
      $("#vg-composicao").innerHTML = "";
      $("#vg-explica").innerHTML = "";
      $("#vg-repr-card").classList.add("hidden");
      const periodoCard = $("#vg-periodo-card");
      if (periodoCard) {
        periodoCard.classList.add("hidden");
        $("#vg-periodo-resumo").innerHTML = "";
        $("#vg-periodo-notas").innerHTML = "";
        $("#vg-periodo-tbody").innerHTML = "";
      }
      return;
    }
    const shareMh = r.peona_total ? r.peona_mh / r.peona_total : null;
    const shareOd = r.peona_total ? r.peona_od / r.peona_total : null;
    const evoSeg = state.evoSeg || "total";
    const chartMode = state.evoChartMode || "valor";
    state.evoSeg = evoSeg;
    state.evoChartMode = chartMode;
    const cfg = EVO_CFG[evoSeg] || EVO_CFG.total;
    const isIntervalo = state.meses.length > 1;
    if (state.vgFocusComp && !state.meses.includes(state.vgFocusComp)) {
      state.vgFocusComp = null;
    }
    const posLabel = `Posição em ${mmAbr(c)}`;

    $$("#vg-evo-seg button").forEach((b) =>
      b.classList.toggle("active", b.dataset.evo === evoSeg)
    );
    $$("#vg-chart-mode button").forEach((b) =>
      b.classList.toggle("active", b.dataset.chartMode === chartMode)
    );

    const varAux = p
      ? `versus ${mmAbr(p.competencia)}`
      : "sem competência anterior na série";

    $("#vg-kpis").innerHTML = `
      <div class="kpi">
        <div class="kpi-head">
          <span class="lbl">PEONA consolidada</span>
          ${varPill(r.variacao_pct_total)}
        </div>
        <div class="val" title="${esc(brl(r.peona_total))}">${brlMi(r.peona_total)}</div>
        <div class="sub">${isIntervalo ? esc(posLabel) : `Competência ${mmAbr(c)}`}</div>
      </div>
      <div class="kpi">
        <div class="kpi-head">
          <span class="lbl">Médico-Hospitalar</span>
          ${varPill(r.variacao_pct_mh)}
        </div>
        <div class="val" title="${esc(brl(r.peona_mh))}">${brlMi(r.peona_mh)}</div>
        <div class="sub">${
          isIntervalo
            ? `${esc(posLabel)} · ${pct(shareMh)} do total`
            : `${pct(shareMh)} do total`
        }</div>
      </div>
      <div class="kpi">
        <div class="kpi-head">
          <span class="lbl">Odontológico</span>
          ${varPill(r.variacao_pct_od)}
        </div>
        <div class="val" title="${esc(brl(r.peona_od))}">${brlMi(r.peona_od)}</div>
        <div class="sub">${
          isIntervalo
            ? `${esc(posLabel)} · ${pct(shareOd)} do total`
            : `${pct(shareOd)} do total`
        }</div>
      </div>
      <div class="kpi kpi-variacao">
        <div class="kpi-head">
          <span class="lbl">Variação mensal</span>
          ${varPill(r.variacao_pct_total)}
        </div>
        <div class="val" title="${esc(brl(r.variacao_r_total))}">${brlMi(r.variacao_r_total)}</div>
        <div class="sub">${
          isIntervalo ? `${esc(posLabel)} · ${esc(varAux)}` : esc(varAux)
        }</div>
      </div>`;

    const rows = serieEvolucao(c);
    const chartFocus = state.vgFocusComp || c;
    const periodo = evoPeriodoCurto(rows);
    const isVar = chartMode === "variacao";
    $("#vg-chart-title").textContent = isVar
      ? "Variação mensal da PEONA"
      : "Evolução mensal da PEONA";
    $("#vg-evo-sub").textContent = isVar
      ? `Variação percentual mensal · ${periodo}`
      : `Valores em R$ milhões · ${periodo}`;

    destroyChart("vgEvo");
    destroyChart("vgVar");
    destroyChart("vgDonut");
    const emptyEl = $("#vg-evolucao-empty");
    const canvas = $("#vg-evolucao");
    const canvasVar = $("#vg-variacao");
    const vgFont = { family: "Segoe UI, Arial, sans-serif", size: 13, weight: "400" };
    const onChartHover = (evt, elements) => {
      if (!isIntervalo) return;
      if (elements.length) {
        const idx = elements[0].index;
        state.vgHoverComp = rows[idx]?.competencia || null;
      } else {
        state.vgHoverComp = null;
      }
      syncVgPeriodoHighlight(c);
    };

    if (rows.length < 2) {
      canvas.classList.add("hidden");
      canvasVar.classList.add("hidden");
      emptyEl.classList.remove("hidden");
      emptyEl.textContent =
        "Série histórica insuficiente. Selecione um intervalo de meses ou outro ano.";
      syncVgEvoLegend("", false);
    } else {
      emptyEl.classList.add("hidden");
      const showValor = !isVar;
      canvas.classList.toggle("hidden", !showValor);
      canvasVar.classList.toggle("hidden", showValor);

      if (showValor) {
        const vals = rows.map((x) => x[cfg.key]);
        const media =
          vals.reduce((s, v) => s + (Number(v) || 0), 0) / (vals.length || 1);
        const pointR = rows.map((x) => (x.competencia === chartFocus ? 5 : 2.5));
        const pointBg = rows.map((x) =>
          x.competencia === chartFocus ? "#007940" : "#FFFFFF"
        );
        const pointBd = rows.map((x) =>
          x.competencia === chartFocus ? "#2F302A" : "#007940"
        );

        charts.vgEvo = new Chart(canvas, {
          type: "line",
          data: {
            labels: rows.map((x) => mmCurto(x.competencia)),
            datasets: [
              {
                label: cfg.label,
                data: vals,
                borderColor: "#007940",
                backgroundColor: "transparent",
                tension: 0.2,
                borderWidth: 2.25,
                pointRadius: pointR,
                pointHoverRadius: 5,
                pointBackgroundColor: pointBg,
                pointBorderColor: pointBd,
                pointBorderWidth: 1.5,
                order: 1,
              },
              {
                label: "Média do período",
                data: rows.map(() => media),
                borderColor: "rgba(110,176,46,0.85)",
                borderDash: [5, 4],
                borderWidth: 1.5,
                pointRadius: 0,
                pointHoverRadius: 0,
                order: 2,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            devicePixelRatio: Math.max(window.devicePixelRatio || 1, 2),
            interaction: { mode: "index", intersect: false },
            onHover: onChartHover,
            plugins: {
              legend: { display: false },
              tooltip: {
                titleFont: { ...vgFont, weight: "500" },
                bodyFont: vgFont,
                callbacks: {
                  label: (ctx) => {
                    if (ctx.dataset.label === "Média do período") {
                      return `Média: ${brl(ctx.parsed.y)}`;
                    }
                    const row = rows[ctx.dataIndex];
                    const lines = [`${cfg.label}: ${brl(ctx.parsed.y)}`];
                    const dv = row?.[cfg.varKey];
                    const dp = row?.[cfg.pctKey];
                    if (dv != null) {
                      const sentido =
                        Number(dv) > 0
                          ? "aumento da provisão"
                          : Number(dv) < 0
                          ? "redução da provisão"
                          : "estabilidade";
                      lines.push(`Variação: ${brl(dv)} (${signedPctLabel(dp)}) — ${sentido}`);
                    }
                    return lines;
                  },
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  font: { ...vgFont, size: 12.5, weight: "500" },
                  maxRotation: 0,
                  minRotation: 0,
                  autoSkip: false,
                  padding: 10,
                  color: "#2F302A",
                },
                grid: { display: false },
              },
              y: {
                ticks: {
                  font: { ...vgFont, size: 12.5, weight: "500" },
                  padding: 10,
                  color: "#2F302A",
                  callback: (v) =>
                    (Number(v) / 1e6).toLocaleString("pt-BR", {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    }),
                },
                grid: { color: "rgba(47,48,42,0.06)" },
                beginAtZero: false,
              },
            },
            layout: { padding: { top: 8, right: 10, bottom: 4, left: 4 } },
          },
        });
        syncVgEvoLegend(cfg.label, true);
      } else {
        syncVgEvoLegend(cfg.label, false);
        const pctVals = rows.map((x) =>
          x[cfg.pctKey] == null ? null : Number(x[cfg.pctKey]) * 100
        );
        const varColors = pctVals.map((v, i) => {
          if (v == null) return "#D8D3C8";
          const base =
            v > 0
              ? "rgba(180,35,24,0.72)"
              : v < 0
              ? "rgba(0,121,64,0.72)"
              : "rgba(47,48,42,0.45)";
          if (rows[i].competencia === chartFocus) {
            return v > 0
              ? "rgba(180,35,24,0.95)"
              : v < 0
              ? "rgba(0,121,64,0.95)"
              : "rgba(47,48,42,0.7)";
          }
          return base;
        });
        const absMax = Math.max(
          ...pctVals.filter((v) => v != null).map((v) => Math.abs(v)),
          0.5
        );
        const pluginVarLbl = {
          id: "vgVarLabels",
          afterDatasetsDraw(chart) {
            const { ctx } = chart;
            const meta = chart.getDatasetMeta(0);
            ctx.save();
            ctx.font = '500 12.5px "Segoe UI", Arial, sans-serif';
            ctx.textAlign = "center";
            meta.data.forEach((pt, i) => {
              const v = pctVals[i];
              if (v == null) return;
              ctx.fillStyle = v > 0 ? "#B42318" : v < 0 ? "#007940" : "#64748B";
              const label = signedPctLabel(v / 100);
              const y = v >= 0 ? pt.y - 10 : pt.y + 16;
              ctx.fillText(label, pt.x, y);
            });
            ctx.restore();
          },
        };
        charts.vgVar = new Chart(canvasVar, {
          type: "bar",
          plugins: [pluginVarLbl],
          data: {
            labels: rows.map((x) => mmCurto(x.competencia)),
            datasets: [
              {
                label: "Variação %",
                data: pctVals,
                backgroundColor: varColors,
                borderWidth: rows.map((x) => (x.competencia === chartFocus ? 1.5 : 0)),
                borderColor: rows.map((x) =>
                  x.competencia === chartFocus ? "#2F302A" : "transparent"
                ),
                borderRadius: 3,
                barPercentage: 0.7,
                categoryPercentage: 0.85,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            onHover: onChartHover,
            plugins: {
              legend: { display: false },
              tooltip: {
                titleFont: { ...vgFont, weight: "500" },
                bodyFont: vgFont,
                callbacks: {
                  label: (ctx) => {
                    const row = rows[ctx.dataIndex];
                    const dv = row?.[cfg.varKey];
                    const sentido =
                      ctx.parsed.y > 0
                        ? "aumento da provisão"
                        : ctx.parsed.y < 0
                        ? "redução da provisão"
                        : "estabilidade";
                    return [
                      `Variação: ${signedPctLabel(row?.[cfg.pctKey])} — ${sentido}`,
                      `Δ abs: ${brl(dv)}`,
                    ];
                  },
                },
              },
            },
            scales: {
              x: {
                ticks: { font: vgFont, maxRotation: 0, minRotation: 0, autoSkip: false, padding: 8 },
                grid: { display: false },
              },
              y: {
                min: -absMax * 1.35,
                max: absMax * 1.35,
                ticks: {
                  font: vgFont,
                  padding: 8,
                  callback: (v) => {
                    const n = Number(v);
                    const abs = Math.abs(n).toLocaleString("pt-BR", {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    });
                    if (n > 0) return `+${abs}%`;
                    if (n < 0) return `-${abs}%`;
                    return `0,0%`;
                  },
                },
                grid: {
                  color: (ctx) =>
                    ctx.tick.value === 0 ? "rgba(47,48,42,0.45)" : "rgba(47,48,42,0.06)",
                  lineWidth: (ctx) => (ctx.tick.value === 0 ? 1.5 : 1),
                },
              },
            },
            layout: { padding: { top: 22, right: 8, bottom: 8, left: 4 } },
          },
        });
      }
    }

    const periodoRows = renderPeriodoDetalhe(c);
    bindVgPeriodoTable(periodoRows, c, rows);
    syncVgPeriodoHighlight(c);

    const pctMh = shareMh != null ? shareMh * 100 : 0;
    const pctOd = shareOd != null ? shareOd * 100 : 0;
    $("#vg-composicao").innerHTML = `
      <div class="vg-comp">
        <div class="vg-donut-wrap">
          <canvas id="vg-donut"></canvas>
        </div>
        <div class="comp-legend">
          <div class="comp-row">
            <span class="comp-dot mh"></span>
            <div>
              <div class="comp-name">Médico-Hospitalar</div>
              <div class="comp-meta">${brlMilhoes(r.peona_mh)} · ${pct(shareMh)}</div>
            </div>
          </div>
          <div class="comp-row">
            <span class="comp-dot od"></span>
            <div>
              <div class="comp-name">Odontológico</div>
              <div class="comp-meta">${brlMilhoes(r.peona_od)} · ${pct(shareOd)}</div>
            </div>
          </div>
        </div>
      </div>`;

    const donutEl = $("#vg-donut");
    if (donutEl && (pctMh > 0 || pctOd > 0)) {
      charts.vgDonut = new Chart(donutEl, {
        type: "doughnut",
        data: {
          labels: ["Médico-Hospitalar", "Odontológico"],
          datasets: [
            {
              data: [r.peona_mh, r.peona_od],
              backgroundColor: ["#007940", "#E7C221"],
              borderWidth: 0,
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "68%",
          plugins: {
            legend: { display: false },
            tooltip: {
              titleFont: { family: '"Segoe UI", Arial, sans-serif', size: 13 },
              bodyFont: { family: '"Segoe UI", Arial, sans-serif', size: 13 },
              callbacks: {
                label: (ctx) =>
                  `${ctx.label}: ${brl(ctx.parsed)} (${pct(
                    ctx.parsed / (r.peona_total || 1)
                  )})`,
              },
            },
          },
        },
      });
    }

    queueChartSharpen(["vgEvo", "vgVar", "vgDonut"]);

    const varTxt =
      r.variacao_r_total == null
        ? "Não há variação mensal disponível para esta competência."
        : Number(r.variacao_r_total) > 0
        ? `Em relação a ${mmAbr(p?.competencia)}, a PEONA aumentou ${brlMilhoes(
            Math.abs(r.variacao_r_total)
          )} (${pct(r.variacao_pct_total)}), elevando a obrigação estimada.`
        : Number(r.variacao_r_total) < 0
        ? `Em relação a ${mmAbr(p?.competencia)}, a PEONA reduziu ${brlMilhoes(
            Math.abs(r.variacao_r_total)
          )} (${pct(Math.abs(r.variacao_pct_total))}), diminuindo a obrigação estimada.`
        : `Em relação a ${mmAbr(p?.competencia)}, a PEONA manteve-se estável.`;

    $("#vg-explica").innerHTML = `
      <p class="vg-lead">
        Na competência <strong>${mmAbr(c)}</strong>, o IPASGO Saúde mantém
        <strong>${brlMilhoes(r.peona_total)}</strong> provisionados para cobrir eventos
        assistenciais que já ocorreram, mas que ainda não haviam sido avisados à operadora.
      </p>
      <ul class="vg-bullets">
        <li><strong>${brlMilhoes(r.peona_mh)}</strong> referentes ao segmento Médico-Hospitalar
          (${pct(shareMh)} do total)${
            r.variacao_pct_mh != null ? ` · variação mensal ${varPill(r.variacao_pct_mh)}` : ""
          }</li>
        <li><strong>${brlMilhoes(r.peona_od)}</strong> referentes ao segmento Odontológico
          (${pct(shareOd)} do total)${
            r.variacao_pct_od != null ? ` · variação mensal ${varPill(r.variacao_pct_od)}` : ""
          }</li>
        <li>${esc(varTxt)}</li>
      </ul>
      <p class="vg-note">
        A PEONA não corresponde a uma despesa nova do mês. Ela representa uma estimativa
        atuarial das obrigações relacionadas a eventos já ocorridos, mas ainda não avisados
        ou integralmente reconhecidos na base da operadora.
      </p>`;

    const bkMh = r.media_mh;
    const bkOd = r.media_od;
    const ikMh = r.fator_mh;
    const ikOd = r.fator_od;
    const reprCard = $("#vg-repr-card");
    const temMh = bkMh != null && bkMh > 0 && ikMh != null && r.peona_mh != null;
    const temOd = bkOd != null && bkOd > 0 && ikOd != null && r.peona_od != null;
    if (temMh || temOd) {
      reprCard.classList.remove("hidden");
      const bloco = (nome, peona, bk, ik) => {
        const x = (peona / bk) * 100;
        return `<div class="vg-repr-item">
          <div class="vg-repr-title">${esc(nome)}</div>
          <p class="vg-repr-frase">
            Para cada <strong>R$&nbsp;100</strong> da base média de avisos, são constituídos
            <strong>R$&nbsp;${x.toLocaleString("pt-BR", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}</strong> de PEONA.
          </p>
          <p class="vg-repr-fluxo">
            <span class="sym">B<sub>k</sub></span>
            <span class="op">×</span>
            <span class="sym">I<sub>k</sub></span>
            <span class="op">=</span>
            <span class="sym">PEONA<sub>k</sub></span>
          </p>
          <ul class="vg-repr-defs">
            <li><strong>B<sub>k</sub></strong> = ${brl(bk)} — base média de avisos utilizada no cálculo</li>
            <li><strong>I<sub>k</sub></strong> = ${pct(ik, 4)} — índice de desenvolvimento</li>
            <li><strong>PEONA</strong> = ${brl(peona)} — estimativa dos eventos ocorridos e ainda não avisados</li>
          </ul>
        </div>`;
      };
      $("#vg-repr").innerHTML = `
        <p class="vg-note" style="margin-top:0">
          Indicador apresentado por segmento, pois Médico-Hospitalar e Odontológico utilizam
          bases e índices próprios. Não representa sinistralidade nem participação na composição.
        </p>
        <div class="vg-repr-grid">
          ${temMh ? bloco("Médico-Hospitalar", r.peona_mh, bkMh, ikMh) : ""}
          ${temOd ? bloco("Odontológico", r.peona_od, bkOd, ikOd) : ""}
        </div>`;
    } else {
      reprCard.classList.add("hidden");
      $("#vg-repr").innerHTML = "";
    }
  }

  /* ---------- Input ---------- */
  const PARAM_META = {
    MES_CORTE_HISTORICO: {
      descricao: "Corte do histórico",
      origem: "Script R",
    },
    MES_CORTE_CONSISTENCIA: {
      descricao: "Corte do teste",
      origem: "Script R",
    },
    N_JANELA_6: {
      descricao: "Janela curta",
      origem: "Script R",
    },
    N_JANELA_12: {
      descricao: "Janela longa",
      origem: "Script R",
    },
    MES_APURACAO: {
      descricao: "Último mês do triângulo",
      origem: "Automático",
    },
    ARQUIVO_XLSX: {
      descricao: "Arquivo de entrada",
      origem: "Configuração",
    },
  };

  function formatDataHoraAmigavel(iso) {
    const at = formatAtualizado(iso);
    return at.texto.replace(/^Atualizado em\s+/i, "") || "—";
  }

  function periodoDeLista(isos) {
    const list = [...new Set((isos || []).filter(Boolean))].sort();
    if (!list.length) return "Não identificado";
    if (list.length === 1) return mmAbr(list[0]);
    return `${mmAbr(list[0])} a ${mmAbr(list[list.length - 1])}`;
  }

  function formatParamValor(chave, bruto, meta) {
    if (bruto == null || bruto === "") return { texto: "—", title: "" };
    const raw = String(bruto);
    if (chave === "MES_APURACAO") {
      const ap = meta.mes_apuracao || null;
      if (ap) return { texto: ap, title: raw };
      return { texto: raw, title: raw };
    }
    if (/^\d{4}-\d{2}-\d{2}/.test(raw)) {
      return { texto: mmAbr(raw), title: raw };
    }
    if (chave === "N_JANELA_6" || chave === "N_JANELA_12") {
      const n = Number(raw);
      if (!Number.isNaN(n)) return { texto: `${n} meses`, title: raw };
    }
    return { texto: raw, title: raw };
  }

  function temAba(abas, nome) {
    const n = nome.toLowerCase();
    return (abas || []).some((a) => String(a).toLowerCase() === n);
  }

  function statusDot(ok) {
    return `<span class="input-status-dot ${ok ? "ok" : "ausente"}" aria-hidden="true"></span>`;
  }

  function renderInput() {
    const meta = D().meta;
    const ir = meta.input_resumo || {};
    const tri = D().triangulo || [];
    const avisos = tri.map((x) => x.comp_aviso).filter(Boolean);
    const periodoHist = periodoDeLista(avisos);
    const periodoFmt = periodoHist;
    const registros = ir.registros_dados_aprox;
    const atualizacao = formatDataHoraAmigavel(meta.gerado_em);
    const abas = ir.abas || [];
    const syncErros = (meta.alertas_sync || []).filter((a) => a.nivel === "erro");
    const erroArquivo = ir.erro;
    const cargaOk = !erroArquivo && !syncErros.length;

    const obrigatorias = [
      { nome: "Dados", rotulo: "Dados" },
      { nome: "MH 6", rotulo: "MH 6" },
      { nome: "Odonto 6", rotulo: "Odonto 6" },
      { nome: "Teste Consistência", rotulo: "Teste Consistência" },
    ];
    const ausentes = obrigatorias.filter((a) => !temAba(abas, a.nome));
    const comps = meta.competencias_disponiveis || [];
    const primeira = comps[0] ? mmAbr(comps[0]) : "—";
    const ultima = comps.length ? mmAbr(comps[comps.length - 1]) : "—";
    const abasTxt = abas.length ? abas.map(esc).join(", ") : "Nenhuma aba identificada";
    let statusMsg = "";
    if (erroArquivo) {
      statusMsg = `<p class="input-msg-alerta">Arquivo de entrada não localizado: ${esc(erroArquivo)}</p>`;
    } else if (ausentes.length) {
      statusMsg = `<p class="input-msg-alerta">Aba(s) obrigatória(s) não localizada(s): <strong>${ausentes
        .map((a) => esc(a.rotulo))
        .join(", ")}</strong>.</p>`;
    } else if (syncErros.length) {
      statusMsg = syncErros
        .map((a) => `<p class="input-msg-alerta">${esc(a.mensagem)}</p>`)
        .join("");
    }

    $("#input-resumo").innerHTML = `
      <div class="mh-kpi">
        <div class="mh-kpi-head"><span class="lbl">Período histórico</span></div>
        <div class="val">${esc(periodoFmt || "—")}</div>
        <div class="sub">Competências no triângulo de avisos</div>
      </div>
      <div class="mh-kpi">
        <div class="mh-kpi-head"><span class="lbl">Registros processados</span></div>
        <div class="val">${registros != null ? Number(registros).toLocaleString("pt-BR") : "—"}</div>
        <div class="sub">Linhas da base de dados</div>
      </div>
      <div class="mh-kpi">
        <div class="mh-kpi-head"><span class="lbl">Competências</span></div>
        <div class="val">${
          meta.n_competencias_6m != null
            ? Number(meta.n_competencias_6m).toLocaleString("pt-BR")
            : "—"
        }</div>
        <div class="sub">${esc(primeira)} → ${esc(ultima)}</div>
      </div>
      <div class="mh-kpi">
        <div class="mh-kpi-head"><span class="lbl">Última atualização</span></div>
        <div class="val" title="${esc(meta.gerado_em || "")}">${esc(atualizacao)}</div>
        <div class="sub">${
          cargaOk && !ausentes.length ? "Carga concluída" : "Carga com pendências"
        }</div>
      </div>`;

    $("#input-arquivo").innerHTML = `
      <div class="input-arquivo-grid">
        <div class="input-arquivo-row">
          <span class="k">Status da carga</span>
          <span class="v">${
            cargaOk && !ausentes.length
              ? `<span class="input-badge-ok">Carga concluída</span>`
              : `<span class="input-badge-warn">Carga com pendências</span>`
          }</span>
        </div>
        <div class="input-arquivo-row">
          <span class="k">Nome do arquivo</span>
          <span class="v" title="${esc(ir.caminho || "")}">${esc(ir.arquivo || meta.arquivo_input || "—")}</span>
        </div>
        <div class="input-arquivo-row">
          <span class="k">Quantidade de registros</span>
          <span class="v">${registros != null ? Number(registros).toLocaleString("pt-BR") : "—"}</span>
        </div>
        <div class="input-arquivo-row">
          <span class="k">Quantidade de competências</span>
          <span class="v">${meta.n_competencias_6m != null ? Number(meta.n_competencias_6m).toLocaleString("pt-BR") : "—"}</span>
        </div>
        <div class="input-arquivo-row">
          <span class="k">Primeira competência</span>
          <span class="v">${esc(primeira)}</span>
        </div>
        <div class="input-arquivo-row">
          <span class="k">Última competência</span>
          <span class="v">${esc(ultima)}</span>
        </div>
        <div class="input-arquivo-row wide">
          <span class="k">Abas identificadas</span>
          <span class="v">${abasTxt}</span>
        </div>
        <div class="input-arquivo-row">
          <span class="k">Data e horário do processamento</span>
          <span class="v" title="${esc(meta.gerado_em || "")}">${esc(atualizacao)}</span>
        </div>
      </div>
      ${statusMsg}`;

    const riSerie = D().rumo_x_ipasgo || [];
    const consComps = (D().consistencia || [])
      .filter((x) => x.competencia && !x.periodo_resumo)
      .map((x) => x.competencia);
    const corteHist = (ir.parametros_r || {}).MES_CORTE_HISTORICO;
    const periodoMh6 =
      avisos.length && corteHist
        ? `${mmAbr(avisos.slice().sort()[0])} a ${mmAbr(corteHist)}`
        : periodoDeLista(avisos);
    const temDados = temAba(abas, "Dados");
    const temMh6 = temAba(abas, "MH 6") && temAba(abas, "Odonto 6");
    const temConsist = temAba(abas, "Teste Consistência");
    const temRi = riSerie.length > 0;

    const fontes = [
      {
        base: "Dados",
        finalidade: "Base granular de ocorrência e aviso",
        periodo: temDados ? periodoDeLista(avisos) : "—",
        ok: temDados,
        status: temDados ? "Disponível" : "Ausente",
      },
      {
        base: "MH 6 / Odonto 6",
        finalidade: "Triângulos históricos de 6 meses",
        periodo: temMh6 ? periodoMh6 : "—",
        ok: temMh6,
        status: temMh6 ? "Disponível" : "Ausente",
      },
      {
        base: "Teste Consistência",
        finalidade: "Fonte oficial dos testes",
        periodo: temConsist ? periodoDeLista(consComps) : "—",
        ok: temConsist,
        status: temConsist ? "Disponível" : "Ausente",
      },
      {
        base: "Garantias Ipasgo x RUMO",
        finalidade: "Comparativo RUMO × IPASGO",
        periodo: temRi ? periodoDeLista(riSerie.map((x) => x.competencia)) : "—",
        ok: temRi,
        status: temRi ? "Disponível" : "Ausente",
      },
    ];

    $("#input-fontes").innerHTML = `<div class="input-table-wrap"><table class="input-table">
      <thead><tr>
        <th class="left">Base ou aba</th>
        <th class="left">Finalidade</th>
        <th class="left">Período</th>
        <th class="left">Status</th>
      </tr></thead>
      <tbody>${fontes
        .map(
          (f) => `<tr>
        <td class="left">${esc(f.base)}</td>
        <td class="left">${esc(f.finalidade)}</td>
        <td class="left">${esc(f.periodo)}</td>
        <td class="left">${statusDot(f.ok)} ${esc(f.status)}</td>
      </tr>`
        )
        .join("")}</tbody></table></div>`;

    const params = ir.parametros_r || {};
    const ordemParams = [
      "MES_CORTE_HISTORICO",
      "MES_CORTE_CONSISTENCIA",
      "N_JANELA_6",
      "N_JANELA_12",
      "MES_APURACAO",
      "ARQUIVO_XLSX",
    ];
    const keys = [
      ...ordemParams.filter((k) => Object.prototype.hasOwnProperty.call(params, k)),
      ...Object.keys(params).filter((k) => !ordemParams.includes(k)),
    ];

    $("#input-params").innerHTML = `<div class="input-table-wrap"><table class="input-table">
      <thead><tr>
        <th class="left">Parâmetro</th>
        <th class="right">Valor utilizado</th>
        <th class="left">Descrição</th>
        <th class="left">Origem</th>
      </tr></thead>
      <tbody>${keys
        .map((k) => {
          const info = PARAM_META[k] || { descricao: "—", origem: "Script R" };
          const fv = formatParamValor(k, params[k], meta);
          return `<tr>
            <td class="left"><code>${esc(k)}</code></td>
            <td class="right" title="${esc(fv.title)}">${esc(fv.texto)}</td>
            <td class="left">${esc(info.descricao)}</td>
            <td class="left">${esc(info.origem)}</td>
          </tr>`;
        })
        .join("")}</tbody></table></div>`;

    $("#input-tech").innerHTML = `
      <div class="input-tech-grid">
        <div><span class="k">Script R</span><span class="v">${esc(meta.arquivo_script || "—")}</span></div>
        <div><span class="k">Fonte de saídas R</span><span class="v" title="${esc(meta.fonte_r || "")}">${esc(meta.fonte_r || "—")}</span></div>
        <div><span class="k">Caminho do arquivo</span><span class="v" title="${esc(ir.caminho || "")}">${esc(ir.caminho || "—")}</span></div>
        <div><span class="k">Janela metodológica principal</span><span class="v">${esc(String(meta.janela_metodologica_principal ?? "—"))} meses</span></div>
        <div><span class="k">Mês de apuração</span><span class="v">${esc(meta.mes_apuracao || "—")}</span></div>
        <div><span class="k">Bases consideradas (texto do sync)</span><span class="v">${(ir.bases_consideradas || []).map(esc).join(" · ") || "—"}</span></div>
      </div>`;
  }

  /* ---------- Médico-Hospitalar (planilha MH 6 / MH 12) ---------- */
  function mhPack(janela) {
    const key = String(janela || state.mhJanela || 6);
    return (D().triangulos_mh || {})[key] || null;
  }

  function odPack(janela) {
    const key = String(janela || state.odJanela || 6);
    return (D().triangulos_od || {})[key] || null;
  }

  function peonaLinhaMH(pack, comp) {
    if (!pack) return null;
    return (pack.peona_serie || []).find((x) => x.competencia === comp) || null;
  }

  function fatorLinhaMH(pack, comp) {
    if (!pack) return null;
    return (pack.fatores?.linhas || []).find((x) => x.competencia === comp) || null;
  }

  function proporcaoLinhaMH(pack, comp) {
    if (!pack) return null;
    return (pack.proporcoes?.linhas || []).find((x) => x.competencia === comp) || null;
  }

  function numBR(v, dig = 2) {
    if (v == null || Number.isNaN(Number(v))) return "—";
    return Number(v).toLocaleString("pt-BR", {
      minimumFractionDigits: dig,
      maximumFractionDigits: dig,
    });
  }
  function pctBR(v, dig = 2) {
    if (v == null || Number.isNaN(Number(v))) return "—";
    return (
      (Number(v) * 100).toLocaleString("pt-BR", {
        minimumFractionDigits: dig,
        maximumFractionDigits: dig,
      }) + "%"
    );
  }
  function ikBR(v) {
    if (v == null || Number.isNaN(Number(v))) return "—";
    return Number(v).toLocaleString("pt-BR", {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    });
  }
  function brlTri(v, vazio) {
    if (vazio || v == null) return "";
    return numBR(v, 2);
  }
  function mathHtmlFallback(kind) {
    const map = {
      lim_mensal:
        '<span class="cs-math-html">−24,53% ≤ <em>V</em><sub>t</sub> ≤ 30,94%</span>',
      lim_media:
        '<span class="cs-math-html">−10,78% ≤ <em>V̅</em><sub>t</sub> ≤ 13,62%</span>',
      var_mensal:
        '<span class="cs-math-html"><em>V</em><sub>t</sub> = (PEONA<sup>estimada</sup><sub>t</sub> / PEONA<sup>real</sup><sub>t</sub> − 1) × 100</span>',
      var_media:
        '<span class="cs-math-html"><em>V̅</em><sub>t</sub> = (1/<em>n</em>) Σ<sub>i=t−n+1</sub><sup>t</sup> <em>V</em><sub>i</sub></span>',
      janela:
        '<span class="cs-math-html"><em>n</em> = 12 se <em>t</em> ≤ set/2025; <em>n</em> = 6 se <em>t</em> ≥ out/2025</span>',
    };
    return map[kind] || '<span class="cs-math-html">—</span>';
  }

  function renderKatexInto(el, tex, fallbackKind, display = true) {
    if (!el) return;
    el.innerHTML = "";
    if (window.katex) {
      try {
        katex.render(tex, el, {
          throwOnError: false,
          displayMode: display,
          output: "html",
        });
        const raw = el.textContent || "";
        if (/\\(frac|sum|leq|overline|begin|operatorname|mathrm)/.test(raw) || /begin\{cases\}/.test(raw)) {
          el.innerHTML = mathHtmlFallback(fallbackKind);
        }
        return;
      } catch (e) {
        /* fall through */
      }
    }
    el.innerHTML = mathHtmlFallback(fallbackKind);
  }

  function mathTex(tex, display = true) {
    if (window.katex) {
      try {
        const html = katex.renderToString(tex, {
          throwOnError: false,
          displayMode: display,
          output: "html",
        });
        if (/\\(frac|sum|leq|overline|begin)/.test(html.replace(/<[^>]+>/g, ""))) {
          return mathHtmlFallback("var_mensal");
        }
        return html;
      } catch (e) {
        return mathHtmlFallback("var_mensal");
      }
    }
    return mathHtmlFallback("var_mensal");
  }
  function lagLabel(col) {
    const s = String(col).trim();
    if (/^j/i.test(s)) return s.toUpperCase().replace("J", "J");
    if (/^\d+\+$/.test(s)) return `J${s}`;
    if (/^\d+$/.test(s)) return `J${s}`;
    return `J${s}`;
  }
  function lagIndex(col) {
    const m = String(col).match(/(\d+)/);
    return m ? Number(m[1]) : 0;
  }
  /** Jk = ocorrência k meses antes da data de aviso (ex.: aviso ago/2023, J1 = jul/2023). */
  function lagSubLabel(col) {
    const j = lagIndex(col);
    const plus = String(col).includes("+");
    if (j === 0) return "(0m)";
    if (plus) return `(-${j}m+)`;
    return `(-${j}m)`;
  }
  /** Competência ISO ± n meses (n pode ser negativo). */
  function shiftComp(iso, n) {
    if (!iso) return null;
    const y = Number(String(iso).slice(0, 4));
    const m = Number(String(iso).slice(5, 7));
    if (!y || !m) return null;
    const idx = y * 12 + (m - 1) + Number(n || 0);
    const yy = Math.floor(idx / 12);
    const mm = (idx % 12) + 1;
    return `${yy}-${String(mm).padStart(2, "0")}-01`;
  }
  /** Interpretação: linha = data de aviso; coluna = data de ocorrência (atraso Jk). */
  function lagTip(col) {
    const lab = lagLabel(col);
    return `${lab} — ${lagSubLabel(col)}`;
  }

  /** Índice da célula de maior valor na linha (pico do aviso). */
  function rowPeakLagIndex(ln) {
    let bestIdx = -1;
    let bestVal = -Infinity;
    (ln?.lags || []).forEach((lg, j) => {
      if (lg.vazio || lg.valor == null) return;
      const v = Number(lg.valor);
      if (!Number.isFinite(v)) return;
      if (v > bestVal) {
        bestVal = v;
        bestIdx = j;
      }
    });
    return bestIdx;
  }

  function ikSparkSvg(series, color) {
    const pts = (series || []).filter(
      (x) => x && x.valor != null && !Number.isNaN(Number(x.valor))
    );
    if (pts.length < 6) return "";
    const w = 240;
    const h = 32;
    const vals = pts.map((x) => Number(x.valor));
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const span = max - min || 1;
    const coords = pts.map((x, i) => {
      const xv = (i / (pts.length - 1)) * (w - 8) + 4;
      const yv = h - 4 - ((Number(x.valor) - min) / span) * (h - 10);
      return { x: xv, y: yv, label: x.label, valor: x.valor };
    });
    const poly = coords.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
    const dots = coords
      .map(
        (p, i) =>
          `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${
            i === coords.length - 1 ? 3.2 : 2
          }" fill="${i === coords.length - 1 ? esc(color) : "#fff"}" stroke="${esc(
            color
          )}" stroke-width="1.4"><title>${esc(p.label)}: ${esc(ikBR(p.valor))}</title></circle>`
      )
      .join("");
    return `<svg class="ik-spark" viewBox="0 0 ${w} ${h}" width="100%" height="${h}" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <polyline fill="none" stroke="${esc(color)}" stroke-width="1.6" points="${poly}"/>
      ${dots}
    </svg>`;
  }

  /** Linhas do triângulo conforme o slicer: 1 mês = run-off completo; 2+ = só o intervalo. */
  function triLinhasDoSlicer(linhas) {
    const all = linhas || [];
    const sorted = mesesOrdenados();
    if (sorted.length < 2) return all;
    const lo = sorted[0];
    const hi = sorted.at(-1);
    const set = new Set(
      state.modo === "intervalo" || state.modo === "ano"
        ? comps().filter((c) => c >= lo && c <= hi)
        : sorted
    );
    return all.filter((ln) => set.has(ln.competencia));
  }

  function buildTriTableHtml(linhas, cols, c, opts) {
    opts = opts || {};
    const showLegend = opts.legend !== false;
    const janela = opts.janela === 12 ? 12 : 6;
    const winCls = janela === 12 ? "window-12" : "window-6";
    const rowHeader = opts.rowHeader || "Data de aviso";
    const axisMode = opts.axisMode || "aviso"; // aviso | ocorrencia
    const selectedSet = opts.selectedSet || null;
    const diagKeys = opts.diagKeys instanceof Set ? opts.diagKeys : null;
    const diagLagCols = opts.diagLagCols instanceof Set ? opts.diagLagCols : null;
    const hidePeak = !!opts.hidePeak;
    const hideTotal = !!opts.hideTotal;
    const noTotalCls = hideTotal ? " no-total" : "";
    const totalHeader = opts.totalHeader || "Total avisado";
    const legendDefault =
      axisMode === "ocorrencia"
        ? "Linhas: data de ocorrência · Colunas: atraso do aviso (Jk) · Destaque suave = maior valor da linha · Células vazias = —."
        : "Linhas: data de aviso · Colunas: atraso de ocorrência (Jk) · Destaque suave = maior valor da linha · Células vazias = —.";

    const colHeads = `
      <tr class="tri-column-row">
        <th class="column-header competence-column competence-cell sticky-col" scope="col">${esc(
          rowHeader
        )}</th>
        ${(cols || [])
          .map((col) => {
            const lab = lagLabel(col);
            return `<th class="column-header development-column value-column" title="${esc(
              lagTip(col)
            )}" scope="col"><span class="mh-lag-lab">${esc(
              lab
            )}</span><span class="mh-lag-sub">${esc(
              lagSubLabel(col)
            )}</span></th>`;
          })
          .join("")}
        ${
          hideTotal
            ? ""
            : `<th class="column-header total-header total-column sticky-total" title="${esc(
                totalHeader
              )}" scope="col">${esc(totalHeader)}</th>`
        }
      </tr>`;

    const body = (linhas || [])
      .map((ln) => {
        const isSel = selectedSet
          ? selectedSet.has(ln.competencia)
          : ln.competencia === c;
        const rowCls = isSel ? "selected selected-competence" : "";
        const peakIdx = hidePeak ? -1 : rowPeakLagIndex(ln);
        const totalNum =
          ln.total != null && Number.isFinite(Number(ln.total))
            ? Number(ln.total)
            : null;
        return `<tr class="${rowCls}">
          <td class="sticky-col competence-column competence-cell">${esc(
            mmAbr(ln.competencia)
          )}</td>
          ${(ln.lags || [])
            .map((lg, j) => {
              const col = lg.col != null ? lg.col : cols[j];
              const lab = lagLabel(col);
              const jLag = lagIndex(col);
              const plus = String(col).includes("+");
              const colKey = String(col);
              const occIso =
                axisMode === "aviso"
                  ? shiftComp(ln.competencia, -jLag)
                  : ln.competencia;
              const avisoIso =
                axisMode === "aviso"
                  ? ln.competencia
                  : shiftComp(ln.competencia, jLag);
              const occTxt = occIso
                ? plus
                  ? `${mmAbr(occIso)} ou antes`
                  : mmAbr(occIso)
                : "—";
              const avisoTxt = avisoIso ? mmAbr(avisoIso) : "—";
              const compTxt = mmAbr(ln.competencia);
              const isDiagAviso =
                diagKeys &&
                axisMode === "aviso" &&
                diagKeys.has(`${ln.competencia}|${colKey}`);
              const isDiagOc =
                diagLagCols &&
                axisMode === "ocorrencia" &&
                isSel &&
                diagLagCols.has(colKey);
              const isDiag = !!(isDiagAviso || isDiagOc);
              const dimOutside = !!opts.dimOutsideDiag && diagKeys && axisMode === "aviso";
              const isDim = dimOutside && !isDiag && jLag > 0;
              if (lg.vazio || lg.valor == null) {
                return `<td class="value-column development-column cell-empty${
                  isDiag ? " cell-runoff-diag" : ""
                }${isDim ? " cell-runoff-dim" : ""}" title="${esc(
                  `${compTxt} · ${lab}\nSem valor\nAviso ${avisoTxt} · Ocorrência ${occTxt}${
                    isDiag ? "\nTriângulo do run-off puro" : ""
                  }`
                )}">—</td>`;
              }
              const v = Number(lg.valor);
              const isPeak = !hidePeak && j === peakIdx && !isDiag;
              const share =
                totalNum != null && totalNum !== 0
                  ? pctBR(v / totalNum, 2)
                  : null;
              const tipLines = [
                `${compTxt} · ${lab}`,
                `R$ ${numBR(v)}`,
                share ? `${share} do ${totalHeader}` : null,
                isDiag
                  ? `Triângulo do run-off · ocorrência ${mmAbr(
                      axisMode === "aviso" ? occIso : ln.competencia
                    )}`
                  : null,
                isPeak ? "Maior valor da linha" : null,
              ].filter(Boolean);
              return `<td class="value-column development-column${
                isDiag ? " cell-runoff-diag" : isPeak ? " cell-peak" : ""
              }${isDim ? " cell-runoff-dim" : ""}" title="${esc(tipLines.join("\n"))}">${esc(
                brlTri(v, false) || numBR(v, 2)
              )}</td>`;
            })
            .join("")}
          ${
            hideTotal
              ? ""
              : `<td class="total total-column sticky-total" title="${esc(
                  ln.total == null
                    ? `${totalHeader} —`
                    : `${totalHeader} · R$ ${numBR(ln.total)}`
                )}">${
                  ln.total == null
                    ? "—"
                    : esc(brlTri(ln.total, false) || numBR(ln.total, 2))
                }</td>`
          }
        </tr>`;
      })
      .join("");

    return `<div class="triangle-card">
      <div class="mh-tri-scroll">
        <table class="mh-tri-table triangle-table ${winCls}${noTotalCls}">
          <thead>${colHeads}</thead>
          <tbody>${body}</tbody>
        </table>
      </div>
    </div>${
      showLegend
        ? `<p class="mh-legenda-tri">${esc(opts.legendText || legendDefault)}</p>`
        : ""
    }`;
  }

  let fonteDrawerTrigger = null;

  function openFonteDrawer(html, title) {
    const drawer = $("#fonte-drawer");
    const backdrop = $("#fonte-drawer-backdrop");
    const body = $("#fonte-drawer-body");
    const titleEl = $("#fonte-drawer-title");
    if (!drawer || !backdrop || !body) return;
    fonteDrawerTrigger = document.activeElement;
    if (titleEl && title) titleEl.textContent = title;
    body.innerHTML = html;
    drawer.classList.remove("hidden");
    backdrop.classList.remove("hidden");
    drawer.removeAttribute("hidden");
    backdrop.removeAttribute("hidden");
    document.body.classList.add("fonte-drawer-open");
    body.focus();
  }

  function closeFonteDrawer() {
    const drawer = $("#fonte-drawer");
    const backdrop = $("#fonte-drawer-backdrop");
    if (!drawer || !backdrop) return;
    drawer.classList.add("hidden");
    backdrop.classList.add("hidden");
    drawer.setAttribute("hidden", "");
    backdrop.setAttribute("hidden", "");
    document.body.classList.remove("fonte-drawer-open");
    if (fonteDrawerTrigger && typeof fonteDrawerTrigger.focus === "function") {
      fonteDrawerTrigger.focus();
    }
    fonteDrawerTrigger = null;
  }

  function buildFonteTecnicaHtml(ctx) {
    const {
      pack,
      janela,
      janelaTxt,
      J,
      aba,
      c,
      peona,
      avisado,
      bk,
      ik,
      formulas,
      consR,
      pl,
      segmentoLabel,
      peonaTexName,
      despesaVar,
      janelaSeg,
      consPeona,
    } = ctx;

    const nJanela = janela;
    const mkTexGeral = String.raw`M_{k,j}=\left(\dfrac{\displaystyle\sum_{i=k-(n-1)}^{k} T_{i,j}}{\displaystyle\sum_{i=k-(n-1)}^{k} A_i}\right)`;
    const mkTex =
      janela === 6
        ? String.raw`M_{k,j}=\left(\dfrac{\displaystyle\sum_{i=k-5}^{k} T_{i,j}}{\displaystyle\sum_{i=k-5}^{k} A_i}\right)`
        : String.raw`M_{k,j}=\left(\dfrac{\displaystyle\sum_{i=k-11}^{k} T_{i,j}}{\displaystyle\sum_{i=k-11}^{k} A_i}\right)`;
    const ikTex = String.raw`I_k=\displaystyle\sum_{j=0}^{${J}} \bigl(j \times M_{k,j}\bigr)`;
    const ikExpTex =
      janela === 6
        ? String.raw`I_k=(0\times M_{k0})+(1\times M_{k1})+(2\times M_{k2})+(3\times M_{k3})+(4\times M_{k4})+(5\times M_{k5})`
        : null;
    const bkTexGeral = String.raw`B_k=\mu_k=\left(\dfrac{\displaystyle\sum_{i=k-(n-1)}^{k} A_i}{n}\right)`;
    const bkTex =
      janela === 6
        ? String.raw`B_k=\mu_k=\left(\dfrac{\displaystyle\sum_{i=k-5}^{k} A_i}{6}\right)`
        : String.raw`B_k=\mu_k=\left(\dfrac{\displaystyle\sum_{i=k-11}^{k} A_i}{12}\right)`;
    const peonaTex = String.raw`\mathrm{PEONA}_{k}=I_k \times B_k`;
    const peonaSegTex = String.raw`\mathrm{PEONA}_{${peonaTexName},k}=I_k \times B_k`;
    const triTex = String.raw`T_{i,j}=\displaystyle\sum_{n=1}^{N} X_n\,\mathbb{1}(A_n=i,\ D_n=j)`;
    const aiTex = String.raw`A_i=\displaystyle\sum_{j=0}^{${J}} T_{i,j}`;
    const fluxoTex = String.raw`T_{i,j}\;\longrightarrow\;A_i\;\longrightarrow\;M_{k,j}\;\longrightarrow\;I_k\;\longrightarrow\;B_k\;\longrightarrow\;\mathrm{PEONA}_{k}`;

    const recon6 =
      janela === 6 && consR
        ? `planilha R$ ${numBR(pl?.peona)} · consolidado R$ ${numBR(consPeona)}`
        : "N/A para janela 12m na Visão Geral";

    return `
      <section class="fonte-sec">
        <h3>Fórmulas</h3>

        <article class="fonte-formula">
          <p class="fonte-formula-lead">Elemento do triângulo por aviso e atraso:</p>
          <div class="fonte-eq">${mathTex(triTex)}</div>
        </article>

        <article class="fonte-formula">
          <p class="fonte-formula-lead">Total avisado da competência:</p>
          <div class="fonte-eq">${mathTex(aiTex)}</div>
        </article>

        <article class="fonte-formula">
          <p class="fonte-formula-lead">O percentual médio mensal de atraso é obtido pela seguinte formulação:</p>
          <div class="fonte-eq">${mathTex(mkTexGeral)}</div>
          <p class="fonte-formula-lead fonte-formula-lead--sub">Com <em>n</em> = ${nJanela} meses:</p>
          <div class="fonte-eq">${mathTex(mkTex)}</div>
        </article>

        <article class="fonte-formula">
          <p class="fonte-formula-lead">O índice é obtido pela seguinte formulação:</p>
          <div class="fonte-eq">${mathTex(ikTex)}</div>
          ${
            ikExpTex
              ? `<div class="fonte-eq fonte-eq--wrap">${mathTex(ikExpTex)}</div>`
              : ""
          }
        </article>

        <article class="fonte-formula">
          <p class="fonte-formula-lead">A base de cálculo da PEONA corresponde à média mensal dos totais avisados:</p>
          <div class="fonte-eq">${mathTex(bkTexGeral)}</div>
          <p class="fonte-formula-lead fonte-formula-lead--sub">Com <em>n</em> = ${nJanela} meses:</p>
          <div class="fonte-eq">${mathTex(bkTex)}</div>
        </article>

        <article class="fonte-formula">
          <p class="fonte-formula-lead">Desta forma, temos a seguinte formulação:</p>
          <div class="fonte-eq">${mathTex(peonaTex)}</div>
          <p class="fonte-formula-lead fonte-formula-lead--sub">No segmento ${esc(segmentoLabel)}:</p>
          <div class="fonte-eq">${mathTex(peonaSegTex)}</div>
        </article>

        <article class="fonte-formula">
          <p class="fonte-formula-lead">Fluxo resumido do cálculo:</p>
          <div class="fonte-eq fonte-eq--fluxo">${mathTex(fluxoTex, true)}</div>
        </article>
      </section>
      <section class="fonte-sec">
        <h3>Variáveis</h3>
        <ul>
          <li><strong>T<sub>i,j</sub>:</strong> valor na data de aviso <em>i</em> com data de ocorrência atrasada em <em>j</em> meses</li>
          <li><strong>A<sub>i</sub>:</strong> total avisado da competência <em>i</em></li>
          <li><strong>M<sub>k,j</sub>:</strong> proporção média do atraso <em>j</em> na janela</li>
          <li><strong>I<sub>k</sub>:</strong> fator médio (índice) — atual: ${esc(ikBR(ik))}</li>
          <li><strong>B<sub>k</sub>:</strong> base de cálculo — atual: R$ ${esc(numBR(bk))}</li>
          <li><strong>A<sub>n</sub>, D<sub>n</sub>, X<sub>n</sub>:</strong> data de aviso, atraso da ocorrência, despesa ${esc(despesaVar)} do evento</li>
        </ul>
      </section>
      <section class="fonte-sec">
        <h3>Etapas (valores da competência ${esc(mmAbr(c))})</h3>
        <ol>
          <li>A<sub>i</sub> = R$ ${esc(numBR(avisado))}</li>
          <li>B<sub>k</sub> = R$ ${esc(numBR(bk))}</li>
          <li>I<sub>k</sub> = ${esc(ikBR(ik))}</li>
          <li>PEONA = R$ ${esc(numBR(peona))} (I<sub>k</sub>·B<sub>k</sub> = ${
            ik != null && bk != null ? `R$ ${esc(numBR(ik * bk))}` : "—"
          })</li>
        </ol>
      </section>
      <section class="fonte-sec">
        <h3>Origem dos dados</h3>
        <ul>
          <li><strong>Arquivo:</strong> PEONA_INPUT.xlsx · aba ${esc(aba)}</li>
          <li><strong>Bloco triângulo:</strong> ${esc(pack.titulo_aviso || "—")}</li>
          <li><strong>Script R:</strong> peona_ipasgo_v2.R → calcular_peona_serie(..., n_janela=${janela})</li>
          <li><strong>Reconciliação Visão Geral (6m):</strong> ${recon6}</li>
        </ul>
        <h4>Referências Excel (auditoria)</h4>
        <ul>
          <li>Triângulo: <code>${esc(formulas.celula_triangulo || "—")}</code></li>
          <li>Total avisado: <code>${esc(formulas.total_avisado || "—")}</code></li>
          <li>Proporção M<sub>k</sub>: <code>${esc(formulas.proporcao_Mk || "—")}</code></li>
          <li>Fator I<sub>k</sub>: <code>${esc(formulas.fator_Ik || "—")}</code></li>
          <li>Base B<sub>k</sub>: <code>${esc(formulas.base_Bk || "—")}</code></li>
          <li>PEONA: <code>${esc(formulas.peona || "—")}</code></li>
        </ul>
      </section>
      <section class="fonte-sec">
        <h3>Janela</h3>
        <p>Run-off de <strong>${esc(janelaTxt)}</strong> (${esc(aba)}). ${esc(janelaSeg)}.</p>
      </section>`;
  }

  function renderSegRunoff(cfg) {
    const {
      prefix,
      getPack,
      janelaKey,
      abas,
      tituloFixo,
      peonaLabel,
      peonaFluxoLabel,
      peonaTexName,
      accentColor,
      consFields,
      chartKey,
      despesaVar,
    } = cfg;

    const dataAttr = prefix === "mh" ? "mhJanela" : "odJanela";
    const janela = state[janelaKey] === 12 ? 12 : 6;
    state[janelaKey] = janela;
    const pack = getPack(janela);
    const c = ref();
    const aba = abas[janela];
    const janelaTxt = `${janela} meses`;
    const J = janela === 6 ? 5 : 11;

    $$(`#${prefix}-janela-seg button`).forEach((b) =>
      b.classList.toggle("active", Number(b.dataset[dataAttr]) === janela)
    );
    const sortedMeses = mesesOrdenados();
    const multiMeses = sortedMeses.length > 1;
    const chipEl = $(`#${prefix}-comp-chip`);
    if (chipEl) {
      if (multiMeses) {
        chipEl.textContent = `${mmAbr(sortedMeses[0])} a ${mmAbr(sortedMeses.at(-1))}`;
      } else {
        chipEl.textContent = `Competência ${mmAbr(c)}`;
      }
    }

    if (chartKey) destroyChart(chartKey);

    if (!pack || pack.erro) {
      $(`#${prefix}-kpis`).innerHTML = `<div class="mh-kpi"><div class="lbl">Sem dados</div><div class="val">—</div>
        <div class="sub">${esc(pack?.erro || cfg.erroPadrao)}</div></div>`;
      $(`#${prefix}-triangulo`).innerHTML = `<p class="muted">Execute sync_dados.py com PEONA_INPUT.xlsx disponível.</p>`;
      state.fonteTecnica[prefix] = null;
      return;
    }

    const pl = peonaLinhaMH(pack, c);
    const formulas = pack.formulas || {};

    const listSerie = pack.peona_serie || [];
    const idxSerie = listSerie.findIndex((x) => x.competencia === c);
    const plPrev = idxSerie > 0 ? listSerie[idxSerie - 1] : null;

    let peona = pl?.peona;
    let avisado = pl?.total_avisado;
    let bk = pl?.media_nm;
    let ik = pl?.fator_peona;
    let varR = pl?.variacao_r;
    let varP = pl?.variacao_pct;
    let avisadoPrev = plPrev?.total_avisado ?? null;
    const consR = row(c);
    if (janela === 6 && consR) {
      peona = consR[consFields.peona] ?? peona;
      avisado = consR[consFields.avisado] ?? avisado;
      bk = consR[consFields.bk] ?? bk;
      ik = consR[consFields.ik] ?? ik;
      varR = consR[consFields.varR] ?? varR;
      varP = consR[consFields.varP] ?? varP;
      if (plPrev) {
        const consPrev = row(plPrev.competencia);
        if (consPrev) avisadoPrev = consPrev[consFields.avisado] ?? avisadoPrev;
      }
    }

    let avisadoVarP = null;
    let avisadoVarR = null;
    if (avisado != null && avisadoPrev != null && Number(avisadoPrev) !== 0) {
      avisadoVarR = Number(avisado) - Number(avisadoPrev);
      avisadoVarP = avisadoVarR / Number(avisadoPrev);
    }

    const varTitle =
      varR != null && varP != null
        ? `${brl(varR)} · ${signedPctLabel(varP)}`
        : varR != null
          ? brl(varR)
          : "";
    const avisadoVarTitle =
      avisadoVarR != null && avisadoVarP != null
        ? `${brl(avisadoVarR)} · ${signedPctLabel(avisadoVarP)} versus ${mmAbr(
            plPrev?.competencia
          )}`
        : "";

    const ikSerie = listSerie.filter(
      (x) => x.fator_peona != null && x.competencia <= c
    );
    const sparkSeries = ikSerie.slice(-18).map((x) => ({
      label: mmAbr(x.competencia),
      valor: x.fator_peona,
    }));
    const ikSpark = ikSparkSvg(sparkSeries, "#007940");

    $(`#${prefix}-kpis`).innerHTML = `
      <div class="mh-kpi">
        <div class="mh-kpi-head">
          <span class="lbl">${esc(peonaLabel)}</span>
          ${varP != null ? varPill(varP) : ""}
        </div>
        <div class="val" title="${esc(brl(peona))}">${brlMi(peona)}</div>
        <div class="sub">Competência ${esc(mmAbr(c))}</div>
      </div>
      <div class="mh-kpi">
        <div class="mh-kpi-head">
          <span class="lbl">Total avisado</span>
          ${avisadoVarP != null ? varPill(avisadoVarP) : ""}
      </div>
        <div class="val" title="${esc(brl(avisado))}">${brlMi(avisado)}</div>
        <div class="sub">Total avisado na competência</div>
      </div>
      <div class="mh-kpi">
        <div class="mh-kpi-head">
          <span class="lbl">Base de cálculo B<sub>k</sub></span>
        </div>
        <div class="val" title="${esc(brl(bk))}">${brlMi(bk)}</div>
        <div class="sub">Média dos totais avisados</div>
      </div>
      <div class="mh-kpi mh-kpi-ik">
        <div class="mh-kpi-head">
          <span class="lbl">Índice I<sub>k</sub></span>
        </div>
        <div class="val">${ikBR(ik)}</div>
        <div class="sub ik-sub">
          <span class="ik-hint">Fator de desenvolvimento aplicado à base B<sub>k</sub></span>
        </div>
        ${ikSpark ? `<div class="ik-spark-wrap">${ikSpark}</div>` : ""}
      </div>`;

    const pills = $$(`#${prefix}-kpis .var-pill`);
    if (pills[0] && varTitle) pills[0].title = varTitle;
    if (pills[1] && avisadoVarTitle) pills[1].title = avisadoVarTitle;

    const cols = pack.colunas_lag || [];
    const linhasAll = pack.triangulo_aviso?.linhas || [];
    const linhas = triLinhasDoSlicer(linhasAll);
    const oc = pack.triangulo_ocorrencia;
    const ocCols = oc?.colunas || cols;
    const linhasOc = triLinhasDoSlicer(oc?.linhas || []);
    const blocoOc = $(`#${prefix}-bloco-ocorrencia`);
    const wrapOc = $(`#${prefix}-triangulo-ocorrencia`);

    if (!linhas.length) {
      $(`#${prefix}-triangulo`).innerHTML = multiMeses
        ? `<p class="muted">Não há linhas do triângulo no intervalo selecionado (${esc(
            mmAbr(sortedMeses[0])
          )} a ${esc(mmAbr(sortedMeses.at(-1)))}).</p>`
        : `<p class="muted">Triângulo sem linhas para a competência ${esc(mmAbr(c))}.</p>`;
    } else {
      $(`#${prefix}-triangulo`).innerHTML = buildTriTableHtml(linhas, cols, c, {
        janela,
        rowHeader: "Data de aviso",
        axisMode: "aviso",
        legend: false,
      });
    }

    if (linhasOc.length && blocoOc && wrapOc) {
      wrapOc.innerHTML = buildTriTableHtml(linhasOc, ocCols, c, {
        legend: false,
        janela,
        rowHeader: "Data de ocorrência",
        axisMode: "ocorrencia",
      });
      blocoOc.classList.remove("hidden");
      blocoOc.hidden = false;
    } else if (blocoOc) {
      if (wrapOc) wrapOc.innerHTML = "";
      blocoOc.classList.add("hidden");
      blocoOc.hidden = true;
    }

    const prop = proporcaoLinhaMH(pack, c);
    const fat = fatorLinhaMH(pack, c);
    const mkCards = (prop?.proporcoes || [])
      .map((p, i) => {
        const f = fat?.proporcoes?.[i];
        const lab = lagLabel(p.col);
        return `<div class="mh-mk-card">
          <div class="mk-name">${esc(lab)}</div>
          <div class="mk-pct">${pctBR(p.valor, 2)}</div>
          <div class="mk-meta" title="${esc(lagTip(p.col))}">${esc(lagTip(p.col))}</div>
          <div class="mk-interp">${
            f?.valor != null ? `Parcela j·M: ${ikBR(f.valor)}` : ""
          }</div>
        </div>`;
      })
      .join("");

    $(`#${prefix}-fatores`).innerHTML = `
      <p class="mh-legenda-tri">Proporções da competência <strong>${esc(mmAbr(c))}</strong></p>
      <div class="mh-mk-grid">${mkCards || "<p class='muted'>Sem proporções para a competência.</p>"}</div>
      <div class="mh-ik-resumo">
        <span>I<sub>k</sub> = <strong>${ikBR(ik)}</strong></span>
        <span class="muted">Estima a parcela adicional para eventos ocorridos e ainda não avisados.</span>
      </div>`;

    const dataFluxo = multiMeses
      ? `${mmAbr(sortedMeses[0])} a ${mmAbr(sortedMeses.at(-1))}`
      : mmAbr(c);

    $(`#${prefix}-memoria`).innerHTML = `
      <div class="mh-fluxo">
        <div class="mh-fluxo-item">
          <div class="mh-fluxo-head">∑ avisado em ${esc(dataFluxo)} <span class="sym">(A<sub>i</sub>)</span></div>
          <div class="mh-fluxo-val">R$ ${esc(numBR(avisado))}</div>
      </div>
        <span class="mh-fluxo-arrow">→</span>
        <div class="mh-fluxo-item">
          <div class="mh-fluxo-head">Base de Cálculo <span class="sym">(B<sub>k</sub>)</span></div>
          <div class="mh-fluxo-val">R$ ${esc(numBR(bk))}</div>
        </div>
        <span class="mh-fluxo-arrow">→</span>
        <div class="mh-fluxo-item">
          <div class="mh-fluxo-head">Índice <span class="sym">(I<sub>k</sub>)</span></div>
          <div class="mh-fluxo-val">${esc(ikBR(ik))}</div>
        </div>
        <span class="mh-fluxo-arrow">→</span>
        <div class="mh-fluxo-item mh-fluxo-item--peona">
          <span class="mh-fluxo-badge">Resultado</span>
          <div class="mh-fluxo-head">Valor PEONA</div>
          <div class="mh-fluxo-val">R$ ${esc(numBR(peona))}</div>
        </div>
      </div>`;

    state.fonteTecnica[prefix] = {
      html: buildFonteTecnicaHtml({
        pack,
        janela,
        janelaTxt,
        J,
        aba,
        c,
        peona,
        avisado,
        bk,
        ik,
        formulas,
        consR,
        pl,
        segmentoLabel: tituloFixo,
        peonaTexName,
        despesaVar,
        janelaSeg: `Segmentação ativa: janela de ${janelaTxt}`,
        consPeona: consR?.[consFields.peona],
      }),
      title: `Fonte técnica — ${tituloFixo} (${janelaTxt})`,
    };
  }

  /* ---------- Médico-Hospitalar (planilha MH 6 / MH 12) ---------- */
  function renderMH() {
    renderSegRunoff({
      prefix: "mh",
      getPack: mhPack,
      janelaKey: "mhJanela",
      abas: { 6: "MH 6", 12: "MH 12" },
      tituloFixo: "Médico-Hospitalar",
      peonaLabel: "PEONA Médico-Hospitalar",
      peonaFluxoLabel: "PEONA MH",
      peonaTexName: "MH",
      accentColor: "#007940",
      consFields: {
        peona: "peona_mh",
        avisado: "total_avisado_mh",
        bk: "media_mh",
        ik: "fator_mh",
        varR: "variacao_r_mh",
        varP: "variacao_pct_mh",
      },
      chartKey: "mhEvo",
      despesaVar: "MH",
      erroPadrao: "Triângulos MH não sincronizados",
    });
  }

  /* ---------- Odontológico (planilha Odonto 6 / Odonto 12) ---------- */
  function renderOD() {
    renderSegRunoff({
      prefix: "od",
      getPack: odPack,
      janelaKey: "odJanela",
      abas: { 6: "Odonto 6", 12: "Odonto 12" },
      tituloFixo: "Odontológico",
      peonaLabel: "PEONA Odontológica",
      peonaFluxoLabel: "PEONA OD",
      peonaTexName: "OD",
      accentColor: "#C4A018",
      consFields: {
        peona: "peona_od",
        avisado: "total_avisado_od",
        bk: "media_od",
        ik: "fator_od",
        varR: "variacao_r_od",
        varP: "variacao_pct_od",
      },
      chartKey: "odEvo",
      despesaVar: "OD",
      erroPadrao: "Triângulos OD não sincronizados",
    });
  }

  /* ---------- Run-Off Puro (planilha: SOMA das faixas / caudas) ---------- */
  function lagValorLinhaPorCol(ln, col) {
    if (!ln?.lags || col == null) return null;
    const key = String(col);
    const hit = ln.lags.find((lg) => String(lg.col) === key);
    if (!hit || hit.vazio || hit.valor == null) return null;
    const n = Number(hit.valor);
    return Number.isFinite(n) ? n : null;
  }

  function lagValorLinha(ln, j, preferPlus = false) {
    if (!ln?.lags) return null;
    const cands = ln.lags.filter((lg) => lagIndex(lg.col) === j);
    if (!cands.length) return null;
    const hit = preferPlus
      ? cands.find((lg) => String(lg.col).includes("+")) || cands[0]
      : cands.find((lg) => !String(lg.col).includes("+")) || cands[0];
    if (!hit || hit.vazio || hit.valor == null) return null;
    const n = Number(hit.valor);
    return Number.isFinite(n) ? n : null;
  }

  function caudaLinhaCols(ln, fromJ, cols) {
    if (!ln) return { sum: null, cells: [] };
    let sum = 0;
    let any = false;
    const cells = [];
    (cols || []).forEach((col) => {
      const j = lagIndex(col);
      if (j < fromJ) return;
      const v = lagValorLinhaPorCol(ln, col);
      cells.push({ col: String(col), valor: v });
      if (v != null) {
        sum += v;
        any = true;
      }
    });
    return { sum: any ? sum : null, cells };
  }

  /**
   * Run-off puro = soma das faixas no triângulo por AVISO
   * (ex. jul/24 → (J1…J5+)@ago + (J2…J5+)@set + … + J5+@dez),
   * igual a SOMA(D:H; E:H; …) / runoff_aux da planilha.
   */
  function calcRunoffPuroDiagonal(linhas, competencia, cols) {
    const sorted = [...(linhas || [])].sort((a, b) =>
      String(a.competencia).localeCompare(String(b.competencia))
    );
    const idx = sorted.findIndex((x) => x.competencia === competencia);
    if (idx < 0) return null;

    const lagCols = (cols || []).filter((col) => lagIndex(col) > 0);
    const maxJ = lagCols.reduce((m, col) => Math.max(m, lagIndex(col)), 0);
    const parts = [];
    const diagKeys = new Set();
    const diagLagCols = new Set(lagCols.map(String));
    let total = 0;
    let completo = true;

    for (let k = 1; k <= maxJ; k++) {
      const future = sorted[idx + k];
      if (!future) {
        completo = false;
        parts.push({
          k,
          aviso: null,
          ocorrencia: competencia,
          valor: null,
          missing: true,
          cells: [],
          label: `L${k}`,
          formula: `J${k}+…+J${maxJ}`,
        });
        continue;
      }
      const { sum, cells } = caudaLinhaCols(future, k, cols);
      if (sum == null) completo = false;
      else total += sum;
      cells.forEach((cell) => {
        if (lagIndex(cell.col) >= k) {
          diagKeys.add(`${future.competencia}|${cell.col}`);
        }
      });
      parts.push({
        k,
        aviso: future.competencia,
        ocorrencia: competencia,
        valor: sum,
        missing: sum == null,
        cells,
        label: `L${k}`,
        formula: `J${k}+…+J${maxJ}`,
      });
    }

    return {
      competencia,
      runoff_puro: total,
      completo,
      parts,
      diagKeys,
      diagLagCols,
      maxJ,
      n: sorted.length,
      idx,
    };
  }

  function runoffAuxLinha(pack, comp) {
    if (!pack) return null;
    return (pack.runoff_aux || []).find((x) => x.competencia === comp) || null;
  }

  /** Linhas do triângulo necessárias para enxergar a região do run-off. */
  function triLinhasDiagonal(linhas, competencia, parts) {
    const keep = new Set([competencia]);
    (parts || []).forEach((p) => {
      if (p.aviso) keep.add(p.aviso);
    });
    return (linhas || []).filter((ln) => keep.has(ln.competencia));
  }

  function renderRunoffPuro() {
    const seg = state.roSeg === "OD" ? "OD" : "MH";
    state.roSeg = seg;
    const janela = state.roJanela === 12 ? 12 : 6;
    state.roJanela = janela;
    const pack = seg === "OD" ? odPack(janela) : mhPack(janela);
    const c = ref();
    const aba = seg === "OD" ? (janela === 12 ? "Odonto 12" : "Odonto 6") : janela === 12 ? "MH 12" : "MH 6";
    const segNome = seg === "OD" ? "Odontológico" : "Médico-hospitalar";
    const janelaTxt = `${janela} meses`;

    $$("#ro-seg-toggle button").forEach((b) =>
      b.classList.toggle("active", b.dataset.roSeg === seg)
    );
    $$("#ro-janela-seg button").forEach((b) =>
      b.classList.toggle("active", Number(b.dataset.roJanela) === janela)
    );

    if (!pack || pack.erro) {
      $("#ro-kpis").innerHTML = `<div class="mh-kpi"><div class="lbl">Sem dados</div><div class="val">—</div>
        <div class="sub">${esc(pack?.erro || "Triângulos não sincronizados")}</div></div>`;
      $("#ro-triangulo").innerHTML = `<p class="muted">Execute sync_dados.py com PEONA_INPUT.xlsx disponível.</p>`;
      $("#ro-memoria").innerHTML = "";
      state.fonteTecnica.ro = null;
      return;
    }

    const linhasAll = pack.triangulo_aviso?.linhas || [];
    const cols = pack.colunas_lag || [];
    const calc = calcRunoffPuroDiagonal(linhasAll, c, cols);
    const aux = runoffAuxLinha(pack, c);
    const runoffCalc = calc?.runoff_puro ?? null;
    const runoff =
      aux?.runoff_puro != null && Number.isFinite(Number(aux.runoff_puro))
        ? Number(aux.runoff_puro)
        : runoffCalc;
    const avisadoMes =
      aux?.avisado_mes != null
        ? Number(aux.avisado_mes)
        : peonaLinhaMH(pack, c)?.total_avisado ?? null;
    const ocorridoMes =
      aux?.ocorrido_mes != null ? Number(aux.ocorrido_mes) : null;
    const completo = calc?.completo ?? null;
    const j0MesmoMes = lagValorLinha(
      linhasAll.find((x) => x.competencia === c),
      0,
      false
    );

    let varP = null;
    let varR = null;
    let avisadoVarP = null;
    let avisadoVarR = null;
    let ocorridoVarP = null;
    let ocorridoVarR = null;
    const prevComp = shiftComp(c, -1);
    const avisadoAtual = avisadoMes ?? j0MesmoMes;
    if (prevComp) {
      const prevAux = runoffAuxLinha(pack, prevComp);
      const prevCalc = calcRunoffPuroDiagonal(linhasAll, prevComp, cols);
      if (runoff != null) {
        const prevRo =
          prevAux?.runoff_puro != null
            ? Number(prevAux.runoff_puro)
            : prevCalc?.runoff_puro ?? null;
        if (prevRo != null && prevRo !== 0) {
          varR = runoff - prevRo;
          varP = varR / prevRo;
        }
      }
      const avisadoPrev =
        prevAux?.avisado_mes != null
          ? Number(prevAux.avisado_mes)
          : peonaLinhaMH(pack, prevComp)?.total_avisado ?? null;
      if (avisadoAtual != null && avisadoPrev != null && Number(avisadoPrev) !== 0) {
        avisadoVarR = Number(avisadoAtual) - Number(avisadoPrev);
        avisadoVarP = avisadoVarR / Number(avisadoPrev);
      }
      const ocorridoPrev =
        prevAux?.ocorrido_mes != null ? Number(prevAux.ocorrido_mes) : null;
      if (ocorridoMes != null && ocorridoPrev != null && Number(ocorridoPrev) !== 0) {
        ocorridoVarR = Number(ocorridoMes) - Number(ocorridoPrev);
        ocorridoVarP = ocorridoVarR / Number(ocorridoPrev);
      }
    }

    const consHit = (D().consistencia || []).find(
      (r) =>
        r.tipo === seg &&
        !r.periodo_resumo &&
        (r.competencia === c || r.competencia_teste === c) &&
        (r.janela === (janela === 12 ? "12m" : "6m") ||
          r.janela_meses === janela ||
          !r.janela)
    );
    const peonaEst = consHit?.peona_estimada ?? peonaLinhaMH(pack, c)?.peona ?? null;
    const aderencia =
      peonaEst != null && runoff != null && Number(runoff) !== 0
        ? Number(peonaEst) / Number(runoff)
        : null;

    $("#ro-kpis").innerHTML = `
      <div class="mh-kpi">
        <div class="mh-kpi-head">
          <span class="lbl">Run-off puro</span>
          ${varP != null ? varPill(varP) : ""}
        </div>
        <div class="val" title="${esc(brl(runoff))}">${brlMi(runoff)}</div>
        <div class="sub">Ocorrência ${esc(mmAbr(c))}${
          completo === false ? " · parcial" : completo ? " · completo" : ""
        }</div>
      </div>
      <div class="mh-kpi">
        <div class="mh-kpi-head">
          <span class="lbl">Avisado no mês (J0)</span>
          ${avisadoVarP != null ? varPill(avisadoVarP) : ""}
        </div>
        <div class="val" title="${esc(brl(avisadoAtual))}">${brlMi(avisadoAtual)}</div>
        <div class="sub">Não entra no run-off puro</div>
      </div>
      <div class="mh-kpi">
        <div class="mh-kpi-head">
          <span class="lbl">Ocorrido no mês</span>
          ${ocorridoVarP != null ? varPill(ocorridoVarP) : ""}
        </div>
        <div class="val" title="${esc(brl(ocorridoMes))}">${brlMi(ocorridoMes)}</div>
        <div class="sub">Despesa por data de ocorrência</div>
      </div>
      <div class="mh-kpi">
        <div class="mh-kpi-head"><span class="lbl">Aderência PEONA</span></div>
        <div class="val">${aderencia != null ? pctBR(aderencia, 2) : "—"}</div>
        <div class="sub">${
          peonaEst != null
            ? `PEONA estimada ${esc(brlMi(peonaEst))}`
            : "Sem PEONA comparável nesta competência"
        }</div>
      </div>`;

    const pills = $$("#ro-kpis .var-pill");
    let pillIdx = 0;
    if (pills[pillIdx] && varR != null && varP != null) {
      pills[pillIdx].title = `${brl(varR)} · ${signedPctLabel(varP)} versus ${mmAbr(prevComp)}`;
      pillIdx += 1;
    }
    if (pills[pillIdx] && avisadoVarR != null && avisadoVarP != null) {
      pills[pillIdx].title = `${brl(avisadoVarR)} · ${signedPctLabel(avisadoVarP)} versus ${mmAbr(prevComp)}`;
      pillIdx += 1;
    }
    if (pills[pillIdx] && ocorridoVarR != null && ocorridoVarP != null) {
      pills[pillIdx].title = `${brl(ocorridoVarR)} · ${signedPctLabel(ocorridoVarP)} versus ${mmAbr(prevComp)}`;
    }

    const parts = calc?.parts || [];
    const diagKeys = calc?.diagKeys || new Set();
    const linhasDiag = triLinhasDiagonal(linhasAll, c, parts);

    if (!linhasDiag.length) {
      $("#ro-triangulo").innerHTML = `<p class="muted">Triângulo sem linhas para a competência ${esc(
        mmAbr(c)
      )}.</p>`;
    } else {
      $("#ro-triangulo").innerHTML = buildTriTableHtml(linhasDiag, cols, c, {
        janela,
        rowHeader: "Data de aviso",
        axisMode: "aviso",
        legend: false,
        diagKeys,
        hidePeak: true,
        hideTotal: true,
        dimOutsideDiag: true,
        selectedSet: new Set([c]),
      });
    }

    $("#ro-memoria").innerHTML = `
      <div class="mh-fluxo">
        ${parts
      .map((p, i) => {
            const head = p.missing
              ? `${esc(p.label)} (indisponível)`
              : esc(p.label);
            const tip = p.formula
              ? ` title="${esc(
                  p.aviso
                    ? `${p.label}: ${p.formula} · ${mmAbr(p.aviso)}`
                    : `${p.label}: ${p.formula}`
                )}"`
              : "";
            const val =
              p.missing || p.valor == null ? "—" : `R$ ${esc(numBR(p.valor))}`;
            return `${i ? '<span class="mh-fluxo-arrow">+</span>' : ""}
          <div class="mh-fluxo-item"${tip}>
            <div class="mh-fluxo-head">${head}</div>
            <div class="mh-fluxo-val">${val}</div>
        </div>`;
      })
          .join("")}
        <span class="mh-fluxo-arrow">=</span>
        <div class="mh-fluxo-item mh-fluxo-item--peona">
          <span class="mh-fluxo-badge">Resultado</span>
          <div class="mh-fluxo-head">Run-off puro</div>
          <div class="mh-fluxo-val">R$ ${esc(numBR(runoff))}</div>
      </div>
        </div>
      <p class="mh-legenda-tri" style="margin-top:12px">
        Soma das <strong>faixas triangulares</strong> no triângulo por aviso
        (ocorrência de referência <strong>${esc(mmAbr(c))}</strong>).
        ${
          completo === false
            ? " Resultado <strong>parcial</strong>: faltam meses futuros na base."
            : completo
              ? " Resultado <strong>completo</strong>."
              : ""
        }
      </p>`;

    const texFormula =
      String.raw`\mathrm{Run\text{-}off}_{X}=\sum_{k=1}^{n}\sum_{j=k}^{n} J_{j}(X+k)`;

    state.fonteTecnica.ro = {
      title: `Fonte técnica — Run-Off Puro (${segNome}, ${janelaTxt})`,
      html: `
        <section class="fonte-sec">
          <h3>O que é o run-off puro</h3>
          <p class="fonte-txt">Valor real a posteriori usado como PEONA real no teste de consistência — soma das faixas do triângulo por aviso (mesma lógica da planilha / <code>runoff_aux</code>).</p>
        </section>
        <section class="fonte-sec">
          <h3>Triângulo no aviso</h3>
          <article class="fonte-formula">
            <p class="fonte-formula-lead">Ex.: jul/24 = (J1…J5+)@ago + (J2…J5+)@set + … + J5+@dez:</p>
            <div class="fonte-eq">${mathTex(texFormula)}</div>
            <p class="fonte-txt">Em que <em>J<sub>j</sub>(X+k)</em> é o valor avisado no mês <em>X+k</em> com atraso <em>j</em>. Equivalente a <code>LEAD</code> das caudas no R e a SOMA(D:H; E:H; F:H; G:H; H) na planilha. J0 não entra.</p>
          </article>
          <ul>
            <li><strong>Segmento:</strong> ${esc(segNome)}</li>
            <li><strong>Aba:</strong> ${esc(aba)}</li>
            <li><strong>Ocorrência:</strong> ${esc(mmAbr(c))}</li>
            <li><strong>Run-off puro:</strong> ${esc(brl(runoff))}</li>
            <li><strong>Completude:</strong> ${
              completo === false
                ? "Parcial (meses futuros ausentes)"
                : completo
                  ? "Completo"
                  : "—"
            }</li>
          </ul>
        </section>
      `,
    };
  }


  /* ---------- Consistência ---------- */
  function renderConsistencia() {
    const seg = state.consistSeg === "OD" ? "OD" : "MH";
    state.consistSeg = seg;
    const janela = state.consistJanela === 12 ? 12 : 6;
    state.consistJanela = janela;
    const janelaKey = janela === 12 ? "12m" : "6m";
    const janelaTxt = `${janela} meses`;
    if (state.consistChart !== "media") state.consistChart = "mensal";

    function shiftMonths(iso, delta) {
      if (!iso) return iso;
      const [y, m] = iso.split("-").map((x) => Number(x));
      const d = new Date(Date.UTC(y, m - 1, 1));
      d.setUTCMonth(d.getUTCMonth() + delta);
      const yy = d.getUTCFullYear();
      const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
      return `${yy}-${mm}-01`;
    }

    const peonaComp = ref();
    const testeComp = shiftMonths(peonaComp, -3);

    const meta = D().consistencia_meta || {};
    const corte = meta.corte_metodologia || "2025-09-01";
    const inicio6 = meta.inicio_6m || "2025-10-01";
    const ans = meta.ans_grande_porte || {
      media: { inf: -0.1078, sup: 0.1362 },
      mensal: { inf: -0.2453, sup: 0.3094 },
    };

    $$("#cs-seg-toggle button").forEach((b) =>
      b.classList.toggle("active", b.dataset.consistSeg === seg)
    );
    $$("#cs-janela-seg button").forEach((b) =>
      b.classList.toggle("active", Number(b.dataset.consistJanela) === janela)
    );
    $$("#cs-chart-toggle button").forEach((b) =>
      b.classList.toggle("active", b.dataset.consistChart === state.consistChart)
    );

    function pctSinal(v) {
      if (v == null || Number.isNaN(Number(v))) return "—";
      const p = Number(v) * 100;
      const absTxt = Math.abs(p).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      if (p > 0) return `+${absTxt}%`;
      if (p < 0) return `-${absTxt}%`;
      return `${absTxt}%`;
    }

    function fmtLim(frac) {
      const p = Number(frac) * 100;
      return (
        p.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }) + "%"
      );
    }

    /** Status curto: Consistente | Não consistente | — */
    function statusCurto(codigo) {
      if (codigo === "dentro") return { texto: "Consistente", cls: "ok" };
      if (codigo === "fora") return { texto: "Não consistente", cls: "err" };
      return { texto: "—", cls: "na" };
    }

    function statusPill(codigo) {
      const s = statusCurto(codigo);
      if (s.cls === "na") return `<span class="cs-status-dash">—</span>`;
      return `<span class="cs-status ${s.cls}">${esc(s.texto)}</span>`;
    }

    function statusMensalRow(row) {
      if (!row || row.variacao_mensal == null || row.pendente) return statusPill(null);
      return statusPill(row.status_mensal_ans);
    }

    function statusMediaRow(row) {
      if (!row || row.variacao_media == null) return statusPill(null);
      if (row.status_media_ans === "nao_disponivel" || row.status_media_ans === "nao_avaliavel")
        return statusPill(null);
      return statusPill(row.status_media_ans);
    }

    /** Consolidado do mês: só Consistente / Não consistente / — */
    function consolidadoCurto(row) {
      if (!row || row.pendente || row.status === "nao_executado") return { texto: "—", cls: "na" };
      if (row.variacao_mensal == null) return { texto: "—", cls: "na" };
      // Histórico sem média: não classifica consolidado
      if (row.variacao_media == null || row.status === "avaliacao_parcial")
        return { texto: "—", cls: "na" };
      if (row.status === "consistente") return { texto: "Consistente", cls: "ok" };
      if (row.status === "nao_consistente") return { texto: "Não consistente", cls: "err" };
      return { texto: "—", cls: "na" };
    }

    function consolidadoHtml(row) {
      const c = consolidadoCurto(row);
      if (c.cls === "na") return `<span class="cs-status-dash">—</span>`;
      return `<span class="cs-status ${c.cls}">${esc(c.texto)}</span>`;
    }

    const rowsAll = (D().consistencia || [])
      .filter((r) => r.tipo === seg && !r.periodo_resumo && r.competencia)
      .sort((a, b) => {
        const c = a.competencia.localeCompare(b.competencia);
        if (c !== 0) return c;
        return String(a.janela || "").localeCompare(String(b.janela || ""));
      });

    function rowJanelaKey(r) {
      if (r.janela === "6m" || r.janela === "12m") return r.janela;
      if (Number(r.janela_meses) === 6) return "6m";
      if (Number(r.janela_meses) === 12) return "12m";
      return r.competencia <= corte ? "12m" : "6m";
    }

    /**
     * Linha da competência na visão selecionada.
     * - 12m: só registros 12m
     * - 6m: 6m a partir de out/2025; antes disso usa 12m (histórico completo
     *   de 12 competências, ex. mai/25–abr/26)
     */
    function pickRowView(comp) {
      const doMes = rowsAll.filter((r) => r.competencia === comp);
      if (!doMes.length) return null;
      if (janela === 12) {
        return doMes.find((r) => rowJanelaKey(r) === "12m") || null;
      }
      if (comp >= inicio6) {
        return (
          doMes.find((r) => rowJanelaKey(r) === "6m") ||
          doMes.find((r) => rowJanelaKey(r) === "12m") ||
          null
        );
      }
      return doMes.find((r) => rowJanelaKey(r) === "12m") || doMes[0] || null;
    }

    // Resultado do mês na janela selecionada (6m / 12m)
    const rowTeste =
      rowsAll.find(
        (r) => r.competencia === testeComp && rowJanelaKey(r) === janelaKey
      ) || null;

    const compsAteTeste = [
      ...new Set(
        rowsAll
          .filter((r) => r.competencia && r.competencia <= testeComp)
          .map((r) => r.competencia)
      ),
    ].sort();
    const candidates = compsAteTeste
      .map(pickRowView)
      .filter((r) => r && r.variacao_mensal != null);
    const endTesteComp = candidates.length
      ? candidates[candidates.length - 1].competencia
      : null;

    // Histórico sempre com 12 competências (ex.: mai/25–abr/26),
    // independentemente da janela metodológica 6m/12m.
    const fimHist = endTesteComp || testeComp;
    const iniHist = shiftMonths(fimHist, -11);

    function serieNoPeriodo(ini, fim) {
      const comps = [
        ...new Set(
          rowsAll
            .filter(
      (r) =>
                r.competencia &&
                r.competencia >= ini &&
                r.competencia <= fim
            )
            .map((r) => r.competencia)
        ),
      ].sort();
      return comps
        .map(pickRowView)
        .filter((r) => r && r.variacao_mensal != null);
    }

    const serie = serieNoPeriodo(iniHist, fimHist);
    const endTabela = fimHist;
    const serieTabela = serie;

    // ---- Resultado do mês ----
    const testeDisponivel =
      rowTeste &&
      rowTeste.variacao_mensal != null &&
      rowTeste.status !== "nao_executado" &&
      !rowTeste.pendente;

    if (!testeDisponivel) {
      const motivo = !rowTeste
        ? "Teste ainda não disponível para a competência do teste na fonte oficial."
        : rowTeste.status_mensagem || "Teste ainda não disponível na fonte oficial.";
      $("#cs-resultado").innerHTML = `
        <div class="mh-kpi">
          <div class="mh-kpi-head"><span class="lbl">Resultado</span></div>
          <div class="val">—</div>
          <div class="sub">${esc(motivo)}</div>
        </div>`;
    } else {
      const cons = consolidadoCurto(rowTeste);
      const consHtml =
            cons.cls === "na"
              ? `<span class="cs-status-dash">—</span>`
          : `<span class="cs-status ${cons.cls}">${esc(cons.texto)}</span>`;
      $("#cs-resultado").innerHTML = `
        <div class="mh-kpi">
          <div class="mh-kpi-head">
            <span class="lbl">PEONA estimada</span>
            ${rowTeste.variacao_mensal != null ? varPill(rowTeste.variacao_mensal) : ""}
          </div>
          <div class="val" title="${esc(brl(rowTeste.peona_estimada))}">${brlMi(rowTeste.peona_estimada)}</div>
          <div class="sub">Competência do teste ${esc(mmAbr(testeComp))}</div>
        </div>
        <div class="mh-kpi">
          <div class="mh-kpi-head"><span class="lbl">Run-off puro</span></div>
          <div class="val" title="${esc(brl(rowTeste.peona_real))}">${brlMi(rowTeste.peona_real)}</div>
          <div class="sub">PEONA real observada · ${esc(janelaTxt)}</div>
        </div>
        <div class="mh-kpi">
          <div class="mh-kpi-head"><span class="lbl">Variação mensal</span></div>
          <div class="val">${pctSinal(rowTeste.variacao_mensal)}</div>
          <div class="sub">Estimada ÷ run-off − 1</div>
        </div>
        <div class="mh-kpi">
          <div class="mh-kpi-head"><span class="lbl">Resultado consolidado</span></div>
          <div class="val">${consHtml}</div>
          <div class="sub">Status ANS da competência</div>
        </div>`;
    }

    // ---- Fonte técnica (drawer): ANS + metodologia + rastreabilidade ----
    const stM = statusCurto(
      testeDisponivel ? rowTeste.status_mensal_ans : null
    );
    const stA = statusCurto(
      testeDisponivel && rowTeste.variacao_media != null
        ? rowTeste.status_media_ans
        : null
    );
    const nJanela = janela;
    const procData = (D().meta && D().meta.gerado_em) || "—";
    const srcTxt = rowTeste
      ? `${rowTeste.fonte_arquivo || ""} · ${rowTeste.fonte_aba || ""} · ${rowTeste.janela_meses || nJanela}m`
      : "—";
    const segNome = seg === "OD" ? "Odontológico" : "Médico-hospitalar";
    const texVarMensal = String.raw`V_t=\left(\frac{\operatorname{PEONA}^{\mathrm{estimada}}_t}{\operatorname{PEONA}^{\mathrm{real}}_t}-1\right)\times100`;
    const texVarMedia = String.raw`\overline{V}_t=\frac{1}{n}\sum_{i=t-n+1}^{t}V_i`;
    const texJanela = String.raw`n=\begin{cases}12,& t\leq\text{set/2025}\\6,& t\geq\text{out/2025}\end{cases}`;

    state.fonteTecnica.cs = {
      title: `Fonte técnica — Consistência (${segNome}, ${janelaTxt})`,
      html: `
        <section class="fonte-sec">
          <h3>Limites ANS — operadora de grande porte</h3>
          <div class="fonte-eq" style="padding:0;overflow:auto">
            <table class="cs-ans-table" style="margin:0;max-width:none">
          <thead>
            <tr>
              <th>Indicador</th>
              <th>Limite inferior</th>
              <th>Limite superior</th>
              <th>Status do mês</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Variação mensal</td>
              <td>${esc(fmtLim(ans.mensal.inf))}</td>
              <td>${esc(fmtLim(ans.mensal.sup))}</td>
              <td>${stM.cls === "na" ? "—" : esc(stM.texto)}</td>
            </tr>
            <tr>
              <td>Variação média</td>
              <td>${esc(fmtLim(ans.media.inf))}</td>
              <td>${esc(fmtLim(ans.media.sup))}</td>
              <td>${stA.cls === "na" ? "—" : esc(stA.texto)}</td>
            </tr>
          </tbody>
        </table>
      </div>
        </section>

        <section class="fonte-sec">
          <h3>Metodologia matemática</h3>
          <article class="fonte-formula">
            <p class="fonte-formula-lead">Variação mensal:</p>
            <div class="fonte-eq">${mathTex(texVarMensal)}</div>
            <p class="fonte-txt">Compara a PEONA estimada com o valor posteriormente observado no run-off.</p>
          </article>
          <article class="fonte-formula">
            <p class="fonte-formula-lead">Variação média da janela:</p>
            <div class="fonte-eq">${mathTex(texVarMedia)}</div>
            <p class="fonte-txt">Calcula a média das variações mensais dentro da janela aplicável.</p>
          </article>
          <article class="fonte-formula">
            <p class="fonte-formula-lead">Janela metodológica:</p>
            <div class="fonte-eq">${mathTex(texJanela)}</div>
            <p class="fonte-txt">Até setembro de 2025 utiliza-se a janela de 12 meses; a partir de outubro de 2025, a janela de 6 meses.</p>
          </article>
        </section>

        <section class="fonte-sec">
          <h3>Fonte e rastreabilidade</h3>
          <ul>
            <li><strong>Segmento:</strong> ${esc(segNome)}</li>
          <li><strong>Competência do teste:</strong> ${esc(mmAbr(testeComp))}</li>
          <li><strong>Janela:</strong> ${esc(String(nJanela))} meses</li>
          <li><strong>Arquivo / aba:</strong> ${esc(srcTxt)}</li>
          <li><strong>Fórmula da variação:</strong> ${esc(meta.formula_variacao || "V_t = PEONA_estimada / PEONA_real - 1")}</li>
          <li><strong>Data de processamento:</strong> ${esc(procData)}</li>
        </ul>
        </section>
      `,
    };

    // ---- Gráfico único ----
    const modo = state.consistChart === "media" ? "media" : "mensal";
    // Na média, omitir competências sem informação (ex.: jan–set/2025)
    const seriePlot =
      modo === "media"
        ? serie.filter((r) => r.variacao_media != null)
        : serie;
    const labels = seriePlot.map((x) => mmCurto(x.competencia));
    const limInf = (modo === "media" ? ans.media.inf : ans.mensal.inf) * 100;
    const limSup = (modo === "media" ? ans.media.sup : ans.mensal.sup) * 100;

    const vals = seriePlot.map((x) =>
      modo === "media" ? x.variacao_media * 100 : x.variacao_mensal * 100
    );

    function pointColor(frac) {
      if (frac == null || Number.isNaN(Number(frac))) return "rgba(154,161,158,0.6)";
      const f = Number(frac) / 100;
      const inf = modo === "media" ? ans.media.inf : ans.mensal.inf;
      const sup = modo === "media" ? ans.media.sup : ans.mensal.sup;
      return f >= inf && f <= sup ? "#007940" : "#B42318";
    }

    const methodPlugin = {
      id: "csMethodLineOne",
      afterDraw(chart) {
        // Só marca a mudança quando a série inclui pontos nos dois regimes
        if (modo === "media") return;
        const idx = seriePlot.findIndex((r) => r.competencia === inicio6);
        if (idx <= 0) return;
        const xScale = chart.scales.x;
        const yScale = chart.scales.y;
        const { left, right, top, bottom } = chart.chartArea || {};
        if (left == null) return;
        const meta0 = chart.getDatasetMeta(0);
        let x =
          meta0?.data?.[idx]?.x ??
          (typeof xScale.getPixelForTick === "function"
            ? xScale.getPixelForTick(idx)
            : null);
        if (idx > 0 && meta0?.data?.[idx - 1] && meta0?.data?.[idx]) {
          x = (meta0.data[idx - 1].x + meta0.data[idx].x) / 2;
        }
        if (x == null || x <= left + 24 || x >= right - 24) return;
        const ctx = chart.ctx;
        ctx.save();
        ctx.beginPath();
        ctx.rect(left, top, right - left, bottom - top);
        ctx.clip();
        ctx.beginPath();
        ctx.setLineDash([3, 4]);
        ctx.strokeStyle = "#2F302A";
        ctx.globalAlpha = 0.85;
        ctx.lineWidth = 1.1;
        ctx.moveTo(x, top);
        ctx.lineTo(x, bottom);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#2F302A";
        ctx.font = '600 11px "Segoe UI", Arial, sans-serif';
        const labelY = top + 14;
        ctx.textAlign = "right";
        ctx.fillText("12 meses", x - 8, labelY);
        ctx.textAlign = "left";
        ctx.fillText("6 meses", x + 8, labelY);
        ctx.restore();
      },
    };

    const bandPlugin = {
      id: "csAcceptBand",
      beforeDatasetsDraw(chart) {
        const y = chart.scales.y;
        const { left, right, top, bottom } = chart.chartArea;
        if (left == null) return;
        const yTop = Math.min(y.getPixelForValue(limSup), y.getPixelForValue(limInf));
        const yBot = Math.max(y.getPixelForValue(limSup), y.getPixelForValue(limInf));
        const ctx = chart.ctx;
        ctx.save();
        ctx.fillStyle = "rgba(0, 121, 64, 0.07)";
        ctx.fillRect(left, Math.max(yTop, top), right - left, Math.min(yBot, bottom) - Math.max(yTop, top));
        ctx.restore();
      },
    };

    function tooltipBody(items) {
      const i = items[0].dataIndex;
      const r = seriePlot[i];
      if (!r) return [];
      const peonaPermit = shiftMonths(r.competencia, 3);
      const v =
        modo === "media"
          ? pctSinal(r.variacao_media)
          : pctSinal(r.variacao_mensal);
      const cons = consolidadoCurto(r);
      return [
        `Competência da PEONA: ${mmAbr(peonaPermit)}`,
        `Janela utilizada: ${r.janela_meses} meses`,
        `PEONA estimada: ${brl(r.peona_estimada)}`,
        `PEONA real: ${brl(r.peona_real)}`,
        `Variação: ${v}`,
        `Limite inferior: ${fmtLim(modo === "media" ? ans.media.inf : ans.mensal.inf)}`,
        `Limite superior: ${fmtLim(modo === "media" ? ans.media.sup : ans.mensal.sup)}`,
        `Resultado: ${cons.texto}`,
      ];
    }

    destroyChart("consistChart");
    destroyChart("consistMensal");
    destroyChart("consistMedia");

    const canvas = $("#consist-chart");
    if (canvas && seriePlot.length) {
      charts.consistChart = new Chart(canvas, {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: modo === "media" ? "Variação média" : "Variação mensal",
              data: vals,
              borderColor: "#007940",
              borderWidth: 2.5,
              tension: 0.12,
              pointRadius: 5,
              pointHoverRadius: 6,
              pointBackgroundColor: vals.map((v) => pointColor(v)),
              pointBorderColor: vals.map((v) => pointColor(v)),
              spanGaps: false,
              order: 1,
            },
            {
              label: "Zero",
              data: labels.map(() => 0),
              borderColor: "#2F302A",
              borderWidth: 1.1,
              pointRadius: 0,
              order: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              filter: (ctx) => ctx.datasetIndex === 0,
              titleFont: { size: 13, family: '"Segoe UI", Arial, sans-serif' },
              bodyFont: { size: 13, family: '"Segoe UI", Arial, sans-serif' },
              callbacks: {
                title: (items) => {
                  const r = seriePlot[items[0].dataIndex];
                  return `Competência do teste: ${mmAbr(r.competencia)}`;
                },
                label: () => "",
                afterBody: tooltipBody,
              },
            },
          },
          scales: {
            x: {
              ticks: {
                font: chartFont(12.5, "500"),
                maxRotation: 0,
                padding: 6,
              },
              grid: { display: false },
            },
            y: {
              suggestedMin: Math.min(limInf * 1.15, -5),
              suggestedMax: Math.max(limSup * 1.15, 5),
              ticks: {
                font: chartFont(12.5, "400"),
                padding: 10,
                callback: (v) => {
                  const n = Number(v);
                  // Destaca limites ANS no eixo
                  const near = (a, b) => Math.abs(a - b) < 0.05;
                  if (near(n, limInf) || near(n, limSup)) {
                    return (
                      n.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) + "%"
                    );
                  }
                  const sign = n > 0 ? "+" : "";
                  return (
                    sign +
                    n.toLocaleString("pt-BR", {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    }) +
                    "%"
                  );
                },
              },
              afterBuildTicks: (axis) => {
                // Limites ANS no eixo — remove ticks automáticos próximos
                // para não sobrepor rótulos (ex.: -20% com -24,53%).
                const extras = [limInf, limSup, 0];
                const minGap = 6;
                let ticks = (axis.ticks || []).filter((tk) => {
                  const v = Number(tk.value);
                  return !extras.some(
                    (e) => Math.abs(v - e) > 0.05 && Math.abs(v - e) < minGap
                  );
                });
                extras.forEach((v) => {
                  if (!ticks.some((tk) => Math.abs(Number(tk.value) - v) < 0.05)) {
                    ticks.push({ value: v });
                  }
                });
                ticks.sort((a, b) => a.value - b.value);
                axis.ticks = ticks;
              },
              grid: { color: "rgba(47,48,42,0.07)" },
            },
          },
          layout: { padding: { top: 6, right: 8, bottom: 0, left: 4 } },
        },
        plugins: [bandPlugin, methodPlugin],
      });
    }

    // ---- Tabela (sem coluna Resultado) ----
    function segLabel(t0) {
      return t0 === "MH" ? "Médico-hospitalar" : "Odontológico";
    }
    function janLabel(row) {
      const j = row.janela || row.janela_bloco;
      if (j === "12m" || row.janela_meses === 12) return "12 meses";
      if (j === "6m" || row.janela_meses === 6) return "6 meses";
      return row.competencia <= corte ? "12 meses" : "6 meses";
    }

    // Resumo 12 meses (como na planilha): janela móvel terminando no último teste
    function resumo12mHtml() {
      const base = serieTabela;
      if (!base.length || !endTabela) return "";
      const fim = endTabela;
      const ini = shiftMonths(fim, -11);
      const janela12 = base.filter(
        (r) => r.competencia >= ini && r.competencia <= fim
      );
      if (janela12.length < 1) return "";
      let est = 0;
      let real = 0;
      let n = 0;
      janela12.forEach((r) => {
        if (r.peona_estimada != null && r.peona_real != null) {
          est += Number(r.peona_estimada);
          real += Number(r.peona_real);
          n += 1;
        }
      });
      if (n === 0 || real === 0) return "";
      const dif = est - real;
      const difPct = dif / real;
      const ader = 1 - Math.abs(difPct);
      const rotuloPeriodo = `${mmAbr(ini)} — ${mmAbr(fim)}`;
      return `<tr class="cs-resumo-12m">
        <td class="competence-cell" colspan="2"><strong>${esc(rotuloPeriodo)}</strong></td>
        <td><strong>12 meses</strong></td>
        <td>${brl(real)}</td>
        <td>${brl(est)}</td>
        <td class="${clsNum(dif)}">${brl(dif)}</td>
        <td>${pctSinal(difPct)}</td>
        <td>Aderência ${pctSinal(ader).replace("+", "")}</td>
        <td colspan="2">Resumo acumulado</td>
      </tr>`;
    }

    $("#consist-tabela").innerHTML = `
      <div class="cs-tri-scroll">
        <div class="cs-triangle-card">
        <table class="cs-table">
          <thead>
            <tr>
                <th class="column-header competence-column">Competência</th>
                <th class="column-header">Segmento</th>
                <th class="column-header">Janela</th>
                <th class="column-header">PEONA real / run-off</th>
                <th class="column-header">PEONA estimada</th>
                <th class="column-header">Diferença em reais</th>
                <th class="column-header">Variação mensal</th>
                <th class="column-header">Variação média</th>
                <th class="column-header">Status mensal</th>
                <th class="column-header">Status da média</th>
            </tr>
          </thead>
          <tbody>
            ${serieTabela
              .map((r) => {
                  const sel = r.competencia === testeComp ? " selected" : "";
                return `<tr class="${sel}">
                    <td class="competence-cell">${esc(mmAbr(r.competencia))}</td>
                    <td>${esc(segLabel(r.tipo))}</td>
                    <td>${esc(janLabel(r))}</td>
                    <td>${brl(r.peona_real)}</td>
                    <td>${brl(r.peona_estimada)}</td>
                    <td class="${clsNum(r.diferenca)}">${brl(r.diferenca)}</td>
                    <td>${pctSinal(r.variacao_mensal)}</td>
                    <td>${r.variacao_media != null ? pctSinal(r.variacao_media) : "—"}</td>
                    <td class="cs-st-cell">${statusMensalRow(r)}</td>
                    <td class="cs-st-cell">${statusMediaRow(r)}</td>
                </tr>`;
              })
              .join("")}
            ${resumo12mHtml()}
          </tbody>
        </table>
        </div>
      </div>`;
  }

  /* ---------- RUMO × IPASGO ---------- */
  function serieRumoIpasgo(c) {
    const lista = (D().rumo_x_ipasgo || [])
      .slice()
      .sort((a, b) => a.competencia.localeCompare(b.competencia));
    const sorted = mesesOrdenados();
    // Intervalo / ano: soma e série no intervalo selecionado
    if ((state.modo === "intervalo" || state.modo === "ano") && sorted.length >= 2) {
      const lo = sorted[0];
      const hi = sorted.at(-1);
      return lista.filter((x) => x.competencia >= lo && x.competencia <= hi);
    }
    // Mês único: só a competência selecionada (não o ano inteiro)
    const alvo = sorted[0] || c;
    return lista.filter((x) => x.competencia === alvo);
  }

  function resumoRumoIpasgo(series) {
    const pares = series.filter((x) => x.peona_rumo != null && x.peona_ipasgo != null);
    const sumR = pares.reduce((s, x) => s + Number(x.peona_rumo), 0);
    const sumI = pares.reduce((s, x) => s + Number(x.peona_ipasgo), 0);
    return {
      n: pares.length,
      total_rumo: pares.length ? sumR : null,
      total_ipasgo: pares.length ? sumI : null,
      diferenca: pares.length ? sumI - sumR : null,
      variacao: pares.length && sumR ? sumI / sumR - 1 : null,
    };
  }

  function leiturasRumoIpasgo(atual, series, resumo) {
    const out = [];
    if (!atual || atual.peona_rumo == null || atual.peona_ipasgo == null) {
      out.push("Comparação não disponível para a competência.");
    } else if (atual.variacao_pct == null) {
      out.push(`Em ${mmAbr(atual.competencia)}, a comparação percentual não está disponível.`);
    } else if (Math.abs(atual.variacao_pct) < 1e-6) {
      out.push(`Em ${mmAbr(atual.competencia)}, as apurações ficaram próximas.`);
    } else if (atual.variacao_pct > 0) {
      out.push(
        `Em ${mmAbr(atual.competencia)}, a PEONA IPASGO ficou ${pct(atual.variacao_pct)} acima da apuração RUMO.`
      );
    } else {
      out.push(
        `Em ${mmAbr(atual.competencia)}, a PEONA IPASGO ficou ${pct(Math.abs(atual.variacao_pct))} abaixo da apuração RUMO.`
      );
    }

    const comDif = series.filter((x) => x.diferenca != null);
    if (comDif.length) {
      const maior = comDif.reduce((a, b) =>
        Math.abs(b.diferenca) > Math.abs(a.diferenca) ? b : a
      );
      out.push(
        `A maior diferença absoluta do período ocorreu em ${mmAbr(maior.competencia)} (${brl(maior.diferenca)}).`
      );
    }

    if (atual && series.length >= 2) {
      const idx = series.findIndex((x) => x.competencia === atual.competencia);
      const ant = idx > 0 ? series[idx - 1] : null;
      if (ant && atual.diferenca != null && ant.diferenca != null) {
        const dAtu = Math.abs(atual.diferenca);
        const dAnt = Math.abs(ant.diferenca);
        if (Math.sign(atual.diferenca) !== 0 && Math.sign(ant.diferenca) !== 0 &&
            Math.sign(atual.diferenca) !== Math.sign(ant.diferenca)) {
          out.push(
            `Houve mudança no sentido da diferença: o IPASGO passou de ${ant.diferenca < 0 ? "abaixo" : "acima"} para ${atual.diferenca < 0 ? "abaixo" : "acima"} da RUMO.`
          );
        } else if (dAtu < dAnt - 1) {
          out.push("A diferença entre as apurações diminuiu em relação ao mês anterior.");
        } else if (dAtu > dAnt + 1) {
          out.push("A diferença entre as apurações aumentou em relação ao mês anterior.");
        } else {
          out.push("As duas apurações apresentaram trajetória semelhante no período.");
        }
      } else {
        out.push("As duas apurações apresentaram trajetória semelhante no período.");
      }
    }

    if (resumo.variacao != null) {
      out.push(
        `No acumulado, a diferença representa ${pct(resumo.variacao)} da apuração RUMO.`
      );
    }

    return out.slice(0, 4);
  }

  function renderRumoIpasgo() {
    const c = ref();
    const lista = (D().rumo_x_ipasgo || [])
      .slice()
      .sort((a, b) => a.competencia.localeCompare(b.competencia));
    const atual = lista.find((x) => x.competencia === c) || null;
    const series = serieRumoIpasgo(c);
    const resumo = resumoRumoIpasgo(series);
    const multi = (state.meses || []).length > 1 && resumo.n > 1;

    const peonaRumo = multi ? resumo.total_rumo : atual?.peona_rumo ?? null;
    const peonaIpasgo = multi ? resumo.total_ipasgo : atual?.peona_ipasgo ?? null;
    const diferenca = multi
      ? resumo.diferenca
      : atual?.diferenca ?? null;
    const variacao = multi
      ? resumo.variacao
      : atual?.variacao_pct ?? null;
    const ausente = peonaRumo == null || peonaIpasgo == null;

    const idxAtual = lista.findIndex((x) => x.competencia === c);
    const ant = idxAtual > 0 ? lista[idxAtual - 1] : null;
    const varRumoMom =
      !multi && atual?.peona_rumo != null && ant?.peona_rumo
        ? Number(atual.peona_rumo) / Number(ant.peona_rumo) - 1
        : null;
    const varIpasgoMom =
      !multi && atual?.peona_ipasgo != null && ant?.peona_ipasgo
        ? Number(atual.peona_ipasgo) / Number(ant.peona_ipasgo) - 1
        : null;

    const compsSerie = series
      .filter((x) => x.peona_rumo != null || x.peona_ipasgo != null)
      .map((x) => x.competencia)
      .sort();
    const periodoSub = multi
      ? compsSerie.length >= 2
        ? `${mmAbr(compsSerie[0])} → ${mmAbr(compsSerie.at(-1))} · ${resumo.n} meses`
        : periodLabelText()
      : `Competência ${mmAbr(c)}`;

    const difSub = ausente
      ? "Comparação não disponível"
      : diferenca > 0
        ? multi
          ? "IPASGO acima da RUMO no período"
          : "IPASGO acima da RUMO"
        : diferenca < 0
          ? multi
            ? "IPASGO abaixo da RUMO no período"
            : "IPASGO abaixo da RUMO"
          : multi
            ? "Apurações próximas no período"
            : "Apurações próximas";

    $("#ri-kpis").innerHTML = `
      <div class="mh-kpi">
        <div class="mh-kpi-head">
          <span class="lbl">PEONA RUMO</span>
          ${varRumoMom != null ? varPill(varRumoMom) : ""}
      </div>
        <div class="val" title="${esc(brl(peonaRumo))}">${brlMi(peonaRumo)}</div>
        <div class="sub">${esc(periodoSub)}</div>
      </div>
      <div class="mh-kpi">
        <div class="mh-kpi-head">
          <span class="lbl">PEONA IPASGO</span>
          ${varIpasgoMom != null ? varPill(varIpasgoMom) : ""}
      </div>
        <div class="val" title="${esc(brl(peonaIpasgo))}">${brlMi(peonaIpasgo)}</div>
        <div class="sub">${esc(periodoSub)}</div>
      </div>
      <div class="mh-kpi">
        <div class="mh-kpi-head"><span class="lbl">Diferença em reais</span></div>
        <div class="val ${clsNum(diferenca)}" title="${esc(brl(diferenca))}">${brlMiDelta(diferenca)}</div>
        <div class="sub">${esc(difSub)}</div>
      </div>
      <div class="mh-kpi">
        <div class="mh-kpi-head"><span class="lbl">Variação percentual</span></div>
        <div class="val ${clsNum(variacao)}">${
          variacao == null
            ? "—"
            : (variacao > 0 ? "+" : "") + pct(variacao)
        }</div>
        <div class="sub">${multi ? "Totais do período · IPASGO ÷ RUMO − 1" : "IPASGO ÷ RUMO − 1"}</div>
      </div>`;

    const leituras = leiturasRumoIpasgo(atual, series, resumo);
    $("#ri-leitura").innerHTML = leituras.map((t) => `<li>${esc(t)}</li>`).join("");

    const plot = series.filter((x) => x.peona_rumo != null || x.peona_ipasgo != null);
    const canvasEvo = $("#ri-evolucao");
    const emptyEvo = $("#ri-evolucao-empty");
    const canvasVar = $("#ri-variacao");
    const emptyVar = $("#ri-variacao-empty");
    destroyChart("riEvo");
    destroyChart("riVar");

    if (!plot.length) {
      canvasEvo.classList.add("hidden");
      canvasVar.classList.add("hidden");
      emptyEvo.classList.remove("hidden");
      emptyVar.classList.remove("hidden");
      emptyEvo.textContent = "Comparação não disponível para o período selecionado.";
      emptyVar.textContent = "Sem variações percentuais no período selecionado.";
    } else {
      canvasEvo.classList.remove("hidden");
      emptyEvo.classList.add("hidden");

      const rumoVals = plot.map((x) => x.peona_rumo);
      const ipaVals = plot.map((x) => x.peona_ipasgo);
      const nums = [...rumoVals, ...ipaVals].filter((v) => v != null).map(Number);
      const ymin = Math.min(...nums);
      const ymax = Math.max(...nums);
      const pad = Math.max((ymax - ymin) * 0.35, ymax * 0.002);
      const pointRadius = plot.map((x) => (x.competencia === c ? 5 : 3));
      const pointBorder = plot.map((x) => (x.competencia === c ? 2 : 0));

      charts.riEvo = new Chart(canvasEvo, {
        type: "line",
        data: {
          labels: plot.map((x) => mmCurto(x.competencia)),
          datasets: [
            {
              label: "RUMO",
              data: rumoVals,
              borderColor: "#2F302A",
              backgroundColor: "#2F302A",
              borderWidth: 2.5,
              pointRadius,
              pointHoverRadius: 6,
              pointBorderWidth: pointBorder,
              pointBorderColor: "#007940",
              tension: 0.15,
              spanGaps: false,
            },
            {
              label: "IPASGO",
              data: ipaVals,
              borderColor: "#007940",
              backgroundColor: "#007940",
              borderWidth: 2.5,
              pointRadius,
              pointHoverRadius: 6,
              pointBorderWidth: pointBorder,
              pointBorderColor: "#2F302A",
              tension: 0.15,
              spanGaps: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: "index", intersect: false },
          plugins: {
            legend: {
              position: "bottom",
              labels: { font: { family: '"Segoe UI", Arial, sans-serif', size: 13, weight: "500" }, padding: 16 },
            },
            tooltip: {
              titleFont: { family: '"Segoe UI", Arial, sans-serif', size: 13, weight: "500" },
              bodyFont: { family: '"Segoe UI", Arial, sans-serif', size: 13, weight: "400" },
              callbacks: {
                title: (items) => {
                  const row = plot[items[0]?.dataIndex];
                  return row ? mmAAAA(row.competencia) : "";
                },
                afterBody: (items) => {
                  const row = plot[items[0]?.dataIndex];
                  if (!row) return [];
                  return [
                    `Diferença: ${brl(row.diferenca)}`,
                    `Variação: ${pct(row.variacao_pct)}`,
                  ];
                },
                label: (ctx) => `${ctx.dataset.label}: ${brl(ctx.parsed.y)}`,
              },
            },
          },
          scales: {
            x: {
              ticks: { font: { family: '"Segoe UI", Arial, sans-serif', size: 12.5, weight: "500" }, maxRotation: 0 },
              grid: { display: false },
            },
            y: {
              min: ymin - pad,
              max: ymax + pad,
              ticks: {
                font: { family: '"Segoe UI", Arial, sans-serif', size: 12 },
                callback: (v) =>
                  "R$ " +
                  (Number(v) / 1e6).toLocaleString("pt-BR", { maximumFractionDigits: 1 }) +
                  " mi",
              },
              grid: { color: "rgba(47,48,42,0.08)" },
            },
          },
        },
      });

      const varPlot = plot.filter((x) => x.variacao_pct != null);
      if (!varPlot.length) {
        canvasVar.classList.add("hidden");
        emptyVar.classList.remove("hidden");
        emptyVar.textContent = "Sem variações percentuais no período selecionado.";
      } else {
        canvasVar.classList.remove("hidden");
        emptyVar.classList.add("hidden");
        const vars = varPlot.map((x) => x.variacao_pct * 100);
        const maxAbs = Math.max(...vars.map((v) => Math.abs(v)), 0.05);
        const pluginLabels = {
          id: "riVarLabels",
          afterDatasetsDraw(chart) {
            const { ctx } = chart;
            const meta = chart.getDatasetMeta(0);
            ctx.save();
            ctx.font = '600 11px "Segoe UI", Arial, sans-serif';
            ctx.textAlign = "center";
            meta.data.forEach((pt, i) => {
              const v = vars[i];
              if (v == null) return;
              ctx.fillStyle = v >= 0 ? "#1F6B3A" : "#B42318";
              const y = v >= 0 ? pt.y - 8 : pt.y + 14;
              ctx.fillText(
                v.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "%",
                pt.x,
                y
              );
            });
            ctx.restore();
          },
        };
        charts.riVar = new Chart(canvasVar, {
          type: "bar",
          plugins: [pluginLabels],
          data: {
            labels: varPlot.map((x) => mmCurto(x.competencia)),
            datasets: [
              {
                label: "Variação %",
                data: vars,
                backgroundColor: vars.map((v) => (v >= 0 ? "rgba(31,107,58,0.75)" : "rgba(180,35,24,0.75)")),
                borderWidth: 0,
                borderRadius: 3,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                titleFont: { family: '"Segoe UI", Arial, sans-serif', size: 13 },
                bodyFont: { family: '"Segoe UI", Arial, sans-serif', size: 13 },
                callbacks: {
                  title: (items) => {
                    const row = varPlot[items[0]?.dataIndex];
                    return row ? mmAAAA(row.competencia) : "";
                  },
                  label: (ctx) => `Variação: ${pct(ctx.parsed.y / 100)}`,
                },
              },
            },
            scales: {
              x: {
                ticks: { font: { family: '"Segoe UI", Arial, sans-serif', size: 12.5 }, maxRotation: 0 },
                grid: { display: false },
              },
              y: {
                min: -maxAbs * 1.25,
                max: maxAbs * 1.25,
                ticks: {
                  font: { family: '"Segoe UI", Arial, sans-serif', size: 12 },
                  callback: (v) =>
                    Number(v).toLocaleString("pt-BR", { maximumFractionDigits: 2 }) + "%",
                },
                grid: {
                  color: (ctx) => (ctx.tick.value === 0 ? "rgba(47,48,42,0.45)" : "rgba(47,48,42,0.08)"),
                  lineWidth: (ctx) => (ctx.tick.value === 0 ? 1.5 : 1),
                },
              },
            },
          },
        });
      }
    }

    const tot = resumoRumoIpasgo(lista);
    $("#ri-tabela").innerHTML = `<table class="ri-table">
      <thead><tr>
        <th>Mês</th>
        <th>PEONA RUMO</th>
        <th>PEONA IPASGO</th>
        <th>Diferença em reais</th>
        <th>Variação percentual</th>
        <th>Comentário</th>
      </tr></thead>
      <tbody>${lista
        .map(
          (x) => `<tr class="${x.competencia === c ? "destaque" : ""}">
        <td>${mmAAAA(x.competencia)}</td>
        <td>${brl(x.peona_rumo)}</td>
        <td>${brl(x.peona_ipasgo)}</td>
        <td class="${clsNum(x.diferenca)}">${brl(x.diferenca)}</td>
        <td class="${clsNum(x.variacao_pct)}">${pct(x.variacao_pct)}</td>
        <td class="comentario">${esc(x.comentario || "—")}</td>
      </tr>`
        )
        .join("")}</tbody>
      <tfoot><tr>
        <td>Total</td>
        <td>${brl(tot.total_rumo)}</td>
        <td>${brl(tot.total_ipasgo)}</td>
        <td class="${clsNum(tot.diferenca)}">${brl(tot.diferenca)}</td>
        <td class="${clsNum(tot.variacao)}">${pct(tot.variacao)}</td>
        <td class="comentario">${tot.n} meses comparados</td>
      </tr></tfoot>
    </table>`;
  }

  /* ---------- Metodologia ---------- */
  function renderMetodologia() {
    const sync = $("#meto-sync");
    if (sync) sync.textContent = D().meta.gerado_em || "—";
  }

  function renderHeader() {
    syncTimelineUI();
  }

  function render() {
    renderHeader();
    if (state.tab === "visao") renderVisao();
    if (state.tab === "input") renderInput();
    if (state.tab === "mh") renderMH();
    if (state.tab === "odonto") renderOD();
    if (state.tab === "runoff") renderRunoffPuro();
    if (state.tab === "consistencia") renderConsistencia();
    if (state.tab === "rumoipasgo") renderRumoIpasgo();
    if (state.tab === "metodologia") renderMetodologia();
  }

  function exportFiltro() {
    const c = ref();
    const r = row(c);
    if (!r) return;
    const lines = [
      "campo;valor",
      `competencia;${mmAAAA(c)}`,
      `peona_mh;${r.peona_mh}`,
      `peona_od;${r.peona_od}`,
      `peona_total;${r.peona_total}`,
      `variacao_total;${r.variacao_r_total ?? ""}`,
    ];
    const blob = new Blob(["\ufeff" + lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `peona_${mmAAAA(c).replace("/", "-")}.csv`;
    a.click();
  }

  function bind() {
    $$(".tabs .tab").forEach((b) => b.addEventListener("click", () => setTab(b.dataset.tab)));
    $("#filtro-ano").addEventListener("change", () => {
      state.ano = $("#filtro-ano").value;
      preencherMeses();
      aplicarFiltros();
    });
    $("#filtro-modo").addEventListener("change", aplicarFiltros);
    $("#filtro-mes").addEventListener("change", aplicarFiltros);
    $("#filtro-ini").addEventListener("change", aplicarFiltros);
    $("#filtro-fim").addEventListener("change", aplicarFiltros);
    bindTimeline();

    $$("[data-consist-seg]").forEach((b) =>
      b.addEventListener("click", () => {
        state.consistSeg = b.dataset.consistSeg;
        $$("[data-consist-seg]").forEach((x) =>
          x.classList.toggle("active", x.dataset.consistSeg === state.consistSeg)
        );
        renderConsistencia();
      })
    );
    $$("[data-consist-janela]").forEach((b) =>
      b.addEventListener("click", () => {
        state.consistJanela = Number(b.dataset.consistJanela) === 12 ? 12 : 6;
        $$("[data-consist-janela]").forEach((x) =>
          x.classList.toggle(
            "active",
            Number(x.dataset.consistJanela) === state.consistJanela
          )
        );
        renderConsistencia();
      })
    );
    $$("[data-consist-chart]").forEach((b) =>
      b.addEventListener("click", () => {
        state.consistChart = b.dataset.consistChart === "media" ? "media" : "mensal";
        $$("[data-consist-chart]").forEach((x) =>
          x.classList.toggle("active", x.dataset.consistChart === state.consistChart)
        );
        renderConsistencia();
      })
    );
    $$("#vg-evo-seg button").forEach((b) =>
      b.addEventListener("click", () => {
        state.evoSeg = b.dataset.evo || "total";
        $$("#vg-evo-seg button").forEach((x) =>
          x.classList.toggle("active", x.dataset.evo === state.evoSeg)
        );
        if (state.tab === "visao") renderVisao();
      })
    );
    $$("#vg-chart-mode button").forEach((b) =>
      b.addEventListener("click", () => {
        state.evoChartMode = b.dataset.chartMode === "variacao" ? "variacao" : "valor";
        $$("#vg-chart-mode button").forEach((x) =>
          x.classList.toggle("active", x.dataset.chartMode === state.evoChartMode)
        );
        if (state.tab === "visao") renderVisao();
      })
    );
    $$("#mh-janela-seg button").forEach((b) =>
      b.addEventListener("click", () => {
        state.mhJanela = Number(b.dataset.mhJanela) === 12 ? 12 : 6;
        $$("#mh-janela-seg button").forEach((x) =>
          x.classList.toggle("active", Number(x.dataset.mhJanela) === state.mhJanela)
        );
        if (state.tab === "mh") renderMH();
      })
    );
    $$("#od-janela-seg button").forEach((b) =>
      b.addEventListener("click", () => {
        state.odJanela = Number(b.dataset.odJanela) === 12 ? 12 : 6;
        $$("#od-janela-seg button").forEach((x) =>
          x.classList.toggle("active", Number(x.dataset.odJanela) === state.odJanela)
        );
        if (state.tab === "odonto") renderOD();
      })
    );
    $$("#ro-seg-toggle button").forEach((b) =>
      b.addEventListener("click", () => {
        state.roSeg = b.dataset.roSeg === "OD" ? "OD" : "MH";
        $$("#ro-seg-toggle button").forEach((x) =>
          x.classList.toggle("active", x.dataset.roSeg === state.roSeg)
        );
        if (state.tab === "runoff") renderRunoffPuro();
      })
    );
    $$("#ro-janela-seg button").forEach((b) =>
      b.addEventListener("click", () => {
        state.roJanela = Number(b.dataset.roJanela) === 12 ? 12 : 6;
        $$("#ro-janela-seg button").forEach((x) =>
          x.classList.toggle("active", Number(x.dataset.roJanela) === state.roJanela)
        );
        if (state.tab === "runoff") renderRunoffPuro();
      })
    );
    $("#mh-btn-fonte")?.addEventListener("click", () => {
      const ft = state.fonteTecnica?.mh;
      if (ft?.html) openFonteDrawer(ft.html, ft.title);
    });
    $("#od-btn-fonte")?.addEventListener("click", () => {
      const ft = state.fonteTecnica?.od;
      if (ft?.html) openFonteDrawer(ft.html, ft.title);
    });
    $("#ro-btn-fonte")?.addEventListener("click", () => {
      const ft = state.fonteTecnica?.ro;
      if (ft?.html) openFonteDrawer(ft.html, ft.title);
    });
    $("#cs-btn-fonte")?.addEventListener("click", () => {
      const ft = state.fonteTecnica?.cs;
      if (ft?.html) openFonteDrawer(ft.html, ft.title);
    });
    $("#fonte-drawer-close")?.addEventListener("click", closeFonteDrawer);
    $("#fonte-drawer-backdrop")?.addEventListener("click", closeFonteDrawer);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !$("#fonte-drawer")?.classList.contains("hidden")) {
        closeFonteDrawer();
      }
    });
    $("#btn-export-filtro")?.addEventListener("click", exportFiltro);
  }

  document.addEventListener("DOMContentLoaded", () => {
    try {
      if (window.Chart) {
        Chart.defaults.font.family = "General Sans, Segoe UI, Arial, sans-serif";
        Chart.defaults.font.size = 13;
        Chart.defaults.font.weight = "400";
        Chart.defaults.color = "#2F302A";
        Chart.defaults.plugins.legend.labels.font = chartFont(12.5, "500");
        Chart.defaults.plugins.tooltip.titleFont = chartFont(13, "500");
        Chart.defaults.plugins.tooltip.bodyFont = chartFont(13, "400");
        if (Chart.defaults.scales?.category?.ticks) {
          Chart.defaults.scales.category.ticks.font = chartFont(12.5, "500");
        }
        if (Chart.defaults.scales?.linear?.ticks) {
          Chart.defaults.scales.linear.ticks.font = chartFont(12, "400");
        }
      }
      initFiltros();
      bind();
      render();
    } catch (e) {
      $("#alerta-periodo").classList.remove("hidden");
      $("#alerta-periodo").textContent =
        "Não foi possível carregar os resultados. Atualize os dados do painel e reabra a página. " +
        e.message;
      console.error(e);
    }
  });
})();
