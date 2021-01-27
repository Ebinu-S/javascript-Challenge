const passEl = document.getElementById('pass');
const copybtn = document.getElementById('copy');
const lenEL = document.getElementById('len');
const lowerEl = document.getElementById('lower');
const upperEl = document.getElementById('upper');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbols');
const generateBTn = document.getElementById('generateBtn');
const messageBoxEl = document.getElementById('messagebox');

const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const number = '0123456789';
const symbol = '!@^#%$*(&)';

function getLowerCase() { 
    return  lower[Math.floor(Math.random() * lower.length)];
};

function getUpperCase() {
    return upper[Math.floor(Math.floor(Math.random() * upper.length))];
};

function getNumber(){
    return number[Math.floor(Math.random() * number.length)];
};

function getSymbol(){
    return symbol[Math.floor(Math.random() * number.length)];
};

function passloader(){

    let pass = '';
    const len = lenEL.value;

    for(i = pass.length;i < len; i++){
        pass += generatePass();
    }

    if(pass = ''){

    }

    // alert(pass)
    passEl.innerHTML = pass;
    messageBoxEl.style.display = 'inline'; //make a function for animation ok? call set timeout?
    messageBoxEl.classList.add('mAnim');
    setTimeout(messageBoxDisable, 4000);
};

function generatePass(){

    passw = [];

    if(lowerEl.checked){
        passw.push(getLowerCase());
    };

    if(upperEl.checked){
        passw.push(getUpperCase());
    };

    if(symbolEl.checked){
        passw.push(getSymbol());
    };

    if(numberEl.checked){
        passw.push(getNumber());
    };

    return passw[Math.floor(Math.random() * passw.length)];

}

generateBTn.addEventListener('click', passloader);

function messageBoxDisable(){
    // messageBoxEl.style.display = 'none';
        
        // messageBoxEl.style.transform = 'transform: translate(0,-150%)';
}

// add copy functionlalies