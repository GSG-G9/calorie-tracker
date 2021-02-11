import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes, { oneOfType } from 'prop-types';
import FoodItem from '../FoodItem';

const { arrayOf, objectOf, string, number } = PropTypes;
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
function FootItems({ foodArray }) {
  const classes = useStyle();
  return (
    <ul className={classes.list}>
      {foodArray.map(({ name, id, calories }) => (
        <FoodItem label={name} calories={calories} key={id} />
      ))}
    </ul>
  );
}

FootItems.propTypes = {
  foodArray: arrayOf(objectOf(oneOfType([number, string]))).isRequired,
};
export default FootItems;
