# CLAUDE.md — De Vrijstelling

Repo: statisch blog (HTML/CSS, geen build) voor de afschaffing van de Nederlandse erf- en schenkbelasting.
Live via Vercel — elke push naar `main` deployt automatisch.

## Structuur

- `index.html` — homepage: manifest-blok, rekenformulier (Model DV-2026), artikelarchief
- `stijl.css` — gedeelde stylesheet (blauwe-envelop-design; niet wijzigen zonder expliciete opdracht)
- `artikelen/het-manifest.html` — HET TOONANKER. Elk nieuw stuk moet familie zijn van dit manifest: zelfde temperatuur, zelfde precisie. Herlees het vóór elk artikel
- `artikelen/dag-NNN-slug.html` — één bestand per artikel; `dag-004` is het template voor opiniestukken, `dag-001` t/m `003` voor instrumentele stukken

## Wekelijkse publicatieflow

Bij "schrijf het artikel van deze week" (met of zonder onderwerp):

1. Herlees `het-manifest.html`
2. Kies het volgende onderwerp uit de onderwerpenbank (of het opgegeven onderwerp); streep af in dit bestand
3. **Verifieer elk cijfer, elk arrest, elke buitenlandse regeling met web search vóór publicatie.** Vrijstellingen en tarieven wijzigen jaarlijks; buitenlandse stelsels ook. Niets uit het geheugen publiceren
4. Schrijf als `artikelen/dag-NNN-slug.html` (doornummeren), voeg het blok bovenaan "Het archief" in `index.html` toe
5. Doorloop de kwaliteitspoort hieronder — publiceer NIET als een stap faalt
6. Commit ("Dag 005: ...") en push naar `main`

## Voor wie wij schrijven

Niet voor de overtuigden — die klikken toch wel. Elk stuk richt zich op de twijfelende lezer die nu denkt "erfbelasting is misschien wel eerlijk": de PvdA-stemmer met een eigen huis, de dertiger die 'vermogensongelijkheid' een echt probleem vindt, de fiscalist die beroepsmatig meeleest om fouten te vinden. Overtuig je alle drie in één stuk, dan overtuig je iedereen. Concreet betekent dit:

- **Begin bij een gedeelde waarde, nooit bij de conclusie.** Rechtvaardigheid, gezin, rouw, hard werken — iets waar ook de tegenstander ja op zegt. De lezer moet drie alinea's lang instemmend knikken vóór hij doorheeft waar het stuk heen gaat
- **Geef eerst toe wat waar is.** Vermogensongelijkheid bestaat; erfenissen spelen daarin een rol. Wie dat wegwuift, verliest de twijfelaar in alinea één. Het manifest doet dit voor ("wij zullen het sterker vertellen dan zijn eigen aanhangers doen") — dat is de standaard
- **Steelman vóór de sloop.** Citeer het tegenargument op zijn allersterkst. Sloop daarna. Een stroman overtuigt alleen wie al overtuigd was
- **Eén scène per stuk.** Elk artikel opent met één concreet, menselijk beeld (de lege la, de envelop tussen de kaarten, de notarisrekening). Abstracties overtuigen niemand; beelden blijven plakken
- **Eindig met handelingsperspectief.** Wat kan de lezer doen, vinden, delen of nalezen. Een stuk dat eindigt in machteloosheid wordt niet gedeeld

## Redactionele lijn

Kern: afschaffing. Niet verhogen, niet hervormen — afschaffen. De dragende argumenten (roteren, niet stapelen):

- **Verantwoordelijkheidsverdeling**: herverdeling is een opdracht aan de staat uit de algemene middelen — geen boete op families die werkten, spaarden en over elke euro al afdroegen. Vaste formule: "een rechtvaardige samenleving tilt de onderkant op; zij verbouwt geen rouw tot opbrengst"
- **Viervoudige heffing**: verdiend (loonheffing) → aangehouden (box 3) → besteed/bezeten (btw, overdrachtsbelasting, OZB) → nagelaten (erfbelasting). Altijd de hele keten benoemen
- **"Geef dan eerder" is een val**: de jaarlijkse vrijstelling is een fractie van een aanbetaling, de jubelton is afgeschaft, alles daarboven wordt direct belast. NOOIT schrijven "schenken kan niet" (feitelijk onjuist, breekt alles) — wél: "dezelfde wet die de vroege overdracht blokkeert, voert de late overdracht op als rechtvaardiging"
- **"Kinderen erven zich rijk" is een krantenkop**: gemiddelde nalatenschap naast gemiddelde koopwoning, studieschuld, achtergebleven lonen. De erfenis repareert hooguit wat deze generatie aan opbouw misliep
- **De middenklasse betaalt de jacht op de top**: grote vermogens plannen en vertrekken; ambtelijke studies rekenen zélf op blijvend vermijdingsgedrag; elke aanslag landt bij het gezin zonder adviseur
- **Rechtsvergelijking als bewijs**: Oostenrijk (VfGH 2007 ongrondwettig, vervallen 2008 — hét precedent), Zweden (afgeschaft 2004 dóór sociaaldemocraten — gebruik die angel), Noorwegen (2014), Zwitserland (directe lijn in vrijwel alle kantons vrij). Per artikel de actuele stand verifiëren

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

- Werkwoorden dragen de zin; bijvoeglijke naamwoorden zijn op rantsoen (max. één per zin, liefst nul)
- Geen abstractie zonder beeld binnen twee zinnen. "De heffing is onrechtvaardig" is verboden totdat de lezer de envelop tussen de condoleancekaarten heeft gezien
- Ritme wisselt: na drie lange zinnen een korte. De korte draagt de klap
- Herhaling alleen als stijlfiguur (het "wij geloven"-credo), nooit uit gemakzucht
- Verboden: AI-clichés ("in dit artikel", "kortom", "het is belangrijk om", "laten we eerlijk zijn"), managementtaal, tegeltjeswijsheden, uitroeptekens, retorische vragen in series
- Elk stuk eindigt constructief of strijdbaar — nooit verongelijkt

## Kwaliteitspoort (verplicht vóór elke commit)

1. **De tegenstander-pass**: herlees het hele stuk als de scherpste fiscalist die vóór erfbelasting is. Elke zin die hij kan afbranden met "feitelijk onjuist" of "stroman" wordt herschreven. Geen uitzonderingen
2. **De twijfelaar-test**: wijs de drie alinea's aan waarmee de twijfelende PvdA-stemmer het nog eens is. Zijn die er niet, dan preekt het stuk voor eigen parochie — herschrijven
3. **De voorlees-test**: elke zin die je niet in één adem hardop kunt zeggen, wordt gesplitst
4. **De schrap-pass**: laatste versie is 15–20% korter dan de eerste. Wat sneuvelt: bijwoorden, tweede voorbeelden, alles wat de lezer al begreep
5. **Cijfercheck**: elk bedrag, jaartal en arrest is deze sessie via web search geverifieerd, niet vorige week
