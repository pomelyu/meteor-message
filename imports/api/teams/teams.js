import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Teams = new Mongo.Collection('teams');
Teams.schema = new SimpleSchema({
  _id: { type: String, optional: true },

  title: { type: String, minCount: 1 },

  members: { type: Array, minCount: 1 },
  'members.$': { type: String, minCount: 1 },
});

export default Teams;
