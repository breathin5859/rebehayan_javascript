import { barChartDate } from "./02-importdata.js";
import { creatchart } from "./02-creatchart.js";

creatchart("#chart", barChartDate);
// const barChart = document.querySelector("#chart");

// new Chart(barChart, {
//   type: "bar",
//   data: {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "그래프 제목1",
//         data: [12, 19, 3, 5, 2, 3],
//       },
//       {
//         label: "그래프 제목2",
//         data: [50, 20, 5, 1, 3, 5],
//       },
//     ],
//   },
//   options: {
//     animation: false,
//   },
// });

// 01 - 데이터 관리 위해 아래처럼. 데이터만 변수에 담기

// const barChart = document.querySelector("#chart");

// const barChartDate = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "그래프 제목1",
//       data: [12, 19, 3, 5, 2, 3],
//     },
//     {
//       label: "그래프 제목2",
//       data: [50, 20, 5, 1, 3, 5],
//     },
//   ],
// };

// new Chart(barChart, {
//   type: "bar",
//   data: barChartDate,
//   options: {
//     animation: false,
//   },
// });

//  02- 데이터 파일 따로관리
//  02-importdata.js
//  03- 차트 재사용
