const express = require('express');
const router = express();

const gradesController = require('../controllers/grades');
const validation = require('../middleware/validation-middleware');

router.get('/', gradesController.getAll);

router.get('/:id', gradesController.getSingle);

router.post('/', validation.saveGrade, gradesController.createGrade);

router.put('/:id', validation.saveGrade, gradesController.updateGrade);

router.delete('/:id', gradesController.deleteGrade);

module.exports = router