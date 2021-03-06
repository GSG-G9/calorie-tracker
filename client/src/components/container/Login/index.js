import React, { useState, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles, Grid } from '@material-ui/core';
import Axios from 'axios';
import Button from '../../common/Button';
import InputField from '../../common/InputField';
import { emailSchema, passwordSchema } from '../../../utils/validationLogin';
import { Home } from '../../../utils/constant';
import { context } from '../../UserProvider';
import updateAndValidateInput from '../../../utils/checkValidationPureFunction';
import Loading from '../../common/Loading';
import Alert from '../../common/Alert';

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: '20%',
    '@media (min-device-width: 900px)': {
      marginTop: '8%',
    },
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row ',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  form: {
    marginTop: '10%',
    width: '55%',
    '@media (min-device-width: 500px) and (max-device-width: 900px)': {
      marginTop: '3%',
      width: '30%',
    },
    '@media (min-device-width: 900px) ': {
      marginTop: '3%',
      width: '15%',
    },
  },
  input: {
    width: '300px',
    color: theme.customColors[2],
    marginTop: '10%',
    '@media (min-device-width: 900px)': {
      width: '380px',
    },
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    width: '65%',
    '@media (min-device-width: 500px) and (max-device-width: 900px)': {
      width: '40%',
    },
    '@media (min-device-width: 900px) ': {
      width: '25%',
    },
  },
  button: {
    justifyContent: 'space-around',
  },
  wordStyle: {
    fontWeight: 900,
    fontSize: 19,
    marginLeft: '8px',
    color: theme.customColors[1],
  },
  alert: {
    marginTop: '10px',
  },
}));

function LoginPage() {
  const classes = useStyle();
  const history = useHistory();

  const [, setIsAuthenticated] = useContext(context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const [loading, setLoading] = useState(false);

  const handlePush = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const emailIsValid = await emailSchema.isValid({ email });
      const passwordIsValid = await passwordSchema.isValid({ password });
      if (!emailIsValid) {
        setEmailError('Please Enter A valid Email like exmaple@test.com');
      }
      if (!passwordIsValid) {
        setPasswordError(
          'Please Enter A valid Password which must contain 6 characters'
        );
      }

      if (!emailIsValid || !passwordIsValid) {
        return setLoading(false);
      }
      await Axios.post('/api/v1/login', {
        email,
        password,
      });
      setLoading(false);
      setEmail('');
      setPassword('');
      setErrorMessage('');
      setIsAuthenticated(true);
      return history.push(Home);
    } catch (err) {
      setLoading(false);
      if (err.response.data.message) {
        return setErrorMessage(err.response.data.message);
      }
      return setErrorMessage('something wrong');
    }
  };

  const handleCancel = () => {
    history.push(Home);
  };

  return (
    <div className={`${classes.flex} ${classes.root}`}>
      <Grid className={classes.logo}>
        <PersonIcon color="primary" />
        <Typography className={classes.wordStyle}>Log In</Typography>
      </Grid>

      <form className={classes.flex}>
        <Grid className={classes.flex}>
          <InputField
            type="email"
            label="Email"
            margin="normal"
            variant="outlined"
            value={email}
            name="email"
            className={classes.input}
            onChange={updateAndValidateInput(
              'email',
              emailSchema,
              setEmail,
              setEmailError
            )}
            error={emailError}
            helperText={
              emailError
                ? 'Please Enter A valid Email like exmaple@test.com'
                : null
            }
          />
          <InputField
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            name="password"
            className={classes.input}
            onChange={updateAndValidateInput(
              'password',
              passwordSchema,
              setPassword,
              setPasswordError
            )}
            error={passwordError}
            helperText={
              passwordError
                ? 'Please Enter A valid Password which must contain 6 characters'
                : null
            }
          />
        </Grid>
      </form>
      <div className={classes.alert}>
        {loading ? <Loading /> : <Alert errorMessage={errorMessage} />}
      </div>
      <form className={`${classes.flex} ${classes.form}`}>
        <Grid className={`${classes.flexRow} ${classes.button}`}>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            event={handlePush}
          >
            Login
          </Button>
          <Button variant="contained" size="medium" event={handleCancel}>
            Cancel
          </Button>
        </Grid>
      </form>
    </div>
  );
}

const Login = () => {
  const [isAuthenticated] = useContext(context);

  return isAuthenticated === null ? (
    <Loading />
  ) : isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <LoginPage />
  );
};

export default Login;
