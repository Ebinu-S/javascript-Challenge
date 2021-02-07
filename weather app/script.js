const APIURL = 'http://api.openweathermap.org/data/2.5/';
const GETLOC = 'weather?q=';
const APPID = '&appid='

const MYKEY = config.key;

const historyFLs = JSON.parse(localStorage.getItem('historyLsValues'));

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
const a1El = document.getElementById('a1');
const a2El = document.getElementById('a2');
const a3El = document.getElementById('a3');

let hisoryTemp = '';

if(historyFLs){
    setHistory(historyFLs[0]); 
}

async function getPromise(loc){

    const prom = await fetch(APIURL+GETLOC+loc+APPID+MYKEY);
    if(prom.statusText == 'OK'){
        const data = await prom.json();
        if(loc != a1El.dataset.value && loc != a2El.dataset.value){
            manageHistory(loc);
        }
        renderResult(data);
    }
    else{
        alert('invalid Input');
        // todo style the error message
    }

};


function renderResult(data){

    
    const sunriseTime = new Date(data.sys.sunrise * 1000);
    const sunsetTime = new Date(data.sys.sunset * 1000);

    currentTempEL.innerText = KelvinToCelcius(data.main.temp).toFixed(1) + ' °C';
    locNameEl.children[0].innerText = data.name;
    //  todo : get current time
    //  todo : change class of the i acording to the weather 
    weatherEl.children[1].innerText = data.weather[0].main;

    if(data.weather[0].main === 'Mist'){
       rmClass();
       document.body.classList.add('mist');
    }
    else if(data.weather[0].main === 'Smoke'){
        rmClass();
        document.body.classList.add('smoke');
     }
    else if(data.weather[0].main === 'Clouds'){
        rmClass()
        document.body.classList.add('clouds');
    }  
    else if(data.weather[0].main === 'Rain'){
        rmClass();
        document.body.classList.add('rain');
    }
    else if(data.weather[0].main === 'Haze'){
        rmClass();
        document.body.classList.add('haze');
    }
    else if(data.weather[0].main === 'Thunderstorm'){
        rmClass();
        document.body.classList.add('Thunderstorm');
    }
    else if(data.weather[0].main === 'Snow'){
        rmClass();
        document.body.classList.add('snow');
    }
    else if(data.weather[0].main === 'Drizzle'){
        rmClass();
        document.body.classList.add('drizzle');
    }
    else if(data.weather[0].main === 'Clear'){
        rmClass();
        document.body.classList.add('clear');
    }
    else if(data.weather[0].main === 'Dust'){
        rmClass();
        document.body.classList.add('Dust');
    }
    else if(data.weather[0].main === 'Fog'){
        rmClass();
        document.body.classList.add('Fog');
    }
    else if(data.weather[0].main === 'Sand'){
        rmClass();
        document.body.classList.add('Sand');
    }
    else if(data.weather[0].main === 'Ash'){
        rmClass();
        document.body.classList.add('Ash');
    }
    else if(data.weather[0].main === 'Squall'){
        rmClass();
        document.body.classList.add('Wind');
    }
    else if(data.weather[0].main === 'Tornado'){
        rmClass();
        document.body.classList.add('Tornado');
    }
    else{
        rmClass();
        document.body.classList.add('default');
    }


    windEl.children[1].innerText = data.wind.speed + ' km/h';
    humidityEl.children[1].innerText = data.main.humidity + ' %';
    pressureEl.children[1].innerText = data.main.pressure + ' hPa';
    feelsLikeEl.children[1].innerText = KelvinToCelcius(data.main.feels_like).toFixed(0)  + ' °C';
    minEl.children[1].innerText = KelvinToCelcius(data.main.temp_min).toFixed(0) + ' °C';
    maxEl.children[1].innerText = KelvinToCelcius(data.main.temp_max).toFixed(0)  + ' °C';
    cloudsEl.children[1].innerText = data.clouds.all + ' %';
    sunriseEl.children[1].innerText = sunriseTime.getHours() + ':'+ sunriseTime.getMinutes() + ' AM';
    sunsetEl.children[1].innerText = (sunsetTime.getHours() % 12) + ':' + sunsetTime.getMinutes() + ' PM';
};

function rmClass() { 
    document.body.className = '';
 }

//initialises data
getPromise(historyFLs[0].data1);

formEl.addEventListener('submit',(e)=>{
    e.preventDefault();
    getPromise(searchEl.value);
});

searchEl.addEventListener('blur', ()=>{
    if(searchEl.value){
        getPromise(searchEl.value);
    }
});

a1El.addEventListener('click', ()=> {
    getPromise(a1El.dataset.value);
});

a2El.addEventListener('click', ()=> {
    getPromise(a2El.dataset.value);
});

a3El.addEventListener('click', ()=> {
    getPromise(a3El.dataset.value);
});

a1El.addEventListener('contextmenu', ()=> {
    a1El.innerText = '';
    a1El.dataset.value = '';
});

a2El.addEventListener('contextmenu', ()=> {
    a2El.dataset.value = '';
    a2El.innerText = '';
});

a3El.addEventListener('contextmenu', ()=> {
    a3El.dataset.value = '';
    a3El.innerText = '';
});

//manages search history
function manageHistory(search){
    hisoryTemp = a1El.dataset.value;
    a1El.dataset.value  = search;
    a1El.innerText = a1El.dataset.value;
    a3El.dataset.value = a2El.dataset.value;
    a3El.innerText = a3El.dataset.value
    a2El.dataset.value = hisoryTemp;
    a2El.innerText = a2El.dataset.value;
    updateLs();
};

function KelvinToCelcius(temp){
    return temp - 273.15;
};

//initially set history to last value on load
function setHistory(historyFs){
    a1El.dataset.value  = historyFs.data1;
    a1El.innerText = historyFs.data1;
    a3El.dataset.value = historyFs.data3;
    a3El.innerText = historyFs.data3;
    a2El.dataset.value = historyFs.data2;
    a2El.innerText = historyFs.data2;
}

function updateLs(){
    const historyLs = [];
    historyLs.push({
        data1: a1El.dataset.value,
        data2: a2El.dataset.value,
        data3: a3El.dataset.value
    });
    localStorage.setItem('historyLsValues', JSON.stringify(historyLs));
};

/*

    TODO 
*   change icon according to the weather
*   display error when data isnt present
*   display description for the weather
*   display country flag?
?   Add the clock?
?   option to get location ?
* 
*/ 

