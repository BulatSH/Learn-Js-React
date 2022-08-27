/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const adBlocks = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movies = document.querySelector('.promo__interactive-list'),
        addMovie = document.querySelector('.adding__input'),
        addMovieBtn = document.querySelector('form button'),
        checkbox = document.querySelector('[type="checkbox"]');

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const deleteAdBlock = (arr) => {
        adBlocks.forEach(adBlock => {
            adBlock.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'Драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")'; // не ../ т.к. js формируется относительно html
    };

    function addMovies () {
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

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1); // Удаляем i ый элемент количеством 1

                addMovies();
            });
        });
    }

    function capitalize () {
        return addMovie.value.charAt(0).toUpperCase() + addMovie.value.slice(1);
    }

    addMovieBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (addMovie.value !== '') {
            (addMovie.value.length <= 21) ? movieDB.movies.push(capitalize()) : 
            movieDB.movies.push(`${capitalize().slice(0, 21)}...`);
        }

        if (checkbox.checked) {
            console.log('Добавляем любимый фильм');
            checkbox.checked = false;
        }

        addMovies();

        addMovie.value = '';
    });

    deleteAdBlock(adBlocks);
    addMovies();
    makeChanges();
});
