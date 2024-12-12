const express = require("express")
const router = new express.Router();
const classController = require('../controllers/classes');
const validate = require('../middleware/validation-middleware');

router.get("/", classController.getAll);
router.get("/:ClassId", classController.getSingle);
router.post(
    '/',
    // validate.saveStudent,
    classController.createClass
);
router.put(
    '/:id',
    // validate.saveStudent,
    classController.updateClass
);
router.delete(
    '/:id',
    classController.deleteClass);

module.exports = router;