INSERT INTO food_type(name) values 
('food'),
('meal');


INSERT INTO food(food_type_id, food_name, image) values 
(1, 'egg', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Instagram_egg.jpg/220px-Instagram_egg.jpg'),
 (1, 'chocolate', 'https://vaya.in/recipes/wp-content/uploads/2018/02/Milk-Chocolate-1.jpg'),
 (1, 'checken', 'https://thestayathomechef.com/wp-content/uploads/2016/06/Fried-Chicken-4-1.jpg'),
 (1, 'icecream', 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Ice_cream_cone_%28cropped%29.jpg'),
 (1, 'avokado', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Avocados-3d84a3a.jpg?quality=90&resize=960,872'),
 (1, 'fish', 'https://www.krumpli.co.uk/wp-content/uploads/2019/03/Campfire-Baked-Fish-in-Foil-4-720x720.jpg'),
 (2, 'pizza', 'https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk'),
 (2, 'maqlobah', 'https://chefjar.com/wp-content/uploads/2017/04/2-2.jpg'),
 (1, 'checken pizza', 'https://jeanniestriedandtruerecipes.com/wp-content/uploads/2020/05/Buffalo-Chicken-Pizza-2020-500x500.jpg'),
 (1, 'cake', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9CXAFWkzlaQSYLCZGRkf3sU_QXWgcuAryw&usqp=CAU'),
 (1, 'coffee', 'https://cdn-prod.medicalnewstoday.com/content/images/articles/270/270202/cups-of-coffee.jpg'),
 (1, 'apple', 'https://bestapples.com/wp-content/uploads/2018/01/envy-apple.jpg'),
 (2, 'Falafel', 'https://www.themediterraneandish.com/wp-content/uploads/2020/02/falafel-recipe-1.jpg');

INSERT INTO food_category(name) values('breakfast'),('lunch'),('dinner'),('snack');


INSERT INTO activity (activity_name, activity_value) VALUES
('very active', 1.725),
('active', 1.55),
('light active', 1.375),
('lazy', 1.25);


INSERT INTO nutrition(food_id, calories_per_gram, fat, carbs, protein, sugar, cholesterol) values 
(9,2, 10, 1, 50, 0, 20),
 (8, 3, 2, 17, 20, 80, 20),
 (7, 4, 18, 41, 40, 0, 20),
 (6, 2, 8, 18, 3, 50, 30),
 (5, 4, 4, 3, 1, 0, 40),
 (4, 3, 3, 1, 20, 0, 20),
 (3, 2, 5, 17, 8, 0, 80),
 (2, 2, 120, 120, 60, 0, 80),
 (1, 2, 80, 60, 80, 0, 80),
 (10, 2, 70, 70, 30, 50, 60),
 (11, 1, 0, 0, 0, 40, 0),
 (12, 2, 0, 14, 0, 20, 0),
 (13, 3, 5, 3, 6, 0, 20);

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

INSERT INTO users(firstname, lastname, email, password, gender, height, weight, age, image, dailyCaloriesGoal, activity_id) values ('zein', 'jendeya', 'zein@gmail.com', '$2b$11$5IkI6Vvo5xGqxgRw4I6uWeCJCyJyd3k7WPvnW.fgjZZQG6aSSdQLK', 'f', 1.68, 63, 19, 'https://i.pinimg.com/564x/a9/f6/e3/a9f6e37a1211793bd2f45f161dc3dfbb.jpg', 2099.196, 1);

INSERT INTO UserFoodRelation(users_id,food_id,food_category_id,amount_in_grams) values 
(1,1,1,50),
 (1,1,1,100),
 (1,2,1,100),
 (1,3,1,200),
 (1,4,1,100),
 (1,5,1,235),
 (1,5,1,20),
 (1,5,1,20),
(1, 8, 2, 15.3 );



INSERT INTO UserExerciseRelation(users_id,exercises_id,exercise_duration_in_minutes) VALUES 
(1,1,30);

INSERT INTO news(title, content, created_at) VALUES
('Childhood diet', 'Eating too much fat and sugar as a child can alter your microbiome for life, even if you later learn to eat healthier, a new study in mice suggests.', '2021-02-07 20:09:14.439102'),
('School-made lunch better for children', 'Packing a lunchbox is common practice for most Australian families. But what if there was another way? Researchers say uniform delivery of lunchtime food at school could be a solution to better childhood nutrition and learning in Australia.', '2021-02-02 23:19:14.439102'),
('What happens to your body during tailgating', 'Researchers simulated a tailgating situation with a small group of overweight but healthy men and examined the impact of eating and drinking on their livers using blood tests and a liver scan.', '2020-02-02 23:19:14.439102'),
('Fatty acid may help combat multiple sclerosis' , 'The abnormal immune system response that causes MS by attacking and damaging the central nervous system can be triggered by the lack of a specific fatty acid in fat tissue. dietary change might help treat some people with autoimmune diseases.', '2021-01-20 15:39:14.439102'),
('Consuming omega-3 fatty acids could prevent asthma.', 'New research suggests that a higher dietary intake of long-chain omega-3 fatty acids in childhood may reduce the risk of developing subsequent asthma, but only in children carrying a common gene variant.', '2021-01-07 21:49:14.439102'),
('The longevity gene mammalian Indy (mINDY) is involved in blood pressure regulation.','Reduced expression of mINDY, which is known to extend the life span in lower organisms and to prevent from diet induced obesity, fatty liver, has now been shown to lower blood pressure and heart rate in rodents.', '2020-12-23 10:10:14.439102');



