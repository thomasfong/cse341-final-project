const express = require('express');
const router = express();

const contactsController = require('../controllers/grades');
const validation = require('../middleware/validate');

router.get('/', gradesController.getAll);

router.get('/:id', gradesController.getSingle);

router.post('/', validation.savegrade, gradesController.creategrade);

router.put('/:id', validation.saveGrade, gradesController.updateGrade);

router.delete('/:id', GradesController.deleteContact);

module.exports = router