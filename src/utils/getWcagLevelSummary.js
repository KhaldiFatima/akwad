const getWcagLevelSummary = (levelResults) => {
  // Directly calculate the lengths and total audits
  const noPassed = levelResults?.passes?.length || 0;
  const noViolations = levelResults?.violations?.length || 0;
  const noIncomplete = levelResults?.incomplete?.length || 0;
  const noInapplicable = levelResults?.inapplicable?.length || 0;

  const totalAudits = noPassed + noViolations + noIncomplete + noInapplicable;

  // Compute compliance percentage
  const compliancePercentage = (noPassed / totalAudits) * 100;

  return {
    compliancePercentage,
    noPassed,
    totalAudits
  };
};

export default getWcagLevelSummary;
