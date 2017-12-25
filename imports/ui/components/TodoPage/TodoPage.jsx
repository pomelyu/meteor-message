import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import _ from 'lodash';

import TodoList from './TodoList.jsx';
import TodoInput from './TodoInput.jsx';
import './Todo.css';

const AUTHOR_ME = 'me';

class TodoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
    }

    this.handleTextSubmit = this.handleTextSubmit.bind(this);
    this.handleTodoChecked = this.handleTodoChecked.bind(this);
  }

  handleTextSubmit(text) {
    const { todoList } = this.state;
    const todo = {
      id: shortid.generate(),
      author: AUTHOR_ME,
      text,
      checked: false,
    }

    todoList.push(todo);
    this.setState({ todoList });
  }

  handleTodoChecked(id, checked) {
    const { todoList } = this.state;
    const idx = _.findIndex(todoList, { id });
    todoList[idx].checked = checked;
    this.setState({ todoList });
  }

  render() {
    const { todoList } = this.state;
    const { className } = this.props
    return (
      <div className={`todo-grid-container ${className}`}>
        <TodoList className="todo-grid-item-list" todoList={todoList} onTodoChecked={this.handleTodoChecked} />
        <TodoInput className="todo-grid-item-input" submitOnClick={this.handleTextSubmit} />
      </div>
    )
  }
}

TodoPage.propTypes = {
  className: PropTypes.string,
}

TodoPage.defaultProps = {
  className: '',
}

export default TodoPage;
