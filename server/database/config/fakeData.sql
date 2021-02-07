INSERT INTO activity (activity_name, activity_value) VALUES
('very active', 1.725),
('active', 1.55),
('light active', 1.375),
('lazy', 1.25);


INSERT INTO users(firstName, password, email, age, gender, weight, height, activity_id) values 
('lina', '2062519s@#', 'lina@gmail.com', 26, 'f', 50, 165, 2),
 ('zain', '2065519s@#', 'zain@gmail.com',20, 'f', 50, 170, 1 ),
 ('hassan', '20617889s@#', 'hassan@gmail.com', 31, 'm', 106, 175, 4);

      
INSERT INTO food_type(name) values 
('food'),
('meal');


INSERT INTO food(food_type_id, food_name) values
 (1, 'egg'),
 (1, 'chocolate'),
 (1, 'checken'),
 (1, 'icecream'),
 (1, 'avokado'),
 (1, 'fish'),
 (2, 'mosakhan'),
 (2, 'maqlobah'),
 (1, 'checken pizza'),
 (1, 'cake'),
 (1, 'coffee'),
 (1, 'apple'),
 (2, 'Falafel');


INSERT INTO nutrition(food_id, calories, fat, carbs, protein, sugar, cholesterol) values 
(9, 143, 10, 1, 50, 0, 20),
 (8, 160, 2, 17, 20, 80, 20),
 (7, 420, 18, 41, 40, 0, 20),
 (6, 160, 8, 18, 3, 50, 30),
 (5, 117, 4, 3, 1, 0, 40),
 (4, 100, 3, 1, 20, 0, 20),
 (3, 150, 5, 17, 8, 0, 80),
 (2, 400, 120, 120, 60, 0, 80),
 (1, 250, 80, 60, 80, 0, 80),
 (10, 20, 70, 70, 30, 50, 60),
 (11, 1, 0, 0, 0, 40, 0),
 (12, 52, 0, 14, 0, 20, 0),
 (13, 60, 5, 3, 6, 0, 20);

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

INSERT INTO users(first_name, last_name, email, password, gender, height, weight, age, image, daily_calories_goal) values ('zein', 'jendeya', 'zein@gmail.com', '$2b$11$5IkI6Vvo5xGqxgRw4I6uWeCJCyJyd3k7WPvnW.fgjZZQG6aSSdQLK', 'f', 1.68, 63, 19, 'https://i.pinimg.com/564x/a9/f6/e3/a9f6e37a1211793bd2f45f161dc3dfbb.jpg', 2099.196);
