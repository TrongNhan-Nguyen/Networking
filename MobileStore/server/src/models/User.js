const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
  name: {type: String, required: true, index: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  cart: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});
module.exports = mongoose.model('User', User);
