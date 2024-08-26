import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const SeoAnalyzer = require('seo-analyzer');

async function runSeoAnalyzer(url) {
  const analyzer = new SeoAnalyzer();
  let result;
  await analyzer
    .inputUrls([url])
    .useRule('imgTagWithAltAttributeRule')
    .useRule('titleLengthRule', { min: 10, max: 50 })
    .useRule('aTagWithRelAttributeRule')
    .useRule('metaBaseRule', { list: ['description', 'viewport'] })
    .useRule('canonicalLinkRule')
    .useRule('metaSocialRule', {
      properties: [
        'og:url',
        'og:type',
        'og:site_name',
        'og:title',
        'og:description',
        'og:image',
        'og:image:width',
        'og:image:height',
        'twitter:card',
        'twitter:text:title',
        'twitter:description',
        'twitter:image:src',
        'twitter:url'
      ]
    })
    .outputJson((json) => (result = JSON.parse(json)?.[0].report)) // As we currently audit one page at a time
    .run();

  return result;
}

export default runSeoAnalyzer;
