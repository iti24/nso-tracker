const express = require('express');
const router = express.Router();
const {
    createInterview,
    getInterviewById,
    getInterviews,
    updateInterview,
    deleteInterview,
} = require("../controllers/interviewquestionResponse");

// Create
router.post('/', createInterview);

// Read
router.get('/:id', getInterviewById);
router.get('/', getInterviews);

// Update
router.put('/:id', updateInterview);

// Delete
router.delete('/:id', deleteInterview);

module.exports = router;
