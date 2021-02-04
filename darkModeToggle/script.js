const ckBox = document.getElementById('ckbx');
const hdr = document.getElementById('header');
const mainTxt = document.getElementById('mainTxt');
const image = document.getElementById('image');
const bottmC = document.querySelectorAll('.bottmC');
console.log(bottmC);
ckBox.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    hdr.classList.toggle('dark');
    mainTxt.classList.toggle('dark');
    image.classList.toggle('dark');
    bottmC.forEach(bottom =>{
        bottom.classList.toggle('dark');
    })
});