import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Checkbox } from '@material-ui/core';

const { string, element, func, objectOf } = PropTypes;

const LabeledCheckbox = ({ label, icon, checkedIcon, handleChange, style }) => {
  const [state, setState] = useState({
    checked: true,
  });

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={state.checked}
          onChange={handleChange}
          name="checked"
          style={style}
          icon={icon}
          checkedIcon={checkedIcon}
        />
      }
      label={label}
    />
  );
};

LabeledCheckbox.propTypes = {
  icon: element.isRequired,
  checkedIcon: element.isRequired,
  label: string.isRequired,
  handleChange: func.isRequired,
  style: objectOf(string).isRequired,
};

export default LabeledCheckbox;
