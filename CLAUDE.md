CLAUDE.md — De Vrijstelling

Repo: statisch blog (HTML/CSS, geen build) tegen de Nederlandse erf- en schenkbelasting. Live via Vercel, gekoppeld aan dit repo — elke push naar `main` deployt automatisch.

## Structuur

* `index.html` — homepage: manifest, rekenformulier (Model DV-2026), artikelarchief
* `stijl.css` — één gedeelde stylesheet (blauwe-envelop-design; wijzig het design niet zonder expliciete opdracht)
* `artikelen/dag-NNN-slug.html` — één bestand per artikel; kopieer de structuur van `dag-004-geen-rechtsgrond.html` als template voor opiniestukken en `dag-001` t/m `dag-003` voor instrumentele stukken

## Wekelijkse publicatieflow

Bij de opdracht "schrijf het artikel van deze week" (met of zonder onderwerp):

1. Kies het volgende onderwerp uit de onderwerpenbank hieronder (of het opgegeven onderwerp), streep het af in dit bestand
2. Verifieer elk cijfer en elke juridische claim met web search vóór publicatie — vrijstellingen en tarieven wijzigen jaarlijks; buitenlandse stelsels wijzigen ook. Nooit een bedrag, arrest of wetsartikel uit het geheugen publiceren
3. Schrijf het artikel als `artikelen/dag-NNN-slug.html` (doornummeren)
4. Voeg het blok toe bovenaan "Het archief" in `index.html` (nieuwste bovenaan)
5. Commit met een inhoudelijke commitmessage ("Dag 005: ...") en push naar `main`

## Redactionele lijn

Kern: de erfbelasting hoort niet verhoogd, niet hervormd, maar afgeschaft. De stukken zijn overwegend publieksopinie met juridische ruggengraat.

De dragende argumenten (uitwerken, niet elke week allemaal herhalen):

* Verantwoordelijkheidsverdeling: herverdeling van arm en rijk is een taak van de overheid uit de algemene middelen — niet iets dat wordt afgedwongen door specifiek families te belasten die zelf hebben gewerkt, gespaard en al belasting betaald over elke verdiende euro
* Geen dubbele maar viervoudige heffing: inkomstenbelasting bij verdienen, box 3 bij aanhouden, btw/overdrachtsbelasting/OZB bij besteden en bezitten, en dan bij overlijden nóg een keer. Benoem de hele keten, niet alleen "dubbel"
* Het "volwassenen erven toch pas"-argument faalt: het antwoord "geef dan eerder" is dichtgetimmerd door dezelfde wet — de jaarlijkse vrijstelling is een fractie van wat een starter nodig heeft, de jubelton is afgeschaft, en alles daarboven wordt direct belast. De staat blokkeert eerst de vroege overdracht en gebruikt dan de late overdracht als argument. LET OP: schrijf dit precies zo — niet "schenken kan niet" (dat is feitelijk onjuist en breekt de geloofwaardigheid), maar "betekenisvol schenken wordt belast"
* "Kinderen erven zich rijk" is een papieren werkelijkheid: zet de gemiddelde erfenis af tegen huizenprijzen, studieschuld en levensonderhoud — de erfenis repareert hooguit een deel van wat deze generatie aan vermogensopbouw is misgelopen
* De middenklasse betaalt de jacht op de top: de werkelijk grote vermogens plannen, structureren en vertrekken desnoods; ambtelijke hervormingsstudies rekenen zélf op blijvend vermijdingsgedrag. Elke verhoging landt bij het gezin met één huis en geen adviseur
* Rechtsvergelijking als bewijsvoering: Oostenrijk (erfbelasting vervallen in 2008 nadat het Verfassungsgerichtshof de heffing in 2007 ongrondwettig oordeelde — hét precedent dat een constitutionele rechter deze belasting kán afkeuren), Zwitserland (kantonaal; directe lijn in vrijwel alle kantons vrijgesteld), Zweden (afgeschaft 2004, onder een sociaaldemocratische regering — gebruik dat), Noorwegen (2014), en de landen die nooit of niet meer heffen. Verifieer per artikel de actuele stand per land

## Onderwerpenbank

* [ ] Dag 005 — Oostenrijk 2007/2008: de erfbelasting die door de constitutionele rechter werd afgekeurd
* [ ] Dag 006 — De viervoudige heffing: volg één euro van loonstrook tot sterfbed
* [ ] Dag 007 — Zwitserland: welvarend, stabiel, en de kinderen erven belastingvrij
* [ ] Dag 008 — "Geef dan eerder": hoe dezelfde wet het eigen tegenargument saboteert
* [ ] Dag 009 — Zweden schafte af onder links: waarom herverdelers de erfbelasting lieten vallen
* [ ] Dag 010 — De gemiddelde erfenis vs. de gemiddelde koopwoning: rekensom van een generatie
* [ ] Dag 011 — Wie betaalt er werkelijk: vermijdingsgedrag aan de top, aanslagen in het midden
* [ ] Dag 012 — De tweetrapsmaking (instrumenteel stuk, ter afwisseling)

Instrumentele stukken (zoals dag 001–003) blijven welkom als afwisseling — de mix houdt lezers vast die niet elke week een opinie willen.

## Toon en stijl

* Nederlands. Juridisch precies, psychologisch gelaagd, korte stoten. Woede is toegestaan, slordigheid niet: elke boze zin moet een kloppend feit dragen
* Verboden: AI-clichés ("in dit artikel", "kortom", "het is belangrijk om"), managementtaal, Nederlandse tegeltjeswijsheden, uitroeptekens als argument
* Elk opiniestuk eindigt constructief (wat wél zou deugen) — een blog dat alleen "nee" zegt wordt genegeerd; een blog met een alternatief wordt geciteerd
* Feitelijke claims over tegenstanders altijd steelmannen vóór het slopen: citeer het argument op zijn sterkst, sloop het dan
* Footer-disclaimer ("geen fiscaal of juridisch advies") in elk artikel behouden
