import React from 'react';

import AppTheme from '../components/AppTheme';
import AppHeader from '../components/AppHeader';
import TodoPageContainer from '../containers/TodoPageContainer.js';

import './MainLayout.css';

const MainLayout = () => (
  <AppTheme>
    {/* move to routes */}
    <div className="app-grid-container">
      <AppHeader className="app-grid-item-header" title="Todos" />
      <TodoPageContainer className="app-grid-item-page" />
    </div>
  </AppTheme>
);

export default MainLayout;
