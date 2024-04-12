const Commercial = require('../models/commercials');

const addCommercial = async (req, res) => {
  try {
    const commercial = new Commercial(req.body);
    await commercial.save();
    res.status(201).json({ message: "Commercial details saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCommercials = async (req, res) => {
  try {
    const commercials = await Commercial.find();
    res.status(200).json(commercials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCommercialById = async (req, res) => {
  try {
    const commercial = await Commercial.findById(req.params.id);
    if (!commercial) {
      res.status(404).json({ message: "Commercial details not found" });
      return;
    }
    res.status(200).json(commercial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCommercial = async (req, res) => {
  try {
    const commercial = await Commercial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!commercial) {
      res.status(404).json({ message: "Commercial update failed" });
      return;
    }
    res.status(200).json(commercial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCommercial = async (req, res) => {
  try {
    const deletedCommercial = await Commercial.findByIdAndDelete(req.params.id);
    if (!deletedCommercial) {
      res.status(404).json({ message: "Commercial details not found" });
      return;
    }
    res.status(200).json(deletedCommercial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addCommercial,
  getCommercials,
  getCommercialById,
  updateCommercial,
  deleteCommercial,
};
