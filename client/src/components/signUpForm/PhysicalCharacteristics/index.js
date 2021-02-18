import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Typography, Hidden, CardMedia } from '@material-ui/core';
import Loading from '../../Loading';
import InputField from '../../InputField';
import Container from '../../Container';
import ButtonComponent from '../../Button';
import SelectComponent from '../../Select';
import Alert from '../../Alert';
import {
  activitySchema,
  ageSchema,
  goalWeightSchema,
  heightSchema,
  weightSchema,
} from '../../../Utils/signUpPhysicalCharacteristicsValidation';

import updateAndValidateInput from '../../../Utils/checkValidationPureFunction';

const { shape, func, bool } = PropTypes;

const useStyle = makeStyles((theme) => ({
  input: {
    color: theme.customColors[1],
    width: '250px',
    backgroundColor: theme.customColors[7],
  },
  loadingArea: {
    height: '10px',
    padding: '10px',
    margin: '20px',
  },
  container: {
    minHeight: '100vh',
    paddingBottom: '20vh',
  },
}));

function PhysicalCharacteristics(props) {
  const {
    methods: {
      handleBack,
      setData,
      errorMessage,
      loadingBar: { showLoading },
    },
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
    <Container
      className={classes.container}
      screenSize="md"
      direction="row"
      itemColumns="6"
      spacing={2}
    >
      <Hidden smDown key="1">
        <CardMedia
          component="img"
          height="400"
          image="./signupImages/3.png"
          title="main"
        />
      </Hidden>
      <Container key="2" direction="column" itemColumns="12" spacing={5}>
        <Typography key="1" variant="h5">
          Select Your Physical Characteristics
        </Typography>
        <form key="22">
          <Container direction="column" itemColumns="12" spacing={2}>
            <InputField
              key="6"
              variant="outlined"
              label="Age"
              className={classes.input}
              type="number"
              onChange={updateAndValidateInput(
                'age',
                ageSchema,
                setAge,
                setAgeError
              )}
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
              onChange={updateAndValidateInput(
                'height',
                heightSchema,
                setHeight,
                setHeightError
              )}
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
              onChange={updateAndValidateInput(
                'weight',
                weightSchema,
                setWeight,
                setWeightError
              )}
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
              onChange={updateAndValidateInput(
                'goalWeight',
                goalWeightSchema,
                setGoalWeight,
                setGoalWeightError
              )}
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
            <SelectComponent
              key="1"
              value={activityId}
              handleChange={updateAndValidateInput(
                'activityId',
                activitySchema,
                setActivityId,
                setActivityIdError
              )}
              activityIdError={activityIdError}
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
            disable={
              activityIdError ||
              ageError ||
              goalWeightError ||
              heightError ||
              weightError
            }
            onClick={async () => {
              const activityIdIsValid = await activitySchema.isValid({
                activityId,
              });
              const ageIsValid = await ageSchema.isValid({ age });
              const goalWeightIsValid = await goalWeightSchema.isValid({
                goalWeight,
              });
              const heightIsValid = await heightSchema.isValid({ height });
              const weightIsValid = await weightSchema.isValid({ weight });
              if (
                !activityIdIsValid ||
                !ageIsValid ||
                !goalWeightIsValid ||
                !heightIsValid ||
                !weightIsValid
              ) {
                setActivityIdError(() => !activityIdIsValid);
                setAgeError(() => !ageIsValid);
                setGoalWeightError(() => !goalWeightIsValid);
                setHeightError(() => !heightIsValid);
                return setWeightError(() => !weightIsValid);
              }
              return setData((userData) => ({
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
        <div key="111-errorMessage" className={classes.loadingArea}>
          {showLoading ? (
            <Loading circleSize={30} />
          ) : (
            <Alert errorMessage={errorMessage} />
          )}
        </div>
      </Container>
    </Container>
  );
}

PhysicalCharacteristics.propTypes = {
  methods: shape({
    handleBack: func.isRequired,
    setData: func.isRequired,
    loadingBar: shape({ showLoading: bool.isRequired }).isRequired,
  }).isRequired,
};

export default PhysicalCharacteristics;
