const express = require('express');
const { PORT } = require('./env');
const healthRoutes = require('../routes/health-routes');
const blueprintRoutes = require('../routes/blueprint-routes');
const logger = require('./logger');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use('/health', healthRoutes);
app.use('/v1/blueprint', blueprintRoutes);

const startServer = () => {
  const server = app.listen(PORT, () => {
    logger.info(`Servidor iniciado correctamente en el puerto: ${PORT}`);
  });
  return server;
};

module.exports = { app, startServer };