const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');
const digitalHr = document.querySelector('.digital');
const clockEl = document.querySelector('.clock');
const btnsEl = document.querySelector('.btns');
const ballEl = document.querySelector('.ball');
const numberEl = document.querySelectorAll('.number');

const t1Btn = document.getElementById('t1');
let themeIndex = 0;


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

t1Btn.addEventListener('click', ()=> {
    if(themeIndex == 0){
        resetClasses();
        console.log('yes');
        document.body.classList.add('t1');
        clockEl.classList.add('t1');
        digitalHr.classList.add('t1');
        secondHand.classList.add('t1');
        minuteHand.classList.add('t1');
        hourHand.classList.add('t1');
        ballEl.classList.add('t1');
        btnsEl.classList.add('t1');
    }
    else if(themeIndex == 1){
        resetClasses();
        document.body.classList.add('t2');
        clockEl.classList.add('t2');
        digitalHr.classList.add('t2');
        secondHand.classList.add('t2');
        minuteHand.classList.add('t2');
        hourHand.classList.add('t2');
        ballEl.classList.add('t2');
        btnsEl.classList.add('t2');
    }
    else{
        resetClasses();
    }
});

//reset the classes to its default 
//* must call before adding new class
function resetClasses(){

    document.body.className = '';
    clockEl.className = 'clock';
    digitalHr.className = 'digital';
    ballEl.className = 'ball';
    secondHand.className = 'second';
    minuteHand.className = 'minute';
    hourHand.className = 'hour';
    btnsEl.className = 'btns';
    
    if(themeIndex < 2){
        themeIndex +=1; 
    }
    else{
        themeIndex = 0;
    }
} 