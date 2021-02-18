import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FoodItems from '../FoodItems';
import Container from '../../common/Container';
import Button from '../../common/Button';
import { FoodList, FoodQuantityPath } from '../../../utils/constant';
import Loading from '../../common/Loading';
import CustomErrorMessage from '../../common/CustomErrorMessage';

const { number, func, bool } = PropTypes;

const useStyle = makeStyles((theme) => ({
  button: {
    color: theme.customColors.white,
    fontSize: '20px',
    textTransform: 'capitalize',
  },
  container: {
    width: '300px',
  },
  totalCalories: {
    fontSize: '20px',
    fontWeight: '800',
  },
  errorMessage: {
    width: '100%',
    backgroundColor: theme.customColors[6],
    padding: '0 10px',
    borderRadius: '10px',
    height: '200px',
    overflow: 'auto',
  },
}));

function FoodItemsSelected(props) {
  const { foodCategoryId, getData, setGetData } = props;
  const history = useHistory();
  const [foodArray, setFoodArray] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEditRequest = (userFoodId, foodId) => {
    history.push(FoodQuantityPath, {
      categoryId: foodCategoryId,
      foodId,
      userFoodId,
      isEditFood: true,
    });
  };

  const handleDeleteRequest = (userFoodRelationId, foodId) => async () => {
    try {
      setShowLoading(true);
      await axios.delete(`/api/v1/category/${foodCategoryId}/food/${foodId}`, {
        data: { userFoodRelationId },
      });
      setErrorMessage('success');
      setGetData((item) => !item);
      return setShowLoading(false);
    } catch (err) {
      setShowLoading(false);
      return setErrorMessage(
        err.response ? err.response.message : 'Something went wrong !! '
      );
    }
  };

  useEffect(() => {
    let source;
    (async () => {
      const { CancelToken } = axios;
      source = CancelToken.source();
      try {
        setShowLoading(true);
        const {
          data: { data },
        } = await axios.get(`/api/v1/category/${foodCategoryId}/food`, {
          cancelToken: source.token,
        });
        setTotalCalories(
          data
            .reduce(
              (
                calories,
                {
                  calories_per_gram: caloriesPerGram,
                  amount_in_grams: amountInGrams,
                }
              ) => calories + +caloriesPerGram * +amountInGrams,
              0
            )
            .toFixed(0)
        );
        setFoodArray(data);
        setErrorMessage('success');
        return setShowLoading(false);
      } catch (err) {
        setShowLoading(false);
        return setErrorMessage(
          err.response.data.message || 'Something went wrong !! '
        );
      }
    })();
    return () => source.cancel('Operation canceled by the user.');
  }, [foodCategoryId, getData]);

  const classes = useStyle();
  return (
    <Container direction="column" itemColumns="12" spacing={1}>
      {showLoading ? (
        <Loading key="10" height200px />
      ) : (
        <CustomErrorMessage
          className={classes.errorMessage}
          errorMessage={errorMessage}
          component={
            <FoodItems
              key="1"
              foodArray={foodArray}
              handleDeleteRequest={handleDeleteRequest}
              handleEditRequest={handleEditRequest}
            />
          }
        />
      )}
      <Container key="2" direction="row" itemColumns="12" spacing={1}>
        {[
          <p key="3" className={classes.totalCalories}>
            Total : {totalCalories} Cal
          </p>,
          <Button
            key="1"
            color="primary"
            className={classes.button}
            variant="contained"
            disable={false}
            event={() => history.push(FoodList, { categoryId: foodCategoryId })}
          >
            add food
          </Button>,
        ]}
      </Container>
    </Container>
  );
}

FoodItemsSelected.propTypes = {
  foodCategoryId: number.isRequired,
  getData: bool.isRequired,
  setGetData: func.isRequired,
};

export default FoodItemsSelected;
