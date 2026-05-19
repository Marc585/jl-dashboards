/**
 * JL_DATA – Single Source of Truth für alle J&L Dashboards
 *
 * WICHTIG: Diese Datei wird automatisch durch master_update.py generiert.
 *          NICHT manuell bearbeiten – Script ausführen!
 *
 * Letztes Update: 19.05.2026 | KW18
 */
window.JL_DATA = {

  // ─── DATENSTAND ───────────────────────────────────────────────
  stand: {
    amazon_weekly:  "KW18 (26.04 - 02.05)",
    amazon_monthly: "ES/FR/IT/NL/SE: April 2026",
    webshop:        "18.05.2026",
    dashboard:      "19.05.2026"
  },

  // ─── AMAZON ADS 2026 ──────────────────────────────────────────
  amazon: {
    ytd_gesamt:       3650334,
    ytd_gesamt_label: "Amazon Außenumsatz YTD 2026 – alle 8 Märkte",
    ads_budget_jahr:   567200,
    q1_plan:          2147000,
    jahresprognose:  11300000,
    data_weeks:             18,
    ad_spend_ytd:       142880,
    paid_roas_ytd:       10.9,
    interner_roas:       32.0,

    laender: {
      DE:  { ytd: 2935414, spend: 78736, orders: 194056, paid_roas: 14.28, label: "KW1–KW18 YTD '26", budget_jahr: 320000 },
      UK:  { ytd: 77010, spend: 30060, orders: 5909, paid_roas: 1.89, label: "KW1–KW18 YTD '26", budget_jahr: 100000 },
      USA: { ytd: 70845, spend: 34084, orders: 3448, paid_roas: 0.95, label: "KW1–KW18 YTD '26 (USD→EUR)", budget_jahr: null },
      IT:  { ytd: 207870, spend:  13874, orders:  null, paid_roas:  null, label: "Jan–Apr '26", budget_jahr: 50400 },
      ES:  { ytd: 195634, spend:  11962, orders:  null, paid_roas:  null, label: "Jan–Apr '26", budget_jahr: 46800 },
      FR:  { ytd: 116016, spend:  6945, orders:  null, paid_roas:  null, label: "Jan–Mär '26", budget_jahr: 39800 },
      NL:  { ytd: 29142, spend:    934, orders:  null, paid_roas:  null, label: "Jan–Mär '26", budget_jahr: 5000 },
      SE:  { ytd:  18403, spend:    1089, orders:  null, paid_roas:  null, label: "Jan–Apr '26", budget_jahr: 5200 }
    },

    laender_2025: {
      DE:  7727122,
      UK:    56971,
      USA:  179789,
      IT:   416615,
      ES:   399815,
      FR:   319801,
      NL:    87987,
      SE:    32481
    }
  },

  // ─── WEBSHOP 2026 ─────────────────────────────────────────────
  webshop: {
    ytd_umsatz:       1524050,
    ytd_bestellungen: 33118,
    aov:              46.02,
    aov_ziel:         49.15,
    cr:               2.91,
    cr_ziel:          2.81,
    tages_schnitt:    11044
  },

  // ─── OOS-QUOTE ────────────────────────────────────────────────
  oos: {
    ist:    3.24,
    ziel:   4.0,
    status: "fallback",
    stand:  "19.05.2026"
  }
};
