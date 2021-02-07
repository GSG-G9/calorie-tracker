const connection = require("../../database/config/connection");
const build = require("../../database/config/build");
const { insertFoodQuery } = require("../../database/queries");

describe("Test insertFood Query", () => {
  beforeEach(() => build());
  afterAll(() => connection.end());

  test(" Test insert Food ", async () => {
    
    const user_id = 1;
    const foodId = 1;
    const categoryId = 1;
    const grams = 3;

    const { rowCount } = await insertFoodQuery(user_id, foodId, categoryId ,grams);
    return expect(rowCount).toEqual(1);
  });
});
