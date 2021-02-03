import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  text: theme.button,
}));

export default function TestComponent() {
  const classes = useStyle();

  return (
    <Button variant="contained" color="primary" className={classes.text}>
      Hassanx
    </Button>
  );
}
