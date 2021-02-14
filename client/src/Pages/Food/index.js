import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
import IconLabeledButton from '../../components/Button';
import ContainerComponent from '../../components/Container';
import TextInputField from '../../components/InputField';
import CardComponent from '../../components/Card';

const useStyle = makeStyles((theme) => ({
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  searchInput: {
    borderColor: 'none',
    backgroundColor: theme.customColors[6],
    marginTop: '10%',
    marginLeft: '10%',
    marginBottom: '7%',
  },
  filterFoodButton: {
    borderColor: theme.customColors[1],
    color: theme.customColors[1],
    borderRadius: 10,
  },
  foodContainer: {
    width: '100%',
  },
  foodCard: {
    width: '40%',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  foodCardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    borderRadius: 20,
    width: '40%',
    height: '30%',
  },
}));

function FoodPage() {
  const classes = useStyle();
  const [foodArray, setFoodArray] = useState([]);
  const [showType, setShowType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showFoodName, setShowFoodName] = useState('');

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    (async () => {
      try {
        const food = await axios.get('/api/v1/food');
        return setFoodArray(food.data.data);
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
          <div className={classes.searchBar}>
            <TextInputField
              type="text"
              className="searchInput"
              label="Search"
              variant="filled"
              onChange={({ target: { value } }) => setShowFoodName(value)}
              placeholder="search for your desired food"
            />
          </div>

          <ContainerComponent
            direction="row"
            spacing={5}
            screenSize="sm"
            itemColumns="6"
            className="filteringButtons"
          >
            <IconLabeledButton
              variant="outlined"
              disable={false}
              className={classes.filterFoodButton}
              event={() => setShowType('meal')}
            >
              Meals
            </IconLabeledButton>
            <IconLabeledButton
              variant="outlined"
              disable={false}
              className={classes.filterFoodButton}
              event={() => setShowType('food')}
            >
              Food
            </IconLabeledButton>
          </ContainerComponent>
          <ContainerComponent
            direction="row"
            spacing={4}
            screenSize="lg"
            itemColumns="auto"
            className={classes.foodContainer}
          >
            {foodArray ? (
              foodArray
                .filter(({ food_type: foodTypes }) =>
                  showType ? foodTypes === showType : foodTypes
                )
                .filter(({ food_name: foodNames }) =>
                  showFoodName ? foodNames.includes(showFoodName) : foodNames
                )
                .map(
                  ({
                    image,
                    food_name: foodsName,
                    food_type: foodsType,
                    id,
                  }) => (
                    <CardComponent
                      key={id}
                      cardClassName={classes.foodCard}
                      ContentClassName={classes.foodCardContent}
                    >
                      <img
                        className={classes.image}
                        src={image}
                        alt={foodsName}
                      />
                      <p>{foodsName}</p>
                      <p>{foodsType}</p>
                    </CardComponent>
                  )
                )
            ) : (
              <CardComponent
                cardClassName={classes.foodCard}
                ContentClassName={classes.foodCardContent}
              >
                No Food to View
              </CardComponent>
            )}
          </ContainerComponent>
          <IconLabeledButton>Back</IconLabeledButton>
        </>
      )}
    </>
  );
}

export default FoodPage;
