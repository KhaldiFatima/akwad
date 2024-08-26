import axe from 'axe-core';
import getWcagLevelSummary from '../../utils/getWcagLevelSummary.js';
import getWcagLevelResults from '../../utils/getWcagLevelResults.js';

async function runAxeCore(browser, url) {
  const page = await browser.newPage();

  await page.goto(url);

  // Inject axe-core into the page
  await page.addScriptTag({ content: axe.source });

  // Run axe-core
  const result = await page.evaluate(async () => {
    const options = {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag2aaa', 'best-practice']
      }
    };

    return await axe.run(document, options);
  });

  // Filter results for wcag2a
  const wcag2aResults = getWcagLevelResults(result, 'wcag2a');

  // Filter results for wcag2aa
  const wcag2aaResults = getWcagLevelResults(result, 'wcag2aa');

  // Filter results for wcag2aaa
  const wcag2aaaResults = getWcagLevelResults(result, 'wcag2aaa');

  // Calculate compliance percentage for wcag2a
  const complianceSummaryWcag2a = getWcagLevelSummary(wcag2aResults);

  // Calculate compliance percentage for wcag2aa
  const complianceSummaryWcag2aa = getWcagLevelSummary(wcag2aaResults);

  // Calculate compliance percentage for wcag2aa
  const complianceSummaryWcag2aaa = getWcagLevelSummary(wcag2aaaResults);

  return {
    wcag2a: complianceSummaryWcag2a,
    wcag2aa: complianceSummaryWcag2aa,
    wcag2aaa: complianceSummaryWcag2aaa
  };
}

export default runAxeCore;
