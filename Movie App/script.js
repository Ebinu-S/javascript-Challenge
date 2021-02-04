const APIURL = '    ';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const cardsEl = document.getElementById('cards');
const formEl = document.getElementById('form');
const searchEl = document.getElementById('search');
const overviewEl = document.getElementById('overview');
const searchBtnEL = document.getElementById('srchBtn');

const noPreviewTnSrc = 'img/noPreview.png';
const noPreviewBdSrc = 'img/npl.png';

showMovies(APIURL);

async function showMovies(link) { 
    const response = await fetch(link);
    const data = await response.json();
    displayMovieCards(data.results);
 }

 //displays the movie cards
function displayMovieCards(movies) { 
    cardsEl.innerHTML ='';

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
                    <img src="${ poster_path == null? noPreviewTnSrc : IMGPATH + poster_path }" alt="${title}" class="cardImg">
                    
                </button> 
                `;
        
        cardsEl.appendChild(movieCard); 

        const cardBtn = movieCard.querySelector('.card');

        cardBtn.addEventListener('click', ()=>{
            
            cardsEl.classList.add('WM');
            overviewEl.classList.add('WM');

            overviewEl.innerHTML = `
                <img src="${ backdrop_path == null? noPreviewBdSrc : IMGPATH + backdrop_path}" alt="${title}">
                <div class="headData"><h2>${title}</h2> <p>release date : ${release_date}</p></div>
                <div class="overviewTxt">${overview}
                </div>
            `
        })
        
    });
 }

formEl.addEventListener('submit', (e)=>{     e.preventDefault();
     callMovies();
 });

searchBtnEL.addEventListener('click', ()=>{
    callMovies();
})

 function callMovies(){
    const searchMovie = searchEl.value;

    if(searchMovie){
        showMovies(SEARCHAPI + searchMovie);
    }
 }


