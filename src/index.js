document.addEventListener('DOMContentLoaded', (event) => {
    const url = "http://localhost:3000/films/1"
    const movieTitle = document.querySelector("#title")
    const moviePoster = document.querySelector("#poster")
    const movieRuntime = document.querySelector("#runtime")
    const movieShowtime = document.querySelector("#showtime")
    const movieDescription = document.querySelector("#film-info")
    const movieTickets = document.querySelector("#ticket-num")
    
    
    function getMovie(){
        fetch(url).then(response => response.json()).then(movieData =>
        renderMovie(movieData))
    }

    function renderMovie(movie) {
        let remainingTickets = movie.capacity - movie.tickets_sold
        movieTitle.innerText = movie.title
        moviePoster.src = movie.poster
        movieRuntime.innerText = movie.runtime
        movieShowtime.innerText = movie.showtime
        movieDescription.innerText = movie.description
        movieTickets.innerText = remainingTickets
        
    }

    function clickListener(){
     
        const button = document.querySelector("#button-container")
        const targetButton = document.querySelector("#button-container").children[0]
     
        button.addEventListener('click', (event) => {
            
            event.preventDefault();

         if (event.target === targetButton) {
            fetch(url)
            .then(response =>response.json())
            .then(movie => {

           let ticketSold = 0
            const ticketNum = parseInt(movieTickets.innerText)  
            movieTickets.innerText = ticketNum - 1
           ticketSold = movie.tickets_sold + 1
            
           if (ticketNum < 1) {
                console.log("Sorry Sold out !")
            }
            if (ticketNum > 0 ) {
            updateTickets(ticketSold)
          }
        })
       }
     })
    }

    function updateTickets(ticketSold) {
        let options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
            },
            body: JSON.stringify({
                tickets_sold: ticketSold
            })
        }
        // "http://localhost:3000/films/[1]"
        fetch(url, options)
        .then(response => response.json())
        .then(ticketData => {
            movieTickets.innerText = ticketData.tickets_sold
        })
    }

    
    
    
    getMovie();
    clickListener();
});


