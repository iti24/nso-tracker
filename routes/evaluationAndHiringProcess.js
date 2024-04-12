const express = require('express');
const router = express.Router();
const {
    createEvaluation,
    getEvaluationById,
    getEvaluations,
    updateEvaluation,
    deleteEvaluation,
} = require("../controllers/evaluationAndHiringprocess");

// Create
router.post('/', createEvaluation);

// Read
router.get('/:id', getEvaluationById);
router.get('/', getEvaluations);

// Update
router.put('/:id', updateEvaluation);

// Delete
router.delete('/:id', deleteEvaluation);

module.exports = router;
