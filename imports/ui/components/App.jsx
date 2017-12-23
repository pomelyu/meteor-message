import React from 'react';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import AppHeader from './AppHeader/AppHeader';
import MessagerPage from './MessagerPage';

import './App.css';

const theme = createMuiTheme({});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div className="app-grid-container">
      <AppHeader className="app-grid-item-header" title="Message" />
      <MessagerPage className="app-grid-item-page" />
    </div>
  </MuiThemeProvider>
)

export default App;
