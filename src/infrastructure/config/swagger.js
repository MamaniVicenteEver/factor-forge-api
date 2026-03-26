const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Factor-Forge AI API',
      version: '1.0.0',
      description: 'API para la generacion de blueprints arquitectonicos basados en 12-Factor App'
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor de desarrollo'
      }
    ]
  },
  apis: ['./src/infrastructure/routes/*.js', './src/infrastructure/controllers/*.js']
};

const specs = swaggerJsdoc(options);
module.exports = specs;