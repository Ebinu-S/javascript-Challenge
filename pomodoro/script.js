const startTime = 1;
let timeLimit = startTime*60;
let percent = 100;

const btn3 = document.getElementById('btn3');
const timeEl = document.getElementById('time');
const titleEl = document.querySelector('title');
const progressDoneEl = document.querySelector('.progress-done');

function pomodoroMain(){
    let seconds = timeLimit % 60;
    let minutes = Math.floor(timeLimit / 60);

    seconds = seconds < 10 ? '0' + seconds : seconds;
    timeEl.innerText = `${minutes}:${seconds}`;
    
    titleEl.textContent = `${minutes} + Pomodoro`
    updateProgressBar();
    timeLimit--;
}

function updateProgressBar(){
    percent = 100 - ((timeLimit)/(startTime*60) * 100);
    progressDoneEl.style.width = percent+'%';
    progressDoneEl.innerText ="";
}

btn3.addEventListener('click', ()=>{
setInterval(pomodoroMain, 1000);
})

console.log(progressDoneEl.getAttribute('data-done'));


/*

TODO    TODO    TODO    TODO    TODO    TODO    TODO    TODO    TODO    TODO    TODO    TODO    
!   increasing speed when clicked more than once might solve using the toggle 
*   stop at 100%
*/
