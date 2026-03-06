/**
 * JL_DATA – Single Source of Truth für alle J&L Dashboards
 *
 * WICHTIG: Diese Datei wird automatisch durch update_dashboards.py generiert.
 *          NICHT manuell bearbeiten – Script ausführen!
 *
 * Letztes Update: 04.03.2026 | KW8
 */
window.JL_DATA = {

  // ─── DATENSTAND ───────────────────────────────────────────────
  stand: {
    amazon_weekly:  "KW8 (15.02 - 21.02)",   // DE/UK/USA KW8 – wöchentlich
    amazon_monthly: "ES/FR/IT/NL/SE: Januar 2026",  // monatlich
    webshop:        "05.03.2026",
    dashboard:      "06.03.2026"
  },

  // ─── AMAZON ADS 2026 ──────────────────────────────────────────
  amazon: {
    ytd_gesamt:       1508279,   // Amazon Außenumsatz YTD alle 8 Märkte (€)
    ytd_gesamt_label: "Amazon Außenumsatz YTD 2026 – alle 8 Märkte",
    ads_budget_jahr:   567200,   // Ads Jahresbudget 2026 (alle Märkte, SE in EUR)
    q1_plan:          2147000,   // Q1 Umsatzziel
    jahresprognose:  11300000,   // Jahresprognose Umsatz
    data_weeks:             8,   // Wochen mit Daten (DE/UK/USA KW8)
    ad_spend_ytd:       61017,   // Ads Spend YTD DE+UK+USA (€)
    paid_roas_ytd:       11.2,   // Paid ROAS YTD DE+UK
    interner_roas:       31.9,   // ERP EU / Spend DE+UK
    ytd_vorjahr:       904514,   // 2025 KW1-KW8 alle Märkte (UK noch nicht aktiv)

    // Einzelne Märkte – Amazon Außenumsatz (Paid + Organic)
    laender: {
      DE:  { ytd: 1272967, spend: 34798, orders: 87577, paid_roas: 14.46, label: "KW1–KW8 YTD '26",           budget_jahr: 320000 },
      UK:  { ytd: 34839, spend: 12436, orders: 2858, paid_roas: 2.11, label: "KW1–KW8 YTD '26",           budget_jahr: 100000 },
      USA: { ytd: 22541, spend: 13783, orders: 799, paid_roas: 0.71, label: "KW1–KW8 YTD '26 (USD→EUR)", budget_jahr: null   },
      IT:  { ytd: 68985, spend:  5479, orders:  null, paid_roas:  null, label: "Jan '26",                 budget_jahr:  50400 },
      ES:  { ytd: 48565, spend:  3475, orders:  null, paid_roas:  null, label: "Jan '26",                 budget_jahr:  46800 },
      FR:  { ytd: 44011, spend:  3215, orders:  null, paid_roas:  null, label: "Jan '26",                 budget_jahr:  39800 },
      NL:  { ytd: 11277, spend:    600, orders:  null, paid_roas:  null, label: "Jan '26",                 budget_jahr:   5000 },
      SE:  { ytd:  5094, spend:    637, orders:  null, paid_roas:  null, label: "Jan '26",                 budget_jahr:   5200 }  // 57.300 SEK ≈ 5.200€
    },

    // 2025 Gesamtjahr (Amazon Außenumsatz) – fix, nicht automatisch
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
    ytd_umsatz:    693088,   // YTD Umsatz
    ytd_bestellungen: 15267, // Bestellungen YTD
    aov:            45.40,   // Ø Bestellwert
    aov_ziel:       49.15,
    cr:              2.77,   // Conversion Rate %
    cr_ziel:         2.81,
    tages_schnitt:  10830    // Ø Umsatz/Tag
  },

  // ─── WEBSHOP 2025 MONATSDATEN ─────────────────────────────────
  // Quelle: Jessis Reporting → Tab "monthly_quarterly" → Zeile "Shopumsatz 2025"
  // Wird für dynamischen YoY-Vergleich genutzt (Dashboards berechnen korrekte Vergleichsperiode)
  webshop_2025_monatlich: {
    jan: 269902, feb: 214736, mar: 232992, apr: 244272,
    mai: 266408, jun: 280430, jul: 260592, aug: 475167,
    sep: 489122, okt: 553222, nov: 526741, dez: 431505
    // Gesamt 2025: 4.245.088€
  }
};
