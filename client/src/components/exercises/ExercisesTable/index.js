import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStyle from './style';
import AddExercise from '../AddExercise';
import ExerciseItems from '../ExerciseItems';
import CustomErrorMessage from '../../food/CustomErrorMessage';
import Loading from '../../Loading';

function ExercisesTable() {
  const [showLoading, setShowLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const classes = useStyle();
  const [exercisesList, setExercisesList] = useState([
    { id: 1, exercise_name: 'bicycling', met: 7.5, caloriesPerHour: 496 },
  ]);
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState(0);
  const [exerciseName, setExerciseName] = useState('running');
  const [exerciseCalories, setExerciseCalories] = useState(500);
  const [exerciseId, setExerciseId] = useState(0);
  const [userExercisesList, setUserExercisesList] = useState([
    { id: 2, exercises_id: 1, duration: 30 },
  ]);
  const [getData, setGetData] = useState(false);
  const handleClickOpen = (
    exerciseNameVar,
    exerciseCaloriesVar,
    exerciseIdVar
  ) => {
    setExerciseName(exerciseNameVar);
    setExerciseCalories(exerciseCaloriesVar);
    setExerciseId(exerciseIdVar);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePostRequest = async (id, exerciseDuration) => {
    try {
      const {
        data: { data },
      } = await axios.post(`/api/v1/exercises/${id}`, {
        exerciseDuration,
      });
      setGetData((item) => !item);
      return console.log(data);
    } catch (err) {
      setGetData((item) => !item);
      return console.log(err.response);
    }
  };

  useEffect(async () => {
    setShowLoading(true);
    const { CancelToken } = axios;
    const source = CancelToken.source();
    try {
      const {
        data: {
          data: { data, userExercises },
        },
      } = await axios.get('/api/v1/exercises', {
        cancelToken: source.token,
      });
      setShowLoading(false);
      setExercisesList(data);
      setErrorMessage('success');
      setUserExercisesList(userExercises);
      return () => source.cancel('Operation canceled by the user.');
    } catch (err) {
      setShowLoading(false);
      return setErrorMessage(
        !err.response
          ? 'Something went wrong !! '
          : err.response.message
          ? err.response.message
          : 'Something went wrong !! '
      );
    }
  }, [getData]);

  return (
    <>
      {showLoading ? (
        <Loading />
      ) : (
        <CustomErrorMessage
          key="1"
          errorMessage={errorMessage}
          component={
            <div className={classes.container}>
              <ExerciseItems
                exercises={exercisesList}
                userExercisesList={userExercisesList}
                handleClickOpen={handleClickOpen}
              />
              <AddExercise
                methods={{
                  handleClickOpen,
                  handleClose,
                  setDuration,
                  handlePostRequest,
                }}
                params={{
                  open,
                  duration,
                  exerciseName,
                  exerciseCalories,
                  exerciseId,
                }}
              />
            </div>
          }
        />
      )}
    </>
  );
}

export default ExercisesTable;
