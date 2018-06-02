export const addStrains = strains => ({
  type: 'ADD_STRAINS',
  strains
});

export const addEffects = effects => ({
  type: 'ADD_EFFECTS',
  effects
});

export const addFilter = filters => ({
  type: 'ADD_FILTER',
  filters
});

export const resetFilter = () => ({
  type: 'RESET_FILTER',
});

export const removeFilter = filter => ({
  type: 'REMOVE_FILTER',
  filter
});

export const searchResults = results => ({
  type: 'SEARCH_RESULTS',
  results
});