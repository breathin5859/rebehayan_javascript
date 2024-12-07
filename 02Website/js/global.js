import { includeHTML } from "./ui/includeHTML.js";
import { footerYear } from "./ui/footerYear.js";
import { alramBind } from "./ui/alramBind.js";
import { alramData } from "../data/alramData.js";
import { closestDel } from "./ui/closestDel.js";
import { learningLounge } from "./ui/learningLounge.js";
import { learningLoungeData } from "../data/learningdata.js";

// include
includeHTML("/rebehayan_javascript/02Website/include/header.html", ".header").then(() => {
  // 데이터바인딩
  alramBind(alramData);
  closestDel(".alram__del", "li");
});
includeHTML("/rebehayan_javascript/02Website/include/footer.html", ".footer").then(() => {
  // footer
  footerYear();
});
learningLounge(learningLoungeData);
