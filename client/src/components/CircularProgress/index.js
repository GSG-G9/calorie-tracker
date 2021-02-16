import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const { number } = PropTypes;

function CircularProgressWithLabel(props) {
  const { value } = props;

  const smallScreen = useMediaQuery('(max-width : 600px)');

  const useStyles = makeStyles({
    progress: {
      fontSize: '.8rem',
      '@media (min-device-width: 900px)': {
        marginLeft: '65%',
        fontSize: '1.2rem',
      },
    },
    box: {
      display: 'inline-flex',
      marginLeft: '30%',
      marginTop: '10%',

      '@media (min-device-width: 900px)': {
        width: '10vw',
        marginTop: '1%',
        marginLeft: '4%',
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
        left={smallScreen ? 60 : 0}
        bottom={smallScreen ? 0 : 15}
        right={0}
        className={classes.circular}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Typography
            variant="caption"
            component="p"
            color="textSecondary"
            className={classes.progress}
          >{`${Math.round(value)}%`}</Typography>

          <Typography
            variant="caption"
            component="p"
            color="textSecondary"
            className={classes.progress}
          >
            Calories
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: number.isRequired,
};

export default CircularProgressWithLabel;
