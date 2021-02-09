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

INSERT INTO news(title, content, created_at) VALUES
('Childhood diet', 'Eating too much fat and sugar as a child can alter your microbiome for life, even if you later learn to eat healthier, a new study in mice suggests.', '2021-02-07 20:09:14.439102'),
('School-made lunch better for children', 'Packing a lunchbox is common practice for most Australian families. But what if there was another way? Researchers say uniform delivery of lunchtime food at school could be a solution to better childhood nutrition and learning in Australia.', '2021-02-02 23:19:14.439102'),
('What happens to your body during tailgating', 'Researchers simulated a tailgating situation with a small group of overweight but healthy men and examined the impact of eating and drinking on their livers using blood tests and a liver scan.', '2020-02-02 23:19:14.439102'),
('Fatty acid may help combat multiple sclerosis' , 'The abnormal immune system response that causes MS by attacking and damaging the central nervous system can be triggered by the lack of a specific fatty acid in fat tissue. dietary change might help treat some people with autoimmune diseases.', '2021-01-20 15:39:14.439102'),
('Consuming omega-3 fatty acids could prevent asthma.', 'New research suggests that a higher dietary intake of long-chain omega-3 fatty acids in childhood may reduce the risk of developing subsequent asthma, but only in children carrying a common gene variant.', '2021-01-07 21:49:14.439102'),
('The longevity gene mammalian Indy (mINDY) is involved in blood pressure regulation.','Reduced expression of mINDY, which is known to extend the life span in lower organisms and to prevent from diet induced obesity, fatty liver, has now been shown to lower blood pressure and heart rate in rodents.', '2020-12-23 10:10:14.439102');

INSERT INTO users(firstName, lastName, email, password, gender, height, weight, age, image, dailyCaloriesGoal, activity_id) values ('zein', 'jendeya', 'zein@gmail.com', '$2b$11$5IkI6Vvo5xGqxgRw4I6uWeCJCyJyd3k7WPvnW.fgjZZQG6aSSdQLK', 'f', 1.68, 63, 19, 'https://i.pinimg.com/564x/a9/f6/e3/a9f6e37a1211793bd2f45f161dc3dfbb.jpg', 2099.196, 1);

