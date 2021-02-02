import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';

function ContainerComponent({ children, screenSize }) {
  return <Container maxWidth={screenSize}>{children}</Container>;
}

ContainerComponent.propTypes = {
  children: PropTypes.node.isRequired,
  screenSize: PropTypes.string.isRequired,
};

export default ContainerComponent;
