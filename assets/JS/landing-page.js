// Handle sticky header navbar animation
let scrollPosBefore = window.pageYOffset;
window.onscroll = function () {
  let scrollPosAfter = window.pageYOffset;
  if (scrollPosBefore > scrollPosAfter) {
    document.getElementById("headerNavbar").style.top = "0";
  } else {
    document.getElementById("headerNavbar").style.top = "-82px";
  }
  scrollPosBefore = scrollPosAfter;
};

// Handle Scroll Horizontal Flexbox Using Mouse
const slider = document.querySelector(".list-testimonial");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  let rect = slider.getBoundingClientRect();
  isDown = true;
  slider.classList.add("active");
  // Get initial mouse position
  startX = e.pageX - rect.left;
  // Get initial scroll position in pixels from left
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.dataset.dragging = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.dataset.dragging = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  let rect = slider.getBoundingClientRect();
  e.preventDefault();
  slider.dataset.dragging = true;
  // Get new mouse position
  const x = e.pageX - rect.left;
  // Get distance mouse has moved (new mouse position minus initial mouse position)
  const walk = x - startX;
  // Update scroll position of slider from left (amount mouse has moved minus initial scroll position)
  slider.scrollLeft = scrollLeft - walk;
});
