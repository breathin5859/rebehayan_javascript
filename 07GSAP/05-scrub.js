/* -------------------------------------------------------------------------- */
/*                                  트윈 Scrub                                 */
/* -------------------------------------------------------------------------- */

gsap.to(".box", {
  x: 200,
  y: 400,
  rotation: 360,
  duration: 1,
  scrollTrigger: {
    trigger: ".section2",
    start: "top center",
    end: "bottom center",
    // markers: true, // 해당 에니매이션 설정 끝나면 지워줘야 헷갈리지 않음
    scrub: 1, // 불린과 넘버 / true는 리니어, 숫자는 가속도 스크롤동작마다 애니매이션 진행
  },
});

/* -------------------------------------------------------------------------- */
/*                                  생성자 Scrub                               */
/* -------------------------------------------------------------------------- */

const block = gsap.to(".block", {
  x: 300,
  y: 500,
  backgroundColor: " orange",
});

ScrollTrigger.create({
  trigger: ".section3",
  start: "100px center",
  end: "bottom center",
  scrub: 2,
  // animation: 트윈연결;
  animation: block,
  // markers: true,
});

/* -------------------------------------------------------------------------- */
/*                                 타임라인 Scrub                              */
/* -------------------------------------------------------------------------- */

const fix = gsap
  .timeline()
  .to(".section4", {
    backgroundColor: " black",
    duration: 2, // 애니메이션 정도의 속도를 정할 수 있음 - 스크럽은 사용자에게 타이밍이 있는데 이걸 임의로 2초 분량으로 나눠 실행됨
  })
  .to(
    ".fix",
    {
      color: "white",
    },
    "-=0.3"
  )
  .to(
    ".fix",
    {
      x: 400,
      scale: 5,
    },
    "-=0.2"
  );
ScrollTrigger.create({
  trigger: ".section4",
  start: "10% center",
  end: "70% center",
  scrub: 2,
  animation: fix,
  markers: true,
  onScrubComplete() {
    console.log("스크럽 종료");
  },
});
