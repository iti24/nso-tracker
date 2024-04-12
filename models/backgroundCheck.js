const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const backgroundCheckSchema = new Schema({
  residence: {
    type: String,
    required: true
  },
  familyDetails: {
    type: String,
    required: true
  },
  dependencyOfFamilyMembers: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('BackgroundCheck', backgroundCheckSchema);
