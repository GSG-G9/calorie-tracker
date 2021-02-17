import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { string, number, shape, func } from 'prop-types';
import useStyle from './style';

function AddExercise(props) {
  const {
    methods: { handleClose, handlePostRequest },
    params: { open, exerciseName, exerciseCalories, exerciseId },
  } = props;
  const classes = useStyle();

  const [duration, setDuration] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  return (
    <div className={classes.container}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Exercise Duration</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            value={exerciseName}
            id="Exercise Name"
            label="Exercise Name"
            type="text"
            fullWidth
          />
          <TextField
            value={exerciseCalories}
            autoFocus
            margin="dense"
            id="Calories"
            label="Calories"
            type="number"
            fullWidth
            InputProps={{
              endAdornment: <span>Calories/hour</span>,
            }}
          />
          <TextField
            autoFocus
            value={duration}
            onChange={({ target: { value } }) => {
              setDuration(+value);
              setCaloriesBurned(Math.floor((exerciseCalories * +value) / 60));
            }}
            className={classes.inputDuration}
            margin="dense"
            id="Duration"
            label="Duration"
            type="number"
            InputProps={{
              endAdornment: <span>minutes</span>,
            }}
            fullWidth
          />
          <TextField
            autoFocus
            value={caloriesBurned}
            margin="dense"
            id="Calories Burned"
            label="Calories Burned"
            type="number"
            InputProps={{
              endAdornment: <span>Calories</span>,
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions className={classes.buttons}>
          <Button onClick={handleClose} variant="contained" color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              handlePostRequest(exerciseId, duration);
              return handleClose();
            }}
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AddExercise.propTypes = {
  params: shape({
    exerciseName: string,
    exerciseCalories: number,
    exerciseId: number.isRequired,
  }),
  methods: shape({
    handleClose: func.isRequired,
    handlePostRequest: func.isRequired,
  }).isRequired,
};

AddExercise.defaultProps = {
  params: { exerciseName: 'Walking', exerciseCalories: '300' },
};

export default AddExercise;
