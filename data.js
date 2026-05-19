/**
 * JL_DATA – Single Source of Truth für alle J&L Dashboards
 *
 * WICHTIG: Diese Datei wird automatisch durch master_update.py generiert.
 *          NICHT manuell bearbeiten – Script ausführen!
 *
 * Letztes Update: 19.05.2026 | ?
 */
window.JL_DATA = {

  // ─── DATENSTAND ───────────────────────────────────────────────
  stand: {
    amazon_weekly:  "? ()",
    amazon_monthly: "ES/FR/IT/NL/SE: Januar 2026",
    webshop:        "?",
    dashboard:      "19.05.2026"
  },

  // ─── AMAZON ADS 2026 ──────────────────────────────────────────
  amazon: {
    ytd_gesamt:       0,
    ytd_gesamt_label: "Amazon Außenumsatz YTD 2026 – alle 8 Märkte",
    ads_budget_jahr:   567200,
    q1_plan:          2147000,
    jahresprognose:  11300000,
    data_weeks:             ?,
    ad_spend_ytd:       0,
    paid_roas_ytd:       null,
    interner_roas:       null,

    laender: {
      DE:  { ytd: 0, spend: 0, orders: 0, paid_roas: null, label: "KW1–? YTD '26", budget_jahr: 320000 },
      UK:  { ytd: 0, spend: 0, orders: 0, paid_roas: null, label: "KW1–? YTD '26", budget_jahr: 100000 },
      USA: { ytd: 0, spend: 0, orders: 0, paid_roas: null, label: "KW1–? YTD '26 (USD→EUR)", budget_jahr: null },
      IT:  { ytd: 0, spend:  0, orders:  null, paid_roas:  null, label: "Jan '26", budget_jahr: 50400 },
      ES:  { ytd: 0, spend:  0, orders:  null, paid_roas:  null, label: "Jan '26", budget_jahr: 46800 },
      FR:  { ytd: 0, spend:  0, orders:  null, paid_roas:  null, label: "Jan '26", budget_jahr: 39800 },
      NL:  { ytd: 0, spend:    0, orders:  null, paid_roas:  null, label: "Jan '26", budget_jahr: 5000 },
      SE:  { ytd:  0, spend:    0, orders:  null, paid_roas:  null, label: "Jan '26", budget_jahr: 5200 }
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
    ytd_umsatz:       0,
    ytd_bestellungen: 0,
    aov:              0,
    aov_ziel:         49.15,
    cr:               0,
    cr_ziel:          2.81,
    tages_schnitt:    0
  },

  // ─── OOS-QUOTE ────────────────────────────────────────────────
  oos: {
    ist:    3.24,
    ziel:   4.0,
    status: "fallback",
    stand:  "19.05.2026"
  }
};
