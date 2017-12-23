import { combineReducers } from 'redux-immutable';
import themeReducers from './themeReducers.js';

const rootReducer = combineReducers({
  theme: themeReducers,
});

export default rootReducer;
