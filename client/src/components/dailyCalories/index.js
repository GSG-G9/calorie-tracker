import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    border: '1px solid black',
    width: '40%',
    margin: 'auto',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  // table: {
  //   border: '1px solid black',
  //   minWidth: 650,
  //   width: '20%',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignContent: 'center',
  // },
  row: {
    '&:last-child td': {
      borderBottom: 0,
    },
  },
});

function createData(Goal, Food, Exercises, Remaining) {
  return { Goal, Food, Exercises, Remaining };
}

function DailyCalories() {
  const classes = useStyles();

  const [goal, setGoal] = useState(1500);
  const [food, setFood] = useState(0);
  const [exercises, setExercises] = useState(0);
  const [remaining, setRemaining] = useState(1500);
  const [, setErrorMessage] = useState('');

  useEffect(() => {
    const getCalories = async () => {
      try {
        const response = await Axios.get('/api/v1/user/calories');

        setGoal(response.data.data.userCalories);

        setFood(response.data.data.userFoodCalories);

        setExercises(response.data.data.userExercisesCalories);

        return setRemaining(response.data.data.remainingCalories);
      } catch (err) {
        if (err.response.data.message) {
          return setErrorMessage(err.response.data.message);
        }
        return setErrorMessage('something wrong');
      }
    };
    getCalories();
  }, []);

  const rows = [createData(goal, food, exercises, remaining)];

  return (
    <>
      <TableContainer className={classes.table}>
        <Table aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow className={classes.row}>
                <TableCell align="center">{row.Goal}</TableCell>
                <TableCell align="center"> - </TableCell>
                <TableCell align="center">{row.Food}</TableCell>
                <TableCell align="center"> + </TableCell>
                <TableCell align="center">{row.Exercises}</TableCell>
                <TableCell align="center"> = </TableCell>
                <TableCell align="center">{row.Remaining}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableRow className={classes.row}>
            <TableCell align="center">Goal</TableCell>
            <TableCell align="center" />
            <TableCell align="center">Food</TableCell>
            <TableCell align="center" />
            <TableCell align="center">Exercises</TableCell>
            <TableCell align="center" />
            <TableCell align="center">Remaining</TableCell>
            <TableCell align="center" />
          </TableRow>
        </Table>
      </TableContainer>
    </>
  );
}

export default DailyCalories;
