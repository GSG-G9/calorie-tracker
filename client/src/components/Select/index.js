import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FormHelperText } from '@material-ui/core';
import PropTypes from 'prop-types';

const { number, func, bool } = PropTypes;

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
  },
  formControl: {
    width: '100%',
    color: theme.customColors[1],
    backgroundColor: theme.customColors[7],
  },
  divSelect: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}));

function ControlledOpenSelect(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { value, handleChange, activityIdError } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.divSelect}>
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
          <MenuItem value={0}>None</MenuItem>
          <MenuItem value={1}>Very Active</MenuItem>
          <MenuItem value={2}>Active</MenuItem>
          <MenuItem value={3}>light active</MenuItem>
          <MenuItem value={4}>lazy</MenuItem>
        </Select>
      </FormControl>
      {activityIdError && (
        <FormHelperText className="Mui-error">
          You Have to choose an activity !
        </FormHelperText>
      )}
    </div>
  );
}

ControlledOpenSelect.propTypes = {
  value: number.isRequired,
  handleChange: func.isRequired,
  activityIdError: bool.isRequired,
};
export default ControlledOpenSelect;
