const barChart = document.querySelector("#chart");

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  data: [10, 20, 30],
  datasets: [
    {
      label: "Data1",
      data: [10, 20, 5],
    },
  ],
  option: {
    layout: {
      padding: 100,
    },
  },
};

new Chart(barChart, {
  type: "line",
  data: data,
});
