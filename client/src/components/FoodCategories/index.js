import React from 'react';

import FoodCategoryButton from '../FoodCategoryButton';

import Container from '../Container';

function FoodCatagories() {
  return (
    <Container direction="column" itemColumns="12" spacing={4}>
      <FoodCategoryButton label="Breakfast" />
      <FoodCategoryButton label="Lunch" />
      <FoodCategoryButton label="Dinner" />
      <FoodCategoryButton label="Snacks" />
    </Container>
  );
}
export default FoodCatagories;
