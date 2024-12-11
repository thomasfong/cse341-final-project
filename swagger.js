const swaggerAutogen = require('swagger-autogen')();

const doc = {    
    indo: {
        title: 'CSE 340 Final Project',
        description: 'Students API',
    },
    host: 'localhost:8081',
    schemes: ['http', 'https'],
};
 
const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];
 
// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
 
//Run server after it gets generated
//swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//    await import('./index.js');
//});