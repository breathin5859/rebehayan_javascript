/* -------------------------------------------------------------------------- */
/*                                  gsap.to()                                 */
/* -------------------------------------------------------------------------- */

// 자삽 함수.트윈('.애니메이션시킬 대상 선택자',{
// 객체실행
// });

//  배열로 잡지 않지 않아도 같은 클래스 다 잡아서 실행 시켜줌.
// gsap.to(".box", {
//   x: 200,
//   duration: 2,
// });

// to - 도착지점
gsap.to(".green", {
  x: 200,
  // y: 100,
  duration: 2,
});

/* -------------------------------------------------------------------------- */
/*                                 gsap.from()                                */
/* -------------------------------------------------------------------------- */

// form - 시작지점 정의 / 도착지점은 따로 지정하지 않으면 css 
gsap.from(".violet", {
  rotation: 360,
  scale: 0,
  duration: 3,
});
/* -------------------------------------------------------------------------- */
/*                                gsap.fromTo()                               */
/* -------------------------------------------------------------------------- */

// gsap.fromTo(".tomato", {from}, {to});
gsap.fromTo(
  ".tomato",
  {
    x: -100,
  },
  {
    x: 200,
    duration: 2,
  }
);

/* -------------------------------------------------------------------------- */
/*                                  Stagger                                   */
/* -------------------------------------------------------------------------- */

// 같은 동작을 텀을 주고 들어오게...
// gsap.to(".stagger .item", {
//   x: 100,
//   opacity: 0,
//   stagger: 0.2, // 각각 0.2초 간격으로 실행
//   duration: 2,
// });

gsap.from(".stagger .item", {
  x: 100,
  opacity: 0,
  stagger: 0.2, // 각각 0.2초 간격으로 실행
  duration: 2, // 개당 실행되는 시간
  ease: "elastic", // 튕김
});

/* -------------------------------------------------------------------------- */
/*                                  Timeline                                  */
/* -------------------------------------------------------------------------- */

// 서로 다른 동작과 텀을 줌.
// 변수로 등록 해줘야함
const timeline = gsap.timeline();

// 변수명으로 시작. setTimeout처럼 하나 끝난 다음 다음거 실행
timeline.from(".timeline .item1", {
  y: 50,
  opacity: 0,
});
timeline.from(".timeline .item2", {
  y: -50,
  opacity: 0,
});
timeline.from(".timeline .item3", {
  y: -50,
  opacity: 0,
});
timeline.from(".timeline .item4", {
  x: 50,
  opacity: 0,
});

/* -------------------------------------------------------------------------- */
/*                                  Controls                                  */
/* -------------------------------------------------------------------------- */

const tween = gsap.to(".control-wrap .ghost", {
  duration: 4,
  x: 300,
  ease: "none", // 선형
  paused: true, // 시작시 정지. false가 기본
});

const buttons = document.querySelectorAll(".control-wrap button");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    switch (index) {
      case 0:
        tween.play(); // 정방향 재생
        break;
      case 1:
        tween.pause(); // 일시정지
        break;
      case 2:
        tween.resume(); // 일시정지에서 시작 (가던 방향에서 다시시작)
        break;
      case 3:
        tween.reverse(); // 역재생
        break;
      case 4:
        tween.restart(); // 처음부터 다시재생
        break;
    }
  });
});
