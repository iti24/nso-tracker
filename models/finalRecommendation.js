const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a schema for the specific documents
const finalRecommendationSchema = new Schema({
  bdTeam: {
    type: String, 
    required: true
  },
  management: {
    type: String, 
    required: true
  },
  finalOutcome: {
    type: String,
    required: true
  }
});

// Create a model from the schema
const FinalRecommendation = mongoose.model('FinalRecommendation', finalRecommendationSchema);

module.exports = FinalRecommendation;
