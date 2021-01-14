const heading = document.getElementById("heading");
const paragraph = "Hi my name is Ebinu Suneer.";
var inx = 1;

setInterval(animateText,70);

function animateText(){
    heading.innerText = paragraph.slice(0,inx);
    inx++;
    if(inx > paragraph.length){
        setTimeout(() => {
            inx = 1;
        },200);
    }
}

set