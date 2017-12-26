import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Todos from '../../api/todos/todos.js';
import TodoPage from '../components/TodoPage';

Meteor.subscribe('todos.owner', );
Meteor.subscribe('todos.public');

const mapTrackerToProps = withTracker(() => {
  const todos = Todos.find({}).fetch();
  return {
    todoList: todos,
    addTodo: (data) => Meteor.call('todos.add', data),
    handleTodoChecked: (id, checked) => Meteor.call('todos.setChecked', id, checked),
    handleTodoPubluc: (id, isPublic) => Meteor.call('todos.setIsPublic', id, isPublic),
    handleTodoDelete: (id) => Meteor.call('todos.remove', id),
  }
})

export default mapTrackerToProps(TodoPage);