const { getUser } = require("../../database/queries");
const build = require("../../database/config/build");
const connection = require("../../database/config/connection");

describe("Test getFood Query", () => {
  beforeEach(() => build());
  afterAll(() => connection.end());
  test("should return the user zein jendeya from users table", async () => {
    const userData = [
      {
        id: 1,
        first_name: "zein",
        last_name: "jendeya",
        email: "zein@gmail.com",
        password:
          "$2b$11$5IkI6Vvo5xGqxgRw4I6uWeCJCyJyd3k7WPvnW.fgjZZQG6aSSdQLK",
        gender: "f",
        height: 1.68,
        weight: 63,
        age: 19,
        image: "https://i.pinimg.com/564x/a9/f6/e3/a9f6e37a1211793bd2f45f161dc3dfbb.jpg",
        daily_calories_goal: 2099.196,
      },
    ];
    const { rows } = await getUser("zein@gmail.com");
    return expect(rows).toEqual(userData);
  });
});
