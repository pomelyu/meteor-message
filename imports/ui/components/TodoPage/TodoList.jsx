import React from 'react';
import PropTypes from 'prop-types';

import List from 'material-ui/List';
import TodoListItem from './TodoListItem.jsx';

const TodoList = ({ className, todoList, onTodoChecked }) => (
  <div className={`todo-list ${className}`}>
    <List>
      {
        todoList.map(({ id, author, text, checked }) => (
          <TodoListItem
            key={id}
            author={author}
            text={text}
            checked={checked}
            onCheckedChange={(e, v) => onTodoChecked(id, v)}
          />
        ))
      }
    </List>
  </div>
);

TodoList.propTypes = {
  className: PropTypes.string,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      text: PropTypes.string,
      checked: PropTypes.bool,
    })
  ),
}

TodoList.defaultProps = {
  className: '',
  todoList: [],
}

export default TodoList;
