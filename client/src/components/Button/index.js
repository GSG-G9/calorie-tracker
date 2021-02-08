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

const { string, func, bool, node } = PropTypes;

IconLabeledButton.propTypes = {
  variant: string.isRequired,
  className: string.isRequired,
  children: node.isRequired,
  event: func.isRequired,
  disable: bool.isRequired,
};

export default IconLabeledButton;
