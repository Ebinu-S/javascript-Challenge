setInterval(createFall,200);

function createFall(){

    const fallobj = document.createElement('i');
    fallobj.classList.add("fas");

    let rand = Math.random();
    if(rand < 0.33){
        fallobj.classList.add("fa-grin-squint-tears");
    }
    else if ( rand < 0.66){
        fallobj.classList.add("fa-grin-hearts");
    }
    else{
        fallobj.classList.add("fa-frown");
    }

    setFall(fallobj);
}

function setFall(fallobj) { 
    fallobj.style.left = Math.random() * window.innerWidth + "px";
    var rvalue = Math.random(); // random value for size and opacity
    fallobj.style.fontSize = rvalue * 20 + 10 +'px';
    fallobj.style.opacity = rvalue;
    fallobj.style.animationDuration = (rvalue - 1) * -1 * 10 + 6 +'s';


    document.body.appendChild(fallobj)

    setTimeout( () =>{
        fallobj.remove();
    },13200);
 }