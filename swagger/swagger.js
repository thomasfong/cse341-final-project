const swaggerAutogen = require('swagger-autogen')();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); // Path to the generated Swagger file
const express = require('express');
const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3000, () => console.log('API running at http://localhost:3000/api-docs'));
const doc = {
  info: {
    title: 'Student Management API',
    description: 'API for managing students, classes, and grades.',
  },
  host: 'localhost:3000',
  schemes: ['http, https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);





