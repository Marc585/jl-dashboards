/**
 * JL_DATA – Single Source of Truth für alle J&L Dashboards
 *
 * WICHTIG: Diese Datei wird automatisch durch master_update.py generiert.
 *          NICHT manuell bearbeiten – Script ausführen!
 *
 * Letztes Update: 12.06.2026 | KW22
 */
window.JL_DATA = {

  // ─── DATENSTAND ───────────────────────────────────────────────
  stand: {
    amazon_weekly:  "KW22 (24.05-30.05)",
    amazon_monthly: "ES/FR/IT/NL/SE: April 2026",
    webshop:        "11.06.2026",
    dashboard:      "12.06.2026"
  },

  // ─── AMAZON ADS 2026 ──────────────────────────────────────────
  amazon: {
    ytd_gesamt:       4469614,
    ytd_gesamt_label: "Amazon Außenumsatz YTD 2026 – alle 8 Märkte",
    ads_budget_jahr:   567200,
    q1_plan:          2147000,
    jahresprognose:  11300000,
    data_weeks:             22,
    ad_spend_ytd:       177599,
    paid_roas_ytd:       10.4,
    interner_roas:       28.9,

    laender: {
      DE:  { ytd: 3684350, spend: 104164, orders: 242977, paid_roas: 13.55, label: "KW1–KW22 YTD '26", budget_jahr: 320000 },
      UK:  { ytd: 101565, spend: 39351, orders: 7595, paid_roas: 1.89, label: "KW1–KW22 YTD '26", budget_jahr: 100000 },
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
    ytd_umsatz:       1826650,
    ytd_bestellungen: 39590,
    aov:              46.14,
    aov_ziel:         49.15,
    cr:               2.99,
    cr_ziel:          2.81,
    tages_schnitt:    11276
  },

  // ─── OOS-QUOTE ────────────────────────────────────────────────
  oos: {
    ist:    3.24,
    ziel:   4.0,
    status: "fallback",
    stand:  "12.06.2026"
  }
};
