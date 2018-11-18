const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const AddList = new Schema({
  list: {type: String},
  date: {type: String, default: Date.now}
});

module.exports = mongoose.model('list', AddList);
