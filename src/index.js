document.addEventListener("DOMContentLoaded", function(e){
    loadFrontMovie(1)
}) 

//### variables #########
const url = "http://localhost:3000/films/"
let buyTix= document.querySelector('#buy-ticket-btn')

// ######################

//#### click listener 
document.addEventListener('click', function(e){
    e.preventDefault()
    console.log(e.target)
     if(e.target.matches('#buy-ticket-btn')){     console.log('buy ticket clicked')
     buyTicket(e.target)
    }
})// end of click listener 

//####### load data for movie one
function loadFrontMovie(id){
    fetch(url + id)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        renderFrontMovie(data)
    })
}

//########change DOM for movie one
function renderFrontMovie(data){
    let rt = `${data.runtime} minutes` 
    let tix= (data.capacity-data.tickets_sold)
    document.querySelector('#poster').src=data.poster
    document.querySelector('#title').innerText=data.title
    document.querySelector('#runtime').innerText=rt
    document.querySelector('#showtime').innerText=data.showtime
    document.querySelector('#ticket-num').innerText=tix
    document.querySelector('#film-info').innerText=data.description
    document.querySelector('.card').dataset.id=data.id
}


//#### PATCH request to buy ticket
function buyTicket(btn){
    // change DOM 
    doc
   let card = btn.closest('.card')
   let id = card.dataset.id 
   
   let data = {tickets_sold: }

}// 