const request = require('supertest');
const { app } = require('../src/infrastructure/config/server');

describe('GET /health', () => {
  it('Debe responder con un estado 200 y formato JSON', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('OK');
  });
});