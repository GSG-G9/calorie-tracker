import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import BasicUserInfo from '../signUpForm/BasicUserInfo';
import GenderSelection from '../signUpForm/GenderSelection';
import PhysicalCharacteristics from '../signUpForm/PhysicalCharacteristics';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [data, setData] = useState({});

  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <BasicUserInfo methods={{ handleBack, handleNext, setData }} />;
      case 1:
        return (
          <GenderSelection methods={{ handleBack, handleNext, setData }} />
        );
      case 2:
        return (
          <PhysicalCharacteristics
            methods={{ handleBack, handleNext, setData }}
          />
        );
      default:
        return <BasicUserInfo methods={{ handleBack, handleNext, setData }} />;
    }
  }
  return (
    <div className={classes.root}>
      <Box className={classes.instructions}>{getStepContent(activeStep)}</Box>
    </div>
  );
}
