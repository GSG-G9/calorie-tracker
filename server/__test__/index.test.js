const cookie = require('cookie');
const request = require('supertest');
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
  getFoodCategory,
  insertFoodQuery,
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
        .send(JSON.stringify({ ...userData, email: 'zein@gmail.com' }));
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
      return expect(statusCode).toBe(401);
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
        {
          id: 1,
          food_type: 'food',
          food_name: 'egg',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Instagram_egg.jpg/220px-Instagram_egg.jpg',
        },
        {
          id: 2,
          food_type: 'food',
          food_name: 'chocolate',
          image:
            'https://vaya.in/recipes/wp-content/uploads/2018/02/Milk-Chocolate-1.jpg',
        },
        {
          id: 3,
          food_type: 'food',
          food_name: 'checken',
          image:
            'https://thestayathomechef.com/wp-content/uploads/2016/06/Fried-Chicken-4-1.jpg',
        },
        {
          id: 4,
          food_type: 'food',
          food_name: 'icecream',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ea/Ice_cream_cone_%28cropped%29.jpg',
        },
        {
          id: 5,
          food_type: 'food',
          food_name: 'avokado',
          image:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Avocados-3d84a3a.jpg?quality=90&resize=960,872',
        },
        {
          id: 6,
          food_type: 'food',
          food_name: 'fish',
          image:
            'https://www.krumpli.co.uk/wp-content/uploads/2019/03/Campfire-Baked-Fish-in-Foil-4-720x720.jpg',
        },
        {
          id: 7,
          food_type: 'meal',
          food_name: 'pizza',
          image:
            'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk',
        },
        {
          id: 8,
          food_type: 'meal',
          food_name: 'maqlobah',
          image: 'https://chefjar.com/wp-content/uploads/2017/04/2-2.jpg',
        },
        {
          id: 9,
          food_type: 'food',
          food_name: 'checken pizza',
          image:
            'https://jeanniestriedandtruerecipes.com/wp-content/uploads/2020/05/Buffalo-Chicken-Pizza-2020-500x500.jpg',
        },
        {
          id: 10,
          food_type: 'food',
          food_name: 'cake',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9CXAFWkzlaQSYLCZGRkf3sU_QXWgcuAryw&usqp=CAU',
        },
        {
          id: 11,
          food_type: 'food',
          food_name: 'coffee',
          image:
            'https://cdn-prod.medicalnewstoday.com/content/images/articles/270/270202/cups-of-coffee.jpg',
        },
        {
          id: 12,
          food_type: 'food',
          food_name: 'apple',
          image:
            'https://bestapples.com/wp-content/uploads/2018/01/envy-apple.jpg',
        },
        {
          id: 13,
          food_type: 'meal',
          food_name: 'Falafel',
          image:
            'https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-1.jpg',
        },
        {
          id: 14,
          food_type: 'food',
          food_name: 'egg',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Instagram_egg.jpg/220px-Instagram_egg.jpg',
        },
        {
          id: 15,
          food_type: 'food',
          food_name: 'chocolate',
          image:
            'https://vaya.in/recipes/wp-content/uploads/2018/02/Milk-Chocolate-1.jpg',
        },
        {
          id: 16,
          food_type: 'food',
          food_name: 'checken',
          image:
            'https://thestayathomechef.com/wp-content/uploads/2016/06/Fried-Chicken-4-1.jpg',
        },
        {
          id: 17,
          food_type: 'food',
          food_name: 'icecream',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ea/Ice_cream_cone_%28cropped%29.jpg',
        },
        {
          id: 18,
          food_type: 'food',
          food_name: 'avokado',
          image:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Avocados-3d84a3a.jpg?quality=90&resize=960,872',
        },
        {
          id: 19,
          food_type: 'food',
          food_name: 'fish',
          image:
            'https://www.krumpli.co.uk/wp-content/uploads/2019/03/Campfire-Baked-Fish-in-Foil-4-720x720.jpg',
        },
        {
          id: 20,
          food_type: 'meal',
          food_name: 'mosakhan',
          image:
            'https://i0.wp.com/www.middleeastmonitor.com/wp-content/uploads/2018/03/2018_2-34-food-blog-7.jpg?quality=85&strip=all&zoom=1&ssl=1',
        },
        {
          id: 21,
          food_type: 'meal',
          food_name: 'maqlobah',
          image: 'https://chefjar.com/wp-content/uploads/2017/04/2-2.jpg',
        },
        {
          id: 22,
          food_type: 'food',
          food_name: 'checken pizza',
          image:
            'https://jeanniestriedandtruerecipes.com/wp-content/uploads/2020/05/Buffalo-Chicken-Pizza-2020-500x500.jpg',
        },
        {
          id: 23,
          food_type: 'food',
          food_name: 'cake',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9CXAFWkzlaQSYLCZGRkf3sU_QXWgcuAryw&usqp=CAU',
        },
        {
          id: 24,
          food_type: 'food',
          food_name: 'coffee',
          image:
            'https://cdn-prod.medicalnewstoday.com/content/images/articles/270/270202/cups-of-coffee.jpg',
        },
        {
          id: 25,
          food_type: 'food',
          food_name: 'apple',
          image:
            'https://bestapples.com/wp-content/uploads/2018/01/envy-apple.jpg',
        },
        {
          id: 26,
          food_type: 'meal',
          food_name: 'Falafel',
          image:
            'https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-1.jpg',
        },
      ];

      const expected = { message: 'success', status: 200, data: foodData };
      expect(actual).toEqual(expected);
    });
  });
  describe('Test getFood Query', () => {
    test('should return all data from food table', async () => {
      const foodData = [
        {
          id: 1,
          food_type: 'food',
          food_name: 'egg',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Instagram_egg.jpg/220px-Instagram_egg.jpg',
        },
        {
          id: 2,
          food_type: 'food',
          food_name: 'chocolate',
          image:
            'https://vaya.in/recipes/wp-content/uploads/2018/02/Milk-Chocolate-1.jpg',
        },
        {
          id: 3,
          food_type: 'food',
          food_name: 'checken',
          image:
            'https://thestayathomechef.com/wp-content/uploads/2016/06/Fried-Chicken-4-1.jpg',
        },
        {
          id: 4,
          food_type: 'food',
          food_name: 'icecream',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ea/Ice_cream_cone_%28cropped%29.jpg',
        },
        {
          id: 5,
          food_type: 'food',
          food_name: 'avokado',
          image:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Avocados-3d84a3a.jpg?quality=90&resize=960,872',
        },
        {
          id: 6,
          food_type: 'food',
          food_name: 'fish',
          image:
            'https://www.krumpli.co.uk/wp-content/uploads/2019/03/Campfire-Baked-Fish-in-Foil-4-720x720.jpg',
        },
        {
          id: 7,
          food_type: 'meal',
          food_name: 'pizza',
          image:
            'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk',
        },
        {
          id: 8,
          food_type: 'meal',
          food_name: 'maqlobah',
          image: 'https://chefjar.com/wp-content/uploads/2017/04/2-2.jpg',
        },
        {
          id: 9,
          food_type: 'food',
          food_name: 'checken pizza',
          image:
            'https://jeanniestriedandtruerecipes.com/wp-content/uploads/2020/05/Buffalo-Chicken-Pizza-2020-500x500.jpg',
        },
        {
          id: 10,
          food_type: 'food',
          food_name: 'cake',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9CXAFWkzlaQSYLCZGRkf3sU_QXWgcuAryw&usqp=CAU',
        },
        {
          id: 11,
          food_type: 'food',
          food_name: 'coffee',
          image:
            'https://cdn-prod.medicalnewstoday.com/content/images/articles/270/270202/cups-of-coffee.jpg',
        },
        {
          id: 12,
          food_type: 'food',
          food_name: 'apple',
          image:
            'https://bestapples.com/wp-content/uploads/2018/01/envy-apple.jpg',
        },
        {
          id: 13,
          food_type: 'meal',
          food_name: 'Falafel',
          image:
            'https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-1.jpg',
        },
        {
          id: 14,
          food_type: 'food',
          food_name: 'egg',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Instagram_egg.jpg/220px-Instagram_egg.jpg',
        },
        {
          id: 15,
          food_type: 'food',
          food_name: 'chocolate',
          image:
            'https://vaya.in/recipes/wp-content/uploads/2018/02/Milk-Chocolate-1.jpg',
        },
        {
          id: 16,
          food_type: 'food',
          food_name: 'checken',
          image:
            'https://thestayathomechef.com/wp-content/uploads/2016/06/Fried-Chicken-4-1.jpg',
        },
        {
          id: 17,
          food_type: 'food',
          food_name: 'icecream',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/e/ea/Ice_cream_cone_%28cropped%29.jpg',
        },
        {
          id: 18,
          food_type: 'food',
          food_name: 'avokado',
          image:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Avocados-3d84a3a.jpg?quality=90&resize=960,872',
        },
        {
          id: 19,
          food_type: 'food',
          food_name: 'fish',
          image:
            'https://www.krumpli.co.uk/wp-content/uploads/2019/03/Campfire-Baked-Fish-in-Foil-4-720x720.jpg',
        },
        {
          id: 20,
          food_type: 'meal',
          food_name: 'mosakhan',
          image:
            'https://i0.wp.com/www.middleeastmonitor.com/wp-content/uploads/2018/03/2018_2-34-food-blog-7.jpg?quality=85&strip=all&zoom=1&ssl=1',
        },
        {
          id: 21,
          food_type: 'meal',
          food_name: 'maqlobah',
          image: 'https://chefjar.com/wp-content/uploads/2017/04/2-2.jpg',
        },
        {
          id: 22,
          food_type: 'food',
          food_name: 'checken pizza',
          image:
            'https://jeanniestriedandtruerecipes.com/wp-content/uploads/2020/05/Buffalo-Chicken-Pizza-2020-500x500.jpg',
        },
        {
          id: 23,
          food_type: 'food',
          food_name: 'cake',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9CXAFWkzlaQSYLCZGRkf3sU_QXWgcuAryw&usqp=CAU',
        },
        {
          id: 24,
          food_type: 'food',
          food_name: 'coffee',
          image:
            'https://cdn-prod.medicalnewstoday.com/content/images/articles/270/270202/cups-of-coffee.jpg',
        },
        {
          id: 25,
          food_type: 'food',
          food_name: 'apple',
          image:
            'https://bestapples.com/wp-content/uploads/2018/01/envy-apple.jpg',
        },
        {
          id: 26,
          food_type: 'meal',
          food_name: 'Falafel',
          image:
            'https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-1.jpg',
        },
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
          userCalories: 2099.196,
          userFoodCalories: 2345.9,
          userExercisesCalories: 248.0625,
          remainingCalories: 1.3584999999998217,
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
      return expect(userExercisesCalories).toBe(248.0625);
    });

    test('calculateUserFoodCalories Query should return calories equal to 308245 of user 1', async () => {
      const {
        rows: [{ userfoodcalories: userFoodCalories }],
      } = await calculateUserFoodCalories(userId);
      return expect(userFoodCalories).toBe(2345.9);
    });

    test('getUserCalories Query should return calories equal to 1500 of user 1', async () => {
      const {
        rows: [{ usercalories: userCalories }],
      } = await getUserCalories(userId);
      return expect(userCalories).toBe(2099.196);
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
      const { rows } = await getUserByEmail('zein@gmail.com');
      expect(rows).toHaveLength(1);
      expect(rows[0].firstname).toBe('zein');
    });

    test('getUserByEmail query, number of rows when email is not exist will be 0', async () => {
      const { rows } = await getUserByEmail('lana@gmail.com');
      expect(rows).toHaveLength(0);
    });

    test('should return the user zein jendeya from users table', async () => {
      const userData = [
        {
          id: 1,
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
        const userID = 1;
        const categoryId = 2;
        const { rows } = await getFoodCategory(userID, categoryId);
        const foods = rows.map((row) => row.food_name);
        return expect(foods).toContain('maqlobah');
      });
    });

    describe('Test insertFood Query', () => {
      test('insert Food', async () => {
        const { rowCount } = await insertFoodQuery(1, 1, 1, 3);
        return expect(rowCount).toEqual(1);
      });
    });

    describe('Test POST /api/v1/category/:categoryId/food/:foodId Route', () => {
      test('Should return successfully added', async () => {
        const reqFood = {
          grams: 3,
        };

        const res = await request(app)
          .post('/api/v1/category/1/food/1')
          .set({
            'Content-Type': 'application/json',
          })
          .set('Cookie', [`token=${token}`])
          .send(JSON.stringify(reqFood))
          .expect(200)
          .expect('Content-Type', /json/);

        expect(res.status).toBe(200);
        return expect(res.body.message).toBe('Food Successfully Added');
      });

      test('Should return must be a positive number', async () => {
        const reqFood = {
          grams: -3,
        };

        const res = await request(app)
          .post('/api/v1/category/1/food/1')
          .set({
            'Content-Type': 'application/json',
          })
          .set('Cookie', [`token=${token}`])
          .send(JSON.stringify(reqFood))
          .expect(400)
          .expect('Content-Type', /json/);

        expect(res.status).toBe(400);
        return expect(res.body.message).toBe(
          '"grams" must be a positive number',
        );
      });
    });
    describe('food category', () => {
      it('router returns 401 if there is no user logged', async () => {
        const { status } = await request(app)
          .get('/api/v1/category/1/food')
          .expect(401);
        expect(status).toBe(401);
      });

      it('router returns 200 if there is no food in the category', async () => {
        const { status } = await request(app)
          .get('/api/v1/category/1/food')
          .set('Cookie', [`token=${token}`])
          .expect(200);
        expect(status).toBe(200);
      });

      it('router returns 200 if there is food in the category', async () => {
        const { status } = await request(app)
          .get('/api/v1/category/2/food')
          .set('Cookie', [`token=${token}`])
          .expect(200);
        expect(status).toBe(200);
      });
    });
  });
});
