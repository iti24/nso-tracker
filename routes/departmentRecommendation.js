const express = require('express');
const router = express.Router();
const {
  addDepartmentRecommendation,
  getDepartmentRecommendations,
  getDepartmentRecommendationById,
  updateDepartmentRecommendation,
  deleteDepartmentRecommendation,
} = require("../controllers/departmentRecommendation");

// Create
router.post('/', addDepartmentRecommendation);

// Read
router.get('/:id', getDepartmentRecommendationById);
router.get('/', getDepartmentRecommendations);

// Update
router.put('/:id', updateDepartmentRecommendation);

// Delete
router.delete('/:id', deleteDepartmentRecommendation);

module.exports = router;
