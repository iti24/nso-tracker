
const mongoose = require('mongoose');

// Define the schema
const detailsSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Users"
  },
  details: {
    surroundingFAndBBrands: String,
    surroundingNonFAndBBrands: String,
    educationalInstitutions: String,
    targetAudience: String,
    crowdPullers: String
  },
 
  brands: [{
    name: String,
    footfall: {
      weekday: [Number],
      weekend: [Number]
    }
  }],
  observationsComments: [String]
},{ timestamps: true });

// Create a model
const Details = mongoose.model('Details', detailsSchema);

module.exports = Details;
