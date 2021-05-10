import moment from "moment";

// Random Scatter Plot With X & Y variable per Step Size
export const dataSet1 = {
  data: {
    datasets: [
      {
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        fill: false,
        // showLine: true,
        data: [
          {
            x: 5,
            y: 20,
          },
          {
            x: 10,
            y: 40,
          },
          {
            x: 15,
            y: 60,
          },
          {
            x: 20,
            y: 50,
          },
          {
            x: 25,
            y: 90,
          },
          {
            x: 35,
            y: 60,
          },
          {
            x: 45,
            y: 90,
          },
          {
            x: 5,
            y: 40,
          },
        ],
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
          },
          ticks: {
            display: true,
            min: 0,
            max: 50,
            stepSize: 5,
          },
        },
      ],
      yAxes: [
        {
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
      enabled: true,
    },
  },
};
// Random Scatter plot with multiple Data Sets to Display | graph with line
export const dataSet2 = {
  data: {
    datasets: [
      {
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        fill: false,
        showLine: true,
        data: [
          {
            x: 5,
            y: 20,
          },
          {
            x: 5,
            y: 40,
          },
        ],
      },
      {
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        fill: false,
        showLine: true,
        data: [
          {
            x: 10,
            y: 25,
          },
          {
            x: 10,
            y: 40,
          },
        ],
      },
      {
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        fill: false,
        showLine: true,
        data: [
          {
            x: 30,
            y: 20,
          },
          //   {
          //     x: 30,
          //     y: 60,
          //   },
        ],
      },
      {
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        fill: false,
        showLine: true,
        data: [
          {
            x: 40,
            y: 20,
          },
          {
            x: 40,
            y: 40,
          },
        ],
      },
      {
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        fill: false,
        showLine: true,
        data: [
          {
            x: 50,
            y: 40,
          },
          {
            x: 50,
            y: 80,
          },
        ],
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: true,
          },
          ticks: {
            display: true,
            min: -10,
            max: 60,
            stepSize: 5,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
          },
          ticks: {
            display: true,
            min: -10,
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
      enabled: true,
    },
  },
};
// Random Scatter Plot with Multiple Value & time on X-axis With Duration of a month
export const dataSet3 = {
  data: {
    datasets: [
      {
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        fill: false,
        showLine: true,
        data: [
          {
            x: new Date("2020-04-2"),
            y: 20,
          },
          {
            x: new Date("2020-04-2"),
            y: 40,
          },
        ],
      },
      {
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        fill: false,
        showLine: true,
        data: [
          {
            x: new Date("2020-04-10"),
            y: 25,
          },
          {
            x: new Date("2020-04-10"),
            y: 40,
          },
        ],
      },
      {
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        fill: false,
        showLine: true,
        data: [
          //   {
          //     x: new Date("2020-04-20"),
          //     y: 20,
          //   },
          {
            x: new Date("2020-04-20"),
            y: 60,
          },
        ],
      },
      {
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        fill: false,
        showLine: true,
        data: [
          {
            x: new Date("2020-04-28"),
            y: 20,
          },
          {
            x: new Date("2020-04-28"),
            y: 40,
          },
        ],
      },
      {
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        fill: false,
        showLine: true,
        data: [
          {
            x: new Date("2020-04-30"),
            y: 40,
          },
          {
            x: new Date("2020-04-30"),
            y: 80,
          },
        ],
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
            unit: "day",
            tooltipFormat: "lll",
            min: new Date("2020-04-1"),
            max: new Date("2020-05-10"),
            stepSize: 5,
          },
          gridLines: {
            display: true,
          },
        },
      ],
      yAxes: [
        {
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
      enabled: true,
    },
  },
};
// Random Scatter Plot with Multiple Value & time on X-axis With Duration of date over Various months
export const dataSet4 = {
  data: {
    datasets: [
      {
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        fill: false,
        showLine: true,
        data: [
          {
            x: new Date("2020-01-2"),
            y: 20,
          },
          {
            x: new Date("2020-01-2"),
            y: 40,
          },
        ],
      },
      {
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        fill: false,
        showLine: true,
        data: [
          {
            x: new Date("2020-02-10"),
            y: 25,
          },
          {
            x: new Date("2020-02-10"),
            y: 40,
          },
        ],
      },
      {
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        fill: false,
        showLine: true,
        data: [
          {
            x: new Date("2020-04-20"),
            y: 20,
          },
          {
            x: new Date("2020-04-20"),
            y: 60,
          },
        ],
      },
      {
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        fill: false,
        showLine: true,
        data: [
          {
            x: new Date("2020-03-28"),
            y: 20,
          },
          {
            x: new Date("2020-03-28"),
            y: 40,
          },
        ],
      },
      {
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        fill: false,
        showLine: true,
        data: [
          {
            x: new Date("2020-04-30"),
            y: 40,
          },
          {
            x: new Date("2020-04-30"),
            y: 80,
          },
        ],
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
            unit: "day",
            // format: "DD/MM/YYYY",
            // tooltipFormat: "DD MMM YYYY",
            // tooltipFormat: "l",
            displayFormats: {
              day: "MMM YYYY",
              //   month: "DD MM YYYY",
              //   year: "DD MM YYYY",
            },
            min: new Date("2020-01-01"),
            max: new Date("2020-05-10"),
            stepSize: 10,
          },
          scaleLabel: {
            display: true,
            labelString: "------Date ------",
          },
          gridLines: {
            display: true,
          },
        },
      ],
      yAxes: [
        {
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
      enabled: true,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          console.log(data);
          console.log(tooltipItem);

          let labelx =
            moment(
              data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].x
            ).format("DD MMM YYYY") || "";

          let labely = moment(
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].y
          );
          return labelx + " || " + labely;
        },
      },
    },
  },
};

