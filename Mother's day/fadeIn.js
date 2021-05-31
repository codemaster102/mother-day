const checkpoint = 700;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0.5;
  }
  document.querySelector("#drawing").style.opacity = opacity;
});