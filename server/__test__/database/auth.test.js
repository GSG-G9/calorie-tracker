const dbBuild = require("../database/config/build");
const connection = require("../database/config/connection");
const getUserByEmail = require("../database/queries/getEmail");


describe("sign up queries tests", () => {

beforeEach(() => dbBuild());
afterAll(() => connection.end());

    test("test getUserByEmail query, number of rows when email is exist will be 1", async () => {
     
      const { rows } = await getUserByEmail("lina@gmail.com");  
        expect(rows).toHaveLength(1);  
        expect(rows[0].firstname).toBe("lina");
      
  
    });
  
    test("test getUserByEmail query, number of rows when email is not exist will be 0", async () => {
      const { rows } = await getUserByEmail("lana@gmail.com");
       expect(rows).toHaveLength(0);
  
    });
  });

