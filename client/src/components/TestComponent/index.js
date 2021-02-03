import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  text: {
    backgroundColor: theme.customColors[6],
    color: theme.customColors[1],
    fontSize: '20px',
    textTransform: 'capitalize',
  },
}));

export default function TestComponent() {
  // useTheme();
  const classes = useStyle();

  return (
    <Button variant="contained" color="primary" className={classes.text}>
      Hassan
    </Button>
  );
}
