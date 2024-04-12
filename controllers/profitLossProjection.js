const ProfitLossProjection = require('../models/profitLossProjection');

const addProfitLossProjection = async (req, res) => {
  try {
    const projection = new ProfitLossProjection(req.body);
    await projection.save();
    res.status(201).json({ message: "Projection details saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProfitLossProjections = async (req, res) => {
  try {
    const projections = await ProfitLossProjection.find();
    res.status(200).json(projections);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProfitLossProjectionById = async (req, res) => {
  try {
    const projection = await ProfitLossProjection.findById(req.params.id);
    if (!projection) {
      res.status(404).json({ message: "Projection details not found" });
      return;
    }
    res.status(200).json(projection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProfitLossProjection = async (req, res) => {
  try {
    const projection = await ProfitLossProjection.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!projection) {
      res.status(404).json({ message: "Projection update failed" });
      return;
    }
    res.status(200).json(projection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProfitLossProjection = async (req, res) => {
  try {
    const deletedProjection = await ProfitLossProjection.findByIdAndDelete(req.params.id);
    if (!deletedProjection) {
      res.status(404).json({ message: "Projection details not found" });
      return;
    }
    res.status(200).json(deletedProjection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addProfitLossProjection,
  getProfitLossProjections,
  getProfitLossProjectionById,
  updateProfitLossProjection,
  deleteProfitLossProjection,
};
