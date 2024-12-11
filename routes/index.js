const express = require("express")
const router = new express.Router();
const students = require('./students');
const swaggerRoute = require('./swagger');

router.use('/', swaggerRoute);
/*
router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World');
});
*/
router.use('/students', students);

module.exports = router;