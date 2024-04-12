const BackgroundCheck = require('../models/backgroundCheck');

const addBackgroundCheck = async (req, res) => {
  try {
    const backgroundCheck = new BackgroundCheck(req.body);
    await backgroundCheck.save();
    res.status(201).json({ message: "Background check details saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBackgroundChecks = async (req, res) => {
  try {
    const backgroundChecks = await BackgroundCheck.find();
    res.status(200).json(backgroundChecks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBackgroundCheckById = async (req, res) => {
  try {
    const backgroundCheck = await BackgroundCheck.findById(req.params.id);
    if (!backgroundCheck) {
      res.status(404).json({ message: "Background check details not found" });
      return;
    }
    res.status(200).json(backgroundCheck);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBackgroundCheck = async (req, res) => {
  try {
    const backgroundCheck = await BackgroundCheck.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!backgroundCheck) {
      res.status(404).json({ message: "Background check update failed" });
      return;
    }
    res.status(200).json(backgroundCheck);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBackgroundCheck = async (req, res) => {
  try {
    const deletedBackgroundCheck = await BackgroundCheck.findByIdAndDelete(req.params.id);
    if (!deletedBackgroundCheck) {
      res.status(404).json({ message: "Background check details not found" });
      return;
    }
    res.status(200).json(deletedBackgroundCheck);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addBackgroundCheck,
  getBackgroundChecks,
  getBackgroundCheckById,
  updateBackgroundCheck,
  deleteBackgroundCheck,
};
