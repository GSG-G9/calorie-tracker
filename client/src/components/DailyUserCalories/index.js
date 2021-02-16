import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import DailyCaloriesCard from '../DailyCaloriesCard';
import CustomErrorMessage from '../food/CustomErrorMessage';
import CircularProgressWithLabel from '../CircularProgress';
import Loading from '../Loading';

function DailyUserCalories() {
  const [loading, setLoading] = useState(true);
  const [goal, setGoal] = useState();
  const [food, setFood] = useState();
  const [exercises, setExercises] = useState();
  const [remaining, setRemaining] = useState();
  const [ErrorMessage, setErrorMessage] = useState('');

  const useStyles = makeStyles(() => ({
    root: {
      '@media (min-device-width: 900px)': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      },
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    const getCalories = async () => {
      try {
        const {
          data: {
            data: {
              userCalories,
              userFoodCalories,
              userExercisesCalories,
              remainingCalories,
            },
          },
        } = await Axios.get('/api/v1/user/calories');

        setGoal(Math.round(userCalories));

        setFood(Math.round(userFoodCalories));

        setExercises(Math.round(userExercisesCalories));

        setRemaining(Math.round(remainingCalories));

        setLoading(false);
        setErrorMessage('success');

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
    <CustomErrorMessage
      errorMessage={ErrorMessage}
      component={
        <div className={classes.root}>
          <DailyCaloriesCard
            goal={goal}
            food={food}
            exercises={exercises}
            remaining={remaining}
          />
          <CircularProgressWithLabel value={(1 - remaining / goal) * 100} />{' '}
        </div>
      }
    />
  );
}

export default DailyUserCalories;
