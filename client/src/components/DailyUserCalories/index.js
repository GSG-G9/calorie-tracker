import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import PropTypes from 'prop-types';
import DailyCaloriesCard from '../DailyCaloriesCard';
import CustomErrorMessage from '../food/CustomErrorMessage';
import CircularProgressWithLabel from '../CircularProgress';
import Loading from '../Loading';

const { bool } = PropTypes;

function DailyUserCalories({ showCard, showChart }) {
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
    const { CancelToken } = Axios;
    const source = CancelToken.source();
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
    return () => source.cancel('Operation canceled');
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <CustomErrorMessage
      errorMessage={ErrorMessage}
      component={
        <div className={classes.root}>
          {showCard && (
            <DailyCaloriesCard
              goal={goal}
              food={food}
              exercises={exercises}
              remaining={remaining}
            />
          )}

          {showChart && (
            <CircularProgressWithLabel value={(1 - remaining / goal) * 100} />
          )}
        </div>
      }
    />
  );
}

DailyUserCalories.propTypes = {
  showCard: bool.isRequired,
  showChart: bool.isRequired,
};

export default DailyUserCalories;
