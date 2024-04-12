const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BrandSalesSchema = new Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Users"
  },
  brand: {
    type: Number,
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
  
},
{ timestamps: true });

module.exports = BrandSales = mongoose.model('brandSale', BrandSalesSchema);
