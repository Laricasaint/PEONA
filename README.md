# PEONA — Painel Executivo (Ipasgo Saúde)

Painel HTML para acompanhamento gerencial da PEONA.

> **Repositório público:** versiona apenas a interface do painel (`peona_painel/`).  
> Planilhas, saídas numéricas e o script R de cálculo **não** entram no Git (ficam locais).

## Abrir o painel

```text
peona_painel/index_sidebar.html
```

Com dados locais já sincronizados em `peona_painel/data/`.

## Estrutura versionada

| Item | Função |
|------|--------|
| `peona_painel/index_sidebar.html` | Interface (layout sidebar) |
| `peona_painel/css/` · `js/` · `assets/` | Estilos, lógica e logo |
| `peona_painel/vendor/katex/` | Fórmulas (Metodologia / Consistência) |
| `peona_painel/sync_dados.py` | Gera `data/peona_data.js` a partir do R e das planilhas locais |
| `peona_painel/parse_*.py` · `historico_consistencia.py` | Parsers e histórico imutável |
| `peona_painel/Iniciar_Painel_PEONA.bat` | Atalho local: R → sync → abre o HTML |

## Dados locais (não versionados)

Na raiz do projeto (máquina local):

- `peona_ipasgo_v2.R` — motor de cálculo
- `PEONA_INPUT.xlsx` — triângulos, projeções, consistência ≥ out/2025
- `Acompanhamento das Provisões.xlsx` — consistência 12m e RUMO × IPASGO

Em `peona_painel/data/` (gerado pelo sync):

- `peona_data.js` — payload exibido no painel
- CSVs / histórico de consistência / RUMO × IPASGO

## Atualizar dados (local)

```bat
peona_painel\Iniciar_Painel_PEONA.bat
```

Ou:

```bash
Rscript --vanilla peona_ipasgo_v2.R
python peona_painel/sync_dados.py
```

Depois abra `peona_painel/index_sidebar.html`.
