import React from 'react';
import { FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { func, shape, bool } from 'prop-types';
import useStyle from './style';

function ExerciseItem(props) {
  const classes = useStyle();
  const { handleClickOpen, element, isChecked, headerRow } = props;
  const {
    exercise_name: exerciseName,
    caloriesPerHour,
    id: exerciseId,
  } = element;
  return (
    <div className={classes.containerItem}>
      {headerRow ? (
        <p />
      ) : (
        <FormControlLabel
          control={
            <Checkbox checked={isChecked} name="checkedF" color="primary" />
          }
        />
      )}

      <Typography
        className={`${classes.text} ${headerRow ? classes.header : ''}`}
      >
        {exerciseName}
      </Typography>
      <Typography
        className={`${classes.text} ${headerRow ? classes.header : ''}`}
      >
        {caloriesPerHour}
      </Typography>
      {headerRow ? (
        <p />
      ) : (
        <AddCircleOutlinedIcon
          className={classes.icon}
          onClick={() =>
            handleClickOpen(exerciseName, caloriesPerHour, exerciseId)
          }
        />
      )}
    </div>
  );
}

ExerciseItem.propTypes = {
  handleClickOpen: func,
  element: shape({}).isRequired,
  isChecked: bool,
  headerRow: bool,
};
ExerciseItem.defaultProps = {
  isChecked: false,
  headerRow: false,
  handleClickOpen: () => {},
};

export default ExerciseItem;
