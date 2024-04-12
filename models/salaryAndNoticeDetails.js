const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaryAndNoticePeriodsSchema = new Schema({
    previousSalary: {
        type: Number,
        required: true
    },
    salaryExpectation: {
        type: Number,
        required: true
    },
    noticePeriod: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('SalaryAndNoticePeriods', salaryAndNoticePeriodsSchema);
