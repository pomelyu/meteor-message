import React from 'react';
import shortid from 'shortid';

import MessageList from './MessageList.jsx';
import MessageInput from './MessageInput.jsx';
import './Messager.css';

const AUTHOR_ME = 'me';

class Messager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageList: [],
    }

    this.handleTextSubmit = this.handleTextSubmit.bind(this);
  }

  handleTextSubmit(text) {
    const { messageList } = this.state;
    const message = {
      id: shortid.generate(),
      author: AUTHOR_ME,
      text,
    }

    messageList.push(message);
    this.setState({ messageList });
  }

  render() {
    const { messageList } = this.state;
    return (
      <div className="message-grid-container">
        <MessageList className="message-grid-item-list" messageList={messageList} />
        <MessageInput className="message-grid-item-input" submitOnClick={this.handleTextSubmit} />
      </div>
    )
  }
}

export default Messager;
