const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewToolkitSchema = new Schema({
  applicantName: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  outlet: {
    type: String,
    required: true
  },
  interviewerName: {
    type: String,
    required: true
  },
  interviewDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('InterviewToolkit', interviewToolkitSchema);
