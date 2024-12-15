/* -------------------------------------------------------------------------- */
/*                                     Pin                                    */
/* -------------------------------------------------------------------------- */

const section2Height = document.querySelector(".section2").offsetHeight;
const boxHeight = document.querySelector(".box").offsetHeight;
console.log(section2Height);

ScrollTrigger.create({
  trigger: ".box",
  start: "top top",
  end: "1000px center", // 유연하게 짜려면 스크립트로 오프셋으로 범위 받아서 .
  end: `${section2Height}px`,
  // markers: true,
  pin: true,
  // pinType: " transform", // css로 포지션 충돌날때 피할수 있음
  pinSpacing: false,
});

/* -------------------------------------------------------------------------- */
/*                                  Pin Type                                  */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                 Pin Spacing                                */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  examples1                                 */
/* -------------------------------------------------------------------------- */

// 스크롤 움직아면서 텍스트 들어오고 확대

const fixtext = gsap
  .timeline()
  .fromTo(
    ".fix",
    {
      // x: -innerWidth,
      rotation: 0,
      x: "-250%",
    },
    {
      rotation: 720,
      x: 0,
    }
  )
  .to(
    ".fix",
    {
      color: "white",
    },
    "-=0.2"
  )
  .to(
    ".fix",
    {
      scale: 10,
    },
    "-=0.3"
  )
  .to(
    ".section3",
    {
      backgroundColor: "white",
    },
    "-=0,5"
  );

ScrollTrigger.create({
  trigger: ".section3",
  start: "top top",
  end: "5000px center", // 애니메이션 끝범위(길이)
  scrub: true,
  pin: true,
  // markers: true,
  animation: fixtext,
});
/* -------------------------------------------------------------------------- */
/*                                  examples2                                 */
/* -------------------------------------------------------------------------- */

// 글자마다 애니메이션
// stagger 는 배열만 가능

// 텍스트
const isArrayText = (selector, tag) => {
  const strong = document.querySelector(selector);
  const strongs = strong.textContent.split("");

  const isArray = strongs.map((itme) => {
    return `
      <${tag}>${itme}</${tag}>
    `;
  });
  strong.innerHTML = isArray.join("");
};
isArrayText(".strong", "span");

const textArray = document.querySelectorAll(".strong span");
const textSplit = gsap
  .timeline()
  .fromTo(
    textArray,
    {
      y: 200,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "elastic.out(1,0.3)",
      stagger: {
        each: 0.2,
        from: "random",
      },
    }
  )
  .to(textArray, {
    color: "white",
    stagger: {
      each: 0.2,
      from: "center",
    },
  });

ScrollTrigger.create({
  trigger: ".section4",
  start: "top center",
  end: "400% center",
  scrub: 2,
  pin: true,
  markers: true,
  animation: textSplit,
});
