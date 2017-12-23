import {
  SET_APP_THEME,
} from '../constants/actionTypes.js';

import { THEME } from '../constants/themes.js';

/* eslint-disable import/prefer-default-export */

export const setDarkTheme = () => ({
  type: SET_APP_THEME,
  payload: THEME.DARK,
});

export const setLightTheme = () => ({
  type: SET_APP_THEME,
  payload: THEME.LIGHT,
});
