const APIURL = 'https://api.github.com/users/'
const main = document.querySelector('main')
const input = document.querySelector('#search')
const formulario = document.forms[0]

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)
        output(data)
        getRepos(username)
    } catch (error) {
        console.log(error)
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sort=created')
        addRepositories(data)
    } catch (error) {
        console.log(error)
    }
}


function output(data) {
    main.innerHTML = `
 <div class="github-card">
 <img src="${data.avatar_url}" alt="" class="profileImg animated-bg">
 <div class="github-card-userInfo">
     <h1 class="user">
         ${data.name}
     </h1>
     <p class="description">
         ${data.bio}
     </p>
     <div class="status">
         <p><span class="status-info followers">${data.followers}</span>Followers</p>
         <p><span class="status-info following">${data.following}</span>Following</p>
         <p><span class="status-info repositories">${data.public_repos}</span>Repositories</p>
     </div>
     <ul class="last-projects">
     </ul>
 </div>
</div>
 `
}

function addRepositories(repositories){
    const repos = document.querySelector(`.last-projects`)
    repositories.slice(0,5).forEach(repo => {
        const listItem = document.createElement(`li`)
        const ancora = document.createElement(`a`)
        ancora.href = repo.html_url
        ancora.target = `_blank`
        ancora.innerText = repo.name
        listItem.appendChild(ancora)
        repos.appendChild(listItem)
    })
}


input.addEventListener(`keypress`, (event) => {
    if (event.key === `Enter`) {
        input.classList.add(`search`)

        main.innerHTML = `
        <div class="github-card">
            <!-- <img src="#" alt="" class="profileImg animated-bg"> -->
            <div class="profileImg animated-bg"></div>
            <div class="github-card-userInfo">
                <h1 class="user animated-bg  animated-bg-text">
                    &nbsp;
                </h1>
                <p class="description animated-bg  animated-bg-text">
                    &nbsp;
                    <span class="animated-bg  animated-bg-text">&nbsp;</span><span class="animated-bg  animated-bg-text">&nbsp;</span>
                </p>
                <div class="status">
                    <p><span class="status-info followers animated-bg animated-bg-text">&nbsp;</span>Followers</p>
                    <p><span class="status-info following animated-bg animated-bg-text">&nbsp;</span>Following</p>
                    <p><span class="status-info repositories animated-bg animated-bg-text">&nbsp;</span>Repositories</p>
                </div>
                <ul class="last-projects">
                    <li><a href="#" class="animated-bg animated-bg-text">&nbsp;</a></li>
                    <li><a href="#" class="animated-bg animated-bg-text">&nbsp;</a></li>
                    <li><a href="#" class="animated-bg animated-bg-text">&nbsp;</a></li>
                    <li><a href="#" class="animated-bg animated-bg-text">&nbsp;</a></li>
                    <li><a href="#" class="animated-bg animated-bg-text">&nbsp;</a></li>
                </ul>
            </div>
        </div>
        `
        main.classList.add(`show`)
        event.target.style.width = `${main.clientWidth}px`    
        setTimeout(()=>{
            getUser(event.target.value)
        }, 2000)
    }
})

// window.onload = ()=>{
//     input.focus()
// }