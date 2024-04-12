const express = require('express');
const router = express.Router();
const {
  addFinalRecommendation,
  getFinalRecommendations,
  getFinalRecommendationById,
  updateFinalRecommendation,
  deleteFinalRecommendation,
} = require("../controllers/finalRecommendation");

// Create
router.post('/', addFinalRecommendation);

// Read
router.get('/:id', getFinalRecommendationById);
router.get('/', getFinalRecommendations);

// Update
router.put('/:id', updateFinalRecommendation);

// Delete
router.delete('/:id', deleteFinalRecommendation);

module.exports = router;
