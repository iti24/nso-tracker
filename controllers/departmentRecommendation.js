const DepartmentRecommendation = require('../models/departmentRecommendation');

const addDepartmentRecommendation = async (req, res) => {
  try {
    const departmentRecommendation = new DepartmentRecommendation(req.body);
    await departmentRecommendation.save();
    res.status(201).json({ message: "Department recommendation saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDepartmentRecommendations = async (req, res) => {
  try {
    const departmentRecommendations = await DepartmentRecommendation.find();
    res.status(200).json(departmentRecommendations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDepartmentRecommendationById = async (req, res) => {
  try {
    const departmentRecommendation = await DepartmentRecommendation.findById(req.params.id);
    if (!departmentRecommendation) {
      res.status(404).json({ message: "Department recommendation not found" });
      return;
    }
    res.status(200).json(departmentRecommendation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateDepartmentRecommendation = async (req, res) => {
  try {
    const departmentRecommendation = await DepartmentRecommendation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!departmentRecommendation) {
      res.status(404).json({ message: "Department recommendation update failed" });
      return;
    }
    res.status(200).json(departmentRecommendation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteDepartmentRecommendation = async (req, res) => {
  try {
    const deletedDepartmentRecommendation = await DepartmentRecommendation.findByIdAndDelete(req.params.id);
    if (!deletedDepartmentRecommendation) {
      res.status(404).json({ message: "Department recommendation not found" });
      return;
    }
    res.status(200).json(deletedDepartmentRecommendation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addDepartmentRecommendation,
  getDepartmentRecommendations,
  getDepartmentRecommendationById,
  updateDepartmentRecommendation,
  deleteDepartmentRecommendation,
};
