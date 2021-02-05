const app = require('../../app')
const request  = require('supertest')
const connection = require('../../database/config/connection');
const build = require('../../database/config/build');

describe('Test GET /api/v1/user/calories', () => {
	beforeEach(() => build());
	afterAll(() => connection.end());

	test('should return status 200 and an object with correct data {message:"success",status:200,data:{}}', (done) => {
		return request(app)
			.get('/api/v1/user/calories')
			.expect('Content-Type', /json/)
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);
				const expected = {
					status: 200,
					message: 'success',
					data: {
						userCalories: 1500,
						userFoodCalories: 307495,
						userExercisesCalories: 456750,
						remainingCalories: 150755,
					},
				};
        expect(JSON.parse(res.text)).toEqual(expected);
        return done()
			});
	});
});