document.addEventListener("DOMContentLoaded", function(e){
    loadFrontMovie()
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
     lowerTicketDOM(e.target)
    }
})// end of click listener 

//####### load data for movie one
function loadFrontMovie(){
    fetch("http://localhost:3000/films/1")
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
    document.querySelector('.card').dataset.remaining=(parseInt(data.capacity, 10) - parseInt(data.tickets_sold, 10))
    document.querySelector('.card').dataset.sold=data.tickets_sold
}


//#### PATCH request to buy ticket
function lowerTicketDOM(btn){
    let card = btn.closest('.card')
    let availableTickets = card.dataset.remaining
    console.log(availableTickets)
    if(availableTickets >0){
    document.querySelector('#ticket-num').innerText=(
        parseInt(availableTickets, 10) - 1)
    lowerTicketDb(btn)
    } else {window.alert(`I'm sorry, there are no more tickets!`)}
        
    }// 
    

    function lowerTicketDb(btn){
        let card = btn.closest('.card')
        let id = card.dataset.id 
        console.log(id)
        let sold = parseInt(card.dataset.sold, 10)
        let update = (sold + 1)
        console.log(update)

        let data = {tickets_sold: update}
        console.log(data)

        let options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({tickets_sold: update})
        }

        fetch(url+id, options)
            .then(function(response){
                return response.json
            })
            .then(function(response){
                console.log(response)
                loadFrontMovie()
            })

       
}