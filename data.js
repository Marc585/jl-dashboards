/**
 * JL_DATA – Single Source of Truth für alle J&L Dashboards
 *
 * WICHTIG: Diese Datei wird automatisch durch master_update.py generiert.
 *          NICHT manuell bearbeiten – Script ausführen!
 *
 * Letztes Update: 26.05.2026 | KW19
 */
window.JL_DATA = {

  // ─── DATENSTAND ───────────────────────────────────────────────
  stand: {
    amazon_weekly:  "KW19 (03.05 - 09.05)",
    amazon_monthly: "ES/FR/IT/NL/SE: April 2026",
    webshop:        "25.05.2026",
    dashboard:      "26.05.2026"
  },

  // ─── AMAZON ADS 2026 ──────────────────────────────────────────
  amazon: {
    ytd_gesamt:       3913274,
    ytd_gesamt_label: "Amazon Außenumsatz YTD 2026 – alle 8 Märkte",
    ads_budget_jahr:   567200,
    q1_plan:          2147000,
    jahresprognose:  11300000,
    data_weeks:             19,
    ad_spend_ytd:       153118,
    paid_roas_ytd:       10.6,
    interner_roas:       31.1,

    laender: {
      DE:  { ytd: 3141695, spend: 84437, orders: 207283, paid_roas: 14.18, label: "KW1–KW19 YTD '26", budget_jahr: 320000 },
      UK:  { ytd: 87880, spend: 34597, orders: 6705, paid_roas: 1.88, label: "KW1–KW19 YTD '26", budget_jahr: 100000 },
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
    ytd_umsatz:       1593519,
    ytd_bestellungen: 34689,
    aov:              45.94,
    aov_ziel:         49.15,
    cr:               2.91,
    cr_ziel:          2.81,
    tages_schnitt:    10990
  },

  // ─── OOS-QUOTE ────────────────────────────────────────────────
  oos: {
    ist:    3.24,
    ziel:   4.0,
    status: "fallback",
    stand:  "26.05.2026"
  }
};
