/**
 * JL_DATA – Single Source of Truth für alle J&L Dashboards
 *
 * WICHTIG: Diese Datei wird automatisch durch master_update.py generiert.
 *          NICHT manuell bearbeiten – Script ausführen!
 *
 * Letztes Update: 20.05.2026 | KW19
 */
window.JL_DATA = {

  // ─── DATENSTAND ───────────────────────────────────────────────
  stand: {
    amazon_weekly:  "KW19 (03.05 - 09.05)",
    amazon_monthly: "ES/FR/IT/NL/SE: April 2026",
    webshop:        "19.05.2026",
    dashboard:      "20.05.2026"
  },

  // ─── AMAZON ADS 2026 ──────────────────────────────────────────
  amazon: {
    ytd_gesamt:       3902404,
    ytd_gesamt_label: "Amazon Außenumsatz YTD 2026 – alle 8 Märkte",
    ads_budget_jahr:   567200,
    q1_plan:          2147000,
    jahresprognose:  11300000,
    data_weeks:             19,
    ad_spend_ytd:       148581,
    paid_roas_ytd:       11.0,
    interner_roas:       32.3,

    laender: {
      DE:  { ytd: 3141695, spend: 84437, orders: 207283, paid_roas: 14.18, label: "KW1–KW19 YTD '26", budget_jahr: 320000 },
      UK:  { ytd: 77010, spend: 30060, orders: 5909, paid_roas: 1.89, label: "KW1–KW17 YTD '26", budget_jahr: 100000 },
      USA: { ytd: 70845, spend: 34084, orders: 3448, paid_roas: 0.95, label: "KW1–KW18 YTD '26 (USD→EUR)", budget_jahr: null },
      IT:  { ytd: 207870, spend:  13874, orders:  null, paid_roas:  null, label: "Jan–Apr '26", budget_jahr: 50400 },
      ES:  { ytd: 195634, spend:  11962, orders:  null, paid_roas:  null, label: "Jan–Apr '26", budget_jahr: 46800 },
      FR:  { ytd: 151747, spend:  8549, orders:  null, paid_roas:  null, label: "Jan–Apr '26", budget_jahr: 39800 },
      NL:  { ytd: 39200, spend:    1060, orders:  null, paid_roas:  null, label: "Jan–Apr '26", budget_jahr: 5000 },
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
    ytd_umsatz:       1532559,
    ytd_bestellungen: 33324,
    aov:              45.99,
    aov_ziel:         49.15,
    cr:               2.9,
    cr_ziel:          2.81,
    tages_schnitt:    11026
  },

  // ─── OOS-QUOTE ────────────────────────────────────────────────
  oos: {
    ist:    3.24,
    ziel:   4.0,
    status: "fallback",
    stand:  "20.05.2026"
  }
};
