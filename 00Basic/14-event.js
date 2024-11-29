/* -------------------------------------------------------------------------- */
/*                                    이벤트제거                               */
/* -------------------------------------------------------------------------- */
const remove = document.querySelector(".btn-remove");

const removeFn = () => {
  console.log("함수실행");
};
remove.addEventListener("click", removeFn);
// remove.removeEventListener("click", removeFn);

//  removeEventListener 콜백함 수 쓰면 안됨. 외부함수 써서해야 됨
// remove.removeEventListener("click", ()=>{
//   console.log("이벤트가 제거되었습니다.");
// })

const download = document.querySelector(".download");
const handleDownload = () => {
  console.log("다운로드 중입니다..");
};
// contextmenu - 우클릭
document.body.addEventListener("contextmenu", () => {
  download.removeEventListener("click", handleDownload);
  console.log("우클릭 다운로드 중지");
  // download.setAttribute("disabled", true);
  download.disabled = true; // setAttribute 이방법도 있음
});

/* -------------------------------------------------------------------------- */
/*                                  캡처링과 버블링                            */
/* -------------------------------------------------------------------------- */

// 캡처링
const captureParent = document.querySelector(".capture");
const captureChildren = captureParent.querySelector(".children");
// selector.addEventListener(이벤트,함수,캡처링)

const children = () => {
  console.log("자식");
};

captureParent.addEventListener(
  "click",
  () => {
    console.log("parent");
    captureChildren.removeEventListener("click", children);
  },
  true
);

captureChildren.addEventListener("mouseenter", children);

// 버블링
const bubbleParent = document.querySelector(".bubble");
const bubbleChildren = bubbleParent.querySelector(".children");

bubbleParent.addEventListener("click", () => {
  console.log("parent");
});
bubbleChildren.addEventListener("click", (e) => {
  e.stopPropagation();

  console.log("children");
});

/* -------------------------------------------------------------------------- */
/*                                  이벤트 종류                                */
/* -------------------------------------------------------------------------- */
const mouse = document.querySelector(".event-list .mouse");
const keyboard = document.querySelector(".event-list .keyboard");
const form = document.querySelector(".event-list .form");

const logMessage = (message) => {
  // console.log(message);
};

// 마우스
mouse.addEventListener("click", () => logMessage("클릭"));
mouse.addEventListener("mouseenter", () => logMessage("마우스 진입"));
mouse.addEventListener("mouseleave", () => logMessage("마우스 떠남"));
mouse.addEventListener("mousedown", () => logMessage("마우스 버튼누름"));
mouse.addEventListener("mouseup", () => logMessage("마우스 버튼땜"));
mouse.addEventListener("mousemove", () => logMessage("마우스 움직임"));
mouse.addEventListener("contextmenu", () => logMessage("마우스 우측버튼"));
mouse.addEventListener("wheel", () => logMessage("마우스 휠"));

// 키보드
keyboard.addEventListener("keydown", () => logMessage("키 누름")); // 누르자마자 실행되기때문에, 누르고 땔때 이벤트 실행해야하지... keyup 추천
keyboard.addEventListener("keyup", () => logMessage("키 땜"));
keyboard.addEventListener("focus", () => logMessage("초점 발생"));
keyboard.addEventListener("blur", () => logMessage("초점 잃음"));

// 폼
form.addEventListener("input", () => logMessage("값변경"));
form.addEventListener("change", () => logMessage("상태변경"));
form.addEventListener("submit", (e) => {
  e.preventDefault();
  logMessage("데이터 전송");
});

// 문서/윈도우
window.addEventListener("popstate", () => logMessage("페이지 바뀜")); // url 변경 조회
window.addEventListener("load", () => logMessage("페이지 로드"));
window.addEventListener("scroll", () => logMessage("스크롤"));
window.addEventListener("resize", () => logMessage("창크기 변화"));

/* -------------------------------------------------------------------------- */
/*                                 키보드 keyCode                             */
/* -------------------------------------------------------------------------- */
const key = document.querySelector(".key");

key.addEventListener("keydown", (event) => {
  // console.log(event.key); // 이벤트 키확인;
  // 단축키 - 한개 키
  // if (event.key === "a") {
  //   console.log("단축키 실행");
  // }

  if (event.ctrlKey && event.altKey && event.key === "a") {
    console.log("단축키 다중 실행");
  }
});

/* -------------------------------------------------------------------------- */
/*                                animationend                                */
/* -------------------------------------------------------------------------- */
// 애니메이션이 있는경우 애니메이션 끝난후 함수 실행
//  거의 안쓰고 gsap 씀
const ani = document.querySelector(".ani");

ani.addEventListener("animationend", (event) => {
  console.log("애니메이션이 종료되었습니다.");
  event.target.style.setProperty("--bg", "orange"); // 배경색 변경
});
