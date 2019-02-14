function runClock() {
  var date = new Date();
  let secs = date.getSeconds();
  let mins = date.getMinutes();
  let hrs = date.getHours();

  let secPosition = secs * 6;
  let minPosition = mins * 6 + (secs * 6) / 60;
  let hrPosition = hrs * 30 + (mins * 6) / 12;
  //  6 degrees every second//
  //  6 degrees every hr + secs in hr
  //  30 deg to move in 1hr + mins in hr

  document.querySelector(
    "#secondHand"
  ).style.transform = `rotate(${secPosition}deg)`;
  document.querySelector(
    "#minuteHand"
  ).style.transform = `rotate(${minPosition}deg)`;
  document.querySelector(
    "#hourHand"
  ).style.transform = `rotate(${hrPosition}deg)`;
}
setInterval(runClock, 1000);
