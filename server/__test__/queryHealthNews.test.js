const dbBuild = require('../database/config/build');
const connection = require('../database/config/connection');
const { getNews } = require('../database/queries');

describe('getNews query', () => {
  beforeEach(() => dbBuild());
  afterAll(() => connection.end());

  test('should get news from the news table', async () => {
    const { rows } = await getNews();
    const allContent = rows.map((row) => row.content);
    return expect(allContent).toContain(
      'Researchers simulated a tailgating situation with a small group of overweight but healthy men and examined the impact of eating and drinking on their livers using blood tests and a liver scan.',
    );
  });
});
