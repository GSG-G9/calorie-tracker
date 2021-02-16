import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden, CardMedia, useMediaQuery } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import FoodItemsSelected from '../FoodItemsSelected';
import FoodCategoryButton from '../FoodCategoryButton';
import Container from '../../Container';

const foodCategories = {
  1: 'breakfast',
  2: 'lunch',
  3: 'dinner',
  4: 'snack',
  0: '',
};
const useStyle = makeStyles({
  FoodItemsSelected: {
    width: '300px',
    height: '300px',
  },
  media: {
    height: '300px',
    width: '300px',
  },
  container: {
    maxWidth: '80%',
    '@media(min-width:600px)': { marginTop: '10rem' },
  },
});
function FoodCatagories() {
  const { state } = useLocation();
  const categoryId = state ? state.categoryId : 0;
  const classes = useStyle();
  const [showIcon, setShowIcon] = useState({
    foodCategory: foodCategories[categoryId],
    id: categoryId,
  });
  const matchSmallScreen = useMediaQuery('(max-width:600px)');
  const handleShowSelectedFood = useCallback(
    (food, id) => () => {
      setShowIcon(
        showIcon.foodCategory === food
          ? { foodCategory: '', id: 0 }
          : { foodCategory: food, id }
      );
    },
    [setShowIcon, showIcon]
  );

  return (
    <Container
      className={classes.container}
      key="2"
      direction={matchSmallScreen ? 'column' : 'row'}
      itemColumns={matchSmallScreen ? '12' : '4'}
      spacing={2}
    >
      <Hidden key="4" smDown>
        <CardMedia
          className={classes.media}
          component="img"
          src="/foodCategory/logo512.png"
        />
      </Hidden>
      <Container key="1" direction="column" itemColumns="12" spacing={4}>
        {[
          { label: 'Breakfast', id: 1 },
          { label: 'Lunch', id: 2 },
          { label: 'Dinner', id: 3 },
          { label: 'Snacks', id: 4 },
        ]
          .filter(({ id }) =>
            matchSmallScreen ? showIcon.id === 0 || showIcon.id === id : id
          )
          .map(({ id, label }) => (
            <FoodCategoryButton
              key={id}
              label={label}
              showIcon={showIcon.foodCategory !== label}
              handleClick={handleShowSelectedFood(label, id)}
            />
          ))}
      </Container>
      <div key="2" className={classes.FoodItemsSelected}>
        {showIcon.foodCategory && (
          <FoodItemsSelected foodCategoryId={showIcon.id} key="5" />
        )}
      </div>
    </Container>
  );
}
export default FoodCatagories;
