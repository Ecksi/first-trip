import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import strainsReducer from './strains';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  strains: strainsReducer,
});

export default rootReducer;