import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';

const { node, string } = PropTypes;

function ContainerComponent({ children, screenSize }) {
  return <Container maxWidth={screenSize}>{children}</Container>;
}

ContainerComponent.propTypes = {
  children: node.isRequired,
  screenSize: string,
};

ContainerComponent.defaultProps = {
  screenSize: 'sm',
};

export default ContainerComponent;
