const chartData = [
  {
    label: "SHOP-1",
    data: [1200, 1900, 300, 500, 200, 3000, 2200, 3400, 1800, 2700],
    fill: false,
    borderColor: "#7ED321"
  },
  {
    label: "SHOP-2",
    data: [500, 2520, 1300, 1500, 2200, 3300, 1200, 1400, 1800, 1500],
    fill: false,
    borderColor: "#D0021B"
  },
  {
    label: "SHOP-3",
    data: [2200, 2900, 3120, 1200, 2300, 3100, 2800, 2100, 2400, 2600],
    fill: false,
    borderColor: "#4A90E2"
  }
];

const chartLabels = [
  "5 JUN",
  "6 JUN",
  "7 JUN",
  "8 JUN",
  "9 JUN",
  "10 JUN",
  "11 JUN",
  "12 JUN",
  "13 JUN"
];

const ctx = document.getElementById("activityChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: chartLabels,
    datasets: chartData
  },
  options: {
    responsive: true,
    legend: false,
    elements: {
      line: {
        tension: 0 // disables bezier curves
      }
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Date"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: "Sales"
          }
        }
      ]
    }
  }
});
