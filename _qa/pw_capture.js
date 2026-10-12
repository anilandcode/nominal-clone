
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://127.0.0.1:5191/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  // Get page info
  const info = await page.evaluate(() => {
    const sections = document.querySelectorAll('section');
    const result = [];
    sections.forEach(s => {
      const rect = s.getBoundingClientRect();
      const style = getComputedStyle(s);
      result.push({
        class: s.className,
        top: rect.top + window.scrollY,
        height: rect.height,
        display: style.display,
        visibility: style.visibility,
        opacity: style.opacity
      });
    });
    return {
      sections: result,
      bodyHeight: document.body.scrollHeight,
      sectionsCount: sections.length
    };
  });
  
  console.log(JSON.stringify(info, null, 2));
  
  // Take screenshot at hero level
  await page.screenshot({ path: '/Users/macmini/Projects/nominal-clone/_qa/pw-hero.png' });
  
  // Scroll to how-it-works section
  const hiw = await page.$('.how-it-works');
  if (hiw) {
    await hiw.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/Users/macmini/Projects/nominal-clone/_qa/pw-hiw.png' });
  }
  
  // Scroll to cards section
  const cards = await page.$('.cards');
  if (cards) {
    await cards.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/Users/macmini/Projects/nominal-clone/_qa/pw-cards.png' });
  }
  
  // Scroll to outcome section
  const outcome = await page.$('.outcome');
  if (outcome) {
    await outcome.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: '/Users/macmini/Projects/nominal-clone/_qa/pw-outcome.png' });
  }
  
  await browser.close();
})();
