import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

let swiper; // 재할당을 위한 빈 변수

const slide = () => {
  // swiper 재할당
  swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    //  반응형.
    // breakpoints: {
    //   360: {
    //     // 360이상
    //     slidesPerView: 2,
    //   },
    //   1024: {
    //     //1024 이상
    //     slidesPerView: 5,
    //   },
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

// slide(); //  바로 실행시키면 시작이 모바일이면 실행되니까 바로실행시키면 안됨
// 초기실행은 웹버전에서만 실행.
if (innerWidth > 1024) {
  slide();
}

// 모바일 슬라이드 x .웹에선 슬라이드
window.addEventListener("resize", () => {
  // console.log(window.innerWidth); 가로크기조회
  if (innerWidth < 1024) {
    // 모바일일때 destroy
    if (swiper) {
      console.log("모바일");
      // 인스턴스이름.destroy
      swiper.destroy(); // destroy했지만 잔재가 남아있어 완전 안부서짐.
      swiper = null; // 부서지고 잔재 없애기 위해 재할당
    }
  } else {
    // 웹일때 uadate
    if (!swiper) {
      slide();
      console.log("웹");
    } else {
      swiper.update();
    }
  }
});
