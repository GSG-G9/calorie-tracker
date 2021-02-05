const connection = require("../../database/config/connection");
const build = require("../../database/config/build");
const { insertFoodQuery } = require("../../database/queries");

describe("Test insertFood Query", () => {
  beforeEach(() => build());
  afterAll(() => connection.end());

  test(" Test insert Food ", () => {
    const reqFood = {
      food_id: 1,
      food_category_id: 1,
    };

    return insertFoodQuery(reqFood).then((res) => {
      const actual = res.rows[0];
      const expected = {
        food_id: 1,
        food_category_id: 1,
      };
      expect(actual.food_id).toEqual(expected.food_id);
    });
  });
});
