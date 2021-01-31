const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const cardsEl = document.getElementById('cards');
const formEl = document.getElementById('form');
const searchEl = document.getElementById('search');

const noPreviewSrc = 'img/noPreview.png';

showMovies(APIURL);

async function showMovies(link) { 
    const response = await fetch(link);
    const data = await response.json();
    displayMovieCards(data.results);
 }

 //displays the movie cards
function displayMovieCards(movies) { 
    cardsEl.innerHTML ='';
    let mIndex = 0;

    movies.forEach((movie) => {

        const { title, poster_path, vote_average, overview, release_date, backdrop_path } = movie;
        const movieCard = document.createElement('div');
        movieCard.classList.add('cards');


        movieCard.innerHTML =  `
                <button class="card">
                    <span class="cardRating"><i class="fas fa-star"></i>${vote_average}</span>
                    <div class="cardTitle" />
                        <h3>${title}</h3>
                    </div>
                    <img src="${ poster_path == null? noPreviewSrc : IMGPATH + poster_path }" alt="${title}" class="cardImg">
                    
                </button> 
                `;
        
        cardsEl.appendChild(movieCard); 
        
    });
 }

formEl.addEventListener('submit', (e)=>{
     e.preventDefault();

     const searchMovie = searchEl.value;

     if(searchMovie){
         showMovies(SEARCHAPI + searchMovie);
     }
 });

 //use index?
//  const cardEL = document.querySelector('.card');
//         cardEL.addEventListener('click', ()=> {
//             alert('poop')
//         })




