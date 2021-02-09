import React from 'react';

import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '14%',
    color: theme.palette.primary,
  },
}));

const LoadingProgressBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={70} thickness={4} />
    </div>
  );
};

export default LoadingProgressBar;
