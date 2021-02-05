INSERT INTO food_type(name) values ('food');
INSERT INTO food_type(name) values ('meal');


INSERT INTO food(food_type_id, food_name) values (1, 'egg');
INSERT INTO food(food_type_id, food_name) values (1, 'chocolate');
INSERT INTO food(food_type_id, food_name) values (1, 'checken');
INSERT INTO food(food_type_id, food_name) values (1, 'icecream');
INSERT INTO food(food_type_id, food_name) values (1, 'avokado');
INSERT INTO food(food_type_id, food_name) values (1, 'fish');
INSERT INTO food(food_type_id, food_name) values (2, 'pizza');
INSERT INTO food(food_type_id, food_name) values (2, 'maqlobah');
INSERT INTO food(food_type_id, food_name) values (1, 'checken pizza');
INSERT INTO food(food_type_id, food_name) values (1, 'cake');
INSERT INTO food(food_type_id, food_name) values (1, 'coffee');
INSERT INTO food(food_type_id, food_name) values (1, 'apple');
INSERT INTO food(food_type_id, food_name) values (2, 'Falafel');

INSERT INTO users(first_name,last_name,email,password,weight,daily_calories_goal) VALUES('test1','test4','test1@test.com','testpassword',116,1500);
INSERT INTO users(first_name,last_name,email,password,weight,daily_calories_goal) VALUES('test2','test4','test2@test.com','testpassword',100,1500);
INSERT INTO users(first_name,last_name,email,password,weight,daily_calories_goal) VALUES('test3','test4','test3@test.com','testpassword',60,1500);
INSERT INTO users(first_name,last_name,email,password,weight,daily_calories_goal) VALUES('test4','test4','test4@test.com','testpassword',150,1500);

INSERT INTO food_category(name) VALUES('breakfast');
INSERT INTO food_category(name) VALUES('lunch');
INSERT INTO food_category(name) VALUES('dinner');
INSERT INTO food_category(name) VALUES('snacks');









INSERT INTO nutrition(food_id, calories_per_gram, fat, carbs, protein, sugar, cholesterol) values (9, 143, 10, 1, 50, 0, 20);
INSERT INTO nutrition(food_id, calories_per_gram, fat, carbs, protein, sugar, cholesterol) values (8, 160, 2, 17, 20, 80, 20);
INSERT INTO nutrition(food_id, calories_per_gram, fat, carbs, protein, sugar, cholesterol) values (7, 420, 18, 41, 40, 0, 20);
INSERT INTO nutrition(food_id, calories_per_gram, fat, carbs, protein, sugar, cholesterol) values (6, 160, 8, 18, 3, 50, 30);
INSERT INTO nutrition(food_id, calories_per_gram, fat, carbs, protein, sugar, cholesterol) values (5, 117, 4, 3, 1, 0, 40);
INSERT INTO nutrition(food_id, calories_per_gram, fat, carbs, protein, sugar, cholesterol) values (4, 100, 3, 1, 20, 0, 20);
INSERT INTO nutrition(food_id, calories_per_gram, fat, carbs, protein, sugar, cholesterol) values (3, 150, 5, 17, 8, 0, 80);
INSERT INTO nutrition(food_id, calories_per_gram, fat, carbs, protein, sugar, cholesterol) values (2, 400, 120, 120, 60, 0, 80);
INSERT INTO nutrition(food_id, calories_per_gram, fat, carbs, protein, sugar, cholesterol) values (1, 250, 80, 60, 80, 0, 80);
INSERT INTO nutrition(food_id, calories_per_gram, fat, carbs, protein, sugar, cholesterol) values (10, 20, 70, 70, 30, 50, 60);
INSERT INTO nutrition(food_id, calories_per_gram, fat, carbs, protein, sugar, cholesterol) values (11, 1, 0, 0, 0, 40, 0);
INSERT INTO nutrition(food_id, calories_per_gram, fat, carbs, protein, sugar, cholesterol) values (12, 52, 0, 14, 0, 20, 0);
INSERT INTO nutrition(food_id, calories_per_gram, fat, carbs, protein, sugar, cholesterol) values (13, 60, 5, 3, 6, 0, 20);

INSERT INTO exercises (exercise_name, met) VALUES
('bicycling', 7.5),
('push ups', 3.8),
('sit ups', 3.8),
('pull-ups', 3.8),
('lunge', 3.8),
('weight lifting', 6.0),
('squats', 5.0),
('pilates', 3.0),
('yoga', 3.3),
('jogging', 7.0),
('cardio', 4.0),
('stretching', 2.3),
('back exercises', 3.5),
('abdominal crunches', 2.8),
('jumping jacks', 8.0),
('rope skipping', 12.3),
('leg exercises', 3.5),
('ski machine', 6.8),
('aerobic', 8.0),
('slide board',11.0),
('slimnastics', 6.0);



INSERT INTO UserFoodRelation(users_id,food_id,food_category_id,amount_in_grams) values(1,1,1,100);
INSERT INTO UserFoodRelation(users_id,food_id,food_category_id,amount_in_grams) values(1,2,1,400);
INSERT INTO UserFoodRelation(users_id,food_id,food_category_id,amount_in_grams) values(1,3,1,500);
INSERT INTO UserFoodRelation(users_id,food_id,food_category_id,amount_in_grams) values(1,4,1,200);
INSERT INTO UserFoodRelation(users_id,food_id,food_category_id,amount_in_grams) values(1,5,1,235);
INSERT INTO UserFoodRelation(users_id,food_id,food_category_id,amount_in_grams,created_at) values(1,5,1,20,'2021-02-04 00:00:00');
INSERT INTO UserFoodRelation(users_id,food_id,food_category_id,amount_in_grams,created_at) values(1,5,1,20,'2021-02-04 00:00:00');

INSERT INTO UserExerciseRelation(users_id,exercises_id,exercise_duration_in_minutes) VALUES (1,1,30);
INSERT INTO UserExerciseRelation(users_id,exercises_id,exercise_duration_in_minutes) VALUES (2,2,30);
INSERT INTO UserExerciseRelation(users_id,exercises_id,exercise_duration_in_minutes) VALUES (3,3,30);
INSERT INTO UserExerciseRelation(users_id,exercises_id,exercise_duration_in_minutes) VALUES (4,4,30);
