import { includeHTML } from "./ui/includeHTML.js";
import { footerYear } from "./ui/footerYear.js";
import { alramBind } from "./ui/alramBind.js";
import { alramData } from "../data/alramData.js";
import { closestDel } from "./ui/closestDel.js";
// import { learningLounge } from "./ui/learningLounge.js";
// import { learningLoungeData } from "../data/learningdata.js";
import { visualdata } from "../data/visualdata.js";
import { visualBind } from "./ui/visualBind.js";
import { visualSwiper } from "./ui/visualSwiper.js";
import { fileInfo } from "./ui/fileInfo.js";

// 탭메뉴
import { tab } from "./ui/tab.js";
// 댓글
import { comment } from "./comment.js";
// gsap
import { headerAnimation } from "./gsap.js";
import { loading } from "./loading.js";

// include
// includeHTML("/rebehayan_javascript/02Website/include/header.html", ".header").then(() => {깃 경로
includeHTML("/02Website/include/header.html", ".header").then(() => {
  // 데이터바인딩
  alramBind(alramData);
  closestDel(".alram__del", "li");

  // gsap
  headerAnimation();
});
// includeHTML("/rebehayan_javascript/02Website/include/footer.html", ".footer").then(() => { 깃경로
includeHTML("/02Website/include/footer.html", ".footer").then(() => {
  // footer
  footerYear();
  visualBind(visualdata);
  visualSwiper();
  fileInfo();

  loading();

  // learningLounge(learningLoungeData);
});

tab("id", {
  activeClass: "--active",
});
comment();
