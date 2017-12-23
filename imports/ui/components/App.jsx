import React from 'react';
import { Provider } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import store from '../store/configStore.js';

import AppHeader from './AppHeader/AppHeader';
import MessagerPage from './MessagerPage';

import './App.css';

const theme = createMuiTheme({});

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <div className="app-grid-container">
        <AppHeader className="app-grid-item-header" title="Message" />
        <MessagerPage className="app-grid-item-page" />
      </div>
    </MuiThemeProvider>
  </Provider>
)

export default App;
