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
        let filmPoster = qs(".four-wide-column")
        
        let filmCard = qs("#title")
        let filmRun = qs("#runtime")
        filmPoster.innerHTML = `
        <img id="poster" src="${filmObj.poster}">
        `
        filmCard.innerText = filmObj.title
        filmRun.innerText = filmObj.runtime
        
        // showCard.append(filmCard)
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
});



