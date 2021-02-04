const {insertFoodQuery} = require('../../database/queries');

const insertFoodController = (req,res,next) => {
    const {food_id,food_category_id} = req.body;
    const user_id = req.users_id || 1 ;
    insertFoodQuery(user_id, food_id,food_category_id)
    .then(() => res.json({data:null , message:'success', status:200}))
    .catch((error)=> {
        console.log(error);
        next(error)
    });
}

module.exports = {insertFoodController};
