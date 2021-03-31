const form  = document.getElementById('form');
const input = document.getElementById('input');
const todoUL = document.getElementById('todos');

const todosSv = JSON.parse(localStorage.getItem('todos'));

// initialise date object


// add date to check minimum
// set maximum SVGFEDiffuseLightingElement
// then alter ui to check weather exceedes time limit or not


// const targetdate = $("#ip").datepicker({
//     gotoCurrent :true
// });

// Modify on the second Challenge


if(todosSv) {
    todosSv.forEach((todo) => {
        addTodo(todo);
    });
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    addTodo();
})
    
function addTodo(todoSvEl){

    let todo = input.value;

    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    hours = hours > 12 ? hours - 12 : hours;
    minutes = minutes<10? '0' + minutes : minutes;

    if(todoSvEl){
        todo = todoSvEl.text;
        meta = todoSvEl.date;
    }

    if(todo || meta){
        const containDiv = document.createElement('div');
        const todoEl = document.createElement('li');
        const metaEl = document.createElement('div');
        metaEl.classList.add('meta');
        todoEl.innerText = todo;
        todoEl.classList.add("todo");
        containDiv.classList.add('cDiv')

        if(todoSvEl && todoSvEl.completed){
            todoEl.classList.add('completed');
        };

        input.value = '';
        
        todoEl.addEventListener('click', (e) => {

            e.preventDefault();
            todoEl.classList.toggle('completed');
            updateLs();
        });

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            containDiv.remove();
            updateLs();
        });

        if (meta) {
            meta.innerHTML = meta;
        }
        else {
            metaEl.innerHTML =
            `
            ${hours}: ${minutes}
            <small>${day} : ${month} : ${year}</small>
            `;  
        }


        containDiv.appendChild(todoEl);
        containDiv.appendChild(metaEl);
        todoUL.prepend(containDiv);
    }

    updateLs();

};

function updateLs(){

    const todosEl = document.querySelectorAll(".cDiv");
    
    const todos = [];

    todosEl.forEach( (todoEl) => {

        const children = todoEl.children;
        console.log(children[1].innerHTML);
        todos.push({
            text: children[0].innerText,
            completed: children[0].classList.contains('completed'),
            date: children[1].innerHTML
        })
    });

    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos));

};