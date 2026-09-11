# Painel Executivo PEONA

Interface HTML para acompanhamento da PEONA perante a Diretoria.

**Entrada:** `index_sidebar.html`

> Dados numéricos em `data/` **não** são versionados (repositório público).  
> Gere localmente com `sync_dados.py` / `Iniciar_Painel_PEONA.bat`.

## Abas

1. Visão Geral  
2. Médico-Hospitalar  
3. Odontológico  
4. Run-Off Puro  
5. Teste de Consistência  
6. RUMO × IPASGO  
7. Metodologia  
8. Input  

## Estrutura versionada

| Item | Função |
|------|--------|
| `index_sidebar.html` | Interface |
| `css/` · `js/` · `assets/` | UI |
| `vendor/katex/` | Fórmulas |
| `sync_dados.py` | Gera `data/peona_data.js` |
| `historico_consistencia.py` | Histórico imutável |
| `parse_consistencia.py` · `parse_mh_triangulos.py` | Parsers |
| `Iniciar_Painel_PEONA.bat` | R → sync → abre o painel |
| `data/.gitkeep` | Pasta de payload local |

## Atualizar dados (local)

```bat
Iniciar_Painel_PEONA.bat
```

```bash
Rscript --vanilla ..\peona_ipasgo_v2.R
python sync_dados.py
```

Em seguida abra `index_sidebar.html`.
