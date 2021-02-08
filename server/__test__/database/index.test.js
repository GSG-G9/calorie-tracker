const dbBuild = require('../../database/config/build');
const connection = require('../../database/config/connection');
const { getNews } = require('../../database/queries');

beforeEach(() => dbBuild());
afterAll(() => connection.end());

test('should get news from the news table', async () => {
  const { rows } = await getNews();
  return expect(rows[5].content).toEqual(
    'Researchers simulated a tailgating situation with a small group of overweight but healthy men and examined the impact of eating and drinking on their livers using blood tests and a liver scan.',
  );
});
