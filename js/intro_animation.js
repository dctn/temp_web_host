const video = document.getElementById("introVideo");
const overlay = document.querySelector(".intro-overlay");
const site = document.getElementById("site");

video.addEventListener("ended", () => {
  overlay.style.opacity = "0";

  setTimeout(() => {
    overlay.style.display = "none";
    site.style.opacity = "1";
  }, 1000);
});