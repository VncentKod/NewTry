import { dataList } from "./films.js";

// Make the Data Usable.
const filmList = dataList.Movie;



// Create the grid
let html = '';
filmList.forEach((film)=> { 
    console.log(film._OriginalTitle);
    html += `<div class="miniature js-miniature" data-film-number="${film._Number}">
    <div class="image-box">
        <img class="miniature-img" src="images/${film._Picture}" alt="">
    </div>
    <div>
        <p class="miniature-title">${film._TranslatedTitle}</p>
        <p class="miniature-theme">${film._Category}</p>
        </div>
    </div>`
})
document.querySelector('.grid-film-selection').innerHTML = html;


const miniatureElement = document.querySelectorAll('.js-miniature');

miniatureElement.forEach((miniature) => {
    miniature.addEventListener('click',() => {
        const pickedFilm = miniature.dataset.filmNumber;
        document.location.href=`film-page.html?film=${pickedFilm}`;
    })
})

