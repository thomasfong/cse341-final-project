<<<<<<< HEAD
const express = require("express")
const router = new express.Router();
const studentsController = require('../controllers/students');
const validate = require('../middleware/validation-middleware');

router.get("/", studentsController.getAll);
router.get("/:id", studentsController.getSingle);
router.post(
    '/',
    validate.saveStudent,
    studentsController.createStudent
);
router.put(
    '/:id',
    validate.saveStudent,
    studentsController.updateStudent
);
router.delete(
    '/:id',
    studentsController.deleteStudent);

module.exports = router;
=======
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
>>>>>>> 68af191a95c195b3b25f5adde136f34b53c3cdbb
