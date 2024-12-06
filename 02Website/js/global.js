import { includeHTML } from "./ui/includeHTML.js";
import { footerYear } from "./ui/footerYear.js";
import { alramBind } from "./ui/alramBind.js";
import { alram } from "../data/alram.js";

// include
includeHTML("rebehayan_javascript/02Website/include/header.html", ".header").then(() => {
  // 데이터바인딩
  alramBind(alram);
});
includeHTML("rebehayan_javascript/02Website/include/footer.html", ".footer").then(() => {
  // footer
  footerYear();
});
