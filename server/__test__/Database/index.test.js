const {getFood} = require('../../database/queries')
const build = require('../../database/config/build')
const connection = require('../../database/config/connection')
describe('Test getFood Query',()=>{

  beforeEach(() => build());
  afterAll(() => connection.end());
  test('should return all data from food table',async ()=>{
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
    const {rows} = await getFood()
    return expect(rows).toEqual(foodData)
  })

})

