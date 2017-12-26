import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';

import '../imports/api/todos/todos.js';

import '../imports/api/todos/todo_method.js';

import '../imports/startup/schema-validation-config.js';

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(
    <App />,
    document.getElementById('app'));
});
