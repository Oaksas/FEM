import app from '../server';
import supertest from 'supertest';

describe('Get /', () => {
    it('should return 200 OK', async () => {
        const res = await supertest(app).get('/');
        expect(res.status).toBe(200);

    });

});