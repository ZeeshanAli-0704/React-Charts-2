import React from "react";
import { Line } from "react-chartjs-2";
import "./styles.css";
import { dataSet1, dataSet2, dataSet3, dataSet4 } from "./LineData";

class LineChartImp extends React.Component {
  render() {
    const data = dataSet2.data;
    const options = dataSet2.options;
    // const data = dataSet3.data;
    // const options = dataSet3.options;
    // const data = dataSet4.data;
    // const options = dataSet4.options;
    // const data = dataSet5.data;
    // const options = dataSet5.options;
    return <Line ref={this.chartReference} data={data} options={options} />;
  }
}

export default function LineChart() {
  return (
    <div className="container">
      <div className="mt">
        <LineChartImp />
      </div>
    </div>
  );
}
