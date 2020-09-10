/*
As a user, I can:

- See the first movie's details, including its **poster, title, runtime, showtime, and available tickets** 
    (the number of tickets left will need to be derived from the theater's capacity and the number of tickets sold)
- Buy a ticket for a movie. The number of tickets sold for that movie should be persisted, and I should be able to see the number of available tickets decreasing on the frontend.
- I should not be able to buy a ticket if the showing is sold out.
*/


document.addEventListener("DOMContentLoaded", () => {
    const baseUrl = "http://localhost:3000/films/"
    const firstUrl = "http://localhost:3000/films/1/"
    const ce = (tag) => document.createElement(tag);
    const qs = (selector) => document.querySelector(selector);

    const getFilms = () => {
        fetch(baseUrl)
        .then(response => response.json())
        .then(films => {
            renderFilms(films)
        })
    }

    const renderFilms = (films) => {
        for(const filmObj of films){
            renderFilmInfo(filmObj)
            renderFilm(filmObj)
        }
    }

    function renderFilmInfo(filmObj){
        const showCard = qs(".card")
        let filmPoster = qs("#poster")
        let filmCard = qs("#title")
        let filmRun = qs("#runtime")
        let filmInfo = qs("#film-info")
        let filmShowtime = qs("#showtime")
        let filmTicketNum = qs("#ticket-num")
        let filmCount = qs(".ui.orange.button")
        // filmPoster.innerHTML = `
        // <img id="poster" src="${filmObj.poster}">
        // `
        filmPoster.src= filmObj.poster
        filmCard.innerText = filmObj.title
        filmRun.innerText = filmObj.runtime
        filmInfo.innerText = filmObj.description
        filmShowtime.innerText = filmObj.showtime
        filmTicketNum.innerText = filmObj.capacity
        filmCount.dataset.num = filmObj.id
        filmTicketNum.dataset.num = filmObj.id
        filmTicketNum.dataset.tickets = filmObj.tickets_sold
        filmTicketNum.dataset.capacity = filmObj.capacity
        // showCard.append(filmCard)
    }

// buy ticket counter 
// subtract from total
// user click event listener

    function clickHandler () {
        document.addEventListener("click", (e) => {
        if (e.target.matches(".ui.orange.button"))
            console.log(e.target)
            const ticketNum = qs("#ticket-num")
            // get data id from button
            let dataId = parseInt(ticketNum.getAttribute("data-num"))
            let ticketData = parseInt(ticketNum.getAttribute("data-tickets"))
            let capacityData = parseInt(ticketNum.getAttribute("data-capacity"))

            const dataObject = {
                capacity: capacityData - 1,
                tickets_sold: ticketData + 1,
            }

            putFilm(dataId, dataObject)
        })
    }

    const putFilm = (dataId, dataObject) => {
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(dataObject),
        }

        fetch(baseUrl + dataId, options)
        .then((response) => response.json())
        .then((data) => {
            const dataId = data.id
            const capacity = data.capacity
            const tickets = data.tickets_sold

            // query select the data id and associated ticket count/capacity
            let filmTickets = qs("#ticket-num")

            filmTickets.setAttribute("data-num", dataId)
            filmTickets.setAttribute("data-capacity", capacity)
            filmTickets.setAttribute("data-tickets", tickets)

            // on page refresh, remaining tickets go down, capacity goes down
            filmTickets.textContent = capacity
        })


    }

    function renderFilm(filmObj){
        // create element here
        const filmPoster = qs(".list-container")
        let filmDiv = ce("div")
            filmDiv.innerText = filmObj.title
            filmDiv.dataset.num = filmObj.id
            filmPoster.append(filmDiv)
    }









getFilms()
clickHandler()
});



