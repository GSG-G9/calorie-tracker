import React, { useState, useLayoutEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import Container from '../../Container';
import InputField from '../../InputField';
import Chart from '../../DoughnutChart';
import useStyle from './style';
import AddFoodQuantityButtons from '../AddFoodQuantityButtons';
import NutritionTable from '../NutritionTable';

const { data } = {
  status: 200,
  data: [
    {
      id: 2,
      food_type_id: 2,
      food_name: 'maqlobah',
      image: null,
      users_id: 8,
      food_id: 8,
      food_category_id: 2,
      amount_in_grams: 15.3,
      created_at: '2021-02-13T22:00:00.000Z',
      calories_per_gram: 160,
      fat: 2,
      carbs: 17,
      protein: 20,
      sugar: 80,
      vitamin_a: null,
      vitamin_c: null,
      vitamin_d: null,
      cholesterol: 20,
    },
  ],
};

const filterNutrition = ({
  fat,
  carbs,
  protein,
  sugar,
  vitamin_a: vitaminA,
  vitamin_c: vitaminC,
  vitamin_d: vitaminD,
  cholesterol,
  amount_in_grams: amountInGrams,
  calories_per_gram: caloriesPerGram,
}) => {
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
  const chartValues = Object.values(foodNutritionChart);
  const chartColors = ['#6FE0B9', '#999BD2', '#00B4BC', '#FF6A56'];

  const values = Object.values(foodNutrition).map((el) => el * amountInGrams);

  return [chartKeys, chartValues, chartColors, values, foodNutrition];
};

const handleAddFoodQuantity = (
  quantity,
  categoryId,
  foodId,
  history
) => () => async () => {
  await axios.post(`/api/v1/category/${categoryId}/food/${foodId}`, {
    grams: quantity,
  });
  history.push('/food', { categoryId });
};

function FoodQuantity() {
  // const {
  //   state: { foodId, categoryId },
  // } = useLocation();
  const foodId = 1;
  const categoryId = 1;
  const history = useHistory();
  const [quantity, setQuantity] = useState(0);
  const classes = useStyle();

  const [nutrition, setNutrition] = useState(filterNutrition(data[0])[3]);
  const [nutritionNames, nutritionValues, nutritionColors] = filterNutrition(
    data[0]
  );

  useLayoutEffect(() => {
    const request = async () => {
      const {
        data: { data: foodData },
      } = await axios.get(`/api/v1/category/${categoryId}/food/${foodId}`);
      setNutrition(filterNutrition(foodData));
    };

    request();
  }, [categoryId, foodId]);

  return (
    <Container screenSize="xs" direction="column" itemColumns="12" spacing={2}>
      <Chart
        legend={nutritionNames}
        section={nutritionValues}
        sectionBackground={nutritionColors}
        height={250}
        width={250}
        key="3"
        options={{
          title: {
            display: true,
            text: 'Nutrition Chart',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'left',
          },
        }}
      />
      <InputField
        className={classes.InputField}
        placeholder="Quantity"
        onChange={({ target: { value } }) => setQuantity(value)}
        value={quantity}
        variant="outlined"
        type="number"
        key="2"
        label="Quantity"
        InputProps={{
          endAdornment: <span>g</span>,
        }}
      />
      <NutritionTable key="33" nutrition={nutrition} quantity={quantity} />
      <AddFoodQuantityButtons
        handleAddFoodQuantity={handleAddFoodQuantity(
          quantity,
          categoryId,
          foodId,
          history
        )}
      />
    </Container>
  );
}
export default FoodQuantity;
