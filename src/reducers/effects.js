const INITIAL_STATE = {
  effects: [],
};

function effectsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_EFFECTS': {
      return [...action.effects];
    }
    default: return state;
  }
}

export default effectsReducer;