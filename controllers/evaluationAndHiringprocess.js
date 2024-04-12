const Evaluation = require('../models/evaluationAndHiringProcess');

const createEvaluation = async (req, res) => {
  try {
    const evaluation = new Evaluation(req.body);
    await evaluation.save();
    res.status(201).json({ message: "Evaluation details saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEvaluations = async (req, res) => {
  try {
    const evaluations = await Evaluation.find();
    res.status(200).json(evaluations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEvaluationById = async (req, res) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id);
    if (!evaluation) {
      res.status(404).json({ message: "Evaluation details not found" });
      return;
    }
    res.status(200).json(evaluation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEvaluation = async (req, res) => {
  try {
    const evaluation = await Evaluation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!evaluation) {
      res.status(404).json({ message: "Evaluation update failed" });
      return;
    }
    res.status(200).json(evaluation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEvaluation = async (req, res) => {
  try {
    const deletedEvaluation = await Evaluation.findByIdAndDelete(req.params.id);
    if (!deletedEvaluation) {
      res.status(404).json({ message: "Evaluation details not found" });
      return;
    }
    res.status(200).json(deletedEvaluation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createEvaluation,
  getEvaluations,
  getEvaluationById,
  updateEvaluation,
  deleteEvaluation,
};
