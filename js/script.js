// Logic For Toggle HamBurgerMenu

$(".menu").click(function () {
  $(".navlinks ul").slideToggle("slow");
});

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

gsap.fromTo(
  ".card",
  {
    x: 1500,
  },
  {
    x: 0,
    scrollTrigger: {
      trigger: ".card", // Element that triggers the animation
      start: "top center", // Animation starts when top of the trigger hits the center of the viewport
      end: "bottom center", // Animation ends when bottom of the trigger hits the center of the viewport
      scrub: true, // Smooth animation tied to scroll
    },
  }
);
gsap.fromTo(
  ".right",
  {
    x: 500,
    // y: 200,
  },
  {
    x: 0,
    // y: 0,
    ease: "power2.inOut",
    stagger:1,
    scrollTrigger: {
      trigger: ".right", // Element that triggers the animation
      start: "top center", // Animation starts when top of the trigger hits the center of the viewport
      end: "bottom center", // Animation ends when bottom of the trigger hits the center of the viewport
      // scrub: true, // Smooth animation tied to scroll
    },
  }
);
gsap.from("body", { y: -50, duration: 1 });

gsap.from(".navimg", { x: 800, duration: 1 });
gsap.from(".navtext", { x: -800, duration: 1 });
