import { Doughnut } from "react-chartjs-2";
import propTypes from "prop-types";

const DoughnutChart = ({
  legend,
  section,
  sectionBackground,
  width,
  height,
}) => {
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
};

DoughnutChart.propTypes = {
  legend: propTypes.arrayOf(propTypes.string).isRequired,
  section: propTypes.arrayOf(propTypes.number).isRequired,
  sectionBackground: propTypes.arrayOf(propTypes.string).isRequired,
  width: propTypes.arrayOf(propTypes.number).isRequired,
  height: propTypes.arrayOf(propTypes.number).isRequired,
};

export default DoughnutChart;
