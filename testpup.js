const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium', // Path to the Firefox executable
    headless: true, // Set to false if you want to see the browser UI
    args: ['--no-sandbox'] // Required for running as root user
  });

  // Rest of your Puppeteer code
  
  await browser.close();
})();