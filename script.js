// GSAP Hero Animation Timeline
gsap.timeline()
    .from(".hero-hello", {
        opacity: 0,
        y: 30,
        duration: 0.6
    })
    .from(".hero-name", {
        opacity: 0,
        y: 30,
        duration: 0.6
    })
    .from(".hero-title", {
        opacity: 0,
        y: 30,
        duration: 0.6
    })
    .from(".hero-desc", {
        opacity: 0,
        y: 30,
        duration: 0.6
    })
    .from(".hero-buttons", {
        opacity: 0,
        y: 30,
        duration: 0.6
    });
window.addEventListener("load", () => {
  gsap.timeline()
    .to(".hero-anim", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    })
    .to(".hero-img", {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6");
});
