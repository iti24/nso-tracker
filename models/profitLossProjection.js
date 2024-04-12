const mongoose = require('mongoose');

const profitlossprojectionSchema = new mongoose.Schema({
  pessimistic: {
    type: Number,
    required: true
  },
  realistic: {
    type: Number,
    required: true
  },
  optimistic: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('ProfitLossProjection', profitlossprojectionSchema);
