import React from 'react';

import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { number, bool } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '14%',
    color: theme.palette.primary,
  },
  divHeight: {
    height: '200px',
  },
}));

const LoadingProgressBar = (props) => {
  const { height200px, circleSize } = props;
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${height200px ? classes.divHeight : ''}`}>
      <CircularProgress size={circleSize} thickness={4} />
    </div>
  );
};

LoadingProgressBar.propTypes = {
  height200px: bool,
  circleSize: number,
};
LoadingProgressBar.defaultProps = {
  height200px: false,
  circleSize: 70,
};

export default LoadingProgressBar;
