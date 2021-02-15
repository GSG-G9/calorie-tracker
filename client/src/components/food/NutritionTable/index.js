import React from 'react';
import { arrayOf, number, string } from 'prop-types';
import { Typography } from '@material-ui/core';
import Container from '../../Container';

import useStyle from './style';

function NutritionTable(props) {
  const classes = useStyle();
  const { nutrition, quantity } = props;
  return (
    <Container
      screenSize="xs"
      key="4"
      direction="column"
      itemColumns="12"
      spacing={2}
    >
      <Typography key="1" variant="h5">
        Nutrition Fact
      </Typography>
      <Container
        key="2"
        screenSize="xs"
        direction="column"
        itemColumns="12"
        spacing={0}
        className={classes.nutritionFact}
      >
        {Object.entries(nutrition).map(([name, value], index) => (
          <div
            key={name}
            className={classes.nutritionTable}
            style={{ backgroundColor: index % 2 ? '#E1EBED' : 'transparent' }}
          >
            <span className={classes.nutritionValues}>{name}</span>
            <span className={classes.nutritionValues}>
              {value * quantity || 0} g
            </span>
          </div>
        ))}
      </Container>
    </Container>
  );
}
NutritionTable.propTypes = {
  nutrition: arrayOf(number).isRequired,
  quantity: number.isRequired,
};
export default NutritionTable;
