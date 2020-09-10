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
    ticketAmount = buyTix(movie)
}

// get tickets to do math with theatre capacity and tix sold
function buyTix(movie){
    let tickets = ticketsLeft.innerText = parseInt(`${capacity}` - `${movie.tickets_sold}`)
    tickets
    buyButton.addEventListener('click', e => {
      let remainingTix = ticketsLeft.innerText = tickets--
        persistTix(movie, remainingTix)
    })
}

function persistTix(movie, remainingTix){
    fetch(url + movie.id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
        },
        body:JSON.stringify({
            tickets_sold: remainingTix})
        })
}

   



getMovie(url + 1)







