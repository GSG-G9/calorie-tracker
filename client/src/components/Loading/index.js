import React from 'react';

import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { number } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '14%',
    color: theme.palette.primary,
  },
}));

const LoadingProgressBar = (props) => {
  const { circleSize } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={circleSize} thickness={4} />
    </div>
  );
};

LoadingProgressBar.propTypes = { circleSize: number };
LoadingProgressBar.defaultProps = { circleSize: 70 };

export default LoadingProgressBar;
