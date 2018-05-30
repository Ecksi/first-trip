import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import userReducer from './userReducer';
import strainsReducer from './strainsReducer';
import effectsReducer from './effectsReducer';
import filtersReducer from './filtersReducer';
import searchResultsReducer from './searchResultsReducer';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  strains: strainsReducer,
  effects: effectsReducer,
  filters: filtersReducer,
  results: searchResultsReducer,
});

export default rootReducer;