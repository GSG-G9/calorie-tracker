const filterNutrition = (
  {
    fat,
    carbs,
    protein,
    sugar,
    vitamin_a: vitaminA,
    vitamin_c: vitaminC,
    vitamin_d: vitaminD,
    cholesterol,
    calories_per_gram: caloriesPerGram,
  },
  amountInGrams = 1
) => {
  const foodNutrition = {
    fat,
    carbs,
    protein,
    sugar,
    vitamin_a: vitaminA,
    vitamin_c: vitaminC,
    vitamin_d: vitaminD,
    cholesterol,
    caloriesPerGram,
  };

  const foodNutritionChart = {
    fat,
    carbs,
    protein,
    caloriesPerGram,
  };

  const chartKeys = Object.keys(foodNutritionChart);

  const chartValues = Object.values(foodNutritionChart).map(
    (el) => el * amountInGrams
  );
  const chartColors = ['#6FE0B9', '#999BD2', '#00B4BC', '#FF6A56'];

  const values = Object.values(foodNutrition).map((el) => el * amountInGrams);

  return [chartKeys, chartValues, chartColors, values, foodNutrition];
};

export default filterNutrition;
