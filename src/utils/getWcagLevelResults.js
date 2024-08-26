const getWcagLevelResults = (result, level) => {
  const wcagLevelResults = {
    passes: [],
    violations: [],
    incomplete: [],
    inapplicable: []
  };

  // Iterate over the result keys and filter tags once
  for (const key of Object.keys(wcagLevelResults)) {
    if (result[key]) {
      for (const item of result[key]) {
        if (item.tags.includes(level)) {
          wcagLevelResults[key].push(item);
        }
      }
    }
  }

  return wcagLevelResults;
};

export default getWcagLevelResults;
