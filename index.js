const { startServer, app } = require('./src/infrastructure/config/server');
const logger = require('./src/infrastructure/config/logger');

const server = startServer();

// Implementacion de Factor IX: Cierre gracioso (Graceful Shutdown)
const shutdown = () => {
  logger.info('Iniciando proceso de apagado (Disposability)...');
  server.close(() => {
    logger.info('Servidor HTTP cerrado.');
    process.exit(0);
  });

  // Forzar cierre tras 10 segundos
  setTimeout(() => {
    logger.error('No se pudo cerrar ordenadamente, forzando salida.');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);