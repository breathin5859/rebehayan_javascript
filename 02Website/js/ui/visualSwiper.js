import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export const visualSwiper = () => {
  const element = document.querySelector(".visual-swiper");
  if (!element) {
    return;
  }
  const swiper = new Swiper(".visual-swiper", {
    // loop: true,
    // autoplay: {
    //   delay: 3000,
    // },
  });
};
