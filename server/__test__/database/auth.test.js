const dbBuild = require('../../database/config/build');
const connection = require('../../database/config/connection');
const getUserByEmail = require('../../database/queries/getEmail');

describe('sign up queries tests', () => {
  beforeEach(() => dbBuild());
  afterAll(() => connection.end());

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
        activity_id: null,
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
});
