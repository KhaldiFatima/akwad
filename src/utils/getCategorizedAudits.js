const getCategoriezedAudits = async (report, onlyAudits) => {
  const onlyAuditsObj = {};
  onlyAudits.map((audit) => (onlyAuditsObj[audit] = true));
  const categories = (await report?.categories) || {};
  const audits = (await report?.audits) || {};
  const withItemsCount = {
    redirects: true,
    deprecations: true,
    'errors-in-console': true,
    'unsized-images': true,
    'network-requests': true,
    'image-size-responsive': true
  };
  const withItems = {
    'screenshot-thumbnails': true
  };
  const categoriezedAudits = {};

  await Object.keys(categories).forEach((category) => {
    const categoryAudits = [];
    const score = categories[category]?.score;
    categories[category]?.auditRefs?.forEach((auditRef) => {
      if (onlyAuditsObj[auditRef.id]) {
        categoryAudits.push({
          id: auditRef.id,
          score: audits[auditRef.id].displayValue || audits[auditRef.id].score,
          scoreDisplayMode: audits[auditRef.id].scoreDisplayMode,
          ...(audits[auditRef.id].scoreDisplayMode === 'metricSavings' && {
            metricSavings: audits[auditRef.id].metricSavings
          }),
          ...(audits[auditRef.id].scoringOptions && {
            scoringOptions: audits[auditRef.id].scoringOptions,
            numericValue: audits[auditRef.id].numericValue
          }),
          ...(withItemsCount[auditRef.id] && {
            count: audits[auditRef.id].details?.items.length
          }),
          ...(withItems[auditRef.id] && {
            items: audits[auditRef.id].details?.items
          }),
          ...(audits[auditRef.id].details?.nodes && {
            nodes: audits[auditRef.id].details.nodes
          })
        });
      }
    });
    categoriezedAudits[category] = { score, categoryAudits };
  });

  return categoriezedAudits;
};

export default getCategoriezedAudits;
