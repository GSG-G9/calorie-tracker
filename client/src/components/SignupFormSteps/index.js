import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import axios from 'axios';
import StepContent from '../StepContent';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

export default function SignupFormSteps() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [data, setData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

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
      const { CancelToken } = axios;
      const source = CancelToken.source();

      (async () => {
        try {
          await axios.post('/api/v1/signup', data, {
            cancelToken: source.token,
          });
        } catch (err) {
          return setErrorMessage(
            err.response.data.message || 'Something went wrong !! '
          );
        }
      })();

      return () => source.cancel('Operation canceled by the user.');
    }
  }, [data]);

  return (
    <div className={classes.root}>
      <Box>
        <StepContent
          handleBack={handleBack}
          handleNext={handleNext}
          setData={setData}
          data={data}
          step={activeStep}
          errorMessage={errorMessage}
        />
      </Box>
    </div>
  );
}
