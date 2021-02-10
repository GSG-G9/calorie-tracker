import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles, Box } from '@material-ui/core';
import Axios from 'axios';
import Container from '../../components/Container';
import Button from '../../components/Button';
import InputFeild from '../../components/InputFeild';
import validationLogin, {
  emailSchema,
  passwordSchema,
} from '../../Utils/validationLogin';
import Home from '../Home';

const useStyle = makeStyles(() => ({
  root: {
    marginRight: '15px',
  },
  input: {
    width: '60%',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
  but: {
    display: 'flex',
    marginLeft: '18%',
  },
}));

function LoginPage() {
  const classes = useStyle();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const [loading, setLoading] = useState(false);

  const handlePush = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const isValid = await validationLogin.validate({ email, password });
      if (!isValid) {
        console.log(err);
      }

      const response = await Axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          email,
          password,
        }
      );
      if (response) {
        setLoading(false);
        setEmail('');
        setPassword('');
        history.push(Home);
        console.log(response);
      }
    } catch (err) {
      console.log(err);
      setLoaded(false);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const isValid = await validationLogin.validate({ email, password });
      if (!isValid) {
        console.log(err);
      }

      const response = await Axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          email,
          password,
        }
      );
      if (response) {
        setLoading(false);
        setEmail('');
        setPassword('');
        history.push(Home);
        console.log(response);
      }
    } catch (err) {
      console.log(err);
      setLoaded(false);
    }
  };

  const updateAndValidateInput = (
    schemaKey,
    schema,
    setValue,
    setIsValid
  ) => async ({ target: { value } }) => {
    setValue(value);
    const isValid = await schema.isValid({ [schemaKey]: value });
    setIsValid(isValid);
  };

  return (
    <>
      <Container direction="column" itemColumns="12" spacing={1}>
        {/* <Container direction="row" itemColumns="12" spacing={1}> */}
        <Box className={classes.box}>
          <PersonIcon color="primary" />
          <Typography variant="body1">Log In</Typography>
        </Box>

        {/* </Container> */}

        <form>
          <Container direction="column">
            <InputFeild
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
              error={emailError === null ? false : !emailError}
              helperText={
                emailError === null
                  ? null
                  : !emailError
                  ? 'Please Enter A valid Email like exmaple@test.com'
                  : null
              }
            />
            <InputFeild
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
              error={passwordError === null ? false : !passwordError}
              helperText={
                passwordError === null
                  ? null
                  : !passwordError
                  ? 'Please Enter A valid Password which must contain 6 characters'
                  : null
              }
            />
          </Container>
        </form>
        <form className={classes.but}>
          <Button
            variant="contained"
            color="primary"
            className={classes.root}
            event={handlePush}
          >
            Login
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            event={handleSubmit}
          >
            Cancel
          </Button>
        </form>
      </Container>
    </>
  );
}

export default LoginPage;
