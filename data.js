/**
 * JL_DATA – Single Source of Truth für alle J&L Dashboards
 *
 * WICHTIG: Nur diese Datei ändern, wenn Zahlen aktualisiert werden.
 * amazon.html und ceo.html lesen automatisch aus dieser Datei.
 *
 * Letztes Update: 26.02.2026 | KW9
 */
window.JL_DATA = {

  // ─── DATENSTAND ───────────────────────────────────────────────
  stand: {
    amazon_weekly:  "KW7 (14.02.2026)",   // DE/USA KW7, UK KW6 – wöchentlich
    amazon_monthly: "Jan 2026",            // IT / ES / FR / NL / SE – monatlich (14. des Monats)
    webshop:        "25.02.2026",          // Jessis Reporting Excel
    dashboard:      "26.02.2026"
  },

  // ─── AMAZON ADS 2026 ──────────────────────────────────────────
  amazon: {
    ytd_gesamt:       1376070,   // Amazon Außenumsatz YTD alle 8 Märkte (€)
    ytd_gesamt_label: "Amazon Außenumsatz YTD 2026 – alle 8 Märkte",
    ads_budget_jahr:   619300,   // Ads Jahresbudget 2026 (alle Märkte)
    q1_plan:          2147000,   // Q1 Umsatzziel
    jahresprognose:  11300000,   // Jahresprognose Umsatz
    data_weeks:             7,   // Wochen mit Daten (DE/USA KW1–7, UK KW1–6)
    ad_spend_ytd:       54223,   // Ads Spend YTD alle wöchentlichen Märkte (€)
    paid_roas_ytd:       11.5,   // Paid ROAS YTD DE+UK
    interner_roas:       33.1,   // ERP Umsatz / Spend DE+UK

    // Einzelne Märkte – Amazon Außenumsatz (Paid + Organic)
    laender: {
      DE:  { ytd: 1150725, spend: 32232, orders: 79884, paid_roas: 14.22, label: "KW1–7 YTD '26",           budget_jahr: 320000 },
      UK:  { ytd:   27153, spend:  9334, orders:  2209, paid_roas:  2.20, label: "KW1–6 YTD '26",           budget_jahr: 100000 },
      USA: { ytd:   20259, spend: 12656, orders:   708, paid_roas:  0.71, label: "KW1–7 YTD '26 (USD→EUR)", budget_jahr: null   },
      IT:  { ytd:   68985, spend:  5479, orders:  null, paid_roas:  null, label: "Feb '26",                 budget_jahr:  50400 },
      ES:  { ytd:   48565, spend:  3475, orders:  null, paid_roas:  null, label: "Jan '26",                 budget_jahr:  46800 },
      FR:  { ytd:   44011, spend:  3215, orders:  null, paid_roas:  null, label: "Jan '26",                 budget_jahr:  39800 },
      NL:  { ytd:   11277, spend:   600, orders:  null, paid_roas:  null, label: "Jan '26",                 budget_jahr:   5000 },
      SE:  { ytd:    5094, spend:   637, orders:  null, paid_roas:  null, label: "Jan '26",                 budget_jahr:  57300 }
    },

    // 2025 Gesamtjahr (Amazon Außenumsatz)
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
    ytd_umsatz:    604580,   // YTD Umsatz bis 25.02.2026
    ytd_bestellungen: 13275, // Bestellungen YTD
    aov:            45.54,   // Ø Bestellwert
    aov_ziel:       49.15,
    cr:              2.83,   // Conversion Rate %
    cr_ziel:         2.81,
    tages_schnitt:  10796    // Ø Umsatz/Tag
  }
};
