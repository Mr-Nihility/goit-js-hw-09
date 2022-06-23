function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let intervalId = null;
btnStart.addEventListener('click', onBtnStartClick);

function onBtnStartClick(event) {
  btnStart.disabled = true;
  btnStop.disabled = false;
  // console.log(event.target);
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

btnStop.addEventListener('click', onBtnStopClick);

function onBtnStopClick(event) {
  // console.log(event.target);
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(intervalId);
}
