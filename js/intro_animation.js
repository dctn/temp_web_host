// D2 Intro Animation - D2 text aligns perfectly with logo
const tl = gsap.timeline();

let is_desktop = 0;
if (window.innerWidth >= 768) {
 is_desktop = 100;
}
else {
 is_desktop = 0;
}

// Function to get responsive values
function getResponsiveValues() {
  const isMobile = window.innerWidth <= 768;
  const isSmallMobile = window.innerWidth <= 480;
  
  return {
    slideDistance: isSmallMobile ? window.innerWidth * 0.3 : 
                   isMobile ? window.innerWidth * 0.6 : 400,
    // Position to align D2 text with logo D2 position
    finalDPosition: isSmallMobile ? -110 : 
                    isMobile ? -160 : -220,
    finalNumPosition: isSmallMobile ? 25 : 
                      isMobile ? -70 : 60,
    // Y position adjustment for desktop vs mobile
    finalYPosition: isSmallMobile ? -20 : 
                    isMobile ? -20 : -50,  // Desktop: 5, Mobile: -20
  };
}

const values = getResponsiveValues();

// Initial states
gsap.set(".left", { 
  x: -values.slideDistance, 
  opacity: 0 
});

gsap.set(".right", { 
  x: values.slideDistance, 
  opacity: 0 
});

gsap.set(".num_2", { 
  opacity: 0,
  scale: 0.8,
  x: 100
});

gsap.set(".intro_logo", {
  opacity: 0,
  force3D: true,
  willChange: "transform, opacity"
});

gsap.set(".d2_container", {
  x: 0,
  y: 0
});

// Animation Timeline
tl
  // 1. D slides in from LEFT
  .to(".left", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  })

  // 2. D slides in from RIGHT
  .to(".right", {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  }, "-=0.6")

  // 3. BOTH D's MERGE INTO ONE - overlap completely

  // 4. Hide left D (only ONE D visible now)
  .to(".left", {
    opacity: 0,
    duration: 0.2
  })

  // 5. Number "2" appears next to D
  .to(".num_2", {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: "back.out(1.7)"
  })

  // 6. D2 container moves to EXACT logo position
  .to(".d2_container", {
    x: values.finalDPosition,
    y: values.finalYPosition,  // Use responsive Y position
    duration: 0.7,
    ease: "power2.inOut",
    scale: 1.1
  })

  // 7. Fine-tune D and 2 positions to align with logo
  .to(".right", {
    x: 0,
    duration: 0.3
  }, "<")
  
  .to(".num_2", {
    x: values.finalNumPosition,
    duration: 0.3
  }, "<")

  // 8. Logo fades in - D2 text now aligns with logo D2
  .to(".intro_logo", {
    opacity: 1,
    scale: 1,
    duration: 0.4,
    ease: "power2.out"
  })

  // 9. Fade out D2 text (logo D2 takes over)
  .to([".right", ".num_2"], {
    opacity: 0,
    duration: 0.1,
    delay: 0.5
  })

  // 10. Hold logo
  .to({}, { duration: 1 })

  // 11. Fade out intro overlay
  .to(".intro-overlay", {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    onComplete: () => {
      document.querySelector(".intro-overlay").style.display = "none";
    }
  })

  // 12. Reveal main site
  .to("#site", {
    opacity: 1,
    duration: 1
  }, "-=0.8");

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (tl.progress() < 1) {
      tl.kill();
      location.reload();
    }
  }, 250);
});