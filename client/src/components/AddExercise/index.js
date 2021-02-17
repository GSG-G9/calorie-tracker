import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { string, number } from 'prop-types';
import useStyle from './style';

function AddExercise(props) {
  const { exerciseName, exerciseCalories } = props;
  const classes = useStyle();

  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Exercise</DialogTitle>
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
            onChange={({ target: { value } }) => setDuration(+value)}
            margin="dense"
            id="Duration"
            label="Duration"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions className={classes}>
          <Button onClick={handleClose} variant="contained" color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AddExercise.propTypes = {
  exerciseName: string,
  exerciseCalories: number,
};

AddExercise.defaultProps = {
  exerciseName: 'Walking',
  exerciseCalories: '300',
};

export default AddExercise;
