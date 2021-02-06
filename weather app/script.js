const APIURL = 'http://api.openweathermap.org/data/2.5/';
const GETLOC = 'weather?q=';
const APPID = '&appid='
//http://api.openweathermap.org/data/2.5/weather?q=London&appid=id

const MYKEY = config.key;

const currentTempEL = document.getElementById('cTemp');
const locNameEl = document.getElementById('loc'); 
const weatherEl = document.getElementById('weatherD');
const windEl = document.getElementById('windD');
const humidityEl = document.getElementById('HumidityD');
const pressureEl = document.getElementById('pressureD');

async function getPromise(url){
    const prom = await fetch(APIURL+GETLOC+url+APPID+MYKEY);
    const data = await prom.json();

    // console.log(data);
    console.log(data);
    renderResult(data);
};


function renderResult(data){
    currentTempEL.innerText = KelvinToCelcius(data.main.temp).toFixed(1) + ' °C';
    locNameEl.children[0].innerText = data.name;
    //  todo : get current time
    //  todo : change class of the i acording to the weather 
    weatherEl.children[1].innerText = data.weather[0].main;
    windEl.children[1].innerText = data.wind.speed + ' km/h';
    humidityEl.children[1].innerText = data.main.humidity;
    pressureEl.children[1].innerText = data.main.pressure;
}

getPromise('kottayam');
document.body.classList.add('rain');

function KelvinToCelcius(temp){
    return temp - 273.15;
}

/*

    TODO 
*   Change the background according to the weather
?   store and retreive search history in local Storage
?   add option to delete history
*   add more details about weather
*   make form working LOL
*   search on blur
*   display error when data isnt present
?   Add the clock?
*   clicking history should return value
?   add suggested
?   option to get location ?
* 
*/ 

