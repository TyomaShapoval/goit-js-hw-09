import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';



const inp = document.getElementById("datetime-picker");
const btn = document.querySelector("button[data-start]");
const dataSpan = document.querySelectorAll(".value");

let currentData = null;



function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function countTime() {
    const dateOfOne = new Date().getTime()
    dataSpan[0].textContent = `${Math.floor((currentData - dateOfOne)/(1000*60*60*24))}`.padStart(2, "0");
    dataSpan[1].textContent = `${Math.floor((currentData - dateOfOne)/(1000*60*60) % 24)}`.padStart(2, "0");
    dataSpan[2].textContent = `${Math.floor((currentData - dateOfOne)/(1000*60) % 60)}`.padStart(2, "0");
    dataSpan[3].textContent = `${Math.floor((currentData - dateOfOne)/(1000) % 60)}`.padStart(2, "0");
    
    const timer = setInterval(() => { 
    const dateOf = new Date().getTime()
    if (currentData > dateOf) {
    dataSpan[0].textContent = `${Math.floor((currentData - dateOf)/(1000*60*60*24))}`.padStart(2, "0");
    dataSpan[1].textContent = `${Math.floor((currentData - dateOf)/(1000*60*60) % 24)}`.padStart(2, "0");
    dataSpan[2].textContent = `${Math.floor((currentData - dateOf)/(1000*60) % 60)}`.padStart(2, "0");
    dataSpan[3].textContent = `${Math.floor((currentData - dateOf)/(1000) % 60)}`.padStart(2, "0");
    } else {
      clearInterval(timer)
    }
    }, 1000)
};




btn.disabled = true;
btn.addEventListener("click", countTime);

const options = { 
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0].getTime() < new Date().getTime()) {
        Notiflix.Notify.failure("Please choose a date in the future");
        btn.disabled = true;
    }
    else {
        btn.disabled = false;
        currentData = selectedDates[0];
        console.log(currentData.getTime())
    }
  }
}

const fp = flatpickr(inp, options);