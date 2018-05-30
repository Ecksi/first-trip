const INITIAL_STATE = [];

function searchResultsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEARCH_RESULTS': {
      return [...action.results];
    }
    default: return state;
  }
}

export default searchResultsReducer;