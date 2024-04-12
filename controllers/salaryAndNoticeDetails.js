const SalaryAndNoticePeriods = require('../models/salaryAndNoticeDetails');

const createSalaryAndNoticePeriods = async (req, res) => {
  try {
    const salaryAndNoticePeriods = new SalaryAndNoticePeriods(req.body);
    await salaryAndNoticePeriods.save();
    res.status(201).json({ message: "Salary and notice periods details saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSalaryAndNoticePeriods = async (req, res) => {
  try {
    const salaryAndNoticePeriods = await SalaryAndNoticePeriods.find();
    res.status(200).json(salaryAndNoticePeriods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSalaryAndNoticePeriodsById = async (req, res) => {
  try {
    const salaryAndNoticePeriods = await SalaryAndNoticePeriods.findById(req.params.id);
    if (!salaryAndNoticePeriods) {
      res.status(404).json({ message: "Salary and notice periods details not found" });
      return;
    }
    res.status(200).json(salaryAndNoticePeriods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSalaryAndNoticePeriods = async (req, res) => {
  try {
    const salaryAndNoticePeriods = await SalaryAndNoticePeriods.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!salaryAndNoticePeriods) {
      res.status(404).json({ message: "Salary and notice periods update failed" });
      return;
    }
    res.status(200).json(salaryAndNoticePeriods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteSalaryAndNoticePeriods = async (req, res) => {
  try {
    const deletedSalaryAndNoticePeriods = await SalaryAndNoticePeriods.findByIdAndDelete(req.params.id);
    if (!deletedSalaryAndNoticePeriods) {
      res.status(404).json({ message: "Salary and notice periods details not found" });
      return;
    }
    res.status(200).json(deletedSalaryAndNoticePeriods);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSalaryAndNoticePeriods,
  getSalaryAndNoticePeriods,
  getSalaryAndNoticePeriodsById,
  updateSalaryAndNoticePeriods,
  deleteSalaryAndNoticePeriods,
};
