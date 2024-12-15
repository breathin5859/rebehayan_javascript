/* -------------------------------------------------------------------------- */
/*                              트윈 Scroll Trigger                            */
/* -------------------------------------------------------------------------- */

gsap.to(".box", {
  x: 100,
  duration: 1,
  scrollTrigger: {
    // trigger:'선택자 - 기준요소(부모요소 잡는다 생각하면됨)'
    trigger: ".section2", // 부모가 보이자마자 애니메이션 실행
    // markers: true, // 재생범위 확인 (start / end)
    // start:'트리거위치(부모) 뷰포트위치' // 시작지점셋팅
    start: "top center", // 트리거 위치변경 ( 보통 top center )
    end: "80% center", // 지점 옮기려면 top 기준으로 계산해서 넣어야함 (보통 center center)
  },
  stagger: 0.3,
});

/* -------------------------------------------------------------------------- */
/*                             생성자 Scroll Trigger                           */
/* -------------------------------------------------------------------------- */

// 애니메이션 따로  - 재활용 가능
// const blockAnimation = gsap.to(".block", {
//   x: 200,
//   rotation: 360,
//   duration: 2,
// });

// ScrollTrigger.create({
//   trigger: ".section3",
//   start: "20% center",
//   end: "40% center",
//   // animation:'실행하고자하는 애니메이션'
//   animation: blockAnimation,
//   markers: true,
// });

/* -------------------------------------------------------------------------- */
/*                               Toggle Actions                               */
/* -------------------------------------------------------------------------- */

//  애니메이션 방향 정할 수 있음  - 한방향 or 양방향
const blockAnimation = gsap.to(".block", {
  x: 200,
  rotation: 360,
  duration: 4,
});

ScrollTrigger.ScrollTrigger({
  trigger: ".section3",
  start: "20% center",
  end: "40% 40%",
  // animation:'실행하고자하는 애니메이션'
  animation: blockAnimation,
  markers: true,
  // toggleActions: " onEnter - start-start / onLeave - end-end  / onEnterBack -스크롤 올려서 end-end / onLeaveBack - 스크롤 올려서 start-start/  ",
  // toggleActions: "play none none none", // 초기값
  toggleActions: "play none reverse none", // 각각 제어가능
});
