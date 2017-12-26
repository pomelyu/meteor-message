import { combineReducers } from 'redux-immutable';
import themeReducers from './themeReducers.js';
import uiReducer from './uiReducer.js';

const rootReducer = combineReducers({
  theme: themeReducers,
  ui: uiReducer,
});

export default rootReducer;
