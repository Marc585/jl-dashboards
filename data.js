/**
 * JL_DATA – Single Source of Truth für alle J&L Dashboards
 *
 * WICHTIG: Diese Datei wird automatisch durch master_update.py generiert.
 *          NICHT manuell bearbeiten – Script ausführen!
 *
 * Letztes Update: 08.03.2026 | KW8
 */
window.JL_DATA = {

  // ─── DATENSTAND ───────────────────────────────────────────────
  stand: {
    amazon_weekly:  "KW8 (15.02 - 21.02)",
    amazon_monthly: "ES/FR/IT/NL/SE: Januar 2026",
    webshop:        "07.03.2026",
    dashboard:      "08.03.2026"
  },

  // ─── AMAZON ADS 2026 ──────────────────────────────────────────
  amazon: {
    ytd_gesamt:       1508279,
    ytd_gesamt_label: "Amazon Außenumsatz YTD 2026 – alle 8 Märkte",
    ads_budget_jahr:   567200,
    q1_plan:          2147000,
    jahresprognose:  11300000,
    data_weeks:             8,
    ad_spend_ytd:       61017,
    paid_roas_ytd:       11.2,
    interner_roas:       31.9,

    laender: {
      DE:  { ytd: 1272967, spend: 34798, orders: 87577, paid_roas: 14.46, label: "KW1–KW8 YTD '26", budget_jahr: 320000 },
      UK:  { ytd: 34839, spend: 12436, orders: 2858, paid_roas: 2.11, label: "KW1–KW8 YTD '26", budget_jahr: 100000 },
      USA: { ytd: 22541, spend: 13783, orders: 799, paid_roas: 0.71, label: "KW1–KW8 YTD '26 (USD→EUR)", budget_jahr: null },
      IT:  { ytd: 68985, spend:  5479, orders:  null, paid_roas:  null, label: "Jan '26", budget_jahr: 50400 },
      ES:  { ytd: 48565, spend:  3475, orders:  null, paid_roas:  null, label: "Jan '26", budget_jahr: 46800 },
      FR:  { ytd: 44011, spend:  3215, orders:  null, paid_roas:  null, label: "Jan '26", budget_jahr: 39800 },
      NL:  { ytd: 11277, spend:    600, orders:  null, paid_roas:  null, label: "Jan '26", budget_jahr: 5000 },
      SE:  { ytd:  5094, spend:    637, orders:  null, paid_roas:  null, label: "Jan '26", budget_jahr: 5200 }
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
    ytd_umsatz:       693088,
    ytd_bestellungen: 15267,
    aov:              45.4,
    aov_ziel:         49.15,
    cr:               2.77,
    cr_ziel:          2.81,
    tages_schnitt:    10501
  },

  // ─── OOS-QUOTE ────────────────────────────────────────────────
  oos: {
    ist:    3.24,
    ziel:   4.0,
    status: "fallback",
    stand:  "08.03.2026"
  }
};
