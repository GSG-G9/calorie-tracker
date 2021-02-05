const connection = require('../../database/config/connection')
const {calculateUserExercisesCalories,calculateUserFoodCalories,getUserCalories} = require('../../database/queries')
const build = require('../../database/config/build')


describe('Test Database Queries',()=>{
  beforeEach(()=> build())
  afterAll(()=> connection.end())
  const userId = 1;
  test('Test calculateUserExercisesCalories Query should return calories equal to 456750 of user 1', async() => {
    const {
			rows: [{ userexercisescalories: userExercisesCalories }],
		} = await calculateUserExercisesCalories(userId);
    return expect(userExercisesCalories).toBe(456750);
  });

  test('Test calculateUserFoodCalories Query should return calories equal to 307495 of user 1', async () => {
		const {
			rows: [{ userfoodcalories: userFoodCalories }],
		} = await calculateUserFoodCalories(userId);
		return expect(userFoodCalories).toBe(307495);
	});
  
  test('Test getUserCalories Query should return calories equal to 1500 of user 1', async () => {
		const {
			rows: [{ usercalories: userCalories }],
		} = await getUserCalories(userId);
		return expect(userCalories).toBe(1500);
	});
})