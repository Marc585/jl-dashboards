/**
 * JL_DATA – Single Source of Truth für alle J&L Dashboards
 *
 * WICHTIG: Diese Datei wird automatisch durch master_update.py generiert.
 *          NICHT manuell bearbeiten – Script ausführen!
 *
 * Letztes Update: 04.07.2026 | KW25
 */
window.JL_DATA = {

  // ─── DATENSTAND ───────────────────────────────────────────────
  stand: {
    amazon_weekly:  "KW25 (14.06 - 20.06)",
    amazon_monthly: "ES/FR/IT/NL/SE: Mai 2026",
    webshop:        "02.07.2026",
    dashboard:      "04.07.2026"
  },

  // ─── AMAZON ADS 2026 ──────────────────────────────────────────
  amazon: {
    ytd_gesamt:       5107645,
    ytd_gesamt_label: "Amazon Außenumsatz YTD 2026 – alle 8 Märkte",
    ads_budget_jahr:   567200,
    q1_plan:          2147000,
    jahresprognose:  11300000,
    data_weeks:             25,
    ad_spend_ytd:       197352,
    paid_roas_ytd:       10.2,
    interner_roas:       28.0,

    laender: {
      DE:  { ytd: 4146847, spend: 123917, orders: 272882, paid_roas: 12.84, label: "KW1–KW25 YTD '26", budget_jahr: 320000 },
      UK:  { ytd: 101565, spend: 39351, orders: 7595, paid_roas: 1.89, label: "KW1–KW22 YTD '26", budget_jahr: 100000 },
      USA: { ytd: 70845, spend: 34084, orders: 3448, paid_roas: 0.95, label: "KW1–KW18 YTD '26 (USD→EUR)", budget_jahr: null },
      IT:  { ytd: 264662, spend:  17804, orders:  null, paid_roas:  null, label: "Jan–Mai '26", budget_jahr: 50400 },
      ES:  { ytd: 256627, spend:  16172, orders:  null, paid_roas:  null, label: "Jan–Mai '26", budget_jahr: 46800 },
      FR:  { ytd: 193082, spend:  11208, orders:  null, paid_roas:  null, label: "Jan–Mai '26", budget_jahr: 39800 },
      NL:  { ytd: 49876, spend:    1233, orders:  null, paid_roas:  null, label: "Jan–Mai '26", budget_jahr: 5000 },
      SE:  { ytd:  24141, spend:    1263, orders:  null, paid_roas:  null, label: "Jan–Mai '26", budget_jahr: 5200 }
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
    ytd_umsatz:       2103198,
    ytd_bestellungen: 45537,
    aov:              46.19,
    aov_ziel:         49.15,
    cr:               3.08,
    cr_ziel:          2.81,
    tages_schnitt:    11493
  },

  // ─── OOS-QUOTE ────────────────────────────────────────────────
  oos: {
    ist:    3.24,
    ziel:   4.0,
    status: "fallback",
    stand:  "04.07.2026"
  }
};
