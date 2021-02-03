import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const IconLabeledButton = ({ variant, styles, icon, text, event, disable }) => (
  <Button
    variant={variant}
    style={styles}
    endIcon={icon}
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
};

IconLabeledButton.propTypes = {
  variant: string.isRequired,
  styles: objectOf(string),
  icon: element,
  text: string.isRequired,
  event: func,
  disable: bool.isRequired,
};

export default IconLabeledButton;
