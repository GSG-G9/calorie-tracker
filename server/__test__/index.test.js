const request = require("supertest");
const app = require("../app");
const dbBuild = require("../database/config/build");
const connection = require("../database/config/connection");
const getUserByEmail = require("../database/queries/getEmail");

beforeEach(() => dbBuild());
afterAll(() => connection.end());

describe("sign up routes tests", () => {
  test(" check if email exist, status should be 409 and (user already exist)message ", (done) => {
    return request(app)
      .post("/api/v1/signup")
      .set({
        "Content-Type": "application/json",
      })
      .send(
        JSON.stringify({
          lastName: "iman96",
          email: "lina@gmail.com",
          password: "123abc",
          firstName: "iman sedky",
          gender: "f",
          minAge: "24",
          maxAge: "40",
          weight: "50",
          height: "155",
          goalWeight: "48",
          activity: "active",
        })
      )
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toBe("user already exists");
        expect(res.statusCode).toBe(409);

        return done();
      });
  });

  test("check bad request, status should be 400 and (first name is required) message ", (done) => {
    return request(app)
      .post("/api/v1/signup")
      .expect(400)
      .send(
        JSON.stringify({
          email: "israssa25@gmail.com",
          password: "123abc",
          firstName: "",
          gender: "f",
          minAge: "24",
          maxAge: "40",
          weight: "510",
          height: "155",
          goalWeight: "48",
          username: "iman",
          activity: "active",
        })
      )
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(400);
        expect(res.body.message).toBe('"firstName" is required');

        done();
      });
  });

  test("check successful sign-up, status should be 200 and (signed up successfully) message", (done) => {
    return request(app)
      .post("/api/v1/signup")
      .set({
        "Content-Type": "application/json",
      })
      .send(
        JSON.stringify({
          lastName: "iman96",
          email: "imans.ewaiti@gmail.com",
          password: "123abc",
          firstName: "iman sedky",
          gender: "f",
          minAge: "24",
          maxAge: "40",
          weight: "50",
          height: "155",
          goalWeight: "48",
          activity: "active",
        })
      )
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("signed up successfully");
        return done();
      });
  });
});

describe("sign up queries tests", () => {
  test("test getUserByEmail query, number of rows when email is exist will be 1", async () => {
    const { rowCount } = await getUserByEmail("lina@gmail.com");
    return expect(rowCount).toBe(1);
  });

  test("test getUserByEmail query, number of rows when email is not exist will be 0", async () => {
    const { row } = await getUserByEmail("lana@gmail.com");
    return expect(rowCount).toBe(0);
  });
});
