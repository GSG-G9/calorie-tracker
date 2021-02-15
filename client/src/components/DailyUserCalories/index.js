import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import DailyCaloriesCard from '../DailyCaloriesCard';
// import DailyCaloriesChart from '../DailyCaloriesChart';
import CircularProgressWithLabel from '../CircularProgress';
import Loading from '../Loading';

function DailyUserCalories() {
  const [loading, setLoading] = useState(true);
  const [goal, setGoal] = useState();
  const [food, setFood] = useState();
  const [exercises, setExercises] = useState();
  const [remaining, setRemaining] = useState();
  const [, setErrorMessage] = useState('');

  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      // alignItems: 'center',
      // border: '1px solid black',
    },
    card: {
      border: '1px solid red',
      float: 'left',
    },
    circular: {
      border: '1px solid blue',
      float: 'left',
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    const getCalories = async () => {
      try {
        const response = await Axios.get('/api/v1/user/calories');
        if (response) {
          setGoal(response.data.data.userCalories);

          setFood(response.data.data.userFoodCalories);

          setExercises(response.data.data.userExercisesCalories);

          setRemaining(response.data.data.remainingCalories);

          setLoading(false);
        }
        return null;
      } catch (err) {
        setLoading(false);
        if (err.response.data.message) {
          return setErrorMessage(err.response.data.message);
        }
        return setErrorMessage('something wrong');
      }
    };
    getCalories();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className={classes.root}>
      <DailyCaloriesCard
        goal={goal}
        food={food}
        exercises={exercises}
        remaining={remaining}
        className={classes.card}
      />
      {/* <DailyCaloriesChart goal={goal} remaining={remaining} /> */}
      <CircularProgressWithLabel
        value={(1 - 200 / 1000) * 100}
        className={classes.circular}
      />
      {/* (1 - remaining / goal) * 100 */}
    </div>
  );
}

export default DailyUserCalories;
