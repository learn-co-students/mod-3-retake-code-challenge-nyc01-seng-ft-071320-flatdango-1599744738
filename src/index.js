document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = "http://localhost:3000/films"


    const getMovies = () => {
        fetch(baseUrl)
        .then(response => response.json())
        .then(movie => renderMovie(movie))
    }

    const renderMovie = (movie) => {

        document.querySelector('#poster').src =`${movie.poster}`
        document.querySelector('#title').textContent = `${movie.title}`
        document.querySelector('#runtime').textContent = `${movie.runtime}`
        document.querySelector('#film-info').textContent = `${movie.description}`
        document.querySelector('#showtime').textContent = `${}`
    }


    getMovies()
})

// The endpoints you will need are:

// - GET `/films/[:id]` (start with `/films/1`)
// - PATCH `/films/[:id]`


// As a user, I can:

// 1). See the first movie's details, including its **poster, title, runtime, showtime, and available tickets** (the number of tickets left will need to be derived from the theater's capacity and the number of tickets sold)

    // - Get all movies data 
    // - Render first movie to DOM with all details
    // - Get number of tickets left 

// 2). Buy a ticket for a movie. The number of tickets sold for that movie should be persisted, and I should be able to see the number of available tickets decreasing on the frontend.

    // - Buy ticket for a movie
    // - Decrease the number of tickets left for that movie
    // - Should stay on DOM even after refreshing

// 3).  I should not be able to buy a ticket if the showing is sold out.

    // - Change buy ticket button to sold out button
    // - Disable button functionality 