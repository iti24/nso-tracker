const Interview = require('../models/interviewquestionResponse');

const createInterview = async (req, res) => {
  try {
    const interview = new Interview(req.body);
    await interview.save();
    res.status(201).json({ message: "Interview details saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find();
    res.status(200).json(interviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getInterviewById = async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);
    if (!interview) {
      res.status(404).json({ message: "Interview details not found" });
      return;
    }
    res.status(200).json(interview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateInterview = async (req, res) => {
  try {
    const interview = await Interview.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!interview) {
      res.status(404).json({ message: "Interview update failed" });
      return;
    }
    res.status(200).json(interview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteInterview = async (req, res) => {
  try {
    const deletedInterview = await Interview.findByIdAndDelete(req.params.id);
    if (!deletedInterview) {
      res.status(404).json({ message: "Interview details not found" });
      return;
    }
    res.status(200).json(deletedInterview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createInterview,
  getInterviews,
  getInterviewById,
  updateInterview,
  deleteInterview,
};
