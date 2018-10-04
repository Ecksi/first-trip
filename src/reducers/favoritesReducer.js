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
    // no need for const just filter off the spread copy of state
    default: 
      return state;
      // format the rest of the reducers like this
  }
}

export default favoritesReducer;