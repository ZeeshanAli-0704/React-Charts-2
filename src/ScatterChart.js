import { plugins } from "chart.js";
import React from "react";
import { Scatter, Chart } from "react-chartjs-2";
import { dataSet1 } from "./ScatterData";
import { dataSet2 } from "./ScatterData";
import { dataSet3 } from "./ScatterData";
import { dataSet4 } from "./ScatterData";
import { dataSet5 } from "./ScatterData";
import "./styles.css";

class ScatterChartImp extends React.Component {
  render() {
    const data = dataSet5.data;
    const options = dataSet5.options;
    const plugins = dataSet5?.plugins;
    return (
      <Scatter
        ref={this.chartReference}
        data={data}
        options={options}
        plugins={plugins}
      />
    );
  }
}
export default function ScatterChart() {
  return (
    <div className="container">
      <div className="mt">
        <ScatterChartImp />
      </div>
    </div>
  );
}
