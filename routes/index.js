const express = require("express")
const router = new express.Router();
const students = require('./students');
const classRouter = require('./class');
const grades = require('./grades');
const exams = require('./exams');
const swaggerRoute = require('./swagger');

router.use('/', swaggerRoute);

router.get('/', (req, res) => {
    //#swagger.tags=['Welcome']
    res.send('Welcome to Student Webservices');
});

router.use('/students', students);
router.use('/class', classRouter);
router.use('/grades', grades);
router.use('/exams', exams);


module.exports = router;
