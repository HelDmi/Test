/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const divPromo      = document.querySelector('.promo__adv');
const divPromoTitle = divPromo.querySelector('.promo__adv-title');
const divPromoImg   = divPromo.querySelectorAll('img');

divPromoTitle.remove();
divPromoImg.forEach( item => item.remove() );



const divPromoBG            = document.querySelector('.promo__bg');
const divPromoGenre         = divPromoBG.querySelector('.promo__genre');
divPromoGenre.textContent   = "Драма";

divPromoBG.style.backgroundImage = "url('/project/img/bg.jpg')";

// console.log(divPromoGenre);



const divPromoInteractive   = document.querySelector('.promo__interactive');
const allUlelement          = divPromoInteractive.querySelectorAll('li');

let arrMovies = movieDB.movies;
arrMovies.sort();

let indexArr = 0;
let chekParametr = true;

allUlelement.forEach( (item,index) => {
    
    let numbering = index + 1;
    item.textContent = numbering + ' ' + arrMovies[index];
    let deleteDiv = document.createElement("div");
    deleteDiv.className = "delete";
    item.append(deleteDiv);


} );




// console.log(movieDB.movies);


// divPromoTitle.remove();

// divPromoTitle.forEach( elem => elem.remove);

// console.log(divPromo);
// console.log(divPromoTitle);



