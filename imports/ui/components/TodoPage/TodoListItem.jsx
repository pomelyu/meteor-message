import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const TodoListItem = ({ author, text, checked, onCheckedChange }) => (
  <ListItem>
    <Checkbox
      checked={checked}
      tabIndex={-1}
      onChange={onCheckedChange}
    />
    <ListItemText primary={text} secondar={author} />
  </ListItem>
);

TodoListItem.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
  checked: PropTypes.bool,
  onCheckedChange: PropTypes.func,
}

TodoListItem.defaultProps = {
  author: '',
  text: '',
  checked: false,
  onCheckedChange: (e, v) => {},
}

export default TodoListItem;
