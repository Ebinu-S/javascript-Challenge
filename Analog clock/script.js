const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');
const digitalHr = document.querySelector('.digital');

function clockMain() {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    secondsRatio = seconds/60;
    minutesRatio = (secondsRatio + minutes)/60;
    hoursRatio = (minutesRatio + hours)/12;

    rotateHand(secondHand, secondsRatio);
    rotateHand(minuteHand, minutesRatio);
    rotateHand(hourHand, hoursRatio);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours < 10 ? '0' + hours : hours;

    digitalHr.children[0].innerText = hours;
    digitalHr.children[2].innerText = minutes;
    digitalHr.children[4].innerText = seconds;
};

function rotateHand(hand,angle){
    hand.style.setProperty('--rotation', angle * 360);
}
//initialise
clockMain();

setInterval(() => {clockMain();}, 1000);
