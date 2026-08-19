# CLAUDE.md — De Vrijstelling

Repo: statisch blog (HTML/CSS, geen build) voor de afschaffing van de Nederlandse erf- en schenkbelasting.
Live via Vercel — elke push naar `main` deployt automatisch.

## Structuur

- `index.html` — homepage: aanklacht-blok, snel-rekenformulier (`#rekenformulier`), artikelarchief
- `erfbelasting-berekenen.html` — de volledige rekentool (Model DV-2026): per erfgenaam, wettelijke verdeling met renteclausule over beide overlijdens, WOZ, BOR, schenkplan, marginale druk, deelbare link
- `og/` — social-share-afbeeldingen (1200×630): `og-default.png`, `og-manifest.png`, `og-standaardwerk.png`, `og-rekentool.png`
- `stijl.css` — gedeelde stylesheet (blauwe-envelop-design; niet wijzigen zonder expliciete opdracht)
- `artikelen/het-manifest.html` — HET TOONANKER. Elk nieuw stuk moet familie zijn van dit manifest: zelfde temperatuur, zelfde precisie. Herlees het vóór elk artikel
- `artikelen/dag-NNN-slug.html` — één bestand per artikel; `dag-004` en `dag-005` zijn de templates voor opiniestukken, `dag-001` t/m `003` voor instrumentele stukken

## Wekelijkse publicatieflow

Gebruik het commando `/weekblog` (zie `.claude/commands/weekblog.md`) of doorloop bij "schrijf het artikel van deze week":

1. Herlees `het-manifest.html`
2. Zoekwoordonderzoek volgens de SEO/GEO-standaard hieronder
3. Kies het onderwerp (opgegeven, of volgende uit de onderwerpenbank); streep af in dit bestand
4. **Verifieer elk cijfer, elk arrest, elke buitenlandse regeling met web search vóór publicatie.** Niets uit het geheugen publiceren
5. Schrijf als `artikelen/dag-NNN-[zoekwoord-slug].html`, voeg het blok bovenaan "Het archief" in `index.html` toe, werk `sitemap.xml` bij
6. Doorloop de kwaliteitspoort — publiceer NIET als een stap faalt
7. Commit ("Dag NNN: ...") en push naar `main`

## Voor wie wij schrijven

Niet voor de overtuigden — die klikken toch wel. Elk stuk richt zich op de twijfelende lezer die nu denkt "erfbelasting is misschien wel eerlijk": de PvdA-stemmer met een eigen huis, de dertiger die 'vermogensongelijkheid' een echt probleem vindt, de fiscalist die beroepsmatig meeleest om fouten te vinden. Overtuig je alle drie in één stuk, dan overtuig je iedereen. Concreet:

- **Begin bij een gedeelde waarde, nooit bij de conclusie.** Rechtvaardigheid, gezin, rouw, hard werken — iets waar ook de tegenstander ja op zegt. De lezer moet drie alinea's lang instemmend knikken vóór hij doorheeft waar het stuk heen gaat
- **Geef eerst toe wat waar is.** Vermogensongelijkheid bestaat; erfenissen spelen daarin een rol. Wie dat wegwuift, verliest de twijfelaar in alinea één
- **Steelman vóór de sloop.** Citeer het tegenargument op zijn allersterkst. Sloop daarna
- **Eén scène per stuk.** Elk artikel opent met één concreet, menselijk beeld. Abstracties overtuigen niemand; beelden blijven plakken
- **Eindig met handelingsperspectief.** Wat kan de lezer doen, vinden, delen of nalezen

## Redactionele lijn

Kern: afschaffing. Niet verhogen, niet hervormen — afschaffen. De dragende argumenten (roteren, niet stapelen):

