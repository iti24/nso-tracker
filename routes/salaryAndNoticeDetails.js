const express = require('express');
const router = express.Router();
const {
    createSalaryAndNoticePeriods,
    getSalaryAndNoticePeriodsById,
    getSalaryAndNoticePeriods,
    updateSalaryAndNoticePeriods,
    deleteSalaryAndNoticePeriods,
} = require("../controllers/salaryAndNoticeDetails");

// Create
router.post('/', createSalaryAndNoticePeriods);

// Read
router.get('/:id', getSalaryAndNoticePeriodsById);
router.get('/', getSalaryAndNoticePeriods);

// Update
router.put('/:id', updateSalaryAndNoticePeriods);

// Delete
router.delete('/:id', deleteSalaryAndNoticePeriods);

module.exports = router;
