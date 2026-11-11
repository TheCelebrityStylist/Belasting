// Regressietest voor de rekentool (erfbelasting-berekenen.html).
//
// Legt de drie casussen uit Het Standaardwerk, hoofdstuk 4 vast: drie identieke
// nalatenschappen van € 3.000.000 / € 3.000.000 / € 550.000, met een effectieve
// druk van respectievelijk 1,7% (BOR), 19,3% (stenen en spaargeld, geen BOR) en
// 12,3% (WOZ € 480.000 + spaargeld € 70.000, 2 kinderen). Verandert de rekenlogica
// ooit zodat een van deze drie uitkomsten verschuift, dan faalt deze test — dat is
// het doel: het Standaardwerk citeert deze cijfers letterlijk, dus de rekentool
// mag er nooit stilzwijgend van afwijken.
//
// Draaien: node tests/rekentool.spec.js
// (vereist Playwright; als het pakket niet lokaal geïnstalleerd is:
//  NODE_PATH="$(npm root -g)" node tests/rekentool.spec.js)

const assert = require('assert');
const path = require('path');
const { spawn } = require('child_process');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const PORT = 8934;
const BASE = `http://localhost:${PORT}`;

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
].filter(Boolean);

const SCENARIOS = [
  {
    naam: 'Nalatenschap één — € 3.000.000 ondernemingsvermogen (BOR), 1 kind',
    params: { modus: 'een', woz: 0, vastgoed: 0, spaar: 0, beleg: 0, bor: 3000000, schuld: 0, kids: 1, partner: 0, rente: 6, tussen: 10, anders: 'geen', jaren: 0, eenmalig: 0, papier: 0 },
    verwachtTotaal: '€ 51.712',
    verwachtDruk: '1,7 %',
  },
  {
    naam: 'Nalatenschap twee — € 3.000.000 stenen en spaargeld, geen BOR, 1 kind',
    params: { modus: 'een', woz: 0, vastgoed: 0, spaar: 3000000, beleg: 0, bor: 0, schuld: 0, kids: 1, partner: 0, rente: 6, tussen: 10, anders: 'geen', jaren: 0, eenmalig: 0, papier: 0 },
    verwachtTotaal: '€ 578.887',
    verwachtDruk: '19,3 %',
  },
  {
    naam: 'Nalatenschap drie — WOZ € 480.000 + spaargeld € 70.000, 2 kinderen, geen partner',
    params: { modus: 'een', woz: 480000, vastgoed: 0, spaar: 70000, beleg: 0, bor: 0, schuld: 0, kids: 2, partner: 0, rente: 6, tussen: 10, anders: 'geen', jaren: 0, eenmalig: 0, papier: 0 },
    verwachtTotaal: '€ 67.774',
    verwachtDruk: '12,3 %',
  },
];

function startServer() {
  return new Promise((resolve, reject) => {
    const srv = spawn('python3', ['-m', 'http.server', String(PORT), '--directory', ROOT], { stdio: 'ignore' });
    srv.on('error', reject);
    // geef de server een moment om te binden
    setTimeout(() => resolve(srv), 700);
  });
}

async function launchChromium() {
  let lastErr;
  for (const executablePath of [...CHROME_CANDIDATES, undefined]) {
    try {
      return await chromium.launch(executablePath ? { executablePath } : {});
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

async function run() {
  const server = await startServer();
  let browser;
  let failures = 0;
  try {
    browser = await launchChromium();
    for (const scen of SCENARIOS) {
      const qs = new URLSearchParams(Object.fromEntries(Object.entries(scen.params).map(([k, v]) => [k, String(v)])));
      const url = `${BASE}/erfbelasting-berekenen.html?${qs.toString()}`;
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle' });

      const totaal = await page.locator('.blok.fisc:has(.lbl:text("Totale erfbelasting")) .cijfer').innerText();
      const druk = await page.locator('.blok.fisc:has(.lbl:text("Effectieve druk")) .cijfer').innerText();

      try {
        assert.strictEqual(totaal, scen.verwachtTotaal, `${scen.naam}: totaal was "${totaal}", verwacht "${scen.verwachtTotaal}"`);
        assert.strictEqual(druk, scen.verwachtDruk, `${scen.naam}: druk was "${druk}", verwacht "${scen.verwachtDruk}"`);
        console.log(`OK   ${scen.naam} — ${totaal}, ${druk}`);
      } catch (e) {
        failures++;
        console.error(`FAIL ${scen.naam}`);
        console.error(`     ${e.message}`);
      }

      // querystring moet de invoer weerspiegelen na live URL-sync (history.replaceState)
      const urlAfter = new URL(page.url());
      try {
        assert.strictEqual(urlAfter.searchParams.get('bor'), String(scen.params.bor), `${scen.naam}: URL-sync gaf verkeerde bor-waarde terug`);
        console.log(`OK   ${scen.naam} — live URL-sync bevat ingevulde waarden`);
      } catch (e) {
        failures++;
        console.error(`FAIL ${scen.naam} (URL-sync)`);
        console.error(`     ${e.message}`);
      }

      await page.close();
    }

    // validatiepad: negatieve invoer geeft een nette melding, geen NaN
    {
      const page = await browser.newPage();
      await page.goto(`${BASE}/erfbelasting-berekenen.html`, { waitUntil: 'networkidle' });
      await page.fill('#spaar', '-5000');
      await page.dispatchEvent('#spaar', 'input');
      const melding = await page.locator('#foutmelding').innerText();
      const uitslagText = await page.locator('#uitslag').innerText();
      try {
        assert.ok(melding.length > 0, 'verwacht een foutmelding bij negatieve invoer');
        assert.ok(!uitslagText.includes('NaN'), 'uitslag mag nooit "NaN" tonen');
        console.log(`OK   negatieve invoer toont een foutmelding, geen NaN`);
      } catch (e) {
        failures++;
        console.error('FAIL validatie negatieve invoer');
        console.error(`     ${e.message}`);
      }
      await page.close();
    }
  } finally {
    if (browser) await browser.close();
    server.kill();
  }

  if (failures) {
    console.error(`\n${failures} regressie(s) gefaald.`);
    process.exit(1);
  } else {
    console.log('\nAlle regressietests geslaagd.');
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
