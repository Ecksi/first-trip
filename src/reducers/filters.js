const INITIAL_STATE = [];

function filtersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FILTER': {
      return [...state, action.filters];
    }
    default: return state;
  }
}

export default filtersReducer;