- **Verantwoordelijkheidsverdeling**: herverdeling is een opdracht aan de staat uit de algemene middelen — geen boete op families die werkten, spaarden en over elke euro al afdroegen. Vaste formule: "een rechtvaardige samenleving tilt de onderkant op; zij verbouwt geen rouw tot opbrengst"
- **Viervoudige heffing**: verdiend (loonheffing) → aangehouden (box 3) → besteed/bezeten (btw, overdrachtsbelasting, OZB) → nagelaten (erfbelasting). Altijd de hele keten benoemen
- **"Geef dan eerder" is een val**: de jaarlijkse vrijstelling is een fractie van een aanbetaling, de jubelton is afgeschaft, alles daarboven wordt direct belast. NOOIT schrijven "schenken kan niet" (feitelijk onjuist) — wél: "dezelfde wet die de vroege overdracht blokkeert, voert de late overdracht op als rechtvaardiging"
- **"Kinderen erven zich rijk" is een krantenkop**: gemiddelde nalatenschap naast gemiddelde koopwoning, studieschuld, achtergebleven lonen
- **De middenklasse betaalt de jacht op de top**: grote vermogens plannen en vertrekken; ambtelijke studies rekenen zélf op blijvend vermijdingsgedrag
- **Rechtsvergelijking als bewijs**: Oostenrijk (VfGH G 54/06, 7-3-2007; vervallen 1-8-2008 — hét precedent), Zweden (afgeschaft 2004 dóór sociaaldemocraten), Noorwegen (2014), Zwitserland (directe lijn in vrijwel alle kantons vrij). Per artikel de actuele stand verifiëren

## Onderwerpenbank

- [x] Dag 005 — Oostenrijk (gepubliceerd: dag-005-oostenrijk.html)
- [x] Dag 006 — De viervoudige heffing (gepubliceerd: dag-006-viervoudige-heffing.html)
- [x] Dag 007 — Zweden (gepubliceerd: dag-007-zweden-erfbelasting-afgeschaft.html)
- [x] Dag 008 — "Geef dan eerder" (gepubliceerd: dag-008-belastingvrij-schenken-de-val.html)
- [x] Dag 009 — Zwitserland (gepubliceerd: dag-009-zwitserland-erfbelasting.html)
- [x] Dag 010 — De gemiddelde erfenis vs. de gemiddelde koopwoning (gepubliceerd: dag-010-gemiddelde-erfenis-nederland.html)
- [x] Dag 011 — Wie betaalt er werkelijk (gepubliceerd: dag-011-erfbelasting-ontwijken-rijken.html)
- [x] Dag 012 — Erfbelasting 2026: drie wijzigingen, drie bekentenissen (actualiteit, gepubliceerd: dag-012-erfbelasting-2026-bekentenis.html)
- [x] Dag 013 — De tweetrapsmaking (gepubliceerd: dag-013-tweetrapsmaking.html)

Instrumentele stukken (dag 001–003-stijl) blijven de afwisseling: zij bewijzen de expertise waarop de opinie drijft.

## Schrijfstandaard

Nederlands. Juridisch precies, psychologisch gelaagd, korte stoten. Koude woede: elk boos woord draagt een kloppend feit.

- Werkwoorden dragen de zin; bijvoeglijke naamwoorden op rantsoen (max. één per zin, liefst nul)
- Geen abstractie zonder beeld binnen twee zinnen
- Ritme wisselt: na drie lange zinnen een korte. De korte draagt de klap
- Herhaling alleen als stijlfiguur (het "wij geloven"-credo), nooit uit gemakzucht
- Verboden: AI-clichés ("in dit artikel", "kortom", "het is belangrijk om", "laten we eerlijk zijn"), managementtaal, tegeltjeswijsheden, uitroeptekens, retorische vragen in series
- Elk stuk eindigt constructief of strijdbaar — nooit verongelijkt

## SEO/GEO-standaard (geldt voor elk weekstuk)

Het weekstuk wordt gevonden via twee kanalen: zoekmachines (SEO) en AI-antwoordmachines (GEO). Beide worden bediend — zonder de stem te verkopen. De regel: zoekwoorden bepalen de **ingang** van het stuk (onderwerp, kop, structuur), het manifest bepaalt de **ziel**.

### Stap 0 — zoekwoordonderzoek (vóór het schrijven)
- Zoek via web search wat Nederlanders werkelijk intikken rond het onderwerp ("erfbelasting 2026", "erfbelasting berekenen huis", "schenkvrijstelling kind", "erfbelasting ontwijken", "hoeveel erfbelasting betaal ik" + varianten en "mensen vragen ook"-vragen)
- Kies één primair zoekwoord en twee à drie secundaire. Het primaire zoekwoord moet matchen met de zoekintentie: wie "erfbelasting ontwijken" zoekt, wil instrumenten; wie "erfbelasting oneerlijk" zoekt, wil de opinie
- Eén artikel = één primair zoekwoord. Nooit twee artikelen op hetzelfde zoekwoord (kannibalisatie)

