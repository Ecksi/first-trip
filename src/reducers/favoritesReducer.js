const INITIAL_STATE = [];

function favoritesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_FAVORITES': {
      return [...action.favorites];
    }
    default: return state;
  }
}

export default favoritesReducer;