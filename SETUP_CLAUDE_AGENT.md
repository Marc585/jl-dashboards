# Setup: J&L Dashboard-Update als scheduled Agent in der Claude App

> Stand: 20.05.2026 | Ziel: täglicher automatischer Update-Lauf via Claude App auf deinem Mac, mit Zugriff auf OneDrive lokal (kein MCP nötig, weil OneDrive im Filesystem gemountet ist)

## Was du bekommst

- **Slash-Command** `/jl:update-dashboards` in der Claude App — manuell triggern
- **Skill** `jl-dashboard-update` — wird automatisch invoked wenn du "aktualisiere die dashboards" sagst
- **launchd-Cron** — täglich morgens 8 Uhr automatischer Lauf, schreibt Log
- Komplette Update-Logik bleibt im Projekt (`master_update.py` + `agents/`) — Skill ist nur Orchestrator

---

## Schritt 1: Skill-File ist schon angelegt ✅

Bereits erstellt:
```
~/.claude/skills/jl-dashboard-update/SKILL.md
```

Sobald du Claude in einer beliebigen Session öffnest, kennt sie den Skill. Trigger-Phrasen:
- „aktualisiere die dashboards"
- „weekly flash"
- „dashboard update"

## Schritt 2: Slash-Command ist schon angelegt ✅

Bereits erstellt:
```
~/.claude/commands/jl/update-dashboards.md
```

In jeder Claude-Session kannst du jetzt eingeben:
```
/jl:update-dashboards
```
→ triggert den Skill direkt.

## Schritt 3: launchd-Cron einmalig aktivieren

Die Plist-Datei liegt im Projekt:
```
agents/com.marc.jl-dashboard-update.plist
```

Sie nach `~/Library/LaunchAgents/` symlinken und laden:

```bash
ln -sf "/Users/mboehle/Library/Mobile Documents/com~apple~CloudDocs/AI Projects/Work/Jean&Len/CEO Dashboard & Reporting/agents/com.marc.jl-dashboard-update.plist" \
       ~/Library/LaunchAgents/com.marc.jl-dashboard-update.plist

launchctl load ~/Library/LaunchAgents/com.marc.jl-dashboard-update.plist
```

Verifizieren:
```bash
launchctl list | grep jl-dashboard
```
Sollte eine Zeile mit `com.marc.jl-dashboard-update` zeigen.

Logs landen ab dem ersten Lauf hier:
- `~/Library/Logs/jl-dashboard-update.log` (Output)
- `~/Library/Logs/jl-dashboard-update.error.log` (Errors)

## Schritt 4: Voraussetzungen einmalig sicherstellen

```bash
# Python-Pakete
pip3 install openpyxl playwright
playwright install chromium

# Node für JS-Syntax-Check (falls nicht da)
which node || brew install node

# Git-Push-Auth zu Marc585/jl-dashboards
cd /tmp/jl-dashboards && git remote -v   # SSH oder HTTPS+PAT?
```

OneDrive muss aktiv synced sein:
```bash
ls "/Users/mboehle/Library/CloudStorage/OneDrive-TOX-Dübel-TechnikGmbH/Marketing & E-Commerce - Umsatztracker bzw. Budget Allocation/Budget Allocation J&L 2026/" | head -3
```
→ sollte die 8 Budget-Allocation-Excel zeigen.

## Schritt 5: Test-Lauf

```bash
cd "/Users/mboehle/Library/Mobile Documents/com~apple~CloudDocs/AI Projects/Work/Jean&Len/CEO Dashboard & Reporting"
python3 master_update.py
```

Erwartete Ausgabe (gekürzt):
```
Phase 1 — Daten parallel abrufen
  ✅ agent_amazon.py
  ✅ agent_webshop.py
  ✅ agent_marketing.py
  ✅ agent_oos.py
Phase 2 — Merge & data.js generieren  ✅
Phase 3 — Dashboards parallel aktualisieren  ✅
Phase 3b — Dashboard-Integrität prüfen  ✅
Phase 3c — Browser-Smoke-Test  ✅
Phase 4 — Git Commit & Push  ✅
```

Wenn das grün durchläuft, ist der Cron-Job auch grün.

## Schritt 6: Cron einmal testen (ohne 24h warten)

```bash
launchctl start com.marc.jl-dashboard-update
tail -f ~/Library/Logs/jl-dashboard-update.log
```

## Was du wo abändern musst, falls etwas anders ist

| Was | Wo | Wie |
|-----|----|----|
| Schedule-Uhrzeit | `agents/com.marc.jl-dashboard-update.plist` | `<key>Hour</key><integer>8</integer>` ändern → `launchctl unload` + `load` |
| Wöchentlich statt täglich | dito | `StartCalendarInterval` durch `<key>Weekday</key><integer>1</integer>` (1=Montag) ergänzen |
| Skill umbenennen | `~/.claude/skills/jl-dashboard-update/SKILL.md` | `name:` in Frontmatter ändern + Ordner umbenennen |
| Trigger-Phrasen erweitern | `~/.claude/skills/jl-dashboard-update/SKILL.md` | `description:` und „Standard-Trigger-Phrase"-Sektion |

## Troubleshooting

**Cron läuft nicht:**
```bash
launchctl list | grep jl-dashboard    # geladen?
launchctl print gui/$(id -u)/com.marc.jl-dashboard-update | head -30
```

**OneDrive-Pfad nicht gefunden:**
- `ls ~/Library/CloudStorage/` checken — sync-Name kann sich ändern
- `agents/config.py:13` hat schon Fallback-Logik (`first_existing_path`)

**Push schlägt fehl:**
- SSH-Key in den Cron-Kontext: Plist hat schon `LANG` und `PATH`, falls nötig auch `SSH_AUTH_SOCK` ergänzen
- Alternativ HTTPS+PAT in `~/.netrc`

**Schedule pausieren:**
```bash
launchctl unload ~/Library/LaunchAgents/com.marc.jl-dashboard-update.plist
```

**Schedule wieder aktivieren:**
```bash
launchctl load ~/Library/LaunchAgents/com.marc.jl-dashboard-update.plist
```

## Wenn du das ganze Projekt umziehen willst (iCloud → ~/code-mirror/)

Aktuell liegt das Projekt unter `~/Library/Mobile Documents/com~apple~CloudDocs/AI Projects/Work/Jean&Len/CEO Dashboard & Reporting/`. Das ist iCloud — kann zu Sync-Konflikten führen, besonders bei automatischen Cron-Läufen.

Empfehlung mittelfristig: nach `~/code-mirror/work/jl-dashboards-updater/` umziehen. Dann müsstest du Pfade in 3 Files anpassen:
1. `~/.claude/skills/jl-dashboard-update/SKILL.md` (Projektpfad-Block)
2. `agents/com.marc.jl-dashboard-update.plist` (`WorkingDirectory` + `ProgramArguments`)
3. `~/.claude/commands/jl/update-dashboards.md` (falls Pfad referenziert)

Empfohlene Reihenfolge für den Umzug:
```bash
mkdir -p ~/code-mirror/work
cp -R "/Users/mboehle/Library/Mobile Documents/com~apple~CloudDocs/AI Projects/Work/Jean&Len/CEO Dashboard & Reporting" ~/code-mirror/work/jl-dashboards-updater
# dann Pfade in den 3 Files updaten
# launchctl unload + load
```

Aber: keine Eile. Solange iCloud-Sync nicht hakt, läuft das Setup auch von dort.
