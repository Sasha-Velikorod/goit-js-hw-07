function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");

const randomColor = (e) => {
  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;
  spanEl.textContent = color;
};

btnEl.addEventListener("click", randomColor);
