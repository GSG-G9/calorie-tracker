import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, FormHelperText } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    display: 'block',
  },
  formControl: {
    minWidth: 120,
  },
});

function ControlledOpenSelect(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { value, handleChange, activityError } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div
      style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}
    >
      <Button className={classes.button} onClick={handleOpen}>
        Select Your Activity
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Activity</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          onChange={handleChange}
        >
          <MenuItem value={0}>Very Active</MenuItem>
          <MenuItem value={1}>Active</MenuItem>
          <MenuItem value={2}>light active</MenuItem>
          <MenuItem value={3}>lazy</MenuItem>
        </Select>
      </FormControl>
      {activityError && (
        <FormHelperText className="Mui-error">
          You Have to choose an activity !
        </FormHelperText>
      )}
    </div>
  );
}

export default ControlledOpenSelect;
