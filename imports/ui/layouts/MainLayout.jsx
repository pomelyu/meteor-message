import React from 'react';

import AppTheme from '../components/AppTheme';
import AppHeader from '../components/AppHeader';
import AppSideBar from '../components/AppSideBar';
import TodoPageContainer from '../containers/TodoPageContainer.js';

import './MainLayout.css';

const MainLayout = () => (
  <AppTheme>
    <AppSideBar />
    <div className="app-grid-container">
      <AppHeader className="app-grid-item-header" />
      <TodoPageContainer className="app-grid-item-page" />
    </div>
  </AppTheme>
);

export default MainLayout;
