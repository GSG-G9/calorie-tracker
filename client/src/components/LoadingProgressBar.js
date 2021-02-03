import React from 'react';

import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '13%',
  },
}));

const LoadingProgressBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="primary" />
    </div>
  );
};

export default LoadingProgressBar;
