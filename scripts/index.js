import { filmList } from "./films.js";

// Make the Data Usable.


createGrid(filmList);

// Create the grid
function createGrid(filmListSelected) {
    let html = '';
    filmListSelected.forEach((film)=> { 
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
}

// Add the click event on a button in order to reformat the grid
const menuBarButtonList = document.querySelectorAll('.js-menu-bar-button');
menuBarButtonList.forEach((button) => {
    button.addEventListener('click', () => {
        const filmTypeToPass = button.dataset.typeFilm;
        makeButtonUnselected() // Unset every button
        button.classList.add('selected-button') // Set only the button that we want to.
        getSelectedFilm(filmTypeToPass); // Look at the data of the button to display a correct grid
    })})

function getSelectedFilm(filmType) {
    let futureSelectedFilm = []
    if (filmType === "All") {
        futureSelectedFilm = filmList
    } else {
        filmList.forEach((film) => {
            if (film._Category.includes(filmType)) {
                futureSelectedFilm.push(film)
            }
        })
    }
    createGrid(futureSelectedFilm);
}

function makeButtonUnselected() {
    menuBarButtonList.forEach((everyButton) => {
        everyButton.classList.remove('selected-button');
    }) 
}
