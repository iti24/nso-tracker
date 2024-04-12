const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewSchema = new Schema({
  jobFit: {
    type: String,
    required: true
  },
  teamwork: {
    type: String,
    required: true
  },
  initiative: {
    type: String,
    required: true
  },
  speedAndAccuracy: {
    type: String,
    required: true
  },
  customerEngagement: {
    type: String,
    required: true
  },
  willingnessToLearn: {
    type: String,
    required: true
  },
  observationOfFriendliness: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Interview', interviewSchema);
