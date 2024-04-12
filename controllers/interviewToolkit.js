const InterviewToolkit = require('../models/interviewToolkit');

const addInterviewToolkit = async (req, res) => {
  try {
    const toolkit = new InterviewToolkit(req.body);
    await toolkit.save();
    res.status(201).json({ message: "Interview toolkit details saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getInterviewToolkits = async (req, res) => {
  try {
    const toolkits = await InterviewToolkit.find();
    res.status(200).json(toolkits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getInterviewToolkitById = async (req, res) => {
  try {
    const toolkit = await InterviewToolkit.findById(req.params.id);
    if (!toolkit) {
      res.status(404).json({ message: "Interview toolkit details not found" });
      return;
    }
    res.status(200).json(toolkit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateInterviewToolkit = async (req, res) => {
  try {
    const toolkit = await InterviewToolkit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!toolkit) {
      res.status(404).json({ message: "Interview toolkit update failed" });
      return;
    }
    res.status(200).json(toolkit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteInterviewToolkit = async (req, res) => {
  try {
    const deletedToolkit = await InterviewToolkit.findByIdAndDelete(req.params.id);
    if (!deletedToolkit) {
      res.status(404).json({ message: "Interview toolkit details not found" });
      return;
    }
    res.status(200).json(deletedToolkit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addInterviewToolkit,
  getInterviewToolkits,
  getInterviewToolkitById,
  updateInterviewToolkit,
  deleteInterviewToolkit,
};
