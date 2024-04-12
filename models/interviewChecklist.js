const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewChecklistSchema = new Schema({
  welcome: {
    type: Boolean,
    required: true
  },
  availability: {
    type: Boolean,
    required: true
  },
  age: {
    type: Boolean,
    required: true
  },
  educationalCertificates: {
    type: Boolean,
    required: true
  },
  appearanceCompliance: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('InterviewChecklist', interviewChecklistSchema);
