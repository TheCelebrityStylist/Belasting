# De Vrijstelling

Dagelijkse tegenlezing van de Successiewet 1956 — elke dag één wettige manier om minder erf- en schenkbelasting te betalen.

## Structuur

- `index.html` — homepage met rekenformulier (Model DV-2026) en artikelarchief
- `stijl.css` — één gedeelde stylesheet (blauwe-envelop-design)
- `artikelen/dag-NNN-slug.html` — één bestand per artikel

## Nieuw artikel toevoegen (dagelijkse flow)

1. Kopieer een bestaand artikel in `artikelen/` als template
2. Pas eyebrow, titel, meta, en inhoud aan
3. Voeg bovenaan "Het archief" in `index.html` een nieuw `<a class="dag">`-blok toe
4. Commit + push → Vercel deployt automatisch

## Deploy

Statische site, geen build. Vercel-instellingen: Framework Preset "Other", geen build command, output directory root.

## Bedragen

Alle cijfers: belastingjaar 2026 (bron Belastingdienst). Jaarlijks indexeren:
- Jaarlijkse vrijstelling kind: € 6.908 / kleinkind & overig: € 2.769
- Eenmalig verhoogd (18–40): € 33.129 / dure studie: € 69.009
- Erfbelastingvrijstelling: partner € 828.035 / kind & kleinkind € 26.230
- Tariefgrens: € 158.669 (kind 10%/20%, kleinkind 18%/36%, overig 30%/40%)
- BOR: € 1.543.500 à 100%, daarboven 75%
