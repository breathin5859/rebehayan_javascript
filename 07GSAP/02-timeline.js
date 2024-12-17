/* -------------------------------------------------------------------------- */
/*                                  Timeline                                  */
/* -------------------------------------------------------------------------- */

// timeline 코드 순서대로 애니메이션. 이전 애니메이션 끝날때 까지 기다림
// const timeline = gsap.timeline();

// timeline.from(".header", {
//   y: 50,
//   opacity: 0,
//   duration: 1,
// });
// timeline.from(
//   ".visual",
//   {
//     y: 50,
//     opacity: 0,
//   },
//   "-=0.5" // 0.5초 바르게
// );
// timeline.from(
//   ".box:nth-child(odd)",
//   {
//     x: -50,
//     opacity: 0,
//     stagger: {
//       each: 0.3,
//       // from: "random",
//     },
//   },
//   "<" // 앞 애니메이션이랑 같이
// );
// timeline.from(
//   ".box:nth-child(even)",
//   {
//     x: 50,
//     opacity: 0,
//     stagger: {
//       each: 0.3,
//     },
//   },
//   "<" // 앞 애니메이션이랑 같이
// );
// timeline.from(
//   ".footer",
//   {
//     y: 50,
//     opacity: 0,
//   },
//   "+=1" // 1초뒤에
// );

/* ------------- 위 코드 반복되는 변수명 지우고 세미콜론 지우고 메서드 체이닝으로 코드 쓸수 있음. ------------- */
const timeline = gsap
  .timeline()

  .from(".header", {
    y: 50,
    opacity: 0,
    duration: 1,
  })
  .from(
    ".visual",
    {
      y: 50,
      opacity: 0,
    },
    "-=0.5" // 0.5초 바르게
  )
  .from(
    ".box:nth-child(odd)",
    {
      x: -50,
      opacity: 0,
      stagger: {
        each: 0.3,
        // from: "random",
      },
    },
    "<" // 앞 애니메이션이랑 같이
  )
  .from(
    ".box:nth-child(even)",
    {
      x: 50,
      opacity: 0,
      stagger: {
        each: 0.3,
      },
    },
    "<" // 앞 애니메이션이랑 같이
  )
  .from(
    ".footer",
    {
      y: 50,
      opacity: 0,
    },
    "+=1" // 1초뒤에
  );
