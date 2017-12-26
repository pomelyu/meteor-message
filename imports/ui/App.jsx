import React from 'react';
import { Provider } from 'react-redux';

import MainLayout from './layouts/MainLayout.jsx';

import store from './store/configStore.js';

const App = () => (
  <Provider store={store}>
    <MainLayout />
  </Provider>
)

export default App;
