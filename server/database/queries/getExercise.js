const connection = require('../config/connection');

const getExercises = () => connection.query('SELECT * FROM exercises');

module.exports = getExercises;
