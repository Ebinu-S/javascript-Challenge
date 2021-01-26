const addbtn = document.getElementById('addBtn');

const textValue = JSON.parse(localStorage.getItem('notes'));

if(textValue){
    
    textValue.forEach((value) => {
        addNote(value);
    })
}


addbtn.addEventListener('click', () => {
    addNote();
})

function addNote(text = '') { 
    const note = document.createElement('div'); // eee notinnote
    note.classList.add('note');

    note.innerHTML = `<div class="notes">
                        <div class="tools">
                            <button title="Edit" class="editBtn"> <i class="fas fa-edit"></i> </button>
                            <button title="Remove" class="removeBtn"> <i class="fas fa-minus-square"></i> </button>
                        </div>
                        <div class="main ${text? '' : 'hidden'} "></div>
                        <textarea class="${text? 'hidden' : ''}" ></textarea> <!-- TIL space between textarea can cause unneccessary space in the begining -->
                        </div>
                        `;

    const textArea = note.querySelector('textarea');
    const main = note.querySelector('.main');

    const editBtn = note.querySelector('.editBtn');
    const removeBtn = note.querySelector('.removeBtn');

    textArea.value = text;
    main.innerHTML = marked(text);
    
    editBtn.addEventListener('click', (e)=>{

        textArea.classList.toggle('hidden');
        main.classList.toggle('hidden');   

    });

    removeBtn.addEventListener('click', ()=>{
        note.remove();
        updateLs();

    });

    textArea.addEventListener('input', (e) =>{

        const { value } = e.target;

        main.innerHTML = marked(value);
        updateLs();

    } );

    document.body.appendChild(note); 

    updateLs();
 }

// Updating and saving files to LocalStorage 
function updateLs() { 
    
    const notesText = document.querySelectorAll('textarea'); // queryselector all return array od elements

    const notes = [];

    notesText.forEach((note) => {
        notes.push(note.value);
    });

    localStorage.setItem('notes',JSON.stringify(notes));
    console.log('uls' + notes);
 }
