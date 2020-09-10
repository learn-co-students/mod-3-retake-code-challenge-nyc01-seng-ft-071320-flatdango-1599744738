const url = "http://localhost:3000/films"

function getMovies() {
    fetch(url)
    .then(response => response.json())
    .then(movies => movies.forEach(movie => renderMovie(movie)))   
}

function renderMovie(movie) {
    const poster = document.querySelector('#poster')
    const filmItem = document.querySelector('.film item')
    const listContainer = document.querySelector('.list-container')
    const divList = document.querySelector('.ui divided list')
    const card = document.querySelector('.card')
    const title = document.querySelector('#title')
    const runtime = document.querySelector('#runtime')
    const showtime = document.querySelector('#showtime')

    
    debugger
}

getMovies()