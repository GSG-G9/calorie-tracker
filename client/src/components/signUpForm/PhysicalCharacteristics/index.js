import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Typography, Hidden, CardMedia } from '@material-ui/core';

import InputField from '../../InputField';
import Container from '../../Container';
import ButtonComponent from '../../Button';
import SelectComponent from '../../Select';
import {
  activitySchema,
  ageSchema,
  goalWeightSchema,
  heightSchema,
  weightSchema,
} from './validation';

const { shape, func } = PropTypes;

const useStyle = makeStyles((theme) => ({
  input: {
    color: theme.customColors[1],
    width: '80%',
    backgroundColor: theme.customColors[7],
  },
}));

function PhysicalCharacteristics(props) {
  const {
    methods: { handleBack, setData },
  } = props;
  const classes = useStyle();

  const [age, setAge] = useState('');
  const [activityId, setActivityId] = useState(0);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');

  const [ageError, setAgeError] = useState(false);
  const [activityIdError, setActivityIdError] = useState(false);

  const [weightError, setWeightError] = useState(false);
  const [heightError, setHeightError] = useState(false);
  const [goalWeightError, setGoalWeightError] = useState(false);

  return (
    <Container screenSize="lg" direction="row" itemColumns="6" spacing={2}>
      <Hidden smDown key="1">
        <CardMedia
          component="img"
          height="600"
          image="./signupImages/3.png"
          title="main"
        />
      </Hidden>
      <Container key="2" direction="column" itemColumns="12" spacing={5}>
        <Typography key="1" variant="h5">
          Select Your Physical Characteristics :-
        </Typography>
        <form key="22" style={{ width: '100%' }}>
          <Container direction="column" itemColumns="12" spacing={5}>
            <SelectComponent
              key="1"
              value={activityId}
              handleChange={async ({ target: { value } }) => {
                setActivityId(value);
                const isValid = await activitySchema.isValid({ activityId });
                setActivityIdError(!isValid);
              }}
              activityIdError={activityIdError}
            />
            <InputField
              key="6"
              variant="outlined"
              label="Age"
              className={classes.input}
              type="number"
              onChange={async ({ target: { value } }) => {
                setAge(value);
                const isValid = await ageSchema.isValid({ age });
                setAgeError(() => !isValid);
              }}
              value={age}
              placeholder="Enter Your Age..."
              InputProps={{
                endAdornment: <span>yr</span>,
              }}
              error={!!ageError}
              helperText={ageError ? 'Please Enter A Positive Number' : null}
            />
            <InputField
              key="2"
              variant="outlined"
              label="Height"
              className={classes.input}
              type="number"
              onChange={async ({ target: { value } }) => {
                setHeight(value);
                const isValid = await heightSchema.isValid({ height });
                setHeightError(() => !isValid);
              }}
              value={height}
              placeholder="Enter Your Height..."
              InputProps={{
                endAdornment: <span>cm</span>,
              }}
              error={!!heightError}
              helperText={heightError ? 'Please Enter A Positive Number' : null}
            />
            <InputField
              key="3"
              variant="outlined"
              label="Current Weight"
              className={classes.input}
              type="number"
              onChange={async ({ target: { value } }) => {
                setWeight(value);
                const isValid = await weightSchema.isValid({ weight });
                setWeightError(() => !isValid);
              }}
              value={weight}
              InputProps={{
                endAdornment: <span>Kg</span>,
              }}
              placeholder="Enter Your Current Weight..."
              error={!!weightError}
              helperText={weightError ? 'Please Enter A Positive Number' : null}
            />
            <InputField
              key="4"
              variant="outlined"
              label="Goal Weight"
              className={classes.input}
              type="number"
              onChange={async ({ target: { value } }) => {
                setGoalWeight(value);
                const isValid = await goalWeightSchema.isValid({ goalWeight });
                setGoalWeightError(() => !isValid);
              }}
              value={goalWeight}
              placeholder="Enter Your Goal Weight..."
              InputProps={{
                endAdornment: <span>Kg</span>,
              }}
              error={!!goalWeightError}
              helperText={
                goalWeightError ? 'Please Enter A Positive Number' : null
              }
            />
          </Container>
        </form>
        <Container key="4" direction="row" itemColumns="4" spacing={5}>
          <ButtonComponent
            onClick={handleBack}
            key="2"
            variant="outlined"
            color="primary"
          >
            Back
          </ButtonComponent>
          <ButtonComponent
            onClick={() => {
              setData((userData) => ({
                ...userData,
                weight,
                goalWeight,
                activityId,
                age,
                height,
              }));
            }}
            key="1"
            variant="contained"
            color="primary"
          >
            Finish
          </ButtonComponent>
        </Container>
      </Container>
    </Container>
  );
}

PhysicalCharacteristics.propTypes = {
  methods: shape({
    handleBack: func.isRequired,
    setData: func.isRequired,
  }).isRequired,
};

export default PhysicalCharacteristics;
