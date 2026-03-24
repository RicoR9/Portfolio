import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app';

describe('Users controller', () => {
  let token: string;

  describe('POST /users', () => {
    it('Should create new user and return 201', async () => {
      const response = await request(app).post('/users').send({
        name: 'Test User',
        email: `test${Date.now()}@test.com`,
        password: 'testpass123'
      });
      expect(response.status).to.equal(201);
    });

    it('Should return 400 for duplicate email', async () => {
      const email = `dup${Date.now()}@test.com`;
      await request(app).post('/users').send({
        name: 'User 1',
        email,
        password: 'pass123'
      });
      
      const response = await request(app).post('/users').send({
        name: 'User 2',
        email,
        password: 'pass456'
      });
      expect(response.status).to.equal(400);
    });
  });

  describe('POST /users/login', () => {
    it('Should login and return token', async () => {
      const email = `login${Date.now()}@test.com`;
      await request(app).post('/users').send({
        name: 'Login User',
        email,
        password: 'loginpass'
      });

      const response = await request(app).post('/users/login').send({
        email,
        password: 'loginpass'
      });
      
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('token');
    });

    it('Should return 401 for wrong password', async () => {
      const email = `wrong${Date.now()}@test.com`;
      await request(app).post('/users').send({
        name: 'Wrong User',
        email,
        password: 'correctpass'
      });

      const response = await request(app).post('/users/login').send({
        email,
        password: 'wrongpass'
      });
      
      expect(response.status).to.equal(401);
    });
  });

  describe('GET /users', () => {
    it('Should return list of users', async () => {
      const response = await request(app).get('/users');
      expect(response.status).to.equal(200);
      expect(response.body.success).to.equal(true);
      expect(response.body.users).to.be.an('array');
    });
  });
});