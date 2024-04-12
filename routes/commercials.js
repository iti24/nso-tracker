const express = require('express');
const router = express.Router();
const {
    addCommercial,
    getCommercials,
    getCommercialById,
    updateCommercial,
    deleteCommercial,
} = require("../controllers/commercials");

// Create
router.post('/', addCommercial);

// Read
router.get('/:id', getCommercialById);
router.get('/', getCommercials);

// Update
router.put('/:id', updateCommercial);

// Delete
router.delete('/:id', deleteCommercial);

module.exports = router;
