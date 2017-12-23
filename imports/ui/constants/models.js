import Immutable from 'immutable';

import { THEME } from './themes.js';

/* eslint-disable import/prefer-default-export */
export const ThemeState = Immutable.fromJS({
  themeName: THEME.LIGHT,
});
