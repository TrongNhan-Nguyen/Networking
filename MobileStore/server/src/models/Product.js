const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Product = new Schema({
  name: {type: String, required: true},
  desc: {type: String, required: true},
  price: {type: String, required: true},
  img: {type: String, required: true},
  category: {
    type: String,
    enum: ['Apple', 'Samsum', 'Oppo'],
  },
});

module.exports = mongoose.model('Product', Product);
