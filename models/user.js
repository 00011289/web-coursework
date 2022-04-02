const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age:{
      type:Number,
      required: true
  },
  interest:{
      type: String,
      required: true
  },
  subject: {
    type: String,
    required: true
  },
  hours: {
    type: Number,
    required: true
  },
  days:{
      type:Number,
      required: true
  },
  reason_of_task:{
      type: String,
      required: true
  },
  status:{
      type: Boolean
  },
  resources:{
      type: String,
      required: true
  }
});



module.exports = mongoose.model('User', userSchema);
