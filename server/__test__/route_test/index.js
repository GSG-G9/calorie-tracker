const request = require('supertest');
const app = require('../../app');
const connection = require("../../database/config/connection");
const build = require("../../database/config/build");

describe('Test Routes', () => {
    beforeEach(() => build());
    afterAll(()=> connection.end());
    
    test('Test POST /api/v1/user/:id/Food Route', (done) => {

        const reqFood = {
            food_id: 1,
            food_category_id: 1,
          };

      return request(app)
      .post('/api/v1/user/1/Food')
      .send(reqFood)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(JSON.parse(res.text)).toBe({ data: null, message: "success", status: 200 });
        done();
      });

  });