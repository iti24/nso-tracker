

const express = require('express');
const router = express.Router();
const {
    addBrandSale,
  getBrandSales,
  getBrandSaleById,
  updateBrandSale,
  deleteBrandSale,
  } = require("../controllers/brandSalesAnalysis");

// Create
router.post('/', addBrandSale);

// Read
router.get('/:id',getBrandSaleById);
router.get('/', getBrandSales);

// Update
router.put('/:id', updateBrandSale);

// Delete
router.delete('/:id', deleteBrandSale);

module.exports = router;
