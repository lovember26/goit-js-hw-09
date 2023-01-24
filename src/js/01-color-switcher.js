const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
startBtnEl.disabled = false;
startBtnEl.addEventListener('click', changeColor);
function changeColor() {
  startBtnEl.disabled = true;
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

stopBtnEl.addEventListener('click', stopColorChange);
function stopColorChange() {
  clearInterval(intervalId);
  startBtnEl.disabled = false;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
