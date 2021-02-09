let startTime = 25;
let timeLimit = startTime*60;
let percent = 100;
var timer ;

let btnToggle = false;
let timerFinished = false;

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const timeEl = document.getElementById('time');
const titleEl = document.querySelector('title');
const mainEl = document.getElementById('main');
const progressDoneEl = document.querySelector('.progress-done');
const percentCompleteEl = document.getElementById('percentComplete');
const audioEL = document.getElementById('audio');

function initialiseDisplay(){
    refreshTime(); 
};

function pomodoroMain(){

    if(timeLimit != -1){
        timeLimit--;
    }
    else{
        // alert('endofpomedoro');
        timerEnd();
        clearInterval(timer);
    }
    refreshTime();

};

function refreshTime() {
    if(!timerFinished){
        updateProgressBar();
        let seconds = timeLimit % 60;
        let minutes = Math.floor(timeLimit / 60);
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timeEl.innerText = `${minutes}:${seconds}`;
        titleEl.textContent = `${minutes}:${seconds} Pomodoro`;
    }else{
        btnToggle = false;
        buttonToggler();
    }
};

function timerEnd(){
    audioEL.play();
    const msgEL = document.createElement('span');
    msgEL.classList.add('msg');
    msgEL.innerText = `You have completed one cylce!`
    mainEl.prepend(msgEL);
    setTimeout(() => {msgEL.remove()}, 3000);
    timeLimit = startTime * 60;
    timerFinished = true;
    refreshTime();
}

function updateProgressBar(){
    percent = 100 - ((timeLimit)/(startTime*60) * 100);
    progressDoneEl.style.width = percent+'%';
    percentCompleteEl.innerText = Math.floor(percent) + "%";
};

btn1.addEventListener('click', ()=>{
    if (btnToggle) {
        //reset and restart the timer
        timeLimit = startTime * 60;
        clearInterval(timer);
        timer = setInterval(pomodoroMain, 1000);    

    }
    else{
        if (startTime > 10) {
            startTime-=5;
            timeLimit = startTime*60;
        }
        else if(startTime > 1){
            startTime -= 1;
            timeLimit = startTime*60;
        }
        refreshTime();
    }
});

btn2.addEventListener('click', ()=>{
    if(btnToggle){
        // stops the countdown
        clearInterval(timer);
        timeLimit = startTime*60;
        btnToggle = false;
        buttonToggler();
        refreshTime();
    }
    else{
        if(startTime <100){
            startTime+=5;
            timeLimit = startTime*60;
        }
        refreshTime();
    }
});

btn3.addEventListener('click', ()=>{
    percentCompleteEl.style.opacity = 100;
    if(btnToggle){
        btnToggle = false;
        buttonToggler();
        clearInterval(timer);    
    }
    else{
        btnToggle = true;
        buttonToggler();
        timeLimit = startTime*60;
        console.log(timeLimit);
        timer = setInterval(pomodoroMain, 1000);    
    }
});

function buttonToggler(){
    if (btnToggle) {
        btn3.innerHTML = `<i class="fas fa-pause"></i>`;
        btn2.innerHTML = `<i class="fas fa-stop"></i>`;
        btn1.innerHTML = `<i class="fas fa-redo"></i>`
    }
    else{
        btn3.innerHTML = `<i class="fas fa-play"></i>`; 
        btn2.innerHTML = `<i class="fas fa-plus"></i>`;
        btn1.innerHTML =  `<i class="fas fa-minus"></i>`;
    }
}