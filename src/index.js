const url = "http://localhost:3000/films/"
// const allTitlesHere = document.querySelector('.film-item')
const moviePoster = document.querySelector('#poster')
const runTime = document.querySelector("#runtime")
const movieTitle = document.querySelector("#title")
const movieDescription = document.querySelector("#film-info")
const showTime = document.querySelector("#showtime")
const ticketsContainer = document.querySelector("#ticket-num")
const buyButton = document.querySelector(".ui-orange-button")

console.log(buyButton)

// fetch FIRST movie with it's id


function getMovie(url){
    fetch(url).then(resp => resp.json()).then(movie => {
        renderMovie(movie)
        buyTix(movie)
    }) 
}


//poster, title, runtime, showtime, and available tickets 
function renderMovie(movie){
    moviePoster.src = movie.poster
    movieTitle.innerText = movie.title
    runTime.innerText = `${movie.runtime} minutes`
    showTime.innerText = `${movie.showtime}`
    movieDescription.innerText = movie.description
}

// get tickets to do math with theatre movie.capacity and tix sold
function buyTix(movie){
    let ticketsLeft = parseInt(`${movie.capacity}` - `${movie.tickets_sold}`)
    ticketsContainer.innerText = ticketsLeft


    buyButton.addEventListener('click', e => {
      let remainingTix = ticketsContainer.innerText = ticketsLeft--
      ticketsContainer.className = movie.id
        persistTix(movie,remainingTix)
        if(remainingTix === 0){
            stopPropagation()
            ticketsContainer.innerText = "Sold Out"
        }
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
        }).then(resp=> resp.json()).then(data => console.log(data))
}

   



getMovie(url + 1)







