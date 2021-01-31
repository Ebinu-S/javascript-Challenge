const APIURL = 'https://api.github.com/users/';

getResponse('Ebinu-S'); //initialised with my repository

const mainEl = document.getElementById('main');


async function getResponse(username) { 
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    console.log(respData);
}

function renderProfile(profile) {
    mainEl.innerHTML = `
    <img src="https://avatars.githubusercontent.com/u/54814859?v=4" alt="avatar" class="avatar">
        <div class="uInfo">
            <h3>Ebinu Suneer</h3>
            <p>Average programming Enjoyer.</p>
            <div class="countData">
                <span>Followers : 1232 </span>
                <span>following : 123 </span>
                <span>Repos : 12 </span>
            </div>
        </div>
        <div class="btns">
            <a href="https://github.com/Ebinu-S">Visit Profile</a>
            <a href="https://github.com/Ebinu-S?tab=repositories">Repos</a>
        </div>

    `
  };
  



