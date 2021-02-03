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

IconLabeledButton.defaultProps = {
  icon: null,
  event: null,
  styles: { color: 'green' },
};

IconLabeledButton.propTypes = {
  variant: PropTypes.string.isRequired,
  styles: PropTypes.objectOf(PropTypes.string),
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  event: PropTypes.func,
  disable: PropTypes.bool.isRequired,
};

export default IconLabeledButton;
