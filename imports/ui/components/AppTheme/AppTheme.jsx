import React from 'react';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import themes from '../../constants/themes.js';

const AppTheme = ({ children, themeName }) => {
  const appTheme = createMuiTheme(themes[themeName]);
  return (
    <MuiThemeProvider theme={appTheme}>
      {children}
    </MuiThemeProvider>
  )
};

export default AppTheme;
