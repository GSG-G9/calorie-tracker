import React from 'react';
import { Container, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const { node, string } = PropTypes;

function ContainerComponent({
  children,
  screenSize,
  direction,
  itemColumns,
  spacing,
  ...rest
}) {
  const classes = useStyle();
  return (
    <Container maxWidth={screenSize} {...rest}>
      <Grid container direction={direction} justify="center" spacing={+spacing}>
        {children.map((element) => (
          <Grid
            className={classes.grid}
            key={element.key}
            item
            sm={screenSize === 'sm' ? +itemColumns : false}
            md={screenSize === 'md' ? +itemColumns : false}
            lg={screenSize === 'lg' ? +itemColumns : false}
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
