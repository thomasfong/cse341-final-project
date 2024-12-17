const express = require('express');
const router = express();

const examsController = require('../controllers/exams');
const validation = require('../middleware/validate');

router.get('/', examsController.getAll);

router.get('/:id', examsController.getSingle);

router.post('/', validation.savegrade, examsController.createExam);

router.put('/:id', validation.saveGrade, examsController.updateExam);

router.delete('/:id', examsController.deleteExam);

module.exports = router