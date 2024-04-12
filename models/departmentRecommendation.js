const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a schema for department recommendations
const DepartmentRecommendationSchema = new Schema({
  bd: {
    type: String,
    required: true
  },
  ops: {
    type: String,
    required: true
  },
  marketing: {
    type: String,
    required: true
  },
  management: {
    type: String,
    required: true
  }
});

// Create a model from the schema
const DepartmentRecommendation = mongoose.model('DepartmentRecommendation', DepartmentRecommendationSchema);

module.exports = DepartmentRecommendation;
