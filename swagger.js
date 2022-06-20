const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Riley Hansen Contacts API',
    description: 'Contacts API'
  },
  host: 'cse341-personal04.herokuapp.com',
  schemes: ['https']
};
// change host to "https://cse341-personal04.herokuapp.com"

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });