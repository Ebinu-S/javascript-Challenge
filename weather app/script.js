const APIURL = 'http://api.openweathermap.org/data/2.5/';
const GETLOC = 'weather?q=';
const APPID = '&appid='

const MYKEY = config.key;

const currentTempEL = document.getElementById('cTemp');
const locNameEl = document.getElementById('loc'); 
const weatherEl = document.getElementById('weatherD');
const windEl = document.getElementById('windD');
const humidityEl = document.getElementById('HumidityD');
const pressureEl = document.getElementById('pressureD');
const feelsLikeEl = document.getElementById('feelsLikeD');
const minEl = document.getElementById('minD');
const maxEl = document.getElementById('maxD');
const cloudsEl = document.getElementById('cloudsD');
const sunriseEl = document.getElementById('sunriseD');
const sunsetEl = document.getElementById('sunsetD');

const formEl = document.getElementById('form');
const searchEl = document.getElementById('search');

async function getPromise(loc){

    const prom = await fetch(APIURL+GETLOC+loc+APPID+MYKEY);
    if(prom.statusText == 'OK'){
        const data = await prom.json();
        renderResult(data);
    }
    else{
        alert('invalid Input');
        // todo style the error message
    }

};


function renderResult(data){

    document.body.classList.add('rain');
    
    const sunriseTime = new Date(data.sys.sunrise * 1000);
    const sunsetTime = new Date(data.sys.sunset * 1000);

    currentTempEL.innerText = KelvinToCelcius(data.main.temp).toFixed(1) + ' °C';
    locNameEl.children[0].innerText = data.name;
    //  todo : get current time
    //  todo : change class of the i acording to the weather 
    weatherEl.children[1].innerText = data.weather[0].main;
    windEl.children[1].innerText = data.wind.speed + ' km/h';
    humidityEl.children[1].innerText = data.main.humidity + ' %';
    pressureEl.children[1].innerText = data.main.pressure + ' hPa';
    feelsLikeEl.children[1].innerText = data.main.feels_like  + ' °C';
    minEl.children[1].innerText = data.main.temp_min + ' °C';
    maxEl.children[1].innerText = data.main.temp_max  + ' °C';
    cloudsEl.children[1].innerText = data.clouds.all + ' %';
    sunriseEl.children[1].innerText = sunriseTime.getHours() + ': '+ sunriseTime.getMinutes() + ' AM';
    sunsetEl.children[1].innerText = (sunsetTime.getHours() % 12) + ': ' + sunsetTime.getMinutes() + ' PM';
}

getPromise('kottayam');

formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
    getPromise(searchEl.value);
});

searchEl.addEventListener('blur', ()=>{
    getPromise(searchEl.value);
})

function KelvinToCelcius(temp){
    return temp - 273.15;
}

/*

    TODO 
*   Change the background according to the weather
?   store and retreive search history in local Storage
?   add option to delete history
*   display error when data isnt present
?   Add the clock?
*   clicking history should return value
?   add suggested
?   option to get location ?
* 
*/ 

