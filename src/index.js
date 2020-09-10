document.addEventListener("DOMContentLoaded", () => {
  fetchFilms();
  clickHandler();
});

// const url = "http://localhost:3000/films";
const ce = (tag) => document.createElement(tag);
const qs = (selector) => document.querySelector(selector);

const fetchFilms = () => {
  fetch("http://localhost:3000/films/1")
    .then((response) => response.json())
    .then((film) => renderFilm(film));
};

const renderFilm = (film) => {
  let filmDiv = qs(".card");
  filmDiv.innerHTML = `
  <div id="title" class="title">[${film.title}]</div>
  <div id="runtime" class="meta">[${film.runtime}] minutes</div>
  <div class="content">
      <div class="description">
          <div id="film-info">[${film.description}]</div>
          <span id="showtime" class="ui label">[${film.showtime}]</span>
          <span id="ticket-num">[X]</span> remaining tickets
      </div>
      <div class="extra content">
      <div class="ui orange button">Buy Ticket</div>
    </div>
  </div>
  </div>`;

  //   let filmPoster = qs("#poster");
  //   incomingPoster = document.createElement("IMG");
  //   incomingPoster = ${film.poster}
  //   filmPoster.append(incomingPoster);
  //poster, title, runtime, showtime, and available tickets
};
// const renderFilm = (film) => {
//   const filmDiv = qs(".filmItem");
// };

const clickHandler = () => {
  document.addEventListener("click", (e) => {
    // look for clicks on span
    const orangeButton = qs("div.ui-orange-button");
    console.log(e.target);
    if (e.target.matches(".ui orange button")) {
      console.log(e.target);
    }
  });
};
