    const url = "http://localhost:3000/films/1"

    const fetchMovie = () => {
        fetch(url)
            .then(resp => resp.json())
            .then(renderMovie)
    }

    const renderMovie = (movie) => {
        const movieDiv = document.querySelector('#showing')
        const movieCard = document.createElement('div')
        const poster = document.querySelector('#poster')
        const newPoster = document.createElement('scr')


        const capa = '${movie.capacity}'
        const capaInt = parseInt(capa)
        const sold = "${movie.tickets_sold}"
        const number = capaInt - sold

        
        newPoster.innerHTML = `
        <img id="poster" src="${movie.poster}">
        `
        movieCard.className = 'card'
        movieCard.innerHTML = `
        
        <div id="title" class="title">${movie.title}</div>
        <div id="runtime" class="meta">${movie.runtime}</div>
        <div class="content">
        <div class="description">
        <div id="film-info">${movie.description}</div>
        <span id="showtime" class="ui label">${movie.showtime}</span>
        <span id="ticket-num">${movie.tickets_sold}</span> remaining tickets
        <div class="ui orange button">Buy Ticket</div>
    `
    // movieDiv.append(movieCard)  
 
    movieDiv.parentNode.replaceChild(movieCard, movieDiv)
    poster.parentNode.replaceChild(newPoster, poster)
    }

    function clicker() {
        document.addEventListener("click", (e) => {
            if (e.target.className == "ui orange button"){
        
                const tickets = parseInt(e.target.previousElementSibling.innerText) - 1
            e.target.previousElementSibling.innerText = tickets
            fetch(url,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "tickets_sold": tickets})
            
            })
            }})}
    


            clicker()
    fetchMovie()