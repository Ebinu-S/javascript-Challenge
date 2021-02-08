let startTime = 25;
let timeLimit = startTime*60;
let percent = 100;
var timer ;

let btnToggle = false;

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const timeEl = document.getElementById('time');
const titleEl = document.querySelector('title');
const progressDoneEl = document.querySelector('.progress-done');
const percentCompleteEl = document.getElementById('percentComplete');

function initialiseDisplay(){
    refreshTime(); 
};

function pomodoroMain(){

    refreshTime();

    console.log(btnToggle);
    updateProgressBar();
    if(timeLimit != -1){
        timeLimit--;
    }
    else{
        alert('endofpomedoro');
        timeLimit = startTime;
    }
};

function refreshTime() {
    let seconds = timeLimit % 60;
    let minutes = Math.floor(timeLimit / 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timeEl.innerText = `${minutes}:${seconds}`;
    titleEl.textContent = `${minutes}:${seconds} Pomodoro`;
};

function updateProgressBar(){
    percent = 100 - ((timeLimit)/(startTime*60) * 100);
    progressDoneEl.style.width = percent+'%';
    percentCompleteEl.innerText = Math.floor(percent) + "%";
};

btn1.addEventListener('click', ()=>{
    if (btnToggle) {
        //do something
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
        //stop
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
        btn3.innerHTML = `<i class="fas fa-play"></i>`; 
        console.log('before : start time : ' + startTime, 'time limit ' + timeLimit);
        startTime = timeLimit / 60;
        timeLimit = startTime;
        console.log('after : start time : ' + startTime, 'time limit ' + timeLimit);
        clearInterval(timer);    
    }
    else{
        btnToggle = true;
        btn3.innerHTML = `<i class="fas fa-pause"></i>`;
        timer = setInterval(pomodoroMain, 1000);    
    }
});



/*

TODO    TODO    TODO    TODO    TODO    TODO    TODO    TODO    TODO    TODO    TODO    TODO    
!   increasing speed when clicked more than once might solve using the toggle 
*   stop at 100%
*   toggle button
*   add note
*   display note as table
?   find a way to index those notes
*   log every details XD
*/


/*
pause save paused time to set time.
*/