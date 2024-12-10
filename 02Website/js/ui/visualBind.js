import { el } from "../helper.js";

export const visualBind = (arry) => {
  const visualSwiper = document.querySelector(".visual-swiper");
  if (!visualSwiper) {
    return;
  }

  const visualitems = arry.map((item) => {
    const { title, text, img } = item;
    return /* html */ `
      <div class="swiper-slide">
        <div class="visual-index">
          <div class="visual-index__text">
            <strong>${title}</strong>
            <p>${text}</p>
          </div>
          <img src="${img}" alt="" class="visual-index__bg" />
        </div>
      </div>
    `;
  });
  el(".visual-swiper .swiper-wrapper").innerHTML = visualitems.join("");
};