### SEO-verpakking (checklist per artikel)
- Primair zoekwoord in: `<title>` (max. 60 tekens), `<h1>`, meta description (150–160 tekens, met zoekwoord én een klikreden), URL-slug, en de eerste alinea
- H2-koppen dragen secundaire zoekwoorden waar dat natuurlijk kan — nooit geforceerd
- Canonical tag en `og:title`/`og:description` in elke pagina
- Interne links: elk artikel linkt naar het manifest, naar minstens één verwant artikel, en waar relevant naar de rekentool (`../erfbelasting-berekenen.html`). Ankerteksten beschrijvend, nooit "klik hier"
- Slug kort en zoekwoord-dragend: `dag-006-viervoudige-heffing.html`, niet `dag-006-artikel.html`

### GEO-verpakking (voor AI-antwoordmachines)
- **Direct antwoord bovenaan**: direct na de openingsscène één alinea van 40–60 woorden die de kernvraag van het zoekwoord zelfstandig en citeerbaar beantwoordt (dit is wat AI-antwoordmachines en AI Overviews overnemen)
- **FAQ-blok onderaan**: drie à vijf echte zoekvragen ("Hoeveel erfbelasting betaalt een kind in 2026?") met antwoorden van 2–4 zinnen, onder `<h2>Veelgestelde vragen</h2>` + h3 per vraag
- **JSON-LD**: elk artikel krijgt `Article`-schema (headline, datePublished, dateModified, author "De Vrijstelling") en bij een FAQ-blok ook `FAQPage`-schema in `<script type="application/ld+json">`
- **Citeerbaarheid**: elke sectie bevat minstens één zin die zelfstandig, zonder context, klopt en quotebaar is — met cijfer en jaartal ("In 2026 betaalt een kleinkind tot 36% erfbelasting"). AI-machines citeren zinnen, geen sfeer
- **Cijfers met bron in de tekst** ("volgens het CPB", "blijkens VfGH G 54/06") — bronloze claims worden door antwoordmachines genegeerd

