import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import PropTypes from 'prop-types';

const { string, number, func } = PropTypes;
const useStyle = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    cursor: 'pointer',
  },
  food: {
    color: theme.customColors[1],
    fontSize: '20px',
    textAlign: 'left',
  },
  calories: {
    color: theme.customColors[5],
    fontSize: '15px',
  },
}));

function FoodItem({
  label,
  calories,
  userFoodId,
  foodId,
  handleDeleteRequest,
}) {
  const classes = useStyle();
  return (
    <li className={classes.container}>
      <p className={classes.food}>
        {label}
        <span className={classes.calories}> {calories} Cal</span>
      </p>
      <div>
        <EditIcon className={classes.icon} />
        <HighlightOffTwoToneIcon
          className={classes.icon}
          onClick={handleDeleteRequest(userFoodId, foodId)}
          color="primary"
        />
      </div>
    </li>
  );
}

FoodItem.propTypes = {
  label: string.isRequired,
  calories: number.isRequired,
  userFoodId: number.isRequired,
  handleDeleteRequest: func.isRequired,
  foodId: number.isRequired,
};
export default FoodItem;
