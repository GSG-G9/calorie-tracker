import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';
import Button from '../Button';
import Container from '../Container';
import InputField from '../InputField';
import Chart from '../DoughnutChart';

const useStyle = makeStyles(() => ({
  nutritionTable: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
  },
  nutritionValues: {
    fontSize: '25px',
    fontWeight: '500px',
  },
}));
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
  amount_in_grams,
  calories_per_gram,
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
  };

  const keys = Object.keys(foodNutrition);
  const values = Object.values(foodNutrition).map((el) => el * amount_in_grams);
  const colors = [
    '#6FE0B9',
    '#999BD2',
    '#00B4BC',
    '#FF6A56',
    '#00262F',
    '#044C58',
    '#035C6E',
    '#3F8994',
  ];
  return [keys, values, colors, foodNutrition];
};

function FoodQuantity(props) {
  const { categoryId } = props;
  const [quantity, setQuantity] = useState(0);
  const classes = useStyle();
  const [nutrition] = useState(filterNutrition(data[0])[3]);
  const [nutritionNames, nutritionValues, nutritionColors] = filterNutrition(
    nutrition
  );

  useEffect(() => {
    const request = async () => {
      await axios.get(`/api/v1/category/${categoryId}/food`);
    };
    request();
  }, [categoryId]);

  return (
    <Container screenSize="xs" direction="column" itemColumns="12" spacing={2}>
      <Container
        screenSize="xs"
        key="1"
        direction="row"
        itemColumns="6"
        spacing={2}
      >
        <Button event={() => {}} className="" variant="contained" key="1">
          Back
        </Button>
        <Button event={() => {}} className="" variant="contained" key="2">
          Add Food
        </Button>
      </Container>
      <InputField
        placeholder="Quantity"
        onChange={({ target: { value } }) => setQuantity(value)}
        value={quantity}
        variant="outlined"
        type="number"
        className=""
        key="2"
        label="Quantity"
        InputProps={{
          endAdornment: <span>g</span>,
        }}
      />
      <Chart
        legend={nutritionNames}
        section={nutritionValues}
        sectionBackground={nutritionColors}
        height={400}
        width={400}
        key="3"
      />
      <Container
        screenSize="xs"
        key="4"
        direction="column"
        itemColumns="12"
        spacing={2}
      >
        <Typography key="1" variant="h4">
          Nutrition Fact
        </Typography>
        <Container
          key="2"
          screenSize="xs"
          direction="column"
          itemColumns="12"
          spacing={2}
          style={{ height: '100px', overflow: 'auto' }}
        >
          {Object.entries(nutrition).map(([name, value], index) => (
            <div key={name} className={classes.nutritionTable}>
              <span
                className={classes.nutritionValues}
                style={{ color: nutritionColors[index] }}
              >
                {name}
              </span>
              <span className={classes.nutritionValues}>{value || 0} g</span>
            </div>
          ))}
        </Container>
      </Container>
    </Container>
  );
}

export default FoodQuantity;
