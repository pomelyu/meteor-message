import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Switch from 'material-ui/Switch';
import Checkbox from 'material-ui/Checkbox';

const TodoListItem = ({ author, text, checked, isPublic, onCheckedChange, onPublicChange }) => (
  <ListItem>
    <Checkbox
      checked={checked}
      tabIndex={-1}
      onChange={onCheckedChange}
    />
    <ListItemText primary={text} secondar={author} />
    <ListItemSecondaryAction>
      <div style={{ display: 'inline-block' }}>
        <Typography type="caption" color="inherit">{(isPublic) ? 'Public' : 'Private'}</Typography>
      </div>
      <Switch
        onChange={onPublicChange}
        checked={isPublic}
      />
    </ListItemSecondaryAction>
  </ListItem>
);

TodoListItem.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
  checked: PropTypes.bool,
  isPublic: PropTypes.bool,
  onCheckedChange: PropTypes.func,
  onPublicChange: PropTypes.func,
}

TodoListItem.defaultProps = {
  author: '',
  text: '',
  checked: false,
  isPublic: false,
  onCheckedChange: (e, v) => {},
  onPublicChange: (e, v) => {},
}

export default TodoListItem;
