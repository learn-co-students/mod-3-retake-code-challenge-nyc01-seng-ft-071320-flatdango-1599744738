const url = "http://localhost:3000/films/"
// const allTitlesHere = document.querySelector('.film-item')
const moviePoster = document.querySelector('#poster')
const runTime = document.querySelector("#runtime")
const movieTitle = document.querySelector("#title")
const movieDescription = document.querySelector("#film-info")
const showTime = document.querySelector("#showtime")
const ticketsLeft = document.querySelector("#ticket-num")
const buyButton = document.querySelector(".ui-orange-button")
let capacity = 100
console.log(buyButton)

// fetch FIRST movie with it's id


function getMovie(url){
    fetch(url).then(resp => resp.json()).then(movie => {
        renderMovie(movie)
    }) 
}


//poster, title, runtime, showtime, and available tickets 
function renderMovie(movie){
    moviePoster.src = movie.poster
    movieTitle.innerText = movie.title
    runTime.innerText = `${movie.runtime} minutes`
    showTime.innerText = `${movie.showtime}`
    ticketsLeft.innerText = parseInt(`${capacity}` - `${movie.tickets_sold}`)
}

// get tickets to do math with theatre capacity and tix sold
function buyTix(){
    buyButton.addEventListener('click', e => {
        console.log(e)
    })
}


getMovie(url + 1)
buyTix()






