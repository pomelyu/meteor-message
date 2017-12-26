import React from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import HomeIcon from 'material-ui-icons/Home';
import SettingIcon from 'material-ui-icons/Settings';
import MyIcon from 'material-ui-icons/Face';

import AppSideBarItem from './AppSideBarItem.jsx';

const AppSideBar = ({ isOpen, onSideBarClose }) => (
  <Drawer open={isOpen} onClose={onSideBarClose}>
    <List>
      <AppSideBarItem icon={<HomeIcon />} text="Home" />
      <AppSideBarItem icon={<SettingIcon />} text="Setting" />
      <AppSideBarItem icon={<MyIcon />} text="My Todos" />
    </List>
    <Divider />
    <List />
  </Drawer>
);

AppSideBar.propTypes = {
  isOpen: PropTypes.bool,
  onSideBarClose: PropTypes.func,
}

AppSideBar.defaultProps = {
  isOpen: false,
  onSideBarClose: () => {},
}

export default AppSideBar;
