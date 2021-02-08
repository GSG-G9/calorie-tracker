const request = require('supertest');
const app = require('../../app');
const dbBuild = require('../../database/config/build');
const connection = require('../../database/config/connection');

describe('authentication', () => {
  beforeEach(() => dbBuild());
  afterAll(() => connection.end());
  describe('sign up routes tests', () => {
    const userData = {
      lastName: 'iman96',
      email: 'lina@gmail.com',
      password: '2062519sjj',
      firstName: 'iman sedky',
      gender: 'f',
      age: '24',
      weight: '50',
      height: '155',
      goalWeight: '48',
      activityId: '1',
    };

    test('check if email exist, status should be 409 and (user already exist) message', async () => {
      const {
        body: { message },
        statusCode,
      } = await request(app)
        .post('/api/v1/signup')
        .set({
          'Content-Type': 'application/json',
        })
        .send(JSON.stringify(userData));
      expect(message).toBe('user already exists');
      expect(statusCode).toBe(409);
    });

    test('check bad request, status should be 400 and (first name is required) message', async () => {
      const {
        body: { message },
        statusCode,
      } = await request(app)
        .post('/api/v1/signup')
        .send({
          ...userData,
          firstName: '',
        });

      expect(statusCode).toBe(400);
      expect(message).toBe('"firstName" is not allowed to be empty');
    });

    test('check not found request, status should be 404 and (activity id not found) message', async () => {
      const {
        body: { message },
        statusCode,
      } = await request(app)
        .post('/api/v1/signup')
        .send({
          ...userData,
          activityId: '500',
          email: 'notfoundemail@gmail.com',
        });
      expect(statusCode).toBe(404);
      expect(message).toBe('activity id not found');
    });

    test('check successful sign-up, status should be 200 and (signed up successfully) message', async () => {
      const {
        body: { message },
        statusCode,
      } = await request(app)
        .post('/api/v1/signup')
        .set({
          'Content-Type': 'application/json',
        })
        .send({
          ...userData,
          email: 'imans.ewaiti@gmail.com',
        });
      expect(statusCode).toBe(201);
      expect(message).toBe('signed up successfully');
    });
  });

  describe('POST /api/v1/login', () => {
    test('router returns 400 if there is no password', async () => {
      const { statusCode } = await request(app)
        .post('/api/v1/login')
        .send({ email: 'user@gmail.com', password: '' });
      return expect(statusCode).toBe(400);
    });

    test('router returns 400 if there is no email', async () => {
      const { statusCode } = await request(app)
        .post('/api/v1/login')
        .send({ email: '', password: 'hohoho123123' });
      return expect(statusCode).toBe(400);
    });

    test('router returns 200 if user logged in successfully', async () => {
      const { statusCode } = await request(app).post('/api/v1/login').send({
        email: 'zein@gmail.com',
        password: 'zein2002jendeya',
      });

      return expect(statusCode).toBe(200);
    });
    test('router returns 401 if password is incorrect', async () => {
      const {
        body: { message },
        statusCode,
      } = await request(app)
        .post('/api/v1/login')
        .set({
          'Content-Type': 'application/json',
        })
        .send(
          JSON.stringify({ email: 'zein@gmail.com', password: 'zein2002j' }),
        );
      expect(statusCode).toBe(401);
      return expect(message).toBe('invalid password');
    });

    test('router returns 401 if email is incorrect', async () => {
      const { statusCode } = await request(app)
        .post('/api/v1/login')
        .send({ email: 'user@gmail.com', password: 'dddddd888' });
      return expect(statusCode).toBe(422);
    });
  });

  it('router returns 200', async () => {
    const { status } = await request(app)
      .get('/api/v1/healthnews/')
      .expect(200);
    expect(status).toBe(200);
  });
});
