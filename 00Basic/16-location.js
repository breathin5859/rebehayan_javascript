const url = window.location;
const prev = document.querySelector(".assign");
const prev2 = document.querySelector(".replace");
const reload = document.querySelector(".reload");

const links = document.querySelectorAll("a");

/* -------------------------------------------------------------------------- */
/*                                   현재페이지정보                            */
/* -------------------------------------------------------------------------- */
links[0].addEventListener("click", () => {
  console.log(url);
});

/* -------------------------------------------------------------------------- */
/*                                 히스토리추가후 이동                          */
/* -------------------------------------------------------------------------- */
prev.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(location.pathname);
  url.assign("16-location-next.html");
});

/* -------------------------------------------------------------------------- */
/*                                히스토리 제거 후 이동                         */
/* -------------------------------------------------------------------------- */
prev2.addEventListener("click", (event) => {
  event.preventDefault();
  url.replace("16-location-next.html");
});

/* -------------------------------------------------------------------------- */
/*                                   강력새로고침                              */
/* -------------------------------------------------------------------------- */
reload.addEventListener("click", () => {
  location.reload();
  // location.reload(true);
});
