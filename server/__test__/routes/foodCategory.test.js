const request = require('supertest');
const app = require('../../app');
const dbBuild = require('../../database/config/build');
const connection = require('../../database/config/connection');

describe('food category', () => {
  beforeEach(() => dbBuild());
  afterAll(() => connection.end());

  it('router returns 401 if there is no user logged', async () => {
    const { status } = await request(app)
      .get('/api/v1/user/0/category/1/food')
      .expect(401);
    expect(status).toBe(401);
  });

  it('router returns 200 and sends all foods in the table', async () => {
    const { status } = await request(app)
      .get('/api/v1/user/4/category/1/food')
      .expect(200);
    expect(status).toBe(200);
  });
});
