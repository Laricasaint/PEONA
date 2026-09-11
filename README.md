# PEONA — Painel Executivo (Ipasgo Saúde)

Painel HTML para acompanhamento gerencial da PEONA.

**Site:** [GitHub Pages](https://laricasaint.github.io/PEONA/)

> O repositório versiona a interface do painel e o payload `data/peona_data.js` (necessário para o Pages).  
> Planilhas e o script R de cálculo **não** entram no Git.

## Abrir localmente

```text
peona_painel/index_sidebar.html
```

## Estrutura versionada

| Item | Função |
|------|--------|
| `peona_painel/index_sidebar.html` | Interface (layout sidebar) |
| `peona_painel/css/` · `js/` · `assets/` | Estilos, lógica e logo |
| `peona_painel/vendor/katex/` | Fórmulas |
| `peona_painel/data/peona_data.js` | Payload exibido no painel / Pages |
| `peona_painel/sync_dados.py` | Gera `peona_data.js` a partir do R e das planilhas locais |
| `.github/workflows/pages.yml` | Deploy automático no GitHub Pages |

## Atualizar dados e republicar

1. Rode o sync local (`Iniciar_Painel_PEONA.bat` ou `python peona_painel/sync_dados.py`).
2. Commit de `peona_painel/data/peona_data.js`.
3. Push em `master` — o Actions publica o Pages.
