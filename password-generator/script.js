const passEl = document.getElementById('pass');
const copybtn = document.getElementById('copy');
const lenEL = document.getElementById('len');
const lowerEl = document.getElementById('lower');
const upperEl = document.getElementById('upper');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbols');
const generateBTn = document.getElementById('generateBtn');
const messageBoxEl = document.querySelector('.messageBox');
const rmMsgBtn = document.getElementById('cross');


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

    if(verifyCheck()){
        let pass = '';
        const len = lenEL.value;
    
        for(i = pass.length;i < len; i++){
            pass += generatePass();   
        }
        
        messageBoxGenerate('Password Generated!',true);
        passEl.innerHTML = pass; 
    }

    else{
        messageBoxGenerate('Please select required fields',false);
    }


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

copybtn.addEventListener('click', ()  =>{
    const textArea = document.createElement('textarea');
    const pass = passEl.innerHTML;

    if(pass){

        textArea.value = pass;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        messageBoxGenerate('Password Copied to clipboard!!',true);
    }
});



// two atributes, weather its postive or not and message text
function messageBoxGenerate(msg,type){
    const mBox = document.createElement('div');
    mBox.classList.add('messageBox');

    mBox.innerHTML =`
    <span id="messageTxt">This is a sample text.</span>
    <button id="cross">X</button>
    `;

    const rmMsgBtn = mBox.querySelector('#cross');
    const mBoxTxt = mBox.querySelector("#messageTxt");

    if(type){
        mBox.classList.add('mBoxPos');
    }
    else{
        mBox.classList.add('mBoxNeg');
    }

    mBoxTxt.innerText = msg;

    rmMsgBtn.addEventListener('click',  () => {
        mBox.remove();
    })

    document.body.appendChild(mBox);

    setTimeout( ()=>{
        mBox.remove();
    },10000);

}

function verifyCheck() { 
    return symbolEl.checked || numberEl.checked || lowerEl.checked || upperEl.checked;
 }

