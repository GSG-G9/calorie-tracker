const request = require('supertest')
const app = require('../../app')
const build = require('../../database/config/build');
const connection = require('../../database/config/connection')

describe('Test GET /api/v1/food Route', () => {
  beforeEach(() => build());
  afterAll(()=> connection.end());
  test('Should return response with status code 200 and all Food data', (done) => {
    return request(app).get('/api/v1/food').expect(200).end((err,res)=>{
      if (err) return done(err);
      const actual = JSON.parse(res.text);
      const foodData = [
            { id: 1, food_type_id: 1, food_name: 'egg', image: null },
            { id: 2, food_type_id: 1, food_name: 'chocolate', image: null },
            { id: 3, food_type_id: 1, food_name: 'checken', image: null },
            { id: 4, food_type_id: 1, food_name: 'icecream', image: null },
            { id: 5, food_type_id: 1, food_name: 'avokado', image: null },
            { id: 6, food_type_id: 1, food_name: 'fish', image: null },
            { id: 7, food_type_id: 2, food_name: 'mosakhan', image: null },
            { id: 8, food_type_id: 2, food_name: 'maqlobah', image: null },
            { id: 9, food_type_id: 1, food_name: 'checken pizza', image: null },
            { id: 10, food_type_id: 1, food_name: 'cake', image: null },
            { id: 11, food_type_id: 1, food_name: 'coffee', image: null },
            { id: 12, food_type_id: 1, food_name: 'apple', image: null },
            { id: 13, food_type_id: 2, food_name: 'Falafel', image: null },
          ];
      const expected = { message: 'success', status: 200, data: foodData };
      expect(actual).toEqual(expected);
      return done()
    })
  })
});