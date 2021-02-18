import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from 'axios';
import { makeStyles, useMediaQuery, InputAdornment } from '@material-ui/core';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import IconLabeledButton from '../../common/Button';
import ContainerComponent from '../../common/Container';
import TextInputField from '../../common/InputField';
import CardComponent from '../../common/Card';
import Loading from '../../common/Loading';

const useStyle = makeStyles((theme) => ({
  errorMsg: {
    backgroundColor: theme.customColors[6],
    width: '45%',
    height: '40%',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
  },
  contentMsg: {
    display: 'flex',
    justifyContent: 'center',
  },
  searchBar: {
    width: '90%',
    '@media(min-width:600px)': { marginTop: '5rem' },
  },
  searchInput: {
    borderColor: 'none',
    backgroundColor: theme.customColors[6],
    marginTop: '10%',
  },
  searchIcon: {
    color: theme.customColors[3],
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
    fontWeight: 600,
  },
  iconAdd: {
    color: theme.customColors[3],
    cursor: 'pointer',
  },
  backBtn: {
    width: 'fit-content',
    backgroundColor: theme.customColors[3],
    color: theme.customColors[6],
  },
}));

function AllFood() {
  const {
    state: { categoryId },
  } = useLocation();
  const smallScreen = useMediaQuery('(max-width:600px)');
  const history = useHistory();
  const classes = useStyle();
  const [showLoading, setShowLoading] = useState(true);
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
        setShowLoading(false);
        return setFoodArray(food.data.data);
      } catch (err) {
        setShowLoading(false);
        return setErrorMessage(
          err.response.data.message || 'something went wrong'
        );
      }
    })();
    return () => source.cancel('Operation canceled by the user.');
  }, []);

  return showLoading ? (
    <Loading />
  ) : (
    <>
      {errorMessage ? (
        <CardComponent
          cardClassName={classes.errorMsg}
          ContentClassName={classes.contentMsg}
        >
          {errorMessage}
        </CardComponent>
      ) : (
        <>
          <ContainerComponent
            className={classes.searchBar}
            direction="column"
            spacing={5}
            screenSize="xs"
            itemColumns="3"
          >
            <TextInputField
              key={10001}
              type="text"
              className={classes.searchInput}
              label=""
              variant="filled"
              onChange={({ target: { value } }) => setShowFoodName(value)}
              placeholder="search for food"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon className={classes.searchIcon} />
                  </InputAdornment>
                ),
              }}
            />

            <ContainerComponent
              direction="row"
              spacing={7}
              screenSize="sm"
              itemColumns="6"
              className="filteringButtons"
            >
              <IconLabeledButton
                key={100003}
                variant="outlined"
                disable={false}
                className={classes.filterFoodButton}
                event={() => setShowType('meal')}
              >
                Meals
              </IconLabeledButton>

              <IconLabeledButton
                key={100004}
                variant="outlined"
                disable={false}
                className={classes.filterFoodButton}
                event={() => setShowType('food')}
              >
                Food
              </IconLabeledButton>
            </ContainerComponent>
            <IconLabeledButton
              key={10009}
              className={classes.backBtn}
              variant="outlined"
              disable={false}
              event={() => history.push('/food', { categoryId })}
            >
              Back
            </IconLabeledButton>
          </ContainerComponent>

          <ContainerComponent
            direction="row"
            spacing={4}
            screenSize={smallScreen ? 'xs' : 'md'}
            itemColumns={smallScreen ? '2' : '3'}
            gridUserWidth={smallScreen ? '45%' : '25%'}
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
                .map(({ image, food_name: foodsName, id }) => (
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
                    <p className={classes.detail}>{foodsName}</p>
                    <AddCircleOutlinedIcon
                      className={classes.iconAdd}
                      onClick={() =>
                        history.push('/food/list/quantity', {
                          foodId: id,
                          categoryId,
                        })
                      }
                    />
                  </CardComponent>
                ))
            ) : (
              <CardComponent
                cardClassName={classes.errorMsg}
                ContentClassName={classes.contentMsg}
              >
                No Food to View
              </CardComponent>
            )}
          </ContainerComponent>
        </>
      )}
    </>
  );
}

export default AllFood;
