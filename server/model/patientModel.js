const mongoose = require('mongoose');

const { Schema } = mongoose;

const patientSchema = new Schema({
  name: {
    type: String,
    // required: true
  },
  dob: {
    type: Date,
    // required: true
  },
  age: {
    type: Number,
    // required: true
  },
  sex: {
    type: String,
    enum: ['male', 'female', 'other'],
    // required: true
  },
  email: {
    type: String,
    // required: true,
    // unique: true
  },
  number: {
    type: String,
    // required: true
  },
  address: {
    type: String,
    // required: true
  },
  emergencyContact: {
    name: {
      type: String,
      // required: true
    },
    relationship: {
      type: String,
      // required: true
    },
    phone: {
      type: String,
      // required: true
    }
  },
  medications: [String],
  allergies: [String],
  medicalHistory: {
    type: String,
    // required: true
  }
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
