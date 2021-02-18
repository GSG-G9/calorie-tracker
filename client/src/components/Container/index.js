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

const { node, string, number, bool } = PropTypes;

function ContainerComponent({
  children,
  screenSize,
  direction,
  itemColumns,
  spacing,
  gridUserWidth,
  displayNone,
  ...rest
}) {
  const classes = useStyle();
  return (
    <Container maxWidth={screenSize} {...rest}>
      <Grid container direction={direction} justify="center" spacing={+spacing}>
        {children.map((element) => (
          <Grid
            style={{
              width: gridUserWidth,
              display: element.props.displayNone ? 'none' : 'block',
            }}
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
  spacing: number.isRequired,
  gridUserWidth: string,
  displayNone: bool,
};

ContainerComponent.defaultProps = {
  screenSize: 'sm',
  gridUserWidth: 'auto',
  displayNone: false,
};

export default ContainerComponent;
