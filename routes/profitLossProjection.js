const express = require('express');
const router = express.Router();
const {
    addProfitLossProjection,
    getProfitLossProjectionById,
    getProfitLossProjections,
    updateProfitLossProjection,
    deleteProfitLossProjection,
} = require("../controllers/profitLossProjection");

// Create
router.post('/', addProfitLossProjection);

// Read
router.get('/:id', getProfitLossProjectionById);
router.get('/', getProfitLossProjections);

// Update
router.put('/:id', updateProfitLossProjection);

// Delete
router.delete('/:id', deleteProfitLossProjection);

module.exports = router;
