import React from 'react';
import PropTypes from 'prop-types';

import TodoList from './TodoList.jsx';
import AddDialog from './AddDialog.jsx';
import AddButton from './AddButton.jsx';
import './Todo.css';

const AUTHOR_ME = 'me';

class TodoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openAddDialog: false },

    this.onOpenAddDialog = this.onOpenAddDialog.bind(this);
    this.onCloseAddDialog = this.onCloseAddDialog.bind(this);
    this.addNewTodo= this.addNewTodo.bind(this);
  }

  onOpenAddDialog() {
    this.setState({ openAddDialog: true });
  }

  onCloseAddDialog() {
    this.setState({ openAddDialog: false });
  }

  addNewTodo(text) {
    const todo = {
      author: AUTHOR_ME,
      text,
      checked: false,
      isPublic: false
    }
    this.setState({ openAddDialog: false });
    this.props.addTodo(todo);
  }

  render() {
    const { className, todoList, handleTodoChecked, handleTodoPubluc, handleTodoDelete } = this.props;
    const { openAddDialog } = this.state;

    return (
      <div className={`todo-grid-container ${className}`}>
        <TodoList
          className="todo-grid-item-list"
          todoList={todoList}
          onTodoChecked={handleTodoChecked}
          onTodoShared={handleTodoPubluc}
          onTodoDelete={handleTodoDelete}
        />
        <AddButton className="todo-grid-item-input" onClick={this.onOpenAddDialog} />
        <AddDialog
          isOpen={openAddDialog}
          onDialogClose={this.onCloseAddDialog}
          onDialogSubmit={this.addNewTodo}
        />
      </div>
    )
  }
}

TodoPage.propTypes = {
  className: PropTypes.string,
  todoList: PropTypes.arrayOf(PropTypes.any),
  addTodo: PropTypes.func,
  handleTodoChecked: PropTypes.func,
  handleTodoPubluc: PropTypes.func,
  handleTodoDelete: PropTypes.func,
}

/* eslint-disable no-unused-vars */
TodoPage.defaultProps = {
  className: '',
  todoList: [],
  addTodo: (data) => {},
  handleTodoChecked: (id, checked) => {},
  handleTodoPubluc: (id, isPublic) => {},
  handleTodoDelete: (id) => {},
}
/* eslint-enable */

export default TodoPage;
