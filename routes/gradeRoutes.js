const express = require('express');
const { getGrades, createGrade, updateGrade, deleteGrade } = require('../controllers/gradeController');

const router = express.Router();

// Fetch all grades
router.get('/', getGrades);

// Add a new grade
router.post('/', createGrade);

// Update an existing grade
router.put('/:id', updateGrade);

// Delete a grade
router.delete('/:id', deleteGrade);

module.exports = router;
