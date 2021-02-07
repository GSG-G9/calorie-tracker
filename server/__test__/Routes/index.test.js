/* eslint-disable jest/no-done-callback */
const supertest = require('supertest');
const router = require('../../app');
const build = require('../../database/config/build');
const connection = require('../../database/config/connection');

beforeEach(() => build());
afterAll(() => connection.end());

describe('POST /api/v1/login', () => {
  it('router returns 200', (done) => {
    supertest(router)
      .get('/api/v1/healthnews/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});
