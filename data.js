/**
 * JL_DATA – Single Source of Truth für alle J&L Dashboards
 * 
 * WICHTIG: Nur diese Datei ändern, wenn Zahlen aktualisiert werden.
 * amazon.html und ceo.html lesen automatisch aus dieser Datei.
 * 
 * Letztes Update: 25.02.2026 | KW8
 */
window.JL_DATA = {

  // ─── DATENSTAND ───────────────────────────────────────────────
  stand: {
    amazon_weekly:  "KW6 (07.02.2026)",   // DE / UK / USA – wöchentlich
    amazon_monthly: "Jan 2026",            // IT / ES / FR / NL / SE – monatlich (14. des Monats)
    webshop:        "12.02.2026",          // Jessis Reporting Excel
    dashboard:      "25.02.2026"
  },

  // ─── AMAZON ADS 2026 ──────────────────────────────────────────
  amazon: {
    ytd_gesamt:       1238604,   // Amazon Außenumsatz YTD alle 8 Märkte (€)
    ytd_gesamt_label: "Amazon Außenumsatz YTD 2026 – alle 8 Märkte",
    ads_budget_jahr:   619300,   // Ads Jahresbudget 2026 (alle Märkte)
    q1_plan:          2147000,   // Q1 Umsatzziel
    jahresprognose:  11300000,   // Jahresprognose Umsatz
    data_weeks:             6,   // Wochen mit Daten (KW1–6)
    ad_spend_ytd:       50261,   // Ads Spend YTD alle wöchentlichen Märkte (€)
    paid_roas_ytd:       11.2,   // Paid ROAS YTD EU
    interner_roas:       31.5,   // ERP Umsatz / Spend DE+UK

    // Einzelne Märkte – Amazon Außenumsatz (Paid + Organic)
    laender: {
      DE:  { ytd: 1016010, spend: 29522, orders: 71942, paid_roas: 14.0,  label: "KW1–6 YTD '26",      budget_jahr: 320000 },
      UK:  { ytd:   27154, spend:  9334, orders:  2209, paid_roas:  2.31, label: "KW1–6 YTD '26",      budget_jahr: 100000 },
      USA: { ytd:   17508, spend: 10949, orders:   625, paid_roas:  0.72, label: "KW1–6 YTD '26 (USD→EUR)", budget_jahr: null   },
      IT:  { ytd:   68985, spend:  5479, orders:  null, paid_roas:  null, label: "Feb '26",             budget_jahr:  50400 },
      ES:  { ytd:   48565, spend:  3475, orders:  null, paid_roas:  null, label: "Jan '26",             budget_jahr:  46800 },
      FR:  { ytd:   44011, spend:  3215, orders:  null, paid_roas:  null, label: "Jan '26",             budget_jahr:  39800 },
      NL:  { ytd:   11277, spend:   600, orders:  null, paid_roas:  null, label: "Jan '26",             budget_jahr:   5000 },
      SE:  { ytd:    5094, spend:   637, orders:  null, paid_roas:  null, label: "Jan '26",             budget_jahr:  57300 }
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
    ytd_umsatz:    460337,   // YTD Umsatz bis 12.02.2026
    ytd_bestellungen: 10043, // Bestellungen YTD
    aov:            45.03,   // Ø Bestellwert
    aov_ziel:       49.15,
    cr:              2.79,   // Conversion Rate %
    cr_ziel:         2.81,
    tages_schnitt:  10745    // Ø Umsatz/Tag
  }
};
