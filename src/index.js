document.addEventListener("DOMContentLoaded", () => {
  fetchFilms();
  clickHandler();
  fetchMoreFilms();
});

let ticketsSold = 0;
// const url = "http://localhost:3000/films";
const ce = (tag) => document.createElement(tag);
const qs = (selector) => document.querySelector(selector);
let filmDiv = qs(".card");

const fetchFilms = () => {
  fetch("http://localhost:3000/films/1")
    .then((response) => response.json())
    .then((film) => renderFilm(film));
};

const renderFilm = (film) => {
  ticketsSold = film.tickets_sold;
  const remainingTickets = film.capacity - film.tickets_sold;
  let buyTicketButton = "Sold Out!";
  if (remainingTickets > 0) {
    buyTicketButton = `<div class="ui orange button">Buy Ticket</div>`;
  }

  filmDiv.innerHTML = `
      <div id="title" class="title">[${film.title}]</div>
      <div id="runtime" class="meta">[${film.runtime}] minutes</div>
      <div class="content">
          <div class="description">
              <div id="film-info">[${film.description}]</div>
              <span id="showtime" class="ui label">${film.showtime}</span>
              <span id="ticket-num">${remainingTickets}</span> remaining tickets
          </div>
          <div class="extra content">
            ${buyTicketButton}
          </div>
      </div>`;
  let poster = qs(".four.wide.column");
  let posterPic = ce("div");
  posterPic.innerHTML = `<img id="poster" src="${film.poster}"/>`;
  poster.append(posterPic);
};

const clickHandler = () => {
  document.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.matches(".ui.orange.button")) {
      const filmData = {
        tickets_sold: ticketsSold + 1,
      };

      renderClick(filmData);
    }
  });
};

const renderClick = (filmData) => {
  let configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(filmData),
  };
  fetch("http://localhost:3000/films/1", configObj)
    .then((response) => response.json())
    .then((film) => renderFilm(film));
};

const fetchMoreFilms = () => {
  fetch("http://localhost:3000/films/")
    .then((response) => response.json())
    .then((films) => renderFilms(films));
};
renderFilms = (films) => {
  for (const flick of films) {
    renderFlick(flick);
  }
};

renderFlick = (flick) => {
  const filmItemDiv = ".film.item";

  filmItemDiv.innerText = flick.title;
};
