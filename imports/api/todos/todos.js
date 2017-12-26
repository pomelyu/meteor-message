import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import moment from 'moment';

import { defaultExcludeModifier } from '../utils.js';

const Todos = new Mongo.Collection('todos');
Todos.schema = new SimpleSchema({
  _id: { type: String, optional: true },

  updateAt: {
    type: String,
    autoValue: () => moment().format(),
  },

  author: { type: String },

  text: { type: String },

  checked: {
    type: Boolean,
    autoValue: function() { return defaultExcludeModifier.call(this, 'false') },
  },

  isPublic: {
    type: Boolean,
    autoValue: function() { return defaultExcludeModifier.call(this, 'false') },
  },
});

export default Todos;
