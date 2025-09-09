const request = require('supertest');
const app = require('../app'); // Make sure this path points to your main app file

describe('Health Endpoints', () => {
    it('should return 200 and health info', async () => {
        const res = await request(app).get('/api/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'OK');
    });

    it('should return detailed info', async () => {
        const res = await request(app).get('/api/health/detailed');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('uptime');
        expect(res.body).toHaveProperty('memoryUsage');
    });
});