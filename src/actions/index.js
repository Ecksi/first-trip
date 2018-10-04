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

export const searchByFilters = (effectType, filters, strains) => ({
  type: 'SEARCH_BY_FILTERS',
  effectType,
  filters,
  strains
});

export const loadFavorites = favorites => ({
  type: 'LOAD_FAVORITES',
  favorites
});

export const addFavorite = favorite => ({
  type: 'ADD_FAVORITE',
  favorite
});

export const removeFavorite = favorite => ({
  type: 'REMOVE_FAVORITE',
  favorite
});