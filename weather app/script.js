const APIURL = 'https://www.metaweather.com/api/';
const GETLOC = 'location/search/?query=';

async function getPromise(url){
    const prom = await fetch('https://www.metaweather.com/api/location/search/?query=london', {mode:'no-cors'});
    const data = await prom.json();

    console.log(prom);
};

getPromise();
document.body.classList.add('rain');