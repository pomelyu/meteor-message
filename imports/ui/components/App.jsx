import React from 'react';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Counter from './Counter';

const theme = createMuiTheme();

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Counter />
  </MuiThemeProvider>
)

export default App;
