const INITIAL_STATE = [];

function filtersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FILTER': {
      return [...state, action.filters];
    }
    case 'RESET_FILTER': {
      return [];
    }
    case 'REMOVE_FILTER': {
      const findIndex = state.indexOf(action.filter);
      const newState = [...state];

      newState.splice(findIndex, 1);

      return newState;
    }
    default: return state;
  }
}

export default filtersReducer;