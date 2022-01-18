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
  const bgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.background = bgColor;
}

randomBgColor();
