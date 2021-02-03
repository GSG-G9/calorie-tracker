import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const IconLabeledButton = ({
  variant,
  styles,
  icon,
  text,
  event,
  disable,
  starticon,
}) => (
  <Button
    variant={variant}
    style={styles}
    endIcon={icon}
    startIcon={starticon}
    disabled={disable}
    onClick={event}
  >
    {text}
  </Button>
);

const { string, objectOf, element, func, bool } = PropTypes;

IconLabeledButton.defaultProps = {
  icon: null,
  event: null,
  styles: { color: 'green' },
  starticon: null,
};

IconLabeledButton.propTypes = {
  variant: string.isRequired,
  styles: objectOf(string),
  icon: element,
  text: string.isRequired,
  event: func,
  disable: bool.isRequired,
  starticon: element,
};

export default IconLabeledButton;