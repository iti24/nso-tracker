const FinalRecommendation = require('../models/finalRecommendation');

const addFinalRecommendation = async (req, res) => {
  try {
    const { bdTeam, management, finalOutcome } = req.body;

    // Create a new final recommendation instance
    const finalRecommendation = new FinalRecommendation({
      bdTeam,
      management,
      finalOutcome
    });

    // Save the final recommendation to the database
    await finalRecommendation.save();

    res.status(201).json({ message: "Final recommendation created successfully", data: finalRecommendation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFinalRecommendations = async (req, res) => {
  try {
    const finalRecommendations = await FinalRecommendation.find();
    res.status(200).json(finalRecommendations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getFinalRecommendationById = async (req, res) => {
  try {
    const finalRecommendation = await FinalRecommendation.findById(req.params.id);
    if (!finalRecommendation) {
      res.status(404).json({ message: "Final recommendation not found" });
      return;
    }
    res.status(200).json(finalRecommendation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateFinalRecommendation = async (req, res) => {
  try {
    const finalRecommendation = await FinalRecommendation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!finalRecommendation) {
      res.status(404).json({ message: "Final recommendation update failed" });
      return;
    }
    res.status(200).json(finalRecommendation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteFinalRecommendation = async (req, res) => {
  try {
    const deletedFinalRecommendation = await FinalRecommendation.findByIdAndDelete(req.params.id);
    if (!deletedFinalRecommendation) {
      res.status(404).json({ message: "Final recommendation not found" });
      return;
    }
    res.status(200).json(deletedFinalRecommendation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addFinalRecommendation,
  getFinalRecommendations,
  getFinalRecommendationById,
  updateFinalRecommendation,
  deleteFinalRecommendation,
};
