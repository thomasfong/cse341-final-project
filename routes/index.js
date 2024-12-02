const routes = require("express").Router();

routes.get('/', (req, res) => {
  // #swagger.tags=["Hello World"]
    res.send("Hello Home Page ...");
  });


module.exports = routes;