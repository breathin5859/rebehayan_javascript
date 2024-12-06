import { includeHTML } from "./ui/includeHTML.js";
import { footerYear } from "./ui/footerYear.js";
import { alramBind } from "./ui/alramBind.js";
import { alramData } from "../data/alramData.js";
import { closestDel } from "./ui/closestDel.js";

// include
includeHTML("/02Website/include/header.html", ".header").then(() => {
  // 데이터바인딩
  alramBind(alramData);
  closestDel(".alram__del", "li");
});
includeHTML("/02Website/include/footer.html", ".footer").then(() => {
  // footer
  footerYear();
});
