const barChart = document.querySelector("#chart");

new Chart(barChart, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "그래프 제목",
        data: [12, 19, 3, 5, 2, 3],
      },
    ],
  },
  options: {
    animation: false,
  },
});
