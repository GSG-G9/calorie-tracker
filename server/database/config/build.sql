BEGIN;

DROP TABLE IF EXISTS users, activity, exercises, food, food_category, food_type, nutrition, UserExerciseRelation, UserFoodRelation, news CASCADE;


CREATE TABLE activity(
    id SERIAL PRIMARY KEY,
    activity_name VARCHAR(100),
    activity_value Float
);


CREATE TABLE users(
id SERIAL PRIMARY KEY,
lastName VARCHAR(100),
email VARCHAR (100),
password VARCHAR(250),
firstName VARCHAR(100) NOT NULL,
gender VARCHAR(1),
age INTEGER,
weight float,
height float,
goalWeight float,
dailyCaloriesGoal float,
image TEXT,
activity_id INTEGER REFERENCES activity(id) ON DELETE CASCADE ON UPDATE CASCADE

);




CREATE TABLE exercises(
id SERIAL PRIMARY KEY,
exercise_name VARCHAR(100) NOT NULL,
met Float NOT NULL
);


CREATE TABLE food_category(
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL 
);

CREATE TABLE food_type(
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL 
);

CREATE TABLE food(
id SERIAL PRIMARY KEY,
food_type_id INTEGER REFERENCES food_type(id) ON DELETE CASCADE ON UPDATE CASCADE,
food_name VARCHAR(100) NOT NULL,
image TEXT
);

CREATE TABLE nutrition(
id SERIAL PRIMARY KEY,
food_id INTEGER REFERENCES food(id) ON DELETE CASCADE ON UPDATE CASCADE,
calories float,
fat float,
carbs float,
protein float,
sugar float,
vitamin_A float,
vitamin_C float,
vitamin_D float,
cholesterol float
);

CREATE TABLE UserExerciseRelation(
id SERIAL PRIMARY KEY,
users_id INTEGER REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
exercises_id INTEGER REFERENCES exercises(id) ON DELETE CASCADE ON UPDATE CASCADE,
created_at TIMESTAMP NOT NULL
);


CREATE TABLE UserFoodRelation(
id SERIAL PRIMARY KEY,
users_id INTEGER REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
food_id INTEGER REFERENCES food(id) ON DELETE CASCADE ON UPDATE CASCADE,
food_category_id INTEGER REFERENCES food_category(id) ON DELETE CASCADE ON UPDATE CASCADE,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE news(
id SERIAL PRIMARY KEY,
users_id INTEGER REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
title VARCHAR(250),
content VARCHAR(250),
created_at TIMESTAMP NOT NULL
);

COMMIT;
