import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const IconLabeledButton = ({
  variant,
  children,
  event,
  disable,
  className,
  ...rest
}) => (
  <Button
    variant={variant}
    className={className}
    disabled={disable}
    onClick={event}
    {...rest}
  >
    {children}
  </Button>
);

const { string, func, bool, children } = PropTypes;

IconLabeledButton.defaultProps = {
  event: null,
  className: null,
};

IconLabeledButton.propTypes = {
  variant: string.isRequired,
  className: string,
  children: children.isRequired,
  event: func,
  disable: bool.isRequired,
};

export default IconLabeledButton;
