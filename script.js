import request from 'superagent'

function onLoad () {
  console.log('Loaded!')
  const query = 'miniraccoondog'
  getData(query)
}

function getData (query) {
  request.get(`https://api.github.com/users/${query}`)
    .then(function (result) {
      console.log('result', result.body)
      createBio(result.body)
    })
}

function createBio (body) {
  var name = body.name
  var url = body.html_url
  var company = body.company
  var website = body.blog
  var githubname = body.login
  // var website = body.html_url
  var photo = body.avatar_url
  var bio = body.bio

  console.log(name, url, company, website)
  var header = document.querySelector('.banner')
  header.innerHTML = `<h1 class="name">${name}</h1>`
  var body = document.querySelector('.content')
  body.innerHTML =
  `<div class="bio">
  <h2 class="bio__headings">The Basics</h2>
  <div class="bio__info"><em>Name</em> ${name}</div>
  <div class="bio__info"><em>Github Url</em> <a href="${url}">${githubname}</a></div>
  <div class="bio__info"><em>Company</em> ${company}</div>
  <div class="bio__info"><em>Website</em> <a href="${website}">${website}</a></div>
  </div>
  <div class="bio">
    <h2 class="bio__headings">The Story</h2>
    <div class="bio__intro">
      ${bio}
    </div>
  </div>
  <div class="bio__photo">
  <img class="photo" src="${photo}">
  </div>`
}

document.addEventListener('DOMContentLoaded', onLoad)
