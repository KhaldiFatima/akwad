import getBrowserInstance from '../utils/getBrowserInstance.js';
import runAxeCore from './auditors/axeCore.js';
import runLighthouse from './auditors/lighthouse.js';
import runSeoAnalyzer from './auditors/seoAnalyzer.js';

const runAuditSummary = async (url) => {
  const browser = await getBrowserInstance();
  const [report, accessibilityReport, seoIssues] = await Promise.all([
    runLighthouse(browser, url),
    runAxeCore(browser, url),
    runSeoAnalyzer(url)
  ]);

  report.seo = { ...report.seo, seoIssues };
  report.accessibility = { ...report.accessibility, ...accessibilityReport };
  return report;
};

export default runAuditSummary;
