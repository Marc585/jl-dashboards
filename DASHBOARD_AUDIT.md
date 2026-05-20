# Dashboard-Audit: Hardcoded vs. Agentisch

> **Letztes Audit:** 20.05.2026, KW21 (Marc Böhle + Claude)
> **Zweck:** Dokumentation welche Zahlen in den 3 Live-Dashboards automatisch über das Agenten-System aktualisiert werden und welche händisch gepflegt sind. Soll Codex (oder anderen Reviewern) als Challenge-Grundlage dienen.

---

## 1. Kontext

3 Live-Dashboards auf https://marc585.github.io/jl-dashboards/:
- `amazon.html` (Amazon Vendor Performance, 8 Märkte)
- `webshop.html` (Shopware Webshop)
- `ceo.html` (CEO-Übersicht: Webshop + Amazon kombiniert)

Update läuft über `python3 master_update.py`. Datenquellen: Excel-Files in OneDrive (`OneDrive-TOX-Dübel-TechnikGmbH/`), gelesen READ-ONLY. Live-Dashboard liegt im Repo `Marc585/jl-dashboards` (`/tmp/jl-dashboards` lokal).

**Bei Audit am 20.05.2026 entdeckte größere Bugs (alle behoben):**
1. OneDrive-Pfad-Bruch: `OneDrive-TOX-Dübel-Technik` → `OneDrive-TOX-Dübel-TechnikGmbH` (Files-Sync neu eingebunden). Vorher hat Script Nullwerte geschrieben und gepusht. `config.py` Zeilen 12-22 jetzt korrigiert.
2. Banner-Werte im Amazon-Dashboard (Außenumsatz, ROAS, Spend) waren **vollständig hardcoded** mit Werten von Anfang März (1.842.526 €). Jetzt durch IDs + update_amazon.py-Erweiterung agentisch.
3. CEO-KPI-Index-Bug: Inline-JS in ceo_dashboard.html überschrieb `kpis[2]` mit Amazon-Daten, aber kpis[2] ist OOS-Quote — Amazon liegt bei Index 4. Jetzt dynamisch via `findIndex(k => k.name.startsWith('Amazon'))`.
4. UK/USA-Label-Bug: Alle Märkte bekamen "KW1-KWN" mit N = max-KW (DE), egal wie viele KW sie selbst hatten. Jetzt pro Markt aus `len(w_spend)` berechnet.
5. Diverse Stand-Datümer in HTML-Headern/Footern: jetzt regex-basiert in update_amazon.py.

---

## 2. Agenten-Architektur (Single Source of Truth: `data.js`)

```
master_update.py
  └─ Phase 1 (parallel): agent_amazon.py, agent_webshop.py, agent_marketing.py, agent_oos.py
       └─ schreiben /tmp/jl_agents/*.json
  └─ Phase 2: merge_and_generate.py
       └─ schreibt Dashboards/data.js (window.JL_DATA)
       └─ schreibt /tmp/jl_agents/raw_combined.json (KW-Buckets + Meta-Tagesdaten)
  └─ Phase 3 (parallel): update_amazon.py, update_webshop.py, update_ceo.py, update_index.py
       └─ patchen HTML-Dateien
  └─ Phase 4: git_push.py
       └─ kopiert + committed + pusht zu GitHub Pages
```

Wichtig: `data.js` wird IMMER neu generiert. Aber HTML-Dateien werden NUR PATCHED (regex), bestehende Inhalte bleiben sonst stehen. Daraus folgt: jeder hardcoded HTML-Wert, der nicht von einem update_*.py per regex/ID gepflegt wird, **wird beim Update nicht aktualisiert** und ist Stale-Risk.

---

## 3. Status pro Zahl/Element

### Amazon-Dashboard

