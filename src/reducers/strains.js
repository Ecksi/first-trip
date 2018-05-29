const INITIAL_STATE = [];

function strainsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_STRAINS': {
      return [...action.strains];
    }
    default: return state;
  }
}

export default strainsReducer;