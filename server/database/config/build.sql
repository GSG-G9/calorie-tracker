BEGIN;

DROP TABLE IF EXISTS users, activity, exercises, food, food_category, food_type, nutrition, UserExerciseRelation, UserFoodRelation, news CASCADE;


CREATE TABLE activity(
    id SERIAL PRIMARY KEY,
    activity_name VARCHAR(100),
    activity_value Float
);


CREATE TABLE users(
id SERIAL PRIMARY KEY,
firstname VARCHAR(100) NOT NULL,
lastname VARCHAR(100) NOT NULL,
email VARCHAR (100) NOT NULL UNIQUE,
password VARCHAR(250) NOT NULL ,
gender VARCHAR(1),
age INTEGER,
weight float,
height float,
goalWeight float,
dailyCaloriesGoal float,
image TEXT DEFAULT ('https://image.freepik.com/free-vector/vector-avatar-smiling-man-facial-expression_102172-203.jpg'),
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
food_id INTEGER REFERENCES food(id) ON DELETE CASCADE ON UPDATE CASCADE UNIQUE,
calories_per_gram float NOT NUll,
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
exercise_duration_in_minutes float NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_DATE,
creation_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE UserFoodRelation(
  id SERIAL PRIMARY KEY,
  users_id INTEGER REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  food_id INTEGER REFERENCES food(id) ON DELETE CASCADE ON UPDATE CASCADE,
  food_category_id INTEGER REFERENCES food_category(id) ON DELETE CASCADE ON UPDATE CASCADE,
  amount_in_grams float NOT NUll,
  created_at TIMESTAMP DEFAULT CURRENT_DATE,
  creation_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

CREATE TABLE news(
id SERIAL PRIMARY KEY,
users_id INTEGER REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
title VARCHAR(250),
content VARCHAR(250),
created_at TIMESTAMP DEFAULT CURRENT_DATE
);

COMMIT;
