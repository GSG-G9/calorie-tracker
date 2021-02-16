import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const { string, number, arrayOf } = PropTypes;

function DoughnutChart({
  legend,
  section,
  sectionBackground,
  width,
  height,
  ...rest
}) {
  const data = {
    labels: legend,
    datasets: [
      {
        data: section,
        backgroundColor: sectionBackground,
      },
    ],
  };

  return (
    <div className="DoughnutChart">
      <Doughnut
        data={data}
        width={width}
        height={height}
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
        {...rest}
      />
    </div>
  );
}

DoughnutChart.defaultProps = {
  width: [20],
  height: [5],
  legend: [''],
};

DoughnutChart.propTypes = {
  section: arrayOf(number).isRequired,
  sectionBackground: arrayOf(string).isRequired,
  width: number,
  height: number,
  legend: arrayOf(string),
};

export default DoughnutChart;
