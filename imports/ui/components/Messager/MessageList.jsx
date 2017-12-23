import React from 'react';
import PropTypes from 'prop-types';

import List from 'material-ui/List';
import MessageListItem from './MessageListItem.jsx';

const MessageList = ({ className, messageList }) => (
  <div className={`message-list ${className}`}>
    <List dense>
      {
        messageList.map(({ id, author, text }) => (
          <MessageListItem key={id} author={author} text={text} />
        ))
      }
    </List>
  </div>
);

MessageList.propTypes = {
  className: PropTypes.string,
  messageList: PropTypes.arrayOf(
    PropTypes.shape({
      id: '',
      author: '',
      text: '',
    })
  ),
}

MessageList.defaultProps = {
  className: '',
  messageList: [],
}

export default MessageList;
