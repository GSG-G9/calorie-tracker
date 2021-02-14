import React, { useState } from 'react';
import { Typography, Card } from '@material-ui/core';
import Button from '../Button';
import Container from '../Container';
import InputField from '../InputField';
import Chart from '../DoughnutChart';

const foodData = {
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

function FoodQuantity() {
  const [nutrition, setNutrition] = useState([
    { fat: 30 },
    { fat: 30 },
    { fat: 30 },
    { fat: 30 },
  ]);
  return (
    <Container>
      <Container>
        <Button>Back</Button>
        <Button>Add Food</Button>
      </Container>
      <InputField
        label="Quantity"
        InputProps={{
          endAdornment: <span>g</span>,
        }}
      />
      <Chart />
      <Container>
        <Typography variant="h4">Nutrition fact</Typography>
        <Container>
          {nutrition.map((foodNutrition) => (
            <Card />
          ))}
        </Container>
      </Container>
    </Container>
  );
}

export default FoodQuantity;
