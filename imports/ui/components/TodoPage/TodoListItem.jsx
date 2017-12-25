import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemText } from 'material-ui/List';

const TodoListItem = ({ author, text }) => (
  <ListItem>
    <ListItemText primary={text} secondar={author} />
  </ListItem>
);

TodoListItem.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
}

TodoListItem.defaultProps = {
  author: '',
  text: '',
}

export default TodoListItem;
