const express = require('express');
const router = express.Router();
const {
    addBackgroundCheck,
    getBackgroundChecks,
    getBackgroundCheckById,
    updateBackgroundCheck,
    deleteBackgroundCheck,
} = require("../controllers/backgroundCheck");

// Create
router.post('/', addBackgroundCheck);

// Read
router.get('/:id', getBackgroundCheckById);
router.get('/', getBackgroundChecks);

// Update
router.put('/:id', updateBackgroundCheck);

// Delete
router.delete('/:id', deleteBackgroundCheck);

module.exports = router;
