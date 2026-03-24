import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app';
import jwt from 'jsonwebtoken';

describe('Authentication', () => {
  let validToken: string;
  const jwtSecret = process.env.JWT_SECRET || 'default-secret';

  before(async () => {
    const email = `auth${Date.now()}@test.com`;
    await request(app).post('/users').send({
      name: 'Auth User',
      email,
      password: 'authpass'
    });

    const loginRes = await request(app).post('/users/login').send({
      email,
      password: 'authpass'
    });
    
    validToken = loginRes.body.token;
  });

  it('Should allow access with valid token', async () => {
    const response = await request(app)
      .post('/movies')
      .set('Authorization', `Bearer ${validToken}`)
      .send({
        title: 'Auth Test',
        year: 2024,
        genre_id: 1,
        director_id: 1
      });
    
    expect(response.status).not.to.equal(401);
  });

  it('Should return 403 with invalid token', async () => {
    const response = await request(app)
      .post('/movies')
      .set('Authorization', 'Bearer invalid_token')
      .send({
        title: 'Fail',
        year: 2024,
        genre_id: 1,
        director_id: 1
      });
    
    expect(response.status).to.equal(403);
  });

  it('Should return 401 without token', async () => {
    const response = await request(app)
      .post('/movies')
      .send({
        title: 'Fail',
        year: 2024,
        genre_id: 1,
        director_id: 1
      });
    
    expect(response.status).to.equal(401);
  });

  it('Should return 403 with expired token', async () => {
    const expiredToken = jwt.sign(
      { id: 1, email: 'test@test.com' },
      jwtSecret,
      { expiresIn: '-1s' }
    );

    const response = await request(app)
      .post('/movies')
      .set('Authorization', `Bearer ${expiredToken}`)
      .send({
        title: 'Fail',
        year: 2024,
        genre_id: 1,
        director_id: 1
      });
    
    expect(response.status).to.equal(403);
  });
});