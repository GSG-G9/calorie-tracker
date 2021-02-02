BEGIN;

DROP TABLE IF EXISTS users, exercise, food, food_category, food_type, nutrition, UserExerciseRelation, UserFoodRelation, news CASCADE;

CREATE TABLE users(
id SERIAL PRIMARY KEY,
first_name VARCHAR(100) NOT NULL UNIQUE,
last_name VARCHAR(100) NOT NULL UNIQUE,
email VARCHAR (100) NOT NULL UNIQUE,
password VARCHAR(250) NOT NULL ,
gender CHAR(1),
height INTEGER,
weight INTEGER,
age INTEGER,
image TEXT,
daily_calories_goal INTEGER
);

CREATE TABLE exercise(
id SERIAL PRIMARY KEY,
exercise_name VARCHAR(100) NOT NULL UNIQUE,
met Float
);

CREATE TABLE food(
id SERIAL PRIMARY KEY,
food_type INTEGER REFERENCES food_type(id),
food_name VARCHAR(100) NOT NULL,
image TEXT
);

CREATE TABLE food_category(
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL 
);

CREATE TABLE food_type(
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE nutrition(
id SERIAL PRIMARY KEY,
food INTEGER REFERENCES food(id),
calories INTEGER,
fat INTEGER,
carbs INTEGER,
protein INTEGER,
sugar INTEGER,
vitamin_A INTEGER,
vitamin_C INTEGER,
vitamin_D INTEGER,
cholesterol INTEGER
);

CREATE TABLE UserExerciseRelation(
id SERIAL PRIMARY KEY,
users INTEGER REFERENCES users(id),
exercise INTEGER REFERENCES exercise(id),
created_at TIMESTAMP NOT NULL
);

CREATE TABLE UserFoodRelation(
id SERIAL PRIMARY KEY,
users INTEGER REFERENCES users(id),
food INTEGER REFERENCES food(id),
food_category INTEGER REFERENCES food_category(id),
created_at TIMESTAMP NOT NULL
);

CREATE TABLE news(
id SERIAL PRIMARY KEY,
users INTEGER REFERENCES users(id),
title VARCHAR(250),
content VARCHAR(250),
created_at TIMESTAMP NOT NULL
);

COMMIT;