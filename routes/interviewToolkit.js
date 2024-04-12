const express = require('express');
const router = express.Router();
const {
    addInterviewToolkit,
    getInterviewToolkitById,
    getInterviewToolkits,
    updateInterviewToolkit,
    deleteInterviewToolkit,
} = require("../controllers/interviewToolkit");

// Create
router.post('/', addInterviewToolkit);

// Read
router.get('/:id', getInterviewToolkitById);
router.get('/', getInterviewToolkits);

// Update
router.put('/:id', updateInterviewToolkit);

// Delete
router.delete('/:id', deleteInterviewToolkit);

module.exports = router;

