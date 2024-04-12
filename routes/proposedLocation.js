const express = require('express');
const router = express.Router();
// const detailsController = require('../controllers/detailsController');
const {
    createDetails,
  getAllDetails,
  getDetailById,
  updateDetail,
  deleteDetail
  } = require("../controllers/proposedLocation");

// Route to create new details
router.post('/create', createDetails);

// Route to get all details
router.get('/', getAllDetails);

// Route to get details by ID
router.get('/:id', getDetailById);

// Route to update details by ID
router.put('/:id', updateDetail);

// Route to delete details by ID
router.delete('/:id',deleteDetail);

module.exports = router;
