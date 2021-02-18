import React from 'react';
import { number, string, oneOfType, arrayOf, func, objectOf } from 'prop-types';
import Container from '../../common/Container';
import ExerciseItem from '../ExerciseItem';

function ExerciseItems(props) {
  const { exercises, handleClickOpen, userExercisesList } = props;
  return (
    <Container direction="column" spacing={1} itemColumns="12" screenSize="sm">
      <ExerciseItem
        headerRow
        element={{
          exercise_name: 'Exercise Name',
          caloriesPerHour: 'Calories/hr',
          id: 0,
        }}
        key="Header"
        handleClickOpen={handleClickOpen}
      />
      <Container
        key="table"
        direction="column"
        spacing={1}
        itemColumns="12"
        screenSize="sm"
      >
        {exercises.map((exercise) => (
          <ExerciseItem
            element={exercise}
            key={exercise.id}
            handleClickOpen={handleClickOpen}
            isChecked={userExercisesList.some(
              ({ exercises_id: exerciseId }) => exercise.id === exerciseId
            )}
          />
        ))}
      </Container>
    </Container>
  );
}

ExerciseItems.propTypes = {
  exercises: arrayOf(objectOf(oneOfType([number, string]))).isRequired,
  userExercisesList: arrayOf(objectOf(oneOfType([number, string]))).isRequired,
  handleClickOpen: func.isRequired,
};

export default ExerciseItems;
