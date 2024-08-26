import lighthouse from 'lighthouse';
import { URL } from 'url';
import getCategoriezedAudits from '../../utils/getCategorizedAudits.js';

async function runLighthouse(browser, url) {
  const { port } = new URL(browser.wsEndpoint());
  const onlyAudits = [
    'is-on-https',
    'viewport',
    'largest-contentful-paint',
    'first-meaningful-paint',
    'first-contentful-paint',
    'speed-index',
    'screenshot-thumbnails',
    'total-blocking-time',
    'max-potential-fid',
    'cumulative-layout-shift',
    'errors-in-console',
    'server-response-time',
    'interactive',
    'redirects',
    'image-aspect-ratio',
    'image-size-responsive',
    'deprecations',
    'bootup-time',
    'uses-rel-preconnect',
    'network-requests',
    'long-tasks',
    'unsized-images',
    'csp-xss',
    'script-treemap-data',
    'accesskeys',
    'button-name',
    'document-title',
    'empty-heading',
    'heading-order',
    'identical-links-same-purpose',
    'video-caption',
    'use-landmarks',
    'total-byte-weight',
    'unminified-css',
    'unminified-javascript',
    'unused-css-rules',
    'unused-javascript',
    'modern-image-formats',
    'uses-responsive-images',
    'duplicated-javascript',
    'js-libraries',
    'meta-description',
    'http-status-code',
    'link-text',
    'crawlable-anchors',
    'is-crawlable',
    'robots-txt',
    'canonical'
  ];

  const options = {
    extends: 'lighthouse:default',
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    onlyAudits,
    port: port,
    locale: 'ar' // Set locale to Arabic
  };

  // Run Lighthouse
  const { lhr: report } = await lighthouse(url, options);

  return getCategoriezedAudits(report, onlyAudits);
}

export default runLighthouse;
