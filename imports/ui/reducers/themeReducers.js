import { SET_APP_THEME } from '../constants/actionTypes.js';
import { ThemeState } from '../constants/models.js';

/* eslint-disable no-use-before-define */
const themeReducer = (state = ThemeState, action) => {
  switch (action.type) {
  case SET_APP_THEME:
    return handleSetAppTheme(state, action.payload);
  default:
    return state;
  }
};
/* eslint-enable no-use-before-define */


function handleSetAppTheme(state, payload) {
  const newState = state.set('themeName', payload);
  return newState;
}

export default themeReducer;
