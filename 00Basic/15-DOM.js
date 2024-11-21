const buttons = document.querySelectorAll(".controls button");
const block = document.querySelector(".block");

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    buttons.forEach((button) => button.classList.remove("active"));

    event.target.classList.add("active");
  });
});

/* -------------------------------------------------------------------------- */
/*                                   윈도우 크기                               */
/* -------------------------------------------------------------------------- */
buttons[0].addEventListener("click", () => {
  console.log(`
    뷰포트 가로크기 : ${window.innerWidth}
    뷰포트 세로크기 : ${window.innerHeight}
  `);
});

/* -------------------------------------------------------------------------- */
/*                                 윈도우 스크롤                               */
/* -------------------------------------------------------------------------- */
buttons[1].addEventListener("click", () => {
  console.log(`
    윈도우스크롤 X축 : ${window.scrollX}
    윈도우스크롤 Y축 : ${window.scrollY}
  `);
});

/* -------------------------------------------------------------------------- */
/*                                특정 윈도우 스크롤 이동                       */
/* -------------------------------------------------------------------------- */
buttons[2].addEventListener("click", () => {
  window.scrollTo({
    top: 500,
    behavior: "smooth",
  });
  console.log(`스크롤이 top에서 500px만큼 이동했습니다.`);
});

/* -------------------------------------------------------------------------- */
/*                                    요소 크기                                */
/* -------------------------------------------------------------------------- */
buttons[3].addEventListener("click", () => {
  console.log(`
    선+스크롤 제외 요소 가로크기 : ${block.clientWidth}
    선+스크롤 제외 요소 세로크기 : ${block.clientHeight}
`);
});

/* -------------------------------------------------------------------------- */
/*                                선 스크롤포함 요소 크기                       */
/* -------------------------------------------------------------------------- */
buttons[4].addEventListener("click", () => {
  console.log(`
    선+스크롤 포함 요소 가로크기 : ${block.offsetWidth}
    선+스크롤 포함 요소 세로크기 : ${block.offsetHeight}
    `);
});

/* -------------------------------------------------------------------------- */
/*                                   요소 스크롤                               */
/* -------------------------------------------------------------------------- */
buttons[5].addEventListener("click", () => {
  console.log(`
    요소 X축 : ${block.scrollLeft}
    요소 Y축 : ${block.scrollTop}
    `);
});

/* -------------------------------------------------------------------------- */
/*                                   요소 좌표위치                             */
/* -------------------------------------------------------------------------- */
buttons[6].addEventListener("click", () => {
  console.log(`
    요소 좌표위치 X축 : ${block.offsetLeft}
    요소 좌표위치 Y축 : ${block.offsetTop}
    `);
});

/* -------------------------------------------------------------------------- */
/*                                 요소 크기와 상대위치                        */
/* -------------------------------------------------------------------------- */
buttons[7].addEventListener("click", () => {
  const info = block.getBoundingClientRect();
  console.log(info);

  console.log(`
    요소 top : ${block.getBoundingClientRect().top}
    요소 left : ${block.getBoundingClientRect().left}
    요소 right : ${block.getBoundingClientRect().right}
    요소 bottom : ${block.getBoundingClientRect().bottom}
    요소 width : ${block.getBoundingClientRect().width}
    요소 height : ${block.getBoundingClientRect().height}
    `);
});

/* -------------------------------------------------------------------------- */
/*                                   data-속성                                */
/* -------------------------------------------------------------------------- */
buttons[8].addEventListener("click", () => {
  console.log(`
    data-속성값 : ${block.dataset.text}
`);
});

/* -------------------------------------------------------------------------- */
/*                                     전체창                                  */
/* -------------------------------------------------------------------------- */
buttons[9].addEventListener("click", () => {
  console.log(`
    전체창 확인 : ${!document.fullscreenElement}
`);

  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

/* -------------------------------------------------------------------------- */
/*                                    전체높이                                 */
/* -------------------------------------------------------------------------- */
buttons[10].addEventListener("click", () => {
  console.log(`
    요소 내부 전체높이 : ${block.scrollHeight}
    윈도우 내부 전체높이 : ${document.body.scrollHeight}
`);
});
