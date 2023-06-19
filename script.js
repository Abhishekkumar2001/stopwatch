//Initializing timer
let seconds = '00';
let ms = '00';
let mins = '00';

//fetching timer minutes, seconds and miliseconds
let getminutes = document.querySelector('.minutes');
let getseconds = document.querySelector('.seconds');
let getms = document.querySelector('.ms');


//fetching buttons
let startbtn = document.querySelector('.start-btn');
let resetbtn = document.querySelector('.reset-btn');
let stopbtn = document.querySelector('.stop-btn');
let intervelId;


//adding event with start button
startbtn.addEventListener("click", () => {
  intervelId = setInterval(startTimer, 10);
})


//adding event with stop button
stopbtn.addEventListener("click", () => {
  clearInterval(intervelId);
})

//adding event with reset button
resetbtn.addEventListener("click", () => {
  clearInterval(intervelId);
  ms = '00';
  seconds = '00';
  mins = '00';
  getms.innerHTML = ms;
  getseconds.innerHTML = seconds;
  getminutes.innerHTML = mins;
})

//adding function timer

function startTimer() {
  ms++;

  if (ms <= 9) {
    getms.innerHTML = '0' + ms;
  }

  if (ms > 9) {
    getms.innerHTML = ms;
  }

  if (ms > 99) {
    seconds++;
    ms = 0;
    getms.innerHTML = '0' + 0;
    if (seconds <= 9) {
      getseconds.innerHTML = '0' + seconds;
    }

    if (seconds > 9) {
      getseconds.innerHTML = seconds;
    }


  }

  if (seconds > 59) {
    mins++;
    seconds = 0;
    getseconds.innerHTML = '0' + 0;
    if (mins <= 9) {
      getminutes.innerHTML = '0' + mins;
    }

    if (mins > 9) {
      getminutes.innerHTML = mins;
    }
  }

}
