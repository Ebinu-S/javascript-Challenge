function fallAnim() { 
    const fallobj = document.createElement('i');
    fallobj.classList.add("fas");
    fallobj.classList.add("fa-code");
    fallobj.style.left = Math.random() * window.innerWidth + "px";  
    var rvalue = Math.random(); // random value for size and opacity
    fallobj.style.fontSize = rvalue * 10 + 4 +'px';
    fallobj.style.opacity = rvalue - 0.4;
    fallobj.style.animationDuration = (rvalue - 1) * -1 * 20 + 14 +'s';
    document.body.appendChild(fallobj)

    setTimeout( () =>{
        fallobj.remove();
    },23200);
 }
fallAnim();
setInterval(fallAnim,700);