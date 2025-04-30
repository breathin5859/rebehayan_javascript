export const creatchart = (selector, isData) => {
  const barChart = document.querySelector(selector);

  if (!barChart) {
    return;
  }

  new Chart(barChart, {
    type: "bar",
    data: isData,
    options: {
      animation: false,
    },
  });
};
