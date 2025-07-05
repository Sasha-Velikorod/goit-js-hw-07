const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const onInput = (e) => {
  const input = e.currentTarget.value.trim();

  if (input === "") {
    spanEl.textContent = "Anonymous";
  } else {
    spanEl.textContent = input;
  }
};

inputEl.addEventListener("input", onInput);
