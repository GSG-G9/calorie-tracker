import React from 'react';
import { Container, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const { node, string } = PropTypes;

function ContainerComponent({
  children,
  screenSize,
  direction,
  itemColumns,
  spacing,
  ...rest
}) {
  return (
    <Container maxWidth={screenSize} {...rest}>
      <Grid container direction={direction} justify="center" spacing={spacing}>
        {console.log(children)}
        {children.map((element) => (
          <Grid
            item
            sm={screenSize === 'sm' ? itemColumns : false}
            md={screenSize === 'md' ? itemColumns : false}
            lg={screenSize === 'lg' ? itemColumns : false}
          >
            {element}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

ContainerComponent.propTypes = {
  children: node.isRequired,
  screenSize: string,
  direction: string.isRequired,
  itemColumns: string.isRequired,
  spacing: string.isRequired,
};

ContainerComponent.defaultProps = {
  screenSize: 'sm',
};

export default ContainerComponent;
