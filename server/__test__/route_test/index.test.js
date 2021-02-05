const request = require("supertest");
const app = require("../../app");
const connection = require("../../database/config/connection");
const build = require("../../database/config/build");

beforeEach(() => build());
afterAll(() => connection.end());

describe("Test POST /api/v1/user/:id/category/:categoryId/food/:foodId Route", () => {

  test("Should return successfully added", (done) => {
    const reqFood = {
      grams: 3,
    };

    return request(app)
      .post("/api/v1/user/1/category/1/food/1")
      .set({
        'Content-Type': 'application/json',
      })
      .send(JSON.stringify(reqFood))
      .expect(200)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Food Successfully Added')
        done();
      });
  });

  test("Should return must be a positive number", (done) => {
    const reqFood = {
      grams: -3,
    };

    return request(app)
      .post("/api/v1/user/1/category/1/food/1")
      .set({
        'Content-Type': 'application/json',
      })
      .send(JSON.stringify(reqFood))
      .expect(400)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).toBe(400);
        expect(res.body.message).toBe('\"grams\" must be a positive number')
        done();
      });
  });

});



  