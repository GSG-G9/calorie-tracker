import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import DoughnutChart from '../DoughnutChart';

const { number } = PropTypes;
const useStyles = makeStyles({
  chart: {
    '@media (min-device-width: 900px)': {
      width: '10',
      height: '2',
    },
  },
});

function DailyCaloriesChart({ goal, remaining }) {
  const classes = useStyles();

  const [section, setSection] = useState([goal, goal - remaining]); // 200, 200 - 100

  console.log(section);
  const [sectionBackground, setSectionBackground] = useState(['blue', 'red']);
  const [width, setWidth] = useState([15]);
  const [height, setHeight] = useState([5]);

  return (
    <>
      {console.log(goal)}
      <DoughnutChart
        section={section}
        sectionBackground={sectionBackground}
        width={width}
        height={height}
        className={classes.chart}
      />
    </>
  );
}

DailyCaloriesChart.propTypes = {
  goal: number.isRequired,
  remaining: number.isRequired,
};

export default DailyCaloriesChart;
