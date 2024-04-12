const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const evaluationSchema = new Schema({
  checklist: {
    type: Number,
    required: true
  },
  jobFit: {
    type: Number,
    required: true
  },
  teamwork: {
    type: Number,
    required: true
  },
  aptitude: {
    type: Number,
    required: true
  },
  customerEngagement: {
    type: Number,
    required: true
  },
  speedAgreement: {
    type: Number,
    required: true
  },
  willingnessToLearn: {
    type: Number,
    required: true
  },
  friendlinessDuringInterviewProcess: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Evaluation', evaluationSchema);
