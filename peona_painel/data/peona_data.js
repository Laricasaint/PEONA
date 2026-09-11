window.PEONA_DATA = {
  "meta": {
    "gerado_em": "2026-09-11T14:27:35",
    "fonte_r": "saidas R (local)",
    "arquivo_script": "peona_ipasgo_v2.R",
    "arquivo_input": "PEONA_INPUT.xlsx",
    "mes_apuracao": "jul/2026",
    "competencia_mais_recente": "2026-07-01",
    "competencias_disponiveis": [
      "2024-01-01",
      "2024-02-01",
      "2024-03-01",
      "2024-04-01",
      "2024-05-01",
      "2024-06-01",
      "2024-07-01",
      "2024-08-01",
      "2024-09-01",
      "2024-10-01",
      "2024-11-01",
      "2024-12-01",
      "2025-01-01",
      "2025-02-01",
      "2025-03-01",
      "2025-04-01",
      "2025-05-01",
      "2025-06-01",
      "2025-07-01",
      "2025-08-01",
      "2025-09-01",
      "2025-10-01",
      "2025-11-01",
      "2025-12-01",
      "2026-01-01",
      "2026-02-01",
      "2026-03-01",
      "2026-04-01",
      "2026-05-01",
      "2026-06-01",
      "2026-07-01"
    ],
    "n_competencias_6m": 31,
    "janela_metodologica_principal": 6,
    "titulo_painel": "Painel Executivo de Provisões Técnicas — PEONA",
    "alertas_sync": [],
    "obs": [
      "valores com aviso em julho/24 foi feito =MÉDIA(últimos6meses)*(1+14,1%), pois não tinhamos dados",
      "a partir da migração pro facplan, base parou de mostrar separação em MH e Odontológico, então foi feito feito pela proporção histórica (0,984747397799371 MH e 0,0152526022006295 Odonto) até dez/24",
      "de jan/25 a mar/25, como ainda não tem a separação na base, está sendo feito conforme a proporção de despesa MH e despesa Odonto do próprio mês conforme constar no balancete pra ficar próximo da contabilidade",
      "abr/25 a jul/25 a contabilidade pediu antes de fechar o balancete, então voltamos a usar a proporção histórica",
      "agosto/25 usamos a separação feita pelo rubens na base v15 [caminho local]",
      "set/25 usamos a separação feita pelo rubens na base v16 [caminho local]",
      "out/25 usamos a separação feita pelo rubens na base v17 [caminho local]",
      "dadas as divergencias com o contabil, agosto, setebro, outubro, novembro e dezembro retificamos as bases",
      "para agosto/24 e setembro/24 usamos apenas a despesa (sem abatimento de glosa e coparticipação, que não costavam no balancete)",
      "para outubro/24 e novembro/24 usamos despesa menos glosa (sem abater copart, que não estava lançada no balancete)",
      "para fevereiro/24 usamos despesa menos glosa (sem abater copart, que não estava lançada no balancete",
      "*** é possível que as glosas e coparts não contabilizadas nos meses de agosto a novembro sejam contabilizadas retroativamente nas competências futuras, gerando diferenças entre a base e o contábil)"
    ],
    "input_resumo": {
      "arquivo": "PEONA_INPUT.xlsx",
      "caminho": "PEONA_INPUT.xlsx",
      "abas": [
        "OBS",
        "Dados",
        "MH 12",
        "Odonto 12",
        "MH 6",
        "Odonto 6",
        "Teste Consistência",
        "Resultado",
        "Real x Projetada"
      ],
      "registros_dados_aprox": 1055,
      "parametros_r": {
        "MES_CORTE_HISTORICO": "2025-10-01",
        "MES_CORTE_CONSISTENCIA": "2025-09-01",
        "N_JANELA_6": 6,
        "N_JANELA_12": 12,
        "MES_APURACAO": "automático (último mês do triângulo)",
        "ARQUIVO_XLSX": "PEONA_INPUT.xlsx"
      },
      "bases_consideradas": [
        "Aba Dados (base granular ocorrência × aviso)",
        "Aba MH 6 / Odonto 6 (triângulo histórico até out/2025)",
        "Aba Teste Consistência (PEONA_INPUT · 6m a partir de out/2025)",
        "Acompanhamento das Provisões (regime 12m até set/2025)",
        "Aba Garantias Ipasgo x RUMO (comparativo RUMO × IPASGO)"
      ]
    },
    "consistencia_relatorio": {
      "peona_processada": "2026-07-01",
      "competencia_teste": "2026-04-01",
      "janelas": [
        "6m",
        "12m"
      ],
      "novos_incluidos": 0,
      "segmentos_incluidos": [],
      "registros_historicos_preservados": 52,
      "registros_historicos_alterados": 0,
      "registros_historicos_excluidos": 0,
      "duplicidades_encontradas": 4,
      "total_historico": 52,
      "seed": {
        "acao": "ja_existia",
        "n_registros": 52,
        "mensagem": "Histórico já existe — carga inicial não sobrescrita."
      },
      "mensagens": [
        "MH 2026-04-01 (6m): Teste ja existente - historico preservado.",
        "MH 2026-04-01 (12m): Teste ja existente - historico preservado.",
        "OD 2026-04-01 (6m): Teste ja existente - historico preservado.",
        "OD 2026-04-01 (12m): Teste ja existente - historico preservado."
      ],
      "erros": []
    }
  },
  "resumo_mes": [
    {
      "tipo": "MH",
      "media_nm": 195391018.34,
      "fator_peona": 1.4536985271,
      "peona": 284039635.566667,
      "mes_apuracao": "jul/2026"
    },
    {
      "tipo": "OD",
      "media_nm": 2254343.96666667,
      "fator_peona": 1.225661816,
      "peona": 2763063.32,
      "mes_apuracao": "jul/2026"
    },
    {
      "tipo": "TOTAL",
      "media_nm": null,
      "fator_peona": null,
      "peona": 286802698.886667,
      "mes_apuracao": "jul/2026"
    }
  ],
  "serie": [
    {
      "competencia": "2024-01-01",
      "total_avisado": 181475770.86,
      "media_nm": 171569436.83,
      "fator_peona": 0.640621,
      "peona": 109910906.89,
      "Mk0": 0.519039,
      "Mk1": 0.370951,
      "Mk2": 0.074547,
      "Mk3": 0.024888,
      "Mk4": 0.006962,
      "Mk5": 0.003612,
      "variacao_r": null,
      "variacao_pct": null,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "jan/2024"
    },
    {
      "competencia": "2024-02-01",
      "total_avisado": 191632293.65,
      "media_nm": 174888882.33,
      "fator_peona": 0.640793,
      "peona": 112067630.36,
      "Mk0": 0.514709,
      "Mk1": 0.378179,
      "Mk2": 0.072557,
      "Mk3": 0.024073,
      "Mk4": 0.007132,
      "Mk5": 0.003351,
      "variacao_r": 2156723.47,
      "variacao_pct": 0.01962247,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "fev/2024"
    },
    {
      "competencia": "2024-03-01",
      "total_avisado": 198577421.59,
      "media_nm": 179660028.92,
      "fator_peona": 0.620622,
      "peona": 111500879.4,
      "Mk0": 0.530224,
      "Mk1": 0.365436,
      "Mk2": 0.071747,
      "Mk3": 0.022143,
      "Mk4": 0.006985,
      "Mk5": 0.003464,
      "variacao_r": -566750.96,
      "variacao_pct": -0.0050572227,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "mar/2024"
    },
    {
      "competencia": "2024-04-01",
      "total_avisado": 209947814.86,
      "media_nm": 186637936.43,
      "fator_peona": 0.602067,
      "peona": 112368521.58,
      "Mk0": 0.546262,
      "Mk1": 0.352778,
      "Mk2": 0.068437,
      "Mk3": 0.021381,
      "Mk4": 0.00744,
      "Mk5": 0.003702,
      "variacao_r": 867642.19,
      "variacao_pct": 0.0077814829,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "abr/2024"
    },
    {
      "competencia": "2024-05-01",
      "total_avisado": 209605564.75,
      "media_nm": 192988946.03,
      "fator_peona": 0.595992,
      "peona": 115019868.7,
      "Mk0": 0.552484,
      "Mk1": 0.347147,
      "Mk2": 0.067568,
      "Mk3": 0.02144,
      "Mk4": 0.007417,
      "Mk5": 0.003944,
      "variacao_r": 2651347.12,
      "variacao_pct": 0.0235951055,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "mai/2024"
    },
    {
      "competencia": "2024-06-01",
      "total_avisado": 206100863.37,
      "media_nm": 199556621.51,
      "fator_peona": 0.578821,
      "peona": 115507469.36,
      "Mk0": 0.561401,
      "Mk1": 0.343003,
      "Mk2": 0.064478,
      "Mk3": 0.020865,
      "Mk4": 0.007001,
      "Mk5": 0.003252,
      "variacao_r": 487600.66,
      "variacao_pct": 0.0042392733,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "jun/2024"
    },
    {
      "competencia": "2024-07-01",
      "total_avisado": 204148757.02,
      "media_nm": 203335452.54,
      "fator_peona": 0.592448,
      "peona": 120465603.78,
      "Mk0": 0.548428,
      "Mk1": 0.356069,
      "Mk2": 0.064302,
      "Mk3": 0.020389,
      "Mk4": 0.007456,
      "Mk5": 0.003357,
      "variacao_r": 4958134.43,
      "variacao_pct": 0.0429247948,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "jul/2024"
    },
    {
      "competencia": "2024-08-01",
      "total_avisado": 212349541.24,
      "media_nm": 206788327.14,
      "fator_peona": 0.746185,
      "peona": 154302360.73,
      "Mk0": 0.458101,
      "Mk1": 0.394273,
      "Mk2": 0.108886,
      "Mk3": 0.025221,
      "Mk4": 0.009119,
      "Mk5": 0.0044,
      "variacao_r": 33836756.95,
      "variacao_pct": 0.2808831392,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "ago/2024"
    },
    {
      "competencia": "2024-09-01",
      "total_avisado": 173359363.28,
      "media_nm": 202585317.42,
      "fator_peona": 0.901447,
      "peona": 182620009.16,
      "Mk0": 0.374212,
      "Mk1": 0.424888,
      "Mk2": 0.149391,
      "Mk3": 0.033628,
      "Mk4": 0.01251,
      "Mk5": 0.00537,
      "variacao_r": 28317648.42,
      "variacao_pct": 0.1835205132,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "set/2024"
    },
    {
      "competencia": "2024-10-01",
      "total_avisado": 167313224.36,
      "media_nm": 195479552.34,
      "fator_peona": 1.053292,
      "peona": 205897023.0,
      "Mk0": 0.282311,
      "Mk1": 0.466695,
      "Mk2": 0.191884,
      "Mk3": 0.039648,
      "Mk4": 0.013426,
      "Mk5": 0.006036,
      "variacao_r": 23277013.84,
      "variacao_pct": 0.1274614647,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "out/2024"
    },
    {
      "competencia": "2024-11-01",
      "total_avisado": 184957494.3,
      "media_nm": 191371540.6,
      "fator_peona": 1.216457,
      "peona": 232795158.23,
      "Mk0": 0.190964,
      "Mk1": 0.500648,
      "Mk2": 0.235844,
      "Mk3": 0.052092,
      "Mk4": 0.014414,
      "Mk5": 0.006038,
      "variacao_r": 26898135.22,
      "variacao_pct": 0.1306387768,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "nov/2024"
    },
    {
      "competencia": "2024-12-01",
      "total_avisado": 159169036.92,
      "media_nm": 183549569.52,
      "fator_peona": 1.395491,
      "peona": 256141813.82,
      "Mk0": 0.096953,
      "Mk1": 0.528069,
      "Mk2": 0.28942,
      "Mk3": 0.060952,
      "Mk4": 0.017304,
      "Mk5": 0.007302,
      "variacao_r": 23346655.59,
      "variacao_pct": 0.1002884071,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "dez/2024"
    },
    {
      "competencia": "2025-01-01",
      "total_avisado": 182801826.71,
      "media_nm": 179991747.8,
      "fator_peona": 1.620706,
      "peona": 291713738.99,
      "Mk0": 0.00241,
      "Mk1": 0.540714,
      "Mk2": 0.342379,
      "Mk3": 0.076989,
      "Mk4": 0.023271,
      "Mk5": 0.014237,
      "variacao_r": 35571925.17,
      "variacao_pct": 0.138875901,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "jan/2025"
    },
    {
      "competencia": "2025-02-01",
      "total_avisado": 193679437.69,
      "media_nm": 176880063.88,
      "fator_peona": 1.635239,
      "peona": 289241228.89,
      "Mk0": 0.003011,
      "Mk1": 0.534552,
      "Mk2": 0.340739,
      "Mk3": 0.08231,
      "Mk4": 0.024658,
      "Mk5": 0.014729,
      "variacao_r": -2472510.1,
      "variacao_pct": -0.0084758096,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "fev/2025"
    },
    {
      "competencia": "2025-03-01",
      "total_avisado": 168321011.91,
      "media_nm": 176040338.65,
      "fator_peona": 1.619115,
      "peona": 285029588.84,
      "Mk0": 0.003986,
      "Mk1": 0.538755,
      "Mk2": 0.342144,
      "Mk3": 0.079047,
      "Mk4": 0.021409,
      "Mk5": 0.014659,
      "variacao_r": -4211640.05,
      "variacao_pct": -0.0145609949,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "mar/2025"
    },
    {
      "competencia": "2025-04-01",
      "total_avisado": 156535377.74,
      "media_nm": 174244030.88,
      "fator_peona": 1.629972,
      "peona": 284012885.49,
      "Mk0": 0.004085,
      "Mk1": 0.537048,
      "Mk2": 0.338676,
      "Mk3": 0.081566,
      "Mk4": 0.022252,
      "Mk5": 0.016374,
      "variacao_r": -1016703.35,
      "variacao_pct": -0.0035670098,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "abr/2025"
    },
    {
      "competencia": "2025-05-01",
      "total_avisado": 178985710.35,
      "media_nm": 173248733.55,
      "fator_peona": 1.633526,
      "peona": 283006315.03,
      "Mk0": 0.004027,
      "Mk1": 0.531927,
      "Mk2": 0.345022,
      "Mk3": 0.080569,
      "Mk4": 0.022427,
      "Mk5": 0.016028,
      "variacao_r": -1006570.46,
      "variacao_pct": -0.0035441014,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "mai/2025"
    },
    {
      "competencia": "2025-06-01",
      "total_avisado": 193843005.28,
      "media_nm": 179027728.28,
      "fator_peona": 1.649871,
      "peona": 295372679.83,
      "Mk0": 0.003913,
      "Mk1": 0.533887,
      "Mk2": 0.337223,
      "Mk3": 0.080713,
      "Mk4": 0.021921,
      "Mk5": 0.022343,
      "variacao_r": 12366364.79,
      "variacao_pct": 0.043696427,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "jun/2025"
    },
    {
      "competencia": "2025-07-01",
      "total_avisado": 189032438.77,
      "media_nm": 180066163.62,
      "fator_peona": 1.607623,
      "peona": 289478572.91,
      "Mk0": 0.004113,
      "Mk1": 0.55054,
      "Mk2": 0.334393,
      "Mk3": 0.074391,
      "Mk4": 0.017694,
      "Mk5": 0.01887,
      "variacao_r": -5894106.91,
      "variacao_pct": -0.0199548141,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "jul/2025"
    },
    {
      "competencia": "2025-08-01",
      "total_avisado": 181409607.7,
      "media_nm": 178021191.96,
      "fator_peona": 1.601599,
      "peona": 285118609.99,
      "Mk0": 0.003033,
      "Mk1": 0.554419,
      "Mk2": 0.335316,
      "Mk3": 0.072101,
      "Mk4": 0.015411,
      "Mk5": 0.01972,
      "variacao_r": -4359962.92,
      "variacao_pct": -0.0150614357,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "ago/2025"
    },
    {
      "competencia": "2025-09-01",
      "total_avisado": 182587853.45,
      "media_nm": 180398998.88,
      "fator_peona": 1.603538,
      "peona": 289276665.43,
      "Mk0": 0.001897,
      "Mk1": 0.558382,
      "Mk2": 0.330284,
      "Mk3": 0.07385,
      "Mk4": 0.0149,
      "Mk5": 0.020688,
      "variacao_r": 4158055.44,
      "variacao_pct": 0.0145835989,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "set/2025"
    },
    {
      "competencia": "2025-10-01",
      "total_avisado": 193284998.45,
      "media_nm": 186523935.67,
      "fator_peona": 1.585671,
      "peona": 295765675.6,
      "Mk0": 0.001727,
      "Mk1": 0.566228,
      "Mk2": 0.327267,
      "Mk3": 0.072776,
      "Mk4": 0.013428,
      "Mk5": 0.018574,
      "variacao_r": 6489010.17,
      "variacao_pct": 0.022431848,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "out/2025"
    },
    {
      "competencia": "2025-11-01",
      "total_avisado": 195245037.48,
      "media_nm": 189233823.52,
      "fator_peona": 1.569124,
      "peona": 296931424.4,
      "Mk0": 0.001753,
      "Mk1": 0.579869,
      "Mk2": 0.319137,
      "Mk3": 0.066053,
      "Mk4": 0.013114,
      "Mk5": 0.020073,
      "variacao_r": 1165748.8,
      "variacao_pct": 0.0039414607,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "nov/2025"
    },
    {
      "competencia": "2025-12-01",
      "total_avisado": 189845131.49,
      "media_nm": 188567511.22,
      "fator_peona": 1.534329,
      "peona": 289324536.74,
      "Mk0": 0.001927,
      "Mk1": 0.588726,
      "Mk2": 0.321505,
      "Mk3": 0.062731,
      "Mk4": 0.011156,
      "Mk5": 0.013955,
      "variacao_r": -7606887.66,
      "variacao_pct": -0.0256183315,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "dez/2025"
    },
    {
      "competencia": "2026-01-01",
      "total_avisado": 181529066.03,
      "media_nm": 187316949.1,
      "fator_peona": 1.509538,
      "peona": 282762145.22,
      "Mk0": 0.001825,
      "Mk1": 0.600738,
      "Mk2": 0.314292,
      "Mk3": 0.062919,
      "Mk4": 0.00967,
      "Mk5": 0.010556,
      "variacao_r": -6562391.52,
      "variacao_pct": -0.0226817663,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "jan/2026"
    },
    {
      "competencia": "2026-02-01",
      "total_avisado": 180581610.85,
      "media_nm": 187178949.62,
      "fator_peona": 1.493661,
      "peona": 279581989.07,
      "Mk0": 0.002589,
      "Mk1": 0.60846,
      "Mk2": 0.309365,
      "Mk3": 0.061276,
      "Mk4": 0.00891,
      "Mk5": 0.009401,
      "variacao_r": -3180156.16,
      "variacao_pct": -0.0112467535,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "fev/2026"
    },
    {
      "competencia": "2026-03-01",
      "total_avisado": 180736875.45,
      "media_nm": 186870453.29,
      "fator_peona": 1.485359,
      "peona": 277569796.05,
      "Mk0": 0.003119,
      "Mk1": 0.611279,
      "Mk2": 0.307656,
      "Mk3": 0.06125,
      "Mk4": 0.008462,
      "Mk5": 0.008234,
      "variacao_r": -2012193.01,
      "variacao_pct": -0.0071971482,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "mar/2026"
    },
    {
      "competencia": "2026-04-01",
      "total_avisado": 203642772.9,
      "media_nm": 188596749.03,
      "fator_peona": 1.474776,
      "peona": 278137889.29,
      "Mk0": 0.004173,
      "Mk1": 0.620071,
      "Mk2": 0.298788,
      "Mk3": 0.05958,
      "Mk4": 0.00855,
      "Mk5": 0.008838,
      "variacao_r": 568093.24,
      "variacao_pct": 0.0020466681,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "abr/2026"
    },
    {
      "competencia": "2026-05-01",
      "total_avisado": 196856213.99,
      "media_nm": 188865278.45,
      "fator_peona": 1.465065,
      "peona": 276699947.22,
      "Mk0": 0.005025,
      "Mk1": 0.623598,
      "Mk2": 0.297804,
      "Mk3": 0.057187,
      "Mk4": 0.007632,
      "Mk5": 0.008754,
      "variacao_r": -1437942.07,
      "variacao_pct": -0.0051698892,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "mai/2026"
    },
    {
      "competencia": "2026-06-01",
      "total_avisado": 201972307.05,
      "media_nm": 190886474.38,
      "fator_peona": 1.456772,
      "peona": 278078166.0,
      "Mk0": 0.005909,
      "Mk1": 0.62897,
      "Mk2": 0.291727,
      "Mk3": 0.057594,
      "Mk4": 0.007433,
      "Mk5": 0.008367,
      "variacao_r": 1378218.79,
      "variacao_pct": 0.0049809145,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "jun/2026"
    },
    {
      "competencia": "2026-07-01",
      "total_avisado": 208556329.8,
      "media_nm": 195391018.34,
      "fator_peona": 1.453699,
      "peona": 284039635.57,
      "Mk0": 0.008003,
      "Mk1": 0.63065,
      "Mk2": 0.290467,
      "Mk3": 0.052308,
      "Mk4": 0.007672,
      "Mk5": 0.0109,
      "variacao_r": 5961469.56,
      "variacao_pct": 0.0214381073,
      "tipo": "MH",
      "janela": 6,
      "competencia_label": "jul/2026"
    },
    {
      "competencia": "2024-01-01",
      "total_avisado": 2293145.05,
      "media_nm": 2473093.85,
      "fator_peona": 0.599698,
      "peona": 1483110.4,
      "Mk0": 0.617918,
      "Mk1": 0.267997,
      "Mk2": 0.056156,
      "Mk3": 0.02811,
      "Mk4": 0.014036,
      "Mk5": 0.015783,
      "variacao_r": null,
      "variacao_pct": null,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "jan/2024"
    },
    {
      "competencia": "2024-02-01",
      "total_avisado": 2917516.44,
      "media_nm": 2512067.2,
      "fator_peona": 0.614772,
      "peona": 1544349.54,
      "Mk0": 0.597409,
      "Mk1": 0.293856,
      "Mk2": 0.050993,
      "Mk3": 0.027561,
      "Mk4": 0.014661,
      "Mk5": 0.015521,
      "variacao_r": 61239.14,
      "variacao_pct": 0.0412910188,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "fev/2024"
    },
    {
      "competencia": "2024-03-01",
      "total_avisado": 3116686.73,
      "media_nm": 2614991.04,
      "fator_peona": 0.608705,
      "peona": 1591756.85,
      "Mk0": 0.595395,
      "Mk1": 0.296632,
      "Mk2": 0.054721,
      "Mk3": 0.02486,
      "Mk4": 0.01391,
      "Mk5": 0.014482,
      "variacao_r": 47407.31,
      "variacao_pct": 0.0306972657,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "mar/2024"
    },
    {
      "competencia": "2024-04-01",
      "total_avisado": 3250382.76,
      "media_nm": 2747458.52,
      "fator_peona": 0.602918,
      "peona": 1656491.03,
      "Mk0": 0.592982,
      "Mk1": 0.301345,
      "Mk2": 0.05511,
      "Mk3": 0.024521,
      "Mk4": 0.012418,
      "Mk5": 0.013623,
      "variacao_r": 64734.18,
      "variacao_pct": 0.0406683866,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "abr/2024"
    },
    {
      "competencia": "2024-05-01",
      "total_avisado": 3249086.52,
      "media_nm": 2880052.94,
      "fator_peona": 0.606436,
      "peona": 1746566.86,
      "Mk0": 0.581377,
      "Mk1": 0.313536,
      "Mk2": 0.057803,
      "Mk3": 0.023764,
      "Mk4": 0.011597,
      "Mk5": 0.011922,
      "variacao_r": 90075.83,
      "variacao_pct": 0.0543774947,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "mai/2024"
    },
    {
      "competencia": "2024-06-01",
      "total_avisado": 3196760.66,
      "media_nm": 3003929.69,
      "fator_peona": 0.591097,
      "peona": 1775614.79,
      "Mk0": 0.577655,
      "Mk1": 0.324068,
      "Mk2": 0.056717,
      "Mk3": 0.022134,
      "Mk4": 0.009938,
      "Mk5": 0.009488,
      "variacao_r": 29047.93,
      "variacao_pct": 0.016631443,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "jun/2024"
    },
    {
      "competencia": "2024-07-01",
      "total_avisado": 3424135.54,
      "media_nm": 3192428.11,
      "fator_peona": 0.597499,
      "peona": 1907474.18,
      "Mk0": 0.559872,
      "Mk1": 0.346108,
      "Mk2": 0.056091,
      "Mk3": 0.020861,
      "Mk4": 0.008713,
      "Mk5": 0.008354,
      "variacao_r": 131859.39,
      "variacao_pct": 0.0742612606,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "jul/2024"
    },
    {
      "competencia": "2024-08-01",
      "total_avisado": 3289049.65,
      "media_nm": 3254350.31,
      "fator_peona": 0.745191,
      "peona": 2425112.51,
      "Mk0": 0.469333,
      "Mk1": 0.382974,
      "Mk2": 0.105475,
      "Mk3": 0.025129,
      "Mk4": 0.009569,
      "Mk5": 0.007521,
      "variacao_r": 517638.33,
      "variacao_pct": 0.2713737033,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "ago/2024"
    },
    {
      "competencia": "2024-09-01",
      "total_avisado": 2685136.73,
      "media_nm": 3182425.31,
      "fator_peona": 0.890244,
      "peona": 2833135.35,
      "Mk0": 0.387856,
      "Mk1": 0.413751,
      "Mk2": 0.145569,
      "Mk3": 0.033276,
      "Mk4": 0.012217,
      "Mk5": 0.007332,
      "variacao_r": 408022.84,
      "variacao_pct": 0.168249036,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "set/2024"
    },
    {
      "competencia": "2024-10-01",
      "total_avisado": 2591489.0,
      "media_nm": 3072609.68,
      "fator_peona": 1.039167,
      "peona": 3192953.22,
      "Mk0": 0.297754,
      "Mk1": 0.454515,
      "Mk2": 0.187292,
      "Mk3": 0.039193,
      "Mk4": 0.013738,
      "Mk5": 0.007507,
      "variacao_r": 359817.86,
      "variacao_pct": 0.1270034147,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "out/2024"
    },
    {
      "competencia": "2024-11-01",
      "total_avisado": 2864778.41,
      "media_nm": 3008558.33,
      "fator_peona": 1.199066,
      "peona": 3607459.41,
      "Mk0": 0.208125,
      "Mk1": 0.487773,
      "Mk2": 0.230533,
      "Mk3": 0.051448,
      "Mk4": 0.01472,
      "Mk5": 0.0074,
      "variacao_r": 414506.19,
      "variacao_pct": 0.1298190605,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "nov/2024"
    },
    {
      "competencia": "2024-12-01",
      "total_avisado": 2465344.93,
      "media_nm": 2886655.71,
      "fator_peona": 1.373675,
      "peona": 3965325.67,
      "Mk0": 0.116311,
      "Mk1": 0.514365,
      "Mk2": 0.283135,
      "Mk3": 0.060161,
      "Mk4": 0.017583,
      "Mk5": 0.008445,
      "variacao_r": 357866.26,
      "variacao_pct": 0.0992017429,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "dez/2024"
    },
    {
      "competencia": "2025-01-01",
      "total_avisado": 1713567.14,
      "media_nm": 2601560.98,
      "fator_peona": 1.601588,
      "peona": 4166629.19,
      "Mk0": 0.002527,
      "Mk1": 0.547907,
      "Mk2": 0.341162,
      "Mk3": 0.074366,
      "Mk4": 0.021933,
      "Mk5": 0.012106,
      "variacao_r": 201303.53,
      "variacao_pct": 0.0507659504,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "jan/2025"
    },
    {
      "competencia": "2025-02-01",
      "total_avisado": 2875375.17,
      "media_nm": 2532615.23,
      "fator_peona": 1.617197,
      "peona": 4095736.62,
      "Mk0": 0.00314,
      "Mk1": 0.541184,
      "Mk2": 0.339624,
      "Mk3": 0.080053,
      "Mk4": 0.02339,
      "Mk5": 0.012609,
      "variacao_r": -70892.58,
      "variacao_pct": -0.0170143714,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "fev/2025"
    },
    {
      "competencia": "2025-03-01",
      "total_avisado": 1868924.87,
      "media_nm": 2396579.92,
      "fator_peona": 1.604189,
      "peona": 3844566.54,
      "Mk0": 0.003925,
      "Mk1": 0.544544,
      "Mk2": 0.340675,
      "Mk3": 0.077811,
      "Mk4": 0.020359,
      "Mk5": 0.012685,
      "variacao_r": -251170.07,
      "variacao_pct": -0.0613247623,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "mar/2025"
    },
    {
      "competencia": "2025-04-01",
      "total_avisado": 1738065.01,
      "media_nm": 2254342.59,
      "fator_peona": 1.617009,
      "peona": 3645291.36,
      "Mk0": 0.004078,
      "Mk1": 0.54156,
      "Mk2": 0.337722,
      "Mk3": 0.080875,
      "Mk4": 0.021443,
      "Mk5": 0.014321,
      "variacao_r": -199275.18,
      "variacao_pct": -0.0518329383,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "abr/2025"
    },
    {
      "competencia": "2025-05-01",
      "total_avisado": 1987338.61,
      "media_nm": 2108102.62,
      "fator_peona": 1.622109,
      "peona": 3419572.62,
      "Mk0": 0.004185,
      "Mk1": 0.536274,
      "Mk2": 0.344051,
      "Mk3": 0.07883,
      "Mk4": 0.022057,
      "Mk5": 0.014603,
      "variacao_r": -225718.74,
      "variacao_pct": -0.0619206305,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "mai/2025"
    },
    {
      "competencia": "2025-06-01",
      "total_avisado": 3002404.73,
      "media_nm": 2197612.59,
      "fator_peona": 1.643198,
      "peona": 3611113.36,
      "Mk0": 0.004034,
      "Mk1": 0.53857,
      "Mk2": 0.334251,
      "Mk3": 0.079082,
      "Mk4": 0.021433,
      "Mk5": 0.02263,
      "variacao_r": 191540.74,
      "variacao_pct": 0.0560130632,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "jun/2025"
    },
    {
      "competencia": "2025-07-01",
      "total_avisado": 2927894.6,
      "media_nm": 2400000.5,
      "fator_peona": 1.613125,
      "peona": 3871500.84,
      "Mk0": 0.004013,
      "Mk1": 0.55026,
      "Mk2": 0.332932,
      "Mk3": 0.074427,
      "Mk4": 0.018118,
      "Mk5": 0.02025,
      "variacao_r": 260387.48,
      "variacao_pct": 0.0721072574,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "jul/2025"
    },
    {
      "competencia": "2025-08-01",
      "total_avisado": 2240252.08,
      "media_nm": 2294146.65,
      "fator_peona": 1.580736,
      "peona": 3626440.99,
      "Mk0": 0.005159,
      "Mk1": 0.572299,
      "Mk2": 0.314965,
      "Mk3": 0.072048,
      "Mk4": 0.01528,
      "Mk5": 0.020248,
      "variacao_r": -245059.85,
      "variacao_pct": -0.0632984107,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "ago/2025"
    },
    {
      "competencia": "2025-09-01",
      "total_avisado": 2324084.19,
      "media_nm": 2370006.54,
      "fator_peona": 1.551993,
      "peona": 3678233.6,
      "Mk0": 0.009436,
      "Mk1": 0.586978,
      "Mk2": 0.298071,
      "Mk3": 0.072182,
      "Mk4": 0.014338,
      "Mk5": 0.018995,
      "variacao_r": 51792.61,
      "variacao_pct": 0.014281939,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "set/2025"
    },
    {
      "competencia": "2025-10-01",
      "total_avisado": 2343600.73,
      "media_nm": 2470929.16,
      "fator_peona": 1.513784,
      "peona": 3740452.89,
      "Mk0": 0.012396,
      "Mk1": 0.608151,
      "Mk2": 0.279561,
      "Mk3": 0.069945,
      "Mk4": 0.013061,
      "Mk5": 0.016886,
      "variacao_r": 62219.3,
      "variacao_pct": 0.0169155366,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "out/2025"
    },
    {
      "competencia": "2025-11-01",
      "total_avisado": 2531309.21,
      "media_nm": 2561590.92,
      "fator_peona": 1.472366,
      "peona": 3771600.5,
      "Mk0": 0.016261,
      "Mk1": 0.634309,
      "Mk2": 0.256732,
      "Mk3": 0.06356,
      "Mk4": 0.011777,
      "Mk5": 0.017361,
      "variacao_r": 31147.6,
      "variacao_pct": 0.0083272279,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "nov/2025"
    },
    {
      "competencia": "2025-12-01",
      "total_avisado": 2316562.37,
      "media_nm": 2447283.86,
      "fator_peona": 1.396074,
      "peona": 3416589.38,
      "Mk0": 0.026549,
      "Mk1": 0.662738,
      "Mk2": 0.230278,
      "Mk3": 0.059537,
      "Mk4": 0.010318,
      "Mk5": 0.010579,
      "variacao_r": -355011.12,
      "variacao_pct": -0.0941274451,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "dez/2025"
    },
    {
      "competencia": "2026-01-01",
      "total_avisado": 1800756.04,
      "media_nm": 2259427.44,
      "fator_peona": 1.324915,
      "peona": 2993550.28,
      "Mk0": 0.032823,
      "Mk1": 0.699449,
      "Mk2": 0.199153,
      "Mk3": 0.05376,
      "Mk4": 0.008193,
      "Mk5": 0.006622,
      "variacao_r": -423039.1,
      "variacao_pct": -0.1238191226,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "jan/2026"
    },
    {
      "competencia": "2026-02-01",
      "total_avisado": 2070419.77,
      "media_nm": 2231122.05,
      "fator_peona": 1.292625,
      "peona": 2884003.73,
      "Mk0": 0.038908,
      "Mk1": 0.712128,
      "Mk2": 0.185494,
      "Mk3": 0.050074,
      "Mk4": 0.007693,
      "Mk5": 0.005703,
      "variacao_r": -109546.55,
      "variacao_pct": -0.0365941908,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "fev/2026"
    },
    {
      "competencia": "2026-03-01",
      "total_avisado": 1935481.44,
      "media_nm": 2166354.93,
      "fator_peona": 1.266515,
      "peona": 2743722.07,
      "Mk0": 0.042059,
      "Mk1": 0.726895,
      "Mk2": 0.172238,
      "Mk3": 0.045456,
      "Mk4": 0.00798,
      "Mk5": 0.005371,
      "variacao_r": -140281.66,
      "variacao_pct": -0.0486412882,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "mar/2026"
    },
    {
      "competencia": "2026-04-01",
      "total_avisado": 2479996.68,
      "media_nm": 2189087.58,
      "fator_peona": 1.248381,
      "peona": 2732815.87,
      "Mk0": 0.042743,
      "Mk1": 0.738988,
      "Mk2": 0.163165,
      "Mk3": 0.042377,
      "Mk4": 0.007705,
      "Mk5": 0.005023,
      "variacao_r": -10906.2,
      "variacao_pct": -0.0039749665,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "abr/2026"
    },
    {
      "competencia": "2026-05-01",
      "total_avisado": 2385821.84,
      "media_nm": 2164839.69,
      "fator_peona": 1.240255,
      "peona": 2684953.87,
      "Mk0": 0.043311,
      "Mk1": 0.74396,
      "Mk2": 0.159667,
      "Mk3": 0.039661,
      "Mk4": 0.009027,
      "Mk5": 0.004374,
      "variacao_r": -47862.0,
      "variacao_pct": -0.0175138022,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "mai/2026"
    },
    {
      "competencia": "2026-06-01",
      "total_avisado": 2320703.82,
      "media_nm": 2165529.93,
      "fator_peona": 1.226028,
      "peona": 2654999.52,
      "Mk0": 0.040049,
      "Mk1": 0.756733,
      "Mk2": 0.154154,
      "Mk3": 0.038279,
      "Mk4": 0.007775,
      "Mk5": 0.00301,
      "variacao_r": -29954.35,
      "variacao_pct": -0.0111563742,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "jun/2026"
    },
    {
      "competencia": "2026-07-01",
      "total_avisado": 2333640.25,
      "media_nm": 2254343.97,
      "fator_peona": 1.225662,
      "peona": 2763063.32,
      "Mk0": 0.041439,
      "Mk1": 0.756638,
      "Mk2": 0.151852,
      "Mk3": 0.038351,
      "Mk4": 0.008335,
      "Mk5": 0.003386,
      "variacao_r": 108063.8,
      "variacao_pct": 0.0407020023,
      "tipo": "OD",
      "janela": 6,
      "competencia_label": "jul/2026"
    },
    {
      "competencia": "2024-07-01",
      "total_avisado": 204148757.02,
      "media_nm": 187452444.69,
      "fator_peona": 0.614493,
      "peona": 115188255.34,
      "Mk0": 0.534978,
      "Mk1": 0.36288,
      "Mk2": 0.06899,
      "Mk3": 0.022448,
      "Mk4": 0.00723,
      "Mk5": 0.003474,
      "variacao_r": null,
      "variacao_pct": null,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "jul/2024"
    },
    {
      "competencia": "2024-08-01",
      "total_avisado": 212349541.24,
      "media_nm": 190838604.74,
      "fator_peona": 0.697893,
      "peona": 133184995.55,
      "Mk0": 0.484039,
      "Mk1": 0.386898,
      "Mk2": 0.092239,
      "Mk3": 0.024695,
      "Mk4": 0.008209,
      "Mk5": 0.003919,
      "variacao_r": 17996740.21,
      "variacao_pct": 0.1562376317,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "ago/2024"
    },
    {
      "competencia": "2024-09-01",
      "total_avisado": 173359363.28,
      "media_nm": 191122673.17,
      "fator_peona": 0.769456,
      "peona": 147060444.28,
      "Mk0": 0.447539,
      "Mk1": 0.396945,
      "Mk2": 0.112898,
      "Mk3": 0.02823,
      "Mk4": 0.009913,
      "Mk5": 0.004474,
      "variacao_r": 13875448.73,
      "variacao_pct": 0.1041817712,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "set/2024"
    },
    {
      "competencia": "2024-10-01",
      "total_avisado": 167313224.36,
      "media_nm": 191058744.38,
      "fator_peona": 0.8329,
      "peona": 159132772.29,
      "Mk0": 0.411233,
      "Mk1": 0.411054,
      "Mk2": 0.131589,
      "Mk3": 0.030726,
      "Mk4": 0.010502,
      "Mk5": 0.004896,
      "variacao_r": 12072328.01,
      "variacao_pct": 0.0820909258,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "out/2024"
    },
    {
      "competencia": "2024-11-01",
      "total_avisado": 184957494.3,
      "media_nm": 192180243.31,
      "fator_peona": 0.904919,
      "peona": 173907513.46,
      "Mk0": 0.372485,
      "Mk1": 0.423575,
      "Mk2": 0.151352,
      "Mk3": 0.036701,
      "Mk4": 0.010901,
      "Mk5": 0.004987,
      "variacao_r": 14774741.17,
      "variacao_pct": 0.0928453703,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "nov/2024"
    },
    {
      "competencia": "2024-12-01",
      "total_avisado": 159169036.92,
      "media_nm": 191553095.52,
      "fator_peona": 0.970095,
      "peona": 185824641.59,
      "Mk0": 0.33888,
      "Mk1": 0.43167,
      "Mk2": 0.17225,
      "Mk3": 0.040071,
      "Mk4": 0.011937,
      "Mk5": 0.005193,
      "variacao_r": 11917128.12,
      "variacao_pct": 0.0685256657,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "dez/2024"
    },
    {
      "competencia": "2025-01-01",
      "total_avisado": 182801826.71,
      "media_nm": 191663600.17,
      "fator_peona": 1.075268,
      "peona": 206089671.39,
      "Mk0": 0.292044,
      "Mk1": 0.442769,
      "Mk2": 0.194873,
      "Mk3": 0.046965,
      "Mk4": 0.014882,
      "Mk5": 0.008465,
      "variacao_r": 20265029.8,
      "variacao_pct": 0.1090545884,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "jan/2025"
    },
    {
      "competencia": "2025-02-01",
      "total_avisado": 193679437.69,
      "media_nm": 191834195.51,
      "fator_peona": 1.15606,
      "peona": 221771794.81,
      "Mk0": 0.248294,
      "Mk1": 0.458945,
      "Mk2": 0.215775,
      "Mk3": 0.051541,
      "Mk4": 0.016283,
      "Mk5": 0.009162,
      "variacao_r": 15682123.42,
      "variacao_pct": 0.0760936893,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "fev/2025"
    },
    {
      "competencia": "2025-03-01",
      "total_avisado": 168321011.91,
      "media_nm": 189312828.03,
      "fator_peona": 1.235124,
      "peona": 233824799.0,
      "Mk0": 0.202077,
      "Mk1": 0.47783,
      "Mk2": 0.239011,
      "Mk3": 0.054746,
      "Mk4": 0.016648,
      "Mk5": 0.009689,
      "variacao_r": 12053004.19,
      "variacao_pct": 0.0543486795,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "mar/2025"
    },
    {
      "competencia": "2025-04-01",
      "total_avisado": 156535377.74,
      "media_nm": 184861791.61,
      "fator_peona": 1.325071,
      "peona": 244954954.25,
      "Mk0": 0.151188,
      "Mk1": 0.499851,
      "Mk2": 0.261064,
      "Mk3": 0.059403,
      "Mk4": 0.017585,
      "Mk5": 0.010908,
      "variacao_r": 11130155.25,
      "variacao_pct": 0.0476004055,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "abr/2025"
    },
    {
      "competencia": "2025-05-01",
      "total_avisado": 178985710.35,
      "media_nm": 182310137.07,
      "fator_peona": 1.414626,
      "peona": 257900736.63,
      "Mk0": 0.102141,
      "Mk1": 0.51551,
      "Mk2": 0.287719,
      "Mk3": 0.065623,
      "Mk4": 0.018221,
      "Mk5": 0.010785,
      "variacao_r": 12945782.38,
      "variacao_pct": 0.052849645,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "mai/2025"
    },
    {
      "competencia": "2025-06-01",
      "total_avisado": 193843005.28,
      "media_nm": 181288648.9,
      "fator_peona": 1.521095,
      "peona": 275757246.82,
      "Mk0": 0.051013,
      "Mk1": 0.530942,
      "Mk2": 0.313024,
      "Mk3": 0.070709,
      "Mk4": 0.019584,
      "Mk5": 0.014729,
      "variacao_r": 17856510.19,
      "variacao_pct": 0.0692379185,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "jun/2025"
    },
    {
      "competencia": "2025-07-01",
      "total_avisado": 189032438.77,
      "media_nm": 180028955.71,
      "fator_peona": 1.614163,
      "peona": 290596155.95,
      "Mk0": 0.003262,
      "Mk1": 0.545628,
      "Mk2": 0.338385,
      "Mk3": 0.07569,
      "Mk4": 0.020482,
      "Mk5": 0.016554,
      "variacao_r": 14838909.13,
      "variacao_pct": 0.0538114929,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "jul/2025"
    },
    {
      "competencia": "2025-08-01",
      "total_avisado": 181409607.7,
      "media_nm": 177450627.92,
      "fator_peona": 1.618365,
      "peona": 287179919.44,
      "Mk0": 0.003022,
      "Mk1": 0.544517,
      "Mk2": 0.338019,
      "Mk3": 0.077189,
      "Mk4": 0.02002,
      "Mk5": 0.017232,
      "variacao_r": -3416236.51,
      "variacao_pct": -0.0117559591,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "ago/2025"
    },
    {
      "competencia": "2025-09-01",
      "total_avisado": 182587853.45,
      "media_nm": 178219668.76,
      "fator_peona": 1.611231,
      "peona": 287153127.13,
      "Mk0": 0.002928,
      "Mk1": 0.548689,
      "Mk2": 0.336141,
      "Mk3": 0.076417,
      "Mk4": 0.018115,
      "Mk5": 0.01771,
      "variacao_r": -26792.3,
      "variacao_pct": -9.32945e-05,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "set/2025"
    },
    {
      "competencia": "2025-10-01",
      "total_avisado": 193284998.45,
      "media_nm": 180383983.27,
      "fator_peona": 1.607068,
      "peona": 289889280.55,
      "Mk0": 0.002866,
      "Mk1": 0.552135,
      "Mk2": 0.332778,
      "Mk3": 0.077021,
      "Mk4": 0.017689,
      "Mk5": 0.017511,
      "variacao_r": 2736153.41,
      "variacao_pct": 0.0095285517,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "out/2025"
    },
    {
      "competencia": "2025-11-01",
      "total_avisado": 195245037.48,
      "media_nm": 181241278.54,
      "fator_peona": 1.599905,
      "peona": 289968869.72,
      "Mk0": 0.00284,
      "Mk1": 0.556955,
      "Mk2": 0.331509,
      "Mk3": 0.072991,
      "Mk4": 0.017565,
      "Mk5": 0.01814,
      "variacao_r": 79589.17,
      "variacao_pct": 0.0002745502,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "nov/2025"
    },
    {
      "competencia": "2025-12-01",
      "total_avisado": 189845131.49,
      "media_nm": 183797619.75,
      "fator_peona": 1.590601,
      "peona": 292348608.28,
      "Mk0": 0.002894,
      "Mk1": 0.562018,
      "Mk2": 0.32916,
      "Mk3": 0.071489,
      "Mk4": 0.016399,
      "Mk5": 0.01804,
      "variacao_r": 2379738.57,
      "variacao_pct": 0.008206876,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "dez/2025"
    },
    {
      "competencia": "2026-01-01",
      "total_avisado": 181529066.03,
      "media_nm": 183691556.36,
      "fator_peona": 1.557613,
      "peona": 286120359.07,
      "Mk0": 0.002946,
      "Mk1": 0.576134,
      "Mk2": 0.324144,
      "Mk3": 0.068542,
      "Mk4": 0.013603,
      "Mk5": 0.014631,
      "variacao_r": -6228249.21,
      "variacao_pct": -0.0213041863,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "jan/2026"
    },
    {
      "competencia": "2026-02-01",
      "total_avisado": 180581610.85,
      "media_nm": 182600070.79,
      "fator_peona": 1.546277,
      "peona": 282350299.53,
      "Mk0": 0.002805,
      "Mk1": 0.582117,
      "Mk2": 0.322015,
      "Mk3": 0.066553,
      "Mk4": 0.012079,
      "Mk5": 0.014431,
      "variacao_r": -3770059.54,
      "variacao_pct": -0.0131764812,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "fev/2026"
    },
    {
      "competencia": "2026-03-01",
      "total_avisado": 180736875.45,
      "media_nm": 183634726.09,
      "fator_peona": 1.543408,
      "peona": 283423230.74,
      "Mk0": 0.002519,
      "Mk1": 0.585297,
      "Mk2": 0.31877,
      "Mk3": 0.067439,
      "Mk4": 0.011624,
      "Mk5": 0.014351,
      "variacao_r": 1072931.21,
      "variacao_pct": 0.0038000003,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "mar/2026"
    },
    {
      "competencia": "2026-04-01",
      "total_avisado": 203642772.9,
      "media_nm": 187560342.35,
      "fator_peona": 1.529917,
      "peona": 286951782.45,
      "Mk0": 0.002957,
      "Mk1": 0.593298,
      "Mk2": 0.312949,
      "Mk3": 0.066141,
      "Mk4": 0.010975,
      "Mk5": 0.013679,
      "variacao_r": 3528551.71,
      "variacao_pct": 0.0124497618,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "abr/2026"
    },
    {
      "competencia": "2026-05-01",
      "total_avisado": 196856213.99,
      "media_nm": 189049550.99,
      "fator_peona": 1.517146,
      "peona": 286815685.81,
      "Mk0": 0.003387,
      "Mk1": 0.601712,
      "Mk2": 0.308481,
      "Mk3": 0.061624,
      "Mk4": 0.010376,
      "Mk5": 0.014419,
      "variacao_r": -136096.64,
      "variacao_pct": -0.000474284,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "mai/2026"
    },
    {
      "competencia": "2026-06-01",
      "total_avisado": 201972307.05,
      "media_nm": 189726992.8,
      "fator_peona": 1.495314,
      "peona": 283701351.37,
      "Mk0": 0.00393,
      "Mk1": 0.608971,
      "Mk2": 0.306525,
      "Mk3": 0.060147,
      "Mk4": 0.009283,
      "Mk5": 0.011144,
      "variacao_r": -3114334.44,
      "variacao_pct": -0.0108583128,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "jun/2026"
    },
    {
      "competencia": "2026-07-01",
      "total_avisado": 208556329.8,
      "media_nm": 191353983.72,
      "fator_peona": 1.481029,
      "peona": 283400890.39,
      "Mk0": 0.004979,
      "Mk1": 0.616009,
      "Mk2": 0.302128,
      "Mk3": 0.057502,
      "Mk4": 0.00865,
      "Mk5": 0.010732,
      "variacao_r": -300460.98,
      "variacao_pct": -0.0010590749,
      "tipo": "MH",
      "janela": 12,
      "competencia_label": "jul/2026"
    },
    {
      "competencia": "2024-07-01",
      "total_avisado": 3424135.54,
      "media_nm": 2832760.98,
      "fator_peona": 0.598459,
      "peona": 1695292.29,
      "Mk0": 0.58521,
      "Mk1": 0.312011,
      "Mk2": 0.056119,
      "Mk3": 0.024025,
      "Mk4": 0.011037,
      "Mk5": 0.011597,
      "variacao_r": null,
      "variacao_pct": null,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "jul/2024"
    },
    {
      "competencia": "2024-08-01",
      "total_avisado": 3289049.65,
      "media_nm": 2883208.76,
      "fator_peona": 0.688376,
      "peona": 1984731.03,
      "Mk0": 0.525127,
      "Mk1": 0.344151,
      "Mk2": 0.08174,
      "Mk3": 0.026188,
      "Mk4": 0.011787,
      "Mk5": 0.011006,
      "variacao_r": 289438.74,
      "variacao_pct": 0.1707308749,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "ago/2024"
    },
    {
      "competencia": "2024-09-01",
      "total_avisado": 2685136.73,
      "media_nm": 2898708.17,
      "fator_peona": 0.763252,
      "peona": 2212446.1,
      "Mk0": 0.481469,
      "Mk1": 0.360923,
      "Mk2": 0.104591,
      "Mk3": 0.02948,
      "Mk4": 0.012981,
      "Mk5": 0.010557,
      "variacao_r": 227715.08,
      "variacao_pct": 0.1147334688,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "set/2024"
    },
    {
      "competencia": "2024-10-01",
      "total_avisado": 2591489.0,
      "media_nm": 2910034.1,
      "fator_peona": 0.833228,
      "peona": 2424722.12,
      "Mk0": 0.437121,
      "Mk1": 0.382209,
      "Mk2": 0.124894,
      "Mk3": 0.032267,
      "Mk4": 0.013115,
      "Mk5": 0.010394,
      "variacao_r": 212276.02,
      "variacao_pct": 0.0959463028,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "out/2024"
    },
    {
      "competencia": "2024-11-01",
      "total_avisado": 2864778.41,
      "media_nm": 2944305.64,
      "fator_peona": 0.909217,
      "peona": 2677013.13,
      "Mk0": 0.390678,
      "Mk1": 0.402556,
      "Mk2": 0.146053,
      "Mk3": 0.037908,
      "Mk4": 0.013193,
      "Mk5": 0.009612,
      "variacao_r": 252291.01,
      "variacao_pct": 0.1040494526,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "nov/2024"
    },
    {
      "competencia": "2024-12-01",
      "total_avisado": 2465344.93,
      "media_nm": 2945292.7,
      "fator_peona": 0.974596,
      "peona": 2870470.23,
      "Mk0": 0.351575,
      "Mk1": 0.417322,
      "Mk2": 0.167672,
      "Mk3": 0.040769,
      "Mk4": 0.013685,
      "Mk5": 0.008977,
      "variacao_r": 193457.09,
      "variacao_pct": 0.0722660235,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "dez/2024"
    },
    {
      "competencia": "2025-01-01",
      "total_avisado": 1713567.14,
      "media_nm": 2896994.54,
      "fator_peona": 1.048346,
      "peona": 3037051.69,
      "Mk0": 0.309618,
      "Mk1": 0.436718,
      "Mk2": 0.184091,
      "Mk3": 0.044886,
      "Mk4": 0.014649,
      "Mk5": 0.010039,
      "variacao_r": 166581.46,
      "variacao_pct": 0.0580328121,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "jan/2025"
    },
    {
      "competencia": "2025-02-01",
      "total_avisado": 2875375.17,
      "media_nm": 2893482.77,
      "fator_peona": 1.126817,
      "peona": 3260424.56,
      "Mk0": 0.265307,
      "Mk1": 0.452213,
      "Mk2": 0.207948,
      "Mk3": 0.049166,
      "Mk4": 0.015618,
      "Mk5": 0.009748,
      "variacao_r": 223372.88,
      "variacao_pct": 0.0735492514,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "fev/2025"
    },
    {
      "competencia": "2025-03-01",
      "total_avisado": 1868924.87,
      "media_nm": 2789502.61,
      "fator_peona": 1.196934,
      "peona": 3338850.95,
      "Mk0": 0.22293,
      "Mk1": 0.469936,
      "Mk2": 0.229381,
      "Mk3": 0.052407,
      "Mk4": 0.015714,
      "Mk5": 0.009632,
      "variacao_r": 78426.38,
      "variacao_pct": 0.0240540403,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "mar/2025"
    },
    {
      "competencia": "2025-04-01",
      "total_avisado": 1738065.01,
      "media_nm": 2663476.14,
      "fator_peona": 1.283707,
      "peona": 3419122.29,
      "Mk0": 0.173472,
      "Mk1": 0.491352,
      "Mk2": 0.250954,
      "Mk3": 0.056833,
      "Mk4": 0.016999,
      "Mk5": 0.01039,
      "variacao_r": 80271.34,
      "variacao_pct": 0.0240416069,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "abr/2025"
    },
    {
      "competencia": "2025-05-01",
      "total_avisado": 1987338.61,
      "media_nm": 2558330.48,
      "fator_peona": 1.373363,
      "peona": 3513516.01,
      "Mk0": 0.1241,
      "Mk1": 0.507756,
      "Mk2": 0.277303,
      "Mk3": 0.06273,
      "Mk4": 0.017743,
      "Mk5": 0.010368,
      "variacao_r": 94393.72,
      "variacao_pct": 0.0276075893,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "mai/2025"
    },
    {
      "competencia": "2025-06-01",
      "total_avisado": 3002404.73,
      "media_nm": 2542134.15,
      "fator_peona": 1.490173,
      "peona": 3788219.51,
      "Mk0": 0.067781,
      "Mk1": 0.524827,
      "Mk2": 0.305229,
      "Mk3": 0.068339,
      "Mk4": 0.019247,
      "Mk5": 0.014576,
      "variacao_r": 274703.5,
      "variacao_pct": 0.0781847864,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "jun/2025"
    },
    {
      "competencia": "2025-07-01",
      "total_avisado": 2927894.6,
      "media_nm": 2500780.74,
      "fator_peona": 1.607124,
      "peona": 4019065.02,
      "Mk0": 0.00324,
      "Mk1": 0.549036,
      "Mk2": 0.337213,
      "Mk3": 0.074395,
      "Mk4": 0.020102,
      "Mk5": 0.016014,
      "variacao_r": 230845.5,
      "variacao_pct": 0.0609377315,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "jul/2025"
    },
    {
      "competencia": "2025-08-01",
      "total_avisado": 2240252.08,
      "media_nm": 2413380.94,
      "fator_peona": 1.599867,
      "peona": 3861088.8,
      "Mk0": 0.0041,
      "Mk1": 0.555973,
      "Mk2": 0.327904,
      "Mk3": 0.076248,
      "Mk4": 0.019535,
      "Mk5": 0.01624,
      "variacao_r": -157976.21,
      "variacao_pct": -0.0393067076,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "ago/2025"
    },
    {
      "competencia": "2025-09-01",
      "total_avisado": 2324084.19,
      "media_nm": 2383293.23,
      "fator_peona": 1.578236,
      "peona": 3761400.07,
      "Mk0": 0.006665,
      "Mk1": 0.565643,
      "Mk2": 0.319492,
      "Mk3": 0.075012,
      "Mk4": 0.017365,
      "Mk5": 0.015822,
      "variacao_r": -99688.73,
      "variacao_pct": -0.0258188138,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "set/2025"
    },
    {
      "competencia": "2025-10-01",
      "total_avisado": 2343600.73,
      "media_nm": 2362635.87,
      "fator_peona": 1.563031,
      "peona": 3692872.13,
      "Mk0": 0.008428,
      "Mk1": 0.576382,
      "Mk2": 0.307308,
      "Mk3": 0.07516,
      "Mk4": 0.01706,
      "Mk5": 0.015662,
      "variacao_r": -68527.94,
      "variacao_pct": -0.0182187328,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "out/2025"
    },
    {
      "competencia": "2025-11-01",
      "total_avisado": 2531309.21,
      "media_nm": 2334846.77,
      "fator_peona": 1.539967,
      "peona": 3595586.56,
      "Mk0": 0.010809,
      "Mk1": 0.590052,
      "Mk2": 0.296152,
      "Mk3": 0.070454,
      "Mk4": 0.016418,
      "Mk5": 0.016116,
      "variacao_r": -97285.57,
      "variacao_pct": -0.0263441475,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "nov/2025"
    },
    {
      "competencia": "2025-12-01",
      "total_avisado": 2316562.37,
      "media_nm": 2322448.23,
      "fator_peona": 1.512994,
      "peona": 3513851.37,
      "Mk0": 0.015897,
      "Mk1": 0.603991,
      "Mk2": 0.27947,
      "Mk3": 0.068784,
      "Mk4": 0.015577,
      "Mk5": 0.01628,
      "variacao_r": -81735.19,
      "variacao_pct": -0.0227320881,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "dez/2025"
    },
    {
      "competencia": "2026-01-01",
      "total_avisado": 1800756.04,
      "media_nm": 2329713.97,
      "fator_peona": 1.473368,
      "peona": 3432525.56,
      "Mk0": 0.017984,
      "Mk1": 0.622604,
      "Mk2": 0.268061,
      "Mk3": 0.064405,
      "Mk4": 0.013305,
      "Mk5": 0.013641,
      "variacao_r": -81325.81,
      "variacao_pct": -0.0231443509,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "jan/2026"
    },
    {
      "competencia": "2026-02-01",
      "total_avisado": 2070419.77,
      "media_nm": 2262634.35,
      "fator_peona": 1.438687,
      "peona": 3255222.36,
      "Mk0": 0.021799,
      "Mk1": 0.641239,
      "Mk2": 0.251131,
      "Mk3": 0.061214,
      "Mk4": 0.011539,
      "Mk5": 0.013077,
      "variacao_r": -177303.2,
      "variacao_pct": -0.0516538615,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "fev/2026"
    },
    {
      "competencia": "2026-03-01",
      "total_avisado": 1935481.44,
      "media_nm": 2268180.73,
      "fator_peona": 1.415662,
      "peona": 3210977.84,
      "Mk0": 0.025015,
      "Mk1": 0.653796,
      "Mk2": 0.237979,
      "Mk3": 0.059419,
      "Mk4": 0.011302,
      "Mk5": 0.012489,
      "variacao_r": -44244.52,
      "variacao_pct": -0.0135918591,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "mar/2026"
    },
    {
      "competencia": "2026-04-01",
      "total_avisado": 2479996.68,
      "media_nm": 2330008.37,
      "fator_peona": 1.389108,
      "peona": 3236634.38,
      "Mk0": 0.026652,
      "Mk1": 0.669613,
      "Mk2": 0.224883,
      "Mk3": 0.056995,
      "Mk4": 0.010545,
      "Mk5": 0.011313,
      "variacao_r": 25656.55,
      "variacao_pct": 0.0079902594,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "abr/2026"
    },
    {
      "competencia": "2026-05-01",
      "total_avisado": 2385821.84,
      "media_nm": 2363215.31,
      "fator_peona": 1.366053,
      "peona": 3228277.19,
      "Mk0": 0.028651,
      "Mk1": 0.684532,
      "Mk2": 0.212274,
      "Mk3": 0.052614,
      "Mk4": 0.010517,
      "Mk5": 0.011412,
      "variacao_r": -8357.2,
      "variacao_pct": -0.0025820638,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "mai/2026"
    },
    {
      "competencia": "2026-06-01",
      "total_avisado": 2320703.82,
      "media_nm": 2306406.9,
      "fator_peona": 1.316244,
      "peona": 3035794.45,
      "Mk0": 0.032887,
      "Mk1": 0.706865,
      "Mk2": 0.194541,
      "Mk3": 0.049558,
      "Mk4": 0.009124,
      "Mk5": 0.007026,
      "variacao_r": -192482.73,
      "variacao_pct": -0.05962398,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "jun/2026"
    },
    {
      "competencia": "2026-07-01",
      "total_avisado": 2333640.25,
      "media_nm": 2256885.7,
      "fator_peona": 1.275345,
      "peona": 2878306.8,
      "Mk0": 0.037126,
      "Mk1": 0.728011,
      "Mk2": 0.175529,
      "Mk3": 0.046064,
      "Mk4": 0.008264,
      "Mk5": 0.005006,
      "variacao_r": -157487.65,
      "variacao_pct": -0.0518769152,
      "tipo": "OD",
      "janela": 12,
      "competencia_label": "jul/2026"
    }
  ],
  "consolidado_6m": [
    {
      "competencia": "2024-01-01",
      "competencia_label": "jan/2024",
      "peona_mh": 109910906.89,
      "peona_od": 1483110.4,
      "peona_total": 111394017.29,
      "fator_mh": 0.640621,
      "fator_od": 0.599698,
      "media_mh": 171569436.83,
      "media_od": 2473093.85,
      "total_avisado_mh": 181475770.86,
      "total_avisado_od": 2293145.05,
      "variacao_r_mh": null,
      "variacao_r_od": null,
      "variacao_pct_mh": null,
      "variacao_pct_od": null,
      "Mk_mh": {
        "Mk0": 0.519039,
        "Mk1": 0.370951,
        "Mk2": 0.074547,
        "Mk3": 0.024888,
        "Mk4": 0.006962,
        "Mk5": 0.003612
      },
      "Mk_od": {
        "Mk0": 0.617918,
        "Mk1": 0.267997,
        "Mk2": 0.056156,
        "Mk3": 0.02811,
        "Mk4": 0.014036,
        "Mk5": 0.015783
      },
      "variacao_r_total": null,
      "variacao_pct_total": null
    },
    {
      "competencia": "2024-02-01",
      "competencia_label": "fev/2024",
      "peona_mh": 112067630.36,
      "peona_od": 1544349.54,
      "peona_total": 113611979.9,
      "fator_mh": 0.640793,
      "fator_od": 0.614772,
      "media_mh": 174888882.33,
      "media_od": 2512067.2,
      "total_avisado_mh": 191632293.65,
      "total_avisado_od": 2917516.44,
      "variacao_r_mh": 2156723.47,
      "variacao_r_od": 61239.14,
      "variacao_pct_mh": 0.01962247,
      "variacao_pct_od": 0.0412910188,
      "Mk_mh": {
        "Mk0": 0.514709,
        "Mk1": 0.378179,
        "Mk2": 0.072557,
        "Mk3": 0.024073,
        "Mk4": 0.007132,
        "Mk5": 0.003351
      },
      "Mk_od": {
        "Mk0": 0.597409,
        "Mk1": 0.293856,
        "Mk2": 0.050993,
        "Mk3": 0.027561,
        "Mk4": 0.014661,
        "Mk5": 0.015521
      },
      "variacao_r_total": 2217962.6099999994,
      "variacao_pct_total": 0.0199109671
    },
    {
      "competencia": "2024-03-01",
      "competencia_label": "mar/2024",
      "peona_mh": 111500879.4,
      "peona_od": 1591756.85,
      "peona_total": 113092636.25,
      "fator_mh": 0.620622,
      "fator_od": 0.608705,
      "media_mh": 179660028.92,
      "media_od": 2614991.04,
      "total_avisado_mh": 198577421.59,
      "total_avisado_od": 3116686.73,
      "variacao_r_mh": -566750.96,
      "variacao_r_od": 47407.31,
      "variacao_pct_mh": -0.0050572227,
      "variacao_pct_od": 0.0306972657,
      "Mk_mh": {
        "Mk0": 0.530224,
        "Mk1": 0.365436,
        "Mk2": 0.071747,
        "Mk3": 0.022143,
        "Mk4": 0.006985,
        "Mk5": 0.003464
      },
      "Mk_od": {
        "Mk0": 0.595395,
        "Mk1": 0.296632,
        "Mk2": 0.054721,
        "Mk3": 0.02486,
        "Mk4": 0.01391,
        "Mk5": 0.014482
      },
      "variacao_r_total": -519343.650000006,
      "variacao_pct_total": -0.004571205
    },
    {
      "competencia": "2024-04-01",
      "competencia_label": "abr/2024",
      "peona_mh": 112368521.58,
      "peona_od": 1656491.03,
      "peona_total": 114025012.61,
      "fator_mh": 0.602067,
      "fator_od": 0.602918,
      "media_mh": 186637936.43,
      "media_od": 2747458.52,
      "total_avisado_mh": 209947814.86,
      "total_avisado_od": 3250382.76,
      "variacao_r_mh": 867642.19,
      "variacao_r_od": 64734.18,
      "variacao_pct_mh": 0.0077814829,
      "variacao_pct_od": 0.0406683866,
      "Mk_mh": {
        "Mk0": 0.546262,
        "Mk1": 0.352778,
        "Mk2": 0.068437,
        "Mk3": 0.021381,
        "Mk4": 0.00744,
        "Mk5": 0.003702
      },
      "Mk_od": {
        "Mk0": 0.592982,
        "Mk1": 0.301345,
        "Mk2": 0.05511,
        "Mk3": 0.024521,
        "Mk4": 0.012418,
        "Mk5": 0.013623
      },
      "variacao_r_total": 932376.3599999994,
      "variacao_pct_total": 0.0082443596
    },
    {
      "competencia": "2024-05-01",
      "competencia_label": "mai/2024",
      "peona_mh": 115019868.7,
      "peona_od": 1746566.86,
      "peona_total": 116766435.56,
      "fator_mh": 0.595992,
      "fator_od": 0.606436,
      "media_mh": 192988946.03,
      "media_od": 2880052.94,
      "total_avisado_mh": 209605564.75,
      "total_avisado_od": 3249086.52,
      "variacao_r_mh": 2651347.12,
      "variacao_r_od": 90075.83,
      "variacao_pct_mh": 0.0235951055,
      "variacao_pct_od": 0.0543774947,
      "Mk_mh": {
        "Mk0": 0.552484,
        "Mk1": 0.347147,
        "Mk2": 0.067568,
        "Mk3": 0.02144,
        "Mk4": 0.007417,
        "Mk5": 0.003944
      },
      "Mk_od": {
        "Mk0": 0.581377,
        "Mk1": 0.313536,
        "Mk2": 0.057803,
        "Mk3": 0.023764,
        "Mk4": 0.011597,
        "Mk5": 0.011922
      },
      "variacao_r_total": 2741422.950000003,
      "variacao_pct_total": 0.0240422946
    },
    {
      "competencia": "2024-06-01",
      "competencia_label": "jun/2024",
      "peona_mh": 115507469.36,
      "peona_od": 1775614.79,
      "peona_total": 117283084.15,
      "fator_mh": 0.578821,
      "fator_od": 0.591097,
      "media_mh": 199556621.51,
      "media_od": 3003929.69,
      "total_avisado_mh": 206100863.37,
      "total_avisado_od": 3196760.66,
      "variacao_r_mh": 487600.66,
      "variacao_r_od": 29047.93,
      "variacao_pct_mh": 0.0042392733,
      "variacao_pct_od": 0.016631443,
      "Mk_mh": {
        "Mk0": 0.561401,
        "Mk1": 0.343003,
        "Mk2": 0.064478,
        "Mk3": 0.020865,
        "Mk4": 0.007001,
        "Mk5": 0.003252
      },
      "Mk_od": {
        "Mk0": 0.577655,
        "Mk1": 0.324068,
        "Mk2": 0.056717,
        "Mk3": 0.022134,
        "Mk4": 0.009938,
        "Mk5": 0.009488
      },
      "variacao_r_total": 516648.5900000036,
      "variacao_pct_total": 0.0044246327
    },
    {
      "competencia": "2024-07-01",
      "competencia_label": "jul/2024",
      "peona_mh": 120465603.78,
      "peona_od": 1907474.18,
      "peona_total": 122373077.96000001,
      "fator_mh": 0.592448,
      "fator_od": 0.597499,
      "media_mh": 203335452.54,
      "media_od": 3192428.11,
      "total_avisado_mh": 204148757.02,
      "total_avisado_od": 3424135.54,
      "variacao_r_mh": 4958134.43,
      "variacao_r_od": 131859.39,
      "variacao_pct_mh": 0.0429247948,
      "variacao_pct_od": 0.0742612606,
      "Mk_mh": {
        "Mk0": 0.548428,
        "Mk1": 0.356069,
        "Mk2": 0.064302,
        "Mk3": 0.020389,
        "Mk4": 0.007456,
        "Mk5": 0.003357
      },
      "Mk_od": {
        "Mk0": 0.559872,
        "Mk1": 0.346108,
        "Mk2": 0.056091,
        "Mk3": 0.020861,
        "Mk4": 0.008713,
        "Mk5": 0.008354
      },
      "variacao_r_total": 5089993.810000002,
      "variacao_pct_total": 0.0433992152
    },
    {
      "competencia": "2024-08-01",
      "competencia_label": "ago/2024",
      "peona_mh": 154302360.73,
      "peona_od": 2425112.51,
      "peona_total": 156727473.23999998,
      "fator_mh": 0.746185,
      "fator_od": 0.745191,
      "media_mh": 206788327.14,
      "media_od": 3254350.31,
      "total_avisado_mh": 212349541.24,
      "total_avisado_od": 3289049.65,
      "variacao_r_mh": 33836756.95,
      "variacao_r_od": 517638.33,
      "variacao_pct_mh": 0.2808831392,
      "variacao_pct_od": 0.2713737033,
      "Mk_mh": {
        "Mk0": 0.458101,
        "Mk1": 0.394273,
        "Mk2": 0.108886,
        "Mk3": 0.025221,
        "Mk4": 0.009119,
        "Mk5": 0.0044
      },
      "Mk_od": {
        "Mk0": 0.469333,
        "Mk1": 0.382974,
        "Mk2": 0.105475,
        "Mk3": 0.025129,
        "Mk4": 0.009569,
        "Mk5": 0.007521
      },
      "variacao_r_total": 34354395.27999997,
      "variacao_pct_total": 0.2807349121
    },
    {
      "competencia": "2024-09-01",
      "competencia_label": "set/2024",
      "peona_mh": 182620009.16,
      "peona_od": 2833135.35,
      "peona_total": 185453144.51,
      "fator_mh": 0.901447,
      "fator_od": 0.890244,
      "media_mh": 202585317.42,
      "media_od": 3182425.31,
      "total_avisado_mh": 173359363.28,
      "total_avisado_od": 2685136.73,
      "variacao_r_mh": 28317648.42,
      "variacao_r_od": 408022.84,
      "variacao_pct_mh": 0.1835205132,
      "variacao_pct_od": 0.168249036,
      "Mk_mh": {
        "Mk0": 0.374212,
        "Mk1": 0.424888,
        "Mk2": 0.149391,
        "Mk3": 0.033628,
        "Mk4": 0.01251,
        "Mk5": 0.00537
      },
      "Mk_od": {
        "Mk0": 0.387856,
        "Mk1": 0.413751,
        "Mk2": 0.145569,
        "Mk3": 0.033276,
        "Mk4": 0.012217,
        "Mk5": 0.007332
      },
      "variacao_r_total": 28725671.27000001,
      "variacao_pct_total": 0.183284211
    },
    {
      "competencia": "2024-10-01",
      "competencia_label": "out/2024",
      "peona_mh": 205897023.0,
      "peona_od": 3192953.22,
      "peona_total": 209089976.22,
      "fator_mh": 1.053292,
      "fator_od": 1.039167,
      "media_mh": 195479552.34,
      "media_od": 3072609.68,
      "total_avisado_mh": 167313224.36,
      "total_avisado_od": 2591489.0,
      "variacao_r_mh": 23277013.84,
      "variacao_r_od": 359817.86,
      "variacao_pct_mh": 0.1274614647,
      "variacao_pct_od": 0.1270034147,
      "Mk_mh": {
        "Mk0": 0.282311,
        "Mk1": 0.466695,
        "Mk2": 0.191884,
        "Mk3": 0.039648,
        "Mk4": 0.013426,
        "Mk5": 0.006036
      },
      "Mk_od": {
        "Mk0": 0.297754,
        "Mk1": 0.454515,
        "Mk2": 0.187292,
        "Mk3": 0.039193,
        "Mk4": 0.013738,
        "Mk5": 0.007507
      },
      "variacao_r_total": 23636831.71000001,
      "variacao_pct_total": 0.1274544671
    },
    {
      "competencia": "2024-11-01",
      "competencia_label": "nov/2024",
      "peona_mh": 232795158.23,
      "peona_od": 3607459.41,
      "peona_total": 236402617.64,
      "fator_mh": 1.216457,
      "fator_od": 1.199066,
      "media_mh": 191371540.6,
      "media_od": 3008558.33,
      "total_avisado_mh": 184957494.3,
      "total_avisado_od": 2864778.41,
      "variacao_r_mh": 26898135.22,
      "variacao_r_od": 414506.19,
      "variacao_pct_mh": 0.1306387768,
      "variacao_pct_od": 0.1298190605,
      "Mk_mh": {
        "Mk0": 0.190964,
        "Mk1": 0.500648,
        "Mk2": 0.235844,
        "Mk3": 0.052092,
        "Mk4": 0.014414,
        "Mk5": 0.006038
      },
      "Mk_od": {
        "Mk0": 0.208125,
        "Mk1": 0.487773,
        "Mk2": 0.230533,
        "Mk3": 0.051448,
        "Mk4": 0.01472,
        "Mk5": 0.0074
      },
      "variacao_r_total": 27312641.419999987,
      "variacao_pct_total": 0.1306262592
    },
    {
      "competencia": "2024-12-01",
      "competencia_label": "dez/2024",
      "peona_mh": 256141813.82,
      "peona_od": 3965325.67,
      "peona_total": 260107139.48999998,
      "fator_mh": 1.395491,
      "fator_od": 1.373675,
      "media_mh": 183549569.52,
      "media_od": 2886655.71,
      "total_avisado_mh": 159169036.92,
      "total_avisado_od": 2465344.93,
      "variacao_r_mh": 23346655.59,
      "variacao_r_od": 357866.26,
      "variacao_pct_mh": 0.1002884071,
      "variacao_pct_od": 0.0992017429,
      "Mk_mh": {
        "Mk0": 0.096953,
        "Mk1": 0.528069,
        "Mk2": 0.28942,
        "Mk3": 0.060952,
        "Mk4": 0.017304,
        "Mk5": 0.007302
      },
      "Mk_od": {
        "Mk0": 0.116311,
        "Mk1": 0.514365,
        "Mk2": 0.283135,
        "Mk3": 0.060161,
        "Mk4": 0.017583,
        "Mk5": 0.008445
      },
      "variacao_r_total": 23704521.849999994,
      "variacao_pct_total": 0.1002718248
    },
    {
      "competencia": "2025-01-01",
      "competencia_label": "jan/2025",
      "peona_mh": 291713738.99,
      "peona_od": 4166629.19,
      "peona_total": 295880368.18,
      "fator_mh": 1.620706,
      "fator_od": 1.601588,
      "media_mh": 179991747.8,
      "media_od": 2601560.98,
      "total_avisado_mh": 182801826.71,
      "total_avisado_od": 1713567.14,
      "variacao_r_mh": 35571925.17,
      "variacao_r_od": 201303.53,
      "variacao_pct_mh": 0.138875901,
      "variacao_pct_od": 0.0507659504,
      "Mk_mh": {
        "Mk0": 0.00241,
        "Mk1": 0.540714,
        "Mk2": 0.342379,
        "Mk3": 0.076989,
        "Mk4": 0.023271,
        "Mk5": 0.014237
      },
      "Mk_od": {
        "Mk0": 0.002527,
        "Mk1": 0.547907,
        "Mk2": 0.341162,
        "Mk3": 0.074366,
        "Mk4": 0.021933,
        "Mk5": 0.012106
      },
      "variacao_r_total": 35773228.69000003,
      "variacao_pct_total": 0.1375326673
    },
    {
      "competencia": "2025-02-01",
      "competencia_label": "fev/2025",
      "peona_mh": 289241228.89,
      "peona_od": 4095736.62,
      "peona_total": 293336965.51,
      "fator_mh": 1.635239,
      "fator_od": 1.617197,
      "media_mh": 176880063.88,
      "media_od": 2532615.23,
      "total_avisado_mh": 193679437.69,
      "total_avisado_od": 2875375.17,
      "variacao_r_mh": -2472510.1,
      "variacao_r_od": -70892.58,
      "variacao_pct_mh": -0.0084758096,
      "variacao_pct_od": -0.0170143714,
      "Mk_mh": {
        "Mk0": 0.003011,
        "Mk1": 0.534552,
        "Mk2": 0.340739,
        "Mk3": 0.08231,
        "Mk4": 0.024658,
        "Mk5": 0.014729
      },
      "Mk_od": {
        "Mk0": 0.00314,
        "Mk1": 0.541184,
        "Mk2": 0.339624,
        "Mk3": 0.080053,
        "Mk4": 0.02339,
        "Mk5": 0.012609
      },
      "variacao_r_total": -2543402.6700000167,
      "variacao_pct_total": -0.0085960508
    },
    {
      "competencia": "2025-03-01",
      "competencia_label": "mar/2025",
      "peona_mh": 285029588.84,
      "peona_od": 3844566.54,
      "peona_total": 288874155.38,
      "fator_mh": 1.619115,
      "fator_od": 1.604189,
      "media_mh": 176040338.65,
      "media_od": 2396579.92,
      "total_avisado_mh": 168321011.91,
      "total_avisado_od": 1868924.87,
      "variacao_r_mh": -4211640.05,
      "variacao_r_od": -251170.07,
      "variacao_pct_mh": -0.0145609949,
      "variacao_pct_od": -0.0613247623,
      "Mk_mh": {
        "Mk0": 0.003986,
        "Mk1": 0.538755,
        "Mk2": 0.342144,
        "Mk3": 0.079047,
        "Mk4": 0.021409,
        "Mk5": 0.014659
      },
      "Mk_od": {
        "Mk0": 0.003925,
        "Mk1": 0.544544,
        "Mk2": 0.340675,
        "Mk3": 0.077811,
        "Mk4": 0.020359,
        "Mk5": 0.012685
      },
      "variacao_r_total": -4462810.129999995,
      "variacao_pct_total": -0.0152139371
    },
    {
      "competencia": "2025-04-01",
      "competencia_label": "abr/2025",
      "peona_mh": 284012885.49,
      "peona_od": 3645291.36,
      "peona_total": 287658176.85,
      "fator_mh": 1.629972,
      "fator_od": 1.617009,
      "media_mh": 174244030.88,
      "media_od": 2254342.59,
      "total_avisado_mh": 156535377.74,
      "total_avisado_od": 1738065.01,
      "variacao_r_mh": -1016703.35,
      "variacao_r_od": -199275.18,
      "variacao_pct_mh": -0.0035670098,
      "variacao_pct_od": -0.0518329383,
      "Mk_mh": {
        "Mk0": 0.004085,
        "Mk1": 0.537048,
        "Mk2": 0.338676,
        "Mk3": 0.081566,
        "Mk4": 0.022252,
        "Mk5": 0.016374
      },
      "Mk_od": {
        "Mk0": 0.004078,
        "Mk1": 0.54156,
        "Mk2": 0.337722,
        "Mk3": 0.080875,
        "Mk4": 0.021443,
        "Mk5": 0.014321
      },
      "variacao_r_total": -1215978.5299999714,
      "variacao_pct_total": -0.0042093711
    },
    {
      "competencia": "2025-05-01",
      "competencia_label": "mai/2025",
      "peona_mh": 283006315.03,
      "peona_od": 3419572.62,
      "peona_total": 286425887.65,
      "fator_mh": 1.633526,
      "fator_od": 1.622109,
      "media_mh": 173248733.55,
      "media_od": 2108102.62,
      "total_avisado_mh": 178985710.35,
      "total_avisado_od": 1987338.61,
      "variacao_r_mh": -1006570.46,
      "variacao_r_od": -225718.74,
      "variacao_pct_mh": -0.0035441014,
      "variacao_pct_od": -0.0619206305,
      "Mk_mh": {
        "Mk0": 0.004027,
        "Mk1": 0.531927,
        "Mk2": 0.345022,
        "Mk3": 0.080569,
        "Mk4": 0.022427,
        "Mk5": 0.016028
      },
      "Mk_od": {
        "Mk0": 0.004185,
        "Mk1": 0.536274,
        "Mk2": 0.344051,
        "Mk3": 0.07883,
        "Mk4": 0.022057,
        "Mk5": 0.014603
      },
      "variacao_r_total": -1232289.2000000477,
      "variacao_pct_total": -0.0042838664
    },
    {
      "competencia": "2025-06-01",
      "competencia_label": "jun/2025",
      "peona_mh": 295372679.83,
      "peona_od": 3611113.36,
      "peona_total": 298983793.19,
      "fator_mh": 1.649871,
      "fator_od": 1.643198,
      "media_mh": 179027728.28,
      "media_od": 2197612.59,
      "total_avisado_mh": 193843005.28,
      "total_avisado_od": 3002404.73,
      "variacao_r_mh": 12366364.79,
      "variacao_r_od": 191540.74,
      "variacao_pct_mh": 0.043696427,
      "variacao_pct_od": 0.0560130632,
      "Mk_mh": {
        "Mk0": 0.003913,
        "Mk1": 0.533887,
        "Mk2": 0.337223,
        "Mk3": 0.080713,
        "Mk4": 0.021921,
        "Mk5": 0.022343
      },
      "Mk_od": {
        "Mk0": 0.004034,
        "Mk1": 0.53857,
        "Mk2": 0.334251,
        "Mk3": 0.079082,
        "Mk4": 0.021433,
        "Mk5": 0.02263
      },
      "variacao_r_total": 12557905.540000021,
      "variacao_pct_total": 0.0438434725
    },
    {
      "competencia": "2025-07-01",
      "competencia_label": "jul/2025",
      "peona_mh": 289478572.91,
      "peona_od": 3871500.84,
      "peona_total": 293350073.75,
      "fator_mh": 1.607623,
      "fator_od": 1.613125,
      "media_mh": 180066163.62,
      "media_od": 2400000.5,
      "total_avisado_mh": 189032438.77,
      "total_avisado_od": 2927894.6,
      "variacao_r_mh": -5894106.91,
      "variacao_r_od": 260387.48,
      "variacao_pct_mh": -0.0199548141,
      "variacao_pct_od": 0.0721072574,
      "Mk_mh": {
        "Mk0": 0.004113,
        "Mk1": 0.55054,
        "Mk2": 0.334393,
        "Mk3": 0.074391,
        "Mk4": 0.017694,
        "Mk5": 0.01887
      },
      "Mk_od": {
        "Mk0": 0.004013,
        "Mk1": 0.55026,
        "Mk2": 0.332932,
        "Mk3": 0.074427,
        "Mk4": 0.018118,
        "Mk5": 0.02025
      },
      "variacao_r_total": -5633719.439999998,
      "variacao_pct_total": -0.0188428924
    },
    {
      "competencia": "2025-08-01",
      "competencia_label": "ago/2025",
      "peona_mh": 285118609.99,
      "peona_od": 3626440.99,
      "peona_total": 288745050.98,
      "fator_mh": 1.601599,
      "fator_od": 1.580736,
      "media_mh": 178021191.96,
      "media_od": 2294146.65,
      "total_avisado_mh": 181409607.7,
      "total_avisado_od": 2240252.08,
      "variacao_r_mh": -4359962.92,
      "variacao_r_od": -245059.85,
      "variacao_pct_mh": -0.0150614357,
      "variacao_pct_od": -0.0632984107,
      "Mk_mh": {
        "Mk0": 0.003033,
        "Mk1": 0.554419,
        "Mk2": 0.335316,
        "Mk3": 0.072101,
        "Mk4": 0.015411,
        "Mk5": 0.01972
      },
      "Mk_od": {
        "Mk0": 0.005159,
        "Mk1": 0.572299,
        "Mk2": 0.314965,
        "Mk3": 0.072048,
        "Mk4": 0.01528,
        "Mk5": 0.020248
      },
      "variacao_r_total": -4605022.769999981,
      "variacao_pct_total": -0.0156980454
    },
    {
      "competencia": "2025-09-01",
      "competencia_label": "set/2025",
      "peona_mh": 289276665.43,
      "peona_od": 3678233.6,
      "peona_total": 292954899.03000003,
      "fator_mh": 1.603538,
      "fator_od": 1.551993,
      "media_mh": 180398998.88,
      "media_od": 2370006.54,
      "total_avisado_mh": 182587853.45,
      "total_avisado_od": 2324084.19,
      "variacao_r_mh": 4158055.44,
      "variacao_r_od": 51792.61,
      "variacao_pct_mh": 0.0145835989,
      "variacao_pct_od": 0.014281939,
      "Mk_mh": {
        "Mk0": 0.001897,
        "Mk1": 0.558382,
        "Mk2": 0.330284,
        "Mk3": 0.07385,
        "Mk4": 0.0149,
        "Mk5": 0.020688
      },
      "Mk_od": {
        "Mk0": 0.009436,
        "Mk1": 0.586978,
        "Mk2": 0.298071,
        "Mk3": 0.072182,
        "Mk4": 0.014338,
        "Mk5": 0.018995
      },
      "variacao_r_total": 4209848.050000012,
      "variacao_pct_total": 0.0145798102
    },
    {
      "competencia": "2025-10-01",
      "competencia_label": "out/2025",
      "peona_mh": 295765675.6,
      "peona_od": 3740452.89,
      "peona_total": 299506128.49,
      "fator_mh": 1.585671,
      "fator_od": 1.513784,
      "media_mh": 186523935.67,
      "media_od": 2470929.16,
      "total_avisado_mh": 193284998.45,
      "total_avisado_od": 2343600.73,
      "variacao_r_mh": 6489010.17,
      "variacao_r_od": 62219.3,
      "variacao_pct_mh": 0.022431848,
      "variacao_pct_od": 0.0169155366,
      "Mk_mh": {
        "Mk0": 0.001727,
        "Mk1": 0.566228,
        "Mk2": 0.327267,
        "Mk3": 0.072776,
        "Mk4": 0.013428,
        "Mk5": 0.018574
      },
      "Mk_od": {
        "Mk0": 0.012396,
        "Mk1": 0.608151,
        "Mk2": 0.279561,
        "Mk3": 0.069945,
        "Mk4": 0.013061,
        "Mk5": 0.016886
      },
      "variacao_r_total": 6551229.459999979,
      "variacao_pct_total": 0.0223625871
    },
    {
      "competencia": "2025-11-01",
      "competencia_label": "nov/2025",
      "peona_mh": 296931424.4,
      "peona_od": 3771600.5,
      "peona_total": 300703024.9,
      "fator_mh": 1.569124,
      "fator_od": 1.472366,
      "media_mh": 189233823.52,
      "media_od": 2561590.92,
      "total_avisado_mh": 195245037.48,
      "total_avisado_od": 2531309.21,
      "variacao_r_mh": 1165748.8,
      "variacao_r_od": 31147.6,
      "variacao_pct_mh": 0.0039414607,
      "variacao_pct_od": 0.0083272279,
      "Mk_mh": {
        "Mk0": 0.001753,
        "Mk1": 0.579869,
        "Mk2": 0.319137,
        "Mk3": 0.066053,
        "Mk4": 0.013114,
        "Mk5": 0.020073
      },
      "Mk_od": {
        "Mk0": 0.016261,
        "Mk1": 0.634309,
        "Mk2": 0.256732,
        "Mk3": 0.06356,
        "Mk4": 0.011777,
        "Mk5": 0.017361
      },
      "variacao_r_total": 1196896.4099999666,
      "variacao_pct_total": 0.0039962335
    },
    {
      "competencia": "2025-12-01",
      "competencia_label": "dez/2025",
      "peona_mh": 289324536.74,
      "peona_od": 3416589.38,
      "peona_total": 292741126.12,
      "fator_mh": 1.534329,
      "fator_od": 1.396074,
      "media_mh": 188567511.22,
      "media_od": 2447283.86,
      "total_avisado_mh": 189845131.49,
      "total_avisado_od": 2316562.37,
      "variacao_r_mh": -7606887.66,
      "variacao_r_od": -355011.12,
      "variacao_pct_mh": -0.0256183315,
      "variacao_pct_od": -0.0941274451,
      "Mk_mh": {
        "Mk0": 0.001927,
        "Mk1": 0.588726,
        "Mk2": 0.321505,
        "Mk3": 0.062731,
        "Mk4": 0.011156,
        "Mk5": 0.013955
      },
      "Mk_od": {
        "Mk0": 0.026549,
        "Mk1": 0.662738,
        "Mk2": 0.230278,
        "Mk3": 0.059537,
        "Mk4": 0.010318,
        "Mk5": 0.010579
      },
      "variacao_r_total": -7961898.779999971,
      "variacao_pct_total": -0.0264776145
    },
    {
      "competencia": "2026-01-01",
      "competencia_label": "jan/2026",
      "peona_mh": 282762145.22,
      "peona_od": 2993550.28,
      "peona_total": 285755695.5,
      "fator_mh": 1.509538,
      "fator_od": 1.324915,
      "media_mh": 187316949.1,
      "media_od": 2259427.44,
      "total_avisado_mh": 181529066.03,
      "total_avisado_od": 1800756.04,
      "variacao_r_mh": -6562391.52,
      "variacao_r_od": -423039.1,
      "variacao_pct_mh": -0.0226817663,
      "variacao_pct_od": -0.1238191226,
      "Mk_mh": {
        "Mk0": 0.001825,
        "Mk1": 0.600738,
        "Mk2": 0.314292,
        "Mk3": 0.062919,
        "Mk4": 0.00967,
        "Mk5": 0.010556
      },
      "Mk_od": {
        "Mk0": 0.032823,
        "Mk1": 0.699449,
        "Mk2": 0.199153,
        "Mk3": 0.05376,
        "Mk4": 0.008193,
        "Mk5": 0.006622
      },
      "variacao_r_total": -6985430.620000005,
      "variacao_pct_total": -0.023862143
    },
    {
      "competencia": "2026-02-01",
      "competencia_label": "fev/2026",
      "peona_mh": 279581989.07,
      "peona_od": 2884003.73,
      "peona_total": 282465992.8,
      "fator_mh": 1.493661,
      "fator_od": 1.292625,
      "media_mh": 187178949.62,
      "media_od": 2231122.05,
      "total_avisado_mh": 180581610.85,
      "total_avisado_od": 2070419.77,
      "variacao_r_mh": -3180156.16,
      "variacao_r_od": -109546.55,
      "variacao_pct_mh": -0.0112467535,
      "variacao_pct_od": -0.0365941908,
      "Mk_mh": {
        "Mk0": 0.002589,
        "Mk1": 0.60846,
        "Mk2": 0.309365,
        "Mk3": 0.061276,
        "Mk4": 0.00891,
        "Mk5": 0.009401
      },
      "Mk_od": {
        "Mk0": 0.038908,
        "Mk1": 0.712128,
        "Mk2": 0.185494,
        "Mk3": 0.050074,
        "Mk4": 0.007693,
        "Mk5": 0.005703
      },
      "variacao_r_total": -3289702.699999988,
      "variacao_pct_total": -0.0115122909
    },
    {
      "competencia": "2026-03-01",
      "competencia_label": "mar/2026",
      "peona_mh": 277569796.05,
      "peona_od": 2743722.07,
      "peona_total": 280313518.12,
      "fator_mh": 1.485359,
      "fator_od": 1.266515,
      "media_mh": 186870453.29,
      "media_od": 2166354.93,
      "total_avisado_mh": 180736875.45,
      "total_avisado_od": 1935481.44,
      "variacao_r_mh": -2012193.01,
      "variacao_r_od": -140281.66,
      "variacao_pct_mh": -0.0071971482,
      "variacao_pct_od": -0.0486412882,
      "Mk_mh": {
        "Mk0": 0.003119,
        "Mk1": 0.611279,
        "Mk2": 0.307656,
        "Mk3": 0.06125,
        "Mk4": 0.008462,
        "Mk5": 0.008234
      },
      "Mk_od": {
        "Mk0": 0.042059,
        "Mk1": 0.726895,
        "Mk2": 0.172238,
        "Mk3": 0.045456,
        "Mk4": 0.00798,
        "Mk5": 0.005371
      },
      "variacao_r_total": -2152474.680000007,
      "variacao_pct_total": -0.0076202967
    },
    {
      "competencia": "2026-04-01",
      "competencia_label": "abr/2026",
      "peona_mh": 278137889.29,
      "peona_od": 2732815.87,
      "peona_total": 280870705.16,
      "fator_mh": 1.474776,
      "fator_od": 1.248381,
      "media_mh": 188596749.03,
      "media_od": 2189087.58,
      "total_avisado_mh": 203642772.9,
      "total_avisado_od": 2479996.68,
      "variacao_r_mh": 568093.24,
      "variacao_r_od": -10906.2,
      "variacao_pct_mh": 0.0020466681,
      "variacao_pct_od": -0.0039749665,
      "Mk_mh": {
        "Mk0": 0.004173,
        "Mk1": 0.620071,
        "Mk2": 0.298788,
        "Mk3": 0.05958,
        "Mk4": 0.00855,
        "Mk5": 0.008838
      },
      "Mk_od": {
        "Mk0": 0.042743,
        "Mk1": 0.738988,
        "Mk2": 0.163165,
        "Mk3": 0.042377,
        "Mk4": 0.007705,
        "Mk5": 0.005023
      },
      "variacao_r_total": 557187.0400000215,
      "variacao_pct_total": 0.001987728
    },
    {
      "competencia": "2026-05-01",
      "competencia_label": "mai/2026",
      "peona_mh": 276699947.22,
      "peona_od": 2684953.87,
      "peona_total": 279384901.09000003,
      "fator_mh": 1.465065,
      "fator_od": 1.240255,
      "media_mh": 188865278.45,
      "media_od": 2164839.69,
      "total_avisado_mh": 196856213.99,
      "total_avisado_od": 2385821.84,
      "variacao_r_mh": -1437942.07,
      "variacao_r_od": -47862.0,
      "variacao_pct_mh": -0.0051698892,
      "variacao_pct_od": -0.0175138022,
      "Mk_mh": {
        "Mk0": 0.005025,
        "Mk1": 0.623598,
        "Mk2": 0.297804,
        "Mk3": 0.057187,
        "Mk4": 0.007632,
        "Mk5": 0.008754
      },
      "Mk_od": {
        "Mk0": 0.043311,
        "Mk1": 0.74396,
        "Mk2": 0.159667,
        "Mk3": 0.039661,
        "Mk4": 0.009027,
        "Mk5": 0.004374
      },
      "variacao_r_total": -1485804.0699999928,
      "variacao_pct_total": -0.005289993
    },
    {
      "competencia": "2026-06-01",
      "competencia_label": "jun/2026",
      "peona_mh": 278078166.0,
      "peona_od": 2654999.52,
      "peona_total": 280733165.52,
      "fator_mh": 1.456772,
      "fator_od": 1.226028,
      "media_mh": 190886474.38,
      "media_od": 2165529.93,
      "total_avisado_mh": 201972307.05,
      "total_avisado_od": 2320703.82,
      "variacao_r_mh": 1378218.79,
      "variacao_r_od": -29954.35,
      "variacao_pct_mh": 0.0049809145,
      "variacao_pct_od": -0.0111563742,
      "Mk_mh": {
        "Mk0": 0.005909,
        "Mk1": 0.62897,
        "Mk2": 0.291727,
        "Mk3": 0.057594,
        "Mk4": 0.007433,
        "Mk5": 0.008367
      },
      "Mk_od": {
        "Mk0": 0.040049,
        "Mk1": 0.756733,
        "Mk2": 0.154154,
        "Mk3": 0.038279,
        "Mk4": 0.007775,
        "Mk5": 0.00301
      },
      "variacao_r_total": 1348264.4299999475,
      "variacao_pct_total": 0.0048258314
    },
    {
      "competencia": "2026-07-01",
      "competencia_label": "jul/2026",
      "peona_mh": 284039635.57,
      "peona_od": 2763063.32,
      "peona_total": 286802698.89,
      "fator_mh": 1.453699,
      "fator_od": 1.225662,
      "media_mh": 195391018.34,
      "media_od": 2254343.97,
      "total_avisado_mh": 208556329.8,
      "total_avisado_od": 2333640.25,
      "variacao_r_mh": 5961469.56,
      "variacao_r_od": 108063.8,
      "variacao_pct_mh": 0.0214381073,
      "variacao_pct_od": 0.0407020023,
      "Mk_mh": {
        "Mk0": 0.008003,
        "Mk1": 0.63065,
        "Mk2": 0.290467,
        "Mk3": 0.052308,
        "Mk4": 0.007672,
        "Mk5": 0.0109
      },
      "Mk_od": {
        "Mk0": 0.041439,
        "Mk1": 0.756638,
        "Mk2": 0.151852,
        "Mk3": 0.038351,
        "Mk4": 0.008335,
        "Mk5": 0.003386
      },
      "variacao_r_total": 6069533.370000005,
      "variacao_pct_total": 0.0216202933
    }
  ],
  "consistencia": [
    {
      "competencia": "2025-02-01",
      "competencia_teste": "2025-02-01",
      "competencia_peona": "2025-04-01",
      "competencia_label": "02/2025",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 222501594.474,
      "peona_real": 274394705.16,
      "diferenca": -51893110.6856,
      "variacao_mensal": -0.189118484103,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "avaliacao_parcial",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "0d0edd010d1c0cd12e911b7cd04a036c772bb58298006e26a739520b7f634af0",
      "janela_bloco": "12m",
      "peona": 222501594.474,
      "runoff_puro": 274394705.16,
      "diferenca_pct": -0.189118484103,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "Acompanhamento das Provisões (regime 12m) · detalhe MH via PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "Valores MH/OD do bloco 12 meses já registrados na PEONA_INPUT; acompanhamento oficial consolidado em Acompanhamento das Provisões (sem recálculo pela metodologia 6m).",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-02-01",
      "competencia_teste": "2025-02-01",
      "competencia_peona": "2025-04-01",
      "competencia_label": "02/2025",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 3273853.11016,
      "peona_real": 3097828.69024,
      "diferenca": 176024.419918,
      "variacao_mensal": 0.056821870258,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "avaliacao_parcial",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "8dbcb6e941d73a1c45a47a1afb3e3f4bbc66061d3b41ae5533e5b68caed39d62",
      "janela_bloco": "12m",
      "peona": 3273853.11016,
      "runoff_puro": 3097828.69024,
      "diferenca_pct": 0.056821870258,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "Acompanhamento das Provisões (regime 12m) · detalhe OD via PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "Valores MH/OD do bloco 12 meses já registrados na PEONA_INPUT; acompanhamento oficial consolidado em Acompanhamento das Provisões (sem recálculo pela metodologia 6m).",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-03-01",
      "competencia_teste": "2025-03-01",
      "competencia_peona": "2025-05-01",
      "competencia_label": "03/2025",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 234574883.501,
      "peona_real": 281021230.652,
      "diferenca": -46446347.1507,
      "variacao_mensal": -0.165277004314,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "avaliacao_parcial",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "9add787141d2c22601b5c7902a549673deda226106e51615e8eeaef0e3cec63d",
      "janela_bloco": "12m",
      "peona": 234574883.501,
      "runoff_puro": 281021230.652,
      "diferenca_pct": -0.165277004314,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "Acompanhamento das Provisões (regime 12m) · detalhe MH via PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "Valores MH/OD do bloco 12 meses já registrados na PEONA_INPUT; acompanhamento oficial consolidado em Acompanhamento das Provisões (sem recálculo pela metodologia 6m).",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-03-01",
      "competencia_teste": "2025-03-01",
      "competencia_peona": "2025-05-01",
      "competencia_label": "03/2025",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 3351006.67132,
      "peona_real": 3231428.07798,
      "diferenca": 119578.593338,
      "variacao_mensal": 0.037004875384,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "avaliacao_parcial",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "173b7d40ca110e4dcdf41d80f73c9430b2ea49211a3cbde05aba077305d55c71",
      "janela_bloco": "12m",
      "peona": 3351006.67132,
      "runoff_puro": 3231428.07798,
      "diferenca_pct": 0.037004875384,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "Acompanhamento das Provisões (regime 12m) · detalhe OD via PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "Valores MH/OD do bloco 12 meses já registrados na PEONA_INPUT; acompanhamento oficial consolidado em Acompanhamento das Provisões (sem recálculo pela metodologia 6m).",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-04-01",
      "competencia_teste": "2025-04-01",
      "competencia_peona": "2025-06-01",
      "competencia_label": "04/2025",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 245914069.162,
      "peona_real": 299470349.128,
      "diferenca": -53556279.9662,
      "variacao_mensal": -0.178836669881,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "avaliacao_parcial",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "4dad6c3907e576131b58d2da6a6b59848667fc22535ff5eb55fac31974808f24",
      "janela_bloco": "12m",
      "peona": 245914069.162,
      "runoff_puro": 299470349.128,
      "diferenca_pct": -0.178836669881,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "Acompanhamento das Provisões (regime 12m) · detalhe MH via PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "Valores MH/OD do bloco 12 meses já registrados na PEONA_INPUT; acompanhamento oficial consolidado em Acompanhamento das Provisões (sem recálculo pela metodologia 6m).",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-04-01",
      "competencia_teste": "2025-04-01",
      "competencia_peona": "2025-06-01",
      "competencia_label": "04/2025",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 3432843.08628,
      "peona_real": 3752076.6516,
      "diferenca": -319233.565325,
      "variacao_mensal": -0.0850818346657,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "avaliacao_parcial",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "bc991a12575410d38bd372e6f1bdeb12e163925ba3b50c0ce1bb90201610805d",
      "janela_bloco": "12m",
      "peona": 3432843.08628,
      "runoff_puro": 3752076.6516,
      "diferenca_pct": -0.0850818346657,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "Acompanhamento das Provisões (regime 12m) · detalhe OD via PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "Valores MH/OD do bloco 12 meses já registrados na PEONA_INPUT; acompanhamento oficial consolidado em Acompanhamento das Provisões (sem recálculo pela metodologia 6m).",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-05-01",
      "competencia_teste": "2025-05-01",
      "competencia_peona": "2025-07-01",
      "competencia_label": "05/2025",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 258799482.005,
      "peona_real": 305547448.486,
      "diferenca": -46747966.4807,
      "variacao_mensal": -0.152997404208,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "avaliacao_parcial",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "d34866fcb1c712a4a9a13a9792f4691957041354c865327ec2e37c42c9cd437e",
      "janela_bloco": "12m",
      "peona": 258799482.005,
      "runoff_puro": 305547448.486,
      "diferenca_pct": -0.152997404208,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "Acompanhamento das Provisões (regime 12m) · detalhe MH via PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "Valores MH/OD do bloco 12 meses já registrados na PEONA_INPUT; acompanhamento oficial consolidado em Acompanhamento das Provisões (sem recálculo pela metodologia 6m).",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-05-01",
      "competencia_teste": "2025-05-01",
      "competencia_peona": "2025-07-01",
      "competencia_label": "05/2025",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 3526508.25279,
      "peona_real": 4563197.56449,
      "diferenca": -1036689.3117,
      "variacao_mensal": -0.227184840684,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "avaliacao_parcial",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "e17fdc7f3b0ffcc520e04e032f1ebb8f75c6081ff37d2c9d7cbc18c7617a4990",
      "janela_bloco": "12m",
      "peona": 3526508.25279,
      "runoff_puro": 4563197.56449,
      "diferenca_pct": -0.227184840684,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "Acompanhamento das Provisões (regime 12m) · detalhe OD via PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "Valores MH/OD do bloco 12 meses já registrados na PEONA_INPUT; acompanhamento oficial consolidado em Acompanhamento das Provisões (sem recálculo pela metodologia 6m).",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-06-01",
      "competencia_teste": "2025-06-01",
      "competencia_peona": "2025-08-01",
      "competencia_label": "06/2025",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 278088208.524,
      "peona_real": 287629627.916,
      "diferenca": -9541419.39145,
      "variacao_mensal": -0.0331725888623,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "avaliacao_parcial",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "2bec814ea7e2ef77ade4b1ea495a7456c3c353b355fcc83fa426b01ad055ffda",
      "janela_bloco": "12m",
      "peona": 278088208.524,
      "runoff_puro": 287629627.916,
      "diferenca_pct": -0.0331725888623,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "Acompanhamento das Provisões (regime 12m) · detalhe MH via PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "Valores MH/OD do bloco 12 meses já registrados na PEONA_INPUT; acompanhamento oficial consolidado em Acompanhamento das Provisões (sem recálculo pela metodologia 6m).",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-06-01",
      "competencia_teste": "2025-06-01",
      "competencia_peona": "2025-08-01",
      "competencia_label": "06/2025",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 3823049.99094,
      "peona_real": 3756723.61446,
      "diferenca": 66326.3764819,
      "variacao_mensal": 0.0176553782734,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "avaliacao_parcial",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "bfb63bff985603d058fa352d98a4307754ea303b45086c5a9b41dedb6ce9afe2",
      "janela_bloco": "12m",
      "peona": 3823049.99094,
      "runoff_puro": 3756723.61446,
      "diferenca_pct": 0.0176553782734,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "Acompanhamento das Provisões (regime 12m) · detalhe OD via PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "Valores MH/OD do bloco 12 meses já registrados na PEONA_INPUT; acompanhamento oficial consolidado em Acompanhamento das Provisões (sem recálculo pela metodologia 6m).",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-07-01",
      "competencia_teste": "2025-07-01",
      "competencia_peona": "2025-09-01",
      "competencia_label": "07/2025",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 293432181.248,
      "peona_real": 283131320.75,
      "diferenca": 10300860.4982,
      "variacao_mensal": 0.036381918012,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "avaliacao_parcial",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "b92bd52ac0b8edbcaf2c2b10494ebb8f5e8054420995b7069b68279948c61d97",
      "janela_bloco": "12m",
      "peona": 293432181.248,
      "runoff_puro": 283131320.75,
      "diferenca_pct": 0.036381918012,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "Acompanhamento das Provisões (regime 12m) · detalhe MH via PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "Valores MH/OD do bloco 12 meses já registrados na PEONA_INPUT; acompanhamento oficial consolidado em Acompanhamento das Provisões (sem recálculo pela metodologia 6m).",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-07-01",
      "competencia_teste": "2025-07-01",
      "competencia_peona": "2025-09-01",
      "competencia_label": "07/2025",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 4060197.27766,
      "peona_real": 3168430.99,
      "diferenca": 891766.287662,
      "variacao_mensal": 0.281453593427,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "avaliacao_parcial",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "65a8c75fdb69c0d8c53f8757a6d6c7f84aa3d6b9488baf49cf0529fd8c1ef05d",
      "janela_bloco": "12m",
      "peona": 4060197.27766,
      "runoff_puro": 3168430.99,
      "diferenca_pct": 0.281453593427,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "Acompanhamento das Provisões (regime 12m) · detalhe OD via PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "Valores MH/OD do bloco 12 meses já registrados na PEONA_INPUT; acompanhamento oficial consolidado em Acompanhamento das Provisões (sem recálculo pela metodologia 6m).",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-08-01",
      "competencia_teste": "2025-08-01",
      "competencia_peona": "2025-10-01",
      "competencia_label": "08/2025",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 290382018.75,
      "peona_real": 282036521.38,
      "diferenca": 8345497.37009,
      "variacao_mensal": 0.0295901301337,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "avaliacao_parcial",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "d8b4c4966e17a5112c7309281068f09b719983cf2c37aa0ce9782cbabe98760e",
      "janela_bloco": "12m",
      "peona": 290382018.75,
      "runoff_puro": 282036521.38,
      "diferenca_pct": 0.0295901301337,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "Acompanhamento das Provisões (regime 12m) · detalhe MH via PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "Valores MH/OD do bloco 12 meses já registrados na PEONA_INPUT; acompanhamento oficial consolidado em Acompanhamento das Provisões (sem recálculo pela metodologia 6m).",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-08-01",
      "competencia_teste": "2025-08-01",
      "competencia_peona": "2025-10-01",
      "competencia_label": "08/2025",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 3904378.61658,
      "peona_real": 3111042.79,
      "diferenca": 793335.826577,
      "variacao_mensal": 0.255006401431,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "avaliacao_parcial",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "ef8657484e8511bb62db8992e0076388d1ea37bf14358c5f244421a02d622504",
      "janela_bloco": "12m",
      "peona": 3904378.61658,
      "runoff_puro": 3111042.79,
      "diferenca_pct": 0.255006401431,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "Acompanhamento das Provisões (regime 12m) · detalhe OD via PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "Valores MH/OD do bloco 12 meses já registrados na PEONA_INPUT; acompanhamento oficial consolidado em Acompanhamento das Provisões (sem recálculo pela metodologia 6m).",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-09-01",
      "competencia_teste": "2025-09-01",
      "competencia_peona": "2025-11-01",
      "competencia_label": "09/2025",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 290968491.659,
      "peona_real": 290919330.52,
      "diferenca": 49161.138563,
      "variacao_mensal": 0.000168985465748,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "avaliacao_parcial",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "3a70ddfbe11e57670b2d13c8b2ccfb416f88e409dfcb2c638871d385370bf414",
      "janela_bloco": "12m",
      "peona": 290968491.659,
      "runoff_puro": 290919330.52,
      "diferenca_pct": 0.000168985465748,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "Acompanhamento das Provisões (regime 12m) · detalhe MH via PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "Valores MH/OD do bloco 12 meses já registrados na PEONA_INPUT; acompanhamento oficial consolidado em Acompanhamento das Provisões (sem recálculo pela metodologia 6m).",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-09-01",
      "competencia_teste": "2025-09-01",
      "competencia_peona": "2025-11-01",
      "competencia_label": "09/2025",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 3804837.4906,
      "peona_real": 3170666.93,
      "diferenca": 634170.560603,
      "variacao_mensal": 0.200011724537,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "avaliacao_parcial",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "35c9690bdaba9d2c8da91a50a11449b60a2f2a33b659b28bcfa22351c3570b85",
      "janela_bloco": "12m",
      "peona": 3804837.4906,
      "runoff_puro": 3170666.93,
      "diferenca_pct": 0.200011724537,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "Acompanhamento das Provisões (regime 12m) · detalhe OD via PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "Valores MH/OD do bloco 12 meses já registrados na PEONA_INPUT; acompanhamento oficial consolidado em Acompanhamento das Provisões (sem recálculo pela metodologia 6m).",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-10-01",
      "competencia_teste": "2025-10-01",
      "competencia_peona": "2026-01-01",
      "competencia_label": "10/2025",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 293784568.89,
      "peona_real": 296687869.2,
      "diferenca": -2903300.31017,
      "variacao_mensal": -0.00978570616317,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "nao_avaliavel",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "358e8a8cb79c76a2ebabf938603eae8f9da9a8b1c5230451228fb2198353e159",
      "janela_bloco": "12m",
      "peona": 293784568.89,
      "runoff_puro": 296687869.2,
      "diferenca_pct": -0.00978570616317,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Não avaliável",
      "status_mensagem": "Falta valor necessário para aplicar os critérios ANS (média).",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-10-01",
      "competencia_teste": "2025-10-01",
      "competencia_peona": "2025-12-01",
      "competencia_label": "10/2025",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 295765675.602,
      "peona_real": 292374851.81,
      "diferenca": 3390823.79242,
      "variacao_mensal": 0.0115975220558,
      "variacao_media": -0.0180719062338,
      "status_mensal_ans": "dentro",
      "status_media_ans": "dentro",
      "status": "consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "83b2fc15ee52adc7a56dc81055849e7dc192e1ea328851342951c8da4f154a7c",
      "janela_bloco": "6m",
      "peona": 295765675.602,
      "runoff_puro": 292374851.81,
      "diferenca_pct": 0.0115975220558,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Consistente",
      "status_mensagem": "Os dois critérios ANS estão dentro dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-10-01",
      "competencia_teste": "2025-10-01",
      "competencia_peona": "2026-01-01",
      "competencia_label": "10/2025",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 3735831.76933,
      "peona_real": 3151478.34,
      "diferenca": 584353.429334,
      "variacao_mensal": 0.18542200399,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "nao_avaliavel",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "f0697761ccd63029e4f94acb6e886278883cbad6731b1294fb39f9cb82459ff3",
      "janela_bloco": "12m",
      "peona": 3735831.76933,
      "runoff_puro": 3151478.34,
      "diferenca_pct": 0.18542200399,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Não avaliável",
      "status_mensagem": "Falta valor necessário para aplicar os critérios ANS (média).",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-10-01",
      "competencia_teste": "2025-10-01",
      "competencia_peona": "2025-12-01",
      "competencia_label": "10/2025",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 3740452.89424,
      "peona_real": 3140757.81,
      "diferenca": 599695.08424,
      "variacao_mensal": 0.190939614105,
      "variacao_media": 0.119646978515,
      "status_mensal_ans": "dentro",
      "status_media_ans": "dentro",
      "status": "consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "6167189be02fee878cce9ffb16fdd176280b43007a17d99eb56440b4a28099ae",
      "janela_bloco": "6m",
      "peona": 3740452.89424,
      "runoff_puro": 3140757.81,
      "diferenca_pct": 0.190939614105,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Consistente",
      "status_mensagem": "Os dois critérios ANS estão dentro dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-11-01",
      "competencia_teste": "2025-11-01",
      "competencia_peona": "2026-02-01",
      "competencia_label": "11/2025",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 293988996.403,
      "peona_real": 279911911.28,
      "diferenca": 14077085.1234,
      "variacao_mensal": 0.0502911257294,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "nao_avaliavel",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "9269aaed202628e8663457ecafb5c090dcbb954529f24d5a964842df74c86ae6",
      "janela_bloco": "12m",
      "peona": 293988996.403,
      "runoff_puro": 279911911.28,
      "diferenca_pct": 0.0502911257294,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Não avaliável",
      "status_mensagem": "Falta valor necessário para aplicar os critérios ANS (média).",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-11-01",
      "competencia_teste": "2025-11-01",
      "competencia_peona": "2026-01-01",
      "competencia_label": "11/2025",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 296931424.4,
      "peona_real": 276770756.02,
      "diferenca": 20160668.3805,
      "variacao_mensal": 0.0728424804354,
      "variacao_media": 0.0195680745401,
      "status_mensal_ans": "dentro",
      "status_media_ans": "dentro",
      "status": "consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "05cda76060adacba4a3ced820f117a2fd8d98093becc705b4a3508a25f11ed4d",
      "janela_bloco": "6m",
      "peona": 296931424.4,
      "runoff_puro": 276770756.02,
      "diferenca_pct": 0.0728424804354,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Consistente",
      "status_mensagem": "Os dois critérios ANS estão dentro dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-11-01",
      "competencia_teste": "2025-11-01",
      "competencia_peona": "2026-02-01",
      "competencia_label": "11/2025",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 3638638.67498,
      "peona_real": 2719522.28,
      "diferenca": 919116.394979,
      "variacao_mensal": 0.337969797761,
      "variacao_media": null,
      "status_mensal_ans": "fora",
      "status_media_ans": "nao_disponivel",
      "status": "nao_avaliavel",
      "status_mensal_exibicao": "Não consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "f62b8fad576aae30372f6149d360a4a0d5332c618f0d962bbbf9f3499a5c6c53",
      "janela_bloco": "12m",
      "peona": 3638638.67498,
      "runoff_puro": 2719522.28,
      "diferenca_pct": 0.337969797761,
      "media_completa": false,
      "status_mensal_rotulo": "Fora do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Não avaliável",
      "status_mensagem": "Falta valor necessário para aplicar os critérios ANS (média).",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-11-01",
      "competencia_teste": "2025-11-01",
      "competencia_peona": "2026-01-01",
      "competencia_label": "11/2025",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 3771600.49785,
      "peona_real": 2709349.4,
      "diferenca": 1062251.09785,
      "variacao_mensal": 0.392068700274,
      "variacao_media": 0.222855902008,
      "status_mensal_ans": "fora",
      "status_media_ans": "fora",
      "status": "nao_consistente",
      "status_mensal_exibicao": "Não consistente",
      "status_media_exibicao": "Não consistente",
      "resultado_consolidado": "Não consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "0a1a1ba62e2fc8170909c64b85f76b88ad5e3e488f2ba9b3506445ce427a0801",
      "janela_bloco": "6m",
      "peona": 3771600.49785,
      "runoff_puro": 2709349.4,
      "diferenca_pct": 0.392068700274,
      "media_completa": true,
      "status_mensal_rotulo": "Fora do parâmetro ANS",
      "status_media_rotulo": "Fora do parâmetro ANS",
      "status_rotulo": "Não consistente",
      "status_mensagem": "Um ou mais critérios ANS estão fora dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-12-01",
      "competencia_teste": "2025-12-01",
      "competencia_peona": "2026-03-01",
      "competencia_label": "12/2025",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 296450093.008,
      "peona_real": 267401987.99,
      "diferenca": 29048105.0179,
      "variacao_mensal": 0.108630849143,
      "variacao_media": null,
      "status_mensal_ans": "dentro",
      "status_media_ans": "nao_disponivel",
      "status": "nao_avaliavel",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "84ee18f6cdb33677b4b5663fd10f1f8dfa2b4e72fb5040696472262ba266dbc4",
      "janela_bloco": "12m",
      "peona": 296450093.008,
      "runoff_puro": 267401987.99,
      "diferenca_pct": 0.108630849143,
      "media_completa": false,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Não avaliável",
      "status_mensagem": "Falta valor necessário para aplicar os critérios ANS (média).",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-12-01",
      "competencia_teste": "2025-12-01",
      "competencia_peona": "2026-02-01",
      "competencia_label": "12/2025",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 289324536.737,
      "peona_real": 265077251.13,
      "diferenca": 24247285.6075,
      "variacao_mensal": 0.0914725254774,
      "variacao_media": 0.0403422602634,
      "status_mensal_ans": "dentro",
      "status_media_ans": "dentro",
      "status": "consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "1b86c92fece0b5b4b88a911b8c39c52b8df0d98df7a8fed50ebdc1cf550c984c",
      "janela_bloco": "6m",
      "peona": 289324536.737,
      "runoff_puro": 265077251.13,
      "diferenca_pct": 0.0914725254774,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Consistente",
      "status_mensagem": "Os dois critérios ANS estão dentro dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-12-01",
      "competencia_teste": "2025-12-01",
      "competencia_peona": "2026-03-01",
      "competencia_label": "12/2025",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 3556953.91795,
      "peona_real": 2163000.86,
      "diferenca": 1393953.05795,
      "variacao_mensal": 0.644453307313,
      "variacao_media": null,
      "status_mensal_ans": "fora",
      "status_media_ans": "nao_disponivel",
      "status": "nao_avaliavel",
      "status_mensal_exibicao": "Não consistente",
      "status_media_exibicao": "—",
      "resultado_consolidado": "—",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "50c3a7365e35bcedbcecd159cc4102c61e8c511dbcdbd58fef9897907e236e83",
      "janela_bloco": "12m",
      "peona": 3556953.91795,
      "runoff_puro": 2163000.86,
      "diferenca_pct": 0.644453307313,
      "media_completa": false,
      "status_mensal_rotulo": "Fora do parâmetro ANS",
      "status_media_rotulo": "Não disponível",
      "status_rotulo": "Não avaliável",
      "status_mensagem": "Falta valor necessário para aplicar os critérios ANS (média).",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2025-12-01",
      "competencia_teste": "2025-12-01",
      "competencia_peona": "2026-02-01",
      "competencia_label": "12/2025",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 3416589.37918,
      "peona_real": 2161828.63,
      "diferenca": 1254760.74918,
      "variacao_mensal": 0.580416380729,
      "variacao_media": 0.316649402417,
      "status_mensal_ans": "fora",
      "status_media_ans": "fora",
      "status": "nao_consistente",
      "status_mensal_exibicao": "Não consistente",
      "status_media_exibicao": "Não consistente",
      "resultado_consolidado": "Não consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "0d715eedb689236dcdc8c95f05abd604d72ad04ea542399e898e190e4e21a0b8",
      "janela_bloco": "6m",
      "peona": 3416589.37918,
      "runoff_puro": 2161828.63,
      "diferenca_pct": 0.580416380729,
      "media_completa": true,
      "status_mensal_rotulo": "Fora do parâmetro ANS",
      "status_media_rotulo": "Fora do parâmetro ANS",
      "status_rotulo": "Não consistente",
      "status_mensagem": "Um ou mais critérios ANS estão fora dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-01-01",
      "competencia_teste": "2026-01-01",
      "competencia_peona": "2026-04-01",
      "competencia_label": "01/2026",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 289990833.884,
      "peona_real": 273204828.55,
      "diferenca": 16786005.3339,
      "variacao_mensal": 0.0614411005216,
      "variacao_media": -0.0368903123772,
      "status_mensal_ans": "dentro",
      "status_media_ans": "dentro",
      "status": "consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Consistente",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "6137032a1a2894c72804972c084a028d07cc7600c5630318c88d75e4291a87b0",
      "janela_bloco": "12m",
      "peona": 289990833.884,
      "runoff_puro": 273204828.55,
      "diferenca_pct": 0.0614411005216,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Consistente",
      "status_mensagem": "Os dois critérios ANS estão dentro dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-01-01",
      "competencia_teste": "2026-01-01",
      "competencia_peona": "2026-03-01",
      "competencia_label": "01/2026",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 282762145.222,
      "peona_real": 270960478.48,
      "diferenca": 11801666.7417,
      "variacao_mensal": 0.0435549376347,
      "variacao_media": 0.0415377635338,
      "status_mensal_ans": "dentro",
      "status_media_ans": "dentro",
      "status": "consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "c861af6903e6caf3ba77faff273f19700a9d6b29e95b56fd0497f79ea99b798e",
      "janela_bloco": "6m",
      "peona": 282762145.222,
      "runoff_puro": 270960478.48,
      "diferenca_pct": 0.0435549376347,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Consistente",
      "status_mensagem": "Os dois critérios ANS estão dentro dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-01-01",
      "competencia_teste": "2026-01-01",
      "competencia_peona": "2026-04-01",
      "competencia_label": "01/2026",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 3473335.46192,
      "peona_real": 2532856.38,
      "diferenca": 940479.081916,
      "variacao_mensal": 0.371311650097,
      "variacao_media": 0.172903660594,
      "status_mensal_ans": "fora",
      "status_media_ans": "fora",
      "status": "nao_consistente",
      "status_mensal_exibicao": "Não consistente",
      "status_media_exibicao": "Não consistente",
      "resultado_consolidado": "Não consistente",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "777fcc059ecc1b74d5bce9707827365908d66a9c9863761f946886690e3eb331",
      "janela_bloco": "12m",
      "peona": 3473335.46192,
      "runoff_puro": 2532856.38,
      "diferenca_pct": 0.371311650097,
      "media_completa": true,
      "status_mensal_rotulo": "Fora do parâmetro ANS",
      "status_media_rotulo": "Fora do parâmetro ANS",
      "status_rotulo": "Não consistente",
      "status_mensagem": "Um ou mais critérios ANS estão fora dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-01-01",
      "competencia_teste": "2026-01-01",
      "competencia_peona": "2026-03-01",
      "competencia_label": "01/2026",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 2993550.28,
      "peona_real": 2531446.98,
      "diferenca": 462103.3,
      "variacao_mensal": 0.182545122869,
      "variacao_media": 0.300164657324,
      "status_mensal_ans": "dentro",
      "status_media_ans": "fora",
      "status": "nao_consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Não consistente",
      "resultado_consolidado": "Não consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "fd7d608d5ebd2891d41a4458266cc86947df08959c1764b9f693439b2384cebd",
      "janela_bloco": "6m",
      "peona": 2993550.28,
      "runoff_puro": 2531446.98,
      "diferenca_pct": 0.182545122869,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Fora do parâmetro ANS",
      "status_rotulo": "Não consistente",
      "status_mensagem": "Um ou mais critérios ANS estão fora dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-02-01",
      "competencia_teste": "2026-02-01",
      "competencia_peona": "2026-05-01",
      "competencia_label": "02/2026",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 286447185.955,
      "peona_real": 265846989.55,
      "diferenca": 20600196.4054,
      "variacao_mensal": 0.077488921128,
      "variacao_media": -0.0146730286079,
      "status_mensal_ans": "dentro",
      "status_media_ans": "dentro",
      "status": "consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Consistente",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "a963258961d674edcaca8dd84d63d989580b0600a9ef690ecdd832ad018dffe6",
      "janela_bloco": "12m",
      "peona": 286447185.955,
      "runoff_puro": 265846989.55,
      "diferenca_pct": 0.077488921128,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Consistente",
      "status_mensagem": "Os dois critérios ANS estão dentro dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-02-01",
      "competencia_teste": "2026-02-01",
      "competencia_peona": "2026-04-01",
      "competencia_label": "02/2026",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 279581989.067,
      "peona_real": 265846989.55,
      "diferenca": 13734999.5167,
      "variacao_mensal": 0.051665055677,
      "variacao_media": 0.045216917791,
      "status_mensal_ans": "dentro",
      "status_media_ans": "dentro",
      "status": "consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "a554655253f50fb5cf4a681d51902aa39e9d803caa84173206b3cb4f1f680662",
      "janela_bloco": "6m",
      "peona": 279581989.067,
      "runoff_puro": 265846989.55,
      "diferenca_pct": 0.051665055677,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Consistente",
      "status_mensagem": "Os dois critérios ANS estão dentro dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-02-01",
      "competencia_teste": "2026-02-01",
      "competencia_peona": "2026-05-01",
      "competencia_label": "02/2026",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 3295341.3238,
      "peona_real": 2488762.61,
      "diferenca": 806578.713801,
      "variacao_mensal": 0.324088247935,
      "variacao_media": 0.195175858733,
      "status_mensal_ans": "fora",
      "status_media_ans": "fora",
      "status": "nao_consistente",
      "status_mensal_exibicao": "Não consistente",
      "status_media_exibicao": "Não consistente",
      "resultado_consolidado": "Não consistente",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "93ee38a177b088d049d76ed8e75be2c45aeac158eeb194e78cd08233c90143b9",
      "janela_bloco": "12m",
      "peona": 3295341.3238,
      "runoff_puro": 2488762.61,
      "diferenca_pct": 0.324088247935,
      "media_completa": true,
      "status_mensal_rotulo": "Fora do parâmetro ANS",
      "status_media_rotulo": "Fora do parâmetro ANS",
      "status_rotulo": "Não consistente",
      "status_mensagem": "Um ou mais critérios ANS estão fora dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-02-01",
      "competencia_teste": "2026-02-01",
      "competencia_peona": "2026-04-01",
      "competencia_label": "02/2026",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 2884003.73,
      "peona_real": 2488762.61,
      "diferenca": 395241.12,
      "variacao_mensal": 0.158810293281,
      "variacao_media": 0.284131972632,
      "status_mensal_ans": "dentro",
      "status_media_ans": "fora",
      "status": "nao_consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Não consistente",
      "resultado_consolidado": "Não consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "a3e4240335ca2dc90b94731faab8963faf3aa0bd2d3d17f4d3ecc91044d33bea",
      "janela_bloco": "6m",
      "peona": 2884003.73,
      "runoff_puro": 2488762.61,
      "diferenca_pct": 0.158810293281,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Fora do parâmetro ANS",
      "status_rotulo": "Não consistente",
      "status_mensagem": "Um ou mais critérios ANS estão fora dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-03-01",
      "competencia_teste": "2026-03-01",
      "competencia_peona": "2026-06-01",
      "competencia_label": "03/2026",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 287774624.884,
      "peona_real": 293834062.61,
      "diferenca": -6059437.72607,
      "variacao_mensal": -0.0206219717083,
      "variacao_media": -0.00261844255744,
      "status_mensal_ans": "dentro",
      "status_media_ans": "dentro",
      "status": "consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Consistente",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "5ab7dfc8befa792f024b3b3664cb5d039962ba039cc0fee3b2bf96001a512fe9",
      "janela_bloco": "12m",
      "peona": 287774624.884,
      "runoff_puro": 293834062.61,
      "diferenca_pct": -0.0206219717083,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Consistente",
      "status_mensagem": "Os dois critérios ANS estão dentro dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-03-01",
      "competencia_teste": "2026-03-01",
      "competencia_peona": "2026-05-01",
      "competencia_label": "03/2026",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 277569796.053,
      "peona_real": 293834062.61,
      "diferenca": -16264266.5567,
      "variacao_mensal": -0.0553518758588,
      "variacao_media": 0.0359634409036,
      "status_mensal_ans": "dentro",
      "status_media_ans": "dentro",
      "status": "consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "f7fac8e65c3abcafc0becea11ebba8729d1094327e08c6500dad5c816531064c",
      "janela_bloco": "6m",
      "peona": 277569796.053,
      "runoff_puro": 293834062.61,
      "diferenca_pct": -0.0553518758588,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Consistente",
      "status_mensagem": "Os dois critérios ANS estão dentro dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-03-01",
      "competencia_teste": "2026-03-01",
      "competencia_peona": "2026-06-01",
      "competencia_label": "03/2026",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 3250824.5694,
      "peona_real": 3141439.28,
      "diferenca": 109385.2894,
      "variacao_mensal": 0.0348201189488,
      "variacao_media": 0.194993795697,
      "status_mensal_ans": "dentro",
      "status_media_ans": "fora",
      "status": "nao_consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Não consistente",
      "resultado_consolidado": "Não consistente",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "048ca1a2d805b61640d370f3fb73d568cf0021fb3b8a331b57f3daf464fda9b6",
      "janela_bloco": "12m",
      "peona": 3250824.5694,
      "runoff_puro": 3141439.28,
      "diferenca_pct": 0.0348201189488,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Fora do parâmetro ANS",
      "status_rotulo": "Não consistente",
      "status_mensagem": "Um ou mais critérios ANS estão fora dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-03-01",
      "competencia_teste": "2026-03-01",
      "competencia_peona": "2026-05-01",
      "competencia_label": "03/2026",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 2743722.07333,
      "peona_real": 3141439.28,
      "diferenca": -397717.206667,
      "variacao_mensal": -0.126603499612,
      "variacao_media": 0.229696101941,
      "status_mensal_ans": "dentro",
      "status_media_ans": "fora",
      "status": "nao_consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Não consistente",
      "resultado_consolidado": "Não consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "01fdd1fa27a720d0ab715c0301a131a6a7c902f82d0d15cb744a17c2ec80fd0c",
      "janela_bloco": "6m",
      "peona": 2743722.07333,
      "runoff_puro": 3141439.28,
      "diferenca_pct": -0.126603499612,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Fora do parâmetro ANS",
      "status_rotulo": "Não consistente",
      "status_mensagem": "Um ou mais critérios ANS estão fora dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-04-01",
      "competencia_teste": "2026-04-01",
      "competencia_peona": "2026-07-01",
      "competencia_label": "04/2026",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 291646018.035,
      "peona_real": 285201896.53,
      "diferenca": 6444121.50526,
      "variacao_mensal": 0.0225949461896,
      "variacao_media": 0.0141675254484,
      "status_mensal_ans": "dentro",
      "status_media_ans": "dentro",
      "status": "consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Consistente",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "9c71f1a930bd97992f9217ee185e83e71cf53d3c23e2d34af3b7fb81df6a8f5e",
      "janela_bloco": "12m",
      "peona": 291646018.035,
      "runoff_puro": 285201896.53,
      "diferenca_pct": 0.0225949461896,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Consistente",
      "status_mensagem": "Os dois critérios ANS estão dentro dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-04-01",
      "competencia_teste": "2026-04-01",
      "competencia_peona": "2026-06-01",
      "competencia_label": "04/2026",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 278137889.292,
      "peona_real": 285201896.53,
      "diferenca": -7064007.23833,
      "variacao_mensal": -0.0247684441243,
      "variacao_media": 0.0299024465403,
      "status_mensal_ans": "dentro",
      "status_media_ans": "dentro",
      "status": "consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "b76bdcdffc954827ece104c50f7e3f1aaeecdf7e7eeb1736faed8d5e7f5380b1",
      "janela_bloco": "6m",
      "peona": 278137889.292,
      "runoff_puro": 285201896.53,
      "diferenca_pct": -0.0247684441243,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Consistente",
      "status_mensagem": "Os dois critérios ANS estão dentro dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-04-01",
      "competencia_teste": "2026-04-01",
      "competencia_peona": "2026-07-01",
      "competencia_label": "04/2026",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 3274289.3589,
      "peona_real": 2893479.5,
      "diferenca": 380809.858901,
      "variacao_mensal": 0.131609661966,
      "variacao_media": 0.213051420416,
      "status_mensal_ans": "dentro",
      "status_media_ans": "fora",
      "status": "nao_consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Não consistente",
      "resultado_consolidado": "Não consistente",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "357905cfac7b4238ab9c7fdb30fe00cddd4960bb711edf51a233a4bb9ecef899",
      "janela_bloco": "12m",
      "peona": 3274289.3589,
      "runoff_puro": 2893479.5,
      "diferenca_pct": 0.131609661966,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Fora do parâmetro ANS",
      "status_rotulo": "Não consistente",
      "status_mensagem": "Um ou mais critérios ANS estão fora dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-04-01",
      "competencia_teste": "2026-04-01",
      "competencia_peona": "2026-06-01",
      "competencia_label": "04/2026",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 2732815.87,
      "peona_real": 2893479.5,
      "diferenca": -160663.63,
      "variacao_mensal": -0.0555260992863,
      "variacao_media": 0.188618483042,
      "status_mensal_ans": "dentro",
      "status_media_ans": "fora",
      "status": "nao_consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Não consistente",
      "resultado_consolidado": "Não consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "8760ef0fee48bcf274bde3186b6abfae9d306b4fa6a52a026bcd2dc5bbdacd2a",
      "janela_bloco": "6m",
      "peona": 2732815.87,
      "runoff_puro": 2893479.5,
      "diferenca_pct": -0.0555260992863,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Fora do parâmetro ANS",
      "status_rotulo": "Não consistente",
      "status_mensagem": "Um ou mais critérios ANS estão fora dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-05-01",
      "competencia_teste": "2026-05-01",
      "competencia_peona": "2026-08-01",
      "competencia_label": "05/2026",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 292119188.591,
      "peona_real": 276222182.58,
      "diferenca": 15897006.0112,
      "variacao_mensal": 0.0575515183564,
      "variacao_media": 0.0317132689955,
      "status_mensal_ans": "dentro",
      "status_media_ans": "dentro",
      "status": "consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Consistente",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "19d16e287ea14ef803656c7c253783aded672fe2ecea04961bea3846cb0ccca1",
      "janela_bloco": "12m",
      "peona": 292119188.591,
      "runoff_puro": 276222182.58,
      "diferenca_pct": 0.0575515183564,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Consistente",
      "status_mensagem": "Os dois critérios ANS estão dentro dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-05-01",
      "competencia_teste": "2026-05-01",
      "competencia_peona": "2026-07-01",
      "competencia_label": "05/2026",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 276699947.217,
      "peona_real": 276222182.58,
      "diferenca": 477764.636667,
      "variacao_mensal": 0.00172963891677,
      "variacao_media": 0.0180503062872,
      "status_mensal_ans": "dentro",
      "status_media_ans": "dentro",
      "status": "consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "318744583f55ce721a99c4dcd41257e63263dfd48888f3bed6f0fc33a8c267a3",
      "janela_bloco": "6m",
      "peona": 276699947.217,
      "runoff_puro": 276222182.58,
      "diferenca_pct": 0.00172963891677,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Consistente",
      "status_mensagem": "Os dois critérios ANS estão dentro dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-05-01",
      "competencia_teste": "2026-05-01",
      "competencia_peona": "2026-08-01",
      "competencia_label": "05/2026",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 3269970.99048,
      "peona_real": 2720997.27,
      "diferenca": 548973.720478,
      "variacao_mensal": 0.201754601716,
      "variacao_media": 0.24879637395,
      "status_mensal_ans": "dentro",
      "status_media_ans": "fora",
      "status": "nao_consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Não consistente",
      "resultado_consolidado": "Não consistente",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "c1032ae5a1f177f45a3ca1513ada90504e40e015f043b1e85ca29d7e41b084f9",
      "janela_bloco": "12m",
      "peona": 3269970.99048,
      "runoff_puro": 2720997.27,
      "diferenca_pct": 0.201754601716,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Fora do parâmetro ANS",
      "status_rotulo": "Não consistente",
      "status_mensagem": "Um ou mais critérios ANS estão fora dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-05-01",
      "competencia_teste": "2026-05-01",
      "competencia_peona": "2026-07-01",
      "competencia_label": "05/2026",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 2684953.87333,
      "peona_real": 2720997.27,
      "diferenca": -36043.3966667,
      "variacao_mensal": -0.0132463920725,
      "variacao_media": 0.121065967651,
      "status_mensal_ans": "dentro",
      "status_media_ans": "dentro",
      "status": "consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "8c12779ab6944377d594a7435e2dbdffe737dcc85e54870668a33210cbb6d20e",
      "janela_bloco": "6m",
      "peona": 2684953.87333,
      "runoff_puro": 2720997.27,
      "diferenca_pct": -0.0132463920725,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Consistente",
      "status_mensagem": "Os dois critérios ANS estão dentro dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-06-01",
      "competencia_teste": "2026-06-01",
      "competencia_peona": "2026-09-01",
      "competencia_label": "06/2026",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 287752988.448,
      "peona_real": 205688623.37,
      "diferenca": 82064365.0775,
      "variacao_mensal": 0.398973767888,
      "variacao_media": 0.0677254653913,
      "status_mensal_ans": "fora",
      "status_media_ans": "dentro",
      "status": "nao_consistente",
      "status_mensal_exibicao": "Não consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Não consistente",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "99d28870b35c9b957014adcd45aa913e126c85db481901f645eea2bf41557858",
      "janela_bloco": "12m",
      "peona": 287752988.448,
      "runoff_puro": 205688623.37,
      "diferenca_pct": 0.398973767888,
      "media_completa": true,
      "status_mensal_rotulo": "Fora do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Não consistente",
      "status_mensagem": "Um ou mais critérios ANS estão fora dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-06-01",
      "competencia_teste": "2026-06-01",
      "competencia_peona": "2026-08-01",
      "competencia_label": "06/2026",
      "tipo": "MH",
      "segmento": "MH",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 278078166.005,
      "peona_real": 205688623.37,
      "diferenca": 72389542.635,
      "variacao_mensal": 0.351937513359,
      "variacao_media": 0.0614611376007,
      "status_mensal_ans": "fora",
      "status_media_ans": "dentro",
      "status": "nao_consistente",
      "status_mensal_exibicao": "Não consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Não consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "3ef813f117ca98f48629ad5b25489f38d433e959e6b201aa3f7849b05fcade00",
      "janela_bloco": "6m",
      "peona": 278078166.005,
      "runoff_puro": 205688623.37,
      "diferenca_pct": 0.351937513359,
      "media_completa": true,
      "status_mensal_rotulo": "Fora do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Não consistente",
      "status_mensagem": "Um ou mais critérios ANS estão fora dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-06-01",
      "competencia_teste": "2026-06-01",
      "competencia_peona": "2026-09-01",
      "competencia_label": "06/2026",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "12m",
      "janela_meses": 12,
      "peona_estimada": 3055310.76247,
      "peona_real": 2232440.64,
      "diferenca": 822870.122467,
      "variacao_mensal": 0.368596641596,
      "variacao_media": 0.278041479226,
      "status_mensal_ans": "fora",
      "status_media_ans": "fora",
      "status": "nao_consistente",
      "status_mensal_exibicao": "Não consistente",
      "status_media_exibicao": "Não consistente",
      "resultado_consolidado": "Não consistente",
      "data_inclusao": "2026-09-09T14:24:43",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "75299403b75d8541c3c0d9f6b588b3d215710aef51435265ebf50d4abf6886d6",
      "janela_bloco": "12m",
      "peona": 3055310.76247,
      "runoff_puro": 2232440.64,
      "diferenca_pct": 0.368596641596,
      "media_completa": true,
      "status_mensal_rotulo": "Fora do parâmetro ANS",
      "status_media_rotulo": "Fora do parâmetro ANS",
      "status_rotulo": "Não consistente",
      "status_mensagem": "Um ou mais critérios ANS estão fora dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_12m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 12m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 12 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    },
    {
      "competencia": "2026-06-01",
      "competencia_teste": "2026-06-01",
      "competencia_peona": "2026-08-01",
      "competencia_label": "06/2026",
      "tipo": "OD",
      "segmento": "OD",
      "janela": "6m",
      "janela_meses": 6,
      "peona_estimada": 2654999.52333,
      "peona_real": 2232440.64,
      "diferenca": 422558.883333,
      "variacao_mensal": 0.189281128359,
      "variacao_media": 0.0558767589229,
      "status_mensal_ans": "dentro",
      "status_media_ans": "dentro",
      "status": "consistente",
      "status_mensal_exibicao": "Consistente",
      "status_media_exibicao": "Consistente",
      "resultado_consolidado": "Consistente",
      "data_inclusao": "2026-09-09T13:35:40",
      "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
      "bloqueado": true,
      "fingerprint": "c3a7c6618afa37103904149ae0e20721cf829faf729f425cb42588fd5804dd9a",
      "janela_bloco": "6m",
      "peona": 2654999.52333,
      "runoff_puro": 2232440.64,
      "diferenca_pct": 0.189281128359,
      "media_completa": true,
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_media_rotulo": "Dentro do parâmetro ANS",
      "status_rotulo": "Consistente",
      "status_mensagem": "Os dois critérios ANS estão dentro dos limites.",
      "pendente": false,
      "periodo_resumo": false,
      "regime": "atual_6m",
      "fonte_regra": "peona_input",
      "fonte_arquivo": "PEONA_INPUT.xlsx",
      "fonte_aba": "Teste Consistência",
      "fonte": "PEONA_INPUT.xlsx / Teste Consistência · bloco 6m",
      "fonte_detalhe": "PEONA_INPUT · Teste Consistência · metodologia 6 meses.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01"
    }
  ],
  "consistencia_meta": {
    "corte_metodologia": "2025-09-01",
    "inicio_6m": "2025-10-01",
    "formula_variacao": "V_t = PEONA_estimada / PEONA_real - 1",
    "formula_variacao_latex": "V_t=\\left(\\frac{\\operatorname{PEONA}^{\\mathrm{estimada}}_t}{\\operatorname{PEONA}^{\\mathrm{real}}_t}-1\\right)\\times 100",
    "ans_grande_porte": {
      "media": {
        "inf": -0.1078,
        "sup": 0.1362
      },
      "mensal": {
        "inf": -0.2453,
        "sup": 0.3094
      }
    },
    "arquivo_acompanhamento": "Acompanhamento das Provisões.xlsx",
    "arquivo_input": "PEONA_INPUT.xlsx",
    "n_historico_mh_od": 16,
    "n_atual_mh_od": 20,
    "n_atual_12m_mh_od": 20,
    "n_acompanhamento": 9,
    "defasagem_teste_meses": 3,
    "fonte_consistencia": "historico_imutavel",
    "arquivo_historico_csv": "historico_consistencia.csv",
    "arquivo_historico_json": "historico_consistencia.json",
    "versao_metodologia": "PEONA_hibrida_12m_ate_set2025_6m_desde_out2025_v1",
    "relatorio_processamento": {
      "peona_processada": "2026-07-01",
      "competencia_teste": "2026-04-01",
      "janelas": [
        "6m",
        "12m"
      ],
      "novos_incluidos": 0,
      "segmentos_incluidos": [],
      "registros_historicos_preservados": 52,
      "registros_historicos_alterados": 0,
      "registros_historicos_excluidos": 0,
      "duplicidades_encontradas": 4,
      "total_historico": 52,
      "seed": {
        "acao": "ja_existia",
        "n_registros": 52,
        "mensagem": "Histórico já existe — carga inicial não sobrescrita."
      },
      "mensagens": [
        "MH 2026-04-01 (6m): Teste ja existente - historico preservado.",
        "MH 2026-04-01 (12m): Teste ja existente - historico preservado.",
        "OD 2026-04-01 (6m): Teste ja existente - historico preservado.",
        "OD 2026-04-01 (12m): Teste ja existente - historico preservado."
      ],
      "erros": []
    },
    "n_historico_bloqueado": 52,
    "imutavel": true
  },
  "consistencia_acompanhamento": [
    {
      "competencia": "2025-01-01",
      "competencia_label": "01/2025",
      "tipo": "TOTAL",
      "peona_estimada": 202955000.14,
      "peona_real": 301753709.87999994,
      "variacao_mensal": -0.3274150623675506,
      "diferenca": -98798709.73999995,
      "fonte_arquivo": "Acompanhamento das Provisões.xlsx",
      "fonte_aba": "TESTE DE CONSISTENCIA",
      "fonte": "Acompanhamento das Provisões.xlsx / TESTE DE CONSISTENCIA",
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_detalhe": "Planilha Acompanhamento das Provisões · TESTE DE CONSISTENCIA.",
      "janela_bloco": "12m",
      "periodo_resumo": false,
      "periodo_texto": null,
      "janela": "12m",
      "janela_meses": 12,
      "peona": 202955000.14,
      "runoff_puro": 301753709.87999994,
      "diferenca_pct": -0.3274150623675506,
      "variacao_media": null,
      "media_completa": false,
      "status_mensal_ans": "fora",
      "status_mensal_rotulo": "Fora do parâmetro ANS",
      "status_mensal_mensagem": "-32.74% fora de [-24.53%; 30.94%].",
      "status_media_ans": "nao_disponivel",
      "status_media_rotulo": "Não disponível",
      "status_media_mensagem": "Variação média da janela não disponível na fonte oficial.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01",
      "pendente": false,
      "status": "avaliacao_parcial",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "executado": true,
      "runoff_completo": true
    },
    {
      "competencia": "2025-02-01",
      "competencia_label": "02/2025",
      "tipo": "TOTAL",
      "peona_estimada": 217104657.26,
      "peona_real": 277492533.8499995,
      "variacao_mensal": -0.2176198247648803,
      "diferenca": -60387876.5899995,
      "fonte_arquivo": "Acompanhamento das Provisões.xlsx",
      "fonte_aba": "TESTE DE CONSISTENCIA",
      "fonte": "Acompanhamento das Provisões.xlsx / TESTE DE CONSISTENCIA",
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_detalhe": "Planilha Acompanhamento das Provisões · TESTE DE CONSISTENCIA.",
      "janela_bloco": "12m",
      "periodo_resumo": false,
      "periodo_texto": null,
      "janela": "12m",
      "janela_meses": 12,
      "peona": 217104657.26,
      "runoff_puro": 277492533.8499995,
      "diferenca_pct": -0.2176198247648803,
      "variacao_media": null,
      "media_completa": false,
      "status_mensal_ans": "dentro",
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_mensal_mensagem": "-21.76% no intervalo [-24.53%; 30.94%].",
      "status_media_ans": "nao_disponivel",
      "status_media_rotulo": "Não disponível",
      "status_media_mensagem": "Variação média da janela não disponível na fonte oficial.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01",
      "pendente": false,
      "status": "avaliacao_parcial",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "executado": true,
      "runoff_completo": true
    },
    {
      "competencia": "2025-03-01",
      "competencia_label": "03/2025",
      "tipo": "TOTAL",
      "peona_estimada": 232724701.08,
      "peona_real": 284252658.72999907,
      "variacao_mensal": -0.1812752003102407,
      "diferenca": -51527957.64999905,
      "fonte_arquivo": "Acompanhamento das Provisões.xlsx",
      "fonte_aba": "TESTE DE CONSISTENCIA",
      "fonte": "Acompanhamento das Provisões.xlsx / TESTE DE CONSISTENCIA",
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_detalhe": "Planilha Acompanhamento das Provisões · TESTE DE CONSISTENCIA.",
      "janela_bloco": "12m",
      "periodo_resumo": false,
      "periodo_texto": null,
      "janela": "12m",
      "janela_meses": 12,
      "peona": 232724701.08,
      "runoff_puro": 284252658.72999907,
      "diferenca_pct": -0.1812752003102407,
      "variacao_media": null,
      "media_completa": false,
      "status_mensal_ans": "dentro",
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_mensal_mensagem": "-18.13% no intervalo [-24.53%; 30.94%].",
      "status_media_ans": "nao_disponivel",
      "status_media_rotulo": "Não disponível",
      "status_media_mensagem": "Variação média da janela não disponível na fonte oficial.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01",
      "pendente": false,
      "status": "avaliacao_parcial",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "executado": true,
      "runoff_completo": true
    },
    {
      "competencia": "2025-04-01",
      "competencia_label": "04/2025",
      "tipo": "TOTAL",
      "peona_estimada": 249346912.25,
      "peona_real": 302761704.1999984,
      "variacao_mensal": -0.17642519251613675,
      "diferenca": -53414791.94999838,
      "fonte_arquivo": "Acompanhamento das Provisões.xlsx",
      "fonte_aba": "TESTE DE CONSISTENCIA",
      "fonte": "Acompanhamento das Provisões.xlsx / TESTE DE CONSISTENCIA",
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_detalhe": "Planilha Acompanhamento das Provisões · TESTE DE CONSISTENCIA.",
      "janela_bloco": "12m",
      "periodo_resumo": false,
      "periodo_texto": null,
      "janela": "12m",
      "janela_meses": 12,
      "peona": 249346912.25,
      "runoff_puro": 302761704.1999984,
      "diferenca_pct": -0.17642519251613675,
      "variacao_media": null,
      "media_completa": false,
      "status_mensal_ans": "dentro",
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_mensal_mensagem": "-17.64% no intervalo [-24.53%; 30.94%].",
      "status_media_ans": "nao_disponivel",
      "status_media_rotulo": "Não disponível",
      "status_media_mensagem": "Variação média da janela não disponível na fonte oficial.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01",
      "pendente": false,
      "status": "avaliacao_parcial",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "executado": true,
      "runoff_completo": true
    },
    {
      "competencia": "2025-05-01",
      "competencia_label": "05/2025",
      "tipo": "TOTAL",
      "peona_estimada": 262325990.25,
      "peona_real": 309000474.45001775,
      "variacao_mensal": -0.15104987875210385,
      "diferenca": -46674484.20001775,
      "fonte_arquivo": "Acompanhamento das Provisões.xlsx",
      "fonte_aba": "TESTE DE CONSISTENCIA",
      "fonte": "Acompanhamento das Provisões.xlsx / TESTE DE CONSISTENCIA",
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_detalhe": "Planilha Acompanhamento das Provisões · TESTE DE CONSISTENCIA.",
      "janela_bloco": "12m",
      "periodo_resumo": false,
      "periodo_texto": null,
      "janela": "12m",
      "janela_meses": 12,
      "peona": 262325990.25,
      "runoff_puro": 309000474.45001775,
      "diferenca_pct": -0.15104987875210385,
      "variacao_media": null,
      "media_completa": false,
      "status_mensal_ans": "dentro",
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_mensal_mensagem": "-15.10% no intervalo [-24.53%; 30.94%].",
      "status_media_ans": "nao_disponivel",
      "status_media_rotulo": "Não disponível",
      "status_media_mensagem": "Variação média da janela não disponível na fonte oficial.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01",
      "pendente": false,
      "status": "avaliacao_parcial",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "executado": true,
      "runoff_completo": true
    },
    {
      "competencia": "2025-06-01",
      "competencia_label": "06/2025",
      "tipo": "TOTAL",
      "peona_estimada": 277152198.27,
      "peona_real": 288549877.8299643,
      "variacao_mensal": -0.039499859246797886,
      "diferenca": -11397679.5599643,
      "fonte_arquivo": "Acompanhamento das Provisões.xlsx",
      "fonte_aba": "TESTE DE CONSISTENCIA",
      "fonte": "Acompanhamento das Provisões.xlsx / TESTE DE CONSISTENCIA",
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_detalhe": "Planilha Acompanhamento das Provisões · TESTE DE CONSISTENCIA.",
      "janela_bloco": "12m",
      "periodo_resumo": false,
      "periodo_texto": null,
      "janela": "12m",
      "janela_meses": 12,
      "peona": 277152198.27,
      "runoff_puro": 288549877.8299643,
      "diferenca_pct": -0.039499859246797886,
      "variacao_media": null,
      "media_completa": false,
      "status_mensal_ans": "dentro",
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_mensal_mensagem": "-3.95% no intervalo [-24.53%; 30.94%].",
      "status_media_ans": "nao_disponivel",
      "status_media_rotulo": "Não disponível",
      "status_media_mensagem": "Variação média da janela não disponível na fonte oficial.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01",
      "pendente": false,
      "status": "avaliacao_parcial",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "executado": true,
      "runoff_completo": true
    },
    {
      "competencia": "2025-07-01",
      "competencia_label": "07/2025",
      "tipo": "TOTAL",
      "peona_estimada": 297492378.53,
      "peona_real": 282981865.10999984,
      "variacao_mensal": 0.051277184897907446,
      "diferenca": 14510513.420000136,
      "fonte_arquivo": "Acompanhamento das Provisões.xlsx",
      "fonte_aba": "TESTE DE CONSISTENCIA",
      "fonte": "Acompanhamento das Provisões.xlsx / TESTE DE CONSISTENCIA",
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_detalhe": "Planilha Acompanhamento das Provisões · TESTE DE CONSISTENCIA.",
      "janela_bloco": "12m",
      "periodo_resumo": false,
      "periodo_texto": null,
      "janela": "12m",
      "janela_meses": 12,
      "peona": 297492378.53,
      "runoff_puro": 282981865.10999984,
      "diferenca_pct": 0.051277184897907446,
      "variacao_media": null,
      "media_completa": false,
      "status_mensal_ans": "dentro",
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_mensal_mensagem": "5.13% no intervalo [-24.53%; 30.94%].",
      "status_media_ans": "nao_disponivel",
      "status_media_rotulo": "Não disponível",
      "status_media_mensagem": "Variação média da janela não disponível na fonte oficial.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01",
      "pendente": false,
      "status": "avaliacao_parcial",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "executado": true,
      "runoff_completo": true
    },
    {
      "competencia": "2025-08-01",
      "competencia_label": "08/2025",
      "tipo": "TOTAL",
      "peona_estimada": 294286397.37,
      "peona_real": 280520625.6099999,
      "variacao_mensal": 0.049072226792828744,
      "diferenca": 13765771.76000011,
      "fonte_arquivo": "Acompanhamento das Provisões.xlsx",
      "fonte_aba": "TESTE DE CONSISTENCIA",
      "fonte": "Acompanhamento das Provisões.xlsx / TESTE DE CONSISTENCIA",
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_detalhe": "Planilha Acompanhamento das Provisões · TESTE DE CONSISTENCIA.",
      "janela_bloco": "12m",
      "periodo_resumo": false,
      "periodo_texto": null,
      "janela": "12m",
      "janela_meses": 12,
      "peona": 294286397.37,
      "runoff_puro": 280520625.6099999,
      "diferenca_pct": 0.049072226792828744,
      "variacao_media": null,
      "media_completa": false,
      "status_mensal_ans": "dentro",
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_mensal_mensagem": "4.91% no intervalo [-24.53%; 30.94%].",
      "status_media_ans": "nao_disponivel",
      "status_media_rotulo": "Não disponível",
      "status_media_mensagem": "Variação média da janela não disponível na fonte oficial.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01",
      "pendente": false,
      "status": "avaliacao_parcial",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "executado": true,
      "runoff_completo": true
    },
    {
      "competencia": "2025-09-01",
      "competencia_label": "09/2025",
      "tipo": "TOTAL",
      "peona_estimada": 294773329.15,
      "peona_real": 289302212.59999937,
      "variacao_mensal": 0.01891142311298255,
      "diferenca": 5471116.550000608,
      "fonte_arquivo": "Acompanhamento das Provisões.xlsx",
      "fonte_aba": "TESTE DE CONSISTENCIA",
      "fonte": "Acompanhamento das Provisões.xlsx / TESTE DE CONSISTENCIA",
      "regime": "historico_12m",
      "fonte_regra": "acompanhamento_provisoes",
      "fonte_detalhe": "Planilha Acompanhamento das Provisões · TESTE DE CONSISTENCIA.",
      "janela_bloco": "12m",
      "periodo_resumo": false,
      "periodo_texto": null,
      "janela": "12m",
      "janela_meses": 12,
      "peona": 294773329.15,
      "runoff_puro": 289302212.59999937,
      "diferenca_pct": 0.01891142311298255,
      "variacao_media": null,
      "media_completa": false,
      "status_mensal_ans": "dentro",
      "status_mensal_rotulo": "Dentro do parâmetro ANS",
      "status_mensal_mensagem": "1.89% no intervalo [-24.53%; 30.94%].",
      "status_media_ans": "nao_disponivel",
      "status_media_rotulo": "Não disponível",
      "status_media_mensagem": "Variação média da janela não disponível na fonte oficial.",
      "ans_mensal_inf": -0.2453,
      "ans_mensal_sup": 0.3094,
      "ans_media_inf": -0.1078,
      "ans_media_sup": 0.1362,
      "mudanca_metodologica": "2025-10-01",
      "pendente": false,
      "status": "avaliacao_parcial",
      "status_rotulo": "Avaliação parcial",
      "status_mensagem": "Critério de variação média não disponível para aplicar os dois limites ANS.",
      "executado": true,
      "runoff_completo": true
    }
  ],
  "triangulo": [
    {
      "comp_aviso": "2023-08-01",
      "j0": 95752753.54,
      "j1": 57586090.71,
      "j2": 12005686.13,
      "j3": 4603532.67,
      "j4": 1110449.23,
      "j5": 657108.34,
      "total": 171715620.62,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2023-09-01",
      "j0": 82637291.54,
      "j1": 69764528.65,
      "j2": 11480884.65,
      "j3": 4280767.68,
      "j4": 1351846.42,
      "j5": 435223.17,
      "total": 169950542.11,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2023-10-01",
      "j0": 84032464.34,
      "j1": 63907303.89,
      "j2": 14122047.14,
      "j3": 4499981.89,
      "j4": 920138.59,
      "j5": 598433.95,
      "total": 168080369.8,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2023-11-01",
      "j0": 84116497.95,
      "j1": 67598798.67,
      "j2": 13547682.81,
      "j3": 4031712.54,
      "j4": 1585804.25,
      "j5": 619010.92,
      "total": 171499507.14,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2023-12-01",
      "j0": 80356186.31,
      "j1": 68624815.85,
      "j2": 12148963.24,
      "j3": 3345635.55,
      "j4": 1318972.0,
      "j5": 900237.5,
      "total": 166694810.45,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2024-01-01",
      "j0": 107411778.421944,
      "j1": 54382039.75,
      "j2": 13435106.52,
      "j3": 4858673.6,
      "j4": 879563.17,
      "j5": 508609.4,
      "total": 181475770.861944,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2024-02-01",
      "j0": 101546863.061151,
      "j1": 72558215.2640538,
      "j2": 11401486.19,
      "j3": 4243448.12,
      "j4": 1427196.62,
      "j5": 455084.39,
      "total": 191632293.645205,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2024-03-01",
      "j0": 114096387.472241,
      "j1": 66854780.1405037,
      "j2": 12685249.8603147,
      "j3": 2890240.03,
      "j4": 1398223.67,
      "j5": 652540.42,
      "total": 198577421.59306,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2024-04-01",
      "j0": 124191128.272156,
      "j1": 65031544.0068056,
      "j2": 13419583.0161026,
      "j3": 4573344.92816738,
      "j4": 1721896.96,
      "j5": 1010317.68,
      "total": 209947814.863232,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2024-05-01",
      "j0": 112137621.11549,
      "j1": 74521645.6799052,
      "j2": 15148313.6412046,
      "j3": 4915003.83547926,
      "j4": 1842530.60458234,
      "j5": 1040449.87,
      "total": 209605564.746661,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2024-06-01",
      "j0": 112803359.534687,
      "j1": 77342576.9262232,
      "j2": 11112787.0764616,
      "j3": 3501710.92376136,
      "j4": 1113099.96447698,
      "j5": 227328.941044849,
      "total": 206100863.366655,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2024-07-01",
      "j0": 104313367.807915,
      "j1": 78099700.8027846,
      "j2": 14681347.0854932,
      "j3": 4750823.81001375,
      "j4": 1594074.17308611,
      "j5": 709443.345007029,
      "total": 204148757.0243,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2024-08-01",
      "j0": 837872.766553924,
      "j1": 127335514.867916,
      "j2": 68050442.7645434,
      "j3": 10661903.6805886,
      "j4": 3644865.12025308,
      "j5": 1818942.04419525,
      "total": 212349541.244051,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2024-09-01",
      "j0": 575710.18281505,
      "j1": 94125786.1295045,
      "j2": 59174268.9859534,
      "j3": 12472491.3543528,
      "j4": 5289844.0328519,
      "j5": 1721262.59626125,
      "total": 173359363.281739,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2024-10-01",
      "j0": 448066.033567944,
      "j1": 95950747.7178981,
      "j2": 56888861.3757411,
      "j3": 10200756.2428933,
      "j4": 2262699.99499983,
      "j5": 1562092.99000784,
      "total": 167313224.355108,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2024-11-01",
      "j0": 292343.59466538,
      "j1": 102004844.210996,
      "j2": 60895125.9746089,
      "j3": 18225453.3339854,
      "j4": 2645624.51552459,
      "j5": 894102.670156082,
      "total": 184957494.299936,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2024-12-01",
      "j0": 306723.270067005,
      "j1": 84044311.0193451,
      "j2": 59047795.799837,
      "j3": 10814484.6768174,
      "j4": 3619705.46432511,
      "j5": 1336016.69130575,
      "total": 159169036.921697,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2025-01-01",
      "j0": 142124.795528141,
      "j1": 80483185.3370275,
      "j2": 65696351.0415748,
      "j3": 20769071.109955,
      "j4": 7668642.03054921,
      "j5": 8042452.39731378,
      "total": 182801826.711948,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2025-02-01",
      "j0": 1430790.20304974,
      "j1": 110700817.612844,
      "j2": 59917256.6914316,
      "j3": 14872006.2888732,
      "j4": 4682962.8363079,
      "j5": 2075604.06242473,
      "total": 193679437.694931,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2025-03-01",
      "j0": 1589657.80411187,
      "j1": 95872061.6463245,
      "j2": 58941461.258159,
      "j3": 8611443.07775694,
      "j4": 1733607.00763284,
      "j5": 1572781.11171053,
      "total": 168321011.905696,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2025-04-01",
      "j0": 509154.595082025,
      "j1": 88358899.1593417,
      "j2": 49575972.3748922,
      "j3": 11981474.840299,
      "j4": 2912868.25293099,
      "j5": 3197008.51788995,
      "total": 156535377.740436,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2025-05-01",
      "j0": 207855.886104795,
      "j1": 93474612.3630156,
      "j2": 65468491.6617264,
      "j3": 16702603.0836568,
      "j4": 2695096.86201498,
      "j5": 437050.491226906,
      "total": 178985710.347746,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2025-06-01",
      "j0": 323564.597318701,
      "j1": 104593849.276559,
      "j2": 62634445.3816816,
      "j3": 13762345.135924,
      "j4": 3853329.14281309,
      "j5": 8675471.74181617,
      "total": 193843005.276113,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2025-07-01",
      "j0": 382422.821268006,
      "j1": 101801104.208768,
      "j2": 64739112.6022172,
      "j3": 14441954.0570342,
      "j4": 3239127.59684916,
      "j5": 4428717.48063605,
      "total": 189032438.766772,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2025-08-01",
      "j0": 226811.54,
      "j1": 108088966.26,
      "j2": 56800769.64,
      "j3": 11513701.11,
      "j4": 2026960.65,
      "j5": 2752398.5,
      "total": 181409607.7,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2025-09-01",
      "j0": 403143.34,
      "j1": 108071926.07,
      "j2": 58278151.76,
      "j3": 11532645.8,
      "j4": 1400119.77,
      "j5": 2901866.71,
      "total": 182587853.45,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2025-10-01",
      "j0": 389037.259999999,
      "j1": 117660134.7,
      "j2": 58338190.8699999,
      "j3": 13493068.8,
      "j4": 1812711.86,
      "j5": 1591854.96,
      "total": 193284998.45,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2025-11-01",
      "j0": 265639.72,
      "j1": 118169397.06,
      "j2": 61558745.2499999,
      "j3": 10252819.38,
      "j4": 2557988.42,
      "j5": 2440447.65,
      "total": 195245037.48,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2025-12-01",
      "j0": 512598.32,
      "j1": 112296135.61,
      "j2": 64037699.7,
      "j3": 9740373.12,
      "j4": 1585153.32,
      "j5": 1673171.42,
      "total": 189845131.49,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2026-01-01",
      "j0": 253921.48,
      "j1": 110883562.01,
      "j2": 54220304.1699999,
      "j3": 14182088.14,
      "j4": 1485445.64,
      "j5": 503744.59,
      "total": 181529066.03,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2026-02-01",
      "j0": 1082824.24,
      "j1": 116264109.37,
      "j2": 51006519.28,
      "j3": 9616328.00000001,
      "j4": 1164774.69,
      "j5": 1447055.27,
      "total": 180581610.85,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2026-03-01",
      "j0": 992988.829999999,
      "j1": 110106783.82,
      "j2": 55789318.8699999,
      "j3": 11389683.9,
      "j4": 882151.869999999,
      "j5": 1575948.16,
      "total": 180736875.45,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2026-04-01",
      "j0": 1614562.48,
      "j1": 133940041.33,
      "j2": 51490478.54,
      "j3": 12237738.42,
      "j4": 1999569.81,
      "j5": 2360382.32,
      "total": 203642772.9,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2026-05-01",
      "j0": 1237021.27,
      "j1": 123165477.74,
      "j2": 60925041.0200001,
      "j3": 7638063.72,
      "j4": 1530916.96,
      "j5": 2359693.28,
      "total": 196856213.99,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2026-06-01",
      "j0": 1586817.08,
      "j1": 126011338.29,
      "j2": 60688257.17,
      "j3": 10899281.47,
      "j4": 1450324.76,
      "j5": 1336288.28,
      "total": 201972307.05,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2026-07-01",
      "j0": 2867706.43,
      "j1": 129851930.76,
      "j2": 60628140.4800001,
      "j3": 9542309.43,
      "j4": 1966595.86,
      "j5": 3699646.84,
      "total": 208556329.8,
      "tipo": "MH"
    },
    {
      "comp_aviso": "2023-08-01",
      "j0": 1737479.4,
      "j1": 671416.99,
      "j2": 133606.23,
      "j3": 75756.6,
      "j4": 23815.9,
      "j5": 41601.19,
      "total": 2683676.31,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2023-09-01",
      "j0": 1429890.25,
      "j1": 810471.13,
      "j2": 106500.14,
      "j3": 73832.17,
      "j4": 38226.77,
      "j5": 40223.25,
      "total": 2499143.71,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2023-10-01",
      "j0": 1490129.01,
      "j1": 693813.95,
      "j2": 157934.96,
      "j3": 56654.26,
      "j4": 28579.72,
      "j5": 28465.98,
      "total": 2455577.88,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2023-11-01",
      "j0": 1465669.89,
      "j1": 703844.53,
      "j2": 144249.74,
      "j3": 69704.49,
      "j4": 32850.65,
      "j5": 37200.7,
      "total": 2453520.0,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2023-12-01",
      "j0": 1382164.82,
      "j1": 775089.54,
      "j2": 148737.22,
      "j3": 65960.65,
      "j4": 38517.73,
      "j5": 43030.18,
      "total": 2453500.14,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2024-01-01",
      "j0": 1663684.64805616,
      "j1": 322051.96,
      "j2": 142245.22,
      "j3": 75198.2,
      "j4": 46286.52,
      "j5": 43678.5,
      "total": 2293145.04805616,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2024-02-01",
      "j0": 1572843.86884878,
      "j1": 1123843.12594622,
      "j2": 68916.54,
      "j3": 74064.17,
      "j4": 36508.78,
      "j5": 41339.96,
      "total": 2917516.444795,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2024-03-01",
      "j0": 1767221.5377588,
      "j1": 1035503.4894963,
      "j2": 196479.89968529,
      "j3": 48464.11,
      "j4": 35508.97,
      "j5": 33508.72,
      "total": 3116686.72694038,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2024-04-01",
      "j0": 1923577.43784408,
      "j1": 1007263.66319439,
      "j2": 207853.873897353,
      "j3": 70835.841832623,
      "j4": 15038.11,
      "j5": 25813.83,
      "total": 3250382.75676845,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2024-05-01",
      "j0": 1736882.50451,
      "j1": 1154254.40009482,
      "j2": 234629.918795415,
      "j3": 76127.7445207392,
      "j4": 28538.6754176582,
      "j5": 18653.28,
      "total": 3249086.52333863,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2024-06-01",
      "j0": 1747194.02531258,
      "j1": 1197947.37377677,
      "j2": 172124.263538392,
      "j3": 54237.4662386388,
      "j4": 17240.6355230208,
      "j5": 8016.8941918177,
      "total": 3196760.65858122,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2024-07-01",
      "j0": 1976382.66317333,
      "j1": 1110737.63971203,
      "j2": 194397.820976778,
      "j3": 75862.7191145788,
      "j4": 34062.9748938858,
      "j5": 32691.7192113045,
      "total": 3424135.53708191,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2024-08-01",
      "j0": 12977.6834460766,
      "j1": 1972280.36208365,
      "j2": 1054022.92545662,
      "j3": 165140.599411441,
      "j4": 56454.7597469217,
      "j5": 28173.3158047526,
      "total": 3289049.64594946,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2024-09-01",
      "j0": 8917.08718495,
      "j1": 1457899.94049556,
      "j2": 916541.224046656,
      "j3": 193184.515647222,
      "j4": 81933.5871481043,
      "j5": 26660.3737387528,
      "total": 2685136.72826125,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2024-10-01",
      "j0": 6940.0264320558,
      "j1": 1486166.49210199,
      "j2": 881142.894258978,
      "j3": 157997.9571067,
      "j4": 35046.615000175,
      "j5": 24195.0199921582,
      "total": 2591489.00489206,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2024-11-01",
      "j0": 4528.0653346205,
      "j1": 1579937.46900409,
      "j2": 943195.315391088,
      "j3": 282291.266014649,
      "j4": 40977.67447541,
      "j5": 13848.6198439184,
      "total": 2864778.41006378,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2024-12-01",
      "j0": 4750.789932995,
      "j1": 1301749.51065494,
      "j2": 914582.300163038,
      "j3": 167503.903182596,
      "j4": 56065.0656748871,
      "j5": 20693.3586942462,
      "total": 2465344.9283027,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2025-01-01",
      "j0": 1332.2644718593,
      "j1": 754441.812972465,
      "j2": 615831.418425216,
      "j3": 194687.32004497,
      "j4": 71885.129450793,
      "j5": 75389.1926862228,
      "total": 1713567.13805153,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2025-02-01",
      "j0": 21241.5869502558,
      "j1": 1643470.18715635,
      "j2": 889534.75856837,
      "j3": 220790.591126844,
      "j4": 69523.5136920997,
      "j5": 30814.5275752677,
      "total": 2875375.16506918,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2025-03-01",
      "j0": 17650.5058881255,
      "j1": 1064499.78367551,
      "j2": 654446.891841033,
      "j3": 95615.7522430593,
      "j4": 19248.82236716,
      "j5": 17463.1182894666,
      "total": 1868924.87430436,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2025-04-01",
      "j0": 5653.3149179752,
      "j1": 981078.61065833,
      "j2": 550458.715107846,
      "j3": 133034.349700989,
      "j4": 32342.5570690143,
      "j5": 35497.4621100484,
      "total": 1738065.0095642,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2025-05-01",
      "j0": 2307.8938952047,
      "j1": 1037880.09698441,
      "j2": 726918.708273567,
      "j3": 185454.626343193,
      "j4": 29924.5679850204,
      "j5": 4852.7187730937,
      "total": 1987338.61225449,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2025-06-01",
      "j0": 5011.6426812986,
      "j1": 1620038.17345754,
      "j2": 970135.368317553,
      "j3": 213162.864075711,
      "j4": 59683.6271867914,
      "j5": 134373.058183682,
      "total": 3002404.73390258,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2025-07-01",
      "j0": 5923.2887319919,
      "j1": 1576781.77119439,
      "j2": 1002734.23778527,
      "j3": 223689.222966181,
      "j4": 50170.3531506939,
      "j5": 68595.7293637632,
      "total": 2927894.60319229,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2025-08-01",
      "j0": 34470.04,
      "j1": 1597346.11,
      "j2": 430762.18,
      "j3": 140781.32,
      "j4": 18957.51,
      "j5": 17934.92,
      "total": 2240252.08,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2025-09-01",
      "j0": 80814.16,
      "j1": 1533719.29,
      "j2": 557576.88,
      "j3": 130309.99,
      "j4": 12815.01,
      "j5": 8848.86,
      "total": 2324084.19,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2025-10-01",
      "j0": 55251.1799999998,
      "j1": 1650418.6,
      "j2": 456518.089999999,
      "j3": 143579.43,
      "j4": 22087.8200000001,
      "j5": 15745.61,
      "total": 2343600.73,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2025-11-01",
      "j0": 68449.4799999997,
      "j1": 1770734.88999999,
      "j2": 528133.259999999,
      "j3": 125368.44,
      "j4": 17293.55,
      "j5": 21329.59,
      "total": 2531309.20999999,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2025-12-01",
      "j0": 144931.79,
      "j1": 1602453.44,
      "j2": 405605.62,
      "j3": 110501.92,
      "j4": 30187.85,
      "j5": 22881.75,
      "total": 2316562.37,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2026-01-01",
      "j0": 61052.65,
      "j1": 1327458.98,
      "j2": 321229.76,
      "j3": 78260.9100000001,
      "j4": 9726.55,
      "j5": 3027.19,
      "total": 1800756.04,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2026-02-01",
      "j0": 110354.06,
      "j1": 1648275.23,
      "j2": 214099.15,
      "j3": 82306.78,
      "j4": 10876.85,
      "j5": 4507.7,
      "total": 2070419.77,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2026-03-01",
      "j0": 106654.02,
      "j1": 1448939.97,
      "j2": 313187.16,
      "j3": 50819.77,
      "j4": 13558.78,
      "j5": 2321.74,
      "total": 1935481.44,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2026-04-01",
      "j0": 69964.93,
      "j1": 1908393.33,
      "j2": 360837.44,
      "j3": 109339.51,
      "j4": 19558.91,
      "j5": 11902.56,
      "total": 2479996.68,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2026-05-01",
      "j0": 69611.36,
      "j1": 1727802.63,
      "j2": 458957.59,
      "j3": 83934.95,
      "j4": 33342.31,
      "j5": 12173.0,
      "total": 2385821.84,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2026-06-01",
      "j0": 102724.87,
      "j1": 1771497.69,
      "j2": 334644.91,
      "j3": 92705.95,
      "j4": 13952.87,
      "j5": 5177.53,
      "total": 2320703.82,
      "tipo": "OD"
    },
    {
      "comp_aviso": "2026-07-01",
      "j0": 101199.61,
      "j1": 1729422.32,
      "j2": 372230.56,
      "j3": 99624.4300000001,
      "j4": 21447.22,
      "j5": 9716.11,
      "total": 2333640.25,
      "tipo": "OD"
    }
  ],
  "triangulos_mh": {
    "6": {
      "aba": "MH 6",
      "janela": 6,
      "arquivo": "PEONA_INPUT.xlsx",
      "intervalo_triangulo_aviso": "B5:I41",
      "n_lags": 6,
      "colunas_lag": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5+"
      ],
      "triangulo_aviso": {
        "colunas": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5+"
        ],
        "linhas": [
          {
            "competencia": "2023-08-01",
            "competencia_label": "08/2023",
            "lags": [
              {
                "col": "0",
                "valor": 95752753.54,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 57586090.71,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 12005686.13,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4603532.67,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1110449.23,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 657108.34,
                "vazio": false
              }
            ],
            "total": 171715620.61999997,
            "linha_planilha": 6
          },
          {
            "competencia": "2023-09-01",
            "competencia_label": "09/2023",
            "lags": [
              {
                "col": "0",
                "valor": 82637291.54,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 69764528.65,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 11480884.65,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4280767.68,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1351846.42,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 435223.17000000004,
                "vazio": false
              }
            ],
            "total": 169950542.10999998,
            "linha_planilha": 7
          },
          {
            "competencia": "2023-10-01",
            "competencia_label": "10/2023",
            "lags": [
              {
                "col": "0",
                "valor": 84032464.34,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 63907303.89,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 14122047.14,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4499981.89,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 920138.59,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 598433.95,
                "vazio": false
              }
            ],
            "total": 168080369.79999998,
            "linha_planilha": 8
          },
          {
            "competencia": "2023-11-01",
            "competencia_label": "11/2023",
            "lags": [
              {
                "col": "0",
                "valor": 84116497.95,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 67598798.67,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 13547682.81,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4031712.54,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1585804.25,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 619010.92,
                "vazio": false
              }
            ],
            "total": 171499507.14,
            "linha_planilha": 9
          },
          {
            "competencia": "2023-12-01",
            "competencia_label": "12/2023",
            "lags": [
              {
                "col": "0",
                "valor": 80356186.31,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 68624815.85,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 12148963.24,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 3345635.55,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1318972.0,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 900237.5,
                "vazio": false
              }
            ],
            "total": 166694810.45000002,
            "linha_planilha": 10
          },
          {
            "competencia": "2024-01-01",
            "competencia_label": "01/2024",
            "lags": [
              {
                "col": "0",
                "valor": 107411778.42194384,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 54382039.75,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 13435106.52,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4858673.6,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 879563.17,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 508609.4,
                "vazio": false
              }
            ],
            "total": 181475770.86194384,
            "linha_planilha": 11
          },
          {
            "competencia": "2024-02-01",
            "competencia_label": "02/2024",
            "lags": [
              {
                "col": "0",
                "valor": 101546863.06115124,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 72558215.26405378,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 11401486.19,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4243448.12,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1427196.62,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 455084.39,
                "vazio": false
              }
            ],
            "total": 191632293.64520502,
            "linha_planilha": 12
          },
          {
            "competencia": "2024-03-01",
            "competencia_label": "03/2024",
            "lags": [
              {
                "col": "0",
                "valor": 114096387.47224121,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 66854780.140503705,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 12685249.86031471,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 2890240.03,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1398223.67,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 652540.42,
                "vazio": false
              }
            ],
            "total": 198577421.5930596,
            "linha_planilha": 13
          },
          {
            "competencia": "2024-04-01",
            "competencia_label": "04/2024",
            "lags": [
              {
                "col": "0",
                "valor": 124191128.27215591,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 65031544.00680562,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 13419583.016102647,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4573344.928167377,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1721896.96,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1010317.68,
                "vazio": false
              }
            ],
            "total": 209947814.86323157,
            "linha_planilha": 14
          },
          {
            "competencia": "2024-05-01",
            "competencia_label": "05/2024",
            "lags": [
              {
                "col": "0",
                "valor": 112137621.11549,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 74521645.67990518,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 15148313.641204586,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4915003.835479261,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1842530.6045823419,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1040449.87,
                "vazio": false
              }
            ],
            "total": 209605564.7466614,
            "linha_planilha": 15
          },
          {
            "competencia": "2024-06-01",
            "competencia_label": "06/2024",
            "lags": [
              {
                "col": "0",
                "valor": 112803359.53468743,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 77342576.92622323,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 11112787.076461608,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 3501710.9237613617,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1113099.9644769793,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 227328.94104484902,
                "vazio": false
              }
            ],
            "total": 206100863.36665547,
            "linha_planilha": 16
          },
          {
            "competencia": "2024-07-01",
            "competencia_label": "07/2024",
            "lags": [
              {
                "col": "0",
                "valor": 104313367.807915,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 78099700.80278464,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 14681347.085493222,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4750823.810013754,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1594074.173086114,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 709443.3450070287,
                "vazio": false
              }
            ],
            "total": 204148757.02429974,
            "linha_planilha": 17
          },
          {
            "competencia": "2024-08-01",
            "competencia_label": "08/2024",
            "lags": [
              {
                "col": "0",
                "valor": 837872.7665539238,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 127335514.86791642,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 68050442.76454341,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10661903.680588564,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 3644865.12025308,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1818942.0441952485,
                "vazio": false
              }
            ],
            "total": 212349541.24405065,
            "linha_planilha": 18
          },
          {
            "competencia": "2024-09-01",
            "competencia_label": "09/2024",
            "lags": [
              {
                "col": "0",
                "valor": 575710.1828150504,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 94125786.12950449,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 59174268.985953376,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 12472491.354352783,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 5289844.032851899,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1721262.596261248,
                "vazio": false
              }
            ],
            "total": 173359363.28173882,
            "linha_planilha": 19
          },
          {
            "competencia": "2024-10-01",
            "competencia_label": "10/2024",
            "lags": [
              {
                "col": "0",
                "valor": 448066.0335679445,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 95950747.71789806,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 56888861.37574106,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10200756.242893305,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2262699.994999826,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1562092.9900078427,
                "vazio": false
              }
            ],
            "total": 167313224.35510805,
            "linha_planilha": 20
          },
          {
            "competencia": "2024-11-01",
            "competencia_label": "11/2024",
            "lags": [
              {
                "col": "0",
                "valor": 292343.5946653796,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 102004844.21099597,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 60895125.97460894,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 18225453.333985362,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2645624.5155245913,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 894102.670156082,
                "vazio": false
              }
            ],
            "total": 184957494.29993632,
            "linha_planilha": 21
          },
          {
            "competencia": "2024-12-01",
            "competencia_label": "12/2024",
            "lags": [
              {
                "col": "0",
                "valor": 306723.2700670052,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 84044311.0193451,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 59047795.79983699,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10814484.67681741,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 3619705.4643251146,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1336016.6913057545,
                "vazio": false
              }
            ],
            "total": 159169036.92169738,
            "linha_planilha": 22
          },
          {
            "competencia": "2025-01-01",
            "competencia_label": "01/2025",
            "lags": [
              {
                "col": "0",
                "valor": 142124.79552814065,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 80483185.33702752,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 65696351.04157479,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 20769071.109955028,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 7668642.030549208,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 8042452.397313777,
                "vazio": false
              }
            ],
            "total": 182801826.71194842,
            "linha_planilha": 23
          },
          {
            "competencia": "2025-02-01",
            "competencia_label": "02/2025",
            "lags": [
              {
                "col": "0",
                "valor": 1430790.2030497442,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 110700817.61284366,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 59917256.691431634,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 14872006.288873158,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 4682962.8363079,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 2075604.0624247324,
                "vazio": false
              }
            ],
            "total": 193679437.69493085,
            "linha_planilha": 24
          },
          {
            "competencia": "2025-03-01",
            "competencia_label": "03/2025",
            "lags": [
              {
                "col": "0",
                "valor": 1589657.8041118747,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 95872061.64632449,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 58941461.25815896,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 8611443.077756941,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1733607.00763284,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1572781.1117105337,
                "vazio": false
              }
            ],
            "total": 168321011.90569565,
            "linha_planilha": 25
          },
          {
            "competencia": "2025-04-01",
            "competencia_label": "04/2025",
            "lags": [
              {
                "col": "0",
                "valor": 509154.5950820248,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 88358899.15934168,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 49575972.37489216,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 11981474.84029901,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2912868.2529309858,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 3197008.5178899514,
                "vazio": false
              }
            ],
            "total": 156535377.7404358,
            "linha_planilha": 26
          },
          {
            "competencia": "2025-05-01",
            "competencia_label": "05/2025",
            "lags": [
              {
                "col": "0",
                "valor": 207855.88610479533,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 93474612.36301558,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 65468491.66172643,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 16702603.083656805,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2695096.862014979,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 437050.4912269063,
                "vazio": false
              }
            ],
            "total": 178985710.3477455,
            "linha_planilha": 27
          },
          {
            "competencia": "2025-06-01",
            "competencia_label": "06/2025",
            "lags": [
              {
                "col": "0",
                "valor": 323564.5973187009,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 104593849.27655931,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 62634445.3816816,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 13762345.135924,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 3853329.1428130865,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 8675471.741816174,
                "vazio": false
              }
            ],
            "total": 193843005.27611285,
            "linha_planilha": 28
          },
          {
            "competencia": "2025-07-01",
            "competencia_label": "07/2025",
            "lags": [
              {
                "col": "0",
                "valor": 382422.8212680063,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 101801104.20876756,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 64739112.602217175,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 14441954.0570342,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 3239127.5968491626,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 4428717.480636051,
                "vazio": false
              }
            ],
            "total": 189032438.76677218,
            "linha_planilha": 29
          },
          {
            "competencia": "2025-08-01",
            "competencia_label": "08/2025",
            "lags": [
              {
                "col": "0",
                "valor": 226811.53999999998,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 108088966.26,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 56800769.63999999,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 11513701.11,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2026960.6500000001,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 2752398.5,
                "vazio": false
              }
            ],
            "total": 181409607.70000002,
            "linha_planilha": 30
          },
          {
            "competencia": "2025-09-01",
            "competencia_label": "09/2025",
            "lags": [
              {
                "col": "0",
                "valor": 403143.33999999985,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 108071926.07000005,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 58278151.76,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 11532645.800000006,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1400119.7699999993,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 2901866.7099999995,
                "vazio": false
              }
            ],
            "total": 182587853.45000008,
            "linha_planilha": 31
          },
          {
            "competencia": "2025-10-01",
            "competencia_label": "10/2025",
            "lags": [
              {
                "col": "0",
                "valor": 389037.2599999993,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 117660134.6999996,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 58338190.86999987,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 13493068.80000001,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1812711.8599999999,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1591854.959999999,
                "vazio": false
              }
            ],
            "total": 193284998.4499995,
            "linha_planilha": 32
          },
          {
            "competencia": "2025-11-01",
            "competencia_label": "11/2025",
            "lags": [
              {
                "col": "0",
                "valor": 265639.7200000001,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 118169397.05999964,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 61558745.24999995,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10252819.380000018,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2557988.420000002,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 2440447.6499999957,
                "vazio": false
              }
            ],
            "total": 195245037.47999963,
            "linha_planilha": 33
          },
          {
            "competencia": "2025-12-01",
            "competencia_label": "12/2025",
            "lags": [
              {
                "col": "0",
                "valor": 512598.31999999995,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 112296135.61000007,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 64037699.70000001,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 9740373.120000005,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1585153.3199999998,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1673171.4199999997,
                "vazio": false
              }
            ],
            "total": 189845131.49000007,
            "linha_planilha": 34
          },
          {
            "competencia": "2026-01-01",
            "competencia_label": "01/2026",
            "lags": [
              {
                "col": "0",
                "valor": 253921.4800000001,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 110883562.00999986,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 54220304.169999935,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 14182088.140000014,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1485445.6399999987,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 503744.5899999995,
                "vazio": false
              }
            ],
            "total": 181529066.0299998,
            "linha_planilha": 35
          },
          {
            "competencia": "2026-02-01",
            "competencia_label": "02/2026",
            "lags": [
              {
                "col": "0",
                "valor": 1082824.2399999995,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 116264109.37000002,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 51006519.279999994,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 9616328.000000011,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1164774.6900000002,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1447055.27,
                "vazio": false
              }
            ],
            "total": 180581610.85000002,
            "linha_planilha": 36
          },
          {
            "competencia": "2026-03-01",
            "competencia_label": "03/2026",
            "lags": [
              {
                "col": "0",
                "valor": 992988.8299999994,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 110106783.81999978,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 55789318.86999993,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 11389683.9,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 882151.8699999986,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1575948.1599999978,
                "vazio": false
              }
            ],
            "total": 180736875.44999972,
            "linha_planilha": 37
          },
          {
            "competencia": "2026-04-01",
            "competencia_label": "04/2026",
            "lags": [
              {
                "col": "0",
                "valor": 1614562.48,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 133940041.33000009,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 51490478.53999997,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 12237738.420000006,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1999569.8100000026,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 2360382.3199999994,
                "vazio": false
              }
            ],
            "total": 203642772.90000007,
            "linha_planilha": 38
          },
          {
            "competencia": "2026-05-01",
            "competencia_label": "05/2026",
            "lags": [
              {
                "col": "0",
                "valor": 1237021.2699999998,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 123165477.74000005,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 60925041.02000007,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 7638063.719999999,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1530916.9599999995,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 2359693.2800000003,
                "vazio": false
              }
            ],
            "total": 196856213.99000013,
            "linha_planilha": 39
          },
          {
            "competencia": "2026-06-01",
            "competencia_label": "06/2026",
            "lags": [
              {
                "col": "0",
                "valor": 1586817.0799999987,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 126011338.28999996,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 60688257.17000001,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10899281.469999991,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1450324.7600000002,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1336288.2799999993,
                "vazio": false
              }
            ],
            "total": 201972307.04999995,
            "linha_planilha": 40
          },
          {
            "competencia": "2026-07-01",
            "competencia_label": "07/2026",
            "lags": [
              {
                "col": "0",
                "valor": 2867706.429999999,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 129851930.76000014,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 60628140.480000064,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 9542309.430000003,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1966595.8600000017,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 3699646.84,
                "vazio": false
              }
            ],
            "total": 208556329.80000022,
            "linha_planilha": 41
          }
        ]
      },
      "triangulo_ocorrencia": {
        "colunas": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5+"
        ],
        "linhas": [
          {
            "competencia": "2023-08-01",
            "competencia_label": "08/2023",
            "lags": [
              {
                "col": "0",
                "valor": 95752753.54,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 69764528.65,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 14122047.14,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4031712.54,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1318972.0,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 527259.0691719654,
                "vazio": false
              }
            ],
            "total": 185517272.93917194,
            "linha_planilha": 6
          },
          {
            "competencia": "2023-09-01",
            "competencia_label": "09/2023",
            "lags": [
              {
                "col": "0",
                "valor": 82637291.54,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 63907303.89,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 13547682.81,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 3345635.55,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 879563.17,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 292048.9723207147,
                "vazio": false
              }
            ],
            "total": 164609525.9323207,
            "linha_planilha": 7
          },
          {
            "competencia": "2023-10-01",
            "competencia_label": "10/2023",
            "lags": [
              {
                "col": "0",
                "valor": 84032464.34,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 67598798.67,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 12148963.24,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4858673.6,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1427196.62,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 723246.9065695977,
                "vazio": false
              }
            ],
            "total": 170789343.3765696,
            "linha_planilha": 8
          },
          {
            "competencia": "2023-11-01",
            "competencia_label": "11/2023",
            "lags": [
              {
                "col": "0",
                "valor": 84116497.95,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 68624815.85,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 13435106.52,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4243448.12,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1398223.67,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1031327.2001527849,
                "vazio": false
              }
            ],
            "total": 172849419.3101528,
            "linha_planilha": 9
          },
          {
            "competencia": "2023-12-01",
            "competencia_label": "12/2023",
            "lags": [
              {
                "col": "0",
                "valor": 80356186.31,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 54382039.75,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 11401486.19,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 2890240.03,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1721896.96,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 800255.6627809514,
                "vazio": false
              }
            ],
            "total": 151552104.90278095,
            "linha_planilha": 10
          },
          {
            "competencia": "2024-01-01",
            "competencia_label": "01/2024",
            "lags": [
              {
                "col": "0",
                "valor": 107411778.42194384,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 72558215.26405378,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 12685249.86031471,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4573344.928167377,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1842530.6045823419,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 566549.4765381336,
                "vazio": false
              }
            ],
            "total": 199637668.55560014,
            "linha_planilha": 11
          },
          {
            "competencia": "2024-02-01",
            "competencia_label": "02/2024",
            "lags": [
              {
                "col": "0",
                "valor": 101546863.06115124,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 66854780.140503705,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 13419583.016102647,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4915003.835479261,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1113099.9644769793,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1085243.004664373,
                "vazio": false
              }
            ],
            "total": 188934573.02237818,
            "linha_planilha": 12
          },
          {
            "competencia": "2024-03-01",
            "competencia_label": "03/2024",
            "lags": [
              {
                "col": "0",
                "valor": 114096387.47224121,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 65031544.00680562,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 15148313.641204586,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 3501710.9237613617,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1594074.173086114,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1632112.4637213587,
                "vazio": false
              }
            ],
            "total": 201004142.68082026,
            "linha_planilha": 13
          },
          {
            "competencia": "2024-04-01",
            "competencia_label": "04/2024",
            "lags": [
              {
                "col": "0",
                "valor": 124191128.27215591,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 74521645.67990518,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 11112787.076461608,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4750823.810013754,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 3644865.12025308,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1508732.525573642,
                "vazio": false
              }
            ],
            "total": 219729982.48436317,
            "linha_planilha": 14
          },
          {
            "competencia": "2024-05-01",
            "competencia_label": "05/2024",
            "lags": [
              {
                "col": "0",
                "valor": 112137621.11549,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 77342576.92622323,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 14681347.085493222,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10661903.680588564,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 5289844.032851899,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 2277715.0638350984,
                "vazio": false
              }
            ],
            "total": 222391007.904482,
            "linha_planilha": 15
          },
          {
            "competencia": "2024-06-01",
            "competencia_label": "06/2024",
            "lags": [
              {
                "col": "0",
                "valor": 112803359.53468743,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 78099700.80278464,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 68050442.76454341,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 12472491.354352783,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2262699.994999826,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 2401083.859558894,
                "vazio": false
              }
            ],
            "total": 276089778.310927,
            "linha_planilha": 16
          },
          {
            "competencia": "2024-07-01",
            "competencia_label": "07/2024",
            "lags": [
              {
                "col": "0",
                "valor": 104313367.807915,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 127335514.86791642,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 59174268.985953376,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10200756.242893305,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2645624.5155245913,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 2949629.0389724607,
                "vazio": false
              }
            ],
            "total": 306619161.4591751,
            "linha_planilha": 17
          },
          {
            "competencia": "2024-08-01",
            "competencia_label": "08/2024",
            "lags": [
              {
                "col": "0",
                "valor": 837872.7665539238,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 94125786.12950449,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 56888861.37574106,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 18225453.333985362,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 3619705.4643251146,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 7456170.046914811,
                "vazio": false
              }
            ],
            "total": 181153849.11702475,
            "linha_planilha": 18
          },
          {
            "competencia": "2024-09-01",
            "competencia_label": "09/2024",
            "lags": [
              {
                "col": "0",
                "valor": 575710.1828150504,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 95950747.71789806,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 60895125.97460894,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10814484.67681741,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 7668642.030549208,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 3292344.447944002,
                "vazio": false
              }
            ],
            "total": 179197055.03063267,
            "linha_planilha": 19
          },
          {
            "competencia": "2024-10-01",
            "competencia_label": "10/2024",
            "lags": [
              {
                "col": "0",
                "valor": 448066.0335679445,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 102004844.21099597,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 59047795.79983699,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 20769071.109955028,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 4682962.8363079,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 5360867.298090897,
                "vazio": false
              }
            ],
            "total": 192313607.28875476,
            "linha_planilha": 20
          },
          {
            "competencia": "2024-11-01",
            "competencia_label": "11/2024",
            "lags": [
              {
                "col": "0",
                "valor": 292343.5946653796,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 84044311.0193451,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 65696351.04157479,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 14872006.288873158,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1733607.00763284,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 4060356.023544919,
                "vazio": false
              }
            ],
            "total": 170698974.9756362,
            "linha_planilha": 21
          },
          {
            "competencia": "2024-12-01",
            "competencia_label": "12/2024",
            "lags": [
              {
                "col": "0",
                "valor": 306723.2700670052,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 80483185.33702752,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 59917256.691431634,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 8611443.077756941,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2912868.2529309858,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 2418488.1843452803,
                "vazio": false
              }
            ],
            "total": 154649964.81355938,
            "linha_planilha": 22
          },
          {
            "competencia": "2025-01-01",
            "competencia_label": "01/2025",
            "lags": [
              {
                "col": "0",
                "valor": 142124.79552814065,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 110700817.61284366,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 58941461.25815896,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 11981474.84029901,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2695096.862014979,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 4181779.7962819603,
                "vazio": false
              }
            ],
            "total": 188642755.1651267,
            "linha_planilha": 23
          },
          {
            "competencia": "2025-02-01",
            "competencia_label": "02/2025",
            "lags": [
              {
                "col": "0",
                "valor": 1430790.2030497442,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 95872061.64632449,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 49575972.37489216,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 16702603.083656805,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 3853329.1428130865,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 3378452.7991095493,
                "vazio": false
              }
            ],
            "total": 170813209.24984586,
            "linha_planilha": 24
          },
          {
            "competencia": "2025-03-01",
            "competencia_label": "03/2025",
            "lags": [
              {
                "col": "0",
                "valor": 1589657.8041118747,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 88358899.15934168,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 65468491.66172643,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 13762345.135924,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 3239127.5968491626,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 2663547.4600000004,
                "vazio": false
              }
            ],
            "total": 175082068.81795317,
            "linha_planilha": 25
          },
          {
            "competencia": "2025-04-01",
            "competencia_label": "04/2025",
            "lags": [
              {
                "col": "0",
                "valor": 509154.5950820248,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 93474612.36301558,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 62634445.3816816,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 14441954.0570342,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2026960.6500000001,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1841536.6699999997,
                "vazio": false
              }
            ],
            "total": 174928663.7168134,
            "linha_planilha": 26
          },
          {
            "competencia": "2025-05-01",
            "competencia_label": "05/2025",
            "lags": [
              {
                "col": "0",
                "valor": 207855.88610479533,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 104593849.27655931,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 64739112.602217175,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 11513701.11,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1400119.7699999993,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 2210073.2399999984,
                "vazio": false
              }
            ],
            "total": 184664711.8848813,
            "linha_planilha": 27
          },
          {
            "competencia": "2025-06-01",
            "competencia_label": "06/2025",
            "lags": [
              {
                "col": "0",
                "valor": 323564.5973187009,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 101801104.20876756,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 56800769.63999999,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 11532645.800000006,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1812711.8599999999,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 2483927.9299999964,
                "vazio": false
              }
            ],
            "total": 174754724.0360863,
            "linha_planilha": 28
          },
          {
            "competencia": "2025-07-01",
            "competencia_label": "07/2025",
            "lags": [
              {
                "col": "0",
                "valor": 382422.8212680063,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 108088966.26,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 58278151.76,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 13493068.80000001,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2557988.420000002,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1479489.7599999998,
                "vazio": false
              }
            ],
            "total": 184280087.82126802,
            "linha_planilha": 29
          },
          {
            "competencia": "2025-08-01",
            "competencia_label": "08/2025",
            "lags": [
              {
                "col": "0",
                "valor": 226811.53999999998,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 108071926.07000005,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 58338190.86999987,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10252819.380000018,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1585153.3199999998,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 656438.1699999996,
                "vazio": false
              }
            ],
            "total": 179131339.34999993,
            "linha_planilha": 30
          },
          {
            "competencia": "2025-09-01",
            "competencia_label": "09/2025",
            "lags": [
              {
                "col": "0",
                "valor": 403143.33999999985,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 117660134.6999996,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 61558745.24999995,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 9740373.120000005,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1485445.6399999987,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 622820.5400000002,
                "vazio": false
              }
            ],
            "total": 191470662.58999953,
            "linha_planilha": 31
          },
          {
            "competencia": "2025-10-01",
            "competencia_label": "10/2025",
            "lags": [
              {
                "col": "0",
                "valor": 389037.2599999993,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 118169397.05999964,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 64037699.70000001,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 14182088.140000014,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1164774.6900000002,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1110540.2799999977,
                "vazio": false
              }
            ],
            "total": 199053537.12999967,
            "linha_planilha": 32
          },
          {
            "competencia": "2025-11-01",
            "competencia_label": "11/2025",
            "lags": [
              {
                "col": "0",
                "valor": 265639.7200000001,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 112296135.61000007,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 54220304.169999935,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 9616328.000000011,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 882151.8699999986,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1188520.1899999995,
                "vazio": false
              }
            ],
            "total": 178469079.56,
            "linha_planilha": 33
          },
          {
            "competencia": "2025-12-01",
            "competencia_label": "12/2025",
            "lags": [
              {
                "col": "0",
                "valor": 512598.31999999995,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 110883562.00999986,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 51006519.279999994,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 11389683.9,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1999569.8100000026,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1543274.88,
                "vazio": false
              }
            ],
            "total": 177335208.19999984,
            "linha_planilha": 34
          },
          {
            "competencia": "2026-01-01",
            "competencia_label": "01/2026",
            "lags": [
              {
                "col": "0",
                "valor": 253921.4800000001,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 116264109.37000002,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 55789318.86999993,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 12237738.420000006,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1530916.9599999995,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1255901.4899999998,
                "vazio": false
              }
            ],
            "total": 187331906.59,
            "linha_planilha": 35
          },
          {
            "competencia": "2026-02-01",
            "competencia_label": "02/2026",
            "lags": [
              {
                "col": "0",
                "valor": 1082824.2399999995,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 110106783.81999978,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 51490478.53999997,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 7638063.719999999,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1450324.7600000002,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 1455296.77,
                "vazio": false
              }
            ],
            "total": 173223771.84999976,
            "linha_planilha": 36
          },
          {
            "competencia": "2026-03-01",
            "competencia_label": "03/2026",
            "lags": [
              {
                "col": "0",
                "valor": 992988.8299999994,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 133940041.33000009,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 60925041.02000007,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10899281.469999991,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1966595.8600000017,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 208723948.51000017,
            "linha_planilha": 37
          },
          {
            "competencia": "2026-04-01",
            "competencia_label": "04/2026",
            "lags": [
              {
                "col": "0",
                "valor": 1614562.48,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 123165477.74000005,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 60688257.17000001,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 9542309.430000003,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 195010606.82000008,
            "linha_planilha": 38
          },
          {
            "competencia": "2026-05-01",
            "competencia_label": "05/2026",
            "lags": [
              {
                "col": "0",
                "valor": 1237021.2699999998,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 126011338.28999996,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 60628140.480000064,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 187876500.04000002,
            "linha_planilha": 39
          },
          {
            "competencia": "2026-06-01",
            "competencia_label": "06/2026",
            "lags": [
              {
                "col": "0",
                "valor": 1586817.0799999987,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 129851930.76000014,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 131438747.84000014,
            "linha_planilha": 40
          },
          {
            "competencia": "2026-07-01",
            "competencia_label": "07/2026",
            "lags": [
              {
                "col": "0",
                "valor": 2867706.429999999,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2867706.429999999,
            "linha_planilha": 41
          }
        ]
      },
      "proporcoes": {
        "colunas": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5+"
        ],
        "linhas": []
      },
      "fatores": {
        "colunas": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "linhas": [
          {
            "competencia": "2024-07-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.3560687994429103
              },
              {
                "col": "2",
                "valor": 0.12860319550719018
              },
              {
                "col": "3",
                "valor": 0.061166341965247145
              },
              {
                "col": "4",
                "valor": 0.02982599075735859
              },
              {
                "col": "5",
                "valor": 0.01678328674324209
              }
            ],
            "total": 0.5924476144159484,
            "linha_planilha": 75
          },
          {
            "competencia": "2024-08-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.39427254686846575
              },
              {
                "col": "2",
                "valor": 0.2177713563636476
              },
              {
                "col": "3",
                "valor": 0.07566439469979311
              },
              {
                "col": "4",
                "valor": 0.036477528007844956
              },
              {
                "col": "5",
                "valor": 0.02199923619060727
              }
            ],
            "total": 0.7461850621303587,
            "linha_planilha": 76
          },
          {
            "competencia": "2024-09-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.4248882849191557
              },
              {
                "col": "2",
                "valor": 0.29878233506972524
              },
              {
                "col": "3",
                "valor": 0.10088410910697256
              },
              {
                "col": "4",
                "valor": 0.05004084550261078
              },
              {
                "col": "5",
                "valor": 0.02685183276362276
              }
            ],
            "total": 0.9014474073620871,
            "linha_planilha": 77
          },
          {
            "competencia": "2024-10-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.4666949949341347
              },
              {
                "col": "2",
                "valor": 0.383767369765743
              },
              {
                "col": "3",
                "valor": 0.118945151273567
              },
              {
                "col": "4",
                "valor": 0.05370421510259228
              },
              {
                "col": "5",
                "valor": 0.030180137776986898
              }
            ],
            "total": 1.0532918688530237,
            "linha_planilha": 78
          },
          {
            "competencia": "2024-11-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5006484322478255
              },
              {
                "col": "2",
                "valor": 0.47168774838100636
              },
              {
                "col": "3",
                "valor": 0.1562749068109469
              },
              {
                "col": "4",
                "valor": 0.05765471622969597
              },
              {
                "col": "5",
                "valor": 0.030190715945821612
              }
            ],
            "total": 1.2164565196152963,
            "linha_planilha": 79
          },
          {
            "competencia": "2024-12-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5280688901147848
              },
              {
                "col": "2",
                "valor": 0.5788406238484252
              },
              {
                "col": "3",
                "valor": 0.18285500007920374
              },
              {
                "col": "4",
                "valor": 0.06921586486875761
              },
              {
                "col": "5",
                "valor": 0.036510847169303154
              }
            ],
            "total": 1.3954912260804744,
            "linha_planilha": 80
          },
          {
            "competencia": "2025-01-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5407140386640716
              },
              {
                "col": "2",
                "valor": 0.6847588856280166
              },
              {
                "col": "3",
                "valor": 0.2309665898957332
              },
              {
                "col": "4",
                "valor": 0.09308345693748805
              },
              {
                "col": "5",
                "valor": 0.07118321430916277
              }
            ],
            "total": 1.6207061854344722,
            "linha_planilha": 81
          },
          {
            "competencia": "2025-02-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5345521324742757
              },
              {
                "col": "2",
                "valor": 0.6814780817044995
              },
              {
                "col": "3",
                "valor": 0.2469307764026631
              },
              {
                "col": "4",
                "valor": 0.09863361007028126
              },
              {
                "col": "5",
                "valor": 0.07364468265857398
              }
            ],
            "total": 1.6352392833102933,
            "linha_planilha": 82
          },
          {
            "competencia": "2025-03-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5387552761241241
              },
              {
                "col": "2",
                "valor": 0.6842879590673627
              },
              {
                "col": "3",
                "valor": 0.23714228048926128
              },
              {
                "col": "4",
                "valor": 0.08563659148799757
              },
              {
                "col": "5",
                "valor": 0.07329309692033342
              }
            ],
            "total": 1.619115204089079,
            "linha_planilha": 83
          },
          {
            "competencia": "2025-04-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5370476835974839
              },
              {
                "col": "2",
                "valor": 0.6773526403441319
              },
              {
                "col": "3",
                "valor": 0.2446968567515836
              },
              {
                "col": "4",
                "valor": 0.0890070092689376
              },
              {
                "col": "5",
                "valor": 0.08186777553888147
              }
            ],
            "total": 1.6299719655010185,
            "linha_planilha": 84
          },
          {
            "competencia": "2025-05-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5319268197001242
              },
              {
                "col": "2",
                "valor": 0.6900431948734707
              },
              {
                "col": "3",
                "valor": 0.24170763433424614
              },
              {
                "col": "4",
                "valor": 0.08970871715503498
              },
              {
                "col": "5",
                "valor": 0.08013965879248111
              }
            ],
            "total": 1.6335260248553574,
            "linha_planilha": 85
          },
          {
            "competencia": "2025-06-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5338869672187071
              },
              {
                "col": "2",
                "valor": 0.674446693985463
              },
              {
                "col": "3",
                "valor": 0.24213831111435483
              },
              {
                "col": "4",
                "valor": 0.08768290200458337
              },
              {
                "col": "5",
                "valor": 0.11171625271419487
              }
            ],
            "total": 1.6498711270373032,
            "linha_planilha": 86
          },
          {
            "competencia": "2025-07-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5505396204582936
              },
              {
                "col": "2",
                "valor": 0.6687851707823964
              },
              {
                "col": "3",
                "valor": 0.22317304058380943
              },
              {
                "col": "4",
                "valor": 0.07077765681243449
              },
              {
                "col": "5",
                "valor": 0.09434788207677161
              }
            ],
            "total": 1.6076233707137058,
            "linha_planilha": 87
          },
          {
            "competencia": "2025-08-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5544185371106011
              },
              {
                "col": "2",
                "valor": 0.6706322413699756
              },
              {
                "col": "3",
                "valor": 0.21630436370645922
              },
              {
                "col": "4",
                "valor": 0.06164430699276086
              },
              {
                "col": "5",
                "valor": 0.09859981468044668
              }
            ],
            "total": 1.6015992638602434,
            "linha_planilha": 88
          },
          {
            "competencia": "2025-09-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5583820319490093
              },
              {
                "col": "2",
                "valor": 0.6605671236900253
              },
              {
                "col": "3",
                "valor": 0.22154979939774286
              },
              {
                "col": "4",
                "valor": 0.05959937832145884
              },
              {
                "col": "5",
                "valor": 0.10343975290222436
              }
            ],
            "total": 1.6035380862604607,
            "linha_planilha": 89
          },
          {
            "competencia": "2025-10-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5662281274328457
              },
              {
                "col": "2",
                "valor": 0.6545346948094037
              },
              {
                "col": "3",
                "valor": 0.2183267195606683
              },
              {
                "col": "4",
                "valor": 0.05371016085448723
              },
              {
                "col": "5",
                "valor": 0.09287172630845734
              }
            ],
            "total": 1.5856714289658622,
            "linha_planilha": 90
          },
          {
            "competencia": "2025-11-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5798693606731369
              },
              {
                "col": "2",
                "valor": 0.6382745761527521
              },
              {
                "col": "3",
                "valor": 0.19815837593864766
              },
              {
                "col": "4",
                "valor": 0.05245798438723855
              },
              {
                "col": "5",
                "valor": 0.10036418005009194
              }
            ],
            "total": 1.5691244772018669,
            "linha_planilha": 91
          },
          {
            "competencia": "2025-12-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.588726074452432
              },
              {
                "col": "2",
                "valor": 0.6430105014085874
              },
              {
                "col": "3",
                "valor": 0.18819403673196056
              },
              {
                "col": "4",
                "valor": 0.0446243771792905
              },
              {
                "col": "5",
                "valor": 0.06977366982189982
              }
            ],
            "total": 1.5343286595941703,
            "linha_planilha": 92
          },
          {
            "competencia": "2026-01-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6007377023755577
              },
              {
                "col": "2",
                "valor": 0.6285849787168744
              },
              {
                "col": "3",
                "valor": 0.18875680147942392
              },
              {
                "col": "4",
                "valor": 0.03868089072992491
              },
              {
                "col": "5",
                "valor": 0.0527781205731799
              }
            ],
            "total": 1.5095384938749608,
            "linha_planilha": 93
          },
          {
            "competencia": "2026-02-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6084598599264095
              },
              {
                "col": "2",
                "valor": 0.6187298513464808
              },
              {
                "col": "3",
                "valor": 0.1838276242544123
              },
              {
                "col": "4",
                "valor": 0.035638600458889634
              },
              {
                "col": "5",
                "valor": 0.047005555473129235
              }
            ],
            "total": 1.4936614914593216,
            "linha_planilha": 94
          },
          {
            "competencia": "2026-03-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6112791959146348
              },
              {
                "col": "2",
                "valor": 0.6153117878612272
              },
              {
                "col": "3",
                "valor": 0.183748581250599
              },
              {
                "col": "4",
                "valor": 0.03384956666634657
              },
              {
                "col": "5",
                "valor": 0.04117033077985845
              }
            ],
            "total": 1.485359462472666,
            "linha_planilha": 95
          },
          {
            "competencia": "2026-04-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6200708060950242
              },
              {
                "col": "2",
                "valor": 0.5975766947963002
              },
              {
                "col": "3",
                "valor": 0.17873858193622463
              },
              {
                "col": "4",
                "valor": 0.03420024929588436
              },
              {
                "col": "5",
                "valor": 0.04418929745280863
              }
            ],
            "total": 1.474775629576242,
            "linha_planilha": 96
          },
          {
            "competencia": "2026-05-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6235980444837238
              },
              {
                "col": "2",
                "valor": 0.5956086164462521
              },
              {
                "col": "3",
                "valor": 0.17156217339489532
              },
              {
                "col": "4",
                "valor": 0.030526211985238465
              },
              {
                "col": "5",
                "valor": 0.04377015511323268
              }
            ],
            "total": 1.4650652014233425,
            "linha_planilha": 97
          },
          {
            "competencia": "2026-06-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6289701028722774
              },
              {
                "col": "2",
                "valor": 0.5834531058982222
              },
              {
                "col": "3",
                "valor": 0.17278118804599601
              },
              {
                "col": "4",
                "valor": 0.02973210039361593
              },
              {
                "col": "5",
                "valor": 0.041836000216051855
              }
            ],
            "total": 1.4567724974261633,
            "linha_planilha": 98
          },
          {
            "competencia": "2026-07-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6306496647860877
              },
              {
                "col": "2",
                "valor": 0.5809338256743672
              },
              {
                "col": "3",
                "valor": 0.15692483068308472
              },
              {
                "col": "4",
                "valor": 0.030688322750328796
              },
              {
                "col": "5",
                "valor": 0.054501883192003685
              }
            ],
            "total": 1.453698527085872,
            "linha_planilha": 99
          }
        ]
      },
      "peona_serie": [
        {
          "competencia": "2024-02-01",
          "total_avisado": 191632293.64520502,
          "media_nm": null,
          "fator_peona": null,
          "peona": 0.0,
          "variacao_r": null,
          "variacao_pct": null,
          "linha_planilha": 104
        },
        {
          "competencia": "2024-03-01",
          "total_avisado": 198577421.5930596,
          "media_nm": null,
          "fator_peona": null,
          "peona": 0.0,
          "variacao_r": null,
          "variacao_pct": null,
          "linha_planilha": 105
        },
        {
          "competencia": "2024-04-01",
          "total_avisado": 209947814.86323157,
          "media_nm": null,
          "fator_peona": null,
          "peona": 0.0,
          "variacao_r": null,
          "variacao_pct": null,
          "linha_planilha": 106
        },
        {
          "competencia": "2024-05-01",
          "total_avisado": 209605564.7466614,
          "media_nm": null,
          "fator_peona": null,
          "peona": 0.0,
          "variacao_r": null,
          "variacao_pct": null,
          "linha_planilha": 107
        },
        {
          "competencia": "2024-06-01",
          "total_avisado": 206100863.36665547,
          "media_nm": null,
          "fator_peona": null,
          "peona": 0.0,
          "variacao_r": null,
          "variacao_pct": null,
          "linha_planilha": 108
        },
        {
          "competencia": "2024-07-01",
          "total_avisado": 204148757.02429974,
          "media_nm": 203335452.53985214,
          "fator_peona": 0.5924476144159484,
          "peona": 120465603.7834227,
          "variacao_r": null,
          "variacao_pct": null,
          "linha_planilha": 109
        },
        {
          "competencia": "2024-08-01",
          "total_avisado": 212349541.24405065,
          "media_nm": 206788327.13965976,
          "fator_peona": 0.7461850621303587,
          "peona": 154302360.73453996,
          "variacao_r": 33836756.95111726,
          "variacao_pct": 0.2808831391568847,
          "linha_planilha": 110
        },
        {
          "competencia": "2024-09-01",
          "total_avisado": 173359363.28173882,
          "media_nm": 202585317.42110625,
          "fator_peona": 0.9014474073620871,
          "peona": 182620009.15888166,
          "variacao_r": 28317648.42434171,
          "variacao_pct": 0.1835205131634965,
          "linha_planilha": 111
        },
        {
          "competencia": "2024-10-01",
          "total_avisado": 167313224.35510805,
          "media_nm": 195479552.33641902,
          "fator_peona": 1.0532918688530237,
          "peona": 205897023.00297925,
          "variacao_r": 23277013.844097584,
          "variacao_pct": 0.12746146466264974,
          "linha_planilha": 112
        },
        {
          "competencia": "2024-11-01",
          "total_avisado": 184957494.29993632,
          "media_nm": 191371540.59529817,
          "fator_peona": 1.2164565196152963,
          "peona": 232795158.2259738,
          "variacao_r": 26898135.222994566,
          "variacao_pct": 0.13063877675689062,
          "linha_planilha": 113
        },
        {
          "competencia": "2024-12-01",
          "total_avisado": 159169036.92169738,
          "media_nm": 183549569.52113846,
          "fator_peona": 1.3954912260804744,
          "peona": 256141813.8175968,
          "variacao_r": 23346655.59162298,
          "variacao_pct": 0.10028840706798725,
          "linha_planilha": 114
        },
        {
          "competencia": "2025-01-01",
          "total_avisado": 182801826.71194842,
          "media_nm": 179991747.80241325,
          "fator_peona": 1.6207061854344722,
          "peona": 291713738.99053276,
          "variacao_r": 35571925.17293596,
          "variacao_pct": 0.138875900981428,
          "linha_planilha": 115
        },
        {
          "competencia": "2025-02-01",
          "total_avisado": 193679437.69493085,
          "media_nm": 176880063.87756,
          "fator_peona": 1.6352392833102933,
          "peona": 289241228.8870201,
          "variacao_r": -2472510.103512645,
          "variacao_pct": -0.008475809579859717,
          "linha_planilha": 116
        },
        {
          "competencia": "2025-03-01",
          "total_avisado": 168321011.90569565,
          "media_nm": 176040338.64821947,
          "fator_peona": 1.619115204089079,
          "peona": 285029588.83832246,
          "variacao_r": -4211640.04869765,
          "variacao_pct": -0.014560994865440713,
          "linha_planilha": 117
        },
        {
          "competencia": "2025-04-01",
          "total_avisado": 156535377.7404358,
          "media_nm": 174244030.8791074,
          "fator_peona": 1.6299719655010185,
          "peona": 284012885.48883885,
          "variacao_r": -1016703.3494836092,
          "variacao_pct": -0.003567009844933411,
          "linha_planilha": 118
        },
        {
          "competencia": "2025-05-01",
          "total_avisado": 178985710.3477455,
          "media_nm": 173248733.55374226,
          "fator_peona": 1.6335260248553574,
          "peona": 283006315.0332696,
          "variacao_r": -1006570.4555692673,
          "variacao_pct": -0.0035441013665163945,
          "linha_planilha": 119
        },
        {
          "competencia": "2025-06-01",
          "total_avisado": 193843005.27611285,
          "media_nm": 179027728.2794782,
          "fator_peona": 1.6498711270373032,
          "peona": 295372679.8273908,
          "variacao_r": 12366364.794121206,
          "variacao_pct": 0.04369642703085064,
          "linha_planilha": 120
        },
        {
          "competencia": "2025-07-01",
          "total_avisado": 189032438.76677218,
          "media_nm": 180066163.62194884,
          "fator_peona": 1.6076233707137058,
          "peona": 289478572.91340303,
          "variacao_r": -5894106.913987756,
          "variacao_pct": -0.01995481409259703,
          "linha_planilha": 121
        },
        {
          "competencia": "2025-08-01",
          "total_avisado": 181409607.70000002,
          "media_nm": 178021191.956127,
          "fator_peona": 1.6015992638602434,
          "peona": 285118609.9884561,
          "variacao_r": -4359962.924946964,
          "variacao_pct": -0.015061435743125795,
          "linha_planilha": 122
        },
        {
          "competencia": "2025-09-01",
          "total_avisado": 182587853.45000008,
          "media_nm": 180398998.88017774,
          "fator_peona": 1.6035380862604607,
          "peona": 289276665.4276232,
          "variacao_r": 4158055.439167142,
          "variacao_pct": 0.014583598872537573,
          "linha_planilha": 123
        },
        {
          "competencia": "2025-10-01",
          "total_avisado": 193284998.4499995,
          "media_nm": 186523935.66510502,
          "fator_peona": 1.5856714289658622,
          "peona": 295765675.6024236,
          "variacao_r": 6489010.174800396,
          "variacao_pct": 0.022431847951538186,
          "linha_planilha": 124
        },
        {
          "competencia": "2025-11-01",
          "total_avisado": 195245037.47999963,
          "media_nm": 189233823.52048072,
          "fator_peona": 1.5691244772018669,
          "peona": 296931424.4004847,
          "variacao_r": 1165748.7980610728,
          "variacao_pct": 0.003941460738088098,
          "linha_planilha": 125
        },
        {
          "competencia": "2025-12-01",
          "total_avisado": 189845131.49000007,
          "media_nm": 188567511.22279525,
          "fator_peona": 1.5343286595941703,
          "peona": 289324536.7374801,
          "variacao_r": -7606887.663004577,
          "variacao_pct": -0.025618331499817404,
          "linha_planilha": 126
        },
        {
          "competencia": "2026-01-01",
          "total_avisado": 181529066.0299998,
          "media_nm": 187316949.09999987,
          "fator_peona": 1.5095384938749608,
          "peona": 282762145.2216665,
          "variacao_r": -6562391.515813589,
          "variacao_pct": -0.022681766260868486,
          "linha_planilha": 127
        },
        {
          "competencia": "2026-02-01",
          "total_avisado": 180581610.85000002,
          "media_nm": 187178949.62499985,
          "fator_peona": 1.4936614914593216,
          "peona": 279581989.0666665,
          "variacao_r": -3180156.155000031,
          "variacao_pct": -0.011246753530275377,
          "linha_planilha": 128
        },
        {
          "competencia": "2026-03-01",
          "total_avisado": 180736875.44999972,
          "media_nm": 186870453.29166642,
          "fator_peona": 1.485359462472666,
          "peona": 277569796.0533331,
          "variacao_r": -2012193.0133333802,
          "variacao_pct": -0.007197148214199034,
          "linha_planilha": 129
        },
        {
          "competencia": "2026-04-01",
          "total_avisado": 203642772.90000007,
          "media_nm": 188596749.0333332,
          "fator_peona": 1.474775629576242,
          "peona": 278137889.2916665,
          "variacao_r": 568093.2383334041,
          "variacao_pct": 0.002046668068395485,
          "linha_planilha": 130
        },
        {
          "competencia": "2026-05-01",
          "total_avisado": 196856213.99000013,
          "media_nm": 188865278.45166662,
          "fator_peona": 1.4650652014233425,
          "peona": 276699947.21666664,
          "variacao_r": -1437942.0749998689,
          "variacao_pct": -0.005169889218120782,
          "linha_planilha": 131
        },
        {
          "competencia": "2026-06-01",
          "total_avisado": 201972307.04999995,
          "media_nm": 190886474.3783333,
          "fator_peona": 1.4567724974261633,
          "peona": 278078166.00499994,
          "variacao_r": 1378218.7883332968,
          "variacao_pct": 0.0049809145328607585,
          "linha_planilha": 132
        },
        {
          "competencia": "2026-07-01",
          "total_avisado": 208556329.80000022,
          "media_nm": 195391018.34000003,
          "fator_peona": 1.453698527085872,
          "peona": 284039635.56666666,
          "variacao_r": 5961469.561666727,
          "variacao_pct": 0.021438107303827447,
          "linha_planilha": 133
        }
      ],
      "runoff_aux": [
        {
          "competencia": "2023-08-01",
          "runoff_puro": 116418198.75000004,
          "avisado_mes": 171715620.61999997,
          "ocorrido_mes": 185517272.93917194,
          "linha_planilha": 6
        },
        {
          "competencia": "2023-09-01",
          "runoff_puro": 111240217.99000002,
          "avisado_mes": 169950542.10999998,
          "ocorrido_mes": 164609525.9323207,
          "linha_planilha": 7
        },
        {
          "competencia": "2023-10-01",
          "runoff_puro": 113878485.08000001,
          "avisado_mes": 168080369.79999998,
          "ocorrido_mes": 170789343.3765696,
          "linha_planilha": 8
        },
        {
          "competencia": "2023-11-01",
          "runoff_puro": 115207387.73,
          "avisado_mes": 171499507.14,
          "ocorrido_mes": 172849419.3101528,
          "linha_planilha": 9
        },
        {
          "competencia": "2023-12-01",
          "runoff_puro": 100304876.39000002,
          "avisado_mes": 166694810.45000002,
          "ocorrido_mes": 151552104.90278095,
          "linha_planilha": 10
        },
        {
          "competencia": "2024-01-01",
          "runoff_puro": 118127553.54816307,
          "avisado_mes": 181475770.86194384,
          "ocorrido_mes": 199637668.55560014,
          "linha_planilha": 11
        },
        {
          "competencia": "2024-02-01",
          "runoff_puro": 115054033.2656789,
          "avisado_mes": 191632293.64520502,
          "ocorrido_mes": 188934573.02237818,
          "linha_planilha": 12
        },
        {
          "competencia": "2024-03-01",
          "runoff_puro": 117667583.93391341,
          "avisado_mes": 198577421.5930596,
          "ocorrido_mes": 201004142.68082026,
          "linha_planilha": 13
        },
        {
          "competencia": "2024-04-01",
          "runoff_puro": 127662281.62573265,
          "avisado_mes": 209947814.86323157,
          "ocorrido_mes": 219729982.48436317,
          "linha_planilha": 14
        },
        {
          "competencia": "2024-05-01",
          "runoff_puro": 139732102.70972607,
          "avisado_mes": 209605564.7466614,
          "ocorrido_mes": 222391007.904482,
          "linha_planilha": 15
        },
        {
          "competencia": "2024-06-01",
          "runoff_puro": 208214036.46459478,
          "avisado_mes": 206100863.36665547,
          "ocorrido_mes": 276089778.310927,
          "linha_planilha": 16
        },
        {
          "competencia": "2024-07-01",
          "runoff_puro": 309070828.5518033,
          "avisado_mes": 204148757.02429974,
          "ocorrido_mes": 306619161.4591751,
          "linha_planilha": 17
        },
        {
          "competencia": "2024-08-01",
          "runoff_puro": 278461418.7751765,
          "avisado_mes": 212349541.24405065,
          "ocorrido_mes": 181153849.11702475,
          "linha_planilha": 18
        },
        {
          "competencia": "2024-09-01",
          "runoff_puro": 283082370.13855106,
          "avisado_mes": 173359363.28173882,
          "ocorrido_mes": 179197055.03063267,
          "linha_planilha": 19
        },
        {
          "competencia": "2024-10-01",
          "runoff_puro": 304294666.8858174,
          "avisado_mes": 167313224.35510805,
          "ocorrido_mes": 192313607.28875476,
          "linha_planilha": 20
        },
        {
          "competencia": "2024-11-01",
          "runoff_puro": 289172800.0558623,
          "avisado_mes": 184957494.29993632,
          "ocorrido_mes": 170698974.9756362,
          "linha_planilha": 21
        },
        {
          "competencia": "2024-12-01",
          "runoff_puro": 282672290.254606,
          "avisado_mes": 159169036.92169738,
          "ocorrido_mes": 154649964.81355938,
          "linha_planilha": 22
        },
        {
          "competencia": "2025-01-01",
          "runoff_puro": 293006910.6533184,
          "avisado_mes": 182801826.71194842,
          "ocorrido_mes": 188642755.1651267,
          "linha_planilha": 23
        },
        {
          "competencia": "2025-02-01",
          "runoff_puro": 271190946.8897599,
          "avisado_mes": 193679437.69493085,
          "ocorrido_mes": 170813209.24984586,
          "linha_planilha": 24
        },
        {
          "competencia": "2025-03-01",
          "runoff_puro": 278040854.8420174,
          "avisado_mes": 168321011.90569565,
          "ocorrido_mes": 175082068.81795317,
          "linha_planilha": 25
        },
        {
          "competencia": "2025-04-01",
          "runoff_puro": 297494470.8583949,
          "avisado_mes": 156535377.7404358,
          "ocorrido_mes": 174928663.7168134,
          "linha_planilha": 26
        },
        {
          "competencia": "2025-05-01",
          "runoff_puro": 302555254.11553067,
          "avisado_mes": 178985710.3477455,
          "ocorrido_mes": 184664711.8848813,
          "linha_planilha": 27
        },
        {
          "competencia": "2025-06-01",
          "runoff_puro": 283423492.59550405,
          "avisado_mes": 193843005.27611285,
          "ocorrido_mes": 174754724.0360863,
          "linha_planilha": 28
        },
        {
          "competencia": "2025-07-01",
          "runoff_puro": 278864823.31,
          "avisado_mes": 189032438.76677218,
          "ocorrido_mes": 184280087.82126802,
          "linha_planilha": 29
        },
        {
          "competencia": "2025-08-01",
          "runoff_puro": 276433861.38,
          "avisado_mes": 181409607.70000002,
          "ocorrido_mes": 179131339.34999993,
          "linha_planilha": 30
        },
        {
          "competencia": "2025-09-01",
          "runoff_puro": 286140905.2499994,
          "avisado_mes": 182587853.45000008,
          "ocorrido_mes": 191470662.58999953,
          "linha_planilha": 31
        },
        {
          "competencia": "2025-10-01",
          "runoff_puro": 292374851.8099996,
          "avisado_mes": 193284998.4499995,
          "ocorrido_mes": 199053537.12999967,
          "linha_planilha": 32
        },
        {
          "competencia": "2025-11-01",
          "runoff_puro": 276770756.02000004,
          "avisado_mes": 195245037.47999963,
          "ocorrido_mes": 178469079.56,
          "linha_planilha": 33
        },
        {
          "competencia": "2025-12-01",
          "runoff_puro": 265077251.12999982,
          "avisado_mes": 189845131.49000007,
          "ocorrido_mes": 177335208.19999984,
          "linha_planilha": 34
        },
        {
          "competencia": "2026-01-01",
          "runoff_puro": 270960478.47999996,
          "avisado_mes": 181529066.0299998,
          "ocorrido_mes": 187331906.59,
          "linha_planilha": 35
        },
        {
          "competencia": "2026-02-01",
          "runoff_puro": 265846989.54999968,
          "avisado_mes": 180581610.85000002,
          "ocorrido_mes": 173223771.84999976,
          "linha_planilha": 36
        },
        {
          "competencia": "2026-03-01",
          "runoff_puro": 293834062.61,
          "avisado_mes": 180736875.44999972,
          "ocorrido_mes": 208723948.51000017,
          "linha_planilha": 37
        },
        {
          "competencia": "2026-04-01",
          "runoff_puro": 285201896.5300001,
          "avisado_mes": 203642772.90000007,
          "ocorrido_mes": 195010606.82000008,
          "linha_planilha": 38
        },
        {
          "competencia": "2026-05-01",
          "runoff_puro": 276222182.58000004,
          "avisado_mes": 196856213.99000013,
          "ocorrido_mes": 187876500.04000002,
          "linha_planilha": 39
        },
        {
          "competencia": "2026-06-01",
          "runoff_puro": 205688623.3700002,
          "avisado_mes": 201972307.04999995,
          "ocorrido_mes": 131438747.84000014,
          "linha_planilha": 40
        },
        {
          "competencia": "2026-07-01",
          "runoff_puro": 0.0,
          "avisado_mes": 208556329.80000022,
          "ocorrido_mes": 2867706.429999999,
          "linha_planilha": 41
        }
      ],
      "formulas": {
        "celula_triangulo": "SUMIFS(Base_Dados[Despesa MH]; atraso; competência de aviso)",
        "total_avisado": "SUM(lags da linha)",
        "proporcao_Mk": "SUM(coluna j na janela) / SUM(totais na janela)",
        "fator_Ik": "SUM(j × Mk_j)  — coluna Total do bloco Fator Médio",
        "base_Bk": "AVERAGE(totais da janela de 6 meses)",
        "peona": "Ik × Bk"
      },
      "interpretacao": {
        "eixo": "aviso",
        "texto_j": "Cada coluna indica há quantos meses o evento ocorreu em relação ao mês de aviso. Coluna 0 = ocorreu no próprio mês do aviso; coluna 1 = ocorreu 1 mês antes do aviso; coluna 5+ agrupa atrasos ≥ 5 meses."
      },
      "titulo_aviso": "Abertura das Despesas por Data de Aviso",
      "titulo_ocorrencia": "Abertura das Despesas por Data de Ocorrência"
    },
    "12": {
      "aba": "MH 12",
      "janela": 12,
      "arquivo": "PEONA_INPUT.xlsx",
      "intervalo_triangulo_aviso": "B5:O41",
      "n_lags": 12,
      "colunas_lag": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11+"
      ],
      "triangulo_aviso": {
        "colunas": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11+"
        ],
        "linhas": [
          {
            "competencia": "2023-08-01",
            "competencia_label": "08/2023",
            "lags": [
              {
                "col": "0",
                "valor": 95752753.54,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 57586090.71,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 12005686.13,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4603532.67,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1110449.23,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 464964.16,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 190545.77,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 1598.41,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 171715620.61999997,
            "linha_planilha": 6
          },
          {
            "competencia": "2023-09-01",
            "competencia_label": "09/2023",
            "lags": [
              {
                "col": "0",
                "valor": 82637291.54,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 69764528.65,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 11480884.65,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4280767.68,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1351846.42,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 405656.65,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 29505.13,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 61.39,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 169950542.10999998,
            "linha_planilha": 7
          },
          {
            "competencia": "2023-10-01",
            "competencia_label": "10/2023",
            "lags": [
              {
                "col": "0",
                "valor": 84032464.34,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 63907303.89,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 14122047.14,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4499981.89,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 920138.59,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 552770.73,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 45641.59,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 21.63,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 168080369.79999998,
            "linha_planilha": 8
          },
          {
            "competencia": "2023-11-01",
            "competencia_label": "11/2023",
            "lags": [
              {
                "col": "0",
                "valor": 84116497.95,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 67598798.67,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 13547682.81,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4031712.54,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1585804.25,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 569522.38,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 48994.63,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 493.91,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 171499507.14,
            "linha_planilha": 9
          },
          {
            "competencia": "2023-12-01",
            "competencia_label": "12/2023",
            "lags": [
              {
                "col": "0",
                "valor": 80356186.31,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 68624815.85,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 12148963.24,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 3345635.55,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1318972.0,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 766579.72,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 99820.91,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 33661.87,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 175.0,
                "vazio": false
              }
            ],
            "total": 166694810.45000002,
            "linha_planilha": 10
          },
          {
            "competencia": "2024-01-01",
            "competencia_label": "01/2024",
            "lags": [
              {
                "col": "0",
                "valor": 107411778.42194384,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 54382039.75,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 13435106.52,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4858673.6,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 879563.17,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 341417.65,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 71928.68,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 36713.94,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 31366.87,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 26744.76,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 437.5,
                "vazio": false
              }
            ],
            "total": 181475770.86194384,
            "linha_planilha": 11
          },
          {
            "competencia": "2024-02-01",
            "competencia_label": "02/2024",
            "lags": [
              {
                "col": "0",
                "valor": 101546863.06115124,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 72558215.26405378,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 11401486.19,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4243448.12,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1427196.62,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 220322.05,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 178531.92,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 600.84,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 55629.58,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 191632293.64520505,
            "linha_planilha": 12
          },
          {
            "competencia": "2024-03-01",
            "competencia_label": "03/2024",
            "lags": [
              {
                "col": "0",
                "valor": 114096387.47224121,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 66854780.140503705,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 12685249.86031471,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 2890240.03,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1398223.67,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 584612.29,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 60114.73,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 4095.57,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 3717.83,
                "vazio": false
              }
            ],
            "total": 198577421.5930596,
            "linha_planilha": 13
          },
          {
            "competencia": "2024-04-01",
            "competencia_label": "04/2024",
            "lags": [
              {
                "col": "0",
                "valor": 124191128.27215591,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 65031544.00680562,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 13419583.016102647,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4573344.928167377,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1721896.96,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 917394.41,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 89642.5,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 1989.27,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 329.01,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 962.49,
                "vazio": false
              }
            ],
            "total": 209947814.86323157,
            "linha_planilha": 14
          },
          {
            "competencia": "2024-05-01",
            "competencia_label": "05/2024",
            "lags": [
              {
                "col": "0",
                "valor": 112137621.11549,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 74521645.67990518,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 15148313.641204586,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4915003.835479261,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1842530.6045823419,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 764893.65,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 102948.73,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 13159.47,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 159448.02,
                "vazio": false
              }
            ],
            "total": 209605564.7466614,
            "linha_planilha": 15
          },
          {
            "competencia": "2024-06-01",
            "competencia_label": "06/2024",
            "lags": [
              {
                "col": "0",
                "valor": 112803359.53468743,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 77342576.92622323,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 11112787.076461608,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 3501710.9237613617,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1113099.9644769793,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 183736.65104484902,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 22903.79,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 20601.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 87.5,
                "vazio": false
              }
            ],
            "total": 206100863.36665547,
            "linha_planilha": 16
          },
          {
            "competencia": "2024-07-01",
            "competencia_label": "07/2024",
            "lags": [
              {
                "col": "0",
                "valor": 104313367.807915,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 78099700.80278464,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 14681347.085493222,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4750823.810013754,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1594074.173086114,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 572853.6359820287,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 100041.04489166666,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 10755.653615,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 9945.123346666665,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 10578.891796666667,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 5085.96186,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 183.033515,
                "vazio": false
              }
            ],
            "total": 204148757.02429974,
            "linha_planilha": 17
          },
          {
            "competencia": "2024-08-01",
            "competencia_label": "08/2024",
            "lags": [
              {
                "col": "0",
                "valor": 837872.7665539238,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 127335514.86791642,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 68050442.76454341,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10661903.680588564,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 3644865.12025308,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1221452.1342507517,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 300233.4400539181,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 240072.91721344364,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 1588.1612132749137,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 849.2658508101335,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 2551.5789824379503,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 52194.5466306121,
                "vazio": false
              }
            ],
            "total": 212349541.24405068,
            "linha_planilha": 18
          },
          {
            "competencia": "2024-09-01",
            "competencia_label": "09/2024",
            "lags": [
              {
                "col": "0",
                "valor": 575710.1828150504,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 94125786.12950449,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 59174268.985953376,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 12472491.354352783,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 5289844.032851899,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1184836.3111482735,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 275273.36288106476,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 163699.8086398197,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 26868.429002522742,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 100.3753022576899,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 170.25297760553323,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 70314.05630970419,
                "vazio": false
              }
            ],
            "total": 173359363.28173885,
            "linha_planilha": 19
          },
          {
            "competencia": "2024-10-01",
            "competencia_label": "10/2024",
            "lags": [
              {
                "col": "0",
                "valor": 448066.0335679445,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 95950747.71789806,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 56888861.37574106,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10200756.242893305,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2262699.994999826,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1273527.8317179233,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 190318.09210835345,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 80660.11774267768,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 13440.344553812673,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 109.17894399401627,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 4037.424941081509,
                "vazio": false
              }
            ],
            "total": 167313224.35510802,
            "linha_planilha": 20
          },
          {
            "competencia": "2024-11-01",
            "competencia_label": "11/2024",
            "lags": [
              {
                "col": "0",
                "valor": 292343.5946653796,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 102004844.21099597,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 60895125.97460894,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 18225453.333985362,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2645624.5155245913,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 713713.0081092954,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 162567.64455656978,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 10081.440112236864,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 3196.2832563032207,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 1998.0524701349239,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 2546.2416515418777,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 184957494.29993632,
            "linha_planilha": 21
          },
          {
            "competencia": "2024-12-01",
            "competencia_label": "12/2024",
            "lags": [
              {
                "col": "0",
                "valor": 306723.2700670052,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 84044311.0193451,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 59047795.79983699,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10814484.67681741,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 3619705.4643251146,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1056376.8993780036,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 212923.93367728786,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 54854.270572276386,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 8197.382000871195,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 3324.792791716038,
                "vazio": false
              },
              {
                "col": "10",
                "valor": -302.60302786976877,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 642.0159134692778,
                "vazio": false
              }
            ],
            "total": 159169036.92169735,
            "linha_planilha": 22
          },
          {
            "competencia": "2025-01-01",
            "competencia_label": "01/2025",
            "lags": [
              {
                "col": "0",
                "valor": 142124.79552814065,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 80483185.33702752,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 65696351.04157479,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 20769071.109955028,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 7668642.030549208,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 5849651.140149036,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 1609650.7254261712,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 407384.8625970387,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 147306.59185650904,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 9624.956562047777,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 3237.9279676351343,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 15596.192755339098,
                "vazio": false
              }
            ],
            "total": 182801826.71194842,
            "linha_planilha": 23
          },
          {
            "competencia": "2025-02-01",
            "competencia_label": "02/2025",
            "lags": [
              {
                "col": "0",
                "valor": 1430790.2030497442,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 110700817.61284366,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 59917256.691431634,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 14872006.288873158,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 4682962.8363079,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1307154.5741289884,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 635635.2357069168,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 115069.6203367785,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 6112.769501019775,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 2204.2653600030667,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 2328.7177334908283,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 7098.879657535033,
                "vazio": false
              }
            ],
            "total": 193679437.69493088,
            "linha_planilha": 24
          },
          {
            "competencia": "2025-03-01",
            "competencia_label": "03/2025",
            "lags": [
              {
                "col": "0",
                "valor": 1589657.8041118747,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 95872061.64632449,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 58941461.25815896,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 8611443.077756941,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1733607.00763284,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1323129.2701729552,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 171375.71769865838,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 73108.83795409118,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 4729.328671245609,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 156.9572507918854,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 64.28620857890783,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 216.713754212466,
                "vazio": false
              }
            ],
            "total": 168321011.90569565,
            "linha_planilha": 25
          },
          {
            "competencia": "2025-04-01",
            "competencia_label": "04/2025",
            "lags": [
              {
                "col": "0",
                "valor": 509154.5950820248,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 88358899.15934168,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 49575972.37489216,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 11981474.84029901,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2912868.2529309858,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1548341.166650256,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 982676.9370686965,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 371900.20677339635,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 294090.207397603,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 156535377.74043584,
            "linha_planilha": 26
          },
          {
            "competencia": "2025-05-01",
            "competencia_label": "05/2025",
            "lags": [
              {
                "col": "0",
                "valor": 207855.88610479533,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 93474612.36301558,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 65468491.66172643,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 16702603.083656805,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2695096.862014979,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 160005.2874148898,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 226113.48582715512,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 33158.134071985194,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 2002.792322439165,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 15770.791590437018,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 178985710.34774545,
            "linha_planilha": 27
          },
          {
            "competencia": "2025-06-01",
            "competencia_label": "06/2025",
            "lags": [
              {
                "col": "0",
                "valor": 323564.5973187009,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 104593849.27655931,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 62634445.3816816,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 13762345.135924,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 3853329.1428130865,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 2433854.0066267904,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 1085329.762892392,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 1325007.697924562,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 2486268.073147371,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 825640.8744642596,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 341113.13076160173,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 178258.19599919778,
                "vazio": false
              }
            ],
            "total": 193843005.27611285,
            "linha_planilha": 28
          },
          {
            "competencia": "2025-07-01",
            "competencia_label": "07/2025",
            "lags": [
              {
                "col": "0",
                "valor": 382422.8212680063,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 101801104.20876756,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 64739112.602217175,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 14441954.0570342,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 3239127.5968491626,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 2353513.4591095494,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 817160.8896551705,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 310390.8140379993,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 126029.83314294554,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 165378.11362988924,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 134016.26255625996,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 522228.1085042372,
                "vazio": false
              }
            ],
            "total": 189032438.76677215,
            "linha_planilha": 29
          },
          {
            "competencia": "2025-08-01",
            "competencia_label": "08/2025",
            "lags": [
              {
                "col": "0",
                "valor": 226811.53999999998,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 108088966.26,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 56800769.63999999,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 11513701.11,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2026960.6500000001,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1449008.8599999999,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 414664.7,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 57211.03999999992,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 2940.890000000007,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 62.66000000000204,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 1868.000000000001,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 826642.3500000001,
                "vazio": false
              }
            ],
            "total": 181409607.7,
            "linha_planilha": 30
          },
          {
            "competencia": "2025-09-01",
            "competencia_label": "09/2025",
            "lags": [
              {
                "col": "0",
                "valor": 403143.33999999985,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 108071926.07000005,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 58278151.76,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 11532645.800000006,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1400119.7699999993,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 923886.4299999998,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 364231.82,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 95830.85999999996,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 74561.88999999998,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 250215.61,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 473684.3200000002,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 719455.78,
                "vazio": false
              }
            ],
            "total": 182587853.45000008,
            "linha_planilha": 31
          },
          {
            "competencia": "2025-10-01",
            "competencia_label": "10/2025",
            "lags": [
              {
                "col": "0",
                "valor": 389037.2599999993,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 117660134.6999996,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 58338190.86999987,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 13493068.80000001,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1812711.8599999999,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 804851.8699999993,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 296154.0899999999,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 440583.62999999995,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 3236.799999999998,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 46656.7599999999,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 183.2,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 188.61000000000013,
                "vazio": false
              }
            ],
            "total": 193284998.4499995,
            "linha_planilha": 32
          },
          {
            "competencia": "2025-11-01",
            "competencia_label": "11/2025",
            "lags": [
              {
                "col": "0",
                "valor": 265639.7200000001,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 118169397.05999964,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 61558745.24999995,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10252819.380000018,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2557988.420000002,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1375103.2699999968,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 886254.7599999994,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 58192.48999999993,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 3146.620000000002,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 3739.8799999999974,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 114010.6299999999,
                "vazio": false
              }
            ],
            "total": 195245037.47999963,
            "linha_planilha": 33
          },
          {
            "competencia": "2025-12-01",
            "competencia_label": "12/2025",
            "lags": [
              {
                "col": "0",
                "valor": 512598.31999999995,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 112296135.61000007,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 64037699.70000001,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 9740373.120000005,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1585153.3199999998,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1107618.7099999997,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 306994.99999999994,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 29062.17,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 82817.06,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 58946.01999999999,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 36590.02,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 51142.439999999995,
                "vazio": false
              }
            ],
            "total": 189845131.4900001,
            "linha_planilha": 34
          },
          {
            "competencia": "2026-01-01",
            "competencia_label": "01/2026",
            "lags": [
              {
                "col": "0",
                "valor": 253921.4800000001,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 110883562.00999986,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 54220304.169999935,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 14182088.140000014,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1485445.6399999987,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 440416.9699999995,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 21567.39999999998,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 6119.9200000000055,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 392.6299999999992,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 4375.840000000001,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 30871.829999999998,
                "vazio": false
              }
            ],
            "total": 181529066.0299998,
            "linha_planilha": 35
          },
          {
            "competencia": "2026-02-01",
            "competencia_label": "02/2026",
            "lags": [
              {
                "col": "0",
                "valor": 1082824.2399999995,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 116264109.37000002,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 51006519.279999994,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 9616328.000000011,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1164774.6900000002,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 462808.6700000001,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 90438.25999999995,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 122934.49999999997,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 248347.95999999993,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 238597.73999999987,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 75204.89,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 208723.25,
                "vazio": false
              }
            ],
            "total": 180581610.85,
            "linha_planilha": 36
          },
          {
            "competencia": "2026-03-01",
            "competencia_label": "03/2026",
            "lags": [
              {
                "col": "0",
                "valor": 992988.8299999994,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 110106783.81999978,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 55789318.86999993,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 11389683.9,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 882151.8699999986,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 862033.4299999976,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 83200.36000000009,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 20905.659999999993,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 113023.78999999995,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 20605.72,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 15457.619999999992,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 460721.5800000002,
                "vazio": false
              }
            ],
            "total": 180736875.44999975,
            "linha_planilha": 37
          },
          {
            "competencia": "2026-04-01",
            "competencia_label": "04/2026",
            "lags": [
              {
                "col": "0",
                "valor": 1614562.48,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 133940041.33000009,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 51490478.53999997,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 12237738.420000006,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1999569.8100000026,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 931724.8199999993,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 225342.47999999992,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 8182.86000000001,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 30651.160000000036,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 67168.26999999997,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 463365.8300000001,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 633946.9,
                "vazio": false
              }
            ],
            "total": 203642772.9000001,
            "linha_planilha": 38
          },
          {
            "competencia": "2026-05-01",
            "competencia_label": "05/2026",
            "lags": [
              {
                "col": "0",
                "valor": 1237021.2699999998,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 123165477.74000005,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 60925041.02000007,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 7638063.719999999,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1530916.9599999995,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 989423.3799999999,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 97272.70000000029,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 1541.4000000000008,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 1603.5900000000065,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 15550.58999999999,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 20450.719999999983,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 1233850.9000000001,
                "vazio": false
              }
            ],
            "total": 196856213.99000013,
            "linha_planilha": 39
          },
          {
            "competencia": "2026-06-01",
            "competencia_label": "06/2026",
            "lags": [
              {
                "col": "0",
                "valor": 1586817.0799999987,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 126011338.28999996,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 60688257.17000001,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10899281.469999991,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1450324.7600000002,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 730265.7799999993,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 249533.49999999994,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 8731.82,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 1223.09,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 34667.780000000006,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 31096.16,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 280770.14999999997,
                "vazio": false
              }
            ],
            "total": 201972307.04999995,
            "linha_planilha": 40
          },
          {
            "competencia": "2026-07-01",
            "competencia_label": "07/2026",
            "lags": [
              {
                "col": "0",
                "valor": 2867706.429999999,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 129851930.76000014,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 60628140.480000064,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 9542309.430000003,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1966595.8600000017,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1455296.77,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 525635.7100000005,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 304318.0000000001,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 150790.84999999995,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 20399.880000000012,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 32357.28000000001,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 1210848.3499999994,
                "vazio": false
              }
            ],
            "total": 208556329.80000022,
            "linha_planilha": 41
          }
        ]
      },
      "triangulo_ocorrencia": {
        "colunas": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11+"
        ],
        "linhas": [
          {
            "competencia": "2023-08-01",
            "competencia_label": "08/2023",
            "lags": [
              {
                "col": "0",
                "valor": 95752753.54,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 69764528.65,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 14122047.14,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4031712.54,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1318972.0,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 341417.65,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 178531.92,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 4095.57,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 329.01,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 2884.919171965223,
                "vazio": false
              }
            ],
            "total": 185517272.9391719,
            "linha_planilha": 6
          },
          {
            "competencia": "2023-09-01",
            "competencia_label": "09/2023",
            "lags": [
              {
                "col": "0",
                "valor": 82637291.54,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 63907303.89,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 13547682.81,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 3345635.55,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 879563.17,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 220322.05,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 60114.73,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 1989.27,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 5085.96186,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 4536.960460714719,
                "vazio": false
              }
            ],
            "total": 164609525.93232074,
            "linha_planilha": 7
          },
          {
            "competencia": "2023-10-01",
            "competencia_label": "10/2023",
            "lags": [
              {
                "col": "0",
                "valor": 84032464.34,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 67598798.67,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 12148963.24,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4858673.6,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1427196.62,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 584612.29,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 89642.5,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 13159.47,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 20601.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 10578.891796666667,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 2551.5789824379503,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 2101.175790493051,
                "vazio": false
              }
            ],
            "total": 170789343.3765696,
            "linha_planilha": 8
          },
          {
            "competencia": "2023-11-01",
            "competencia_label": "11/2023",
            "lags": [
              {
                "col": "0",
                "valor": 84116497.95,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 68624815.85,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 13435106.52,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4243448.12,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1398223.67,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 917394.41,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 102948.73,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 9945.123346666665,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 849.2658508101335,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 170.25297760553323,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 19.41797770253731,
                "vazio": false
              }
            ],
            "total": 172849419.31015277,
            "linha_planilha": 9
          },
          {
            "competencia": "2023-12-01",
            "competencia_label": "12/2023",
            "lags": [
              {
                "col": "0",
                "valor": 80356186.31,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 54382039.75,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 11401486.19,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 2890240.03,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1721896.96,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 764893.65,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 22903.79,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 10755.653615,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 1588.1612132749137,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 100.3753022576899,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 14.032650418641037,
                "vazio": false
              }
            ],
            "total": 151552104.90278095,
            "linha_planilha": 10
          },
          {
            "competencia": "2024-01-01",
            "competencia_label": "01/2024",
            "lags": [
              {
                "col": "0",
                "valor": 107411778.42194384,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 72558215.26405378,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 12685249.86031471,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4573344.928167377,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1842530.6045823419,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 183736.65104484902,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 100041.04489166666,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 240072.91721344364,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 26868.429002522742,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 109.17894399401627,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 2546.2416515418777,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 13175.013790115638,
                "vazio": false
              }
            ],
            "total": 199637668.5556001,
            "linha_planilha": 11
          },
          {
            "competencia": "2024-02-01",
            "competencia_label": "02/2024",
            "lags": [
              {
                "col": "0",
                "valor": 101546863.06115124,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 66854780.140503705,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 13419583.016102647,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4915003.835479261,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1113099.9644769793,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 572853.6359820287,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 300233.4400539181,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 163699.8086398197,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 13440.344553812673,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 1998.0524701349239,
                "vazio": false
              },
              {
                "col": "10",
                "valor": -302.60302786976877,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 33320.325992528095,
                "vazio": false
              }
            ],
            "total": 188934573.02237818,
            "linha_planilha": 12
          },
          {
            "competencia": "2024-03-01",
            "competencia_label": "03/2024",
            "lags": [
              {
                "col": "0",
                "valor": 114096387.47224121,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 65031544.00680562,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 15148313.641204586,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 3501710.9237613617,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1594074.173086114,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1221452.1342507517,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 275273.36288106476,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 80660.11774267768,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 3196.2832563032207,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 3324.792791716038,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 3237.9279676351343,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 44967.844831210095,
                "vazio": false
              }
            ],
            "total": 201004142.68082026,
            "linha_planilha": 13
          },
          {
            "competencia": "2024-04-01",
            "competencia_label": "04/2024",
            "lags": [
              {
                "col": "0",
                "valor": 124191128.27215591,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 74521645.67990518,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 11112787.076461608,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 4750823.810013754,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 3644865.12025308,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1184836.3111482735,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 190318.09210835345,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 10081.440112236864,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 8197.382000871195,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 9624.956562047777,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 2328.7177334908283,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 103345.62590836822,
                "vazio": false
              }
            ],
            "total": 219729982.48436317,
            "linha_planilha": 14
          },
          {
            "competencia": "2024-05-01",
            "competencia_label": "05/2024",
            "lags": [
              {
                "col": "0",
                "valor": 112137621.11549,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 77342576.92622323,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 14681347.085493222,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10661903.680588564,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 5289844.032851899,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1273527.8317179233,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 162567.64455656978,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 54854.270572276386,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 147306.59185650904,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 2204.2653600030667,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 64.28620857890783,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 637190.173563238,
                "vazio": false
              }
            ],
            "total": 222391007.904482,
            "linha_planilha": 15
          },
          {
            "competencia": "2024-06-01",
            "competencia_label": "06/2024",
            "lags": [
              {
                "col": "0",
                "valor": 112803359.53468743,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 78099700.80278464,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 68050442.76454341,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 12472491.354352783,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2262699.994999826,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 713713.0081092954,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 212923.93367728786,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 407384.8625970387,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 6112.769501019775,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 156.9572507918854,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 1060792.3284234602,
                "vazio": false
              }
            ],
            "total": 276089778.310927,
            "linha_planilha": 16
          },
          {
            "competencia": "2024-07-01",
            "competencia_label": "07/2024",
            "lags": [
              {
                "col": "0",
                "valor": 104313367.807915,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 127335514.86791642,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 59174268.985953376,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10200756.242893305,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2645624.5155245913,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1056376.8993780036,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 1609650.7254261712,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 115069.6203367785,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 4729.328671245609,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 163802.4651602621,
                "vazio": false
              }
            ],
            "total": 306619161.4591751,
            "linha_planilha": 17
          },
          {
            "competencia": "2024-08-01",
            "competencia_label": "08/2024",
            "lags": [
              {
                "col": "0",
                "valor": 837872.7665539238,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 94125786.12950449,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 56888861.37574106,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 18225453.333985362,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 3619705.4643251146,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 5849651.140149036,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 635635.2357069168,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 73108.83795409118,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 294090.207397603,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 15770.791590437018,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 341113.13076160173,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 246800.70335512294,
                "vazio": false
              }
            ],
            "total": 181153849.11702475,
            "linha_planilha": 18
          },
          {
            "competencia": "2024-09-01",
            "competencia_label": "09/2024",
            "lags": [
              {
                "col": "0",
                "valor": 575710.1828150504,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 95950747.71789806,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 60895125.97460894,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10814484.67681741,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 7668642.030549208,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1307154.5741289884,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 171375.71769865838,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 371900.20677339635,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 2002.792322439165,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 825640.8744642596,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 134016.26255625996,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 480254.02000000014,
                "vazio": false
              }
            ],
            "total": 179197055.03063267,
            "linha_planilha": 19
          },
          {
            "competencia": "2024-10-01",
            "competencia_label": "10/2024",
            "lags": [
              {
                "col": "0",
                "valor": 448066.0335679445,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 102004844.21099597,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 59047795.79983699,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 20769071.109955028,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 4682962.8363079,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1323129.2701729552,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 982676.9370686965,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 33158.134071985194,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 2486268.073147371,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 165378.11362988924,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 1868.000000000001,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 368388.7700000001,
                "vazio": false
              }
            ],
            "total": 192313607.28875473,
            "linha_planilha": 20
          },
          {
            "competencia": "2024-11-01",
            "competencia_label": "11/2024",
            "lags": [
              {
                "col": "0",
                "valor": 292343.5946653796,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 84044311.0193451,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 65696351.04157479,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 14872006.288873158,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1733607.00763284,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1548341.166650256,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 226113.48582715512,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 1325007.697924562,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 126029.83314294554,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 62.66000000000204,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 473684.3200000002,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 361116.86000000004,
                "vazio": false
              }
            ],
            "total": 170698974.9756362,
            "linha_planilha": 21
          },
          {
            "competencia": "2024-12-01",
            "competencia_label": "12/2024",
            "lags": [
              {
                "col": "0",
                "valor": 306723.2700670052,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 80483185.33702752,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 59917256.691431634,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 8611443.077756941,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2912868.2529309858,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 160005.2874148898,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 1085329.762892392,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 310390.8140379993,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 2940.890000000007,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 250215.61,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 183.2,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 609422.6199999996,
                "vazio": false
              }
            ],
            "total": 154649964.81355938,
            "linha_planilha": 22
          },
          {
            "competencia": "2025-01-01",
            "competencia_label": "01/2025",
            "lags": [
              {
                "col": "0",
                "valor": 142124.79552814065,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 110700817.61284366,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 58941461.25815896,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 11981474.84029901,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2695096.862014979,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 2433854.0066267904,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 817160.8896551705,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 57211.03999999992,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 74561.88999999998,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 46656.7599999999,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 752335.2099999996,
                "vazio": false
              }
            ],
            "total": 188642755.16512668,
            "linha_planilha": 23
          },
          {
            "competencia": "2025-02-01",
            "competencia_label": "02/2025",
            "lags": [
              {
                "col": "0",
                "valor": 1430790.2030497442,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 95872061.64632449,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 49575972.37489216,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 16702603.083656805,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 3853329.1428130865,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 2353513.4591095494,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 414664.7,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 95830.85999999996,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 3236.799999999998,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 3739.8799999999974,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 36590.02,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 470877.07999999996,
                "vazio": false
              }
            ],
            "total": 170813209.2498459,
            "linha_planilha": 24
          },
          {
            "competencia": "2025-03-01",
            "competencia_label": "03/2025",
            "lags": [
              {
                "col": "0",
                "valor": 1589657.8041118747,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 88358899.15934168,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 65468491.66172643,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 13762345.135924,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 3239127.5968491626,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1449008.8599999999,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 364231.82,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 440583.62999999995,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 3146.620000000002,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 58946.01999999999,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 4375.840000000001,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 343254.67000000004,
                "vazio": false
              }
            ],
            "total": 175082068.81795317,
            "linha_planilha": 25
          },
          {
            "competencia": "2025-04-01",
            "competencia_label": "04/2025",
            "lags": [
              {
                "col": "0",
                "valor": 509154.5950820248,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 93474612.36301558,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 62634445.3816816,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 14441954.0570342,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2026960.6500000001,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 923886.4299999998,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 296154.0899999999,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 58192.48999999993,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 82817.06,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 392.6299999999992,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 75204.89,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 404889.08000000013,
                "vazio": false
              }
            ],
            "total": 174928663.71681342,
            "linha_planilha": 26
          },
          {
            "competencia": "2025-05-01",
            "competencia_label": "05/2025",
            "lags": [
              {
                "col": "0",
                "valor": 207855.88610479533,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 104593849.27655931,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 64739112.602217175,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 11513701.11,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1400119.7699999993,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 804851.8699999993,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 886254.7599999994,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 29062.17,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 238597.73999999987,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 15457.619999999992,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 235849.07999999996,
                "vazio": false
              }
            ],
            "total": 184664711.8848813,
            "linha_planilha": 27
          },
          {
            "competencia": "2025-06-01",
            "competencia_label": "06/2025",
            "lags": [
              {
                "col": "0",
                "valor": 323564.5973187009,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 101801104.20876756,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 56800769.63999999,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 11532645.800000006,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1812711.8599999999,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1375103.2699999968,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 306994.99999999994,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 6119.9200000000055,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 248347.95999999993,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 20605.72,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 463365.8300000001,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 63390.229999999974,
                "vazio": false
              }
            ],
            "total": 174754724.0360863,
            "linha_planilha": 28
          },
          {
            "competencia": "2025-07-01",
            "competencia_label": "07/2025",
            "lags": [
              {
                "col": "0",
                "valor": 382422.8212680063,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 108088966.26,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 58278151.76,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 13493068.80000001,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 2557988.420000002,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1107618.7099999997,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 21567.39999999998,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 122934.49999999997,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 113023.78999999995,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 67168.26999999997,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 20450.719999999983,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 26726.37,
                "vazio": false
              }
            ],
            "total": 184280087.82126805,
            "linha_planilha": 29
          },
          {
            "competencia": "2025-08-01",
            "competencia_label": "08/2025",
            "lags": [
              {
                "col": "0",
                "valor": 226811.53999999998,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 108071926.07000005,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 58338190.86999987,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10252819.380000018,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1585153.3199999998,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 440416.9699999995,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 90438.25999999995,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 20905.659999999993,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 30651.160000000036,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 15550.58999999999,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 31096.16,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 27379.370000000006,
                "vazio": false
              }
            ],
            "total": 179131339.34999993,
            "linha_planilha": 30
          },
          {
            "competencia": "2025-09-01",
            "competencia_label": "09/2025",
            "lags": [
              {
                "col": "0",
                "valor": 403143.33999999985,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 117660134.6999996,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 61558745.24999995,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 9740373.120000005,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1485445.6399999987,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 462808.6700000001,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 83200.36000000009,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 8182.86000000001,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 1603.5900000000065,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 34667.780000000006,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 32357.28000000001,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 191470662.58999956,
            "linha_planilha": 31
          },
          {
            "competencia": "2025-10-01",
            "competencia_label": "10/2025",
            "lags": [
              {
                "col": "0",
                "valor": 389037.2599999993,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 118169397.05999964,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 64037699.70000001,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 14182088.140000014,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1164774.6900000002,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 862033.4299999976,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 225342.47999999992,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 1541.4000000000008,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 1223.09,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 20399.880000000012,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 199053537.12999967,
            "linha_planilha": 32
          },
          {
            "competencia": "2025-11-01",
            "competencia_label": "11/2025",
            "lags": [
              {
                "col": "0",
                "valor": 265639.7200000001,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 112296135.61000007,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 54220304.169999935,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 9616328.000000011,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 882151.8699999986,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 931724.8199999993,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 97272.70000000029,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 8731.82,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 150790.84999999995,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 178469079.55999997,
            "linha_planilha": 33
          },
          {
            "competencia": "2025-12-01",
            "competencia_label": "12/2025",
            "lags": [
              {
                "col": "0",
                "valor": 512598.31999999995,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 110883562.00999986,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 51006519.279999994,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 11389683.9,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1999569.8100000026,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 989423.3799999999,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 249533.49999999994,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 304318.0000000001,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 177335208.19999984,
            "linha_planilha": 34
          },
          {
            "competencia": "2026-01-01",
            "competencia_label": "01/2026",
            "lags": [
              {
                "col": "0",
                "valor": 253921.4800000001,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 116264109.37000002,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 55789318.86999993,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 12237738.420000006,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1530916.9599999995,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 730265.7799999993,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 525635.7100000005,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 187331906.59,
            "linha_planilha": 35
          },
          {
            "competencia": "2026-02-01",
            "competencia_label": "02/2026",
            "lags": [
              {
                "col": "0",
                "valor": 1082824.2399999995,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 110106783.81999978,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 51490478.53999997,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 7638063.719999999,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1450324.7600000002,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1455296.77,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 173223771.84999976,
            "linha_planilha": 36
          },
          {
            "competencia": "2026-03-01",
            "competencia_label": "03/2026",
            "lags": [
              {
                "col": "0",
                "valor": 992988.8299999994,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 133940041.33000009,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 60925041.02000007,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 10899281.469999991,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 1966595.8600000017,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 208723948.51000017,
            "linha_planilha": 37
          },
          {
            "competencia": "2026-04-01",
            "competencia_label": "04/2026",
            "lags": [
              {
                "col": "0",
                "valor": 1614562.48,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 123165477.74000005,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 60688257.17000001,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 9542309.430000003,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 195010606.82000008,
            "linha_planilha": 38
          },
          {
            "competencia": "2026-05-01",
            "competencia_label": "05/2026",
            "lags": [
              {
                "col": "0",
                "valor": 1237021.2699999998,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 126011338.28999996,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 60628140.480000064,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 187876500.04000002,
            "linha_planilha": 39
          },
          {
            "competencia": "2026-06-01",
            "competencia_label": "06/2026",
            "lags": [
              {
                "col": "0",
                "valor": 1586817.0799999987,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 129851930.76000014,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 131438747.84000014,
            "linha_planilha": 40
          },
          {
            "competencia": "2026-07-01",
            "competencia_label": "07/2026",
            "lags": [
              {
                "col": "0",
                "valor": 2867706.429999999,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2867706.429999999,
            "linha_planilha": 41
          }
        ]
      },
      "proporcoes": {
        "colunas": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11+"
        ],
        "linhas": []
      },
      "fatores": {
        "colunas": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11"
        ],
        "linhas": [
          {
            "competencia": "2024-07-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.3628796100399303
              },
              {
                "col": "2",
                "valor": 0.13798089574157307
              },
              {
                "col": "3",
                "valor": 0.06734358101097448
              },
              {
                "col": "4",
                "valor": 0.028920749614598527
              },
              {
                "col": "5",
                "valor": 0.014102963526931099
              },
              {
                "col": "6",
                "valor": 0.002775689126487153
              },
              {
                "col": "7",
                "valor": 0.00032099860336934864
              },
              {
                "col": "8",
                "valor": 0.00022136104422370708
              },
              {
                "col": "9",
                "valor": 0.00026490107360787165
              },
              {
                "col": "10",
                "valor": 0.00014150576480643855
              },
              {
                "col": "11",
                "valor": 0.000806926930060551
              }
            ],
            "total": 0.6157591824765626,
            "linha_planilha": 75
          },
          {
            "competencia": "2024-08-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.38689824914217225
              },
              {
                "col": "2",
                "valor": 0.1844786543452301
              },
              {
                "col": "3",
                "valor": 0.07408517614389472
              },
              {
                "col": "4",
                "valor": 0.03283439701713002
              },
              {
                "col": "5",
                "valor": 0.015504401308679513
              },
              {
                "col": "6",
                "valor": 0.0030138218012291033
              },
              {
                "col": "7",
                "valor": 0.0010442441791296123
              },
              {
                "col": "8",
                "valor": 0.0002229813150152956
              },
              {
                "col": "9",
                "valor": 0.0002635384140692806
              },
              {
                "col": "10",
                "valor": 0.0001501369044705103
              },
              {
                "col": "11",
                "valor": 0.0010433183950094421
              }
            ],
            "total": 0.6995389189660298,
            "linha_planilha": 76
          },
          {
            "competencia": "2024-09-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.3969451953236337
              },
              {
                "col": "2",
                "valor": 0.2257950125592693
              },
              {
                "col": "3",
                "valor": 0.08469033159324235
              },
              {
                "col": "4",
                "valor": 0.039653779739773944
              },
              {
                "col": "5",
                "valor": 0.01718004698631439
              },
              {
                "col": "6",
                "valor": 0.003652301698917116
              },
              {
                "col": "7",
                "valor": 0.0015421396188682374
              },
              {
                "col": "8",
                "valor": 0.0003163713024695411
              },
              {
                "col": "9",
                "valor": 0.00026354060393456017
              },
              {
                "col": "10",
                "valor": 0.0001506560910474258
              },
              {
                "col": "11",
                "valor": 0.0013790094814423322
              }
            ],
            "total": 0.7715683849989129,
            "linha_planilha": 77
          },
          {
            "competencia": "2024-10-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.4110542758541468
              },
              {
                "col": "2",
                "valor": 0.26317742704672814
              },
              {
                "col": "3",
                "valor": 0.09217812150327226
              },
              {
                "col": "4",
                "valor": 0.04200936669724647
              },
              {
                "col": "5",
                "valor": 0.018757644282849484
              },
              {
                "col": "6",
                "valor": 0.004032141619392573
              },
              {
                "col": "7",
                "valor": 0.0017888580044514175
              },
              {
                "col": "8",
                "valor": 0.00036337493459990606
              },
              {
                "col": "9",
                "valor": 0.0002640573666688164
              },
              {
                "col": "10",
                "valor": 0.00015070650099436241
              },
              {
                "col": "11",
                "valor": 0.001398841765373889
              }
            ],
            "total": 0.8351748155757239,
            "linha_planilha": 78
          },
          {
            "competencia": "2024-11-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.4235746759210557
              },
              {
                "col": "2",
                "valor": 0.3027032762897796
              },
              {
                "col": "3",
                "valor": 0.11010430098201619
              },
              {
                "col": "4",
                "valor": 0.04360245429442148
              },
              {
                "col": "5",
                "valor": 0.018960801224030256
              },
              {
                "col": "6",
                "valor": 0.0043040970705154735
              },
              {
                "col": "7",
                "valor": 0.00180752029511725
              },
              {
                "col": "8",
                "valor": 0.00037234219821749207
              },
              {
                "col": "9",
                "valor": 0.0002703139895022007
              },
              {
                "col": "10",
                "valor": 0.00016086805990228302
              },
              {
                "col": "11",
                "valor": 0.0013906785977346433
              }
            ],
            "total": 0.9072513289222924,
            "linha_planilha": 79
          },
          {
            "competencia": "2024-12-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.4316695691421901
              },
              {
                "col": "2",
                "valor": 0.3445001042850046
              },
              {
                "col": "3",
                "valor": 0.12021253726998796
              },
              {
                "col": "4",
                "valor": 0.047748857335606076
              },
              {
                "col": "5",
                "valor": 0.019653246569502042
              },
              {
                "col": "6",
                "valor": 0.004613415051839561
              },
              {
                "col": "7",
                "valor": 0.0018779749959221478
              },
              {
                "col": "8",
                "valor": 0.00040209079041209864
              },
              {
                "col": "9",
                "valor": 0.00028421677404770875
              },
              {
                "col": "10",
                "valor": 0.00016007829902378424
              },
              {
                "col": "11",
                "valor": 0.0013974665795834272
              }
            ],
            "total": 0.9725195570931194,
            "linha_planilha": 80
          },
          {
            "competencia": "2025-01-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.4427691935217468
              },
              {
                "col": "2",
                "valor": 0.3897467684801607
              },
              {
                "col": "3",
                "valor": 0.14089625253512714
              },
              {
                "col": "4",
                "valor": 0.059528610057912705
              },
              {
                "col": "5",
                "valor": 0.031616527600951766
              },
              {
                "col": "6",
                "valor": 0.008622268157970339
              },
              {
                "col": "7",
                "valor": 0.0030050391837905606
              },
              {
                "col": "8",
                "valor": 0.0008051340126599705
              },
              {
                "col": "9",
                "valor": 0.00032171638346125314
              },
              {
                "col": "10",
                "valor": 5.778075231588451e-05
              },
              {
                "col": "11",
                "valor": 0.0014691601186054676
              }
            ],
            "total": 1.0788384508047026,
            "linha_planilha": 81
          },
          {
            "competencia": "2025-02-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.4589447029376367
              },
              {
                "col": "2",
                "valor": 0.4315509564534107
              },
              {
                "col": "3",
                "valor": 0.15462218545071943
              },
              {
                "col": "4",
                "valor": 0.06513292945083002
              },
              {
                "col": "5",
                "valor": 0.03394902755838362
              },
              {
                "col": "6",
                "valor": 0.009806002572500408
              },
              {
                "col": "7",
                "valor": 0.003350445847847957
              },
              {
                "col": "8",
                "valor": 0.0008256612578067604
              },
              {
                "col": "9",
                "valor": 0.00011255727505190093
              },
              {
                "col": "10",
                "valor": 6.784538640879153e-05
              },
              {
                "col": "11",
                "valor": 0.0015017751300736302
              }
            ],
            "total": 1.15986408932067,
            "linha_planilha": 82
          },
          {
            "competencia": "2025-03-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.4778302432129335
              },
              {
                "col": "2",
                "valor": 0.4780214846399577
              },
              {
                "col": "3",
                "valor": 0.16423674844669353
              },
              {
                "col": "4",
                "valor": 0.06659093152360704
              },
              {
                "col": "5",
                "valor": 0.03602661197961059
              },
              {
                "col": "6",
                "valor": 0.010230458910822918
              },
              {
                "col": "7",
                "valor": 0.0036077207791323446
              },
              {
                "col": "8",
                "valor": 0.0008533122166726017
              },
              {
                "col": "9",
                "valor": 0.00011467818885649724
              },
              {
                "col": "10",
                "valor": 6.903196733604801e-05
              },
              {
                "col": "11",
                "valor": 0.001504823895513899
              }
            ],
            "total": 1.2390860457611366,
            "linha_planilha": 83
          },
          {
            "competencia": "2025-04-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.4998509433571998
              },
              {
                "col": "2",
                "valor": 0.5221287923923633
              },
              {
                "col": "3",
                "valor": 0.1782096533154583
              },
              {
                "col": "4",
                "valor": 0.07034178283181555
              },
              {
                "col": "5",
                "valor": 0.03831616159673579
              },
              {
                "col": "6",
                "valor": 0.012892195333102933
              },
              {
                "col": "7",
                "valor": 0.004861844058876357
              },
              {
                "col": "8",
                "valor": 0.0019332483153586273
              },
              {
                "col": "9",
                "valor": 0.00011743936947436218
              },
              {
                "col": "10",
                "valor": 7.069409447741664e-05
              },
              {
                "col": "11",
                "valor": 0.0015362838495932205
              }
            ],
            "total": 1.3302590385144555,
            "linha_planilha": 84
          },
          {
            "competencia": "2025-05-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5155103074585797
              },
              {
                "col": "2",
                "valor": 0.5754389856309632
              },
              {
                "col": "3",
                "valor": 0.19686812912146356
              },
              {
                "col": "4",
                "valor": 0.07288512292774896
              },
              {
                "col": "5",
                "valor": 0.037469981495154514
              },
              {
                "col": "6",
                "valor": 0.013410426563109222
              },
              {
                "col": "7",
                "valor": 0.004993880785930309
              },
              {
                "col": "8",
                "valor": 0.001967630258184073
              },
              {
                "col": "9",
                "valor": 0.0001839620466383365
              },
              {
                "col": "10",
                "valor": 7.168354525366764e-05
              },
              {
                "col": "11",
                "valor": 0.0007560715057634539
              }
            ],
            "total": 1.4195561813387891,
            "linha_planilha": 85
          },
          {
            "competencia": "2025-06-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5309416489256323
              },
              {
                "col": "2",
                "valor": 0.6260474888402169
              },
              {
                "col": "3",
                "valor": 0.21212698308500455
              },
              {
                "col": "4",
                "valor": 0.07833422866741357
              },
              {
                "col": "5",
                "valor": 0.04285269049024991
              },
              {
                "col": "6",
                "valor": 0.016416194336750692
              },
              {
                "col": "7",
                "valor": 0.009285502749072368
              },
              {
                "col": "8",
                "valor": 0.011045903883081012
              },
              {
                "col": "9",
                "valor": 0.0036007152447051468
              },
              {
                "col": "10",
                "valor": 0.0016400893330393881
              },
              {
                "col": "11",
                "valor": 0.0016612327339851813
              }
            ],
            "total": 1.533952678289151,
            "linha_planilha": 86
          },
          {
            "competencia": "2025-07-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5456278449238486
              },
              {
                "col": "2",
                "valor": 0.6767703775025786
              },
              {
                "col": "3",
                "valor": 0.22706900986466264
              },
              {
                "col": "4",
                "valor": 0.08192825182299043
              },
              {
                "col": "5",
                "valor": 0.04727377282183755
              },
              {
                "col": "6",
                "valor": 0.018522740414644044
              },
              {
                "col": "7",
                "valor": 0.010321358679786645
              },
              {
                "col": "8",
                "valor": 0.011553068167003484
              },
              {
                "col": "9",
                "valor": 0.004270803077875285
              },
              {
                "col": "10",
                "valor": 0.002248368852155789
              },
              {
                "col": "11",
                "valor": 0.004330991942428498
              }
            ],
            "total": 1.6299165880698114,
            "linha_planilha": 87
          },
          {
            "competencia": "2025-08-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5445172734116713
              },
              {
                "col": "2",
                "valor": 0.6760377250070226
              },
              {
                "col": "3",
                "valor": 0.23156833289507106
              },
              {
                "col": "4",
                "valor": 0.08007949194517548
              },
              {
                "col": "5",
                "valor": 0.04849497213455053
              },
              {
                "col": "6",
                "valor": 0.01911430398171765
              },
              {
                "col": "7",
                "valor": 0.009870204556836553
              },
              {
                "col": "8",
                "valor": 0.011726014390569096
              },
              {
                "col": "9",
                "valor": 0.0043295325172598275
              },
              {
                "col": "10",
                "valor": 0.0022778270897231556
              },
              {
                "col": "11",
                "valor": 0.008394529005066535
              }
            ],
            "total": 1.6364102069346638,
            "linha_planilha": 88
          },
          {
            "competencia": "2025-09-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5486886553258317
              },
              {
                "col": "2",
                "valor": 0.6722825081978099
              },
              {
                "col": "3",
                "valor": 0.22925070488912452
              },
              {
                "col": "4",
                "valor": 0.0724587890000801
              },
              {
                "col": "5",
                "valor": 0.047675625243040275
              },
              {
                "col": "6",
                "valor": 0.01928139860284034
              },
              {
                "col": "7",
                "valor": 0.009605470530323028
              },
              {
                "col": "8",
                "valor": 0.011853822150396664
              },
              {
                "col": "9",
                "valor": 0.005363407397317937
              },
              {
                "col": "10",
                "valor": 0.00448209172841775
              },
              {
                "col": "11",
                "valor": 0.011697143404653347
              }
            ],
            "total": 1.6326396164698358,
            "linha_planilha": 89
          },
          {
            "competencia": "2025-10-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5521345309158951
              },
              {
                "col": "2",
                "valor": 0.6655553262818593
              },
              {
                "col": "3",
                "valor": 0.23106299169423372
              },
              {
                "col": "4",
                "valor": 0.07075786385310959
              },
              {
                "col": "5",
                "valor": 0.04602100661954171
              },
              {
                "col": "6",
                "valor": 0.01934341623885224
              },
              {
                "col": "7",
                "valor": 0.010654156336538392
              },
              {
                "col": "8",
                "valor": 0.011673885097775016
              },
              {
                "col": "9",
                "valor": 0.005492590625936516
              },
              {
                "col": "10",
                "valor": 0.004429160257930608
              },
              {
                "col": "11",
                "valor": 0.01153723797950862
              }
            ],
            "total": 1.6286621659011808,
            "linha_planilha": 90
          },
          {
            "competencia": "2025-11-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5569551973711435
              },
              {
                "col": "2",
                "valor": 0.6630174153767497
              },
              {
                "col": "3",
                "valor": 0.2189727674645196
              },
              {
                "col": "4",
                "valor": 0.07026199219401462
              },
              {
                "col": "5",
                "valor": 0.047323831707887856
              },
              {
                "col": "6",
                "valor": 0.021248393633394414
              },
              {
                "col": "7",
                "valor": 0.01075860837679134
              },
              {
                "col": "8",
                "valor": 0.011618483396037306
              },
              {
                "col": "9",
                "valor": 0.005473817853440692
              },
              {
                "col": "10",
                "valor": 0.004396502321461608
              },
              {
                "col": "11",
                "valor": 0.012059298546722177
              }
            ],
            "total": 1.622086308242163,
            "linha_planilha": 91
          },
          {
            "competencia": "2025-12-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5620181094575052
              },
              {
                "col": "2",
                "valor": 0.6583206837450468
              },
              {
                "col": "3",
                "valor": 0.2144661965930112
              },
              {
                "col": "4",
                "valor": 0.06559491502677539
              },
              {
                "col": "5",
                "valor": 0.04678179472661723
              },
              {
                "col": "6",
                "valor": 0.02120877064357887
              },
              {
                "col": "7",
                "valor": 0.010527114268993575
              },
              {
                "col": "8",
                "valor": 0.011727547072034874
              },
              {
                "col": "9",
                "valor": 0.0056246520931165535
              },
              {
                "col": "10",
                "valor": 0.004502623894024544
              },
              {
                "col": "11",
                "valor": 0.01214343659783716
              }
            ],
            "total": 1.6129158441185412,
            "linha_planilha": 92
          },
          {
            "competencia": "2026-01-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.576134023765912
              },
              {
                "col": "2",
                "valor": 0.6482883731066504
              },
              {
                "col": "3",
                "valor": 0.20562529632097293
              },
              {
                "col": "4",
                "valor": 0.054412537975025134
              },
              {
                "col": "5",
                "valor": 0.03453906686421327
              },
              {
                "col": "6",
                "valor": 0.01689832652582372
              },
              {
                "col": "7",
                "valor": 0.009258930364943236
              },
              {
                "col": "8",
                "valor": 0.011199702825456011
              },
              {
                "col": "9",
                "valor": 0.00559020480888961
              },
              {
                "col": "10",
                "valor": 0.004510385946946537
              },
              {
                "col": "11",
                "valor": 0.012226677449136896
              }
            ],
            "total": 1.5786835259539702,
            "linha_planilha": 93
          },
          {
            "competencia": "2026-02-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5821167685439576
              },
              {
                "col": "2",
                "valor": 0.6440302942689594
              },
              {
                "col": "3",
                "valor": 0.1996588006692704
              },
              {
                "col": "4",
                "valor": 0.0483153942158071
              },
              {
                "col": "5",
                "valor": 0.032818849019119405
              },
              {
                "col": "6",
                "valor": 0.01550646393132376
              },
              {
                "col": "7",
                "valor": 0.009339400406917322
              },
              {
                "col": "8",
                "valor": 0.012151041126005966
              },
              {
                "col": "9",
                "valor": 0.0065945676936931584
              },
              {
                "col": "10",
                "valor": 0.0048699321642577155
              },
              {
                "col": "11",
                "valor": 0.013311932129665945
              }
            ],
            "total": 1.5687134441689778,
            "linha_planilha": 94
          },
          {
            "competencia": "2026-03-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5852966499485344
              },
              {
                "col": "2",
                "valor": 0.6375407459987025
              },
              {
                "col": "3",
                "valor": 0.2023161530153349
              },
              {
                "col": "4",
                "valor": 0.04649761081068203
              },
              {
                "col": "5",
                "valor": 0.03158771225385334
              },
              {
                "col": "6",
                "valor": 0.01517901211896869
              },
              {
                "col": "7",
                "valor": 0.00912095090802311
              },
              {
                "col": "8",
                "valor": 0.012475730087501524
              },
              {
                "col": "9",
                "valor": 0.006640928574657698
              },
              {
                "col": "10",
                "valor": 0.004912348308653445
              },
              {
                "col": "11",
                "valor": 0.015535673838871982
              }
            ],
            "total": 1.5671035158637834,
            "linha_planilha": 95
          },
          {
            "competencia": "2026-04-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5932982266546378
              },
              {
                "col": "2",
                "valor": 0.6258983277091797
              },
              {
                "col": "3",
                "valor": 0.19842327418746433
              },
              {
                "col": "4",
                "valor": 0.04390130188197196
              },
              {
                "col": "5",
                "valor": 0.02955676738595707
              },
              {
                "col": "6",
                "valor": 0.01284240833652641
              },
              {
                "col": "7",
                "valor": 0.007798849431773685
              },
              {
                "col": "8",
                "valor": 0.011278243680123272
              },
              {
                "col": "9",
                "valor": 0.006770521349865336
              },
              {
                "col": "10",
                "valor": 0.006868274559695312
              },
              {
                "col": "11",
                "valor": 0.018308812825871056
              }
            ],
            "total": 1.5549450080030665,
            "linha_planilha": 96
          },
          {
            "competencia": "2026-05-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6017123907177304
              },
              {
                "col": "2",
                "valor": 0.6169623902249227
              },
              {
                "col": "3",
                "valor": 0.18487323674370526
              },
              {
                "col": "4",
                "valor": 0.04150278697989995
              },
              {
                "col": "5",
                "valor": 0.031151982381543118
              },
              {
                "col": "6",
                "valor": 0.012400484947179135
              },
              {
                "col": "7",
                "valor": 0.007639858264379352
              },
              {
                "col": "8",
                "valor": 0.011187993305607052
              },
              {
                "col": "9",
                "valor": 0.006716314026919563
              },
              {
                "col": "10",
                "valor": 0.006904317876574609
              },
              {
                "col": "11",
                "valor": 0.024147305134996584
              }
            ],
            "total": 1.5451990606034576,
            "linha_planilha": 97
          },
          {
            "competencia": "2026-06-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6089710606466759
              },
              {
                "col": "2",
                "valor": 0.6130498166259005
              },
              {
                "col": "3",
                "valor": 0.18044051599576477
              },
              {
                "col": "4",
                "valor": 0.037132733082891625
              },
              {
                "col": "5",
                "valor": 0.027299435770007298
              },
              {
                "col": "6",
                "valor": 0.010153578841849725
              },
              {
                "col": "7",
                "valor": 0.003565566338434866
              },
              {
                "col": "8",
                "valor": 0.002416042381014679
              },
              {
                "col": "9",
                "valor": 0.003565577676833366
              },
              {
                "col": "10",
                "valor": 0.005517985097130416
              },
              {
                "col": "11",
                "valor": 0.024556371319075482
              }
            ],
            "total": 1.5166686837755785,
            "linha_planilha": 98
          },
          {
            "competencia": "2026-07-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6160092130133851
              },
              {
                "col": "2",
                "valor": 0.6042567490739669
              },
              {
                "col": "3",
                "valor": 0.17250503324143718
              },
              {
                "col": "4",
                "valor": 0.03460029630924618
              },
              {
                "col": "5",
                "valor": 0.0251114860876438
              },
              {
                "col": "6",
                "valor": 0.009305504674548827
              },
              {
                "col": "7",
                "valor": 0.0035167373633117217
              },
              {
                "col": "8",
                "valor": 0.0024817659437646957
              },
              {
                "col": "9",
                "valor": 0.0029670281431442153
              },
              {
                "col": "10",
                "valor": 0.005028350501487017
              },
              {
                "col": "11",
                "valor": 0.02764636305442335
              }
            ],
            "total": 1.503428527406359,
            "linha_planilha": 99
          }
        ]
      },
      "peona_serie": [
        {
          "competencia": "2024-07-01",
          "total_avisado": 204148757.02429974,
          "media_nm": 187452444.68508804,
          "fator_peona": 0.6157591824765626,
          "peona": 115425564.09252287,
          "variacao_r": null,
          "variacao_pct": null,
          "linha_planilha": 104
        },
        {
          "competencia": "2024-08-01",
          "total_avisado": 212349541.24405068,
          "media_nm": 190838604.73709226,
          "fator_peona": 0.6995389189660298,
          "peona": 133499031.25477098,
          "variacao_r": 18073467.162248105,
          "variacao_pct": 0.15658114651067034,
          "linha_planilha": 105
        },
        {
          "competencia": "2024-09-01",
          "total_avisado": 173359363.28173885,
          "media_nm": 191122673.16807052,
          "fator_peona": 0.7715683849989129,
          "peona": 147464212.27296323,
          "variacao_r": 13965181.018192247,
          "variacao_pct": 0.1046088566106591,
          "linha_planilha": 106
        },
        {
          "competencia": "2024-10-01",
          "total_avisado": 167313224.35510802,
          "media_nm": 191058744.3809962,
          "fator_peona": 0.8351748155757239,
          "peona": 159567451.6025279,
          "variacao_r": 12103239.32956466,
          "variacao_pct": 0.0820757737962956,
          "linha_planilha": 107
        },
        {
          "competencia": "2024-11-01",
          "total_avisado": 184957494.29993632,
          "media_nm": 192180243.31099084,
          "fator_peona": 0.9072513289222924,
          "peona": 174355781.13650593,
          "variacao_r": 14788329.533978045,
          "variacao_pct": 0.09267760677669279,
          "linha_planilha": 108
        },
        {
          "competencia": "2024-12-01",
          "total_avisado": 159169036.92169735,
          "media_nm": 191553095.51696563,
          "fator_peona": 0.9725195570931194,
          "peona": 186289131.6119754,
          "variacao_r": 11933350.47546947,
          "variacao_pct": 0.06844252824703667,
          "linha_planilha": 109
        },
        {
          "competencia": "2025-01-01",
          "total_avisado": 182801826.71194842,
          "media_nm": 191663600.1711327,
          "fator_peona": 1.0788384508047026,
          "peona": 206774061.48427677,
          "variacao_r": 20484929.87230137,
          "variacao_pct": 0.10996309712243302,
          "linha_planilha": 110
        },
        {
          "competencia": "2025-02-01",
          "total_avisado": 193679437.69493088,
          "media_nm": 191834195.50860986,
          "fator_peona": 1.15986408932067,
          "peona": 222501594.47415712,
          "variacao_r": 15727532.989880353,
          "variacao_pct": 0.07606144057423903,
          "linha_planilha": 111
        },
        {
          "competencia": "2025-03-01",
          "total_avisado": 168321011.90569565,
          "media_nm": 189312828.03466284,
          "fator_peona": 1.2390860457611366,
          "peona": 234574883.5013284,
          "variacao_r": 12073289.027171284,
          "variacao_pct": 0.0542615843077634,
          "linha_planilha": 112
        },
        {
          "competencia": "2025-04-01",
          "total_avisado": 156535377.74043584,
          "media_nm": 184861791.6077632,
          "fator_peona": 1.3302590385144555,
          "peona": 245914069.16220272,
          "variacao_r": 11339185.660874307,
          "variacao_pct": 0.048339299977996575,
          "linha_planilha": 113
        },
        {
          "competencia": "2025-05-01",
          "total_avisado": 178985710.34774545,
          "media_nm": 182310137.07452023,
          "fator_peona": 1.4195561813387891,
          "peona": 258799482.00485715,
          "variacao_r": 12885412.842654437,
          "variacao_pct": 0.05239803028168888,
          "linha_planilha": 114
        },
        {
          "competencia": "2025-06-01",
          "total_avisado": 193843005.27611285,
          "media_nm": 181288648.90030834,
          "fator_peona": 1.533952678289151,
          "peona": 278088208.5240495,
          "variacao_r": 19288726.519192368,
          "variacao_pct": 0.07453154994657352,
          "linha_planilha": 115
        },
        {
          "competencia": "2025-07-01",
          "total_avisado": 189032438.76677215,
          "media_nm": 180028955.712181,
          "fator_peona": 1.6299165880698114,
          "peona": 293432181.24816924,
          "variacao_r": 15343972.724119723,
          "variacao_pct": 0.05517663911590387,
          "linha_planilha": 116
        },
        {
          "competencia": "2025-08-01",
          "total_avisado": 181409607.7,
          "media_nm": 177450627.91684347,
          "fator_peona": 1.6364102069346638,
          "peona": 290382018.75008786,
          "variacao_r": -3050162.498081386,
          "variacao_pct": -0.010394778395154014,
          "linha_planilha": 117
        },
        {
          "competencia": "2025-09-01",
          "total_avisado": 182587853.45000008,
          "media_nm": 178219668.76419857,
          "fator_peona": 1.6326396164698358,
          "peona": 290968491.6585623,
          "variacao_r": 586472.9084744453,
          "variacao_pct": 0.002019659863922829,
          "linha_planilha": 118
        },
        {
          "competencia": "2025-10-01",
          "total_avisado": 193284998.4499995,
          "media_nm": 180383983.2721062,
          "fator_peona": 1.6286621659011808,
          "peona": 293784568.8898309,
          "variacao_r": 2816077.2312685847,
          "variacao_pct": 0.009678289271860763,
          "linha_planilha": 119
        },
        {
          "competencia": "2025-11-01",
          "total_avisado": 195245037.47999963,
          "media_nm": 181241278.53711152,
          "fator_peona": 1.622086308242163,
          "peona": 293988996.4033528,
          "variacao_r": 204427.5135219097,
          "variacao_pct": 0.0006958415627287273,
          "linha_planilha": 120
        },
        {
          "competencia": "2025-12-01",
          "total_avisado": 189845131.4900001,
          "media_nm": 183797619.7511367,
          "fator_peona": 1.6129158441185412,
          "peona": 296450093.0078833,
          "variacao_r": 2461096.6045305133,
          "variacao_pct": 0.00837139020384936,
          "linha_planilha": 121
        },
        {
          "competencia": "2026-01-01",
          "total_avisado": 181529066.0299998,
          "media_nm": 183691556.3609743,
          "fator_peona": 1.5786835259539702,
          "peona": 289990833.88391536,
          "variacao_r": -6459259.123967946,
          "variacao_pct": -0.02178868982104243,
          "linha_planilha": 122
        },
        {
          "competencia": "2026-02-01",
          "total_avisado": 180581610.85,
          "media_nm": 182600070.79056337,
          "fator_peona": 1.5687134441689778,
          "peona": 286447185.95536387,
          "variacao_r": -3543647.928551495,
          "variacao_pct": -0.012219861852495795,
          "linha_planilha": 123
        },
        {
          "competencia": "2026-03-01",
          "total_avisado": 180736875.44999975,
          "media_nm": 183634726.0859221,
          "fator_peona": 1.5671035158637834,
          "peona": 287774624.88393134,
          "variacao_r": 1327438.9285674691,
          "variacao_pct": 0.004634148958874151,
          "linha_planilha": 124
        },
        {
          "competencia": "2026-04-01",
          "total_avisado": 203642772.9000001,
          "media_nm": 187560342.34921908,
          "fator_peona": 1.5549450080030665,
          "peona": 291646018.0352644,
          "variacao_r": 3871393.151333034,
          "variacao_pct": 0.013452864903896522,
          "linha_planilha": 125
        },
        {
          "competencia": "2026-05-01",
          "total_avisado": 196856213.99000013,
          "media_nm": 189049550.98607364,
          "fator_peona": 1.5451990606034576,
          "peona": 292119188.59118646,
          "variacao_r": 473170.555922091,
          "variacao_pct": 0.0016224139081675304,
          "linha_planilha": 126
        },
        {
          "competencia": "2026-06-01",
          "total_avisado": 201972307.04999995,
          "media_nm": 189726992.8005643,
          "fator_peona": 1.5166686837755785,
          "peona": 287752988.4475305,
          "variacao_r": -4366200.143655956,
          "variacao_pct": -0.014946639297175213,
          "linha_planilha": 127
        },
        {
          "competencia": "2026-07-01",
          "total_avisado": 208556329.80000022,
          "media_nm": 191353983.71999994,
          "fator_peona": 1.503428527406359,
          "peona": 287687037.9574999,
          "variacao_r": -65950.49003058672,
          "variacao_pct": -0.00022919132964138722,
          "linha_planilha": 128
        }
      ],
      "runoff_aux": [
        {
          "competencia": "2023-08-01",
          "runoff_puro": 116821784.54351504,
          "avisado_mes": 171715620.61999997,
          "ocorrido_mes": 185517272.9391719,
          "linha_planilha": 6
        },
        {
          "competencia": "2023-09-01",
          "runoff_puro": 111528425.95200562,
          "avisado_mes": 169950542.10999998,
          "ocorrido_mes": 164609525.93232074,
          "linha_planilha": 7
        },
        {
          "competencia": "2023-10-01",
          "runoff_puro": 114305612.40909442,
          "avisado_mes": 168080369.79999998,
          "ocorrido_mes": 170789343.3765696,
          "linha_planilha": 8
        },
        {
          "competencia": "2023-11-01",
          "runoff_puro": 115659542.5862106,
          "avisado_mes": 171499507.14,
          "ocorrido_mes": 172849419.31015277,
          "linha_planilha": 9
        },
        {
          "competencia": "2023-12-01",
          "runoff_puro": 100516823.00634114,
          "avisado_mes": 166694810.45000002,
          "ocorrido_mes": 151552104.90278095,
          "linha_planilha": 10
        },
        {
          "competencia": "2024-01-01",
          "runoff_puro": 118666187.70212081,
          "avisado_mes": 181475770.86194384,
          "ocorrido_mes": 199637668.5556001,
          "linha_planilha": 11
        },
        {
          "competencia": "2024-02-01",
          "runoff_puro": 115950742.9460568,
          "avisado_mes": 191632293.64520505,
          "ocorrido_mes": 188934573.02237818,
          "linha_planilha": 12
        },
        {
          "competencia": "2024-03-01",
          "runoff_puro": 118339595.06864373,
          "avisado_mes": 198577421.5930596,
          "ocorrido_mes": 201004142.68082026,
          "linha_planilha": 13
        },
        {
          "competencia": "2024-04-01",
          "runoff_puro": 128018633.77762121,
          "avisado_mes": 209947814.86323157,
          "ocorrido_mes": 219729982.48436317,
          "linha_planilha": 14
        },
        {
          "competencia": "2024-05-01",
          "runoff_puro": 140166886.7618786,
          "avisado_mes": 209605564.7466614,
          "ocorrido_mes": 222391007.904482,
          "linha_planilha": 15
        },
        {
          "competencia": "2024-06-01",
          "runoff_puro": 209095009.37772676,
          "avisado_mes": 206100863.36665547,
          "ocorrido_mes": 276089778.310927,
          "linha_planilha": 16
        },
        {
          "competencia": "2024-07-01",
          "runoff_puro": 311579869.54344094,
          "avisado_mes": 204148757.02429974,
          "ocorrido_mes": 306619161.4591751,
          "linha_planilha": 17
        },
        {
          "competencia": "2024-08-01",
          "runoff_puro": 280659604.8215643,
          "avisado_mes": 212349541.24405068,
          "ocorrido_mes": 181153849.11702475,
          "linha_planilha": 18
        },
        {
          "competencia": "2024-09-01",
          "runoff_puro": 286843684.90045804,
          "avisado_mes": 173359363.28173885,
          "ocorrido_mes": 179197055.03063267,
          "linha_planilha": 19
        },
        {
          "competencia": "2024-10-01",
          "runoff_puro": 312195134.84410477,
          "avisado_mes": 167313224.35510802,
          "ocorrido_mes": 192313607.28875473,
          "linha_planilha": 20
        },
        {
          "competencia": "2024-11-01",
          "runoff_puro": 297575687.26980454,
          "avisado_mes": 184957494.29993632,
          "ocorrido_mes": 170698974.9756362,
          "linha_planilha": 21
        },
        {
          "competencia": "2024-12-01",
          "runoff_puro": 292561203.1716666,
          "avisado_mes": 159169036.92169735,
          "ocorrido_mes": 154649964.81355938,
          "linha_planilha": 22
        },
        {
          "competencia": "2025-01-01",
          "runoff_puro": 297700938.8548449,
          "avisado_mes": 182801826.71194842,
          "ocorrido_mes": 188642755.16512668,
          "linha_planilha": 23
        },
        {
          "competencia": "2025-02-01",
          "runoff_puro": 274394705.1597598,
          "avisado_mes": 193679437.69493088,
          "ocorrido_mes": 170813209.2498459,
          "linha_planilha": 24
        },
        {
          "competencia": "2025-03-01",
          "runoff_puro": 281021230.6520173,
          "avisado_mes": 168321011.90569565,
          "ocorrido_mes": 175082068.81795317,
          "linha_planilha": 25
        },
        {
          "competencia": "2025-04-01",
          "runoff_puro": 299470349.1283947,
          "avisado_mes": 156535377.74043584,
          "ocorrido_mes": 174928663.71681342,
          "linha_planilha": 26
        },
        {
          "competencia": "2025-05-01",
          "runoff_puro": 305547448.48553056,
          "avisado_mes": 178985710.34774545,
          "ocorrido_mes": 184664711.8848813,
          "linha_planilha": 27
        },
        {
          "competencia": "2025-06-01",
          "runoff_puro": 287629627.9155039,
          "avisado_mes": 193843005.27611285,
          "ocorrido_mes": 174754724.0360863,
          "linha_planilha": 28
        },
        {
          "competencia": "2025-07-01",
          "runoff_puro": 283131320.7499998,
          "avisado_mes": 189032438.76677215,
          "ocorrido_mes": 184280087.82126805,
          "linha_planilha": 29
        },
        {
          "competencia": "2025-08-01",
          "runoff_puro": 282036521.37999994,
          "avisado_mes": 181409607.7,
          "ocorrido_mes": 179131339.34999993,
          "linha_planilha": 30
        },
        {
          "competencia": "2025-09-01",
          "runoff_puro": 290919330.5199993,
          "avisado_mes": 182587853.45000008,
          "ocorrido_mes": 191470662.58999956,
          "linha_planilha": 31
        },
        {
          "competencia": "2025-10-01",
          "runoff_puro": 296687869.19999945,
          "avisado_mes": 193284998.4499995,
          "ocorrido_mes": 199053537.12999967,
          "linha_planilha": 32
        },
        {
          "competencia": "2025-11-01",
          "runoff_puro": 279911911.28,
          "avisado_mes": 195245037.47999963,
          "ocorrido_mes": 178469079.55999997,
          "linha_planilha": 33
        },
        {
          "competencia": "2025-12-01",
          "runoff_puro": 267401987.98999983,
          "avisado_mes": 189845131.4900001,
          "ocorrido_mes": 177335208.19999984,
          "linha_planilha": 34
        },
        {
          "competencia": "2026-01-01",
          "runoff_puro": 273204828.5499999,
          "avisado_mes": 181529066.0299998,
          "ocorrido_mes": 187331906.59,
          "linha_planilha": 35
        },
        {
          "competencia": "2026-02-01",
          "runoff_puro": 265846989.54999974,
          "avisado_mes": 180581610.85,
          "ocorrido_mes": 173223771.84999976,
          "linha_planilha": 36
        },
        {
          "competencia": "2026-03-01",
          "runoff_puro": 293834062.60999995,
          "avisado_mes": 180736875.44999975,
          "ocorrido_mes": 208723948.51000017,
          "linha_planilha": 37
        },
        {
          "competencia": "2026-04-01",
          "runoff_puro": 285201896.53000003,
          "avisado_mes": 203642772.9000001,
          "ocorrido_mes": 195010606.82000008,
          "linha_planilha": 38
        },
        {
          "competencia": "2026-05-01",
          "runoff_puro": 276222182.58000004,
          "avisado_mes": 196856213.99000013,
          "ocorrido_mes": 187876500.04000002,
          "linha_planilha": 39
        },
        {
          "competencia": "2026-06-01",
          "runoff_puro": 205688623.3700002,
          "avisado_mes": 201972307.04999995,
          "ocorrido_mes": 131438747.84000014,
          "linha_planilha": 40
        },
        {
          "competencia": "2026-07-01",
          "runoff_puro": 0.0,
          "avisado_mes": 208556329.80000022,
          "ocorrido_mes": 2867706.429999999,
          "linha_planilha": 41
        }
      ],
      "formulas": {
        "celula_triangulo": "SUMIFS(Base_Dados[Despesa MH]; atraso; competência de aviso)",
        "total_avisado": "SUM(lags da linha)",
        "proporcao_Mk": "SUM(coluna j na janela) / SUM(totais na janela)",
        "fator_Ik": "SUM(j × Mk_j)  — coluna Total do bloco Fator Médio",
        "base_Bk": "AVERAGE(totais da janela de 12 meses)",
        "peona": "Ik × Bk"
      },
      "interpretacao": {
        "eixo": "aviso",
        "texto_j": "Cada coluna indica há quantos meses o evento ocorreu em relação ao mês de aviso. Coluna 0 = ocorreu no próprio mês do aviso; coluna 11+ agrupa atrasos ≥ 11 meses."
      },
      "titulo_aviso": "Abertura das Despesas por Data de Aviso",
      "titulo_ocorrencia": "Abertura das Despesas por Data de Ocorrência"
    }
  },
  "triangulos_od": {
    "6": {
      "aba": "Odonto 6",
      "janela": 6,
      "arquivo": "PEONA_INPUT.xlsx",
      "intervalo_triangulo_aviso": "B5:I41",
      "n_lags": 6,
      "colunas_lag": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5+"
      ],
      "triangulo_aviso": {
        "colunas": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5+"
        ],
        "linhas": [
          {
            "competencia": "2023-08-01",
            "competencia_label": "08/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1737479.4,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 671416.99,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 133606.23,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 75756.6,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 23815.9,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 41601.19,
                "vazio": false
              }
            ],
            "total": 2683676.3099999996,
            "linha_planilha": 6
          },
          {
            "competencia": "2023-09-01",
            "competencia_label": "09/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1429890.25,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 810471.13,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 106500.14,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 73832.17,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 38226.77,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 40223.25,
                "vazio": false
              }
            ],
            "total": 2499143.71,
            "linha_planilha": 7
          },
          {
            "competencia": "2023-10-01",
            "competencia_label": "10/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1490129.01,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 693813.95,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 157934.96,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 56654.26,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 28579.72,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 28465.98,
                "vazio": false
              }
            ],
            "total": 2455577.88,
            "linha_planilha": 8
          },
          {
            "competencia": "2023-11-01",
            "competencia_label": "11/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1465669.89,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 703844.53,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 144249.74,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 69704.49,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 32850.65,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 37200.7,
                "vazio": false
              }
            ],
            "total": 2453520.0000000005,
            "linha_planilha": 9
          },
          {
            "competencia": "2023-12-01",
            "competencia_label": "12/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1382164.82,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 775089.54,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 148737.22,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 65960.65,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 38517.73,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 43030.18000000001,
                "vazio": false
              }
            ],
            "total": 2453500.1400000006,
            "linha_planilha": 10
          },
          {
            "competencia": "2024-01-01",
            "competencia_label": "01/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1663684.6480561588,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 322051.96,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 142245.22,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 75198.2,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 46286.52,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 43678.5,
                "vazio": false
              }
            ],
            "total": 2293145.048056159,
            "linha_planilha": 11
          },
          {
            "competencia": "2024-02-01",
            "competencia_label": "02/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1572843.8688487827,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1123843.125946222,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 68916.54,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 74064.17,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 36508.78,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 41339.96000000001,
                "vazio": false
              }
            ],
            "total": 2917516.4447950046,
            "linha_planilha": 12
          },
          {
            "competencia": "2024-03-01",
            "competencia_label": "03/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1767221.537758797,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1035503.4894962959,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 196479.89968528994,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 48464.11,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 35508.97,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 33508.72,
                "vazio": false
              }
            ],
            "total": 3116686.7269403827,
            "linha_planilha": 13
          },
          {
            "competencia": "2024-04-01",
            "competencia_label": "04/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1923577.4378440822,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1007263.6631943875,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 207853.87389735304,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 70835.841832623,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 15038.11,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 25813.83,
                "vazio": false
              }
            ],
            "total": 3250382.756768446,
            "linha_planilha": 14
          },
          {
            "competencia": "2024-05-01",
            "competencia_label": "05/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1736882.504509999,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1154254.4000948227,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 234629.91879541473,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 76127.74452073917,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 28538.675417658174,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 18653.28,
                "vazio": false
              }
            ],
            "total": 3249086.523338633,
            "linha_planilha": 15
          },
          {
            "competencia": "2024-06-01",
            "competencia_label": "06/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1747194.0253125785,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1197947.3737767711,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 172124.2635383923,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 54237.46623863877,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 17240.63552302082,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 8016.894191817655,
                "vazio": false
              }
            ],
            "total": 3196760.658581219,
            "linha_planilha": 16
          },
          {
            "competencia": "2024-07-01",
            "competencia_label": "07/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1976382.6631733335,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1110737.639712033,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 194397.82097677822,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 75862.71911457884,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 34062.97489388579,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 32691.719211304546,
                "vazio": false
              }
            ],
            "total": 3424135.537081914,
            "linha_planilha": 17
          },
          {
            "competencia": "2024-08-01",
            "competencia_label": "08/2024",
            "lags": [
              {
                "col": "0",
                "valor": 12977.683446076599,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1972280.3620836467,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 1054022.9254566198,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 165140.599411441,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 56454.759746921714,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 28173.31580475255,
                "vazio": false
              }
            ],
            "total": 3289049.6459494582,
            "linha_planilha": 18
          },
          {
            "competencia": "2024-09-01",
            "competencia_label": "09/2024",
            "lags": [
              {
                "col": "0",
                "valor": 8917.087184950016,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1457899.940495561,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 916541.2240466556,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 193184.51564722194,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 81933.5871481043,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 26660.37373875285,
                "vazio": false
              }
            ],
            "total": 2685136.7282612454,
            "linha_planilha": 19
          },
          {
            "competencia": "2024-10-01",
            "competencia_label": "10/2024",
            "lags": [
              {
                "col": "0",
                "valor": 6940.026432055758,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1486166.4921019936,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 881142.8942589776,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 157997.95710670005,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 35046.61500017497,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 24195.01999215819,
                "vazio": false
              }
            ],
            "total": 2591489.0048920605,
            "linha_planilha": 20
          },
          {
            "competencia": "2024-11-01",
            "competencia_label": "11/2024",
            "lags": [
              {
                "col": "0",
                "valor": 4528.065334620533,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1579937.4690040944,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 943195.315391088,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 282291.2660146488,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 40977.67447541003,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 13848.619843918392,
                "vazio": false
              }
            ],
            "total": 2864778.41006378,
            "linha_planilha": 21
          },
          {
            "competencia": "2024-12-01",
            "competencia_label": "12/2024",
            "lags": [
              {
                "col": "0",
                "valor": 4750.789932995005,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1301749.5106549365,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 914582.3001630382,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 167503.90318259603,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 56065.06567488706,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 20693.358694246155,
                "vazio": false
              }
            ],
            "total": 2465344.928302699,
            "linha_planilha": 22
          },
          {
            "competencia": "2025-01-01",
            "competencia_label": "01/2025",
            "lags": [
              {
                "col": "0",
                "valor": 1332.264471859327,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 754441.8129724648,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 615831.4184252155,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 194687.32004497002,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 71885.129450793,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 75389.19268622284,
                "vazio": false
              }
            ],
            "total": 1713567.1380515257,
            "linha_planilha": 23
          },
          {
            "competencia": "2025-02-01",
            "competencia_label": "02/2025",
            "lags": [
              {
                "col": "0",
                "valor": 21241.586950255838,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1643470.1871563473,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 889534.7585683701,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 220790.59112684443,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 69523.51369209967,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 30814.527575267683,
                "vazio": false
              }
            ],
            "total": 2875375.1650691847,
            "linha_planilha": 24
          },
          {
            "competencia": "2025-03-01",
            "competencia_label": "03/2025",
            "lags": [
              {
                "col": "0",
                "valor": 17650.505888125528,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1064499.7836755144,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 654446.8918410325,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 95615.7522430593,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 19248.822367160006,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 17463.118289466594,
                "vazio": false
              }
            ],
            "total": 1868924.8743043584,
            "linha_planilha": 25
          },
          {
            "competencia": "2025-04-01",
            "competencia_label": "04/2025",
            "lags": [
              {
                "col": "0",
                "valor": 5653.3149179752545,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 981078.6106583301,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 550458.715107846,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 133034.34970098909,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 32342.55706901431,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 35497.46211004843,
                "vazio": false
              }
            ],
            "total": 1738065.009564203,
            "linha_planilha": 26
          },
          {
            "competencia": "2025-05-01",
            "competencia_label": "05/2025",
            "lags": [
              {
                "col": "0",
                "valor": 2307.8938952046587,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1037880.0969844107,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 726918.7082735673,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 185454.62634319274,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 29924.567985020392,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 4852.7187730937385,
                "vazio": false
              }
            ],
            "total": 1987338.6122544894,
            "linha_planilha": 27
          },
          {
            "competencia": "2025-06-01",
            "competencia_label": "06/2025",
            "lags": [
              {
                "col": "0",
                "valor": 5011.6426812985555,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1620038.17345754,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 970135.3683175533,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 213162.86407571065,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 59683.62718679144,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 134373.0581836821,
                "vazio": false
              }
            ],
            "total": 3002404.7339025764,
            "linha_planilha": 28
          },
          {
            "competencia": "2025-07-01",
            "competencia_label": "07/2025",
            "lags": [
              {
                "col": "0",
                "valor": 5923.288731991875,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1576781.7711943923,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 1002734.2377852682,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 223689.22296618094,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 50170.35315069389,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 68595.72936376324,
                "vazio": false
              }
            ],
            "total": 2927894.6031922903,
            "linha_planilha": 29
          },
          {
            "competencia": "2025-08-01",
            "competencia_label": "08/2025",
            "lags": [
              {
                "col": "0",
                "valor": 34470.03999999999,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1597346.1099999999,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 430762.18000000005,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 140781.32,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 18957.510000000006,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 17934.92,
                "vazio": false
              }
            ],
            "total": 2240252.0799999996,
            "linha_planilha": 30
          },
          {
            "competencia": "2025-09-01",
            "competencia_label": "09/2025",
            "lags": [
              {
                "col": "0",
                "valor": 80814.16,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1533719.289999999,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 557576.8800000005,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 130309.99000000002,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 12815.009999999955,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 8848.86,
                "vazio": false
              }
            ],
            "total": 2324084.1899999995,
            "linha_planilha": 31
          },
          {
            "competencia": "2025-10-01",
            "competencia_label": "10/2025",
            "lags": [
              {
                "col": "0",
                "valor": 55251.179999999826,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1650418.5999999968,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 456518.08999999927,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 143579.42999999993,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 22087.82000000005,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 15745.609999999979,
                "vazio": false
              }
            ],
            "total": 2343600.729999996,
            "linha_planilha": 32
          },
          {
            "competencia": "2025-11-01",
            "competencia_label": "11/2025",
            "lags": [
              {
                "col": "0",
                "valor": 68449.47999999972,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1770734.8899999945,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 528133.2599999991,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 125368.43999999994,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 17293.54999999998,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 21329.59000000002,
                "vazio": false
              }
            ],
            "total": 2531309.209999993,
            "linha_planilha": 33
          },
          {
            "competencia": "2025-12-01",
            "competencia_label": "12/2025",
            "lags": [
              {
                "col": "0",
                "valor": 144931.78999999998,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1602453.4399999997,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 405605.6199999999,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 110501.92000000003,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 30187.85,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 22881.75,
                "vazio": false
              }
            ],
            "total": 2316562.3699999996,
            "linha_planilha": 34
          },
          {
            "competencia": "2026-01-01",
            "competencia_label": "01/2026",
            "lags": [
              {
                "col": "0",
                "valor": 61052.64999999998,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1327458.979999999,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 321229.75999999966,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 78260.91000000006,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 9726.55,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 3027.1900000000023,
                "vazio": false
              }
            ],
            "total": 1800756.0399999989,
            "linha_planilha": 35
          },
          {
            "competencia": "2026-02-01",
            "competencia_label": "02/2026",
            "lags": [
              {
                "col": "0",
                "valor": 110354.06,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1648275.2300000007,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 214099.15000000014,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 82306.78000000003,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 10876.849999999986,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 4507.699999999999,
                "vazio": false
              }
            ],
            "total": 2070419.770000001,
            "linha_planilha": 36
          },
          {
            "competencia": "2026-03-01",
            "competencia_label": "03/2026",
            "lags": [
              {
                "col": "0",
                "valor": 106654.01999999963,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1448939.969999996,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 313187.1599999999,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 50819.770000000004,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 13558.779999999982,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 2321.74,
                "vazio": false
              }
            ],
            "total": 1935481.4399999955,
            "linha_planilha": 37
          },
          {
            "competencia": "2026-04-01",
            "competencia_label": "04/2026",
            "lags": [
              {
                "col": "0",
                "valor": 69964.93,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1908393.3300000024,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 360837.4400000003,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 109339.51000000004,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 19558.909999999996,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 11902.56,
                "vazio": false
              }
            ],
            "total": 2479996.680000003,
            "linha_planilha": 38
          },
          {
            "competencia": "2026-05-01",
            "competencia_label": "05/2026",
            "lags": [
              {
                "col": "0",
                "valor": 69611.36,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1727802.6300000008,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 458957.5900000003,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 83934.95,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 33342.31000000001,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 12173.000000000004,
                "vazio": false
              }
            ],
            "total": 2385821.8400000012,
            "linha_planilha": 39
          },
          {
            "competencia": "2026-06-01",
            "competencia_label": "06/2026",
            "lags": [
              {
                "col": "0",
                "valor": 102724.87000000002,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1771497.6900000004,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 334644.90999999986,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 92705.95000000004,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 13952.869999999988,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 5177.529999999999,
                "vazio": false
              }
            ],
            "total": 2320703.8200000003,
            "linha_planilha": 40
          },
          {
            "competencia": "2026-07-01",
            "competencia_label": "07/2026",
            "lags": [
              {
                "col": "0",
                "valor": 101199.60999999999,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1729422.3199999994,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 372230.5600000002,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 99624.43000000005,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 21447.21999999999,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 9716.109999999997,
                "vazio": false
              }
            ],
            "total": 2333640.2499999995,
            "linha_planilha": 41
          }
        ]
      },
      "triangulo_ocorrencia": {
        "colunas": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5+"
        ],
        "linhas": [
          {
            "competencia": "2023-08-01",
            "competencia_label": "08/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1737479.4,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 810471.13,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 157934.96,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 69704.49,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 38517.73,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 46197.084343034774,
                "vazio": false
              }
            ],
            "total": 2860304.7943430347,
            "linha_planilha": 6
          },
          {
            "competencia": "2023-09-01",
            "competencia_label": "09/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1429890.25,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 693813.95,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 144249.74,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 65960.65,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 46286.52,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 33545.88953928529,
                "vazio": false
              }
            ],
            "total": 2413746.9995392854,
            "linha_planilha": 7
          },
          {
            "competencia": "2023-10-01",
            "competencia_label": "10/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1490129.01,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 703844.53,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 148737.22,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 75198.2,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 36508.78,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 25805.262335402334,
                "vazio": false
              }
            ],
            "total": 2480223.0023354026,
            "linha_planilha": 8
          },
          {
            "competencia": "2023-11-01",
            "competencia_label": "11/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1465669.89,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 775089.54,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 142245.22,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 74064.17,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 35508.97,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 30208.068830548462,
                "vazio": false
              }
            ],
            "total": 2522785.8588305484,
            "linha_planilha": 9
          },
          {
            "competencia": "2023-12-01",
            "competencia_label": "12/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1382164.82,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 322051.96,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 68916.54,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 48464.11,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 15038.11,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 11315.700834048757,
                "vazio": false
              }
            ],
            "total": 1847951.240834049,
            "linha_planilha": 10
          },
          {
            "competencia": "2024-01-01",
            "competencia_label": "01/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1663684.6480561588,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1123843.125946222,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 196479.89968528994,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 70835.841832623,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 28538.675417658174,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 22120.26827186655,
                "vazio": false
              }
            ],
            "total": 3105502.459209818,
            "linha_planilha": 11
          },
          {
            "competencia": "2024-02-01",
            "competencia_label": "02/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1572843.8688487827,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1035503.4894962959,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 207853.87389735304,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 76127.74452073917,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 17240.63552302082,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 23200.893102294423,
                "vazio": false
              }
            ],
            "total": 2932770.505388486,
            "linha_planilha": 12
          },
          {
            "competencia": "2024-03-01",
            "competencia_label": "03/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1767221.537758797,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1007263.6631943875,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 234629.91879541473,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 54237.46623863877,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 34062.97489388579,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 25779.326278642355,
                "vazio": false
              }
            ],
            "total": 3123194.887159766,
            "linha_planilha": 13
          },
          {
            "competencia": "2024-04-01",
            "competencia_label": "04/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1923577.4378440822,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1154254.4000948227,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 172124.2635383923,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 75862.71911457884,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 56454.759746921714,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 23764.764426358917,
                "vazio": false
              }
            ],
            "total": 3406038.3447651565,
            "linha_planilha": 14
          },
          {
            "competencia": "2024-05-01",
            "competencia_label": "05/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1736882.504509999,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1197947.3737767711,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 194397.82097677822,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 165140.599411441,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 81933.5871481043,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 29296.736164902326,
                "vazio": false
              }
            ],
            "total": 3405598.621987996,
            "linha_planilha": 15
          },
          {
            "competencia": "2024-06-01",
            "competencia_label": "06/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1747194.0253125785,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1110737.639712033,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 1054022.9254566198,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 193184.51564722194,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 35046.61500017497,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 29853.45044110682,
                "vazio": false
              }
            ],
            "total": 4170039.171569735,
            "linha_planilha": 16
          },
          {
            "competencia": "2024-07-01",
            "competencia_label": "07/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1976382.6631733335,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1972280.3620836467,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 916541.2240466556,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 157997.95710670005,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 40977.67447541003,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 36130.8810275395,
                "vazio": false
              }
            ],
            "total": 5100310.761913286,
            "linha_planilha": 17
          },
          {
            "competencia": "2024-08-01",
            "competencia_label": "08/2024",
            "lags": [
              {
                "col": "0",
                "valor": 12977.683446076599,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1457899.940495561,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 881142.8942589776,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 282291.2660146488,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 56065.06567488706,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 75201.90308519124,
                "vazio": false
              }
            ],
            "total": 2765578.7529753423,
            "linha_planilha": 18
          },
          {
            "competencia": "2024-09-01",
            "competencia_label": "09/2024",
            "lags": [
              {
                "col": "0",
                "valor": 8917.087184950016,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1486166.4921019936,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 943195.315391088,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 167503.90318259603,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 71885.129450793,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 41365.27205598953,
                "vazio": false
              }
            ],
            "total": 2719033.19936741,
            "linha_planilha": 19
          },
          {
            "competencia": "2024-10-01",
            "competencia_label": "10/2024",
            "lags": [
              {
                "col": "0",
                "valor": 6940.026432055758,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1579937.4690040944,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 914582.3001630382,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 194687.32004497002,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 69523.51369209967,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 68966.53190907367,
                "vazio": false
              }
            ],
            "total": 2834637.1612453316,
            "linha_planilha": 20
          },
          {
            "competencia": "2024-11-01",
            "competencia_label": "11/2024",
            "lags": [
              {
                "col": "0",
                "valor": 4528.065334620533,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1301749.5106549365,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 615831.4184252155,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 220790.59112684443,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 19248.822367160006,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 43148.21645506181,
                "vazio": false
              }
            ],
            "total": 2205296.6243638387,
            "linha_planilha": 21
          },
          {
            "competencia": "2024-12-01",
            "competencia_label": "12/2024",
            "lags": [
              {
                "col": "0",
                "valor": 4750.789932995005,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 754441.8129724648,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 889534.7585683701,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 95615.7522430593,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 32342.55706901431,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 23577.895654715456,
                "vazio": false
              }
            ],
            "total": 1800263.5664406188,
            "linha_planilha": 22
          },
          {
            "competencia": "2025-01-01",
            "competencia_label": "01/2025",
            "lags": [
              {
                "col": "0",
                "valor": 1332.264471859327,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1643470.1871563473,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 654446.8918410325,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 133034.34970098909,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 29924.567985020392,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 51131.89371795146,
                "vazio": false
              }
            ],
            "total": 2513340.1548732007,
            "linha_planilha": 23
          },
          {
            "competencia": "2025-02-01",
            "competencia_label": "02/2025",
            "lags": [
              {
                "col": "0",
                "valor": 21241.586950255838,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1064499.7836755144,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 550458.715107846,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 185454.62634319274,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 59683.62718679144,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 39139.99089027038,
                "vazio": false
              }
            ],
            "total": 1920478.3301538709,
            "linha_planilha": 24
          },
          {
            "competencia": "2025-03-01",
            "competencia_label": "03/2025",
            "lags": [
              {
                "col": "0",
                "valor": 17650.505888125528,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 981078.6106583301,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 726918.7082735673,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 213162.86407571065,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 50170.35315069389,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 13180.79,
                "vazio": false
              }
            ],
            "total": 2002161.8320464275,
            "linha_planilha": 25
          },
          {
            "competencia": "2025-04-01",
            "competencia_label": "04/2025",
            "lags": [
              {
                "col": "0",
                "valor": 5653.3149179752545,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1037880.0969844107,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 970135.3683175533,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 223689.22296618094,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 18957.510000000006,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 2716.569999999998,
                "vazio": false
              }
            ],
            "total": 2259032.08318612,
            "linha_planilha": 26
          },
          {
            "competencia": "2025-05-01",
            "competencia_label": "05/2025",
            "lags": [
              {
                "col": "0",
                "valor": 2307.8938952046587,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1620038.17345754,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 1002734.2377852682,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 140781.32,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 12815.009999999955,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 19782.89,
                "vazio": false
              }
            ],
            "total": 2798459.5251380126,
            "linha_planilha": 27
          },
          {
            "competencia": "2025-06-01",
            "competencia_label": "06/2025",
            "lags": [
              {
                "col": "0",
                "valor": 5011.6426812985555,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1576781.7711943923,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 430762.18000000005,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 130309.99000000002,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 22087.82000000005,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 22497.73,
                "vazio": false
              }
            ],
            "total": 2187451.133875691,
            "linha_planilha": 28
          },
          {
            "competencia": "2025-07-01",
            "competencia_label": "07/2025",
            "lags": [
              {
                "col": "0",
                "valor": 5923.288731991875,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1597346.1099999999,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 557576.8800000005,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 143579.42999999993,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 17293.54999999998,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 17882.72,
                "vazio": false
              }
            ],
            "total": 2339601.978731992,
            "linha_planilha": 29
          },
          {
            "competencia": "2025-08-01",
            "competencia_label": "08/2025",
            "lags": [
              {
                "col": "0",
                "valor": 34470.03999999999,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1533719.289999999,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 456518.08999999927,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 125368.43999999994,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 30187.85,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 2600.170000000002,
                "vazio": false
              }
            ],
            "total": 2182863.8799999985,
            "linha_planilha": 30
          },
          {
            "competencia": "2025-09-01",
            "competencia_label": "09/2025",
            "lags": [
              {
                "col": "0",
                "valor": 80814.16,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1650418.5999999968,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 528133.2599999991,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 110501.92000000003,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 9726.55,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 4113.839999999999,
                "vazio": false
              }
            ],
            "total": 2383708.3299999954,
            "linha_planilha": 31
          },
          {
            "competencia": "2025-10-01",
            "competencia_label": "10/2025",
            "lags": [
              {
                "col": "0",
                "valor": 55251.179999999826,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1770734.8899999945,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 405605.6199999999,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 78260.91000000006,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 10876.849999999986,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 3682.6899999999996,
                "vazio": false
              }
            ],
            "total": 2324412.1399999945,
            "linha_planilha": 32
          },
          {
            "competencia": "2025-11-01",
            "competencia_label": "11/2025",
            "lags": [
              {
                "col": "0",
                "valor": 68449.47999999972,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1602453.4399999997,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 321229.75999999966,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 82306.78000000003,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 13558.779999999982,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 11354.910000000002,
                "vazio": false
              }
            ],
            "total": 2099353.1499999994,
            "linha_planilha": 33
          },
          {
            "competencia": "2025-12-01",
            "competencia_label": "12/2025",
            "lags": [
              {
                "col": "0",
                "valor": 144931.78999999998,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1327458.979999999,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 214099.15000000014,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 50819.770000000004,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 19558.909999999996,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 3172.3500000000004,
                "vazio": false
              }
            ],
            "total": 1760040.9499999993,
            "linha_planilha": 34
          },
          {
            "competencia": "2026-01-01",
            "competencia_label": "01/2026",
            "lags": [
              {
                "col": "0",
                "valor": 61052.64999999998,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1648275.2300000007,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 313187.1599999999,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 109339.51000000004,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 33342.31000000001,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 5414.7,
                "vazio": false
              }
            ],
            "total": 2170611.560000001,
            "linha_planilha": 35
          },
          {
            "competencia": "2026-02-01",
            "competencia_label": "02/2026",
            "lags": [
              {
                "col": "0",
                "valor": 110354.06,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1448939.969999996,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 360837.4400000003,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 83934.95,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 13952.869999999988,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 8306.709999999997,
                "vazio": false
              }
            ],
            "total": 2026325.9999999963,
            "linha_planilha": 36
          },
          {
            "competencia": "2026-03-01",
            "competencia_label": "03/2026",
            "lags": [
              {
                "col": "0",
                "valor": 106654.01999999963,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1908393.3300000024,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 458957.5900000003,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 92705.95000000004,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 21447.21999999999,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2588158.1100000027,
            "linha_planilha": 37
          },
          {
            "competencia": "2026-04-01",
            "competencia_label": "04/2026",
            "lags": [
              {
                "col": "0",
                "valor": 69964.93,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1727802.6300000008,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 334644.90999999986,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 99624.43000000005,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2232036.900000001,
            "linha_planilha": 38
          },
          {
            "competencia": "2026-05-01",
            "competencia_label": "05/2026",
            "lags": [
              {
                "col": "0",
                "valor": 69611.36,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1771497.6900000004,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 372230.5600000002,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2213339.610000001,
            "linha_planilha": 39
          },
          {
            "competencia": "2026-06-01",
            "competencia_label": "06/2026",
            "lags": [
              {
                "col": "0",
                "valor": 102724.87000000002,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1729422.3199999994,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 1832147.1899999995,
            "linha_planilha": 40
          },
          {
            "competencia": "2026-07-01",
            "competencia_label": "07/2026",
            "lags": [
              {
                "col": "0",
                "valor": 101199.60999999999,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "5+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 101199.60999999999,
            "linha_planilha": 41
          }
        ]
      },
      "proporcoes": {
        "colunas": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5+"
        ],
        "linhas": []
      },
      "fatores": {
        "colunas": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5"
        ],
        "linhas": [
          {
            "competencia": "2024-07-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.3461080128830708
              },
              {
                "col": "2",
                "valor": 0.11218235572568135
              },
              {
                "col": "3",
                "valor": 0.0625843461776859
              },
              {
                "col": "4",
                "valor": 0.03485291658735402
              },
              {
                "col": "5",
                "valor": 0.041771862981618585
              }
            ],
            "total": 0.5974994943554107,
            "linha_planilha": 75
          },
          {
            "competencia": "2024-08-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.38297387703481234
              },
              {
                "col": "2",
                "valor": 0.21094929426389106
              },
              {
                "col": "3",
                "valor": 0.07538654948965537
              },
              {
                "col": "4",
                "valor": 0.03827576585017319
              },
              {
                "col": "5",
                "valor": 0.03760549861567804
              }
            ],
            "total": 0.7451909852542101,
            "linha_planilha": 76
          },
          {
            "competencia": "2024-09-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.41375065733030636
              },
              {
                "col": "2",
                "valor": 0.2911374981250468
              },
              {
                "col": "3",
                "valor": 0.09982777680627437
              },
              {
                "col": "4",
                "valor": 0.0488660314339504
              },
              {
                "col": "5",
                "valor": 0.03666213641635363
              }
            ],
            "total": 0.8902441001119317,
            "linha_planilha": 77
          },
          {
            "competencia": "2024-10-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.4545151664060394
              },
              {
                "col": "2",
                "valor": 0.37458484299270506
              },
              {
                "col": "3",
                "valor": 0.11757936682178043
              },
              {
                "col": "4",
                "valor": 0.05495377412229327
              },
              {
                "col": "5",
                "valor": 0.03753340461250323
              }
            ],
            "total": 1.0391665549553213,
            "linha_planilha": 78
          },
          {
            "competencia": "2024-11-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.48777345099251734
              },
              {
                "col": "2",
                "valor": 0.46106517763666044
              },
              {
                "col": "3",
                "valor": 0.15434544080864634
              },
              {
                "col": "4",
                "valor": 0.058880083098676844
              },
              {
                "col": "5",
                "valor": 0.03700164887805332
              }
            ],
            "total": 1.1990658014145543,
            "linha_planilha": 79
          },
          {
            "competencia": "2024-12-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5143651981075684
              },
              {
                "col": "2",
                "valor": 0.5662703343119868
              },
              {
                "col": "3",
                "valor": 0.18048237571168357
              },
              {
                "col": "4",
                "valor": 0.07033298682628884
              },
              {
                "col": "5",
                "valor": 0.04222371896322277
              }
            ],
            "total": 1.3736746139207503,
            "linha_planilha": 80
          },
          {
            "competencia": "2025-01-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5479066649134778
              },
              {
                "col": "2",
                "valor": 0.6823231804587526
              },
              {
                "col": "3",
                "valor": 0.22309789625380982
              },
              {
                "col": "4",
                "valor": 0.08773266887718009
              },
              {
                "col": "5",
                "valor": 0.06052772499185773
              }
            ],
            "total": 1.601588135495078,
            "linha_planilha": 81
          },
          {
            "competencia": "2025-02-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5411840244471902
              },
              {
                "col": "2",
                "valor": 0.679248845428126
              },
              {
                "col": "3",
                "valor": 0.24015798751080397
              },
              {
                "col": "4",
                "valor": 0.09356114879633187
              },
              {
                "col": "5",
                "valor": 0.06304454591987892
              }
            ],
            "total": 1.617196552102331,
            "linha_planilha": 82
          },
          {
            "competencia": "2025-03-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5445444144415803
              },
              {
                "col": "2",
                "valor": 0.6813506110010904
              },
              {
                "col": "3",
                "valor": 0.23343406583862766
              },
              {
                "col": "4",
                "valor": 0.08143460832207015
              },
              {
                "col": "5",
                "valor": 0.06342504845843276
              }
            ],
            "total": 1.604188748061801,
            "linha_planilha": 83
          },
          {
            "competencia": "2025-04-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5415604985792063
              },
              {
                "col": "2",
                "valor": 0.6754444251590408
              },
              {
                "col": "3",
                "valor": 0.24262576334892055
              },
              {
                "col": "4",
                "valor": 0.085773051037874
              },
              {
                "col": "5",
                "valor": 0.07160486619179224
              }
            ],
            "total": 1.617008604316834,
            "linha_planilha": 84
          },
          {
            "competencia": "2025-05-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5362737036377476
              },
              {
                "col": "2",
                "valor": 0.6881026170953514
              },
              {
                "col": "3",
                "valor": 0.23648909037615223
              },
              {
                "col": "4",
                "valor": 0.08822772776040118
              },
              {
                "col": "5",
                "valor": 0.07301604464355682
              }
            ],
            "total": 1.6221091835132093,
            "linha_planilha": 85
          },
          {
            "competencia": "2025-06-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5385699539665592
              },
              {
                "col": "2",
                "valor": 0.6685020952403063
              },
              {
                "col": "3",
                "valor": 0.2372450696773551
              },
              {
                "col": "4",
                "valor": 0.08573188898527173
              },
              {
                "col": "5",
                "valor": 0.11314933272386545
              }
            ],
            "total": 1.6431983405933577,
            "linha_planilha": 86
          },
          {
            "competencia": "2025-07-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5502602064783649
              },
              {
                "col": "2",
                "valor": 0.6658649557870117
              },
              {
                "col": "3",
                "valor": 0.22328066318808326
              },
              {
                "col": "4",
                "valor": 0.07247038531361787
              },
              {
                "col": "5",
                "valor": 0.10124880332664081
              }
            ],
            "total": 1.6131250140937186,
            "linha_planilha": 87
          },
          {
            "competencia": "2025-08-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5722988210311656
              },
              {
                "col": "2",
                "valor": 0.6299301016294497
              },
              {
                "col": "3",
                "valor": 0.216145322352606
              },
              {
                "col": "4",
                "valor": 0.0611200211217855
              },
              {
                "col": "5",
                "valor": 0.10124207711118939
              }
            ],
            "total": 1.5807363432461963,
            "linha_planilha": 88
          },
          {
            "competencia": "2025-09-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5869775686218264
              },
              {
                "col": "2",
                "valor": 0.5961426717960007
              },
              {
                "col": "3",
                "valor": 0.21654631676381703
              },
              {
                "col": "4",
                "valor": 0.05735388548772601
              },
              {
                "col": "5",
                "valor": 0.09497257499873432
              }
            ],
            "total": 1.5519930176681045,
            "linha_planilha": 89
          },
          {
            "competencia": "2025-10-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6081507174217236
              },
              {
                "col": "2",
                "valor": 0.5591210429998581
              },
              {
                "col": "3",
                "valor": 0.20983552886033485
              },
              {
                "col": "4",
                "valor": 0.05224455415295822
              },
              {
                "col": "5",
                "valor": 0.08443210370452654
              }
            ],
            "total": 1.5137839471394012,
            "linha_planilha": 90
          },
          {
            "competencia": "2025-11-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6343088547920457
              },
              {
                "col": "2",
                "valor": 0.5134647610772936
              },
              {
                "col": "3",
                "valor": 0.19068057621779383
              },
              {
                "col": "4",
                "valor": 0.04710819061834899
              },
              {
                "col": "5",
                "valor": 0.08680405244574098
              }
            ],
            "total": 1.4723664351512231,
            "linha_planilha": 91
          },
          {
            "competencia": "2025-12-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6627384100445115
              },
              {
                "col": "2",
                "valor": 0.46055551867266176
              },
              {
                "col": "3",
                "valor": 0.17861236611624035
              },
              {
                "col": "4",
                "valor": 0.041273537406864076
              },
              {
                "col": "5",
                "valor": 0.052894170300843917
              }
            ],
            "total": 1.3960740025411216,
            "linha_planilha": 92
          },
          {
            "competencia": "2026-01-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6994494236401906
              },
              {
                "col": "2",
                "valor": 0.3983053031026678
              },
              {
                "col": "3",
                "valor": 0.16128024254569606
              },
              {
                "col": "4",
                "valor": 0.03277181000152238
              },
              {
                "col": "5",
                "valor": 0.03310865345176221
              }
            ],
            "total": 1.324915432741839,
            "linha_planilha": 93
          },
          {
            "competencia": "2026-02-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.7121275162033921
              },
              {
                "col": "2",
                "valor": 0.3709886329982199
              },
              {
                "col": "3",
                "valor": 0.15022205295744812
              },
              {
                "col": "4",
                "valor": 0.0307730453153433
              },
              {
                "col": "5",
                "valor": 0.028513567849180393
              }
            ],
            "total": 1.2926248153235835,
            "linha_planilha": 94
          },
          {
            "competencia": "2026-03-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.7268954403313395
              },
              {
                "col": "2",
                "valor": 0.34447618477192665
              },
              {
                "col": "3",
                "valor": 0.1363666781299572
              },
              {
                "col": "4",
                "valor": 0.031921946775856
              },
              {
                "col": "5",
                "valor": 0.026855240855131194
              }
            ],
            "total": 1.2665154908642107,
            "linha_planilha": 95
          },
          {
            "competencia": "2026-04-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.738987931662253
              },
              {
                "col": "2",
                "valor": 0.32632962467785415
              },
              {
                "col": "3",
                "valor": 0.12712998187324706
              },
              {
                "col": "4",
                "valor": 0.030820295692584945
              },
              {
                "col": "5",
                "valor": 0.02511340434405995
              }
            ],
            "total": 1.248381238249999,
            "linha_planilha": 96
          },
          {
            "competencia": "2026-05-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.7439599049479731
              },
              {
                "col": "2",
                "valor": 0.3193333790611227
              },
              {
                "col": "3",
                "valor": 0.1189842930124771
              },
              {
                "col": "4",
                "valor": 0.03610775447303444
              },
              {
                "col": "5",
                "valor": 0.021869956569393827
              }
            ],
            "total": 1.2402552880640012,
            "linha_planilha": 97
          },
          {
            "competencia": "2026-06-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.7567330045655128
              },
              {
                "col": "2",
                "valor": 0.3083088317414691
              },
              {
                "col": "3",
                "valor": 0.11483744988396641
              },
              {
                "col": "4",
                "valor": 0.03109824482923197
              },
              {
                "col": "5",
                "valor": 0.015050095986551357
              }
            ],
            "total": 1.2260276270067318,
            "linha_planilha": 98
          },
          {
            "competencia": "2026-07-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.7566378010134774
              },
              {
                "col": "2",
                "valor": 0.30370355195278625
              },
              {
                "col": "3",
                "valor": 0.1150515177963304
              },
              {
                "col": "4",
                "valor": 0.03333917144468887
              },
              {
                "col": "5",
                "valor": 0.0169297737601977
              }
            ],
            "total": 1.2256618159674808,
            "linha_planilha": 99
          }
        ]
      },
      "peona_serie": [
        {
          "competencia": "2024-07-01",
          "total_avisado": 3424135.537081914,
          "media_nm": 3192428.1079176,
          "fator_peona": 0.5974994943554107,
          "peona": 1907474.1802467664,
          "variacao_r": null,
          "variacao_pct": null,
          "linha_planilha": 104
        },
        {
          "competencia": "2024-08-01",
          "total_avisado": 3289049.6459494582,
          "media_nm": 3254350.3081100085,
          "fator_peona": 0.7451909852542101,
          "peona": 2425112.5124628395,
          "variacao_r": 517638.33221607306,
          "variacao_pct": 0.2713737032860424,
          "linha_planilha": 105
        },
        {
          "competencia": "2024-09-01",
          "total_avisado": 2685136.7282612454,
          "media_nm": 3182425.3083301526,
          "fator_peona": 0.8902441001119317,
          "peona": 2833135.3547878135,
          "variacao_r": 408022.842324974,
          "variacao_pct": 0.1682490359635329,
          "linha_planilha": 106
        },
        {
          "competencia": "2024-10-01",
          "total_avisado": 2591489.0048920605,
          "media_nm": 3072609.6830174215,
          "fator_peona": 1.0391665549553213,
          "peona": 3192953.2190235755,
          "variacao_r": 359817.86423576204,
          "variacao_pct": 0.12700341465426046,
          "linha_planilha": 107
        },
        {
          "competencia": "2024-11-01",
          "total_avisado": 2864778.41006378,
          "media_nm": 3008558.3308049464,
          "fator_peona": 1.1990658014145543,
          "peona": 3607459.406029067,
          "variacao_r": 414506.18700549146,
          "variacao_pct": 0.12981906046598768,
          "linha_planilha": 108
        },
        {
          "competencia": "2024-12-01",
          "total_avisado": 2465344.928302699,
          "media_nm": 2886655.7090918594,
          "fator_peona": 1.3736746139207503,
          "peona": 3965325.66670889,
          "variacao_r": 357866.2606798229,
          "variacao_pct": 0.09920174294455797,
          "linha_planilha": 109
        },
        {
          "competencia": "2025-01-01",
          "total_avisado": 1713567.1380515257,
          "media_nm": 2601560.9759201277,
          "fator_peona": 1.601588135495078,
          "peona": 4166629.192800673,
          "variacao_r": 201303.5260917833,
          "variacao_pct": 0.05076595039389531,
          "linha_planilha": 110
        },
        {
          "competencia": "2025-02-01",
          "total_avisado": 2875375.1650691847,
          "media_nm": 2532615.229106749,
          "fator_peona": 1.617196552102331,
          "peona": 4095736.6163132894,
          "variacao_r": -70892.5764873838,
          "variacao_pct": -0.017014371379597604,
          "linha_planilha": 111
        },
        {
          "competencia": "2025-03-01",
          "total_avisado": 1868924.8743043584,
          "media_nm": 2396579.9201139347,
          "fator_peona": 1.604188748061801,
          "peona": 3844566.5416776235,
          "variacao_r": -251170.07463566586,
          "variacao_pct": -0.0613247623480615,
          "linha_planilha": 112
        },
        {
          "competencia": "2025-04-01",
          "total_avisado": 1738065.009564203,
          "media_nm": 2254342.5875592916,
          "fator_peona": 1.617008604316834,
          "peona": 3645291.36116125,
          "variacao_r": -199275.18051637337,
          "variacao_pct": -0.051832938344570145,
          "linha_planilha": 113
        },
        {
          "competencia": "2025-05-01",
          "total_avisado": 1987338.6122544894,
          "media_nm": 2108102.6212577433,
          "fator_peona": 1.6221091835132093,
          "peona": 3419572.6217304543,
          "variacao_r": -225718.7394307959,
          "variacao_pct": -0.06192063049766494,
          "linha_planilha": 114
        },
        {
          "competencia": "2025-06-01",
          "total_avisado": 3002404.7339025764,
          "media_nm": 2197612.588857723,
          "fator_peona": 1.6431983405933577,
          "peona": 3611113.3592780833,
          "variacao_r": 191540.73754762905,
          "variacao_pct": 0.05601306324961186,
          "linha_planilha": 115
        },
        {
          "competencia": "2025-07-01",
          "total_avisado": 2927894.6031922903,
          "media_nm": 2400000.499714517,
          "fator_peona": 1.6131250140937186,
          "peona": 3871500.839926912,
          "variacao_r": 260387.48064882867,
          "variacao_pct": 0.07210725744175583,
          "linha_planilha": 116
        },
        {
          "competencia": "2025-08-01",
          "total_avisado": 2240252.0799999996,
          "media_nm": 2294146.652202986,
          "fator_peona": 1.5807363432461963,
          "peona": 3626440.9898738516,
          "variacao_r": -245059.85005306033,
          "variacao_pct": -0.0632984106643476,
          "linha_planilha": 117
        },
        {
          "competencia": "2025-09-01",
          "total_avisado": 2324084.1899999995,
          "media_nm": 2370006.53815226,
          "fator_peona": 1.5519930176681045,
          "peona": 3678233.599040063,
          "variacao_r": 51792.60916621145,
          "variacao_pct": 0.014281939044598513,
          "linha_planilha": 118
        },
        {
          "competencia": "2025-10-01",
          "total_avisado": 2343600.729999996,
          "media_nm": 2470929.158224892,
          "fator_peona": 1.5137839471394012,
          "peona": 3740452.894239515,
          "variacao_r": 62219.29519945197,
          "variacao_pct": 0.01691553663576184,
          "linha_planilha": 119
        },
        {
          "competencia": "2025-11-01",
          "total_avisado": 2531309.209999993,
          "media_nm": 2561590.9245158094,
          "fator_peona": 1.4723664351512231,
          "peona": 3771600.497845068,
          "variacao_r": 31147.603605553042,
          "variacao_pct": 0.008327227874870946,
          "linha_planilha": 120
        },
        {
          "competencia": "2025-12-01",
          "total_avisado": 2316562.3699999996,
          "media_nm": 2447283.8638653797,
          "fator_peona": 1.3960740025411216,
          "peona": 3416589.379180842,
          "variacao_r": -355011.118664226,
          "variacao_pct": -0.09412744506398918,
          "linha_planilha": 121
        },
        {
          "competencia": "2026-01-01",
          "total_avisado": 1800756.0399999989,
          "media_nm": 2259427.436666664,
          "fator_peona": 1.324915432741839,
          "peona": 2993550.2799999975,
          "variacao_r": -423039.0991808446,
          "variacao_pct": -0.1238191225901053,
          "linha_planilha": 122
        },
        {
          "competencia": "2026-02-01",
          "total_avisado": 2070419.770000001,
          "media_nm": 2231122.0516666644,
          "fator_peona": 1.2926248153235835,
          "peona": 2884003.7299999967,
          "variacao_r": -109546.55000000075,
          "variacao_pct": -0.03659419076134607,
          "linha_planilha": 123
        },
        {
          "competencia": "2026-03-01",
          "total_avisado": 1935481.4399999955,
          "media_nm": 2166354.926666664,
          "fator_peona": 1.2665154908642107,
          "peona": 2743722.073333331,
          "variacao_r": -140281.6566666658,
          "variacao_pct": -0.04864128822283664,
          "linha_planilha": 124
        },
        {
          "competencia": "2026-04-01",
          "total_avisado": 2479996.680000003,
          "media_nm": 2189087.5849999986,
          "fator_peona": 1.248381238249999,
          "peona": 2732815.8699999982,
          "variacao_r": -10906.203333332669,
          "variacao_pct": -0.003974966502377164,
          "linha_planilha": 125
        },
        {
          "competencia": "2026-05-01",
          "total_avisado": 2385821.8400000012,
          "media_nm": 2164839.69,
          "fator_peona": 1.2402552880640012,
          "peona": 2684953.873333333,
          "variacao_r": -47861.99666666519,
          "variacao_pct": -0.01751380222578447,
          "linha_planilha": 126
        },
        {
          "competencia": "2026-06-01",
          "total_avisado": 2320703.8200000003,
          "media_nm": 2165529.9316666666,
          "fator_peona": 1.2260276270067318,
          "peona": 2654999.5233333334,
          "variacao_r": -29954.349999999627,
          "variacao_pct": -0.011156374155065762,
          "linha_planilha": 127
        },
        {
          "competencia": "2026-07-01",
          "total_avisado": 2333640.2499999995,
          "media_nm": 2254343.966666667,
          "fator_peona": 1.2256618159674808,
          "peona": 2763063.3200000008,
          "variacao_r": 108063.79666666733,
          "variacao_pct": 0.04070200228548204,
          "linha_planilha": 128
        }
      ],
      "runoff_aux": [
        {
          "competencia": "2023-08-01",
          "runoff_puro": 1605870.6299999997,
          "avisado_mes": 2683676.3099999996,
          "ocorrido_mes": 2860304.7943430347,
          "linha_planilha": 6
        },
        {
          "competencia": "2023-09-01",
          "runoff_puro": 1528267.9899999995,
          "avisado_mes": 2499143.71,
          "ocorrido_mes": 2413746.9995392854,
          "linha_planilha": 7
        },
        {
          "competencia": "2023-10-01",
          "runoff_puro": 1560616.5699999998,
          "avisado_mes": 2455577.88,
          "ocorrido_mes": 2480223.0023354026,
          "linha_planilha": 8
        },
        {
          "competencia": "2023-11-01",
          "runoff_puro": 1625488.19,
          "avisado_mes": 2453520.0000000005,
          "ocorrido_mes": 2522785.8588305484,
          "linha_planilha": 9
        },
        {
          "competencia": "2023-12-01",
          "runoff_puro": 1027276.87,
          "avisado_mes": 2453500.1400000006,
          "ocorrido_mes": 1847951.240834049,
          "linha_planilha": 10
        },
        {
          "competencia": "2024-01-01",
          "runoff_puro": 1825530.907073611,
          "avisado_mes": 2293145.048056159,
          "ocorrido_mes": 3105502.459209818,
          "linha_planilha": 11
        },
        {
          "competencia": "2024-02-01",
          "runoff_puro": 1850275.7937761024,
          "avisado_mes": 2917516.4447950046,
          "ocorrido_mes": 2932770.505388486,
          "linha_planilha": 12
        },
        {
          "competencia": "2024-03-01",
          "runoff_puro": 1859177.9435215958,
          "avisado_mes": 3116686.7269403827,
          "ocorrido_mes": 3123194.887159766,
          "linha_planilha": 13
        },
        {
          "competencia": "2024-04-01",
          "runoff_puro": 2017729.1408307008,
          "avisado_mes": 3250382.756768446,
          "ocorrido_mes": 3406038.3447651565,
          "linha_planilha": 14
        },
        {
          "competencia": "2024-05-01",
          "runoff_puro": 2169139.5233073183,
          "avisado_mes": 3249086.523338633,
          "ocorrido_mes": 3405598.621987996,
          "linha_planilha": 15
        },
        {
          "competencia": "2024-06-01",
          "runoff_puro": 3126413.2056986457,
          "avisado_mes": 3196760.658581219,
          "ocorrido_mes": 4170039.171569735,
          "linha_planilha": 16
        },
        {
          "competencia": "2024-07-01",
          "runoff_puro": 4787150.908196724,
          "avisado_mes": 3424135.537081914,
          "ocorrido_mes": 5100310.761913286,
          "linha_planilha": 17
        },
        {
          "competencia": "2024-08-01",
          "runoff_puro": 4263867.30482364,
          "avisado_mes": 3289049.6459494582,
          "ocorrido_mes": 2765578.7529753423,
          "linha_planilha": 18
        },
        {
          "competencia": "2024-09-01",
          "runoff_puro": 4287213.031449081,
          "avisado_mes": 2685136.7282612454,
          "ocorrido_mes": 2719033.19936741,
          "linha_planilha": 19
        },
        {
          "competencia": "2024-10-01",
          "runoff_puro": 4478857.774182746,
          "avisado_mes": 2591489.0048920605,
          "ocorrido_mes": 2834637.1612453316,
          "linha_planilha": 20
        },
        {
          "competencia": "2024-11-01",
          "runoff_puro": 3811725.2341377917,
          "avisado_mes": 2864778.41006378,
          "ocorrido_mes": 2205296.6243638387,
          "linha_planilha": 21
        },
        {
          "competencia": "2024-12-01",
          "runoff_puro": 3127918.6953940904,
          "avisado_mes": 2465344.928302699,
          "ocorrido_mes": 1800263.5664406188,
          "linha_planilha": 22
        },
        {
          "competencia": "2025-01-01",
          "runoff_puro": 4010932.8766814955,
          "avisado_mes": 1713567.1380515257,
          "ocorrido_mes": 2513340.1548732007,
          "linha_planilha": 23
        },
        {
          "competencia": "2025-02-01",
          "runoff_puro": 3085491.7802396743,
          "avisado_mes": 2875375.1650691847,
          "ocorrido_mes": 1920478.3301538709,
          "linha_planilha": 24
        },
        {
          "competencia": "2025-03-01",
          "runoff_puro": 3223482.867981743,
          "avisado_mes": 1868924.8743043584,
          "ocorrido_mes": 2002161.8320464275,
          "linha_planilha": 25
        },
        {
          "competencia": "2025-04-01",
          "runoff_puro": 3750582.2316036597,
          "avisado_mes": 1738065.009564203,
          "ocorrido_mes": 2259032.08318612,
          "linha_planilha": 26
        },
        {
          "competencia": "2025-05-01",
          "runoff_puro": 4557665.864487184,
          "avisado_mes": 1987338.6122544894,
          "ocorrido_mes": 2798459.5251380126,
          "linha_planilha": 27
        },
        {
          "competencia": "2025-06-01",
          "runoff_puro": 3741544.1244602976,
          "avisado_mes": 3002404.7339025764,
          "ocorrido_mes": 2187451.133875691,
          "linha_planilha": 28
        },
        {
          "competencia": "2025-07-01",
          "runoff_puro": 3158250.5299999993,
          "avisado_mes": 2927894.6031922903,
          "ocorrido_mes": 2339601.978731992,
          "linha_planilha": 29
        },
        {
          "competencia": "2025-08-01",
          "runoff_puro": 3101289.349999998,
          "avisado_mes": 2240252.0799999996,
          "ocorrido_mes": 2182863.8799999985,
          "linha_planilha": 30
        },
        {
          "competencia": "2025-09-01",
          "runoff_puro": 3161307.3499999945,
          "avisado_mes": 2324084.1899999995,
          "ocorrido_mes": 2383708.3299999954,
          "linha_planilha": 31
        },
        {
          "competencia": "2025-10-01",
          "runoff_puro": 3140757.8099999935,
          "avisado_mes": 2343600.729999996,
          "ocorrido_mes": 2324412.1399999945,
          "linha_planilha": 32
        },
        {
          "competencia": "2025-11-01",
          "runoff_puro": 2709349.4,
          "avisado_mes": 2531309.209999993,
          "ocorrido_mes": 2099353.1499999994,
          "linha_planilha": 33
        },
        {
          "competencia": "2025-12-01",
          "runoff_puro": 2161828.6299999994,
          "avisado_mes": 2316562.3699999996,
          "ocorrido_mes": 1760040.9499999993,
          "linha_planilha": 34
        },
        {
          "competencia": "2026-01-01",
          "runoff_puro": 2531446.9800000014,
          "avisado_mes": 1800756.0399999989,
          "ocorrido_mes": 2170611.560000001,
          "linha_planilha": 35
        },
        {
          "competencia": "2026-02-01",
          "runoff_puro": 2488762.6099999966,
          "avisado_mes": 2070419.770000001,
          "ocorrido_mes": 2026325.9999999963,
          "linha_planilha": 36
        },
        {
          "competencia": "2026-03-01",
          "runoff_puro": 3141439.280000004,
          "avisado_mes": 1935481.4399999955,
          "ocorrido_mes": 2588158.1100000027,
          "linha_planilha": 37
        },
        {
          "competencia": "2026-04-01",
          "runoff_puro": 2893479.5000000014,
          "avisado_mes": 2479996.680000003,
          "ocorrido_mes": 2232036.900000001,
          "linha_planilha": 38
        },
        {
          "competencia": "2026-05-01",
          "runoff_puro": 2720997.2700000005,
          "avisado_mes": 2385821.8400000012,
          "ocorrido_mes": 2213339.610000001,
          "linha_planilha": 39
        },
        {
          "competencia": "2026-06-01",
          "runoff_puro": 2232440.6399999997,
          "avisado_mes": 2320703.8200000003,
          "ocorrido_mes": 1832147.1899999995,
          "linha_planilha": 40
        },
        {
          "competencia": "2026-07-01",
          "runoff_puro": 0.0,
          "avisado_mes": 2333640.2499999995,
          "ocorrido_mes": 101199.60999999999,
          "linha_planilha": 41
        }
      ],
      "formulas": {
        "celula_triangulo": "SUMIFS(Base_Dados[Despesa OD]; atraso; competência de aviso)",
        "total_avisado": "SUM(lags da linha)",
        "proporcao_Mk": "SUM(coluna j na janela) / SUM(totais na janela)",
        "fator_Ik": "SUM(j × Mk_j)  — coluna Total do bloco Fator Médio",
        "base_Bk": "AVERAGE(totais da janela de 6 meses)",
        "peona": "Ik × Bk"
      },
      "interpretacao": {
        "eixo": "aviso",
        "texto_j": "Cada coluna indica há quantos meses o evento ocorreu em relação ao mês de aviso. Coluna 0 = ocorreu no próprio mês do aviso; coluna 1 = ocorreu 1 mês antes do aviso; coluna 5+ agrupa atrasos ≥ 5 meses."
      },
      "titulo_aviso": "Abertura das Despesas por Data de Aviso",
      "titulo_ocorrencia": "Abertura das Despesas por Data de Ocorrência"
    },
    "12": {
      "aba": "Odonto 12",
      "janela": 12,
      "arquivo": "PEONA_INPUT.xlsx",
      "intervalo_triangulo_aviso": "B5:O41",
      "n_lags": 12,
      "colunas_lag": [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11+"
      ],
      "triangulo_aviso": {
        "colunas": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11+"
        ],
        "linhas": [
          {
            "competencia": "2023-08-01",
            "competencia_label": "08/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1737479.4,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 671416.99,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 133606.23,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 75756.6,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 23815.9,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 22513.13,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 15497.58,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 3590.48,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2683676.3099999996,
            "linha_planilha": 6
          },
          {
            "competencia": "2023-09-01",
            "competencia_label": "09/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1429890.25,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 810471.13,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 106500.14,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 73832.17,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 38226.77,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 15603.85,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 22738.63,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 1880.77,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2499143.71,
            "linha_planilha": 7
          },
          {
            "competencia": "2023-10-01",
            "competencia_label": "10/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1490129.01,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 693813.95,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 157934.96,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 56654.26,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 28579.72,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 17491.14,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 9368.5,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 1606.34,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2455577.88,
            "linha_planilha": 8
          },
          {
            "competencia": "2023-11-01",
            "competencia_label": "11/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1465669.89,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 703844.53,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 144249.74,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 69704.49,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 32850.65,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 17166.74,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 14828.48,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 5205.48,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2453520.0000000005,
            "linha_planilha": 9
          },
          {
            "competencia": "2023-12-01",
            "competencia_label": "12/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1382164.82,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 775089.54,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 148737.22,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 65960.65,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 38517.73,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 20997.95,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 18075.31,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 3956.92,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2453500.1400000006,
            "linha_planilha": 10
          },
          {
            "competencia": "2024-01-01",
            "competencia_label": "01/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1663684.6480561588,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 322051.96,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 142245.22,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 75198.2,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 46286.52,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 23280.93,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 15905.94,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 3093.22,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 1398.41,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2293145.0480561596,
            "linha_planilha": 11
          },
          {
            "competencia": "2024-02-01",
            "competencia_label": "02/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1572843.8688487827,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1123843.125946222,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 68916.54,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 74064.17,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 36508.78,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 17199.31,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 21214.91,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 2444.43,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 481.31,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2917516.444795005,
            "linha_planilha": 12
          },
          {
            "competencia": "2024-03-01",
            "competencia_label": "03/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1767221.537758797,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1035503.4894962959,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 196479.89968528994,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 48464.11,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 35508.97,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 16224.11,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 15586.49,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 1698.12,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 3116686.7269403827,
            "linha_planilha": 13
          },
          {
            "competencia": "2024-04-01",
            "competencia_label": "04/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1923577.4378440822,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1007263.6631943875,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 207853.87389735304,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 70835.841832623,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 15038.11,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 16379.0,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 8684.73,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 750.1,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 3250382.756768446,
            "linha_planilha": 14
          },
          {
            "competencia": "2024-05-01",
            "competencia_label": "05/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1736882.504509999,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1154254.4000948227,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 234629.91879541473,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 76127.74452073917,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 28538.675417658174,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 6156.68,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 12236.42,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 260.18,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 3249086.5233386336,
            "linha_planilha": 15
          },
          {
            "competencia": "2024-06-01",
            "competencia_label": "06/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1747194.0253125785,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1197947.3737767711,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 172124.2635383923,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 54237.46623863877,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 17240.63552302082,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 2845.868955150989,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 5025.62,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 145.40523666666667,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 3196760.658581219,
            "linha_planilha": 16
          },
          {
            "competencia": "2024-07-01",
            "competencia_label": "07/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1976382.6631733335,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1110737.639712033,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 194397.82097677822,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 75862.71911457884,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 34062.97489388579,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 15610.00178463788,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 14957.389918333332,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 107.03,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 1576.6756366666664,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 440.62187166666666,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 3424135.537081914,
            "linha_planilha": 17
          },
          {
            "competencia": "2024-08-01",
            "competencia_label": "08/2024",
            "lags": [
              {
                "col": "0",
                "valor": 12977.683446076599,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1972280.3620836467,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 1054022.9254566198,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 165140.599411441,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 56454.759746921714,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 18918.885749249057,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 4650.269946082087,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 3718.4527865564805,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 24.598786725087233,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 13.154149189866892,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 39.52101756205109,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 808.4333693879213,
                "vazio": false
              }
            ],
            "total": 3289049.6459494587,
            "linha_planilha": 18
          },
          {
            "competencia": "2024-09-01",
            "competencia_label": "09/2024",
            "lags": [
              {
                "col": "0",
                "valor": 8917.087184950016,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1457899.940495561,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 916541.2240466556,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 193184.51564722194,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 81933.5871481043,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 18351.748851727138,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 4263.667118935435,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 2535.5213601803707,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 416.16099747727367,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 1.554697742310165,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 2.637022394466834,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 1089.0836902958565,
                "vazio": false
              }
            ],
            "total": 2685136.728261246,
            "linha_planilha": 19
          },
          {
            "competencia": "2024-10-01",
            "competencia_label": "10/2024",
            "lags": [
              {
                "col": "0",
                "valor": 6940.026432055758,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1486166.4921019936,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 881142.8942589776,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 157997.95710670005,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 35046.61500017497,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 19725.478282077387,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 2947.8078916466407,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 1249.332257322352,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 208.17544618733575,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 1.6910560059837927,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 62.53505891849292,
                "vazio": false
              }
            ],
            "total": 2591489.0048920605,
            "linha_planilha": 20
          },
          {
            "competencia": "2024-11-01",
            "competencia_label": "11/2024",
            "lags": [
              {
                "col": "0",
                "valor": 4528.065334620533,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1579937.4690040944,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 943195.315391088,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 282291.2660146488,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 40977.67447541003,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 11054.59189070496,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 2517.9854434303074,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 156.14988776314257,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 49.50674369678122,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 30.947529865077254,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 39.438348458123684,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2864778.41006378,
            "linha_planilha": 21
          },
          {
            "competencia": "2024-12-01",
            "competencia_label": "12/2024",
            "lags": [
              {
                "col": "0",
                "valor": 4750.789932995005,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1301749.5106549365,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 914582.3001630382,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 167503.90318259603,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 56065.06567488706,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 16362.060621997,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 3297.946322712248,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 849.6294277236456,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 126.96799912881018,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 51.497208283963374,
                "vazio": false
              },
              {
                "col": "10",
                "valor": -4.686972130231439,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 9.944086530722409,
                "vazio": false
              }
            ],
            "total": 2465344.9283026983,
            "linha_planilha": 22
          },
          {
            "competencia": "2025-01-01",
            "competencia_label": "01/2025",
            "lags": [
              {
                "col": "0",
                "valor": 1332.264471859327,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 754441.8129724648,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 615831.4184252155,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 194687.32004497002,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 71885.129450793,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 54834.07985096379,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 15088.714573828704,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 3818.7874029614,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 1380.8381434909559,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 90.22343795222277,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 30.352032364865146,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 146.19724466090096,
                "vazio": false
              }
            ],
            "total": 1713567.1380515255,
            "linha_planilha": 23
          },
          {
            "competencia": "2025-02-01",
            "competencia_label": "02/2025",
            "lags": [
              {
                "col": "0",
                "valor": 21241.586950255838,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1643470.1871563473,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 889534.7585683701,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 220790.59112684443,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 69523.51369209967,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 19406.08587101166,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 9436.674293083215,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 1708.3296632215117,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 90.75049898022625,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 32.724639996933405,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 34.57226650917203,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 105.3903424649674,
                "vazio": false
              }
            ],
            "total": 2875375.165069185,
            "linha_planilha": 24
          },
          {
            "competencia": "2025-03-01",
            "competencia_label": "03/2025",
            "lags": [
              {
                "col": "0",
                "valor": 17650.505888125528,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1064499.7836755144,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 654446.8918410325,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 95615.7522430593,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 19248.822367160006,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 14691.149827045047,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 1902.8423013416211,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 811.752045908798,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 52.511328754390725,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 1.7427492081127158,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.7137914210921731,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 2.4062457875341083,
                "vazio": false
              }
            ],
            "total": 1868924.8743043588,
            "linha_planilha": 25
          },
          {
            "competencia": "2025-04-01",
            "competencia_label": "04/2025",
            "lags": [
              {
                "col": "0",
                "valor": 5653.3149179752545,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 981078.6106583301,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 550458.715107846,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 133034.34970098909,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 32342.55706901431,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 17191.7533497443,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 10910.992931303548,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 4129.333226603633,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 3265.382602396947,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 1738065.009564203,
            "linha_planilha": 26
          },
          {
            "competencia": "2025-05-01",
            "competencia_label": "05/2025",
            "lags": [
              {
                "col": "0",
                "valor": 2307.8938952046587,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1037880.0969844107,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 726918.7082735673,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 185454.62634319274,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 29924.567985020392,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1776.5925851102065,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 2510.6141728449093,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 368.16592801480806,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 22.23767756083513,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 175.10840956297972,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 1987338.6122544894,
            "linha_planilha": 27
          },
          {
            "competencia": "2025-06-01",
            "competencia_label": "06/2025",
            "lags": [
              {
                "col": "0",
                "valor": 5011.6426812985555,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1620038.17345754,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 970135.3683175533,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 213162.86407571065,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 59683.62718679144,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 37697.5933731281,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 16810.507107604328,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 20522.84207541788,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 38509.42685259937,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 12788.22553573167,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 5283.449238398533,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 2761.0140008022117,
                "vazio": false
              }
            ],
            "total": 3002404.7339025764,
            "linha_planilha": 28
          },
          {
            "competencia": "2025-07-01",
            "competencia_label": "07/2025",
            "lags": [
              {
                "col": "0",
                "valor": 5923.288731991875,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1576781.7711943923,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 1002734.2377852682,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 223689.22296618094,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 50170.35315069389,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 36453.210890270384,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 12656.880344823363,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 4807.595962000921,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 1952.0568570547257,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 2561.516370110905,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 2075.7574437401136,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 8088.711495762835,
                "vazio": false
              }
            ],
            "total": 2927894.60319229,
            "linha_planilha": 29
          },
          {
            "competencia": "2025-08-01",
            "competencia_label": "08/2025",
            "lags": [
              {
                "col": "0",
                "valor": 34470.03999999999,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1597346.1099999999,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 430762.18000000005,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 140781.32,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 18957.510000000006,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 8631.97,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 2458.0800000000004,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 93.72000000000003,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 6751.15,
                "vazio": false
              }
            ],
            "total": 2240252.08,
            "linha_planilha": 30
          },
          {
            "competencia": "2025-09-01",
            "competencia_label": "09/2025",
            "lags": [
              {
                "col": "0",
                "valor": 80814.16,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1533719.289999999,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 557576.8800000005,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 130309.99000000002,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 12815.009999999955,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 2101.379999999999,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 3791.350000000002,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 183.20000000000005,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 183.2,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 183.2,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 970.9499999999999,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 1435.5800000000004,
                "vazio": false
              }
            ],
            "total": 2324084.1900000004,
            "linha_planilha": 31
          },
          {
            "competencia": "2025-10-01",
            "competencia_label": "10/2025",
            "lags": [
              {
                "col": "0",
                "valor": 55251.179999999826,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1650418.5999999968,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 456518.08999999927,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 143579.42999999993,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 22087.82000000005,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 15237.44999999998,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 296.68999999999886,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 211.4699999999999,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2343600.7299999963,
            "linha_planilha": 32
          },
          {
            "competencia": "2025-11-01",
            "competencia_label": "11/2025",
            "lags": [
              {
                "col": "0",
                "valor": 68449.47999999972,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1770734.8899999945,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 528133.2599999991,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 125368.43999999994,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 17293.54999999998,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 16920.12,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 4409.4700000000175,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2531309.2099999934,
            "linha_planilha": 33
          },
          {
            "competencia": "2025-12-01",
            "competencia_label": "12/2025",
            "lags": [
              {
                "col": "0",
                "valor": 144931.78999999998,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1602453.4399999997,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 405605.6199999999,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 110501.92000000003,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 30187.85,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 17135.84,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 5577.61,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 90.47,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 77.83,
                "vazio": false
              }
            ],
            "total": 2316562.3699999996,
            "linha_planilha": 34
          },
          {
            "competencia": "2026-01-01",
            "competencia_label": "01/2026",
            "lags": [
              {
                "col": "0",
                "valor": 61052.64999999998,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1327458.979999999,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 321229.75999999966,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 78260.91000000006,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 9726.55,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 2280.310000000002,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 746.8800000000001,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 1800756.0399999989,
            "linha_planilha": 35
          },
          {
            "competencia": "2026-02-01",
            "competencia_label": "02/2026",
            "lags": [
              {
                "col": "0",
                "valor": 110354.06,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1648275.2300000007,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 214099.15000000014,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 82306.78000000003,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 10876.849999999986,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 3279.419999999999,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 319.84999999999985,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 908.4300000000001,
                "vazio": false
              }
            ],
            "total": 2070419.770000001,
            "linha_planilha": 36
          },
          {
            "competencia": "2026-03-01",
            "competencia_label": "03/2026",
            "lags": [
              {
                "col": "0",
                "valor": 106654.01999999963,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1448939.969999996,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 313187.1599999999,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 50819.770000000004,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 13558.779999999982,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1879.6499999999996,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 442.0899999999999,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 1935481.4399999955,
            "linha_planilha": 37
          },
          {
            "competencia": "2026-04-01",
            "competencia_label": "04/2026",
            "lags": [
              {
                "col": "0",
                "valor": 69964.93,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1908393.3300000024,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 360837.4400000003,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 109339.51000000004,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 19558.909999999996,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 9759.68,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 1803.04,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 294.3299999999998,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.009999999999990905,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 45.5,
                "vazio": false
              }
            ],
            "total": 2479996.680000003,
            "linha_planilha": 38
          },
          {
            "competencia": "2026-05-01",
            "competencia_label": "05/2026",
            "lags": [
              {
                "col": "0",
                "valor": 69611.36,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1727802.6300000008,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 458957.5900000003,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 83934.95,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 33342.31000000001,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 2287.220000000001,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 1308.1300000000006,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 98.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 8479.650000000001,
                "vazio": false
              }
            ],
            "total": 2385821.8400000012,
            "linha_planilha": 39
          },
          {
            "competencia": "2026-06-01",
            "competencia_label": "06/2026",
            "lags": [
              {
                "col": "0",
                "valor": 102724.87000000002,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1771497.6900000004,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 334644.90999999986,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 92705.95000000004,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 13952.869999999988,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 4073.8499999999995,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 816.5799999999992,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 287.09999999999997,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2320703.8200000008,
            "linha_planilha": 40
          },
          {
            "competencia": "2026-07-01",
            "competencia_label": "07/2026",
            "lags": [
              {
                "col": "0",
                "valor": 101199.60999999999,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1729422.3199999994,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 372230.5600000002,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 99624.43000000005,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 21447.21999999999,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 8306.709999999997,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 1340.8500000000006,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 68.55000000000007,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2333640.2499999995,
            "linha_planilha": 41
          }
        ]
      },
      "triangulo_ocorrencia": {
        "colunas": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11+"
        ],
        "linhas": [
          {
            "competencia": "2023-08-01",
            "competencia_label": "08/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1737479.4,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 810471.13,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 157934.96,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 69704.49,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 38517.73,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 23280.93,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 21214.91,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 1698.12,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 3.1243430347769467,
                "vazio": false
              }
            ],
            "total": 2860304.794343035,
            "linha_planilha": 6
          },
          {
            "competencia": "2023-09-01",
            "competencia_label": "09/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1429890.25,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 693813.95,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 144249.74,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 65960.65,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 46286.52,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 17199.31,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 15586.49,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 750.1,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 9.989539285280284,
                "vazio": false
              }
            ],
            "total": 2413746.999539286,
            "linha_planilha": 7
          },
          {
            "competencia": "2023-10-01",
            "competencia_label": "10/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1490129.01,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 703844.53,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 148737.22,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 75198.2,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 36508.78,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 16224.11,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 8684.73,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 260.18,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 145.40523666666667,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 440.62187166666666,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 39.52101756205109,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 10.694209506949367,
                "vazio": false
              }
            ],
            "total": 2480223.002335402,
            "linha_planilha": 8
          },
          {
            "competencia": "2023-11-01",
            "competencia_label": "11/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1465669.89,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 775089.54,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 142245.22,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 74064.17,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 35508.97,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 16379.0,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 12236.42,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 1576.6756366666664,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 13.154149189866892,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 2.637022394466834,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.18202229746268891,
                "vazio": false
              }
            ],
            "total": 2522785.858830549,
            "linha_planilha": 9
          },
          {
            "competencia": "2023-12-01",
            "competencia_label": "12/2023",
            "lags": [
              {
                "col": "0",
                "valor": 1382164.82,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 322051.96,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 68916.54,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 48464.11,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 15038.11,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 6156.68,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 5025.62,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 107.03,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 24.598786725087233,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 1.554697742310165,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.21734958135897037,
                "vazio": false
              }
            ],
            "total": 1847951.2408340492,
            "linha_planilha": 10
          },
          {
            "competencia": "2024-01-01",
            "competencia_label": "01/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1663684.6480561588,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1123843.125946222,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 196479.89968528994,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 70835.841832623,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 28538.675417658174,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 2845.868955150989,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 14957.389918333332,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 3718.4527865564805,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 416.16099747727367,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 1.6910560059837927,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 39.438348458123684,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 141.26620988436363,
                "vazio": false
              }
            ],
            "total": 3105502.4592098184,
            "linha_planilha": 11
          },
          {
            "competencia": "2024-02-01",
            "competencia_label": "02/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1572843.8688487827,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1035503.4894962959,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 207853.87389735304,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 76127.74452073917,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 17240.63552302082,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 15610.00178463788,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 4650.269946082087,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 2535.5213601803707,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 208.17544618733575,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 30.947529865077254,
                "vazio": false
              },
              {
                "col": "10",
                "valor": -4.686972130231439,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 170.66400747190687,
                "vazio": false
              }
            ],
            "total": 2932770.505388486,
            "linha_planilha": 12
          },
          {
            "competencia": "2024-03-01",
            "competencia_label": "03/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1767221.537758797,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1007263.6631943875,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 234629.91879541473,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 54237.46623863877,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 34062.97489388579,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 18918.885749249057,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 4263.667118935435,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 1249.332257322352,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 49.50674369678122,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 51.497208283963374,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 30.352032364865146,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 1216.0851687899014,
                "vazio": false
              }
            ],
            "total": 3123194.8871597666,
            "linha_planilha": 13
          },
          {
            "competencia": "2024-04-01",
            "competencia_label": "04/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1923577.4378440822,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1154254.4000948227,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 172124.2635383923,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 75862.71911457884,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 56454.759746921714,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 18351.748851727138,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 2947.8078916466407,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 156.14988776314257,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 126.96799912881018,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 90.22343795222277,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 34.57226650917203,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 2057.294091631794,
                "vazio": false
              }
            ],
            "total": 3406038.3447651565,
            "linha_planilha": 14
          },
          {
            "competencia": "2024-05-01",
            "competencia_label": "05/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1736882.504509999,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1197947.3737767711,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 194397.82097677822,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 165140.599411441,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 81933.5871481043,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 19725.478282077387,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 2517.9854434303074,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 849.6294277236456,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 1380.8381434909559,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 32.724639996933405,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.7137914210921731,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 4789.366436762,
                "vazio": false
              }
            ],
            "total": 3405598.621987996,
            "linha_planilha": 15
          },
          {
            "competencia": "2024-06-01",
            "competencia_label": "06/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1747194.0253125785,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1110737.639712033,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 1054022.9254566198,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 193184.51564722194,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 35046.61500017497,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 11054.59189070496,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 3297.946322712248,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 3818.7874029614,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 90.75049898022625,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 1.7427492081127158,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 11589.631576539872,
                "vazio": false
              }
            ],
            "total": 4170039.171569735,
            "linha_planilha": 16
          },
          {
            "competencia": "2024-07-01",
            "competencia_label": "07/2024",
            "lags": [
              {
                "col": "0",
                "valor": 1976382.6631733335,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1972280.3620836467,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 916541.2240466556,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 157997.95710670005,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 40977.67447541003,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 16362.060621997,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 15088.714573828704,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 1708.3296632215117,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 52.511328754390725,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 2919.264839737887,
                "vazio": false
              }
            ],
            "total": 5100310.761913286,
            "linha_planilha": 17
          },
          {
            "competencia": "2024-08-01",
            "competencia_label": "08/2024",
            "lags": [
              {
                "col": "0",
                "valor": 12977.683446076599,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1457899.940495561,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 881142.8942589776,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 282291.2660146488,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 56065.06567488706,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 54834.07985096379,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 9436.674293083215,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 811.752045908798,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 3265.382602396947,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 175.10840956297972,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 5283.449238398533,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 1395.4566448769815,
                "vazio": false
              }
            ],
            "total": 2765578.7529753423,
            "linha_planilha": 18
          },
          {
            "competencia": "2024-09-01",
            "competencia_label": "09/2024",
            "lags": [
              {
                "col": "0",
                "valor": 8917.087184950016,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1486166.4921019936,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 943195.315391088,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 167503.90318259603,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 71885.129450793,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 19406.08587101166,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 1902.8423013416211,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 4129.333226603633,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 22.23767756083513,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 12788.22553573167,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 2075.7574437401136,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 1040.79,
                "vazio": false
              }
            ],
            "total": 2719033.1993674096,
            "linha_planilha": 19
          },
          {
            "competencia": "2024-10-01",
            "competencia_label": "10/2024",
            "lags": [
              {
                "col": "0",
                "valor": 6940.026432055758,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1579937.4690040944,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 914582.3001630382,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 194687.32004497002,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 69523.51369209967,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 14691.149827045047,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 10910.992931303548,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 368.16592801480806,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 38509.42685259937,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 2561.516370110905,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 1925.2800000000002,
                "vazio": false
              }
            ],
            "total": 2834637.161245331,
            "linha_planilha": 20
          },
          {
            "competencia": "2024-11-01",
            "competencia_label": "11/2024",
            "lags": [
              {
                "col": "0",
                "valor": 4528.065334620533,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1301749.5106549365,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 615831.4184252155,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 220790.59112684443,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 19248.822367160006,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 17191.7533497443,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 2510.6141728449093,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 20522.84207541788,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 1952.0568570547257,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 970.9499999999999,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2205296.624363838,
            "linha_planilha": 21
          },
          {
            "competencia": "2024-12-01",
            "competencia_label": "12/2024",
            "lags": [
              {
                "col": "0",
                "valor": 4750.789932995005,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 754441.8129724648,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 889534.7585683701,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 95615.7522430593,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 32342.55706901431,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1776.5925851102065,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 16810.507107604328,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 4807.595962000921,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 183.2,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 1800263.5664406188,
            "linha_planilha": 22
          },
          {
            "competencia": "2025-01-01",
            "competencia_label": "01/2025",
            "lags": [
              {
                "col": "0",
                "valor": 1332.264471859327,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1643470.1871563473,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 654446.8918410325,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 133034.34970098909,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 29924.567985020392,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 37697.5933731281,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 12656.880344823363,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 93.72000000000003,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 183.2,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 500.5000000000001,
                "vazio": false
              }
            ],
            "total": 2513340.154873201,
            "linha_planilha": 23
          },
          {
            "competencia": "2025-02-01",
            "competencia_label": "02/2025",
            "lags": [
              {
                "col": "0",
                "valor": 21241.586950255838,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1064499.7836755144,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 550458.715107846,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 185454.62634319274,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 59683.62718679144,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 36453.210890270384,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 2458.0800000000004,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 183.20000000000005,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 45.5,
                "vazio": false
              }
            ],
            "total": 1920478.3301538709,
            "linha_planilha": 24
          },
          {
            "competencia": "2025-03-01",
            "competencia_label": "03/2025",
            "lags": [
              {
                "col": "0",
                "valor": 17650.505888125528,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 981078.6106583301,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 726918.7082735673,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 213162.86407571065,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 50170.35315069389,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 8631.97,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 3791.350000000002,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 211.4699999999999,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 546.0,
                "vazio": false
              }
            ],
            "total": 2002161.8320464275,
            "linha_planilha": 25
          },
          {
            "competencia": "2025-04-01",
            "competencia_label": "04/2025",
            "lags": [
              {
                "col": "0",
                "valor": 5653.3149179752545,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1037880.0969844107,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 970135.3683175533,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 223689.22296618094,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 18957.510000000006,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 2101.379999999999,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 296.68999999999886,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 318.5,
                "vazio": false
              }
            ],
            "total": 2259032.08318612,
            "linha_planilha": 26
          },
          {
            "competencia": "2025-05-01",
            "competencia_label": "05/2025",
            "lags": [
              {
                "col": "0",
                "valor": 2307.8938952046587,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1620038.17345754,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 1002734.2377852682,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 140781.32,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 12815.009999999955,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 15237.44999999998,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 4409.4700000000175,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 90.47,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 45.5,
                "vazio": false
              }
            ],
            "total": 2798459.525138013,
            "linha_planilha": 27
          },
          {
            "competencia": "2025-06-01",
            "competencia_label": "06/2025",
            "lags": [
              {
                "col": "0",
                "valor": 5011.6426812985555,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1576781.7711943923,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 430762.18000000005,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 130309.99000000002,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 22087.82000000005,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 16920.12,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 5577.61,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2187451.133875691,
            "linha_planilha": 28
          },
          {
            "competencia": "2025-07-01",
            "competencia_label": "07/2025",
            "lags": [
              {
                "col": "0",
                "valor": 5923.288731991875,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1597346.1099999999,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 557576.8800000005,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 143579.42999999993,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 17293.54999999998,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 17135.84,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 746.8800000000001,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2339601.9787319917,
            "linha_planilha": 29
          },
          {
            "competencia": "2025-08-01",
            "competencia_label": "08/2025",
            "lags": [
              {
                "col": "0",
                "valor": 34470.03999999999,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1533719.289999999,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 456518.08999999927,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 125368.43999999994,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 30187.85,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 2280.310000000002,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 319.84999999999985,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.009999999999990905,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2182863.8799999985,
            "linha_planilha": 30
          },
          {
            "competencia": "2025-09-01",
            "competencia_label": "09/2025",
            "lags": [
              {
                "col": "0",
                "valor": 80814.16,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1650418.5999999968,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 528133.2599999991,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 110501.92000000003,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 9726.55,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 3279.419999999999,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 442.0899999999999,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 294.3299999999998,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 98.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2383708.3299999954,
            "linha_planilha": 31
          },
          {
            "competencia": "2025-10-01",
            "competencia_label": "10/2025",
            "lags": [
              {
                "col": "0",
                "valor": 55251.179999999826,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1770734.8899999945,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 405605.6199999999,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 78260.91000000006,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 10876.849999999986,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 1879.6499999999996,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 1803.04,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2324412.1399999945,
            "linha_planilha": 32
          },
          {
            "competencia": "2025-11-01",
            "competencia_label": "11/2025",
            "lags": [
              {
                "col": "0",
                "valor": 68449.47999999972,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1602453.4399999997,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 321229.75999999966,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 82306.78000000003,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 13558.779999999982,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 9759.68,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 1308.1300000000006,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 287.09999999999997,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2099353.1499999994,
            "linha_planilha": 33
          },
          {
            "competencia": "2025-12-01",
            "competencia_label": "12/2025",
            "lags": [
              {
                "col": "0",
                "valor": 144931.78999999998,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1327458.979999999,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 214099.15000000014,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 50819.770000000004,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 19558.909999999996,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 2287.220000000001,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 816.5799999999992,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 68.55000000000007,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 1760040.9499999993,
            "linha_planilha": 34
          },
          {
            "competencia": "2026-01-01",
            "competencia_label": "01/2026",
            "lags": [
              {
                "col": "0",
                "valor": 61052.64999999998,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1648275.2300000007,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 313187.1599999999,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 109339.51000000004,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 33342.31000000001,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 4073.8499999999995,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 1340.8500000000006,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2170611.560000001,
            "linha_planilha": 35
          },
          {
            "competencia": "2026-02-01",
            "competencia_label": "02/2026",
            "lags": [
              {
                "col": "0",
                "valor": 110354.06,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1448939.969999996,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 360837.4400000003,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 83934.95,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 13952.869999999988,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 8306.709999999997,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2026325.9999999963,
            "linha_planilha": 36
          },
          {
            "competencia": "2026-03-01",
            "competencia_label": "03/2026",
            "lags": [
              {
                "col": "0",
                "valor": 106654.01999999963,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1908393.3300000024,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 458957.5900000003,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 92705.95000000004,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 21447.21999999999,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2588158.1100000027,
            "linha_planilha": 37
          },
          {
            "competencia": "2026-04-01",
            "competencia_label": "04/2026",
            "lags": [
              {
                "col": "0",
                "valor": 69964.93,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1727802.6300000008,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 334644.90999999986,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 99624.43000000005,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2232036.900000001,
            "linha_planilha": 38
          },
          {
            "competencia": "2026-05-01",
            "competencia_label": "05/2026",
            "lags": [
              {
                "col": "0",
                "valor": 69611.36,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1771497.6900000004,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 372230.5600000002,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 2213339.610000001,
            "linha_planilha": 39
          },
          {
            "competencia": "2026-06-01",
            "competencia_label": "06/2026",
            "lags": [
              {
                "col": "0",
                "valor": 102724.87000000002,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 1729422.3199999994,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 1832147.1899999995,
            "linha_planilha": 40
          },
          {
            "competencia": "2026-07-01",
            "competencia_label": "07/2026",
            "lags": [
              {
                "col": "0",
                "valor": 101199.60999999999,
                "vazio": false
              },
              {
                "col": "1",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "2",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "3",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "4",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "5",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "6",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "7",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "8",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "9",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "10",
                "valor": 0.0,
                "vazio": false
              },
              {
                "col": "11+",
                "valor": 0.0,
                "vazio": false
              }
            ],
            "total": 101199.60999999999,
            "linha_planilha": 41
          }
        ]
      },
      "proporcoes": {
        "colunas": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11+"
        ],
        "linhas": []
      },
      "fatores": {
        "colunas": [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11"
        ],
        "linhas": [
          {
            "competencia": "2024-07-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.312011199048332
              },
              {
                "col": "2",
                "valor": 0.11223889824175991
              },
              {
                "col": "3",
                "valor": 0.07207618539472734
              },
              {
                "col": "4",
                "valor": 0.0441472046474702
              },
              {
                "col": "5",
                "valor": 0.028162852459322645
              },
              {
                "col": "6",
                "valor": 0.03073326716811652
              },
              {
                "col": "7",
                "valor": 0.005064302146068655
              },
              {
                "col": "8",
                "valor": 0.0007343814974408717
              },
              {
                "col": "9",
                "valor": 0.0002440900976569842
              },
              {
                "col": "10",
                "valor": 0.0
              },
              {
                "col": "11",
                "valor": 0.0
              }
            ],
            "total": 0.6054123807008952,
            "linha_planilha": 75
          },
          {
            "competencia": "2024-08-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.3441507411864628
              },
              {
                "col": "2",
                "valor": 0.16348061955304127
              },
              {
                "col": "3",
                "valor": 0.07856545413553997
              },
              {
                "col": "4",
                "valor": 0.047148198425172434
              },
              {
                "col": "5",
                "valor": 0.027150662449247805
              },
              {
                "col": "6",
                "valor": 0.02831440656645987
              },
              {
                "col": "7",
                "valor": 0.0050015831362721025
              },
              {
                "col": "8",
                "valor": 0.0007272197809836867
              },
              {
                "col": "9",
                "valor": 0.0002432409773287702
              },
              {
                "col": "10",
                "valor": 1.1422752942754488e-05
              },
              {
                "col": "11",
                "valor": 0.0002570274942482857
              }
            ],
            "total": 0.6950505764576997,
            "linha_planilha": 76
          },
          {
            "competencia": "2024-09-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.36092313140177507
              },
              {
                "col": "2",
                "valor": 0.2091813196215821
              },
              {
                "col": "3",
                "valor": 0.08843894462287037
              },
              {
                "col": "4",
                "valor": 0.051922107550817234
              },
              {
                "col": "5",
                "valor": 0.027400476621626597
              },
              {
                "col": "6",
                "valor": 0.024976251192641193
              },
              {
                "col": "7",
                "valor": 0.005106601181041213
              },
              {
                "col": "8",
                "valor": 0.0008190431607424096
              },
              {
                "col": "9",
                "valor": 0.0002423426218666113
              },
              {
                "col": "10",
                "valor": 1.2119778140169128e-05
              },
              {
                "col": "11",
                "valor": 0.0006000571749706706
              }
            ],
            "total": 0.7696223949280738,
            "linha_planilha": 77
          },
          {
            "competencia": "2024-10-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.38220865153254924
              },
              {
                "col": "2",
                "valor": 0.24978753907751874
              },
              {
                "col": "3",
                "valor": 0.09680113915149326
              },
              {
                "col": "4",
                "valor": 0.0524607835967097
              },
              {
                "col": "5",
                "valor": 0.027613751951946472
              },
              {
                "col": "6",
                "valor": 0.0237758442103629
              },
              {
                "col": "7",
                "valor": 0.0050151618714384776
              },
              {
                "col": "8",
                "valor": 0.000863546834300004
              },
              {
                "col": "9",
                "valor": 0.00024183525225978877
              },
              {
                "col": "10",
                "valor": 1.2072607653983052e-05
              },
              {
                "col": "11",
                "valor": 0.0006174204079936956
              }
            ],
            "total": 0.8393977464942263,
            "linha_planilha": 78
          },
          {
            "competencia": "2024-11-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.40255601878104674
              },
              {
                "col": "2",
                "valor": 0.29210549419042603
              },
              {
                "col": "3",
                "valor": 0.11372505148462186
              },
              {
                "col": "4",
                "valor": 0.05277022722572496
              },
              {
                "col": "5",
                "valor": 0.026427362203368887
              },
              {
                "col": "6",
                "valor": 0.02140853497051382
              },
              {
                "col": "7",
                "valor": 0.003956399554288837
              },
              {
                "col": "8",
                "valor": 0.0008647048054413317
              },
              {
                "col": "9",
                "valor": 0.0002469035380068966
              },
              {
                "col": "10",
                "valor": 2.3094406208421662e-05
              },
              {
                "col": "11",
                "valor": 0.0006102336729086326
              }
            ],
            "total": 0.9146940248325565,
            "linha_planilha": 79
          },
          {
            "competencia": "2024-12-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.41732228687951906
              },
              {
                "col": "2",
                "valor": 0.3353448365264719
              },
              {
                "col": "3",
                "valor": 0.1223060523439598
              },
              {
                "col": "4",
                "valor": 0.05473846087823897
              },
              {
                "col": "5",
                "valor": 0.025762672369314614
              },
              {
                "col": "6",
                "valor": 0.01889271932125934
              },
              {
                "col": "7",
                "valor": 0.0033396556249826164
              },
              {
                "col": "8",
                "valor": 0.0008931542061662857
              },
              {
                "col": "9",
                "valor": 0.0002599342280253281
              },
              {
                "col": "10",
                "valor": 2.176054699533881e-05
              },
              {
                "col": "11",
                "valor": 0.0006131240721981356
              }
            ],
            "total": 0.9794946569971315,
            "linha_planilha": 80
          },
          {
            "competencia": "2025-01-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.4367176931084012
              },
              {
                "col": "2",
                "valor": 0.36818147808198726
              },
              {
                "col": "3",
                "valor": 0.13465658896966776
              },
              {
                "col": "4",
                "valor": 0.05859647184486809
              },
              {
                "col": "5",
                "valor": 0.030730384670341022
              },
              {
                "col": "6",
                "valor": 0.019066648144562288
              },
              {
                "col": "7",
                "valor": 0.0035414326260117084
              },
              {
                "col": "8",
                "valor": 0.0009040010105179771
              },
              {
                "col": "9",
                "valor": 0.00028762565858258523
              },
              {
                "col": "10",
                "valor": 3.0854231600263096e-05
              },
              {
                "col": "11",
                "valor": 0.0006696056784282101
              }
            ],
            "total": 1.053382784024968,
            "linha_planilha": 81
          },
          {
            "competencia": "2025-02-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.45221317458357935
              },
              {
                "col": "2",
                "valor": 0.41589652739236305
              },
              {
                "col": "3",
                "valor": 0.14749733891296363
              },
              {
                "col": "4",
                "valor": 0.06247093374878504
              },
              {
                "col": "5",
                "valor": 0.03108546129360884
              },
              {
                "col": "6",
                "valor": 0.017054484750831732
              },
              {
                "col": "7",
                "valor": 0.0033973311442031928
              },
              {
                "col": "8",
                "valor": 0.0009260073552474802
              },
              {
                "col": "9",
                "valor": 0.00017169998329252516
              },
              {
                "col": "10",
                "valor": 4.084861465716806e-05
              },
              {
                "col": "11",
                "valor": 0.0007038064410350904
              }
            ],
            "total": 1.1314576142205675,
            "linha_planilha": 82
          },
          {
            "competencia": "2025-03-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.46993588733708264
              },
              {
                "col": "2",
                "valor": 0.4587618097345713
              },
              {
                "col": "3",
                "valor": 0.15722118949988026
              },
              {
                "col": "4",
                "valor": 0.06285655379424628
              },
              {
                "col": "5",
                "valor": 0.03201521043449836
              },
              {
                "col": "6",
                "valor": 0.015237495633805274
              },
              {
                "col": "7",
                "valor": 0.003338613523538838
              },
              {
                "col": "8",
                "valor": 0.0009730745060703729
              },
              {
                "col": "9",
                "valor": 0.00017856875358128008
              },
              {
                "col": "10",
                "valor": 4.258450528443466e-05
              },
              {
                "col": "11",
                "valor": 0.0007308319140774198
              }
            ],
            "total": 1.2012918196366367,
            "linha_planilha": 83
          },
          {
            "competencia": "2025-04-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.49135236512660746
              },
              {
                "col": "2",
                "valor": 0.5019072845131799
              },
              {
                "col": "3",
                "valor": 0.1704984475255839
              },
              {
                "col": "4",
                "valor": 0.06799635549707528
              },
              {
                "col": "5",
                "valor": 0.033657204299019146
              },
              {
                "col": "6",
                "valor": 0.016376405552297666
              },
              {
                "col": "7",
                "valor": 0.004236677920432141
              },
              {
                "col": "8",
                "valor": 0.0018364405630080397
              },
              {
                "col": "9",
                "valor": 0.00018701800941025697
              },
              {
                "col": "10",
                "valor": 4.45994567934893e-05
              },
              {
                "col": "11",
                "valor": 0.0007654123526265991
              }
            ],
            "total": 1.288858210816034,
            "linha_planilha": 84
          },
          {
            "competencia": "2025-05-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5077559182091218
              },
              {
                "col": "2",
                "valor": 0.5546063025481256
              },
              {
                "col": "3",
                "valor": 0.18818923944907168
              },
              {
                "col": "4",
                "valor": 0.0709715324283771
              },
              {
                "col": "5",
                "valor": 0.03432712264145168
              },
              {
                "col": "6",
                "valor": 0.015148653709856439
              },
              {
                "col": "7",
                "valor": 0.004435424755178133
              },
              {
                "col": "8",
                "valor": 0.0019177118741250563
              },
              {
                "col": "9",
                "valor": 0.0002460390938554709
              },
              {
                "col": "10",
                "valor": 4.6432464425220536e-05
              },
              {
                "col": "11",
                "valor": 0.0007968702847328648
              }
            ],
            "total": 1.378441247458321,
            "linha_planilha": 85
          },
          {
            "competencia": "2025-06-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5248274068402189
              },
              {
                "col": "2",
                "valor": 0.6104587586104788
              },
              {
                "col": "3",
                "valor": 0.2050173537117126
              },
              {
                "col": "4",
                "valor": 0.0769889733431327
              },
              {
                "col": "5",
                "valor": 0.04025817279949142
              },
              {
                "col": "6",
                "valor": 0.0175630802287043
              },
              {
                "col": "7",
                "valor": 0.009172977835197013
              },
              {
                "col": "8",
                "valor": 0.01199077363983178
              },
              {
                "col": "9",
                "valor": 0.004020487458549809
              },
              {
                "col": "10",
                "valor": 0.0017786881766140947
              },
              {
                "col": "11",
                "valor": 0.0017975396921732386
              }
            ],
            "total": 1.503874212336105,
            "linha_planilha": 86
          },
          {
            "competencia": "2025-07-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5490360124101237
              },
              {
                "col": "2",
                "valor": 0.6744256973169345
              },
              {
                "col": "3",
                "valor": 0.2231855970120079
              },
              {
                "col": "4",
                "valor": 0.08040905836918646
              },
              {
                "col": "5",
                "valor": 0.044396673659002614
              },
              {
                "col": "6",
                "valor": 0.017393548569069158
              },
              {
                "col": "7",
                "valor": 0.0104211203404247
              },
              {
                "col": "8",
                "valor": 0.012289125881620351
              },
              {
                "col": "9",
                "valor": 0.004723040752483721
              },
              {
                "col": "10",
                "valor": 0.002499804052948716
              },
              {
                "col": "11",
                "valor": 0.004792199115593122
              }
            ],
            "total": 1.623571877479395,
            "linha_planilha": 87
          },
          {
            "competencia": "2025-08-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5559728017211449
              },
              {
                "col": "2",
                "valor": 0.6558077820902578
              },
              {
                "col": "3",
                "valor": 0.2287448337779741
              },
              {
                "col": "4",
                "valor": 0.07814197000144689
              },
              {
                "col": "5",
                "valor": 0.044228463735655095
              },
              {
                "col": "6",
                "valor": 0.017569276170413282
              },
              {
                "col": "7",
                "valor": 0.009922391095244135
              },
              {
                "col": "8",
                "valor": 0.012727377423426443
              },
              {
                "col": "9",
                "valor": 0.004889996240147161
              },
              {
                "col": "10",
                "valor": 0.0025766871436975563
              },
              {
                "col": "11",
                "valor": 0.007222949842331213
              }
            ],
            "total": 1.6178045292417391,
            "linha_planilha": 88
          },
          {
            "competencia": "2025-09-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.565642710616866
              },
              {
                "col": "2",
                "valor": 0.6389841555121034
              },
              {
                "col": "3",
                "valor": 0.22503726530382018
              },
              {
                "col": "4",
                "valor": 0.06946137106716735
              },
              {
                "col": "5",
                "valor": 0.041945801368673784
              },
              {
                "col": "6",
                "valor": 0.017691989040998817
              },
              {
                "col": "7",
                "valor": 0.00947190291942875
              },
              {
                "col": "8",
                "valor": 0.012822888259403612
              },
              {
                "col": "9",
                "valor": 0.005008891711944572
              },
              {
                "col": "10",
                "valor": 0.0029477930109856887
              },
              {
                "col": "11",
                "valor": 0.007447405499688849
              }
            ],
            "total": 1.5964621743110814,
            "linha_planilha": 89
          },
          {
            "competencia": "2025-10-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5763817156948889
              },
              {
                "col": "2",
                "valor": 0.6146168469320532
              },
              {
                "col": "3",
                "valor": 0.22547916292849712
              },
              {
                "col": "4",
                "valor": 0.06824039999863898
              },
              {
                "col": "5",
                "valor": 0.041521054401091606
              },
              {
                "col": "6",
                "valor": 0.017285625438123273
              },
              {
                "col": "7",
                "valor": 0.009298471549017756
              },
              {
                "col": "8",
                "valor": 0.012876262264881309
              },
              {
                "col": "9",
                "valor": 0.0050521494012205174
              },
              {
                "col": "10",
                "valor": 0.0029735666018514437
              },
              {
                "col": "11",
                "valor": 0.007488258136177234
              }
            ],
            "total": 1.5812135133464416,
            "linha_planilha": 90
          },
          {
            "competencia": "2025-11-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.5900515267472907
              },
              {
                "col": "2",
                "valor": 0.5923038794120951
              },
              {
                "col": "3",
                "valor": 0.2113605304431756
              },
              {
                "col": "4",
                "valor": 0.06567133682577442
              },
              {
                "col": "5",
                "valor": 0.043061970413395656
              },
              {
                "col": "6",
                "valor": 0.017896412522226478
              },
              {
                "col": "7",
                "valor": 0.009370128808580395
              },
              {
                "col": "8",
                "valor": 0.013015378564823344
              },
              {
                "col": "9",
                "valor": 0.00510233857804972
              },
              {
                "col": "10",
                "valor": 0.002994881683366628
              },
              {
                "col": "11",
                "valor": 0.00757738259463348
              }
            ],
            "total": 1.5584057665934115,
            "linha_planilha": 91
          },
          {
            "competencia": "2025-12-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6039913174035202
              },
              {
                "col": "2",
                "valor": 0.5589400616062313
              },
              {
                "col": "3",
                "valor": 0.2063529129241521
              },
              {
                "col": "4",
                "valor": 0.062307856277695424
              },
              {
                "col": "5",
                "valor": 0.04343068214960852
              },
              {
                "col": "6",
                "valor": 0.01848274263993534
              },
              {
                "col": "7",
                "valor": 0.009229472488315854
              },
              {
                "col": "8",
                "valor": 0.013048415445067185
              },
              {
                "col": "9",
                "valor": 0.005112947501751336
              },
              {
                "col": "10",
                "valor": 0.003012551825388085
              },
              {
                "col": "11",
                "valor": 0.007644629426179501
              }
            ],
            "total": 1.5315535896878452,
            "linha_planilha": 92
          },
          {
            "competencia": "2026-01-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6226043257807121
              },
              {
                "col": "2",
                "valor": 0.5361212128910694
              },
              {
                "col": "3",
                "valor": 0.19321571671890714
              },
              {
                "col": "4",
                "valor": 0.05321994266670565
              },
              {
                "col": "5",
                "valor": 0.03389605234877575
              },
              {
                "col": "6",
                "valor": 0.015347075247726504
              },
              {
                "col": "7",
                "valor": 0.00824450824776518
              },
              {
                "col": "8",
                "valor": 0.012612582894765825
              },
              {
                "col": "9",
                "valor": 0.005067956169584181
              },
              {
                "col": "10",
                "valor": 0.0029922996464690696
              },
              {
                "col": "11",
                "valor": 0.007563264053727501
              }
            ],
            "total": 1.4908849366662082,
            "linha_planilha": 93
          },
          {
            "competencia": "2026-02-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6412394532167759
              },
              {
                "col": "2",
                "valor": 0.502262540085522
              },
              {
                "col": "3",
                "valor": 0.18364275296048893
              },
              {
                "col": "4",
                "valor": 0.04615785835225766
              },
              {
                "col": "5",
                "valor": 0.0319312143602697
              },
              {
                "col": "6",
                "valor": 0.013787417044332702
              },
              {
                "col": "7",
                "valor": 0.008048503450515285
              },
              {
                "col": "8",
                "valor": 0.012959765322739528
              },
              {
                "col": "9",
                "valor": 0.005207356985623825
              },
              {
                "col": "10",
                "valor": 0.003068278378856575
              },
              {
                "col": "11",
                "valor": 0.008112827236738285
              }
            ],
            "total": 1.4564179673941204,
            "linha_planilha": 94
          },
          {
            "competencia": "2026-03-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6537958266150123
              },
              {
                "col": "2",
                "valor": 0.47595848050751893
              },
              {
                "col": "3",
                "valor": 0.17825625621200683
              },
              {
                "col": "4",
                "valor": 0.04520877620787203
              },
              {
                "col": "5",
                "valor": 0.029499649929363048
              },
              {
                "col": "6",
                "valor": 0.013431693005312204
              },
              {
                "col": "7",
                "valor": 0.007820055125492402
              },
              {
                "col": "8",
                "valor": 0.01291264062040979
              },
              {
                "col": "9",
                "valor": 0.005194047179846778
              },
              {
                "col": "10",
                "valor": 0.0030605132721241973
              },
              {
                "col": "11",
                "valor": 0.008092016482458119
              }
            ],
            "total": 1.433229955157417,
            "linha_planilha": 95
          },
          {
            "competencia": "2026-04-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6696127543910843
              },
              {
                "col": "2",
                "valor": 0.44976504025928027
              },
              {
                "col": "3",
                "valor": 0.1709838044790239
              },
              {
                "col": "4",
                "valor": 0.04218030314321223
              },
              {
                "col": "5",
                "valor": 0.027387815911315345
              },
              {
                "col": "6",
                "valor": 0.011120788718327498
              },
              {
                "col": "7",
                "valor": 0.0066524280922545635
              },
              {
                "col": "8",
                "valor": 0.011635703940717897
              },
              {
                "col": "9",
                "valor": 0.0050562212050771676
              },
              {
                "col": "10",
                "valor": 0.0029793014135445274
              },
              {
                "col": "11",
                "valor": 0.007895192321757224
              }
            ],
            "total": 1.4052693538755952,
            "linha_planilha": 96
          },
          {
            "competencia": "2026-05-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.6845321553729748
              },
              {
                "col": "2",
                "valor": 0.4245470650103194
              },
              {
                "col": "3",
                "valor": 0.15784163872621906
              },
              {
                "col": "4",
                "valor": 0.0420696778976609
              },
              {
                "col": "5",
                "valor": 0.027093004001699547
              },
              {
                "col": "6",
                "valor": 0.01071010696675877
              },
              {
                "col": "7",
                "valor": 0.006468073239687322
              },
              {
                "col": "8",
                "valor": 0.011493576451970662
              },
              {
                "col": "9",
                "valor": 0.00492960010609417
              },
              {
                "col": "10",
                "valor": 0.0029374374877294924
              },
              {
                "col": "11",
                "valor": 0.011073420447478824
              }
            ],
            "total": 1.3836957557085927,
            "linha_planilha": 97
          },
          {
            "competencia": "2026-06-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.7068650791173574
              },
              {
                "col": "2",
                "valor": 0.3890818429162454
              },
              {
                "col": "3",
                "valor": 0.14867261651605204
              },
              {
                "col": "4",
                "valor": 0.036496648155086575
              },
              {
                "col": "5",
                "valor": 0.02168598643748651
              },
              {
                "col": "6",
                "valor": 0.0075066221789317905
              },
              {
                "col": "7",
                "valor": 0.0015093896981227147
              },
              {
                "col": "8",
                "valor": 0.0006455255457360566
              },
              {
                "col": "9",
                "valor": 0.0008925299692682458
              },
              {
                "col": "10",
                "valor": 0.0011008130751961498
              },
              {
                "col": "11",
                "valor": 0.010248819159943067
              }
            ],
            "total": 1.3247058727694259,
            "linha_planilha": 98
          },
          {
            "competencia": "2026-07-01",
            "proporcoes": [
              {
                "col": "0",
                "valor": 0.0
              },
              {
                "col": "1",
                "valor": 0.7280114091673529
              },
              {
                "col": "2",
                "valor": 0.3510576984093187
              },
              {
                "col": "3",
                "valor": 0.13819191187647661
              },
              {
                "col": "4",
                "valor": 0.033055171238065534
              },
              {
                "col": "5",
                "valor": 0.0169654138761765
              },
              {
                "col": "6",
                "valor": 0.0051643333073503874
              },
              {
                "col": "7",
                "valor": 0.0003176161436992459
              },
              {
                "col": "8",
                "valor": 8.306726973142147e-05
              },
              {
                "col": "9",
                "valor": 6.088035379839254e-05
              },
              {
                "col": "10",
                "valor": 0.0003585139466311816
              },
              {
                "col": "11",
                "valor": 0.007188354726169525
              }
            ],
            "total": 1.2804543703147704,
            "linha_planilha": 99
          }
        ]
      },
      "peona_serie": [
        {
          "competencia": "2024-07-01",
          "total_avisado": 3424135.537081914,
          "media_nm": 2832760.9779634806,
          "fator_peona": 0.6054123807008952,
          "peona": 1714988.567625467,
          "variacao_r": null,
          "variacao_pct": null,
          "linha_planilha": 104
        },
        {
          "competencia": "2024-08-01",
          "total_avisado": 3289049.6459494587,
          "media_nm": 2883208.7559592687,
          "fator_peona": 0.6950505764576997,
          "peona": 2003975.907877377,
          "variacao_r": 288987.34025191003,
          "variacao_pct": 0.1685068610410827,
          "linha_planilha": 105
        },
        {
          "competencia": "2024-09-01",
          "total_avisado": 2685136.728261246,
          "media_nm": 2898708.174147706,
          "fator_peona": 0.7696223949280738,
          "peona": 2230910.7271851418,
          "variacao_r": 226934.81930776476,
          "variacao_pct": 0.113242289199043,
          "linha_planilha": 106
        },
        {
          "competencia": "2024-10-01",
          "total_avisado": 2591489.0048920605,
          "media_nm": 2910034.101222044,
          "fator_peona": 0.8393977464942263,
          "peona": 2442676.066787135,
          "variacao_r": 211765.3396019931,
          "variacao_pct": 0.09492326923775596,
          "linha_planilha": 107
        },
        {
          "competencia": "2024-11-01",
          "total_avisado": 2864778.41006378,
          "media_nm": 2944305.6353940256,
          "fator_peona": 0.9146940248325565,
          "peona": 2693138.771975739,
          "variacao_r": 250462.70518860407,
          "variacao_pct": 0.10253619323254726,
          "linha_planilha": 108
        },
        {
          "competencia": "2024-12-01",
          "total_avisado": 2465344.9283026983,
          "media_nm": 2945292.701085917,
          "fator_peona": 0.9794946569971315,
          "peona": 2884898.464006305,
          "variacao_r": 191759.69203056628,
          "variacao_pct": 0.07120304903185048,
          "linha_planilha": 109
        },
        {
          "competencia": "2025-01-01",
          "total_avisado": 1713567.1380515255,
          "media_nm": 2896994.5419188645,
          "fator_peona": 1.053382784024968,
          "peona": 3051644.1758716307,
          "variacao_r": 166745.71186532546,
          "variacao_pct": 0.05779950800547873,
          "linha_planilha": 110
        },
        {
          "competencia": "2025-02-01",
          "total_avisado": 2875375.165069185,
          "media_nm": 2893482.7686083796,
          "fator_peona": 1.1314576142205675,
          "peona": 3273853.1101579596,
          "variacao_r": 222208.93428632896,
          "variacao_pct": 0.07281613500134232,
          "linha_planilha": 111
        },
        {
          "competencia": "2025-03-01",
          "total_avisado": 1868924.8743043588,
          "media_nm": 2789502.6142220437,
          "fator_peona": 1.2012918196366367,
          "peona": 3351006.6713199536,
          "variacao_r": 77153.561161994,
          "variacao_pct": 0.023566592197617364,
          "linha_planilha": 112
        },
        {
          "competencia": "2025-04-01",
          "total_avisado": 1738065.009564203,
          "media_nm": 2663476.1352883563,
          "fator_peona": 1.288858210816034,
          "peona": 3432843.086278956,
          "variacao_r": 81836.41495900229,
          "variacao_pct": 0.02442144196829288,
          "linha_planilha": 113
        },
        {
          "competencia": "2025-05-01",
          "total_avisado": 1987338.6122544894,
          "media_nm": 2558330.476031345,
          "fator_peona": 1.378441247458321,
          "peona": 3526508.252791287,
          "variacao_r": 93665.166512331,
          "variacao_pct": 0.02728501249786497,
          "linha_planilha": 114
        },
        {
          "competencia": "2025-06-01",
          "total_avisado": 3002404.7339025764,
          "media_nm": 2542134.148974791,
          "fator_peona": 1.503874212336105,
          "peona": 3823049.9909421788,
          "variacao_r": 296541.73815089185,
          "variacao_pct": 0.08408933621980741,
          "linha_planilha": 115
        },
        {
          "competencia": "2025-07-01",
          "total_avisado": 2927894.60319229,
          "media_nm": 2500780.7378173224,
          "fator_peona": 1.623571877479395,
          "peona": 4060197.277662377,
          "variacao_r": 237147.2867201981,
          "variacao_pct": 0.062030914396113745,
          "linha_planilha": 116
        },
        {
          "competencia": "2025-08-01",
          "total_avisado": 2240252.08,
          "media_nm": 2413380.940654868,
          "fator_peona": 1.6178045292417391,
          "peona": 3904378.616577134,
          "variacao_r": -155818.66108524287,
          "variacao_pct": -0.038377115797425976,
          "linha_planilha": 117
        },
        {
          "competencia": "2025-09-01",
          "total_avisado": 2324084.1900000004,
          "media_nm": 2383293.229133097,
          "fator_peona": 1.5964621743110814,
          "peona": 3804837.4906027024,
          "variacao_r": -99541.12597443163,
          "variacao_pct": -0.02549474212152525,
          "linha_planilha": 118
        },
        {
          "competencia": "2025-10-01",
          "total_avisado": 2343600.7299999963,
          "media_nm": 2362635.872892092,
          "fator_peona": 1.5812135133464416,
          "peona": 3735831.7693340415,
          "variacao_r": -69005.72126866085,
          "variacao_pct": -0.018136312375782948,
          "linha_planilha": 119
        },
        {
          "competencia": "2025-11-01",
          "total_avisado": 2531309.2099999934,
          "media_nm": 2334846.7728867764,
          "fator_peona": 1.5584057665934115,
          "peona": 3638638.6749787694,
          "variacao_r": -97193.09435527213,
          "variacao_pct": -0.026016453726072863,
          "linha_planilha": 120
        },
        {
          "competencia": "2025-12-01",
          "total_avisado": 2316562.3699999996,
          "media_nm": 2322448.226361552,
          "fator_peona": 1.5315535896878452,
          "peona": 3556953.9179482036,
          "variacao_r": -81684.75703056576,
          "variacao_pct": -0.022449263124770802,
          "linha_planilha": 121
        },
        {
          "competencia": "2026-01-01",
          "total_avisado": 1800756.0399999989,
          "media_nm": 2329713.9681905913,
          "fator_peona": 1.4908849366662082,
          "peona": 3473335.4619162106,
          "variacao_r": -83618.45603199303,
          "variacao_pct": -0.023508445136176448,
          "linha_planilha": 122
        },
        {
          "competencia": "2026-02-01",
          "total_avisado": 2070419.770000001,
          "media_nm": 2262634.3519348255,
          "fator_peona": 1.4564179673941204,
          "peona": 3295341.3238010313,
          "variacao_r": -177994.13811517926,
          "variacao_pct": -0.051245881679675476,
          "linha_planilha": 123
        },
        {
          "competencia": "2026-03-01",
          "total_avisado": 1935481.4399999955,
          "media_nm": 2268180.732409462,
          "fator_peona": 1.433229955157417,
          "peona": 3250824.5694001303,
          "variacao_r": -44516.75440090103,
          "variacao_pct": -0.013508996497380354,
          "linha_planilha": 124
        },
        {
          "competencia": "2026-04-01",
          "total_avisado": 2479996.680000003,
          "media_nm": 2330008.371612445,
          "fator_peona": 1.4052693538755952,
          "peona": 3274289.358900548,
          "variacao_r": 23464.789500417653,
          "variacao_pct": 0.007218103899327755,
          "linha_planilha": 125
        },
        {
          "competencia": "2026-05-01",
          "total_avisado": 2385821.8400000012,
          "media_nm": 2363215.307257904,
          "fator_peona": 1.3836957557085927,
          "peona": 3269970.99047834,
          "variacao_r": -4318.368422207888,
          "variacao_pct": -0.0013188719593365539,
          "linha_planilha": 126
        },
        {
          "competencia": "2026-06-01",
          "total_avisado": 2320703.8200000008,
          "media_nm": 2306406.897766023,
          "fator_peona": 1.3247058727694259,
          "peona": 3055310.7624665634,
          "variacao_r": -214660.2280117767,
          "variacao_pct": -0.06564591203923054,
          "linha_planilha": 127
        },
        {
          "competencia": "2026-07-01",
          "total_avisado": 2333640.2499999995,
          "media_nm": 2256885.7016666657,
          "fator_peona": 1.2804543703147704,
          "peona": 2889839.159999999,
          "variacao_r": -165471.60246656416,
          "variacao_pct": -0.054158681499546835,
          "linha_planilha": 128
        }
      ],
      "runoff_aux": [
        {
          "competencia": "2023-08-01",
          "runoff_puro": 1631709.3999999994,
          "avisado_mes": 2683676.3099999996,
          "ocorrido_mes": 2860304.794343035,
          "linha_planilha": 6
        },
        {
          "competencia": "2023-09-01",
          "runoff_puro": 1547111.1333693874,
          "avisado_mes": 2499143.71,
          "ocorrido_mes": 2413746.999539286,
          "linha_planilha": 7
        },
        {
          "competencia": "2023-10-01",
          "runoff_puro": 1572834.645185579,
          "avisado_mes": 2455577.88,
          "ocorrido_mes": 2480223.002335402,
          "linha_planilha": 8
        },
        {
          "competencia": "2023-11-01",
          "runoff_puro": 1642162.8570527483,
          "avisado_mes": 2453520.0000000005,
          "ocorrido_mes": 2522785.858830549,
          "linha_planilha": 9
        },
        {
          "competencia": "2023-12-01",
          "runoff_puro": 1036613.7405372163,
          "avisado_mes": 2453500.1400000006,
          "ocorrido_mes": 1847951.2408340492,
          "linha_planilha": 10
        },
        {
          "competencia": "2024-01-01",
          "runoff_puro": 1848839.8295675225,
          "avisado_mes": 2293145.0480561596,
          "ocorrido_mes": 3105502.4592098184,
          "linha_planilha": 11
        },
        {
          "competencia": "2024-02-01",
          "runoff_puro": 1864069.4233981925,
          "avisado_mes": 2917516.444795005,
          "ocorrido_mes": 2932770.505388486,
          "linha_planilha": 12
        },
        {
          "competencia": "2024-03-01",
          "runoff_puro": 1869466.88879125,
          "avisado_mes": 3116686.7269403827,
          "ocorrido_mes": 3123194.8871597666,
          "linha_planilha": 13
        },
        {
          "competencia": "2024-04-01",
          "runoff_puro": 2023067.5889421168,
          "avisado_mes": 3250382.756768446,
          "ocorrido_mes": 3406038.3447651565,
          "linha_planilha": 14
        },
        {
          "competencia": "2024-05-01",
          "runoff_puro": 2174790.3211547183,
          "avisado_mes": 3249086.5233386336,
          "ocorrido_mes": 3405598.621987996,
          "linha_planilha": 15
        },
        {
          "competencia": "2024-06-01",
          "runoff_puro": 3136479.2025666945,
          "avisado_mes": 3196760.658581219,
          "ocorrido_mes": 4170039.171569735,
          "linha_planilha": 16
        },
        {
          "competencia": "2024-07-01",
          "runoff_puro": 4812496.176559128,
          "avisado_mes": 3424135.537081914,
          "ocorrido_mes": 5100310.761913286,
          "linha_planilha": 17
        },
        {
          "competencia": "2024-08-01",
          "runoff_puro": 4295718.538435898,
          "avisado_mes": 3289049.6459494587,
          "ocorrido_mes": 2765578.7529753423,
          "linha_planilha": 18
        },
        {
          "competencia": "2024-09-01",
          "runoff_puro": 4335325.369542062,
          "avisado_mes": 2685136.728261246,
          "ocorrido_mes": 2719033.1993674096,
          "linha_planilha": 19
        },
        {
          "competencia": "2024-10-01",
          "runoff_puro": 4577983.8258953355,
          "avisado_mes": 2591489.0048920605,
          "ocorrido_mes": 2834637.161245331,
          "linha_planilha": 20
        },
        {
          "competencia": "2024-11-01",
          "runoff_puro": 3918502.040195393,
          "avisado_mes": 2864778.41006378,
          "ocorrido_mes": 2205296.624363838,
          "linha_planilha": 21
        },
        {
          "competencia": "2024-12-01",
          "runoff_puro": 3253420.6783333137,
          "avisado_mes": 2465344.9283026983,
          "ocorrido_mes": 1800263.5664406188,
          "linha_planilha": 22
        },
        {
          "competencia": "2025-01-01",
          "runoff_puro": 4052771.025154989,
          "avisado_mes": 1713567.1380515255,
          "ocorrido_mes": 2513340.154873201,
          "linha_planilha": 23
        },
        {
          "competencia": "2025-02-01",
          "runoff_puro": 3097828.690239675,
          "avisado_mes": 2875375.165069185,
          "ocorrido_mes": 1920478.3301538709,
          "linha_planilha": 24
        },
        {
          "competencia": "2025-03-01",
          "runoff_puro": 3231428.0779817444,
          "avisado_mes": 1868924.8743043588,
          "ocorrido_mes": 2002161.8320464275,
          "linha_planilha": 25
        },
        {
          "competencia": "2025-04-01",
          "runoff_puro": 3752076.651603661,
          "avisado_mes": 1738065.009564203,
          "ocorrido_mes": 2259032.08318612,
          "linha_planilha": 26
        },
        {
          "competencia": "2025-05-01",
          "runoff_puro": 4563197.5644871835,
          "avisado_mes": 1987338.6122544894,
          "ocorrido_mes": 2798459.525138013,
          "linha_planilha": 27
        },
        {
          "competencia": "2025-06-01",
          "runoff_puro": 3756723.6144602997,
          "avisado_mes": 3002404.7339025764,
          "ocorrido_mes": 2187451.133875691,
          "linha_planilha": 28
        },
        {
          "competencia": "2025-07-01",
          "runoff_puro": 3168430.990000001,
          "avisado_mes": 2927894.60319229,
          "ocorrido_mes": 2339601.9787319917,
          "linha_planilha": 29
        },
        {
          "competencia": "2025-08-01",
          "runoff_puro": 3111042.79,
          "avisado_mes": 2240252.08,
          "ocorrido_mes": 2182863.8799999985,
          "linha_planilha": 30
        },
        {
          "competencia": "2025-09-01",
          "runoff_puro": 3170666.9299999955,
          "avisado_mes": 2324084.1900000004,
          "ocorrido_mes": 2383708.3299999954,
          "linha_planilha": 31
        },
        {
          "competencia": "2025-10-01",
          "runoff_puro": 3151478.339999994,
          "avisado_mes": 2343600.7299999963,
          "ocorrido_mes": 2324412.1399999945,
          "linha_planilha": 32
        },
        {
          "competencia": "2025-11-01",
          "runoff_puro": 2719522.2799999993,
          "avisado_mes": 2531309.2099999934,
          "ocorrido_mes": 2099353.1499999994,
          "linha_planilha": 33
        },
        {
          "competencia": "2025-12-01",
          "runoff_puro": 2163000.859999999,
          "avisado_mes": 2316562.3699999996,
          "ocorrido_mes": 1760040.9499999993,
          "linha_planilha": 34
        },
        {
          "competencia": "2026-01-01",
          "runoff_puro": 2532856.3800000013,
          "avisado_mes": 1800756.0399999989,
          "ocorrido_mes": 2170611.560000001,
          "linha_planilha": 35
        },
        {
          "competencia": "2026-02-01",
          "runoff_puro": 2488762.609999997,
          "avisado_mes": 2070419.770000001,
          "ocorrido_mes": 2026325.9999999963,
          "linha_planilha": 36
        },
        {
          "competencia": "2026-03-01",
          "runoff_puro": 3141439.2800000045,
          "avisado_mes": 1935481.4399999955,
          "ocorrido_mes": 2588158.1100000027,
          "linha_planilha": 37
        },
        {
          "competencia": "2026-04-01",
          "runoff_puro": 2893479.500000002,
          "avisado_mes": 2479996.680000003,
          "ocorrido_mes": 2232036.900000001,
          "linha_planilha": 38
        },
        {
          "competencia": "2026-05-01",
          "runoff_puro": 2720997.270000001,
          "avisado_mes": 2385821.8400000012,
          "ocorrido_mes": 2213339.610000001,
          "linha_planilha": 39
        },
        {
          "competencia": "2026-06-01",
          "runoff_puro": 2232440.6399999997,
          "avisado_mes": 2320703.8200000008,
          "ocorrido_mes": 1832147.1899999995,
          "linha_planilha": 40
        },
        {
          "competencia": "2026-07-01",
          "runoff_puro": 0.0,
          "avisado_mes": 2333640.2499999995,
          "ocorrido_mes": 101199.60999999999,
          "linha_planilha": 41
        }
      ],
      "formulas": {
        "celula_triangulo": "SUMIFS(Base_Dados[Despesa OD]; atraso; competência de aviso)",
        "total_avisado": "SUM(lags da linha)",
        "proporcao_Mk": "SUM(coluna j na janela) / SUM(totais na janela)",
        "fator_Ik": "SUM(j × Mk_j)  — coluna Total do bloco Fator Médio",
        "base_Bk": "AVERAGE(totais da janela de 12 meses)",
        "peona": "Ik × Bk"
      },
      "interpretacao": {
        "eixo": "aviso",
        "texto_j": "Cada coluna indica há quantos meses o evento ocorreu em relação ao mês de aviso. Coluna 0 = ocorreu no próprio mês do aviso; coluna 11+ agrupa atrasos ≥ 11 meses."
      },
      "titulo_aviso": "Abertura das Despesas por Data de Aviso",
      "titulo_ocorrencia": "Abertura das Despesas por Data de Ocorrência"
    }
  },
  "rumo_x_ipasgo": [
    {
      "competencia": "2025-10-01",
      "competencia_label": "10/2025",
      "peona_rumo": 299507169.6,
      "peona_ipasgo": 299506948.35499656,
      "diferenca": -221.24500346183777,
      "variacao_pct": -7.386968524647486e-07,
      "comentario": "IPASGO próximo da RUMO"
    },
    {
      "competencia": "2025-11-01",
      "competencia_label": "11/2025",
      "peona_rumo": 300962542.3,
      "peona_ipasgo": 300703024.89832973,
      "diferenca": -259517.40167027712,
      "variacao_pct": -0.0008622913658523634,
      "comentario": "IPASGO 0.09% abaixo da RUMO · Maior diferença do período · Diferença aumentou frente ao mês anterior"
    },
    {
      "competencia": "2025-12-01",
      "competencia_label": "12/2025",
      "peona_rumo": 293000612.39,
      "peona_ipasgo": 292741126.11666095,
      "diferenca": -259486.27333903313,
      "variacao_pct": -0.0008856168293384092,
      "comentario": "IPASGO 0.09% abaixo da RUMO · Diferença reduziu frente ao mês anterior"
    },
    {
      "competencia": "2026-01-01",
      "competencia_label": "01/2026",
      "peona_rumo": 286015181.78,
      "peona_ipasgo": 285755695.5016665,
      "diferenca": -259486.27833348513,
      "variacao_pct": -0.0009072465199874147,
      "comentario": "IPASGO 0.09% abaixo da RUMO"
    },
    {
      "competencia": "2026-02-01",
      "competencia_label": "02/2026",
      "peona_rumo": 282725479.08,
      "peona_ipasgo": 282465992.7966665,
      "diferenca": -259486.28333348036,
      "variacao_pct": -0.0009178029662478826,
      "comentario": "IPASGO 0.09% abaixo da RUMO"
    },
    {
      "competencia": "2026-03-01",
      "competencia_label": "03/2026",
      "peona_rumo": 280572822.47,
      "peona_ipasgo": 280313518.1266664,
      "diferenca": -259304.34333360195,
      "variacao_pct": -0.0009241962248903723,
      "comentario": "IPASGO 0.09% abaixo da RUMO · Diferença reduziu frente ao mês anterior"
    },
    {
      "competencia": "2026-04-01",
      "competencia_label": "04/2026",
      "peona_rumo": 281129150.34,
      "peona_ipasgo": 280870705.1616665,
      "diferenca": -258445.17833346128,
      "variacao_pct": -0.0009193112063294873,
      "comentario": "IPASGO 0.09% abaixo da RUMO · Diferença reduziu frente ao mês anterior"
    },
    {
      "competencia": "2026-05-01",
      "competencia_label": "05/2026",
      "peona_rumo": 279384869.97,
      "peona_ipasgo": 279384901.09,
      "diferenca": 31.119999945163727,
      "variacao_pct": 1.1138756339512668e-07,
      "comentario": "IPASGO próximo da RUMO · Diferença reduziu frente ao mês anterior · Mudança de direção: IPASGO passou de abaixo para acima da RUMO"
    },
    {
      "competencia": "2026-06-01",
      "competencia_label": "06/2026",
      "peona_rumo": 280733165.53,
      "peona_ipasgo": 280733165.52833325,
      "diferenca": -0.001666724681854248,
      "variacao_pct": -5.937028646485487e-12,
      "comentario": "IPASGO próximo da RUMO · Diferença reduziu frente ao mês anterior · Mudança de direção: IPASGO passou de acima para abaixo da RUMO"
    },
    {
      "competencia": "2026-07-01",
      "competencia_label": "07/2026",
      "peona_rumo": 286802698.89,
      "peona_ipasgo": 286802698.88666666,
      "diferenca": -0.0033333301544189453,
      "variacao_pct": -1.1622369733288451e-11,
      "comentario": "IPASGO próximo da RUMO"
    }
  ],
  "rumo_x_ipasgo_meta": {
    "fonte_arquivo": "Acompanhamento das Provisões.xlsx",
    "fonte_aba": "Garantias Ipasgo x RUMO",
    "formula_diferenca": "PEONA_IPASGO - PEONA_RUMO",
    "formula_variacao": "(PEONA_IPASGO / PEONA_RUMO) - 1",
    "formula_variacao_acumulada": "(sum(PEONA_IPASGO) / sum(PEONA_RUMO)) - 1",
    "n_meses": 10,
    "total_peona_rumo": 2870833692.35,
    "total_peona_ipasgo": 2869277776.461653,
    "diferenca_acumulada": -1555915.888346672,
    "variacao_acumulada": -0.0005419735362911515,
    "total_planilha_rumo": 2870833692.35,
    "total_planilha_ipasgo": 2869277776.461653,
    "variacao_planilha_acumulada": -0.0005419735362911515,
    "reconciliado": true,
    "alertas": [],
    "intervalo": {
      "inicio": "2025-10-01",
      "fim": "2026-07-01"
    }
  },
  "resultado_aba": [
    {
      "competencia": "2025-07-01",
      "competencia_label": "Jul/2025",
      "peona_mh": 289478572.91340303,
      "peona_od": 3871500.839926912,
      "peona_total": 293350073.75332993
    },
    {
      "competencia": "2025-08-01",
      "competencia_label": "Aug/2025",
      "peona_mh": 285118609.9884561,
      "peona_od": 3626440.9898738516,
      "peona_total": 288745050.9783299
    },
    {
      "competencia": "2025-09-01",
      "competencia_label": "Sep/2025",
      "peona_mh": 289276665.4276232,
      "peona_od": 3678233.599040063,
      "peona_total": 292954899.0266633
    },
    {
      "competencia": "2025-10-01",
      "competencia_label": "Oct/2025",
      "peona_mh": 295765675.6024236,
      "peona_od": 3740452.894239515,
      "peona_total": 299506128.4966631
    },
    {
      "competencia": "2025-11-01",
      "competencia_label": "Nov/2025",
      "peona_mh": 296931424.4004847,
      "peona_od": 3771600.497845068,
      "peona_total": 300703024.89832973
    },
    {
      "competencia": "2025-12-01",
      "competencia_label": "Dec/2025",
      "peona_mh": 289324536.7374801,
      "peona_od": 3416589.379180842,
      "peona_total": 292741126.11666095
    },
    {
      "competencia": "2026-01-01",
      "competencia_label": "Jan/2026",
      "peona_mh": 282762145.2216665,
      "peona_od": 2993550.2799999975,
      "peona_total": 285755695.5016665
    },
    {
      "competencia": "2026-02-01",
      "competencia_label": "Feb/2026",
      "peona_mh": 279581989.0666665,
      "peona_od": 2884003.7299999967,
      "peona_total": 282465992.7966665
    },
    {
      "competencia": "2026-03-01",
      "competencia_label": "Mar/2026",
      "peona_mh": 277569796.0533331,
      "peona_od": 2743722.073333331,
      "peona_total": 280313518.1266664
    },
    {
      "competencia": "2026-04-01",
      "competencia_label": "Apr/2026",
      "peona_mh": 278137889.2916665,
      "peona_od": 2732815.8699999982,
      "peona_total": 280870705.1616665
    },
    {
      "competencia": "2026-05-01",
      "competencia_label": "May/2026",
      "peona_mh": 276699947.21666664,
      "peona_od": 2684953.873333333,
      "peona_total": 279384901.09
    },
    {
      "competencia": "2026-06-01",
      "competencia_label": "Jun/2026",
      "peona_mh": 278078166.00499994,
      "peona_od": 2654999.5233333334,
      "peona_total": 280733165.52833325
    },
    {
      "competencia": "2026-07-01",
      "competencia_label": "Jul/2026",
      "peona_mh": 284039635.56666666,
      "peona_od": 2763063.3200000008,
      "peona_total": 286802698.88666666
    }
  ],
  "comparativo_ipasgo_rodarte": {
    "ipasgo_mh": 284039635.56666666,
    "ipasgo_od": 2763063.3200000008,
    "ipasgo_total": 286802698.88666666,
    "rodarte_mh": 279841255.21,
    "rodarte_od": 2884233.87,
    "rodarte_total": 282725479.08,
    "var_mh": 0.015002721287524556,
    "var_od": -0.04201134702020515,
    "var_total": 0.014421126174882115
  }
};
