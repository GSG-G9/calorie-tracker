import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import FoodItems from '../FoodItems';
import Container from '../Container';
import Button from '../Button';

const useStyle = makeStyles((theme) => ({
  button: {
    color: theme.customColors.white,
    fontSize: '20px',
  },
  container: {
    width: '300px',
  },
}));

function FoodItemsSelected() {
  useEffect(() => {
    const res = axios.post('https://jsonplaceholder.typicode.com/todos/1');
    console.log(res);
  }, []);
  const classes = useStyle();
  return (
    <Container direction="column" itemColumns="12" spacing={4}>
      <FoodItems
        foodArray={[
          { name: 'Chicken', id: 1, calories: 200 },
          { name: 'Banana', id: 2, calories: 300 },
          { name: 'Mango', id: 3, calories: 500 },
          { name: 'Mango', id: 4, calories: 500 },
          { name: 'Mango', id: 5, calories: 500 },
          { name: 'Mango', id: 6, calories: 500 },
          { name: 'Mango', id: 7, calories: 500 },
          { name: 'Mango', id: 8, calories: 500 },
        ]}
      />
      <Container direction="row">
        <Button
          color="primary"
          className={classes.button}
          variant="contained"
          disable={false}
          event={() => {}}
        >
          save
        </Button>
        <Button
          color="primary"
          className={classes.button}
          variant="contained"
          disable={false}
          event={() => {}}
        >
          add food
        </Button>
      </Container>
    </Container>
  );
}

export default FoodItemsSelected;
