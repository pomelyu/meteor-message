import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import _ from 'lodash';

import TodoList from './TodoList.jsx';
import TodoInput from './TodoInput.jsx';
import './Todo.css';

const AUTHOR_ME = 'me';

const TodoPage = ({ className, todoList, addTodo, handleTodoChecked, handleTodoPubluc }) => {

  const handleTextSubmit = (text) => {
    const todo = {
      author: AUTHOR_ME,
      text,
      checked: false,
      isPublic: false
    }
    addTodo(todo);
  }

  return (
    <div className={`todo-grid-container ${className}`}>
      <TodoList
        className="todo-grid-item-list"
        todoList={todoList}
        onTodoChecked={handleTodoChecked}
        onTodoShared={handleTodoPubluc}
      />
      <TodoInput className="todo-grid-item-input" submitOnClick={handleTextSubmit} />
    </div>
  )
}

TodoPage.propTypes = {
  className: PropTypes.string,
  todoList: PropTypes.arrayOf(PropTypes.any),
  addTodo: PropTypes.func,
  handleTodoChecked: PropTypes.func,
  handleTodoPubluc: PropTypes.func,
}

/* eslint-disable no-unused-vars */
TodoPage.defaultProps = {
  className: '',
  todoList: [],
  addTodo: (data) => {},
  handleTodoChecked: (id, checked) => {},
  handleTodoPubluc: (id, isPublic) => {},
}
/* eslint-enable */

export default TodoPage;
