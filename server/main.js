import { Meteor } from 'meteor/meteor';

import '../imports/api/todos/todos.js';

import '../imports/api/todos/todo_method.js';

import '../imports/api/todos/todo_publication.js';

import '../imports/startup/schema-validation-config.js';

Meteor.startup(() => {
  // code to run on server at startup
});
