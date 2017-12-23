import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const AppHeader = ({ className, title }) => (
  <div className={`app-header ${className}`}>
    <AppBar position="static">
      <Toolbar>
        <IconButton color="contrast" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);  

AppHeader.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
}

AppHeader.defaultProps = {
  className: '',
  title: 'Messager',
}

export default AppHeader;