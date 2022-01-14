const container = document.querySelector(".container");
const slides = document.querySelectorAll(".slide");

container.addEventListener("click", (e) => {
  if (e.target.className !== "slide") {
    return;
  }
  clearActiveClasses();
  e.target.classList.add("active");
  randomBgColor();
});

function clearActiveClasses() {
  slides.forEach((slide) => slide.classList.remove("active"));
}

function randomBgColor() {
  var x = Math.floor(Math.random() * 256);
  var y = 100 + Math.floor(Math.random() * 256);
  var z = 50 + Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";

  document.body.style.background = bgColor;
}

randomBgColor();
