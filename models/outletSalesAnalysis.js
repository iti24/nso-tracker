const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salesSchema = new Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Users"
  },
  month: {
    type: String,
    required: true
  },
  totalSales: {
    type: Number,
    required: true
  },
  offlineSales: {
    type: Number,
    required: true
  },
  onlineSales: {
    type: Number,
    required: true
  },
  onlineMix: {
    type: Number,
    required: true
  },
  offlineMix: {
    type: Number,
    required: true
  }
},{ timestamps: true });

module.exports = mongoose.model('OutletSale', salesSchema);
