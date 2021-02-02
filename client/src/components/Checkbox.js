import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Checkbox } from '@material-ui/core';

const LabeledCheckbox = ({ label, color, icon, checkedIcon }) => {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={state.checked}
          onChange={handleChange}
          name="checked"
          color={color}
          icon={icon}
          checkedIcon={checkedIcon}
        />
      }
      label={label}
    />
  );
};

LabeledCheckbox.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  checkedIcon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};

export default LabeledCheckbox;
