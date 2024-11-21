const history = window.history;

const button = document.querySelectorAll("button");

/* -------------------------------------------------------------------------- */
/*                                   히스토리 확인                              */
/* -------------------------------------------------------------------------- */
button[0].addEventListener("click", () => {
  console.log(history);
});

/* -------------------------------------------------------------------------- */
/*                                   히스토리 이동                             */
/* -------------------------------------------------------------------------- */
button[1].addEventListener("click", () => {
  history.back();
  console.log("뒤로가기");
});

button[2].addEventListener("click", () => {
  history.forward();
  console.log("앞으로가기");
});

button[3].addEventListener("click", () => {
  history.go(2);
  console.log("n번째 이동");
});

/* -------------------------------------------------------------------------- */
/*                                    스크롤제어                               */
/* -------------------------------------------------------------------------- */
button[4].addEventListener("click", (e) => {
  if (history.scrollRestoration === "auto") {
    history.scrollRestoration = "manual";
    console.log(history.scrollRestoration);
    e.target.textContent = "스크롤 유지하지않음";
  } else {
    history.scrollRestoration = "auto";
    console.log(history.scrollRestoration);
    e.target.textContent = "스크롤 유지함";
  }
});
window.addEventListener("load", () => {
  if (history.scrollRestoration === "manual") {
    button[4].innerText = "스크롤 유지하지않음";
  }
  window.addEventListener("scroll", () => {
    console.log(`현재스크롤위치 : ${window.scrollY}`);
  });
});

/* -------------------------------------------------------------------------- */
/*                                   히스토리 추가                             */
/* -------------------------------------------------------------------------- */
button[5].addEventListener("click", () => {
  history.pushState({ color: "orange" }, "", "/#next5");
  console.log("히스토리에 상태 추가");
});

button[6].addEventListener("click", () => {
  history.replaceState({ number: 100 }, "", "/#next6");
  console.log("현재 히스토리에 상태 덮어쓰기");
});
