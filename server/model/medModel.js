const mongoose = require('mongoose');
const medSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  }
});
const Med = mongoose.model('Med', medSchema);

module.exports = Med;
