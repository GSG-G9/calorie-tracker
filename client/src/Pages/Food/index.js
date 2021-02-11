import React, { useEffect, useState } from 'react';
import IconLabeledButton from '../../components/Button';
import ContainerComponent from '../../components/Container';
import TextInputField from '../../components/InputFeild';
import CardComponent from '../../components/Card';

const axios = require('axios');

function FoodPage() {
  const [allFood, setAllFood] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [foodFilter, setFoodFilter] = useState('');
  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    (async () => {
      try {
        const food = await axios.get('/api/v1/food');
        return setAllFood(food);
      } catch (err) {
        return setErrorMessage(
          err.response.data.message || 'something went wrong'
        );
      }
    })();
    return () => source.cancel('Operation canceled by the user.');
  });
  return (
    <>
      <h1>Food Page</h1>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <>
          <TextInputField
            type="text"
            className="searchInput"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="search for your desired food"
          />
          <ContainerComponent
            direction="row"
            spacing={9}
            screenSize="sm"
            itemColumns="2"
          >
            <IconLabeledButton
              variant="outlined"
              disable={false}
              className="filterFoodButton"
              event={setFoodFilter('meal')}
            >
              Meals
            </IconLabeledButton>
            <IconLabeledButton
              variant="outlined"
              disable={false}
              className="filterFoodButton"
              event={setFoodFilter('food')}
            >
              Food
            </IconLabeledButton>
          </ContainerComponent>
          <ContainerComponent
            direction="column"
            spacing={9}
            screenSize="sm"
            itemColumns="2"
          >
            <CardComponent
              cardClassName="foodCard"
              ContentClassName="innerFoodContent"
            >
              {allFood.data !== 0
                ? allFood.data
                    .map((row) => (
                      <>
                        <p>{row.food_name}</p>
                        <p>{row.food_type_id}</p>
                        <img src={row.image} alt={row.food_name} />
                      </>
                    ))
                    .filter(
                      (foodName) =>
                        foodName.food_name
                          .toLowerCase()
                          .indexOf(searchValue.toLowerCase()) === 0 &&
                        foodFilter === foodName.food_type_id
                    )
                : 'no food to view'}
            </CardComponent>
          </ContainerComponent>
        </>
      )}
    </>
  );
}

export default FoodPage;
