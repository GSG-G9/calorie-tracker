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
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  }, [skipped, activeStep, setActiveStep, setSkipped]);

  useEffect(() => {
    if (Object.keys(data).length === 10) {
      console.log(data);
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
        />
      </Box>
    </div>
  );
}
