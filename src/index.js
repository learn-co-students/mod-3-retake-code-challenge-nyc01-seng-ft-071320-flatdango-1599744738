document.addEventListener("DOMContentLoaded", e => {
    const url = "http://localhost:3000/films/"

//As a user, I can:

// √ See the first movie's details, including its poster, title, runtime, showtime, and available tickets (the number of tickets left will need to be derived from the theater's capacity and the number of tickets sold)
// Buy a ticket for a movie.The number of tickets sold for that movie should be persisted, and I should be able to see the number of available tickets decreasing on the frontend.
// √ I should not be able to buy a ticket if the showing is sold out.

//global variables
    
    let titleDiv = document.getElementById('title');
    let runtimeDiv = document.getElementById('runtime');
    let descDiv = document.getElementById('film-info');
    let showtimeDiv = document.getElementById('showtime');
    let ticketNum = document.getElementById('ticket-num');
    let image = document.getElementById('poster');

    let filmList = document.getElementById('list')
    

//fetch the details for the first movie
    const getFirstMovie = () => {
        fetch(url + 1)
        .then(resp => resp.json())
        .then(movie => renderMovie(movie)) //aspirational code
    }

//create the aspiration function from the get request
    function renderMovie(movie) {
    //give each element the appropriate data from the 'movie' parameter
        titleDiv.innerText = `${movie.title}`
        runtimeDiv.innerText = `${movie.runtime} minutes`
        descDiv.innerText = `${movie.description}`
        showtimeDiv.innerText = `${movie.showtime}`
        ticketNum.innerText = `${movie.capacity - movie.tickets_sold}`
        ticketNum.dataset.id = movie.id
        image.src = `${movie.poster}`

        //create a tickets sold variable
        let ticketSold = `${movie.tickets_sold}`
        let capacity = `${movie.capacity}`
    }

    const clickHandler = () => {
        document.addEventListener('click', e => {
            // if the user 'clicks' the buy-button, then 'remaining tickets will go down'
            // const button = e.target
            if (e.target.innerText === "Buy Ticket") { //add in the expression "&& if the remaining tickets are > 0"
                let currentTickets = e.target.parentElement.previousElementSibling.childNodes[1].childNodes[5]
                let movieId = currentTickets.dataset.id
                if (currentTickets.innerText > 0) {
                    currentTickets.innerText = currentTickets.innerText - 1
                    
                    
                //     options = {
                //     method: "PATCH",
                //     headers: {
                //         "content-type": "application/json",
                //         "accept": "application/json"
                //     },
                //     body: JSON.stringify({"tickets_sold": currentTickets.innerText})
                // }
                // fetch(url + 1, options)
                // .then(resp => resp.json())
                // .then()
                } else {
                    return alert("No more tickets!")
                }
                
                
                // create options for the patch request
                
            } 
        })
    }

//advances Deliverables --> (works, but overwrites previous code)

    // const getMovies = () => {
    //     fetch(url)
    //     .then(resp => resp.json())
    //     .then(movies => renderMovies(movies)) //aspirational
    // }

    // function renderMovies(movies) {
    //     for (const movie of movies) {
    //         renderMovie(movie) //aspirational
    //         // console.log(movie)
    //     }
    // }

    // function renderMovie(movie) {
    //     let div = document.createElement('div')
    //     div.classList.add("movie-name")
    //     div.innerText = `${movie.title}`

    //     filmList.appendChild(div)
    // }

//invoke the functions
getFirstMovie();
clickHandler();
// getMovies()
})
