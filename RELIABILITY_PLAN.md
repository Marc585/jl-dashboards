# Verlässlichkeits-Plan: Warum Dashboards immer wieder brechen — und was dagegen hilft

> Stand: 20.05.2026 | Marc Böhle, Claude, Codex

## Warum es bisher unzuverlässig ist

1. **Regex-basiertes In-Place-Patching** statt Templates. Beispiel-Schaden 20.05.: Die `setCardsView()`-Funktion in `amazon_dashboard.html:1822` hatte mitten in einer String-Zuweisung Garbage stehen (`'…'[data-kpi="spend"]')`). Das war Resultat eines vorherigen fehlerhaften `re.sub`-Aufrufs in irgendeinem update_*.py. Effekt: gesamter `<script>`-Block bricht beim Parsen → Filter klickt nicht, Charts bleiben leer, Summe falsch.

2. **Wert-Validator prüft Konsistenz, aber nicht Syntax.** Codex' `validate_dashboards.py` checkte „Amazon Banner Hero-Umsatz = 3.892.346 €" → grün. Aber JS-Syntax-Fehler wurde nicht gesehen, weil die Banner-Werte selbst noch korrekt im DOM lagen.

3. **Hardcoded Initialwerte als Tarnung.** Die Karten zeigten DE = 7.727.122 € (2025-Wert) als Initial-HTML. Wenn JS dann nicht läuft (Bug oben), bleibt der 2025-Wert für den User sichtbar — sieht aus wie ein Daten-Bug, ist aber ein Render-Bug.

4. **Mehrere unabhängige Update-Skripte** patchen dieselbe Datei. Jedes regex-Match ist eine Race Condition — wenn ein Update den DOM verschiebt, matcht ein anderes nicht mehr richtig.

5. **Keine Smoke-Tests** im Update-Lauf. Wir hatten nie verifiziert, dass die HTML im Browser tatsächlich rendert.

## Schon umgesetzt (heute)

| Maßnahme | Wo | Wirkung |
|---|---|---|
| **Phase-Abbruch bei Fehler** in master_update.py | `master_update.py:111+` | Falsche Daten landen nicht mehr im Push (Codex) |
| **Wert-Konsistenz-Validator** vor Push | `agents/validate_dashboards.py` | Werte in HTML müssen zu JSON passen (Codex) |
| **OneDrive-Pfad-Resilienz** | `agents/config.py:13` | Pfad-Bruch erkennt sich selbst und versucht Fallback (Codex) |
| **Email-Daten-Bug** | `agents/merge_and_generate.py:103` | nicht mehr mit null überschrieben (Codex) |
| **OOS-Fallback nicht eingebrannt** | `agents/update_webshop.py:84` | Fallback 3.24 wird nicht als echter Wert geschrieben (Codex) |
| **CEO-KPI Webshop wirklich aus JSON** | `agents/update_ceo.py:71` | YTD/AOV/CR jetzt agentisch (Codex) |
| **Banner-Werte via IDs** | Amazon Dashboard | Hero-Umsatz, ROAS, Spend, Interner ROAS automatisch (heute) |
| **UK/USA Label pro Markt** | `agents/merge_and_generate.py` | jeder Markt zeigt seine echte last-KW (heute) |
| **Garbage-Pattern + JS-Syntax-Check** in Validator | `agents/validate_dashboards.py` | `node --check` über jeden inline `<script>`-Block; greppt nach typischer regex-Müll (heute) |

## Warum das noch nicht reicht

- Der JS-Syntax-Check fängt Schäden ab, die ALLE Browser sehen würden. Aber nicht alles ist Syntax — z.B. wenn ein regex ein wichtiges DOM-Element löscht ohne dass die JS-Syntax bricht, läuft der Code, rendert aber falsch.
- Wir validieren gegen das JSON-Artefakt — wenn das JSON selbst falsch ist (Agent liest falsche Excel-Zelle), erkennt das niemand.
- Keine echte Browser-Validierung. Charts könnten silent leer bleiben, wenn z.B. Chart.js die Daten als leer interpretiert.

## Was noch helfen würde (in Reihenfolge der Wirkung)

### A. Browser-Smoke-Test in Phase 3c
- Playwright/Puppeteer headless öffnet die 3 Dashboards
- Wartet auf `window.JL_DATA`
- Prüft Sichtbarkeit von Chart-Canvases (non-empty)
- Prüft Filter-Klick (klick auf "2025 Gesamt", erwartet DE-Karte ändert sich auf 7.727.122)
- Failt wenn Console-Errors auftreten
- **Aufwand:** ~1 h initial setup, dann grün/rot pro Push
- **Wirkung:** würde 20.05.-Bug zu 100 % gefangen haben

### B. Templates statt regex-Patching
- Jinja2-Template `templates/amazon_dashboard.html` mit `{{ banner_hero }}`, `{% for card in cards %}` etc.
- update_amazon.py rendert Template komplett neu statt Patch
- **Aufwand:** ~4-6 h (großer Refaktor, 3 Templates + alle Update-Skripte)
- **Wirkung:** eliminiert die ganze Klasse "regex zerschießt HTML" für immer

### C. Snapshot-Tests pro Agent
- Jeder agent_*.py hat einen Test mit Fixture-Excel und erwartetem JSON
- Bei jeder Excel-Struktur-Änderung schlägt der Test an
- **Aufwand:** ~2 h
- **Wirkung:** fängt z.B. den UK-Spalten-Bug wenn Jessi das Excel umstrukturiert

### D. Externes Daten-Cross-Check
- Z.B. zweites Skript liest dieselbe Excel und vergleicht Werte
- Oder: Agent vergleicht mit dem PowerBI/Tableau-Wert aus dem letzten Update
- Differenz > 5 % → Warnung
- **Aufwand:** ~1 h
- **Wirkung:** fängt subtile Excel-Pflege-Fehler (z.B. UK Spalte verschoben)

## Empfehlung für sofort

1. ✅ heute: JS-Syntax-Check ist eingebaut — würde 20.05.-Bug gefangen haben
2. Nächster Schritt: **A. Browser-Smoke-Test** (höchster ROI für „verlässlich"). Ein einziges Playwright-Skript mit ~50 Zeilen würde alle bisher gesehenen Bug-Klassen gleichzeitig fangen.
3. Mittelfristig: **B. Templates** wenn Dashboard-Struktur stabilisiert ist (sonst neue Templates jedes Mal)

## Was Marc tun kann

- Nach jedem Push: 10-Sekunden-Check live in Browser, klick auf den Filter "2025/2026", check ob Charts da sind. Wenn was kaputt aussieht: Screenshot in den Chat, dann fixen wir's bevor jemand anders es sieht.
- Bei Verdacht „Dashboard zeigt was komisches": `python3 agents/validate_dashboards.py` lokal ausführen — gibt sofort Hinweis.
