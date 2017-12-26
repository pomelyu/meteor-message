import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';
import DeleteIcon from 'material-ui-icons/Delete';
import ShareIcon from 'material-ui-icons/Share';
import Checkbox from 'material-ui/Checkbox';
import { withTheme } from 'material-ui/styles';

const TodoListItem = ({
  theme,
  author, text, checked, isPublic,
  onCheckedChange, onPublicChange, onDelete,
}) => {
  const onShareClick = () => onPublicChange(undefined, !isPublic);
  const activeButton = (isPublic) ? { backgroundColor: theme.palette.secondary[100] } : {};
  return (
    <ListItem>
      <Checkbox
        checked={checked}
        tabIndex={-1}
        onChange={onCheckedChange}
      />
      <ListItemText primary={text} secondar={author} />
      <ListItemSecondaryAction>
        <IconButton color="primary">
          <EditIcon />
        </IconButton>
        <IconButton color="primary" onClick={onShareClick} style={activeButton}>
          <ShareIcon />
        </IconButton>
        <IconButton color="primary" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
};

TodoListItem.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any),
  author: PropTypes.string,
  text: PropTypes.string,
  checked: PropTypes.bool,
  isPublic: PropTypes.bool,
  onCheckedChange: PropTypes.func,
  onPublicChange: PropTypes.func,
  onDelete: PropTypes.func,
}

TodoListItem.defaultProps = {
  theme: {},
  author: '',
  text: '',
  checked: false,
  isPublic: false,
  onCheckedChange: (e, v) => {},
  onPublicChange: (e, v) => {},
  onDelete: () => {},
}

export default withTheme()(TodoListItem);
