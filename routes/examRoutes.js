const express = require('express');
const { getExams, createExam, updateExam, deleteExam } = require('../controllers/examController');
const router = express.Router();

router.get('/', getExams);           // Fetch all exams
router.post('/', createExam);        // Create a new exam
router.put('/:id', updateExam);      // Update an exam
router.delete('/:id', deleteExam);   // Delete an exam

module.exports = router;
