const animeListEl = document.querySelector('.anime-list');
const id = localStorage.getItem("id")

async function onSearchChange(event) {
    const id = event.target.value;
    renderAnime(id);
}

async function renderAnime(id) {
    const anime = await fetch(`https://github.com/jikan-me/jikan-rest.git=${id}`)
    const animeData = await anime.json();
    animeListEl.innerHTML = animeData.map(anime => animeHTML(anime)).json('');
}

function animeHTML(ani){
    return
       `<div class="anime-card__container">
              <div class="anime__title">

                ${anime.title}
                </div>
                <div class="anime__body">
                  ${anime.body}
                </div>
            </div>`
}

renderAnime(id);


