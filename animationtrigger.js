document.getElementById("animate-btn").addEventListener("click", function () {
  let element = document.getElementById("animated-element");
  element.style.transition = "opacity 1s ease-in-out";
  element.style.opacity = element.style.opacity == 1 ? 0 : 1;
});