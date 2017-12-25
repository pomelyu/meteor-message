import React from 'react';
import PropTypes from 'prop-types';

import List from 'material-ui/List';
import TodoListItem from './TodoListItem.jsx';

const TodoList = ({ className, todoList }) => (
  <div className={`todo-list ${className}`}>
    <List>
      {
        todoList.map(({ id, author, text }) => (
          <TodoListItem key={id} author={author} text={text} />
        ))
      }
    </List>
  </div>
);

TodoList.propTypes = {
  className: PropTypes.string,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: '',
      author: '',
      text: '',
    })
  ),
}

TodoList.defaultProps = {
  className: '',
  todoList: [],
}

export default TodoList;
