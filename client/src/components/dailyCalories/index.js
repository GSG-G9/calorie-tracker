import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    width: '50%',
  },
});

function createData(Goal, Food, Exercises, Remaining) {
  return { Goal, Food, Exercises, Remaining };
}

const rows = [createData(159, 6.0, 24, 4.0)];

function DailyCalories() {
  const classes = useStyles();

  return (
    <>
      <TableContainer className={classes.table}>
        <Table aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                <TableCell align="center">{row.Goal}</TableCell>
                <TableCell align="center">{row.Food}</TableCell>
                <TableCell align="center">{row.Exercises}</TableCell>
                <TableCell align="center">{row.Remaining}</TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableRow>
            <TableCell align="center">Goal</TableCell>
            <TableCell align="center">Food</TableCell>
            <TableCell align="center">Exercises</TableCell>
            <TableCell align="center">Remaining</TableCell>
          </TableRow>
        </Table>
      </TableContainer>
      <div style={{ width: '40%' }}>
        <Box
          component="span"
          display="block"
          p={1}
          m={1}
          // bgcolor="background.paper"
        >
          1500 - 0 + 0 = 1500
        </Box>
        <Box
          component="span"
          display="block"
          p={1}
          m={1}
          bgcolor="background.paper"
        >
          block
        </Box>
      </div>
      <div style={{ width: '100%' }}>
        <Box
          component="div"
          display="inline"
          p={1}
          m={1}
          bgcolor="background.paper"
        >
          inline
        </Box>
        <Box
          component="div"
          display="inline"
          p={1}
          m={1}
          bgcolor="background.paper"
        >
          inline
        </Box>
      </div>
    </>
  );
}

export default DailyCalories;
