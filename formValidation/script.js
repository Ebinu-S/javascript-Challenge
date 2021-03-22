const form =  document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const mBox = document.getElementById('messageBox');

let success = true;

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    //username
    if (userName.value == '') {
        returnMessage(userName,  `Username can't be empty`, false);
    }
    else{
        returnMessage(userName ,'', true);
    }

    //email
    if (email.value == '') {
        returnMessage(email, `Email can't be empty.`, false);
    }
    else if(!isEmail(email.value)){
        console.log(isEmail);
        returnMessage(email, `Invalid Email.`, false);
    }
    else{
        returnMessage(email, '', true);
    }

    // password
    if (password.value == '') {
        returnMessage(password, `Enter password`,false);
    }
    else if (password.value.length < 7){
        returnMessage(password, `minimum password length is 7. `,false);
    }
    else{
        returnMessage(password, ``,true);
    }

    //second password

    if (password2.value == '') {
        returnMessage(password2, `Enter password again.`,false);
    }
    else if (password2.value != password.value) {
        returnMessage(password2, `Password dosen't match.`,false);
    }
    else{
        returnMessage(password2,``,true);
    }
});

function returnMessage(input, message, isSuccess){
    const formControll = input.parentElement;
    if(isSuccess){
        formControll.className = 'form-control success';
        if (success) {
            mBox.classList.add('open');
        }
    }else{
        formControll.className = 'form-control error';
        success = false;        
    }
    formControll.querySelector('small').innerText = message;  
};

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}