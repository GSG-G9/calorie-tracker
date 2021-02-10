const request = require('supertest');
const cookie = require('cookie');
const app = require('../app');
const dbBuild = require('../database/config/build');
const connection = require('../database/config/connection');
const getUserByEmail = require('../database/queries/getEmail');
const {
  getNews,
  getFood,
  calculateUserExercisesCalories,
  calculateUserFoodCalories,
  getUserCalories,
} = require('../database/queries');

describe('authentication', () => {
  beforeEach(() => dbBuild());
  afterAll(() => connection.end());
  let token;

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
      const {
        statusCode,
        header: { 'set-cookie': cookies },
      } = await request(app).post('/api/v1/login').send({
        email: 'zein@gmail.com',
        password: 'zein2002jendeya',
      });
      token = cookie.parse(cookies[0]).token;
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
  describe('Test GET /api/v1/food Route', () => {
    test('GET /api/v1/food Route Should return response with status code 200 and all Food data with secret key = hello', async () => {
      const res = await request(app)
        .get('/api/v1/food')
        .set('Cookie', [`token=${token}`])
        .expect(200);
      const actual = res.body;
      const foodData = [
        { id: 1, food_type_id: 1, food_name: 'egg', image: null },
        { id: 2, food_type_id: 1, food_name: 'chocolate', image: null },
        { id: 3, food_type_id: 1, food_name: 'checken', image: null },
        { id: 4, food_type_id: 1, food_name: 'icecream', image: null },
        { id: 5, food_type_id: 1, food_name: 'avokado', image: null },
        { id: 6, food_type_id: 1, food_name: 'fish', image: null },
        { id: 7, food_type_id: 2, food_name: 'pizza', image: null },
        { id: 8, food_type_id: 2, food_name: 'maqlobah', image: null },
        { id: 9, food_type_id: 1, food_name: 'checken pizza', image: null },
        { id: 10, food_type_id: 1, food_name: 'cake', image: null },
        { id: 11, food_type_id: 1, food_name: 'coffee', image: null },
        { id: 12, food_type_id: 1, food_name: 'apple', image: null },
        { id: 13, food_type_id: 2, food_name: 'Falafel', image: null },
        { id: 14, food_type_id: 1, food_name: 'egg', image: null },
        { id: 15, food_type_id: 1, food_name: 'chocolate', image: null },
        { id: 16, food_type_id: 1, food_name: 'checken', image: null },
        { id: 17, food_type_id: 1, food_name: 'icecream', image: null },
        { id: 18, food_type_id: 1, food_name: 'avokado', image: null },
        { id: 19, food_type_id: 1, food_name: 'fish', image: null },
        { id: 20, food_type_id: 2, food_name: 'mosakhan', image: null },
        { id: 21, food_type_id: 2, food_name: 'maqlobah', image: null },
        {
          id: 22,
          food_type_id: 1,
          food_name: 'checken pizza',
          image: null,
        },
        { id: 23, food_type_id: 1, food_name: 'cake', image: null },
        { id: 24, food_type_id: 1, food_name: 'coffee', image: null },
        { id: 25, food_type_id: 1, food_name: 'apple', image: null },
        { id: 26, food_type_id: 2, food_name: 'Falafel', image: null },
      ];

      const expected = { message: 'success', status: 200, data: foodData };
      expect(actual).toEqual(expected);
    });
  });
  describe('Test getFood Query', () => {
    test('should return all data from food table', async () => {
      const foodData = [
        { id: 1, food_type_id: 1, food_name: 'egg', image: null },
        { id: 2, food_type_id: 1, food_name: 'chocolate', image: null },
        { id: 3, food_type_id: 1, food_name: 'checken', image: null },
        { id: 4, food_type_id: 1, food_name: 'icecream', image: null },
        { id: 5, food_type_id: 1, food_name: 'avokado', image: null },
        { id: 6, food_type_id: 1, food_name: 'fish', image: null },
        { id: 7, food_type_id: 2, food_name: 'pizza', image: null },
        { id: 8, food_type_id: 2, food_name: 'maqlobah', image: null },
        { id: 9, food_type_id: 1, food_name: 'checken pizza', image: null },
        { id: 10, food_type_id: 1, food_name: 'cake', image: null },
        { id: 11, food_type_id: 1, food_name: 'coffee', image: null },
        { id: 12, food_type_id: 1, food_name: 'apple', image: null },
        { id: 13, food_type_id: 2, food_name: 'Falafel', image: null },
        { id: 14, food_type_id: 1, food_name: 'egg', image: null },
        { id: 15, food_type_id: 1, food_name: 'chocolate', image: null },
        { id: 16, food_type_id: 1, food_name: 'checken', image: null },
        { id: 17, food_type_id: 1, food_name: 'icecream', image: null },
        { id: 18, food_type_id: 1, food_name: 'avokado', image: null },
        { id: 19, food_type_id: 1, food_name: 'fish', image: null },
        { id: 20, food_type_id: 2, food_name: 'mosakhan', image: null },
        { id: 21, food_type_id: 2, food_name: 'maqlobah', image: null },
        {
          id: 22,
          food_type_id: 1,
          food_name: 'checken pizza',
          image: null,
        },
        { id: 23, food_type_id: 1, food_name: 'cake', image: null },
        { id: 24, food_type_id: 1, food_name: 'coffee', image: null },
        { id: 25, food_type_id: 1, food_name: 'apple', image: null },
        { id: 26, food_type_id: 2, food_name: 'Falafel', image: null },
      ];
      const { rows } = await getFood();
      return expect(rows).toEqual(foodData);
    });
  });
  describe('Test GET /api/v1/user/calories', () => {
    test('should return status 200 and an object with correct data {message:"success",status:200,data:{}}', async () => {
      const res = await request(app)
        .get('/api/v1/user/calories')
        .expect('Content-Type', /json/)
        .set('Cookie', [`token=${token}`])
        .expect(200);
      const expected = {
        status: 200,
        message: 'success',
        data: {
          userCalories: 1500,
          userFoodCalories: 307495,
          userExercisesCalories: 456750,
          remainingCalories: 150755,
        },
      };
      expect(JSON.parse(res.text)).toEqual(expected);
    });
  });

  describe('Test Database Queries', () => {
    const userId = 1;
    test('calculateUserExercisesCalories Query should return calories equal to 456750 of user 1', async () => {
      const {
        rows: [{ userexercisescalories: userExercisesCalories }],
      } = await calculateUserExercisesCalories(userId);
      return expect(userExercisesCalories).toBe(456750);
    });

    test('calculateUserFoodCalories Query should return calories equal to 307495 of user 1', async () => {
      const {
        rows: [{ userfoodcalories: userFoodCalories }],
      } = await calculateUserFoodCalories(userId);
      return expect(userFoodCalories).toBe(307495);
    });

    test('getUserCalories Query should return calories equal to 1500 of user 1', async () => {
      const {
        rows: [{ usercalories: userCalories }],
      } = await getUserCalories(userId);
      return expect(userCalories).toBe(1500);
    });
  });

  describe('Test DataBase', () => {
    test('router returns 200', async () => {
      const { status } = await request(app)
        .get('/api/v1/healthnews/')
        .expect(200);
      expect(status).toBe(200);
    });
    test('getUserByEmail query, number of rows when email is exist will be 1', async () => {
      const { rows } = await getUserByEmail('lina@gmail.com');
      expect(rows).toHaveLength(1);
      expect(rows[0].firstname).toBe('lina');
    });

    test('getUserByEmail query, number of rows when email is not exist will be 0', async () => {
      const { rows } = await getUserByEmail('lana@gmail.com');
      expect(rows).toHaveLength(0);
    });

    test('should return the user zein jendeya from users table', async () => {
      const userData = [
        {
          id: 8,
          activity_id: 1,
          firstname: 'zein',
          lastname: 'jendeya',
          email: 'zein@gmail.com',
          password:
            '$2b$11$5IkI6Vvo5xGqxgRw4I6uWeCJCyJyd3k7WPvnW.fgjZZQG6aSSdQLK',
          gender: 'f',
          height: 1.68,
          weight: 63,
          age: 19,
          goalweight: null,
          image:
            'https://i.pinimg.com/564x/a9/f6/e3/a9f6e37a1211793bd2f45f161dc3dfbb.jpg',
          dailycaloriesgoal: 2099.196,
        },
      ];
      const { rows } = await getUserByEmail('zein@gmail.com');

      return expect(rows).toEqual(userData);
    });

    test('should get news from the news table', async () => {
      const { rows } = await getNews();
      return expect(rows[5].content).toEqual(
        'Researchers simulated a tailgating situation with a small group of overweight but healthy men and examined the impact of eating and drinking on their livers using blood tests and a liver scan.',
      );
    });
  });
});
