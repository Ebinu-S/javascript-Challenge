const APIURL = 'https://api.github.com/users/';
const REPO = '?tab=repositories'; 

const mainEl = document.getElementById('main');
const formEl= document.getElementById('form');
const searchEl= document.getElementById('search');

getResponse('Ebinu-S'); //initialised with my repository

async function getResponse(username) { 
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();
    renderProfile(respData);
    getRepos(respData.login);
}

async function getRepos(username){
    const resp = await fetch(APIURL+username+"/repos");
    const respData = await resp.json();
    console.log(respData);
}


function renderProfile(profile) {
    if(profile.message == "Not Found"){
        mainEl.innerHTML = `<div class = 'notExist'> The Person you are searching for does not exist <i class="fas fa-heart-broken"></i> </P>`;
    }
    else{
        mainEl.innerHTML = `
        <img src="${profile.avatar_url}" alt="${profile.login}" class="avatar">
            <div class="uInfo">
                <h3>${profile.name}</h3>
                <h5>${profile.login}</h5>
                <p>${profile.bio}</p>
                <div class="countData">
                    <span>Followers : ${profile.followers} </span>
                    <span>following : ${profile.following} </span>
                    <span>Repos : ${profile.public_repos} </span>
                </div>
            </div>
            <div class="btns">
                <a href="${profile.html_url}" target='_blank'>Visit Profile</a>
                <a href="${profile.html_url + REPO} " target='_blank'>Repos</a>
            </div>
    
        `
    }

 };



 formEl.addEventListener('submit', (e)=> {
     e.preventDefault();    

     const search = searchEl.value;

     if(search){
         getResponse(search);
         searchEl.innerHTML ='';
     }

 });
  



