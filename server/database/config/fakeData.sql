INSERT INTO food_type(name) values ('food');
INSERT INTO food_type(name) values ('meal');


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

INSERT INTO users(first_name, last_name, email, password, gender, height, weight, age, image, daily_calories_goal) values ('zein', 'jendeya', 'zeinj@gmail.com', '$2b$11$5IkI6Vvo5xGqxgRw4I6uWeCJCyJyd3k7WPvnW.fgjZZQG6aSSdQLK', 'f', 1.68, 63, 19, 'https://i.pinimg.com/564x/a9/f6/e3/a9f6e37a1211793bd2f45f161dc3dfbb.jpg', 2099.196);

INSERT INTO news(title, content, created_at) VALUES
('Childhood diet', 'Eating too much fat and sugar as a child can alter your microbiome for life, even if you later learn to eat healthier, a new study in mice suggests.', '2021-02-07 20:09:14.439102'),
('School-made lunch better for children', 'Packing a lunchbox is common practice for most Australian families. But what if there was another way? Researchers say uniform delivery of lunchtime food at school could be a solution to better childhood nutrition and learning in Australia.', '2021-02-02 23:19:14.439102'),
('What happens to your body during tailgating', 'Researchers simulated a tailgating situation with a small group of overweight but healthy men and examined the impact of eating and drinking on their livers using blood tests and a liver scan.', '2020-02-02 23:19:14.439102'),
('Fatty acid may help combat multiple sclerosis' , 'The abnormal immune system response that causes MS by attacking and damaging the central nervous system can be triggered by the lack of a specific fatty acid in fat tissue. dietary change might help treat some people with autoimmune diseases.', '2021-01-20 15:39:14.439102'),
('Consuming omega-3 fatty acids could prevent asthma.', 'New research suggests that a higher dietary intake of long-chain omega-3 fatty acids in childhood may reduce the risk of developing subsequent asthma, but only in children carrying a common gene variant.', '2021-01-07 21:49:14.439102'),
('The longevity gene mammalian Indy (mINDY) is involved in blood pressure regulation.','Reduced expression of mINDY, which is known to extend the life span in lower organisms and to prevent from diet induced obesity, fatty liver, has now been shown to lower blood pressure and heart rate in rodents.', '2020-12-23 10:10:14.439102');
