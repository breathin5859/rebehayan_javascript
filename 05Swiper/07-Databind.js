import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const data = [
  {
    slideTitle: "제목입니다.1",
    slideText: "정보입니다.",
  },
  {
    slideTitle: "제목입니다.2",
    slideText: "정보입니다.",
  },
  {
    slideTitle: "제목입니다.3",
    slideText: "정보입니다.",
  },
];

const slideWrap = document.querySelector(".swiper-wrapper");

slideWrap.innerHTML = data
  .map((item) => {
    return /* html */ `
    <div class="swiper-slide">
      <h2>${item.slideTitle}</h2>
      <p>${item.slideText}</p>
     </div> 
  `;
  })
  .join("");

// console.log(arry);
// slideWrap.innerHTML = arry.join(""); // const 안하고 바로 넣어서 축약해서씀.

let swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
