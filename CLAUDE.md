# CLAUDE.md — De Vrijstelling

Repo: statisch blog (HTML/CSS, geen build) voor de afschaffing van de Nederlandse erf- en schenkbelasting.
Live via Vercel — elke push naar `main` deployt automatisch.

## Structuur

- `index.html` — homepage: aanklacht-blok, rekenformulier (Model DV-2026), artikelarchief
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
- [ ] Dag 006 — De viervoudige heffing: volg één euro van loonstrook tot sterfbed
- [ ] Dag 007 — Zweden schafte af onder links: waarom zelfs herverdelers haar lieten vallen
- [ ] Dag 008 — "Geef dan eerder": hoe dezelfde wet het eigen tegenargument saboteert
- [ ] Dag 009 — Zwitserland: welvarend, stabiel, kinderen erven belastingvrij
- [ ] Dag 010 — De gemiddelde erfenis vs. de gemiddelde koopwoning: rekensom van een generatie
- [ ] Dag 011 — Wie betaalt er werkelijk: vermijding aan de top, aanslagen in het midden
- [ ] Dag 012 — De tweetrapsmaking (instrumenteel stuk, ter afwisseling)

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
- Interne links: elk artikel linkt naar het manifest, naar minstens één verwant artikel, en waar relevant naar het rekenformulier (`index.html#rekenformulier`). Ankerteksten beschrijvend, nooit "klik hier"
- Slug kort en zoekwoord-dragend: `dag-006-viervoudige-heffing.html`, niet `dag-006-artikel.html`

### GEO-verpakking (voor AI-antwoordmachines)
- **Direct antwoord bovenaan**: direct na de openingsscène één alinea van 40–60 woorden die de kernvraag van het zoekwoord zelfstandig en citeerbaar beantwoordt (dit is wat AI-antwoordmachines en AI Overviews overnemen)
- **FAQ-blok onderaan**: drie à vijf echte zoekvragen ("Hoeveel erfbelasting betaalt een kind in 2026?") met antwoorden van 2–4 zinnen, onder `<h2>Veelgestelde vragen</h2>` + h3 per vraag
- **JSON-LD**: elk artikel krijgt `Article`-schema (headline, datePublished, dateModified, author "De Vrijstelling") en bij een FAQ-blok ook `FAQPage`-schema in `<script type="application/ld+json">`
- **Citeerbaarheid**: elke sectie bevat minstens één zin die zelfstandig, zonder context, klopt en quotebaar is — met cijfer en jaartal ("In 2026 betaalt een kleinkind tot 36% erfbelasting"). AI-machines citeren zinnen, geen sfeer
- **Cijfers met bron in de tekst** ("volgens het CPB", "blijkens VfGH G 54/06") — bronloze claims worden door antwoordmachines genegeerd

### Domein
Productiedomein: `https://www.devrijstelling.nl` (Vercel-project "belasting", team Elke's projects). Gebruik dit voor canonical tags, `og:url` en `sitemap.xml` — niet het `*.vercel.app`-preview-domein.

## Kwaliteitspoort (verplicht vóór elke commit)

1. **De tegenstander-pass**: herlees het hele stuk als de scherpste fiscalist die vóór erfbelasting is. Elke zin die hij kan afbranden met "feitelijk onjuist" of "stroman" wordt herschreven
2. **De twijfelaar-test**: wijs de drie alinea's aan waarmee de twijfelende PvdA-stemmer het nog eens is. Zijn die er niet: herschrijven
3. **De voorlees-test**: elke zin die je niet in één adem hardop kunt zeggen, wordt gesplitst
4. **De schrap-pass**: laatste versie is 15–20% korter dan de eerste
5. **Cijfercheck**: elk bedrag, jaartal en arrest is déze sessie via web search geverifieerd
