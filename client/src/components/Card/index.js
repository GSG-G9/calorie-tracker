import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@material-ui/core';
import './style.css';

const { string, node } = PropTypes;

const CardComponent = ({ cardClassName, ContentClassName, children }) => (
  <Card className={cardClassName}>
    <CardContent className={ContentClassName}>{children}</CardContent>
  </Card>
);
CardComponent.defaultProps = {
  cardClassName: '',
};

CardComponent.propTypes = {
  cardClassName: string,
  ContentClassName: string.isRequired,
  children: node.isRequired,
};

export default CardComponent;
