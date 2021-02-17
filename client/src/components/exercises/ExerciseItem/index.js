import React from 'react';
import { FormControlLabel, Checkbox, Typography } from '@material-ui/core';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { func, shape, bool } from 'prop-types';

function ExerciseItem(props) {
  const { handleClickOpen, element, isChecked } = props;
  const {
    exercise_name: exerciseName,
    caloriesPerHour,
    id: exerciseId,
  } = element;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '80vw',
        alignItems: 'center',
        border: '1px solid black',
        borderRadius: '1rem',
        padding: '0.5rem',
        '@media(minWidth:600px)': {
          width: '40vw',
        },
      }}
    >
      <FormControlLabel
        control={
          <Checkbox checked={isChecked} name="checkedF" color="primary" />
        }
      />
      <Typography style={{ width: '40%' }}>{exerciseName}</Typography>
      <Typography style={{ width: '40%' }}>{caloriesPerHour}</Typography>
      <AddCircleOutlinedIcon
        style={{ cursor: 'pointer' }}
        onClick={() =>
          handleClickOpen(exerciseName, caloriesPerHour, exerciseId)
        }
      />
    </div>
  );
}

ExerciseItem.propTypes = {
  handleClickOpen: func.isRequired,
  element: shape({}).isRequired,
  isChecked: bool,
};
ExerciseItem.defaultProps = {
  isChecked: false,
};

export default ExerciseItem;
