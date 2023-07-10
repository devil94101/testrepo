const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();

  // Rest of your Puppeteer code

  await browser.close();
})();
