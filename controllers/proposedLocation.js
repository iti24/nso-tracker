const Details = require('../models/proposedLocation');

// Create operation
async function createDetails(req, res) {
  try {
    const newDetails = new Details(req.body);
    const savedDetails = await newDetails.save();
    res.status(201).json(savedDetails);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Read operation (Retrieve all details)
async function getAllDetails(req, res) {
  try {
    const allDetails = await Details.find();
    res.json(allDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Read operation (Retrieve details by ID)
async function getDetailById(req, res) {
  try {
    const details = await Details.findById(req.params.id);
    if (details) {
      res.json(details);
    } else {
      res.status(404).json({ message: 'Details not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update operation
async function updateDetail(req, res) {
  try {
    const updatedDetails = await Details.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDetails);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Delete operation
async function deleteDetail(req, res) {
  try {
    await Details.findByIdAndDelete(req.params.id);
    res.json({ message: 'Details deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createDetails,
  getAllDetails,
  getDetailById,
  updateDetail,
  deleteDetail
};
