import React, { useState, useEffect, useCallback, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import axios from 'axios';
import { useHistory, Redirect } from 'react-router-dom';
import { Login } from '../../../../utils/constant';
import StepContent from '../StepContent';
import { context } from '../../../UserProvider';
import Loading from '../../../common/Loading';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '5rem',
  },
}));

function SignupFormSteps() {
  const classes = useStyles();
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [data, setData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [showLoading, setShowLoading] = useState(false);

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
          setShowLoading(true); // turn the loading progress bar
          await axios.post('/api/v1/signup', data, {
            cancelToken: source.token,
          });
          setShowLoading(false); // turnoff the loading progress bar after success
          setErrorMessage('success');
          return history.push(Login);
        } catch (err) {
          setShowLoading(false); // turnoff the loading progress bar after fail
          return setErrorMessage(
            err.response.data.message || 'Something went wrong !! '
          );
        }
      })();

      return () => source.cancel('Operation canceled by the user.');
    }
    return null;
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
          loadingBar={{ showLoading, setShowLoading }}
        />
      </Box>
    </div>
  );
}

const SignUp = () => {
  const [isAuthenticated] = useContext(context);

  return isAuthenticated === null ? (
    <Loading />
  ) : isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <SignupFormSteps />
  );
};

export default SignUp;
