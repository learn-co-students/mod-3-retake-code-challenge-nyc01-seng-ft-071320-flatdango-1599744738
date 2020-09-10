    const url = "http://localhost:3000/films/1"
document.addEventListener("DOMContentLoaded", () => {
  const moviePoster = document.querySelector('#poster')
  const movieTitle = document.querySelector('#title')
  const runTime = document.querySelector('#runtime')
  const showTime = document.querySelector('#showtime')
  const remainingTickets = document.querySelector('#ticket-num')
  const ticketButton = document.querySelector('.ui.orange.button')
  const desc = document.querySelector('#film-info')







  //render Dom
  const renderMovie = (movie) => {
    remainingTickets.textContent = parseInt(movie.capacity) - movie.tickets_sold
    runTime.textContent =` ${movie.runtime} minutes`
    movieTitle.textContent = movie.title
    moviePoster.src = movie.poster
    ticketsSold = movie.tickets_sold
    showTime.textContent = movie.showtime
    desc.textContent = movie.description

  }



  //init fetch
  const getMovie = () => {
    fetch(url)
    .then(response => response.json())
    .then(movieObj => renderMovie(movieObj))
  }

  getMovie()
})























/*
- See the first movie's details, including its **poster, title, runtime, showtime, and available tickets**
(the number of tickets left will need to be derived from the theater's capacity and the number of tickets sold)
  - make a fetch request√
  - get attributes of movie onto the DOM √
- Buy a ticket for a movie. The number of tickets sold for that movie should be persisted, and I should be able to see the number of available tickets decreasing on the frontend.
  - decrement tickets on click
    *create click handler
  - make a patch request
- I should not be able to buy a ticket if the showing is sold out.

*/
