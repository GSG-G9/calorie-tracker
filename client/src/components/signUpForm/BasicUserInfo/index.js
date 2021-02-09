import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import InputField from '../../InputField';
import Container from '../../Container';
import ButtonComponent from '../../Button';
import {
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  passwordSchema,
} from './validation';

const useStyle = makeStyles((theme) => ({
  input: {
    color: theme.customColors[1],
    width: '100%',
    backgroundColor: theme.customColors[7],
  },
}));
function BasicUserInfo() {
  const classes = useStyle();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  return (
    <Container direction="column" itemColumns="12" spacing={5}>
      <Typography key="1" variant="h4">
        Create User Account :-
      </Typography>
      <form key="2" style={{ width: '70%' }}>
        <Container direction="column" itemColumns="12" spacing={5}>
          <InputField
            key="1"
            variant="outlined"
            label="First Name"
            className={classes.input}
            type="text"
            onChange={async ({ target: { value } }) => {
              setFirstName(value);
              const isValid = await firstNameSchema.isValid({ firstName });
              setFirstNameError(() => !isValid);
            }}
            value={firstName}
            placeholder="Enter First Name ..."
            error={!!firstNameError}
            helperText={
              firstNameError ? 'Please Enter A valid First Name' : null
            }
          />
          <InputField
            key="2"
            variant="outlined"
            label="Last Name"
            className={classes.input}
            type="text"
            onChange={async ({ target: { value } }) => {
              setLastName(value);
              const isValid = await lastNameSchema.isValid({ lastName });
              setLastNameError(() => !isValid);
            }}
            value={lastName}
            placeholder="Enter Last Name ..."
            error={!!lastNameError}
            helperText={lastNameError ? 'Please Enter A valid Last Name' : null}
          />
          <InputField
            key="3"
            variant="outlined"
            label="Email"
            className={classes.input}
            type="email"
            onChange={async ({ target: { value } }) => {
              setEmail(value);
              const isValid = await emailSchema.isValid({ email });
              setEmailError(() => !isValid);
            }}
            value={email}
            placeholder="Enter Email ..."
            error={!!emailError}
            helperText={
              emailError
                ? 'Please Enter A valid Email like exmaple@test.com'
                : null
            }
          />
          <InputField
            key="4"
            variant="outlined"
            label="Password"
            className={classes.input}
            type="password"
            onChange={async ({ target: { value } }) => {
              setPassword(value);
              const isValid = await passwordSchema.isValid({ password });
              setPasswordError(() => !isValid);
            }}
            value={password}
            placeholder="Enter Password ..."
            error={!!passwordError}
            helperText={
              passwordError
                ? 'Please Enter A valid Password which must contain 8 characters'
                : null
            }
          />
        </Container>
      </form>
      <Container key="3" direction="row" itemColumns="4" spacing={5}>
        <ButtonComponent key="1" variant="contained" color="primary">
          Register
        </ButtonComponent>
        <ButtonComponent key="2" variant="outlined" color="primary">
          Cancel
        </ButtonComponent>
      </Container>
    </Container>
  );
}

export default BasicUserInfo;
