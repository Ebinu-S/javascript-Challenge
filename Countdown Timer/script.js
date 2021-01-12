const myBday = '6 Feb 2021';

const days_e =  document.getElementById("days");
const hours_e =  document.getElementById("hours");
const minutes_e = document.getElementById("minutes");
const seconds_e = document.getElementById("seconds");

const cCounter = document.getElementById("countdown-container"); 
const mainHead = document.getElementById("mainHead");

function countdown(){
    const targetDate = new Date(myBday);
    const currentDate = new Date();
    
    const totalSeconds =  (targetDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24); 
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    if(minutes <= 0 && hours <= 0 && days <= 0){
        cCounter.style.display = "none";
        mainHead.innerHTML = "Happy Birthday Kutta ";
    }
    else{
        days_e.innerHTML = formatText(days);
        hours_e.innerHTML = formatText(hours);
        minutes_e.innerHTML = formatText(minutes);
        seconds_e.innerHTML = formatText(seconds);
    }
}

function formatText(time){
    return time < 10 ? `0${time}` : time;
}

countdown()

setInterval(countdown, 1000)