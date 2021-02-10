import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const TextInputField = ({
  label,
  className,
  type,
  variant,
  placeholder,
  onChange,
  ...rest
}) => (
  <TextField
    type={type}
    className={className}
    label={label}
    variant={variant}
    onChange={onChange}
    placeholder={placeholder}
    {...rest}
  />
);

const { string, func } = PropTypes;

TextInputField.propTypes = {
  type: string.isRequired,
  className: string.isRequired,
  label: string.isRequired,
  variant: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
};

TextInputField.defaultProps = {
  placeholder: '',
};

export default TextInputField;
