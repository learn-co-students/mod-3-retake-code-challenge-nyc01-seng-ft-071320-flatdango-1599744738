
document.addEventListener('DOMContentloaded', e => {
 const url = "http://localhost:3000/films/1"
 function fetchMovies() {
  fetch(url)
   .then(res => res.json())
   .then(movie => {
    renderMovie(movie)

   })
  const renderMovie = movie => {
   //console.log(movie)
   const title = movie.title
   const poster = movie.poster
   const runtime = movie.runtime
   const showtime = movie.showtime
   const available_ticket = movie.




  }







 }
 fetchMovies()
})
