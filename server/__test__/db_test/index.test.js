const connection = require("../../database/config/connection");
const build = require("../../database/config/build");
const { insertFoodQuery } = require("../../database/queries");

beforeEach(() => build());
afterAll(() => connection.end());

describe("Test insertFood Query", () => {
  test(" Test insert Food ", async() => {
    const {rowCount} = await insertFoodQuery(1, 1, 1, 3)
     return expect(rowCount).toEqual(1);
  });
});
