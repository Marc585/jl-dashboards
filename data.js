/**
 * JL_DATA – Single Source of Truth für alle J&L Dashboards
 *
 * WICHTIG: Diese Datei wird automatisch durch master_update.py generiert.
 *          NICHT manuell bearbeiten – Script ausführen!
 *
 * Letztes Update: 27.04.2026 | KW15
 */
window.JL_DATA = {

  // ─── DATENSTAND ───────────────────────────────────────────────
  stand: {
    amazon_weekly:  "KW15 (05.04 - 11.04)",
    amazon_monthly: "ES/FR/IT/NL/SE: Januar 2026",
    webshop:        "26.04.2026",
    dashboard:      "27.04.2026"
  },

  // ─── AMAZON ADS 2026 ──────────────────────────────────────────
  amazon: {
    ytd_gesamt:       3001077,
    ytd_gesamt_label: "Amazon Außenumsatz YTD 2026 – alle 8 Märkte",
    ads_budget_jahr:   567200,
    q1_plan:          2147000,
    jahresprognose:  11300000,
    data_weeks:             15,
    ad_spend_ytd:       113234,
    paid_roas_ytd:       11.0,
    interner_roas:       30.1,

    laender: {
      DE:  { ytd: 2423367, spend: 64705, orders: 162425, paid_roas: 14.47, label: "KW1–KW15 YTD '26", budget_jahr: 320000 },
      UK:  { ytd: 63540, spend: 24466, orders: 4943, paid_roas: 1.9, label: "KW1–KW15 YTD '26", budget_jahr: 100000 },
      USA: { ytd: 51401, spend: 24063, orders: 1937, paid_roas: 0.83, label: "KW1–KW15 YTD '26 (USD→EUR)", budget_jahr: null },
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
    ytd_umsatz:       1258413,
    ytd_bestellungen: 27454,
    aov:              45.84,
    aov_ziel:         49.15,
    cr:               2.85,
    cr_ziel:          2.81,
    tages_schnitt:    10848
  },

  // ─── OOS-QUOTE ────────────────────────────────────────────────
  oos: {
    ist:    3.24,
    ziel:   4.0,
    status: "fallback",
    stand:  "27.04.2026"
  }
};
