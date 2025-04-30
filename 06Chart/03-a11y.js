import { creatchart } from "./02-creatchart.js";
import { barChartData } from "./02-importdata.js";

creatchart(".chart", barChartData);

const button = document.querySelector("button");
const table = document.querySelector(".a11y-hidden");
button.addEventListener("click", () => {
  table.classList.toggle("");
});
