const express = require('express');
const router = express.Router();
const {
    addInterviewChecklist,
    getInterviewChecklistById,
    getInterviewChecklists,
    updateInterviewChecklist,
    deleteInterviewChecklist,
} = require("../controllers/interviewChecklist");

// Create
router.post('/', addInterviewChecklist);

// Read
router.get('/:id', getInterviewChecklistById);
router.get('/', getInterviewChecklists);

// Update
router.put('/:id', updateInterviewChecklist);

// Delete
router.delete('/:id', deleteInterviewChecklist);

module.exports = router;
