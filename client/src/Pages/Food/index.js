import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { withStyles } from '@material-ui/core';
import IconLabeledButton from '../../components/Button';
import ContainerComponent from '../../components/Container';
import TextInputField from '../../components/InputField';
import CardComponent from '../../components/Card';

// const useStyle = withStyles((theme) => ({
//   searchInput: {
//     width: 75%
//   }
// }));

function FoodPage() {
  // const classes = useStyle;
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
  }, []);
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
              {allFood
                ? allFood.data
                    .filter(
                      (row) =>
                        row.food_name
                          .toLowerCase()
                          .indexOf(searchValue.toLowerCase()) === 0
                    )
                    .filter((row) => row.food_type_id === foodFilter)
                    .map((row) => (
                      <>
                        <p>{row.food_name}</p>
                        <p>{row.food_type_id}</p>
                        <img src={row.image} alt={row.food_name} />
                      </>
                    ))
                : null}
            </CardComponent>
          </ContainerComponent>
        </>
      )}
    </>
  );
}

export default FoodPage;
