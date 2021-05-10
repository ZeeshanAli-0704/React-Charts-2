import React from "react";
import ReactDOM from "react-dom";
import { Scatter, Line } from "react-chartjs-2";
import moment from "moment";
import "./styles.css";
import LineChart from "./LineChart";
import ScatterChart from "./ScatterChart";
function App() {
  return (
    <div className="container">
      {/* <div className="mt">
        <LineChart />
      </div> */}
      <div className="mt">
        <ScatterChart />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
