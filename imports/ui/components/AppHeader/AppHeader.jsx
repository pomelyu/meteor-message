import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import ThemeSwitcher from '../ThemeSwitcher';

const AppHeader = ({ className, title, onSideBarClick }) => (
  <div className={`app-header ${className}`}>
    <AppBar position="static">
      <Toolbar classes={{ root: 'app-header-toolbar' }}>
        <IconButton color="contrast" aria-label="Menu" onClick={onSideBarClick}>
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit">
          {title}
        </Typography>
        <ThemeSwitcher />
      </Toolbar>
    </AppBar>
  </div>
);  

AppHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  onSideBarClick: PropTypes.func,
}

AppHeader.defaultProps = {
  className: '',
  title: 'Messager',
  onSideBarClick: () => {},
}

export default AppHeader;