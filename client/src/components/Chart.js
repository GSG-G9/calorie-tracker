import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
    constructor(){
        super(props);
        this.state = {
            chartData:{

            }
        }
    }
  render() {
    return (
      <div className="chart">
        {/* <Doughnut data={...} /> */}
        CHART COMPONENT
         <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
