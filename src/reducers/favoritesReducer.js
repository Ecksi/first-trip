const INITIAL_STATE = [];

function favoritesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_FAVORITES': {
      return [...action.favorites];
    }
    case 'ADD_FAVORITE': {
      return [...state, action.favorite];
    }
    case 'REMOVE_FAVORITE': {
      const newState = [...state];

      return newState.filter(favorites => favorites !== action.favorite);
    }
    default: return state;
  }
}

export default favoritesReducer;