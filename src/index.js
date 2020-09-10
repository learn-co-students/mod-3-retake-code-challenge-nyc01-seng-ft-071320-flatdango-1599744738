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
         if (event.target === targetButton) {
           let ticketSold = 0
            const ticketNum = parseInt(movieTickets.innerText)  
            movieTickets.innerText = ticketNum - 1
            ticketSold = ticketSold + 1

            updateTickets(ticketSold)
           
       }
     })
    }

    function updateTickets(ticketSold) {
        options = {
            methods: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Aceept" : "application/json"
            },
            body: JSON.stringify({
                tickets_sold: ticketSold
            })
        }
        
        fetch(url + 1, options)
        .then(response => response.json())
        .then(ticketData => {
            console.log(ticketData)
        })
    }

    
    
    
    getMovie();
    clickListener();
});


