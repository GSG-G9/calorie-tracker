const cookie = require('cookie');
const request = require('supertest');
const app = require('../app');
const dbBuild = require('../database/config/build');
const connection = require('../database/config/connection');
const getUserByEmail = require('../database/queries/getEmail');
const { getNews, getFoodCategory } = require('../database/queries');

describe('authentication', () => {
  beforeEach(() => dbBuild());
  afterAll(() => connection.end());
  let tokenCategory;

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
        header: { 'set-cookie': cookiesCategory },
      } = await request(app).post('/api/v1/login').send({
        email: 'zein@gmail.com',
        password: 'zein2002jendeya',
      });
      tokenCategory = cookie.parse(cookiesCategory[0]).token;
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
        id: 4,
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
    const allContent = rows.map((row) => row.content);
    return expect(allContent).toContain(
      'Researchers simulated a tailgating situation with a small group of overweight but healthy men and examined the impact of eating and drinking on their livers using blood tests and a liver scan.',
    );
  });

  describe('health news', () => {
    it('router returns 200 after sending the news', async () => {
      const { status } = await request(app)
        .get('/api/v1/healthnews/')
        .expect(200);
      expect(status).toBe(200);
    });
  });

  describe('getFoodCategory query', () => {
    test('should get Food in Category from the userFoodRelation table', async () => {
      const { rows } = await getFoodCategory(4, 2);
      return expect(rows[0].food_name).toEqual('maqlobah');
    });
  });

  describe('food category', () => {
    it('router returns 401 if there is no user logged', async () => {
      const { status } = await request(app)
        .get('/api/v1/user/0/category/1/food')
        .expect(401);
      expect(status).toBe(401);
    });

    it('router returns 200 if there is no food in the category', async () => {
      const { status } = await request(app)
        .get('/api/v1/user/4/category/1/food')
        .set('Cookie', [`token=${tokenCategory}`])
        .expect(200);
      expect(status).toBe(200);
    });

    it('router returns 200 if there is food in the category', async () => {
      const { status } = await request(app)
        .get('/api/v1/user/4/category/2/food')
        .set('Cookie', [`token=${tokenCategory}`])
        .expect(200);
      expect(status).toBe(200);
    });
  });
});
