const myBday = '6 Feb 2021';

const days_e =  document.getElementById("days");
const hours_e =  document.getElementById("hours");
const minutes_e = document.getElementById("minutes");
const seconds_e = document.getElementById("seconds");

function countdown(){
    const targetDate = new Date(myBday);
    const currentDate = new Date();
    
    const totalSeconds =  (targetDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24); 
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    days_e.innerHTML = days;
    hours_e.innerHTML = hours;
    minutes_e.innerHTML = minutes;
    seconds_e.innerHTML = seconds;

}

countdown()

setInterval(countdown,1000)