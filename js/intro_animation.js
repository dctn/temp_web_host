const tl = gsap.timeline();

// Initial states
gsap.set(".left", { x: -400, opacity: 0 });
gsap.set(".right", { x: 400, opacity: 0 });
gsap.set(".words", { opacity: 0, scale: 1 });
gsap.set(".left_word", { x: -50, });
 gsap.set(".intro_logo", {
    opacity: 0,
    scale: 0.9,
    force3D: true,
    willChange: "transform, opacity"
  });
// Animation
tl
  // D from left
  .to(".left", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  })

  // D from right
  .to(".right", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  }, "-=0.6")

  // Hold moment
  .to(".letters", {
    scale: 1.1,
    duration: 0.4
  })

//   Words appear
    .to(".words", {
    opacity: 1,
    scale: 1,
    duration: 0.4
  })

//   hide words
  .to(".words", {
    opacity: 0,
    scale: 1,
    duration: 0.8
  })

//   both join together into one D
  .to(".left", {
    x: 200,
    duration: 0.4
  })

.to(".right", {
    x: -200,
    duration: 0.4
  })

//   both D move left 
  .to(".letters", {
    x: -150,
    duration: 0.4
  })

  // Hide Ds
  .to(".letters", {
    opacity: 0,
    scale: 0.9,
    duration: 0.3
  })

   // Logo reveal (optimized)
    .to(".intro_logo", {
      opacity: 1,
      scale: 1,
      duration: 0.9,
      ease: "power2.out"
    })

  // Fade intro overlay
  .to(".intro-overlay", {
    opacity: 0,
    duration: 1,
    delay: 0.8,
    onComplete: () => {
      document.querySelector(".intro-overlay").style.display = "none";
    }
  })

  // Reveal site
  .to("#site", {
    opacity: 1,
    duration: 1
  }, "-=0.8");
