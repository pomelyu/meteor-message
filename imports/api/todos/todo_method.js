import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Todos from './todos.js';

Meteor.methods({
  'todos.add': function(todo) {
    check(todo, Object);

    Todos.insert(todo);
  },

  'todos.remove': function(todoId) {
    check(todoId, String);

    Todos.remove({ _id: todoId });
  },

  'todos.setChecked': function(todoId, checked) {
    check(todoId, String);
    check(checked, Boolean);

    Todos.update({ _id: todoId }, { $set: { checked } });

    // if (Meteor.isClient) {
    //   Todos.update({ _id: todoId }, { $set: { checked } });
    // }

    // if (Meteor.isServer) {
    //   const delay2second = Meteor.wrapAsync((callback) => setTimeout(callback, 2000));
    //   delay2second();
    //   // Todos.update({ _id: todoId }, { $set: { checked: !checked } });
    // }
  },

  'todos.setIsPublic': function(todoId, isPublic) {
    check(todoId, String);
    check(isPublic, Boolean);

    Todos.update({ _id: todoId }, { $set: { isPublic } })
  }
});
