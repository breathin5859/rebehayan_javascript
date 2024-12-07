export const headerAnimation = () => {
  const timeline = gsap
    .timeline()
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
    });
};
