import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

let swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelector("button").addEventListener("click", () => {
  swiper.slideTo(2);
});

const location = window.location.hash;
// console.log(location.replace("#",""));
const togoSlideNumber = location.replace("#", "");
swiper.slideTo(togoSlideNumber - 1);

//파라미터로 받기

/* -------------------------------------------------------------------------- */
/*           depth1                    shift+arlt+x                     */
/* -------------------------------------------------------------------------- */
/* ------------------------------------ depth2 arlt+x ----------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   파라미터로받기                                */
/* -------------------------------------------------------------------------- */

const params = new URLSearchParams(window.location.search);
// console.log(params);

let obj = {}; // 밖으로 뺴기 위해서 빈 객체
params.forEach((value, key) => {
  console.log(key, value);
  obj[key] = value; //  빈객체에 등록하는것.  [등록할이름] = 등록할 값
  // 안에 객체 넣으면 밖을 못빼서 밖에서 빈 객체만듦.
});

console.log(obj);
swiper.slideTo(obj.slide - 1);
