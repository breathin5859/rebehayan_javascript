export const loading = () => {
  const images = document.querySelectorAll("img");
  // console.log(images);

  const array = Array.from(images); // 유사배열을 배열화 시긴다음에 하는게 좋음
  // console.log(array);
  imagesLoaded(array)
    .on("progress", (state) => {
      // 진행중
      // console.log(state.progressedCount); // 이미지 로딩이 끝날때마다 카운트 줌.
      // (state.progressedCount * 100) / 전체갯수;
      const percent = Math.round((state.progressedCount * 100) / array.length);
      console.log(percent);
      document.querySelector(".progress-bar").style.width = `${percent / 2}%`;
      document.querySelector(".state").textContent = `${percent}%`;
    })
    .on("always", () => {
      // 끝날때
      console.log("로딩끝");
      // document.body.style.overflow = "visible";
      init();
    });
};

const init = () => {
  gsap.to(".loading", {
    autoAlpha: 0, // opacity 1->0 , display none
  });
};
