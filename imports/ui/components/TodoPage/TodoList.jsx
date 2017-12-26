import React from 'react';
import PropTypes from 'prop-types';

import List from 'material-ui/List';
import TodoListItem from './TodoListItem.jsx';

const TodoList = ({ className, todoList, onTodoChecked, onTodoShared, onTodoDelete }) => (
  <div className={`todo-list ${className}`}>
    <List>
      {
        todoList.map(({ _id: id, author, text, checked, isPublic }) => (
          <TodoListItem
            key={id}
            author={author}
            text={text}
            checked={checked}
            isPublic={isPublic}
            onCheckedChange={(e, v) => onTodoChecked(id, v)}
            onPublicChange={(e, v) => onTodoShared(id, v)}
            onDelete={() => onTodoDelete(id)}
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
      _id: PropTypes.string,
      author: PropTypes.string,
      text: PropTypes.string,
      checked: PropTypes.bool,
      public: PropTypes.bool,
    })
  ),
  onTodoChecked: PropTypes.func,
  onTodoShared: PropTypes.func,
  onTodoDelete: PropTypes.func,
}

/* eslint-disable no-unused-vars */
TodoList.defaultProps = {
  className: '',
  todoList: [],
  onTodoChecked: (id, checked) => {},
  onTodoShared: (id, isPublic) => {},
  onTodoDelete: (id) => {},
}
/* eslint-enable */

export default TodoList;
