const logger = require('../config/logger');

const getHealth = (req, res) => {
  logger.info('Solicitud de estado de salud recibida');
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
};

module.exports = { getHealth };