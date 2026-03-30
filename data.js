/**
 * JL_DATA – Single Source of Truth für alle J&L Dashboards
 *
 * WICHTIG: Diese Datei wird automatisch durch master_update.py generiert.
 *          NICHT manuell bearbeiten – Script ausführen!
 *
 * Letztes Update: 30.03.2026 | KW10
 */
window.JL_DATA = {

  // ─── DATENSTAND ───────────────────────────────────────────────
  stand: {
    amazon_weekly:  "KW10 (01.03 - 07.03)",
    amazon_monthly: "ES/FR/IT/NL/SE: Januar 2026",
    webshop:        "22.03.2026",
    dashboard:      "30.03.2026"
  },

  // ─── AMAZON ADS 2026 ──────────────────────────────────────────
  amazon: {
    ytd_gesamt:       2134354,
    ytd_gesamt_label: "Amazon Außenumsatz YTD 2026 – alle 8 Märkte",
    ads_budget_jahr:   567200,
    q1_plan:          2147000,
    jahresprognose:  11300000,
    data_weeks:             10,
    ad_spend_ytd:       70067,
    paid_roas_ytd:       11.9,
    interner_roas:       33.8,

    laender: {
      DE:  { ytd: 1603270, spend: 42219, orders: 107756, paid_roas: 14.83, label: "KW1–KW10 YTD '26", budget_jahr: 320000 },
      UK:  { ytd: 34839, spend: 12436, orders: 2858, paid_roas: 2.11, label: "KW1–KW10 YTD '26", budget_jahr: 100000 },
      USA: { ytd: 26485, spend: 15412, orders: 974, paid_roas: 0.75, label: "KW1–KW10 YTD '26 (USD→EUR)", budget_jahr: null },
      IT:  { ytd: 275941, spend:  16669, orders:  null, paid_roas:  null, label: "Jan–Mär '26", budget_jahr: 50400 },
      ES:  { ytd: 89673, spend:  11466, orders:  null, paid_roas:  null, label: "Jan–Mär '26", budget_jahr: 46800 },
      FR:  { ytd: 77481, spend:  10081, orders:  null, paid_roas:  null, label: "Jan–Mär '26", budget_jahr: 39800 },
      NL:  { ytd: 18224, spend:    1588, orders:  null, paid_roas:  null, label: "Jan–Mär '26", budget_jahr: 5000 },
      SE:  { ytd:  8441, spend:    824, orders:  null, paid_roas:  null, label: "Jan–Feb '26", budget_jahr: 5200 }
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
    ytd_umsatz:       877739,
    ytd_bestellungen: 19109,
    aov:              45.93,
    aov_ziel:         49.15,
    cr:               2.93,
    cr_ziel:          2.81,
    tages_schnitt:    10836
  },

  // ─── OOS-QUOTE ────────────────────────────────────────────────
  oos: {
    ist:    3.24,
    ziel:   4.0,
    status: "fallback",
    stand:  "30.03.2026"
  }
};
