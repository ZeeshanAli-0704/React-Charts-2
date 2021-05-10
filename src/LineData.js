import moment from "moment";

export const ChartDataStatus = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
  NO_DATA: "no_data",
};

export const ChartColors = {
  igGPositive: "#EC6B56",
  igMPositive: "#FFC154",
  negative: "#47B39C",
  notValid: "#eceff2",
};

export const ChartLegendNames = {
  igGPositive: "ig-G Positive",
  igMPositive: "ig-M Positive",
  negative: "Negative",
  notValid: "Not Valid",
};
// State for a month Value example
export const state = {
  igGPositive: [
    {
      x: new Date("2020-04-2"),
      y: 10,
    },
    {
      x: new Date("2020-04-3"),
      y: 15,
    },
    {
      x: new Date("2020-04-10"),
      y: 17,
    },
    {
      x: new Date("2020-04-15"),
      y: 15,
    },
    {
      x: new Date("2020-04-20"),
      y: 30,
    },
    {
      x: new Date("2020-04-25"),
      y: 40,
    },
    {
      x: new Date("2020-04-28"),
      y: 10,
    },
    {
      x: new Date("2020-04-29"),
      y: 70,
    },
    {
      x: new Date("2020-04-30"),
      y: 90,
    },
  ],
};
// State 2 for duration over 12 month Value example
export const state2 = {
  igGPositive: [
    {
      x: new Date("2020-01-2"),
      y: 10,
    },
    {
      x: new Date("2020-02-3"),
      y: 15,
    },
    {
      x: new Date("2020-03-10"),
      y: 17,
    },
    {
      x: new Date("2020-04-15"),
      y: 15,
    },
    {
      x: new Date("2020-06-20"),
      y: 30,
    },
    {
      x: new Date("2020-07-25"),
      y: 40,
    },
    {
      x: new Date("2020-08-28"),
      y: 10,
    },
    {
      x: new Date("2020-10-29"),
      y: 70,
    },
    {
      x: new Date("2020-12-30"),
      y: 90,
    },
  ],
};
export const state3 = {
  igGPositive: [10, 50, 20, 30, 40, 80, 20, 9, 100, 60, 50, 60],
};
export const state4 = {
  igGPositive: [
    {
      x: moment(new Date("2020-04-2")),
      y: 10,
    },
    {
      x: moment(new Date("2020-04-3")),
      y: 15,
    },
    {
      x: moment(new Date("2020-04-10")),
      y: 17,
    },
    {
      x: moment(new Date("2020-04-15")),
      y: 15,
    },
    {
      x: moment(new Date("2020-04-20")),
      y: 30,
    },
    {
      x: moment(new Date("2020-04-25")),
      y: 40,
    },
    {
      x: moment(new Date("2020-04-28")),
      y: 10,
    },
    {
      x: moment(new Date("2020-04-29")),
      y: 70,
    },
    {
      x: moment(new Date("2020-04-30")),
      y: 90,
    },
  ],
};
// Charts with Min & Max with Duration over a month
export const dataSet1 = {
  data: {
    datasets: [
      {
        label: "ig-G Positive",
        fill: false,
        lineTension: 0.2,
        backgroundColor: ChartColors.igGPositive,
        borderColor: ChartColors.igGPositive,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBorderColor: ChartColors.igGPositive,
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: ChartColors.igGPositive,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: state.igGPositive,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            unit: "day",
            tooltipFormat: "lll",
            min: new Date("2020-04-5"),
            max: new Date("2020-05-10"),
          },
          gridLines: {
            display: true,
          },
        },
      ],
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: true,
          },
          ticks: {
            display: true,
            min: 0,
            max: 100,
            stepSize: 20,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  },
};
// Charts with Min & Max with Duration  & step Size of 2 days over a month Data Set
export const dataSet2 = {
  data: {
    datasets: [
      {
        label: "ig-G Positive",
        fill: false,
        lineTension: 0.2,
        backgroundColor: ChartColors.igGPositive,
        borderColor: ChartColors.igGPositive,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBorderColor: ChartColors.igGPositive,
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: ChartColors.igGPositive,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: state.igGPositive,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            unit: "day",
            tooltipFormat: "lll",
            min: new Date("2020-04-5"),
            max: new Date("2020-05-10"),
            stepSize: 2,
          },
          gridLines: {
            display: true,
          },
        },
      ],
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: true,
          },
          ticks: {
            display: true,
            min: 0,
            max: 100,
            stepSize: 20,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  },
};
// Charts with Data set of 12 month period
export const dataSet3 = {
  data: {
    datasets: [
      {
        label: "ig-G Positive",
        fill: false,
        lineTension: 0.2,
        backgroundColor: ChartColors.igGPositive,
        borderColor: ChartColors.igGPositive,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBorderColor: ChartColors.igGPositive,
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: ChartColors.igGPositive,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: state2.igGPositive,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            unit: "month",
            tooltipFormat: "lll",
            min: new Date("2020-01-01"),
            max: new Date("2020-12-31"),
            stepSize: 1,
          },
          gridLines: {
            display: true,
          },
        },
      ],
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: true,
          },
          ticks: {
            display: true,
            min: 0,
            max: 100,
            stepSize: 20,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  },
};

