document.addEventListener("DOMcontentLoaded", function(e){

    const url = "http://localhost:3000/films"

    const fetchMovie = () => {
        fetch(url)
            .then(resp => resp.json())
            .then(renderMovie)
    }

    const renderMovie = (movie) => {
        const movieDiv = document.querySelector("#showing")
        const movieCard = document.createElement('div')
        movieCard.className = 'card'
        movieCard.innerHTML = `
            <div id="title" class="title">${movie.title}</div>
            <div id="runtime" class="meta">${movie.runtime}</div>
            <div class="content">
            <div class="description">
            <div id="film-info">${movie.description}</div>
            <span id="showtime" class="ui label">${movie.showtime}</span>
            <span id="ticket-num">${movie.tickets_sold}</span> remaining tickets
        `
        movieDiv.append(movieCard)
    }
    fetchMovie()





})//dom loaded