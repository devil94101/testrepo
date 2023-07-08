const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome-stable', // Path to the Chrome executable
    headless: true // Set to false if you want to see the browser UI
  });

  // Rest of your Puppeteer code

  await browser.close();
})();
