BEGIN;

DROP TABLE IF EXISTS user, exercise, food, food_category, food_type, nutrition, UserExerciseRelation, UserFoodRelation, news CASCADE;

CREATE TABLE user(
id SERIAL PRIMARY KEY,
first_name VARCHAR(100) NOT NULL UNIQUE,
last_name VARCHAR(100) NOT NULL UNIQUE,
email VARCHAR (100) NOT NULL UNIQUE,
password VARCHAR(250) NOT NULL ,
gender TINYINT,
height Float,
weight Float,
age INTEGER,
image TEXT,
daily_calories_goal Float
);

CREATE TABLE exercise(
id SERIAL PRIMARY KEY,
exercise_name VARCHAR(100) NOT NULL UNIQUE,
met VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE food(
id SERIAL PRIMARY KEY,
food_type INTEGER FOREIGN KEY REFERENCES food_type(id),
food_name VARCHAR(100) NOT NULL UNIQUE,
image TEXT
);

CREATE TABLE food_category(
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE food_type(
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE nutrition(
id SERIAL PRIMARY KEY,
food INTEGER FOREIGN KEY REFERENCES food(id),
calories Float,
fat Float,
carbs Float,
protein Float,
sugar Float,
vitamin-A Float,
vitamin-C Float,
vitamin-D Float,
cholesterol Float
);

CREATE TABLE UserExerciseRelation(
id SERIAL PRIMARY KEY,
user INTEGER FOREIGN KEY REFERENCES user(id),
exercise INTEGER FOREIGN KEY REFERENCES exercise(id),
created_at TIMESTAMP NOT NULL
);

CREATE TABLE UserFoodRelation(
id SERIAL PRIMARY KEY,
user INTEGER FOREIGN KEY REFERENCES user(id),
food INTEGER FOREIGN KEY REFERENCES food(id),
food_category INTEGER FOREIGN KEY REFERENCES food_category(id),
created_at TIMESTAMP NOT NULL
);

CREATE TABLE news(
id SERIAL PRIMARY KEY,
user INTEGER FOREIGN KEY REFERENCES user(id),
title VARCHAR(250),
content VARCHAR(250),
created_at TIMESTAMP NOT NULL
);

COMMIT;