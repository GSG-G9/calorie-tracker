import React from 'react';
import { number, objectOf, oneOfType, string } from 'prop-types';
import Container from '../../common/Container';

import useStyle from './style';

function NutritionTable(props) {
  const classes = useStyle();
  const {
    nutrition: {
      calories_per_gram: Calories,
      carbs: Carbs,
      cholesterol: Cholesterol,
      fat: Fat,
      protein: Protein,
      sugar: Sugar,
      vitamin_a: VitaminA,
      vitamin_c: VitaminC,
      vitamin_d: VitaminD,
    },
    quantity,
  } = props;
  const nutritionOnly = {
    Calories,
    Carbs,
    Cholesterol,
    Fat,
    Protein,
    Sugar,
    VitaminA,
    VitaminC,
    VitaminD,
  };
  return (
    <Container
      screenSize="xs"
      key="4"
      direction="column"
      itemColumns="12"
      spacing={2}
    >
      {[
        <Container
          key="2"
          screenSize="xs"
          direction="column"
          itemColumns="12"
          spacing={0}
          className={classes.nutritionFact}
        >
          {Object.entries(nutritionOnly).map(([name, value], index) => (
            <div
              key={name}
              className={classes.nutritionTable}
              style={{ backgroundColor: index % 2 ? '#E1EBED' : 'transparent' }}
            >
              <span className={classes.nutritionValues}>{name}</span>
              <span className={classes.nutritionValues}>
                {value * quantity || 0} {name === 'Calories' ? 'Cal' : 'G'}
              </span>
            </div>
          ))}
        </Container>,
      ]}
    </Container>
  );
}
NutritionTable.propTypes = {
  nutrition: objectOf(oneOfType([number, string])).isRequired,
  quantity: number.isRequired,
};
export default NutritionTable;
