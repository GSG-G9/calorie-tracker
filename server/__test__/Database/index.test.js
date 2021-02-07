const { getNews } = require('../../database/queries');
const build = require('../../database/config/build');
const connection = require('../../database/config/connection');

describe('Test getNews Query', () => {
  beforeEach(() => build());
  afterAll(() => connection.end());
  test('should get news from the news table', async () => {
    const { rows } = await getNews();
    return expect(rows[5].content).toEqual(
      'Reduced expression of mINDY, which is known to extend the life span in lower organisms and to prevent from diet induced obesity, fatty liver, has now been shown to lower blood pressure and heart rate in rodents.',
    );
  });
});
