const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    maxlenght: [30, 'name can not be more than 30 character'],
  },
  actor: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  Short_Description: {
    type: String,
    required: true,
  },
  Characters_Names: {
    type: String,
    required: true,
  },
  intresting: {
    type: Boolean,
  },
});
module.exports = mongoose.model('Movie', MovieSchema);
