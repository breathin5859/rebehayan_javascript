// 헬퍼 파일 만들고 사용하는 법
// import { el, els } from "./helper.js"; // 사용할 페이지에 import

// // el();
// // el('button');
// // el('button').addEventListener();

// // el("div"); // 요소 업으니 콘솔 경고뜸

// console.log(els("button"));

import { dialog } from "./ui/dialog.js";
import { list7Bind } from "./bind/list7Bind.js";
import { data } from "../data/list7Bind.js"; // 데이터만 따로보관
import { include } from "./ui/include.js"; // 동기방식
import { includeHTML } from "./ui/includeHTML.js"; // 비동기방식
import { movieSearch } from "./movieSearch.js";
import { select } from "./ui/select.js";

// 팝업
dialog("popup1", true); // backdrop o
dialog("popup2"); // backdrop x

// 데이터바인딩
list7Bind(data);

// HTML include
// include();
// includeHTML(경로,선택자);
includeHTML("/01Content/include/header.html", ".header");
includeHTML("/01Content/include/footer.html", ".footer");

// 영화검색
movieSearch(); // 유효성 검사 넣어보기

// select
select();
