function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  let timerId = null;

  const btn = document.querySelectorAll("button");
  const body = document.querySelector("body")

  btn[0].addEventListener("click", () => {
    btn[0].disabled = true
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000)});
  

btn[1].addEventListener("click", () => {
  clearInterval(timerId);
  btn[0].disabled = false;
});