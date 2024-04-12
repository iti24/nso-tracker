const express = require('express');
const router = express.Router();
const {
  addOutletSale,
  getOutletSales,
  getOutletSaleById,
  updateOutletSale,
  deleteOutletSale,
} = require("../controllers/outletSalesAnalysis");

// Create
router.post('/', addOutletSale);

// Read
router.get('/:id', getOutletSaleById);
router.get('/', getOutletSales);

// Update
router.put('/:id', updateOutletSale);

// Delete
router.delete('/:id', deleteOutletSale);

module.exports = router;
