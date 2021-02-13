import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FoodItems from '../FoodItems';
import Container from '../../Container';
import Button from '../../Button';
import { MyFood } from '../../../Utils/constant';
import Loading from '../../Loading';

const { number } = PropTypes;

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
}));

function FoodItemsSelected(props) {
  const { foodCategoryId } = props;
  const history = useHistory();
  const [foodArray, setFoodArray] = useState([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get(`/api/v1/category/${foodCategoryId}/food`);

        setTotalCalories(
          (
            data.reduce(
              (
                calories,
                {
                  calories_per_gram: caloriesPerGram,
                  amount_in_grams: amountInGrams,
                }
              ) => calories + +caloriesPerGram * +amountInGrams,
              0
            ) / 1000
          ).toFixed(0)
        );
        setFoodArray(data);
      } catch (err) {
        setShowLoading(true);
      }
    })();
  }, [foodCategoryId]);
  const classes = useStyle();
  return (
    <Container direction="column" itemColumns="12" spacing="1">
      {showLoading ? (
        <Loading key="10" height200px />
      ) : (
        <FoodItems key="1" foodArray={foodArray} />
      )}

      <Container key="2" direction="row" itemColumns="12" spacing="1">
        {[
          <p key="3" className={classes.totalCalories}>
            Total : {totalCalories} Kcal
          </p>,
          <Button
            key="1"
            color="primary"
            className={classes.button}
            variant="contained"
            disable={false}
            event={() => history.push(MyFood)}
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
};

export default FoodItemsSelected;