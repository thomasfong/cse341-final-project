const express = require('express');
const router = express();

const classesController = require('../controllers/classes');
const validation = require('../middleware/validate');

router.get('/', classesController.getAll);

router.get('/:id', classesController.getSingle);

router.post('/', validation.saveClass, classesController.createClass);

router.put('/:id', validation.saveClass, ClasssController.updateClass);

router.delete('/:id', classsController.deleteContact);

module.exports = router