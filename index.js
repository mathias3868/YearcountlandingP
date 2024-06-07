const dayEl = document.querySelector(".days"),
  hourEl = document.querySelector(".hours"),
  minutesEl = document.querySelector(".minutes"),
  secondsEl = document.querySelector(".seconds");

const countTo = "1 sep 2024";

const c = setInterval(() => {
  const currentDate = new Date(),
    oldDate = new Date(countTo),
    totalSeconds = (oldDate - currentDate) / 1000;

  const day = Math.floor(totalSeconds / 3600 / 24);
  const hour = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  dayEl.innerHTML = `${day}`;
  hourEl.innerHTML = `${format(hour)}`;
  minutesEl.innerHTML = `${format(minutes)}`;
  secondsEl.innerHTML = `${format(seconds)}`;
});

function format(time) {
  return time < 10 ? `0${time}` : time;
}
