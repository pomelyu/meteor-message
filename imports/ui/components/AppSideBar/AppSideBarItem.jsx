import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';

const AppSideBarItem = ({ icon, text, onClick }) => (
  <ListItem button onClick={onClick} >
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

AppSideBarItem.proTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

AppSideBarItem.defaultProps = {
  onClick: () => {},
}

export default AppSideBarItem;
