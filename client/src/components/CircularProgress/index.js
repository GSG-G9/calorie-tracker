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
      fontSize: '1.1rem',
      marginLeft: '17%',
      '@media (min-device-width: 900px)': {
        marginLeft: '0',
      },
    },
    root: {
      margin: '15% 30% 20% 0',
      '@media (min-device-width: 900px)': {
        marginTop: '5%',
        marginLeft: '10%',
      },
    },
  });

  const classes = useStyles();

  return (
    <Box position="relative" className={classes.root}>
      <CircularProgress
        variant="determinate"
        style={{
          width: smallScreen ? '33vw' : '12vw',
        }}
        {...props}
      />
      <Box
        top={0}
        left={smallScreen ? 70 : 105}
        bottom={0}
        right={0}
        position="absolute"
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
