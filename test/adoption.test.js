import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app.js';

describe('Adoption Router - Functional Tests', () => {
    let createdAdoptionId;

    it('GET /api/adoptions → should return an array', async () => {
    const res = await request(app).get('/api/adoptions');

    expect(res.status).to.equal(200);
    expect(res.body.status).to.equal('success');
    expect(res.body.payload).to.be.an('array');
    });

    it('POST /api/adoptions → should create an adoption', async () => {
    const res = await request(app)
    .post('/api/adoptions')
    .send({ petName: 'Firulais', userName: 'Juan' });

    expect(res.status).to.equal(201);
    expect(res.body.status).to.equal('success');
    expect(res.body.payload).to.have.property('_id');

    createdAdoptionId = res.body.payload._id;
    });

    it('GET /api/adoptions/:id → should return the adoption', async () => {
    const res = await request(app).get(`/api/adoptions/${createdAdoptionId}`);

    expect(res.status).to.equal(200);
    expect(res.body.payload._id).to.equal(createdAdoptionId);
    });

    it('GET /api/adoptions/:id → should fail with invalid id', async () => {
    const res = await request(app).get('/api/adoptions/123');

    expect(res.status).to.equal(400);
    });

    it('PUT /api/adoptions/:id → should update the adoption', async () => {
    const res = await request(app)
    .put(`/api/adoptions/${createdAdoptionId}`)
    .send({ petName: 'Rocky' });

    expect(res.status).to.equal(200);
    expect(res.body.payload.petName).to.equal('Rocky');
    });

    it('DELETE /api/adoptions/:id → should delete the adoption', async () => {
    const res = await request(app).delete(`/api/adoptions/${createdAdoptionId}`);

    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal('Adoption deleted');
    });

    it('DELETE /api/adoptions/:id → should fail if not exists', async () => {
    const res = await request(app).delete(`/api/adoptions/${createdAdoptionId}`);

    expect(res.status).to.equal(404);
    });
});
