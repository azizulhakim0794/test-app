const mongoose = require('mongoose');
const { Schema } = mongoose;

const categoriesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
  // versionKey: false,
});

module.exports = mongoose.model('Category', categoriesSchema);