| Element | Zeile | Status | Update-Mechanismus |
|---------|-------|--------|---------------------|
| Banner Hero-Umsatz | 526 | ✅ AGENTISCH | `id="banner-hero-umsatz"` → update_amazon.py setzt aus `_meta.ytd_gesamt` |
| Banner Sub-Umsatz | 536 | ✅ AGENTISCH | `id="banner-umsatz-value"` |
| Banner Paid ROAS | 532 | ✅ AGENTISCH | `id="banner-paid-roas"` aus `_meta.paid_roas_ytd` |
| Banner Ad-Spend | 540 | ✅ AGENTISCH | `id="banner-ad-spend"` aus `_meta.spend_ytd` |
| Banner Interner ROAS | 544 | ✅ AGENTISCH | `id="banner-interner-roas"` aus `_meta.interner_roas` |
| Karten DE/UK/USA/IT/ES/FR/NL/SE YTD | 574-637 | ✅ AGENTISCH | `data-2026` Attribute via `update_card()` in update_amazon.py |
| Karten-Label pro Markt | 574-637 | ✅ AGENTISCH | seit 20.05.: pro-Markt-KW aus `len(w_spend)` |
| Chart-Arrays (deSpend2026, deSales2026, deRoas2026 etc.) | 1488-1597 | ✅ AGENTISCH | `replace_array()` in update_amazon.py |
| Header-Stand "Stand: TT.MM. \| KWxx" | 507, 1819 | ✅ AGENTISCH | regex in update_amazon.py |
| Footer "Datenstand: TT.MM. (KWxx) \| Nächstes Update" | 1409 | ✅ AGENTISCH | regex in update_amazon.py |
| **DE April Performance Card** (kompletter Monat) | 697-711 | ⚠️ HARDCODED-STALE | händisch am 20.05. mit April-Werten gefüllt; ändert sich nicht bei nächstem Update |
| **DE Budget vs. Ist Tabelle (Jan-Mai)** | 715-770 | ⚠️ HARDCODED-STALE | händisch am 20.05. gefüllt; Mai läuft, müsste sich wöchentlich ändern |
| **UK Budget vs. Ist Tabelle (Jan-Apr)** | 810-856 | ⚠️ HARDCODED-STALE | händisch am 20.05. gefüllt; April-Daten in UK-Excel sind aktuell, Mai-Daten kommen mit Verzug |
| **UK Top-Artikel-Sektion** (33 Artikel × KW6-8/Jan/Feb) | 860-870, 962+ | ⚠️ HARDCODED-STALE | kompletter Snapshot KW8, nie aktualisiert. Daten in UK-Excel Tab "Umsatz auf Artikelbasis" |
| Jahresbudgets pro Markt (320k DE, 100k UK, …) | 579-637 | ✅ HARDCODED-PLAN | Planwerte, ändert sich nur bei Jahresplanung |
| Vorjahres-Werte 2025 pro Markt | 577-635 | ✅ HISTORISCH | YoY-Vergleich, festgeschrieben |
| Umsatzprognose 2026 (11,3 Mio) | 549 | ✅ HARDCODED-PLAN | Jahresprognose, manuell pflegen wenn sich Planung ändert |
| Ads Jahresbudget 2026 (619.300 €) | 529 | ✅ HARDCODED-PLAN | Planwert |
| Jahresverhandlung-Einsparung 290k | 519 | ✅ HARDCODED-COMPLETED | abgeschlossener Fakt |
| Aktuelles-Box ("Diese Woche wichtig") | 511-521 | ✅ HARDCODED-EDITORIAL | bewusst manuell gepflegt pro Update-Zyklus |

### Webshop-Dashboard

| Element | Zeile | Status | Update-Mechanismus |
|---------|-------|--------|---------------------|
| `raw[]` Array (KW-Webshop+Marketing) | ~1000+ | ✅ AGENTISCH | `replace_js_array()` in update_webshop.py aus raw_combined.json |
| `metaRaw[]` Array (Meta-Daily) | ~1000+ | ✅ AGENTISCH | dito |
| `oosIst` Variable | 594 | ✅ AGENTISCH (TBD-Modus) | regex matched `\d+[.,]\d+`, daher matcht NICHT bei `null` → bleibt auf TBD bis Marc Wert setzt |
| Header `Datenstand: TT.MM. \| KWxx` | 127 | ✅ AGENTISCH | regex in update_webshop.py |
| Footer Datenstand + Nächstes Update | 404-405 | ✅ AGENTISCH | regex in update_webshop.py |
| Aktuelles-Box | 152-174 | ✅ HARDCODED-EDITORIAL | manuell pro Woche; aktuell leer (20.05.) |
| "Diese Woche wichtig" Liste | 177-184 | ✅ HARDCODED-EDITORIAL | manuell |
| **Forecast vs. Ist (Z.253ff)** | 247-260+ | ⚠️ HARDCODED-STALE-BY-DESIGN | hat eingebauten Warning-Banner: "Daten 28.02. STATISCH — manuell aktualisieren". Bewusst kein Auto-Update bis Datenquelle definiert |
| Q1-Ziel-Werte (AOV 49,15 / CR 2,81%) | 188-200 | ✅ HARDCODED-PLAN | Planwerte |

### CEO-Dashboard

