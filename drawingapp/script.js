const contx = canvas.getContext('2d');
const canvasEL = document.getElementById('canvas');
const sizeI = document.getElementById('increment');
const sizeD = document.getElementById('decrement');
const sizeEl = document.getElementById('sizeEl');
const clrBtn = document.getElementById('clr');
const colorEl = document.getElementById('color');

let isPressed = false;  //determines whether to draw or not
let size = 10;
let x1 = undefined;
let y1 = undefined;
let x2 = undefined;
let y2 = undefined;
let color = '#000';

canvasEL.addEventListener('mousedown', (e) => {
    isPressed = true;
    x1 = e.offsetX;
    y1 = e.offsetY;
});

canvasEL.addEventListener('mouseup', (e) => {
    isPressed = false;
    x1 = undefined;
    y1 = undefined;
});

canvasEL.addEventListener('mousemove', (e) => {
    if(isPressed){
        x2 = e.offsetX;
        y2 = e.offsetY;
        drawCirlce(x2,y2);
        drawLine(x1,y1,x2,y2);
        x1 = x2;
        y1 = y2;
    }
});

//toolbar button

sizeI.addEventListener('click', ()=>{
    if(size < 30){
        size += 2;
    }
    sizeUpdateEl();
});

sizeD.addEventListener('click', ()=>{
    if ( size >= 4) {
        size -= 2;
    }
    sizeUpdateEl();
})

colorEl.addEventListener('change', ()=> {
    color = colorEl.value;
})

clrBtn.addEventListener('click', ()=> {
    contx.clearRect(0,0,canvasEL.width, canvasEL.height);
});


function drawCirlce(x,y) { 
    contx.beginPath();
    contx.arc(x,y,size,0,2 * Math.PI);
    contx.fillStyle = color;
    contx.fill();
 };

function drawLine(x1,y1,x2,y2) { 
     contx.beginPath();
     contx.moveTo(x1,y1);
     contx.lineTo(x2,y2);
     contx.lineWidth = size*2;
     contx.strokeStyle = color;
     contx.stroke();
  };

function sizeUpdateEl(){
    sizeEl.innerText = size;
}
