const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

const cardsEl = document.getElementById('cards');

showMovies(APIURL);

async function showMovies(link) { 
    const response = await fetch(link);
    const data = await response.json();
    console.log(data.results);

    displayMovieCards(data.results);
 }

 //displays the movie cards
function displayMovieCards(movies) { 


    movies.forEach((movie) => {

        const { title, poster_path, vote_average } = movie;
        const movieCard = document.createElement('div');
        
        movieCard.classList.add('cards');

        movieCard.innerHTML =  `
                <button class="card">
                    <span class="cardRating"><i class="fas fa-star"></i>${vote_average}</span>
                    <div class="cardTitle" />
                        <h3>${title}</h3>
                    </div>
                    <img src="${ IMGPATH + poster_path }" alt="${title}" class="cardImg">
                    
                </button> 
                `;
        
        cardsEl.appendChild(movieCard);
        
    });
    
 }

