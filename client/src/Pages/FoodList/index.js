import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { useHistory } from 'react-router-dom';
import IconLabeledButton from '../../components/Button';
import ContainerComponent from '../../components/Container';
import TextInputField from '../../components/InputField';
import CardComponent from '../../components/Card';

const useStyle = makeStyles((theme) => ({
  searchBar: {
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
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: theme.customColors[6],
    display: 'flex',
    flexDirection: 'row',
  },
  media: {
    borderRadius: 50,
    width: '50%',
    height: '50%',
    margin: 'auto',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
  },
  detail: {
    width: '60%',
    height: 'fit-content',
    margin: 'auto',
    marginLeft: 10,
  },
  iconAdd: {
    color: theme.customColors[3],
  },
  backBtn: {
    width: 'fit-content',
    marginTop: '20%',
    marginLeft: '10%',
    backgroundColor: theme.customColors[3],
    color: theme.customColors[6],
  },
}));

function AllFoodList() {
  const history = useHistory();
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
          <ContainerComponent
            className={classes.searchBar}
            direction="column"
            spacing={5}
            screenSize="xs"
            itemColumns="6"
          >
            <TextInputField
              type="text"
              className={classes.searchInput}
              label="Search"
              variant="filled"
              onChange={({ target: { value } }) => setShowFoodName(value)}
              placeholder="search for your desired food"
            />
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
          </ContainerComponent>

          <ContainerComponent
            direction="row"
            spacing={4}
            screenSize="sm"
            itemColumns="4"
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
                      ContentClassName={classes.content}
                      cardClassName={classes.foodCard}
                    >
                      <img
                        className={classes.media}
                        src={image}
                        alt={foodsName}
                      />
                      <p className={classes.detail}>
                        `{foodsName}: ({foodsType})`
                      </p>
                      <AddCircleOutlinedIcon
                        className={classes.iconAdd}
                        onClick={() => history.push('/food/list/quantity')}
                      />
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
          <IconLabeledButton
            className={classes.backBtn}
            variant="outlined"
            disable={false}
            event={() => history.push('/food')}
          >
            Back
          </IconLabeledButton>
        </>
      )}
    </>
  );
}

export default AllFoodList;