const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser'
  })

  // Rest of your Puppeteer code

  await browser.close();
})();
