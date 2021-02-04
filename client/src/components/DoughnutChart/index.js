import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const { string, number, arrayOf } = PropTypes;

function DoughnutChart({ legend, section, sectionBackground, width, height }) {
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
      />
    </div>
  );
}

DoughnutChart.defaultProps = {
  width: [20],
  height: [5],
};

DoughnutChart.propTypes = {
  legend: arrayOf(string).isRequired,
  section: arrayOf(number).isRequired,
  sectionBackground: arrayOf(string).isRequired,
  width: arrayOf(number),
  height: arrayOf(number),
};

export default DoughnutChart;
