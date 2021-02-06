const connection = require("../../database/config/connection");
const build = require("../../database/config/build");
const { insertFoodQuery } = require("../../database/queries");

describe("Test insertFood Query", () => {
  beforeEach(() => build());
  afterAll(() => connection.end());

  test(" Test insert Food ", async () => {
    const { rowCount } = await insertFoodQuery(1, 1, 1, 3);
    return expect(rowCount).toEqual(1);
  });
});
