<h1 align="center">Github Profile Search</h1>
<h6 align="center">Project <a href="https://sc-github-profilesearch.vercel.app/" target="_blank">Link</a></h6>
<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png" alt="html5" width="60" height="40"/>
	<img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" alt="html5" width="60" height="40"/>
</div>
<br>

<details>

<summary  align="center" style="background-color: #ffff00; padding: 10px;">English</summary>

<h3>Description</h3>
The project contains an input that receives the user's username and when enter is pressed, a request is made to the GitHub API bringing a card containing:

- profile name
- avatar
- description
- number of followers, following, and number of public repositories
- last 5 public repositories posted
- <img src="https://i.imgur.com/jkOLjQC.png" alt="html5" width="800" height="400"/></div>

<hr>
<h3>New skills learned</h3>
In this project, I learned how to use AXIOS for API import, which is a JavaScript library that allows you to make HTTP requests, such as GET, POST, PUT, DELETE, among others, in a simple way, and what I liked the most was the way of handling data in case there is an error.

How I used to do it:

```JavaScript
function API(url){
 .fetch(url)
  .then(response => response.json)
  .then(data) // função que recebe os dados.
  .catch(error)
}
```

Or
```JavaScript
async function fetchAsyncAwait(URL) {
  const config = {
    headers: {
      Accept: 'Application/json',
    },
  }

  const response = await fetch(`${URL}`, config)
  const data = await response.json()
  output(data) // função que recebe os dados.

}
```

With axios:
```JavaScript
async function API(URL){
	try{
		const {data} = await axios(url)

		output(data) // função que recebe os dados
	} catch(error) {
		console.log(error)
	}
}
```
**Reminder: with axios being a library, you need to import it in the head of your HTML code
```HTML
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.5/axios.min.js"
        integrity="sha512-nnNHpffPSgINrsR8ZAIgFUIMexORL5tPwsfktOTxVYSv+AUAILuFYWES8IHl+hhIhpFGlKvWFiz9ZEusrPcSBQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
<hr>
<h3>License</h3>
This project was inspired by project number 29 from the public repository 50 projects 50 days (https://github.com/bradtraversy/50projects50days)

</details>
<br>
<h3>Descrição</h3>

O projeto contém um input que recebe o username do usuário e ao pressionar enter, um request à API do github é feita trazendo um card contendo:
- nome de perfil
- avatar
- descrição
- número dos seguidores, seguindo e número de repositórios públicos
- últimos 5 repositórios publicos postados

<img src="https://i.imgur.com/jkOLjQC.png" alt="html5" width="800" height="400"/></div>
<hr>
<h3>Novidades aprendidas</h3>
Nesse projeto eu aprendi a usar AXIOS para importação de api, que é uma biblioteca JavaScript que permite fazer requisições HTTP, como GET, POST, PUT, DELETE, entre outras, de forma simples e o que mais gostei foi a forma de manipular dados caso haja algum erro
Como eu fazia antes:

```JavaScript
function API(url){
 .fetch(url)
  .then(response => response.json)
  .then(data) // função que recebe os dados.
  .catch(error)
}
```
ou
```JavaScript
async function fetchAsyncAwait(URL) {
  const config = {
    headers: {
      Accept: 'Application/json',
    },
  }

  const response = await fetch(`${URL}`, config)
  const data = await response.json()
  output(data) // função que recebe os dados.

}
```

Com axios:
```JavaScript
async function API(URL){
	try{
		const {data} = await axios(url)

		output(data) // função que recebe os dados
	} catch(error) {
		console.log(error)
	}
}
```
**Lembrete: com axios é uma biblioteca então você precisa importá-lo no head do seu código HTML
```HTML
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.5/axios.min.js"
        integrity="sha512-nnNHpffPSgINrsR8ZAIgFUIMexORL5tPwsfktOTxVYSv+AUAILuFYWES8IHl+hhIhpFGlKvWFiz9ZEusrPcSBQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```
<hr>
<h3>Licença</h3>
Este projeto foi inspirado no projeto número 29 do repositório público 50 projects 50 days (https://github.com/bradtraversy/50projects50days)


---