const getMonths = () => {
  let array1 = [10, 10, 10, 10, 10, 10, 10];
  let months = [];
  for (let i = 0; i < array1.length; i++) {
    months.push(
      moment()
        .year(2020)
        .month(i + 1)
        .date(0)
        .startOf("month")
    );
  }
  return months;
};
// Charts with Data set of 12 Month period with Label
export const dataSet4 = {
  data: {
    labels: getMonths(),
    datasets: [
      {
        label: "Paid Search and Leads",
        backgroundColor: "red",
        borderColor: "red",
        data: [0, 2, 8, 21, 57, 77, 100],
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            unit: "month",
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: true,
    },
  },
};

// Using Moment to display also works
export const dataSet5 = {
  data: {
    datasets: [
      {
        label: "ig-G Positive",
        fill: false,
        lineTension: 0.2,
        backgroundColor: ChartColors.igGPositive,
        borderColor: ChartColors.igGPositive,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBorderColor: ChartColors.igGPositive,
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: ChartColors.igGPositive,
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: state4.igGPositive,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            unit: "day",
            tooltipFormat: "lll",
            min: moment(new Date("2020-04-5")),
            max: moment(new Date("2020-05-10")),
            stepSize: 2,
          },
          gridLines: {
            display: true,
          },
        },
      ],
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: true,
          },
          ticks: {
            display: true,
            min: 0,
            max: 100,
            stepSize: 20,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  },
};

// Plotting Custom X - axis & Y - Axis

export const dataSet6 = {
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  },
};

// sample to test N format x y label & legends
{
  /* <Line
  options={{
    title: {
      display: true
    },
    legend: {
      display: false
    },
    responsive: true,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: { //Added callbacks for label
        title: () => {
          return "";
        },
        label: (tooltipItems, data) => {
          return "(" + tooltipItems.xLabel + "," + tooltipItems.yLabel + ")";
        }
      }
    },
    hover: {
      mode: "index",
      intersect: false
    },

    elements: {
      line: {
        fill: false,
        borderWidth: 5
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "black"
          },
          labels: [
            { x: 80, y: 90 },
            { x: 81, y: 29 },
            { x: 56, y: 36 },
            { x: 55, y: 25 },
            { x: 40, y: 18 }
          ].map((z) => {
            return z.y;
          }),
          scaleLabel: {
            display: true,
            fontSize: 15,
            fontColor: "black",
            fontStyle: "bold",
            labelString: "True Positive Rate"
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "black"
          },
          labels: [
            { x: 80, y: 90 },
            { x: 81, y: 29 },
            { x: 56, y: 36 },
            { x: 55, y: 25 },
            { x: 40, y: 18 }
          ].map((z) => {
            return z.x; // Changed this line
          }),
          scaleLabel: {
            display: true,
            fontSize: 15,
            fontColor: "black",
            fontStyle: "bold",
            labelString: "False Positive Rate"
          }
        }
      ]
    }
  }}
  height={150}
  data={{
    datasets: [
      {
        fill: false,
        borderColor: "#EC932F",
        backgroundColor: "#212F3D",
        pointBorderColor: "#B2BABB",
        pointBackgroundColor: "#D4AC0D",
        pointHoverBackgroundColor: "#D4AC0D",
        pointHoverBorderColor: "black",
        lineTension: 0.1,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 2,
        pointRadius: 3,
        pointHitRadius: 10,
        data: [
          { x: 80, y: 90 },
          { x: 81, y: 29 },
          { x: 56, y: 36 },
          { x: 55, y: 25 },
          { x: 40, y: 18 }
        ]
      }
    ]
  }}
/> */
}
