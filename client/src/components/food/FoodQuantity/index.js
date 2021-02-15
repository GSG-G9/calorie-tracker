import React, { useState, useLayoutEffect, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import axios from 'axios';
import Container from '../../Container';
import InputField from '../../InputField';
import Chart from '../../DoughnutChart';
import useStyle from './style';
import AddFoodQuantityButtons from '../AddFoodQuantityButtons';
import NutritionTable from '../NutritionTable';
import filterNutrition from '../../../Utils/filterNutrition';
import Loading from '../../Loading';

const handleAddFoodQuantity = (
  quantity,
  categoryId,
  foodId,
  history,
  setShowLoadingPost
) => () => async () => {
  try {
    setShowLoadingPost(true);
    await axios.post(`/api/v1/category/${categoryId}/food/${foodId}`, {
      grams: quantity,
    });
    history.push('/food', { categoryId });
    setShowLoadingPost(false);
  } catch (err) {
    setShowLoadingPost(false);
  }
};

function FoodQuantity() {
  const {
    state: { foodId, categoryId },
  } = useLocation();
  const smallScreen = useMediaQuery('(max-width:600px)');
  const history = useHistory();
  const [quantity, setQuantity] = useState(1);
  const classes = useStyle();
  const [showLoading, setShowLoading] = useState(false);
  const [showLoadingPost, setShowLoadingPost] = useState(false);

  const [nutrition, setNutrition] = useState({
    fat: 0,
    carbs: 0,
    protein: 0,
    sugar: 0,
    vitamin_a: 0,
    vitamin_c: 0,
    vitamin_d: 0,
    cholesterol: 0,
    calories_per_gram: 0,
    food_name: 'foodName',
  });

  const filterFood = useCallback(() => filterNutrition(nutrition, quantity), [
    nutrition,
    quantity,
  ]);

  const [nutritionNames, nutritionValues, nutritionColors] = filterFood();

  useLayoutEffect(() => {
    const request = async () => {
      try {
        setShowLoading(true);
        const {
          data: { data: foodData },
        } = await axios.get(`/api/v1/category/${categoryId}/food/${foodId}`);
        setNutrition(foodData);
        setShowLoading(false);
      } catch (err) {
        setShowLoading(false);
      }
    };
    request();
  }, [categoryId, foodId]);

  return (
    <>
      {showLoading ? (
        <Loading />
      ) : (
        <Container
          screenSize={smallScreen ? 'xs' : 'md'}
          direction={smallScreen ? 'column' : 'row'}
          itemColumns={smallScreen ? '12' : '6'}
          spacing={2}
          className={classes.container}
        >
          <Container
            key="2"
            screenSize="xs"
            direction="column"
            itemColumns="12"
            spacing={2}
          >
            <Chart
              legend={nutritionNames}
              section={nutritionValues}
              sectionBackground={nutritionColors}
              height={300}
              width={300}
              key="3"
              options={{
                title: {
                  display: true,
                  text: `Food Name :${nutrition.food_name.toUpperCase()}`,
                  fontSize: 25,
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
              onChange={({ target: { value } }) => setQuantity(+value)}
              value={quantity}
              variant="outlined"
              type="number"
              key="2"
              label="Quantity"
              InputProps={{
                endAdornment: <span>g</span>,
              }}
            />

            <AddFoodQuantityButtons
              handleAddFoodQuantity={handleAddFoodQuantity(
                quantity,
                categoryId,
                foodId,
                history,
                setShowLoadingPost
              )}
            />
            <div key="35">{showLoadingPost ? <Loading /> : ''}</div>
          </Container>
          <NutritionTable key="33" nutrition={nutrition} quantity={quantity} />
        </Container>
      )}
    </>
  );
}

export default FoodQuantity;
