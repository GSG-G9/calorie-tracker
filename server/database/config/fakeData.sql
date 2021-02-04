INSERT INTO food_type(name) values ('food');
INSERT INTO food_type(name) values ('meal');

INSERT INTO users (first_name,last_name,email,password) values ('has', 'has','has','has');

INSERT INTO food_category(name) values ('dinner');

INSERT INTO food(food_type_id, food_name) values (1, 'egg');
INSERT INTO food(food_type_id, food_name) values (1, 'chocolate');
INSERT INTO food(food_type_id, food_name) values (1, 'checken');
INSERT INTO food(food_type_id, food_name) values (1, 'icecream');
INSERT INTO food(food_type_id, food_name) values (1, 'avokado');
INSERT INTO food(food_type_id, food_name) values (1, 'fish');
INSERT INTO food(food_type_id, food_name) values (2, 'mosakhan');
INSERT INTO food(food_type_id, food_name) values (2, 'maqlobah');
INSERT INTO food(food_type_id, food_name) values (1, 'checken pizza');
INSERT INTO food(food_type_id, food_name) values (1, 'cake');
INSERT INTO food(food_type_id, food_name) values (1, 'coffee');
INSERT INTO food(food_type_id, food_name) values (1, 'apple');
INSERT INTO food(food_type_id, food_name) values (2, 'Falafel');


INSERT INTO nutrition(food_id, calories, fat, carbs, protein, sugar, cholesterol) values (9, 143, 10, 1, 50, 0, 20);
INSERT INTO nutrition(food_id, calories, fat, carbs, protein, sugar, cholesterol) values (8, 160, 2, 17, 20, 80, 20);
INSERT INTO nutrition(food_id, calories, fat, carbs, protein, sugar, cholesterol) values (7, 420, 18, 41, 40, 0, 20);
INSERT INTO nutrition(food_id, calories, fat, carbs, protein, sugar, cholesterol) values (6, 160, 8, 18, 3, 50, 30);
INSERT INTO nutrition(food_id, calories, fat, carbs, protein, sugar, cholesterol) values (5, 117, 4, 3, 1, 0, 40);
INSERT INTO nutrition(food_id, calories, fat, carbs, protein, sugar, cholesterol) values (4, 100, 3, 1, 20, 0, 20);
INSERT INTO nutrition(food_id, calories, fat, carbs, protein, sugar, cholesterol) values (3, 150, 5, 17, 8, 0, 80);
INSERT INTO nutrition(food_id, calories, fat, carbs, protein, sugar, cholesterol) values (2, 400, 120, 120, 60, 0, 80);
INSERT INTO nutrition(food_id, calories, fat, carbs, protein, sugar, cholesterol) values (1, 250, 80, 60, 80, 0, 80);
INSERT INTO nutrition(food_id, calories, fat, carbs, protein, sugar, cholesterol) values (10, 20, 70, 70, 30, 50, 60);
INSERT INTO nutrition(food_id, calories, fat, carbs, protein, sugar, cholesterol) values (11, 1, 0, 0, 0, 40, 0);
INSERT INTO nutrition(food_id, calories, fat, carbs, protein, sugar, cholesterol) values (12, 52, 0, 14, 0, 20, 0);
INSERT INTO nutrition(food_id, calories, fat, carbs, protein, sugar, cholesterol) values (13, 60, 5, 3, 6, 0, 20);

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
