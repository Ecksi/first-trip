import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import strainsReducer from './strains';
import effectsReducer from './effects';
import filtersReducer from './filters';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  strains: strainsReducer,
  effects: effectsReducer,
  filters: filtersReducer,
});

export default rootReducer;