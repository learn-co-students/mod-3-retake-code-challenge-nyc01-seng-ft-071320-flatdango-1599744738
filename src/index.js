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
    const showtime = document.querySelector('#showtime')

    title.dataset.title = movie.title
    title.innerHTML = movie.title

    runtime.dataset.runtime = movie.runtime
    runtime.innerHTML = `${movie.runtime} minutes` 

    showtime.dataset.showtime = movie.showtime
    showtime.innerHTML = movie.showtime

    poster.dataset.poster = movie.poster
    poster.innerHTML = `
    <img id="poster" src="assets/placeholderImage.png" data-poster= ${movie.poster}>
    `
    


    posterContainer.appendChild(poster)
    title.append(card)
    // debugger
}

getMovies()