import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

// slide4
const swiper4 = new Swiper(".slide4", {
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".slide4 .swiper-pagination",
  },
  on: {
    //
    slideChange() {
      // console.log("슬라이드바뀜"); // 슬라이드 바뀔때마다 찍히면서 카운팅
      const spans = this.pagination.el.querySelectorAll("span");
      spans.forEach((span) => {
        span.removeAttribute("style");
      });
    },
    //
    autoplayTimeLeft(slide, time, progress) {
      // const spans = document.querySelectorAll(".slide4 .swiper-pagination span");
      const spans = this.pagination.el.querySelectorAll("span");
      // console.log(slide); // activeIndex - 복제품 포함한 인덱스 , realIndex- 복제품 제외한 실제 인덱스값 / 복제는 -loop 연결위해 가상슬라이드생김)
      // console.log(slide.realIndex);
      spans[slide.realIndex].style.setProperty("--progress", (1 - progress) * 100);
    },
  },
});

// slide3
// Pagination Progressbar
// 자동새쟁시간
const svg = document.querySelector(".autoplay-progress svg");
const isTime = document.querySelector(".autoplay-progress span");
const isbar = document.querySelector(".bar-progress");

const swiper3 = new Swiper(".slide3", {
  // 프로그래스바 위치는 css로 제어
  // loop:true,
  // direction: "vertical",

  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".slide3 .swiper-pagination",
    type: "progressbar",
    // progressbarOpposite: true, // 프로그래스바 vertical, 디렉션 버티컬 주면 안줘도 자동으로 들어감
  },

  // 프로그래스 자동재생
  // 1.원형 애니메이션
  // on: {
  //   autoplayTimeLeft(slide, time, progress) {
  //     // console.log(a-내정보, b-현재시간, c-현재시간 소숫점);
  //     svg.style.setProperty("--progress", progress);
  //     isTime.textContent = `${Math.ceil(time / 1000)}초`;
  //     //ms로 반한해서 1000나눠줘야함, 소숫점으로 나오니까 반올림 정수반환하는 Math.ceil써서
  //   },
  // },

  // 2.막대 애니메이션
  on: {
    autoplayTimeLeft(slide, time, progress) {
      isbar.style.setProperty("--progress", `${(1 - progress) * 100}%`);
    },
  },
});

// slide2
// Pagination Fraction 커스텀
// 클래스를 변수로 할당시킨걸 인스턴스
const swiper2 = new Swiper(".slide2", {
  pagination: {
    el: ".slide2 .swiper-pagination",
    type: "fraction",
    // 커스텀.  클래스명 유지해야함
    // 객체안에 함수 매서드
    renderFraction(current, total) {
      // console.log(current, total);
      return /* html */ `
        <div class="${current}"></div>
        <div class="bar">+</div>
        <div class="${total}"></div>
      `;
    },
  },
});

// slide1
const swiper = new Swiper(".slide1");
