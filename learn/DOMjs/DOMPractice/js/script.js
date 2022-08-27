/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const adBlocks = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movies = document.querySelector('.promo__interactive-list');

adBlocks.forEach(adBlock => {
    adBlock.remove();
});

genre.textContent = 'Драма';

poster.style.backgroundImage = 'url("img/bg.jpg")'; // не ../ т.к. js формируется относительно html

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movies.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((movie, i) => {
    movies.innerHTML += `
        <li class="promo__interactive-item">
            ${i + 1} ${movie}
            <div class="delete"></div>
        </li>
    `;
});


