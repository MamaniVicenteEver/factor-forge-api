require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DEEPSEEK_API_KEY: process.env.DEEPSEEK_API_KEY
};