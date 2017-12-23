import Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers/rootReducer.js';

const initialState = Immutable.Map();

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(),
);

export default store;
