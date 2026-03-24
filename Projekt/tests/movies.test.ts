import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app';

describe('Movies controller', () => {
  let token: string;

  before(async () => {
    const email = `movie${Date.now()}@test.com`;
    await request(app).post('/users').send({
      name: 'Movie User',
      email,
      password: 'moviepass'
    });

    const loginRes = await request(app).post('/users/login').send({
      email,
      password: 'moviepass'
    });
    
    token = loginRes.body.token;
  });

  describe('GET /movies', () => {
    it('Should return list of movies', async () => {
      const response = await request(app).get('/movies');
      expect(response.status).to.equal(200);
      expect(response.body.success).to.equal(true);
      expect(response.body.movies).to.be.an('array');
    });
  });

  describe('POST /movies', () => {
    it('Should create movie with valid token', async () => {
      const response = await request(app)
        .post('/movies')
        .set('Authorization', `Bearer ${token}`)
        .send({
          title: 'Test Movie',
          year: 2024,
          genre_id: 1,
          director_id: 1
        });
      
      expect(response.status).to.equal(201);
    });

    it('Should return 401 without token', async () => {
      const response = await request(app)
        .post('/movies')
        .send({
          title: 'Fail Movie',
          year: 2024,
          genre_id: 1,
          director_id: 1
        });
      
      expect(response.status).to.equal(401);
    });
  });
});