const form  = document.getElementById('form');
const input = document.getElementById('input');
const todoUL = document.getElementById('todos');

const todosSv = JSON.parse(localStorage.getItem('todos'));

console.log(todosSv);

if(todosSv) {
    todosSv.forEach((todo) => {
        addTodo(todo)
    });
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    addTodo();
})

function addTodo(todoSvEl){

    let todo = input.value;

    if(todoSvEl){
        todo = todoSvEl.text;
    }

    if(todo){
        const todoEl = document.createElement('li');
        todoEl.innerText = todo;
        todoEl.classList.add("todo");

        if(todoSvEl && todoSvEl.completed){
            todoEl.classList.add('completed');
        }

        input.value = '';
        
        todoEl.addEventListener('click', (e) => {

            e.preventDefault();
            todoEl.classList.toggle('completed');
            updateLs();
        })

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();

            todoEl.remove();
            updateLs();
        })

        todoUL.appendChild(todoEl);
    }

    updateLs();

}

function updateLs(){

    const todosEl = document.querySelectorAll("li");
    
    const todos = [];

    todosEl.forEach( (todoEl) => {
        console.log('s');
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    });

    localStorage.setItem('todos', JSON.stringify(todos));

}