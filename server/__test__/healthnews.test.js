const request = require('supertest');
const app = require('../app');
const dbBuild = require('../database/config/build');
const connection = require('../database/config/connection');

describe('health news', () => {
  beforeEach(() => dbBuild());
  afterAll(() => connection.end());

  it('router returns 200 after sending the news', async () => {
    const { status } = await request(app)
      .get('/api/v1/healthnews/')
      .expect(200);
    expect(status).toBe(200);
  });
});
