import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const { number } = PropTypes;

function CircularProgressWithLabel(props) {
  const { value } = props;

  const useStyles = makeStyles({
    progress: {
      fontSize: '2rem',
      '@media (min-device-width: 900px)': {
        fontSize: '3.2rem',
        marginLeft: '65%',
      },
    },
    box: {
      display: 'inline-flex',
      marginLeft: '33%',
      marginTop: '12%',
      '@media (min-device-width: 900px)': {
        width: '12vw',
      },
    },
  });

  const classes = useStyles();

  return (
    <Box position="relative" className={classes.box}>
      <CircularProgress
        variant="determinate"
        style={{
          width: '25vw',
        }}
        {...props}
      />
      <Box
        top={0}
        left={55}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="textSecondary"
          className={classes.progress}
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: number.isRequired,
};

export default CircularProgressWithLabel;
