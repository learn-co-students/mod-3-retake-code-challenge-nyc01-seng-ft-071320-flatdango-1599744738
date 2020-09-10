const url = "http://localhost:3000/films"

function getMovies() {
    fetch(url)
    .then(response => response.json())
    .then(movies => movies.forEach(movie => renderMovie(movie)))   
}

function renderMovie(movie) {
    const poster = document.querySelector('#poster')
    const posterContainer = document.querySelector('.four wide column')
    const filmItem = document.querySelector('.film item')
    const listContainer = document.querySelector('.list-container')
    const divList = document.querySelector('.ui divided list')
    const card = document.querySelector('.card')
    const title = document.querySelector('#title')
    const runtime = document.querySelector('#runtime')
    const description = document.querySelector('#film-info')
    const showtime = document.querySelector('#showtime')
    const ticketNum = document.querySelector('#ticket-num')

    let theaterCapacity = movie.capacity
    let tickets_sold = movie.tickets_sold
    let remainingTickets = theaterCapacity - tickets_sold

    ticketNum.innerHTML = remainingTickets

    title.dataset.title = movie.title
    title.innerHTML = movie.title

    description.dataset.description = movie.description
    description.innerHTML = movie.description

    runtime.dataset.runtime = movie.runtime
    runtime.innerHTML = `${movie.runtime} minutes` 

    showtime.dataset.showtime = movie.showtime
    showtime.innerHTML = movie.showtime

    poster.dataset.poster = movie.poster
    poster.src = movie.poster

    posterContainer.appendChild(poster)
    title.append(card)
    // debugger
}

const buyButton = () => {
    
}


getMovies()