// Random Scatter Plot with Multiple Value & time on X-axis With Duration of Various months  Graph by month
const dataSetFor5 = [
  {
    borderColor: "#2196f3",
    backgroundColor: "#2196f3",
    fill: false,
    showLine: true,
    data: [
      {
        x: new Date("2020-01-2"),
        y: 20,
      },
      {
        x: new Date("2020-01-2"),
        y: 40,
      },
    ],
  },
  {
    borderColor: "#2196f3",
    backgroundColor: "#2196f3",
    fill: false,
    showLine: true,
    data: [
      {
        x: new Date("2020-02-10"),
        y: 25,
      },
      {
        x: new Date("2020-02-10"),
        y: 40,
      },
    ],
  },
  {
    borderColor: "#2196f3",
    backgroundColor: "#2196f3",
    fill: false,
    showLine: true,
    data: [
      {
        x: new Date("2020-04-20"),
        y: 20,
      },
      {
        x: new Date("2020-04-20"),
        y: 60,
      },
    ],
  },
  {
    borderColor: "#2196f3",
    backgroundColor: "#2196f3",
    fill: false,
    showLine: true,
    data: [
      {
        x: new Date("2020-03-28"),
        y: 20,
      },
      {
        x: new Date("2020-03-28"),
        y: 40,
      },
    ],
  },
  {
    borderColor: "#2196f3",
    backgroundColor: "#2196f3",
    fill: false,
    showLine: true,
    data: [
      {
        x: new Date("2020-06-30"),
        y: 40,
      },
      {
        x: new Date("2020-06-30"),
        y: 80,
      },
    ],
  },
  {
    borderColor: "#2196f3",
    backgroundColor: "#2196f3",
    fill: false,
    showLine: true,
    data: [
      {
        x: new Date("2020-08-30"),
        y: 40,
      },
      {
        x: new Date("2020-08    -30"),
        y: 80,
      },
    ],
  },
];

export const dataSet5 = {
  data: {
    datasets: dataSetFor5,
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            unit: "month",
            tooltipFormat: "lll",
            min: new Date("2020-01-01"),
            max: new Date("2020-12-31"),
            displayFormats: {
              //   day: "MMM YYYY",
              month: "MMM YYYY",
              //   year: "DD MM YYYY",
            },
            stepSize: 1,
          },
          scaleLabel: {
            display: true,
            labelString: "------Date ------",
          },
          gridLines: {
            display: true,
          },
        },
      ],
      yAxes: [
        {
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
      enabled: true,
    },
    animation: {
      //   duration: 0,
      //   onComplete: function () {
      //     var chartInstance = this.chart,
      //       ctx = chartInstance.ctx;
      //     ctx.textAlign = "center";
      //     ctx.fillStyle = "black";
      //     ctx.textBaseline = "bottom";
      //     this.data.datasets.forEach(function (dataset, i) {
      //       var meta = chartInstance.controller.getDatasetMeta(i);
      //       meta.data.forEach(function (bar, index) {
      //         var data = dataset.data[index];
      //         ctx.fillText(data.y.toFixed(1), bar._model.x, bar._model.y - 5);
      //       });
      //     });
      //   },
    },
  },
  plugins: [
    {
      afterDraw: function (chart) {
        let ctx = chart.ctx;
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.textBaseline = "bottom";
        dataSetFor5.forEach(function (dataset, i) {
          let meta = chart.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            var data = dataset.data[index];
            ctx.fillText(data.y.toFixed(1), bar._model.x, bar._model.y - 5);
          });
        });
      },
    },
  ],
};
