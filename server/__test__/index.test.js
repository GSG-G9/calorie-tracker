const request = require("supertest");
const app = require("../app");
const dbBuild = require("../database/config/build");
const connection = require("../database/config/connection");
const getUserByEmail = require("../database/queries/getEmail");

beforeEach(() => dbBuild());
afterAll(() => connection.end());

describe("sign up routes tests", () => {
  const userData = {
    lastName: "iman96",
    email: "lina@gmail.com",
    password: "2062519sjj",
    firstName: "iman sedky",
    gender: "f",
    age: "24", 
    weight: "50",
    height: "155",
    goalWeight: "48",
    activity_id: "1", 
  }

  test(" check if email exist, status should be 409 and (user already exist) message ", (done) => {
    return request(app)
      .post("/api/v1/signup")
      .set({
        "Content-Type": "application/json",
      })
      .send(
        JSON.stringify(userData)
      )
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        const {message} = res.body;

        expect(message).toBe("user already exists");
        expect(res.statusCode).toBe(409);

        return done();
      });
  });

  test("check bad request, status should be 400 and (first name is required) message ", (done) => {
    return request(app)
      .post("/api/v1/signup")
      .expect(400)
      .send(
       {
          ...userData,    
          firstName: "",
        }
      )
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).toBe(400);
        const {message} = res.body;
        expect(message).toBe('"firstName" is not allowed to be empty');
        return done()
      });
  });

    test('check not found request, status should be 404 and (activity id not found) message ', (done) => {
			return request(app)
        .post('/api/v1/signup')
        .expect(404)
				.send({
					...userData,
					activity_id: "500",
					email:'notfoundemail@gmail.com'
				})
				.end((err, res) => {
					if (err) return done(err);
					expect(res.statusCode).toBe(404);
					const { message } = res.body;
					expect(message).toBe('activity id not found');
					return done();
				});
		});

  test("check successful sign-up, status should be 200 and (signed up successfully) message", (done) => {
    return request(app)
			.post('/api/v1/signup')
			.set({
				'Content-Type': 'application/json',
			})
			.send({
				...userData,
				email: 'imans.ewaiti@gmail.com',
			})
			.expect(201)
			.end((err, res) => {
				if (err) return done(err);
				expect(res.statusCode).toBe(201);
				const { message } = res.body;
				expect(message).toBe('signed up successfully');
				return done();
			});
  });
});

describe("sign up queries tests", () => {

  test("test getUserByEmail query, number of rows when email is exist will be 1", async () => {
   
    const { rows } = await getUserByEmail("lina@gmail.com");  
      expect(rows).toHaveLength(1);  
      expect(rows[0].firstname).toBe("lina");
    

  });

  test("test getUserByEmail query, number of rows when email is not exist will be 0", async () => {
    const { rows } = await getUserByEmail("lana@gmail.com");
     expect(rows).toHaveLength(0);

  });
});
