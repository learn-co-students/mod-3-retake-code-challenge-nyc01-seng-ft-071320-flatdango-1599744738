const url = "http://localhost:3000/films"

// adding the dom content loaded//
document.addEventListener("DOMContentLoaded", e => {
getFilms()
})

// fethc request for the movies //
const getFilms = () => {
    fetch(url)
    .then(convToJson)
    .then(renderFilm)
}

// parsing the film into jason but seperating the functions//
const convToJson = res => {
    return res.json()
}

// the function that will grab the first movie//
// and render it onto a dom container

const renderFilm = (films) => {
    console.log(films[0])
    }




































    //////////////////////////////////////////////////
// GET /films/[:id] (start with /films/1)
// PATCH /films/[:id]
// GET /films (for Advanced Deliverables only)

// User :
//      See the first movie's details, including its poster, 
// title, runtime, showtime, and available tickets (the number 
// of tickets left will need to be derived from the theater's 
// capacity and the number of tickets sold)
// 
//  Buy a ticket for a movie. The number of tickets sold for 
//  that movie should be persisted, and I should be able to 
//  see the number of available tickets decreasing on the 
//  frontend.
// 
//  I should not be able to buy a ticket if the showing is 
// sold out.





// advanced Deliverables//

// As a user, I can:

// See a menu of all movies on the left side of the page.
// Click on a movie in the menu to replace the currently displayed movie's details with the new movie's details.
// Buy a ticket for any movie and update the tickets sold for that movie, not just the first.
// Indicate in the menu which movies are sold out.


// Styling for advanced deliverables:

// The listed films should be added to the div with an id of films. Here is sample styling for the film list items:

//   <div class="film item">(Title of film)</div>
//   <div class="sold-out film item">(Title of a sold-out film)</div>
//   <div class="film item">(Title of film)</div>