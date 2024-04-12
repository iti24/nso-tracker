const InterviewChecklist = require('../models/interviewChecklist');

const addInterviewChecklist = async (req, res) => {
  try {
    const checklist = new InterviewChecklist(req.body);
    await checklist.save();
    res.status(201).json({ message: "Interview checklist details saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getInterviewChecklists = async (req, res) => {
  try {
    const checklists = await InterviewChecklist.find();
    res.status(200).json(checklists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getInterviewChecklistById = async (req, res) => {
  try {
    const checklist = await InterviewChecklist.findById(req.params.id);
    if (!checklist) {
      res.status(404).json({ message: "Interview checklist details not found" });
      return;
    }
    res.status(200).json(checklist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateInterviewChecklist = async (req, res) => {
  try {
    const checklist = await InterviewChecklist.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!checklist) {
      res.status(404).json({ message: "Interview checklist update failed" });
      return;
    }
    res.status(200).json(checklist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteInterviewChecklist = async (req, res) => {
  try {
    const deletedChecklist = await InterviewChecklist.findByIdAndDelete(req.params.id);
    if (!deletedChecklist) {
      res.status(404).json({ message: "Interview checklist details not found" });
      return;
    }
    res.status(200).json(deletedChecklist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addInterviewChecklist,
  getInterviewChecklists,
  getInterviewChecklistById,
  updateInterviewChecklist,
  deleteInterviewChecklist,
};
