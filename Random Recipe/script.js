const imgEl = document.getElementById('imgEL');
const headingEl = document.querySelector('.heading');
const instrucEl = document.querySelector('.instruc');

const headingMain = document.getElementById('rld');
const reloadbtn = document.querySelector('.reloadbtn');

async function randomRecipe(){

    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php'); // gets response
    const respData = await resp.json();                                             // gets data

    const randomMeal = respData.meals[0];

    console.log(randomMeal);
    setRandomMeal(randomMeal);
}

function setRandomMeal(data){

    headingEl.innerHTML = data.strMeal;
    imgEl.src = data.strMealThumb;
    instrucEl.innerHTML = marked(data.strInstructions);
}

randomRecipe();

headingMain.addEventListener('click', ()=>{
    randomRecipe();
})

reloadbtn.addEventListener('click', ()=>{
    randomRecipe(); 
})
// do the ingrients later
// ingredient s and rmeasures are reltive?