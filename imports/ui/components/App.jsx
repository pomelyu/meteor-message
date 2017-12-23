import React from 'react';
import { Provider } from 'react-redux';

import store from '../store/configStore.js';

import AppTheme from './AppTheme';
import AppHeader from './AppHeader';
import MessagerPage from './MessagerPage';

import './App.css';

const App = () => (
  <Provider store={store}>
    <AppTheme>
      {/* move to routes */}
      <div className="app-grid-container">
        <AppHeader className="app-grid-item-header" title="Message" />
        <MessagerPage className="app-grid-item-page" />
      </div>
    </AppTheme>
  </Provider>
)

export default App;
