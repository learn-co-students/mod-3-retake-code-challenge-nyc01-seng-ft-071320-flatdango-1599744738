const url = "http://localhost:3000/films/"
const allTitlesHere = document.querySelector('.film-item')
const moviePoster = document.querySelector('#poster')
const runTime = document.querySelector("#runtime")
const movieTitle = document.querySelector("#title")
const movieDescription = document.querySelector("#film-info")
const showTime = document.querySelector("#showtime")
const ticketsLeft = document.querySelector("#ticket-num")
const buyButton = document.querySelector(".ui-orange-button")
console.log(buyButton)

// fetch a movie with it's id
// get tickets to do math with theatre capacity and tix sold


function getMovie(url){
    fetch(url).then(resp => resp.json()).then(movieData => console.log(movieData))
}



// getMovie(url + id)






