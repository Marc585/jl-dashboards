/**
 * JL_DATA – Single Source of Truth für alle J&L Dashboards
 *
 * WICHTIG: Diese Datei wird automatisch durch master_update.py generiert.
 *          NICHT manuell bearbeiten – Script ausführen!
 *
 * Letztes Update: 15.04.2026 | KW14
 */
window.JL_DATA = {

  // ─── DATENSTAND ───────────────────────────────────────────────
  stand: {
    amazon_weekly:  "KW14 (29.03 - 04.04)",
    amazon_monthly: "ES/FR/IT/NL/SE: Januar 2026",
    webshop:        "14.04.2026",
    dashboard:      "15.04.2026"
  },

  // ─── AMAZON ADS 2026 ──────────────────────────────────────────
  amazon: {
    ytd_gesamt:       2845052,
    ytd_gesamt_label: "Amazon Außenumsatz YTD 2026 – alle 8 Märkte",
    ads_budget_jahr:   567200,
    q1_plan:          2147000,
    jahresprognose:  11300000,
    data_weeks:             14,
    ad_spend_ytd:       106789,
    paid_roas_ytd:       10.9,
    interner_roas:       28.6,

    laender: {
      DE:  { ytd: 2271354, spend: 60151, orders: 152192, paid_roas: 14.63, label: "KW1–KW14 YTD '26", budget_jahr: 320000 },
      UK:  { ytd: 63540, spend: 24466, orders: 4943, paid_roas: 1.9, label: "KW1–KW14 YTD '26", budget_jahr: 100000 },
      USA: { ytd: 47389, spend: 22172, orders: 1779, paid_roas: 0.84, label: "KW1–KW14 YTD '26 (USD→EUR)", budget_jahr: null },
      IT:  { ytd: 161631, spend:  11152, orders:  null, paid_roas:  null, label: "Jan–Mär '26", budget_jahr: 50400 },
      ES:  { ytd: 142595, spend:  9037, orders:  null, paid_roas:  null, label: "Jan–Mär '26", budget_jahr: 46800 },
      FR:  { ytd: 116016, spend:  6945, orders:  null, paid_roas:  null, label: "Jan–Mär '26", budget_jahr: 39800 },
      NL:  { ytd: 29142, spend:    934, orders:  null, paid_roas:  null, label: "Jan–Mär '26", budget_jahr: 5000 },
      SE:  { ytd:  13385, spend:    950, orders:  null, paid_roas:  null, label: "Jan–Mär '26", budget_jahr: 5200 }
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
    ytd_umsatz:       1145569,
    ytd_bestellungen: 24972,
    aov:              45.87,
    aov_ziel:         49.15,
    cr:               2.85,
    cr_ziel:          2.81,
    tages_schnitt:    11015
  },

  // ─── OOS-QUOTE ────────────────────────────────────────────────
  oos: {
    ist:    3.24,
    ziel:   4.0,
    status: "fallback",
    stand:  "15.04.2026"
  }
};
