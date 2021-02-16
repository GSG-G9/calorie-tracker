import React, { useState, useLayoutEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
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
import CustomErrorMessage from '../CustomErrorMessage';

const handleAddFoodQuantity = (
  quantity,
  categoryId,
  foodId,
  history,
  setShowLoadingPost,
  setPostErrorMessage
) => () => async () => {
  try {
    setShowLoadingPost(true);
    await axios.post(`/api/v1/category/${categoryId}/food/${foodId}`, {
      grams: quantity,
    });

    setPostErrorMessage('success');
    setShowLoadingPost(false);
    return history.push('/food', { categoryId });
  } catch (err) {
    setShowLoadingPost(false);
    return setPostErrorMessage(
      err.response.data.message || 'Something went wrong !! '
    );
  }
};

function FoodQuantity() {
  // const {
  //   state: { foodId, categoryId },
  // } = useLocation();
  const foodId = 1;
  const categoryId = 1;
  const smallScreen = useMediaQuery('(max-width:600px)');
  const history = useHistory();
  const [quantity, setQuantity] = useState(1);
  const classes = useStyle();
  const [showLoading, setShowLoading] = useState(true);
  const [showLoadingPost, setShowLoadingPost] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [postErrorMessage, setPostErrorMessage] = useState('');

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
        const {
          data: { data: foodData },
        } = await axios.get(`/api/v1/category/${categoryId}/food/${foodId}`);
        setNutrition(foodData);
        setErrorMessage('success');
        return setShowLoading(false);
      } catch (err) {
        setShowLoading(false);
        return setErrorMessage(
          err.response.data.message || 'Something went wrong !! '
        );
      }
    };
    request();
  }, [categoryId, foodId]);

  return (
    <>
      <Container
        screenSize={smallScreen ? 'xs' : 'md'}
        direction={smallScreen ? 'column' : 'row'}
        itemColumns="12"
        spacing={2}
        className={classes.container}
      >
        {showLoading
          ? [<Loading key="loading" circleSize={100} />]
          : [
              <CustomErrorMessage
                key="errorMessage"
                className={classes.errorMessage}
                errorMessage={errorMessage}
                component={
                  <Container
                    screenSize={smallScreen ? 'xs' : 'md'}
                    direction={smallScreen ? 'column' : 'row'}
                    itemColumns="6"
                    spacing={2}
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
                        onChange={({ target: { value } }) =>
                          setQuantity(+value)
                        }
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
                          setShowLoadingPost,
                          setPostErrorMessage
                        )}
                      />
                      <div key="35">
                        {showLoadingPost ? (
                          <Loading />
                        ) : (
                          <CustomErrorMessage errorMessage={postErrorMessage} />
                        )}
                      </div>
                    </Container>
                    <NutritionTable
                      key="33"
                      nutrition={nutrition}
                      quantity={quantity}
                    />
                  </Container>
                }
              />,
            ]}
      </Container>
    </>
  );
}

export default FoodQuantity;
