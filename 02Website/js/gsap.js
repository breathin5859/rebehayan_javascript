export const headerAnimation = () => {
  const main = window.location.pathname.includes("main");
  if (main) {
    document.body.style.overflow = "hidden";
  }

  const timeline = gsap
    .timeline({
      onComplete() {
        // console.log("애니메이션 종료");
        document.body.style.overflow = "visible"; // 애니메이션 끝난뒤에 스크롤 되게
      },
    })
    .fromTo(
      ".header",
      {
        y: -100,
      },
      {
        y: 0,
      }
    )
    .from(".header__wrap h1", {
      x: -100,
      opacity: 0,
    })
    .from(".gnb> ul >li", {
      y: -50,
      opacity: 0,
      stagger: 0.2,
    })
    .from(".profile", {
      x: 100,
      opacity: 0,
    })
    .to(".idp h2", {
      y: 100,
      scrollTrigger: {
        trigger: ".idp",
        // markers: true,
        start: " 100% center",
      },
    });
};
