import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';

const { number } = PropTypes;

const useStyles = makeStyles({
  dd: {
    width: '5vw',
  },
  container: {
    '@media (min-device-width: 900px)': {
      width: '40vw',
      margin: 'auto',
    },

    // display: 'flex',
    // justifyContent: 'center',
    // alignContent: 'center',

    // border: '2px solid black',
  },
  table: {
    width: '10vw',
    // width: '40%',
    // width: 20,
    // '@media (min-device-width: 900px)': {
    //   width: '40%',
    // },
  },

  row: {
    '&:last-child td': {
      borderBottom: 0,
    },
  },
});

function createData(Goal, Food, Exercises, Remaining) {
  return { Goal, Food, Exercises, Remaining };
}

function DailyCaloriesCard({ goal, food, exercises, remaining }) {
  const classes = useStyles();

  const rows = [createData(goal, food, exercises, remaining)];

  return (
    <TableContainer className={classes.container}>
      <Table aria-label="simple table" className={classes.table}>
        <TableBody>
          {rows.map((row) => (
            <TableRow className={classes.row}>
              <div className={classes.dd}>
                <TableCell align="center">{row.Goal || 0}</TableCell>
                <TableCell align="center"> - </TableCell>
                <TableCell align="center">{row.Food || 0}</TableCell>
                <TableCell align="center"> + </TableCell>
                <TableCell align="center">{row.Exercises || 0}</TableCell>
                <TableCell align="center"> = </TableCell>
                <TableCell align="center">{row.Remaining || 0}</TableCell>
              </div>
            </TableRow>
          ))}
        </TableBody>

        <TableRow className={classes.row}>
          <div className={classes.dd}>
            <TableCell align="center">Goal</TableCell>
            <TableCell align="center" />
            <TableCell align="center">Food</TableCell>
            <TableCell align="center" />
            <TableCell align="center">Exercises</TableCell>
            <TableCell align="center" />
            <TableCell align="center">Remaining</TableCell>
          </div>
        </TableRow>
      </Table>
    </TableContainer>
  );
}

DailyCaloriesCard.propTypes = {
  goal: number.isRequired,
  food: number.isRequired,
  exercises: number.isRequired,
  remaining: number.isRequired,
};

export default DailyCaloriesCard;
