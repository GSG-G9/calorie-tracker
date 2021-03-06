import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const { number } = PropTypes;

const useStyles = makeStyles({
  root: {
    margin: '3% 7% 0 0',
    '@media (min-device-width: 600px)': {
      width: '35%',
      height: '0',
    },
  },
  box: {
    fontWeight: '500',
    flexDirection: 'column',
    margin: '0 4px',
    alignItems: 'center',
    width: '100%',
    '@media (min-device-width: 600px)': {
      margin: '0 5%',
    },
  },
});

function DailyCaloriesCard({ goal, food, exercises, remaining }) {
  const classes = useStyles();

  return (
    <Box component="div" display="flex" className={classes.root}>
      <Box component="div" display="flex" className={classes.box}>
        <span>{goal}</span>
        <p>Goal </p>
      </Box>
      <p> - </p>
      <Box component="div" display="flex" className={classes.box}>
        <span>{food}</span>
        <p>food </p>
      </Box>
      <p> + </p>
      <Box component="div" display="flex" className={classes.box}>
        <span>{exercises}</span>
        <p>exercises </p>
      </Box>
      <p> = </p>
      <Box component="div" display="flex" className={classes.box}>
        <span>{remaining}</span>
        <p>remaining </p>
      </Box>
    </Box>
  );
}

DailyCaloriesCard.propTypes = {
  goal: number.isRequired,
  food: number.isRequired,
  exercises: number.isRequired,
  remaining: number.isRequired,
};

export default DailyCaloriesCard;
