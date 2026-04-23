const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    test('Réponds 200 avec status ok', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBeDefined();
        expect(response.body.status).toBe('ok');
    });
});

describe('GET /', () => {
    test('Réponds healthy', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('healthy');
    });
});