### Domein
Productiedomein: `https://devrijstelling.nl` (Vercel-project "belasting", team Elke's projects; `www.devrijstelling.nl` staat er ook op maar de site canonicaliseert naar de kale apex). Gebruik dit voor canonical tags, `og:url` en `sitemap.xml` — niet het `*.vercel.app`-preview-domein.

## Cijferbank 2026 (geverifieerd)

Laatst geverifieerd: 11-08-2026, via web search tegen meerdere onafhankelijke bronnen. Gebruik déze cijfers in nieuwe stukken en rekentools. Bij twijfel, of wanneer een oudere upload afwijkt: eerst herverifiëren via web search, dan pas schrijven — nooit uit het geheugen of uit een eerdere upload overnemen, ook niet als die upload zelf een "correctieblad" claimt te zijn.

**Vrijstellingen erfbelasting 2026**
- Partner: € 828.035
- Kind en kleinkind: € 26.230
- Kind met beperking: € 78.671
- Ouders (samen, niet per ouder): € 62.110
- Overige verkrijgers: € 2.769

**Tarieven erfbelasting 2026** (schijfgrens € 158.669)
- Partner en kind: 10% tot de schijfgrens, 20% daarboven
- Kleinkind: 18% / 36%
- Overige verkrijgers: 30% / 40%

**BOR (bedrijfsopvolgingsregeling) 2026**
- 100% vrijgesteld tot € 1.543.500 ondernemingsvermogen per verkrijging; 75% vrijgesteld over het meerdere

**Vrijstellingen schenkbelasting 2026**
- Jaarlijks, kind: € 6.908 — jaarlijks, kleinkind/overig: € 2.769
- Eenmalig verhoogd (kind 18–40 jaar, vrij besteedbaar): € 33.129
- Eenmalig verhoogd (kind 18–40 jaar, aantoonbaar dure studie ≥ € 20.000/jaar): € 69.009 — vervangt de jaarlijkse vrijstelling, geen stapeling

**Aangiftetermijn**
- Overlijdens vanaf 1-1-2026: 20 maanden na overlijden (ook de belastingrente start pas dan)
- Overlijdens vóór 1-1-2026: 8 maanden (oud regime — alléén gebruiken bij expliciet historische of vergelijkende verwijzingen, nooit als geldend recht voor een huidig geval)

**180-dagenregel (art. 12 SW)** — **let op, dit is de meest hardnekkige terugkerende fout in deze repo:**
- De regel zélf blijft bestaan: schenkingen binnen 180 dagen vóór overlijden tellen nog altijd mee bij de nalatenschap
- Wat wijzigde per 1-1-2026: zulke schenkingen vallen voortaan uitsluitend onder de erfbelasting (met haar eigen, doorgaans ruimere vrijstellingen) in plaats van eerst schenkbelasting plus een verrekening met erfbelasting bij overlijden. Er is geen aparte schenkbelastingaangifte meer nodig
- **Schrijf nooit** "de 180-dagenregel is afgeschaft" of "schenkingen vallen voortaan uitsluitend onder de schenkbelasting" — beide zijn feitelijk onjuist (het is precies andersom: uitsluitend onder de erfbelasting) en zijn al twee keer per abuis aangeleverd en gecorrigeerd. Zie Terugkerende-fouten-lijst

**Waardering eigen woning**
- WOZ-waarde (jaar van overlijden of het jaar erna, laagste mag worden gekozen) — niet de verwachte verkoopprijs; verhuurd vastgoed kan lager via de leegwaarderatio

**Biologische kinderen zonder juridische familieband**
- Sinds 1-1-2026 gelijkgesteld met erkende kinderen (kindvrijstelling, kindtarief) op grond van HR 6-9-2024 (art. 8 en 14 EVRM); ouderschap moet worden aangetoond, bijvoorbeeld via DNA-onderzoek

## Terugkerende-fouten-lijst

1. **De 8-maanden/180-dagen-fout** (al minstens tweemaal gemaakt, in Het Standaardwerk-uploads én in rekentool-caveats): "acht maanden" als aangiftetermijn en/of "de 180-dagenregel is afgeschaft" gepubliceerd als geldend recht. De juiste stand staat in de Cijferbank hierboven. Controleer dit bij élke upload opnieuw — ook wanneer een eerdere sessie het al correct had, want geregenereerde uploads draaien de correctie stelselmatig terug
2. **Meta descriptions**: 150–160 tekens, niet meer en niet minder; geen onverifieerbare superlatieven ("de meest complete...", "de beste... van Nederland") zonder bron — precisie, geen marketingtaal

## Kwaliteitspoort (verplicht vóór elke commit)

1. **De tegenstander-pass**: herlees het hele stuk als de scherpste fiscalist die vóór erfbelasting is. Elke zin die hij kan afbranden met "feitelijk onjuist" of "stroman" wordt herschreven
2. **De twijfelaar-test**: wijs de drie alinea's aan waarmee de twijfelende PvdA-stemmer het nog eens is. Zijn die er niet: herschrijven
3. **De voorlees-test**: elke zin die je niet in één adem hardop kunt zeggen, wordt gesplitst
4. **De schrap-pass**: laatste versie is 15–20% korter dan de eerste
5. **Cijfercheck**: elk bedrag, jaartal en arrest is déze sessie via web search geverifieerd — of, voor de constanten in de Cijferbank hierboven, tegen die bank gecontroleerd

### Adviseur-pass (verplicht bij rekentools en instrumentele stukken)

Van toepassing op elk stuk met planningsimplicaties: rekentools, en instrumentele artikelen over renteclausules, BOR, schenkingsroutes of vergelijkbare constructies.

- Elke bewering met planningsimplicaties wordt geformuleerd als afweging, met de bepalende variabelen expliciet benoemd (aantal jaren tot een volgend overlijden, omvang van de nalatenschap, welke vrijstelling van toepassing is) — nooit als vuistregel en nooit als "gratis winst"
- Indicatoren en samenvattende cijfers tonen het werkelijke verschil, inclusief een mogelijk negatief teken — nooit geklemd op nul om een ongunstige uitkomst te verbergen
- Voorbeeld uit de praktijk: de 6%-renteclausule bij de wettelijke verdeling verkleint de tweede nalatenschap, maar mist bij 6% ook de gunstige waarderingskorting bij het eerste overlijden — het saldo is een afweging die van de omstandigheden afhangt, geen automatische besparing (zie `erfbelasting-berekenen.html`)
- Sluit met een concrete verwijzing naar professioneel advies wanneer de uitkomst een individuele beslissing raakt (testament, renteclausule, BOR-structurering)
