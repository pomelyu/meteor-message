import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemText } from 'material-ui/List';

const MessageListItem = ({ author, text }) => (
  <ListItem>
    <ListItemText primary={text} secondar={author} />
  </ListItem>
);

MessageListItem.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
}

MessageListItem.defaultProps = {
  author: '',
  text: '',
}

export default MessageListItem;
