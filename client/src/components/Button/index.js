import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const IconLabeledButton = ({ variant, color, icon, text, event, disable }) => (
  <Button
    variant={variant}
    color={color}
    endIcon={icon}
    disabled={disable}
    onClick={event}
  >
    {text}
  </Button>
);

IconLabeledButton.defaultProps = {
  icon: null,
};

IconLabeledButton.propTypes = {
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.node,
  text: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
  disable: PropTypes.string.isRequired,
};

export default IconLabeledButton;
