const APIURL = 'https://api.github.com/users/';
const REPO = '?tab=repositories'; 

const mainEl = document.getElementById('main');
const formEl = document.getElementById('form');
const searchEl = document.getElementById('search');
const repoDiv = document.getElementById('repoDiv');
const repoDivContainer = document.getElementById('repoDivContainer');

getResponse('Ebinu-S'); //initialised with my repository

async function getResponse(username) { 
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();
    if(respData.message == "Not Found"){
        dosentExistAnymorePoorGuyHopeIsGoodInHeaven();
    }
    else{
        renderProfile(respData);
        getRepos(respData.login);
    }

}

async function getRepos(username){
    const resp = await fetch(APIURL+username+"/repos");
    const respData = await resp.json();
    renderRepos(respData);
}


function renderProfile(profile) {

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
    `;
 };

 function renderRepos(repos) { 
       
    const headRepo = document.createElement('div');
    headRepo.classList.add('headRepo');
    headRepo.innerHTML =`<h3>Repos</h3>`;

    repos.forEach((repo) => {
        const repoBtn = document.createElement('a');
        repoBtn.href = repo.html_url;
        repoBtn.target = '_blank';
        repoBtn.alt = repo.name;
        repoBtn.innerText = repo.name;
        repoDiv.appendChild(repoBtn);   
    });
    mainEl.appendChild(headRepo);
    mainEl.appendChild(repoDiv);
 };

 formEl.addEventListener('submit', (e)=> {
     e.preventDefault();    

     const search = searchEl.value;

     if(search){
         getResponse(search);
         searchEl.innerHTML ='';
     }

 });
  

 function dosentExistAnymorePoorGuyHopeIsGoodInHeaven(){
    mainEl.innerHTML = `<div class = 'notExist'> The Person you are searching for does not exist <i class="fas fa-heart-broken"></i> </P>`;

 }