| Element | Zeile | Status | Update-Mechanismus |
|---------|-------|--------|---------------------|
| `datenstand`-Objekt | 328-333 | ✅ AGENTISCH (via JS) | Inline-JS Z.943-947 setzt aus `D.stand.*` (data.js) bei Page-Load — **aber** das Objekt-Literal selbst ist hardcoded und wird angezeigt wenn JS nicht läuft |
| Header `header-meta` Stand + KW | 181 | ✅ AGENTISCH (via JS) | Inline-JS Z.949-964 berechnet KW aus Datum, setzt textContent on-load |
| `kpis[0]` Webshop YTD (`ist: 1532559`) | 339 | ⚠️ HARDCODED-STALE | händisch am 20.05. aktualisiert; update_ceo.py setzt diesen Wert NICHT automatisch |
| `kpis[1]` Webshop AOV (`ist: 45.99`) | 347 | ⚠️ HARDCODED-STALE | dito |
| `kpis[2]` OOS-Quote (`ist: null`) | 354 | ✅ AGENTISCH (TBD-safe) | update_ceo.py regex `\d+\.?\d*` matched NICHT bei `null` → TBD bleibt bis Marc setzt |
| `kpis[3]` Webshop CR (`ist: 2.9`) | 363 | ⚠️ HARDCODED-STALE | händisch aktualisiert |
| `kpis[4]` Amazon Q1 (`ist: 2671943`) | 370 | ⚠️ HARDCODED-STALE | Q1-Final-Wert; Inline-JS Z.967-977 überschreibt NUR wenn `am.data_weeks < 13` (Q1 läuft), sonst stabil |
| `amazonLaender[]` (Ländertabelle in CEO) | ~520+ | ✅ AGENTISCH | update_ceo.py + Inline-JS Z.991-1010 setzen aus `D.amazon.laender` |
| Inline-JS `updateFromData()` (Z.937+) | 937-1014 | ✅ AGENTISCH | lädt aus `window.JL_DATA` und überschreibt diverse Felder client-seitig |
| Rocks/Steine (`steineWebshopQ1`, `steineAmazonQ1` etc.) | 382-400+ | ✅ HARDCODED-EDITORIAL | Q1-Status-Snapshots, manuell pro Quartal |
| Aktuelles-Box (JoyBuy, ROPT, Customer Journey) | 192-244 | ✅ HARDCODED-EDITORIAL | manuell pro Woche |
| "Diese Woche wichtig" Grid | 248+ | ✅ HARDCODED-EDITORIAL | manuell |
| Q1-Ziel 836.924 € + 11,3 Mio Jahresprognose | überall | ✅ HARDCODED-PLAN | Planwerte |

---

## 4. Bekannte Datenquellen-Lücken (außerhalb Code)

Status 20.05.2026:

| Markt | Verfügbar | Lücke | Wer pflegt |
|-------|-----------|-------|------------|
| DE | KW1-KW19 | KW20 (heute KW21) | Karina Strauch (Datei zuletzt 20.05. 10:27) |
| UK | KW1-KW17 | KW18+ fehlt | – (Datei 19.05. 15:18) |
| USA | KW1-KW18 | KW19+ fehlt | – (Datei 19.05.) |
| IT | Jan-Apr | Mai läuft (KW18+) | Angela Scialdone |
| ES | Jan-Apr | Mai läuft | Angela Scialdone |
| FR | Jan-Apr ✅ | NEU am 20.05.: April nachgetragen (151.747 € statt 116.016 €) | Angela Scialdone |
| NL | Jan-Mär | **April fehlt seit 7 Wochen** (Datei 11.05., nicht angefasst) | Angela Scialdone |
| SE | Jan-Apr | Mai läuft | Angela Scialdone |
| Webshop | bis 19.05.2026 | tagesaktuell | Jessi |
| OOS | TBD | rekla.jeanlen.de Login-pflichtig, kein Headless-Scraping möglich | Marc/Jessi manuell |

---

## 5. Offene Refaktor-TODOs für Codex/Reviewer

### A. Dashboard-spezifische TODOs

1. **DE/UK Monatstabellen agentisch machen** (Aufwand ~30 Min)
   - `agent_amazon.py` erweitern: pro Markt `Monthly Performance` Tab lesen, JSON-Block `monthly: {jan: {spend, sales, paid_roas, total_roas}, feb: …}` schreiben
   - `update_amazon.py` erweitern: `<tbody id="de-budget-vs-ist-rows">` und `<tbody id="uk-budget-vs-ist-rows">` per Template neu rendern aus JSON
   - Plus DE-April-Performance-Card (Z.697-711): auf "aktuellster kompletter Monat" automatisieren
   - Mai-Teilmonat aus Weekly-Performance summieren

2. **CEO `kpis[]` Webshop-Felder agentisch** (Aufwand ~10 Min)
   - `update_ceo.py` erweitern: regex-Patterns für `kpis[0..3].ist` aus `data.js` setzen
   - Vorsicht: `kpis[2].ist = null` (TBD) NICHT überschreiben wenn OOS-Wert Fallback ist
   - Vorsicht: `kpis[4].ist` (Amazon Q1) bleibt stabil weil Q1 abgeschlossen — keine Auto-Update

