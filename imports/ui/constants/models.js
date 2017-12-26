import Immutable from 'immutable';

import { THEME } from './themes.js';

export const ThemeState = Immutable.fromJS({
  themeName: THEME.LIGHT,
});

export const UiState = Immutable.fromJS({
  showSideBar: false,
});
