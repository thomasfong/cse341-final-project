const express = require('express');
const router = express();

const contactsController = require('../controllers/students');
const validation = require('../middleware/validate');

router.get('/', studentsController.getAll);

router.get('/:id', studentsController.getSingle);

router.post('/', validation.saveStudent, studentsController.createstudent);

router.put('/:id', validation.saveStudent, studentsController.updateStudent);

router.delete('/:id', studentsController.deleteStudent);

module.exports = router