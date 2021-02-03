import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  text: {
    color: theme.palette.secondary.main,
    fontSize: '20px',
    textTransform: 'capitalize',
  },
}));

export default function TestComponent() {
  const theme = useTheme();
  console.log(theme);
  const classes = useStyle();

  return (
    <Button variant="contained" color="primary" className={classes.text}>
      Hassan
    </Button>
  );
}
