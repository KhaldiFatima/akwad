import puppeteer from 'puppeteer';

let browserInstance = null;
const getBrowserInstance = async () => {
  if (browserInstance === null) {
    browserInstance = await puppeteer.launch({ headless: true });
  }
  return browserInstance;
};

export default getBrowserInstance;
