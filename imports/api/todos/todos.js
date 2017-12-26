import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import moment from 'moment';

const Todos = new Mongo.Collection('todos');
Todos.schema = new SimpleSchema({
  _id: { type: String, optional: true },

  updateAt: {
    type: String,
    autoValue: () => moment().format(),
  },

  owner: { type: String },

  text: { type: String },

  checked: { type: Boolean, defaultValue: false },

  isPublic: { type: Boolean, defaultValue: false },
})

export default Todos;
