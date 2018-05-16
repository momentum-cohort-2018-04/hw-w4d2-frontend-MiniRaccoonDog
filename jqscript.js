import request from 'superagent'
function onLoad () {
// function onLoad (input) {
  console.log('Loaded!')
  const query = 'miniraccoondog'
  // const query = input.toLowerCase()
  getData(query)
}
// function alert (query) {
//   window.alert(query)
// }

function getData (query) {
  try {
    request.get(`https://api.github.com/users/${query}`)
      .then(function (result) {
        console.log('result', result)
        createBio(result.body)
      })
  } catch (err) { window.alert('Error message: ' + err) }
}

function createBio (body) {
  var name = body.name
  var url = body.html_url
  var company = body.company
  var website = body.blog
  var githubname = body.login
  var photo = body.avatar_url
  var bio = body.bio

  var header = document.querySelector('.banner')
  header.innerHTML = `<h1 class="name">${name}</h1>`
  var basic = document.querySelector('.bio__content')
  basic.innerHTML = `<div class="bio__info"><em>Name</em> ${name}</div>
  <div class="bio__info"><em>Github Url</em> <a href="${url}">${githubname}</a></div>
  <div class="bio__info"><em>Company</em> ${company}</div>
  <div class="bio__info"><em>Website</em> <a href="${website}">${website}</a></div>`
  var intro = document.querySelector('.bio__intro')
  intro.innerHTML = `${bio}`
  var picture = document.querySelector('.bio__photo')
  picture.innerHTML = `
    <div class="bio__photo">
    <img class="photo" src="${photo}">
    </div>`
}

// document.addEventListener('DOMContentLoaded', onLoad)