3. **UK Top-Artikel-Sektion** (Aufwand ~1 h, niedrige Prio)
   - UK-Excel hat Tab "Umsatz auf Artikelbasis" mit per-ASIN-Performance
   - Müsste in agent_amazon.py gelesen werden, in update_amazon.py das `ukArtData[]`-Array ersetzt werden

4. **Webshop Forecast-vs-Ist Block** (bewusst pending laut Inline-Banner)
   - Datenquelle definieren (Jessis Excel? Power BI? Manueller Upload?)
   - Update-Mechanismus klären
   - Bis dahin: Warning-Banner bleibt

### B. Robustness-TODOs

5. **OneDrive-Pfad-Resilienz** in `config.py`
   - Aktueller Code hat hardcoded Pfad. Wenn OneDrive sich neu mounted, Bruch.
   - Vorschlag: Try-Liste mit Glob-Fallback, oder Symlink im Home

6. **OOS-Quote Auto-Fetch**
   - rekla.jeanlen.de braucht WordPress-Login. Optionen:
     - Playwright mit gespeicherten Credentials (Risiko: Credentials im Code)
     - Cookie-basiert (manuell einmalig Cookies setzen)
     - Marc setzt Wert manuell — aktueller Stand (TBD-Modus)

7. **Plausibilitäts-Check erweitern** in `merge_and_generate.py`
   - Aktuell: prüft Webshop Ø/Tag, Meta ROAS, Spend-Höhe, AOV
   - Fehlt: prüft ob Anzahl KW pro Markt sich erwartbar verhält (Warnung wenn UK -2 KW gegen DE), ob FR/NL plötzlich auf 0 droppen

### C. Code-Quality-TODOs

8. **Update-Skripte sind regex-lastig** — fragil bei kleinen HTML-Änderungen.
   - Langfristig: HTML-Templates (Jinja2) statt In-Place-Patching
   - Mittelfristig: jedes update_*.py loggt was es geändert/nicht geändert hat (teilweise schon der Fall)

9. **Tests fehlen komplett**
   - Mindestens: smoke-test für jeden Agent („liest Excel, schreibt JSON")
   - merge_and_generate.py: snapshot test gegen Beispieldaten

---

## 6. Wie Codex challengen sollte

Mögliche Schwächen meiner Analyse, die Codex prüfen sollte:

- [ ] Habe ich wirklich JEDE Zahl klassifiziert? grep über alle `&euro;`, `€`, `\d+,\d+x` in den 3 HTML-Files und prüfen ob jeder Treffer in Sektion 3 erwähnt ist.
- [ ] Sind die Update-Mechanismen wirklich so wie ich sie beschreibe? Konkret: in `update_amazon.py` die regex-Patterns einmal trockenlaufen lassen gegen das aktuelle HTML.
- [ ] Habe ich Datenstand-Pflichten korrekt zugeordnet? Bsp: `merge_and_generate.py` setzt für FR/NL den Label aus `agent_amazon.py`-Output — ist das robust bei Edge-Cases (Markt ohne Daten)?
- [ ] Q1-Final-Wert 2.671.943 €: stimmt das wirklich für KW1-KW13? Re-verify aus den Excels.
- [ ] OOS-TBD-Logik: bricht das Rendering wenn `kpis[2].ist === null`? Mein Code in `renderKPIs()` hat den TBD-Pfad, aber unter welchen Edge-Cases könnte das brechen?

---

## 7. Git-History-Pointer

Relevante Commits in `Marc585/jl-dashboards`:
- 20.05.2026 — Banner-Werte agentisch + UK/USA Label-Fix + Monatstabellen mit echten April-Werten gefüllt
- 19.05.2026 — Audit-Tag 1: OneDrive-Pfad-Korrektur, OOS auf TBD, Aktuelles-Box JoyBuy
- 27.04.2026 — Letzter "normaler" Update-Lauf vor dem Audit

---

## 8. Verbleibendes Sicherheits-Netz

Heuristiken die Marc bei jedem Update durchgehen sollte:
1. `master_update.py` Output: Plausibilitäts-Check muss "bestanden" stehen
2. Live-Dashboard nach Push: Stand-Datümer alle gleich? KW-Label überall konsistent?
3. FR/NL/Sondermärkte: Label vergleichen mit Erwartung (sollte mit Excel-Stand übereinstimmen)
4. Banner-Werte (Amazon): plausible Größenordnung? (3,9 Mio jetzt — bei 1,8 Mio = Bug zurück)
5. CEO-KPIs: sollten zu data.js passen — wenn nicht, ist `kpis[]`-Array veraltet (siehe TODO A.2)
