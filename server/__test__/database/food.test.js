const dbBuild = require('../../database/config/build');
const connection = require('../../database/config/connection');
const { getFoodCategory } = require('../../database/queries');

describe('getNews query', () => {
  beforeEach(() => dbBuild());
  afterAll(() => connection.end());

  test('should get news from the news table', async () => {
    const { rows } = await getFoodCategory();
    return expect(rows).toEqual();
  });
});
