import React from 'react';

import AppTheme from '../components/AppTheme';
import AppHeader from '../components/AppHeader';
import TodoPage from '../components/TodoPage';

import './MainLayout.css';

const MainLayout = () => (
  <AppTheme>
    {/* move to routes */}
    <div className="app-grid-container">
      <AppHeader className="app-grid-item-header" title="Todos" />
      <TodoPage className="app-grid-item-page" />
    </div>
  </AppTheme>
);

export default MainLayout;
