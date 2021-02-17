import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { oneOfType, func, arrayOf, objectOf, string, number } from 'prop-types';
import FoodItem from '../FoodItem';

const useStyle = makeStyles((theme) => ({
  list: {
    width: '100%',
    backgroundColor: theme.customColors[6],
    padding: '0 10px',
    borderRadius: '10px',
    height: '200px',
    overflow: 'auto',
  },
}));
function FootItems({ foodArray, handleDeleteRequest }) {
  const classes = useStyle();
  return (
    <ul className={classes.list}>
      {foodArray.map(
        ({
          food_name: foodName,
          food_id: foodId,
          unique_id: uniqueId,
          calories_per_gram: caloriesPerGram,
          amount_in_grams: amountInGrams,
        }) => {
          const calories = +(+caloriesPerGram * +amountInGrams).toFixed(0);
          return (
            <FoodItem
              label={foodName}
              calories={calories}
              key={uniqueId}
              userFoodId={uniqueId}
              foodId={foodId}
              handleDeleteRequest={handleDeleteRequest}
            />
          );
        }
      )}
    </ul>
  );
}

FootItems.propTypes = {
  foodArray: arrayOf(objectOf(oneOfType([number, string]))).isRequired,
  handleDeleteRequest: func.isRequired,
};
export default FootItems;
