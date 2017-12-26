import { Meteor } from 'meteor/meteor'
import Todos from './todos.js';

Meteor.publish('todos.owner', (userId) => {
  // 這和 mongo db 的語法非常相近，也就是找出所有 owner 是 userId 的文件
  // publication 回傳值必須要是 mongoDB 的 cursor，或是 cursor 的 array
  return Todos.find({ owner: userId });
})

Meteor.publish('todos.public', () => {
  // 類似上面的，這邊是找出所有公開的文件
  return Todos.find({ isPublic: true });
})
