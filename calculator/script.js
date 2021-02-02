const containerEL = document.getElementById('container');
const btnsEl = document.getElementById('btns');
const h3el = document.querySelector('h3'); 
const ckbox = document.getElementById('theme');
const themeStng = document.getElementById('themeSetting');

const btns = btnsEl.querySelectorAll('button');

let history = '';
let answer = '';
let opFlag = false;
let op = '';
let rhs ='';
let lhs ='';
let opView ='';
let rhsD = '';
let lhsD ='';
let valueAns= '';
let decimalFlag = false;

const answerEL = document.getElementById('answer');
const historyEl = document.getElementById('history');

//in get value from each?
const n0 = document.getElementById('n0');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');
const n6 = document.getElementById('n6');
const n7 = document.getElementById('n7');
const n8 = document.getElementById('n8');
const n9 = document.getElementById('n9');

const dot = document.getElementById('dot');
const minus = document.getElementById('minus');
const allF = document.getElementById('pOpen'); 

const opMultiply = document.getElementById('multiply');
const opDivide = document.getElementById('divide');
const opSubract = document.getElementById('subract');
const opAdd = document.getElementById('add');
const opEquals = document.getElementById('equals');
const clearEl = document.getElementById('clear');

// setting values
n0.addEventListener('click', ()=> {
    if(opFlag){
        rhs += '0';
        updateHistory(rhs,false);
    }
    else{
        lhs += '0';
        updateHistory(lhs,true);
    }
});

n1.addEventListener('click', ()=> {
    if(opFlag){
        rhs += '1';
        updateHistory(rhs,false);
    }
    else{
        lhs += '1';
        updateHistory(lhs,true);
    }
});

n2.addEventListener('click', ()=> {
    if(opFlag){
        rhs += '2';
        updateHistory(rhs,false);
    }
    else{
        lhs += '2';
        updateHistory(lhs,true);
    }
});

n3.addEventListener('click', ()=> {
    if(opFlag){
        rhs += '3';
        updateHistory(rhs,false);
    }
    else{
        lhs += '3';
        updateHistory(lhs,true);
    }
});

n4.addEventListener('click', ()=> {
    if(opFlag){
        rhs += '4';
        updateHistory(rhs,false);
    }
    else{
        lhs += '4';
        updateHistory(lhs,true);
    }
});

n5.addEventListener('click', ()=> {
    if(opFlag){
        rhs += '5';
        updateHistory(rhs,false);
    }
    else{
        lhs += '5';
        updateHistory(lhs,true);
    }
});

n6.addEventListener('click', ()=> {
    if(opFlag){
        rhs += '6';
        updateHistory(rhs,false);
    }
    else{
        lhs += '6';
        updateHistory(lhs,true);
    }
});

n7.addEventListener('click', ()=> {
    if(opFlag){
        rhs += '7';
        updateHistory(rhs,false);
    }
    else{
        lhs += '7';
        updateHistory(lhs,true);
    }
});

n8.addEventListener('click', ()=> {
    if(opFlag){
        rhs += '8';
        updateHistory(rhs,false);
    }
    else{
        lhs += '8';
        updateHistory(lhs,true);
    }
});

n9.addEventListener('click', ()=> {
    if(opFlag){
        rhs += '9';
        updateHistory(rhs,false);
    }
    else{
        lhs += '9';
        updateHistory(lhs,true);
    }
});

dot.addEventListener('click', ()=> {
    decimalFlag = true;
    if(opFlag){
        rhs += '.';
        updateHistory(rhs,false);
    }
    else{
        lhs += '.';
        updateHistory(lhs,true);
    }
});

minus.addEventListener('click', ()=>{
    h3el.classList.add('floatLol');
})

allF.addEventListener('click', ()=> {
    btns.forEach(btn =>{
        btn.classList.add('floatLol');
        h3el.classList.add('floatLol');
        themeStng.classList.add('floatLol');
    })
})

//set Operations
opAdd.addEventListener('click', ()=> {
    op = 'add';
    opView = " + ";
    updateHistory(lhs,true);
    opFlag = true;
});

opDivide.addEventListener('click', ()=> {
    op = 'div';
    opView = " / ";
    updateHistory(lhs,true);
    opFlag = true;
});

opSubract.addEventListener('click', ()=> {
    op = 'sub';
    opView = " - ";
    updateHistory(lhs,true);
    opFlag = true;
});

opMultiply.addEventListener('click', ()=> {
    op = 'mul';
    opView = " x ";
    updateHistory(lhs,true);
    opFlag = true;
});

clearEl.addEventListener('click', ()=>{
    clearDisp(true);
})

opEquals.addEventListener('click', ()=> {

    if(op == 'add' ){
        valueAns = parseFloat(lhs,10) + parseFloat(rhs,10);
    }
    else if(op == 'sub'){
        valueAns = parseFloat(lhs, 10) - parseFloat(rhs,10);
    }
    else if(op == 'mul'){
        valueAns = parseFloat(lhs, 10) * parseFloat(rhs,10);
    }
    else if(op == 'div'){
        valueAns = parseFloat(lhs, 10) / parseFloat(rhs,10);
        decimalFlag = true;
    }
    console.log(valueAns);
    // check nan if so add error message inside ans with red bg and transoform animation 
    if(decimalFlag)
    answerEL.innerText = valueAns.toFixed(2);
    else
    answerEL.innerText = valueAns;

    clearDisp(false);
});

function updateHistory(value, isLhs){

    if(isLhs){
        lhsD = value;
        rhsD = '';
    }
    else{
        rhsD = value;
    }
    historyEl.innerText = lhsD + opView + rhsD;
}

function clearDisp(allClear) {
    if(allClear){
        historyEl.innerText ='';
        answerEL.innerText = '';
    }
    lhs = '';
    rhs = '';
    opView = ''; 
    opFlag = false;
    decimalFlag = false
 };

// function to toggle theme
ckbox.addEventListener('click', ()=>{

    document.body.classList.toggle('dark');
    btnsEl.classList.toggle('dark');
    containerEL.classList.toggle('dark');
    h3el.classList.toggle('dark');
    btns.forEach(btn => {
        btn.classList.toggle('dark');
    });
});