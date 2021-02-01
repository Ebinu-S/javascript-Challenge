const contx = canvas.getContext('2d');
const canvasEL = document.getElementById('canvas');

let isPressed = false;  //determines whether to draw or not
let size = 10;
let x1 = undefined;
let y1 = undefined;
let x2 = undefined;
let y2 = undefined;

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

function drawCirlce(x,y) { 
    contx.beginPath();
    contx.arc(x,y,size,0,2 * Math.PI);
    contx.stroke();
 };

 function drawLine(x1,y1,x2,y2) { 
     contx.beginPath();
     contx.moveTo(x1,y1);
     contx.lineTo(x2,y2);
     contx.lineWidth = size;
     contx.stroke();
  };


//  mode 
//  if tunner  draw only drawCirlce
//     line    draw line
//     normal draboth        
//      line staright dont update x1 y2 like aradien