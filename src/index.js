document.addEventListener("DOMContentLoaded", e => {
    const url = "http://localhost:3000/films/"

//As a user, I can:

// √ See the first movie's details, including its poster, title, runtime, showtime, and available tickets (the number of tickets left will need to be derived from the theater's capacity and the number of tickets sold)
// Buy a ticket for a movie.The number of tickets sold for that movie should be persisted, and I should be able to see the number of available tickets decreasing on the frontend.
// I should not be able to buy a ticket if the showing is sold out.


//fetch the details for the first movie
    const getFirstMovie = () => {
        fetch(url + 1)
        .then(resp => resp.json())
        .then(movie => renderMovie(movie)) //aspirational code
    }

//create the aspiration function from the get request
    function renderMovie(movie) {
        //get the elements
        let titleDiv = document.getElementById('title');
        let runtimeDiv = document.getElementById('runtime');
        let descDiv = document.getElementById('film-info');
        let showtimeDiv = document.getElementById('showtime');
        let ticketNum = document.getElementById('ticket-num');
        let image = document.getElementById('poster');

        //give each element the appropriate data from the 'movie' parameter
        titleDiv.innerText = `${movie.title}`
        runtimeDiv.innerText = `${movie.runtime} minutes`
        descDiv.innerText = `${movie.description}`
        showtimeDiv.innerText = `${movie.showtime}`
        ticketNum.innerText = `${movie.capacity - movie.tickets_sold}`
        image.src = `${movie.poster}`
    }

    const clickHandler = () => {
        document.addEventListener('click', e => {
            // if the user 'clicks' the buy-button, then 'remaining tickets will go down'
            // const button = e.target
            if (e.target.innerText === "Buy Ticket") { //add in the expression "&& if the remaining tickets are > 0"
                let currentTickets = e.target.parentElement.previousElementSibling.childNodes[1].childNodes[5].innerText
                let availableTickets = parseInt(currentTickets - 1, 10)
                
                //create options for the patch request
                options = {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json"
                    },
                    body: JSON.stringify({"tickets_sold": })
                }
            } 
        })
    }


//invoke the functions
getFirstMovie();
clickHandler();
})
