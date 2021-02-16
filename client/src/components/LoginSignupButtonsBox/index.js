import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import useStyles from './style';

const LoginSignupButtonsBox = () => {
  const classes = useStyles();

  return (
    <Box className={classes.login_signup_box}>
      <Link to="/login" className={classes.login_signup_link}>
        <Button className={classes.login_signup_button}>log in</Button>
      </Link>
      <span className={classes.separated_span}>|</span>
      <Link to="/signup" className={classes.login_signup_link}>
        <Button className={classes.login_signup_button}>sign up</Button>
      </Link>
    </Box>
  );
};

export default LoginSignupButtonsBox;
