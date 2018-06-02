const INITIAL_STATE = [];

function searchResultsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEARCH_RESULTS': {
      return [...action.results];
    }
    case 'SEARCH_BY_FILTERS': {
      const allResults = action.strains.reduce((scores, strain) => {
        let score = 0;

        action.filters.forEach(filter =>
          strain.effects[action.effectType]
            .includes(filter)
            ? score++ : null
        );

        scores[score]
          ? scores[score].push(strain)
          : scores[score] = [];

        return scores;
      }, {});

      const maxMatches = Math.max(...Object.keys(allResults));
      const minMatches = Math.min(...Object.keys(allResults));

      return action.effectType === 'negative'
        ? [...state, ...minMatches]
        : [...state, ...maxMatches];
    }
    default: return state;
  }
}

export default searchResultsReducer;