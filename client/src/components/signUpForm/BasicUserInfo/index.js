import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import InputField from '../../InputField';
import Container from '../../Container';
import ButtonComponent from '../../Button';

const useStyle = makeStyles((theme) => ({
  input: {
    color: theme.customColors[1],
    width: '80%',
    padding: '0 auto',
    backgroundColor: theme.customColors[7],
  },
}));
function BasicUserInfo() {
  const classes = useStyle();
  return (
    <Container direction="column" itemColumns="12" spacing="5">
      <Typography variant="h4">Create User Account :-</Typography>
      <form>
        <Container direction="column" itemColumns="12" spacing="5">
          <InputField
            variant="outlined"
            label="First Name"
            className={classes.input}
            type="text"
            onChange={() => {}}
            placeholder="Enter First Name ..."
          />
          <InputField
            variant="outlined"
            label="Last Name"
            className={classes.input}
            type="text"
            onChange={() => {}}
            placeholder="Enter Last Name ..."
          />
          <InputField
            variant="outlined"
            label="Email"
            className={classes.input}
            type="email"
            onChange={() => {}}
            placeholder="Enter Email ..."
          />
          <InputField
            variant="outlined"
            label="Password"
            className={classes.input}
            type="password"
            onChange={() => {}}
            placeholder="Enter Password ..."
          />
        </Container>
      </form>
      <Container direction="row" itemColumns="4" spacing="5">
        <ButtonComponent variant="contained" color="primary">
          Register
        </ButtonComponent>
        <ButtonComponent variant="outlined" color="primary">
          Cancel
        </ButtonComponent>
      </Container>
    </Container>
  );
}

export default BasicUserInfo;
