const url = window.location;
const prev = document.querySelector(".assign");
const prev2 = document.querySelector(".replace");
const reload = document.querySelector(".reload");

const links = document.querySelectorAll("a");

/* -------------------------------------------------------------------------- */
/*                                   현재페이지정보                            */
/* -------------------------------------------------------------------------- */
links[0].addEventListener("click", () => {
  console.log(window.location); // url 정보
  console.log(window.location.href); // url href
});

/* -------------------------------------------------------------------------- */
/*                                 히스토리추가후 이동                          */
/* -------------------------------------------------------------------------- */
prev.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(location.pathname);

  window.location.assign("16-location-next.html");
  // location.href = "16-location-next.html";

  // assign, href 차이는 없음. 같은개념 히스토리 추가돼서 뒤로가기 가능
});

/* -------------------------------------------------------------------------- */
/*                                히스토리 제거 후 이동                         */
/* -------------------------------------------------------------------------- */
prev2.addEventListener("click", (event) => {
  event.preventDefault();
  url.replace("16-location-next.html");
  //  현재페이지 지우면서 이동(보안 뱅킹 절차 뒤로가기 하면 다른대로가는거 그거임)
});

/* -------------------------------------------------------------------------- */
/*                                   강력새로고침                              */
/* -------------------------------------------------------------------------- */
reload.addEventListener("click", () => {
  location.reload(); // 그냥 새로고침
  // location.reload(true); // 강력새로고침(캐시데이터 모두 삭제되며 새로고침)
});

/* -------------------------------------------------------------------------- */
/*                                  URL 파라미터                             */
/* -------------------------------------------------------------------------- */

// https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0
// ?directoryNo=0&currentPage=1&groupId=0
// ?(물음표)이후 directoryNo(키)=0이다 &(구분자) currentPage(현재페이지는)=1 & groupId=0
// 이걸 객체로 만들면

const a = {
  directoryNo: 0,
  currentPage: 1,
  groupId: 0,
};
// 다른페이지에서 객체정보를 가지고 다른작업 가능 (16-location-next)
