const express = require('express');
const router = express();

const gradesController = require('../controllers/grades');
const validation = require('../middleware/validate');

router.get('/', gradesController.getAll);

router.get('/:id', gradesController.getSingle);

router.post('/', validation.savegrade, gradesController.createGrade);

router.put('/:id', validation.saveGrade, gradesController.updateGrade);

router.delete('/:id', gradesController.deleteGrade);

module.exports = router