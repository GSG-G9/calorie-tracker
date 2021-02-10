import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import StepContent from '../StepContent';

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

export default function SignupFormSteps() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [data, setData] = useState({});

  const isStepSkipped = (step) => skipped.has(step);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, [setActiveStep]);

  const handleNext = useCallback(() => {
    console.log('next');
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    console.log(activeStep);

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  }, [skipped, activeStep, setActiveStep, setSkipped]);

  useEffect(() => {
    if (Object.keys(data).length === 10) {
      fetch('/api/v1/signup', {
        header: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  }, [data]);

  return (
    <div className={classes.root}>
      <Box className={classes.instructions}>
        <StepContent
          handleBack={handleBack}
          handleNext={handleNext}
          setData={setData}
          data={data}
          step={activeStep}
        />
      </Box>
    </div>
  );
}
