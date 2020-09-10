
document.addEventListener('DOMContentloaded', e => {
 const url = "http://localhost:3000/films/1"
 const movieShow = document.querySelector('#showing')


 const movieTitle = document.querySelector('#title')
 const movieRuntime = document.querySelector('#runtime')
 const movieContent = document.querySelector('#film-info')
 const movieShowTime = document.querySelector('#showtime')
 const ticketNum = document.querySelector('#ticket-num')

 function fetchMovies() {
  fetch(url)
   .then(res => res.json())
   .then(movie => {
    renderMovie(movie)

   })
  //create renderMovie function
  // do querySelector on movie with id showing
  //create an Li to display the movie attribute
  //append 


  const renderMovie = movie => {
   //console.log(movie)
   const movieTi = document.createElement('div')
   movieDiv.classList.add('movie')
   movieDiv.innerHTML = `<h1>${movie.poster}</h1>
   <h2>${movie.title}</h2>
   <h3>${movie.runtime}</h3>
   <h4>${movie.showtime}</h4>
   <h5> Available_show_time:${ movie.capacity} - ${movie.ticket_sold}</h5>`
   movieShow.append(movieDiv)
   // const title = movie.title
   // const poster = movie.poster
   // const runtime = movie.runtime
   // const showtime = movie.showtime
   // const available_ticket: ${ movie.capacity } - ${ movie.ticket_sold }
  }
  function clickhandler() {
   document.addEventListener('click', e => {
    if (e.target.textContent === 'Buy Ticket') {
     const button = e.target
     const buttSpan = button.closest('.movie').querySelector('span')
     const start_number_ticket = parseInt(span.innerHTML)
     const final_number_ticket = start_number_ticket - 1
     span.innerHTML = final_number_ticket
     const id = button.parentNodes.dataset.movieId

     // persit into the database
     const options = {
      method: 'PATCH',
      headers: {
       'content-type': "application/json",
       'accept': "application/json"
      },
      body: JSON.stringify({ ticket_num: final_number_ticket })
     }
     fetch(url + id, options)
      .then(res => res.json())
      .then(console.log)
    } else if (e.target.textContent === ('sold out')) {
     const sOut = document.createElement('form')
     let butt = e.target
     butt.innerHTML = 'hide form'
     butt.id = 'hide-form'
     sOut.innerHTML = `<h1>poster: </h1>
   <h2>title: </h2>
   <h3>runtime: </h3>
   <h4>showtime: </h4>
   <h5> Available_show_time: </h5>`


    }





   }



   })




  }







 }
clickhandler()
fetchMovies()
})
