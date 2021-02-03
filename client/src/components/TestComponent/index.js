import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  text: {
    backgroundColor: theme.customColors[1],
    color: theme.customColors[5],
    fontSize: '20px',
    textTransform: 'capitalize',
  },
}));

export default function TestComponent() {
  const classes = useStyle();

  return (
    <Button variant="contained" color="primary" className={classes.text}>
      Hassanx
    </Button>
  );
}
