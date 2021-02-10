const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function clockMain() {
    let date = new Date();
    let seconds = date.getSeconds()/60;
    let minutes = date.getMinutes()/60;
    let hours = date.getHours()/12;

    rotateHand(secondHand, seconds);
    rotateHand(minuteHand, minutes);
    rotateHand(hourHand, hours);
};

function rotateHand(hand,angle){
    hand.style.setProperty('--rotation', angle * 360);
}
//initialise
clockMain();

setInterval(() => {
    clockMain();
}, 1000);
