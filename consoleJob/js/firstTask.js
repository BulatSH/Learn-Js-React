'use strict';

let questions = 2;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < questions; i++) {
            const oneOfTheLastFirstFilm = prompt('Один из последних просмотренных фильмов?', '').trim(), // trim() - метод, который обрезает пробелы в начале и в конце строки
            oneOfTheLastFirstFilmRate = prompt('На сколько оцените его?', '');
        
            if (oneOfTheLastFirstFilm != null && oneOfTheLastFirstFilmRate != null && 
                oneOfTheLastFirstFilm != '' && oneOfTheLastFirstFilmRate != '' && oneOfTheLastFirstFilm.length < 50) {
                personalMovieDB.movies[oneOfTheLastFirstFilm] = oneOfTheLastFirstFilmRate;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
        console.log(personalMovieDB.private);
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) { // i <= 3
            // let genre = prompt(`Ваш любимый жанр под номером ${i}` , '')

            // if (genre === '' || genre === 'null') {
            //     console.log('Вы ввели некорректные данные или не ввели их вообще');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            let genres = prompt(`Введите ваши любимые жанры через запятую` , '').toLocaleLowerCase();

            if (genres === '' || genres === 'null') {
                console.log('Вы ввели некорректные данные или не ввели их вообще');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort(); // метод sort() учитывает регистр, сначала большие буквы
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};


// Разные варианты циклов
// while (questions !== 0) {
//     oneOfTheLastFirstFilm = prompt('Один из последних просмотренных фильмов?', '');
//     oneOfTheLastFirstFilmRate = prompt('На сколько оцените его?', '');

//     if (oneOfTheLastFirstFilm != null && oneOfTheLastFirstFilmRate != null && 
//         oneOfTheLastFirstFilm != '' && oneOfTheLastFirstFilmRate != '' && oneOfTheLastFirstFilm.length < 50) {
//         personalMovieDB.movies[oneOfTheLastFirstFilm] = oneOfTheLastFirstFilmRate;
//         console.log('done');
//         questions--;
//     } else {
//         console.log('error');
//     }
// }

// do {
//     oneOfTheLastFirstFilm = prompt('Один из последних просмотренных фильмов?', '');
//     oneOfTheLastFirstFilmRate = prompt('На сколько оцените его?', '');

//     if (oneOfTheLastFirstFilm != null && oneOfTheLastFirstFilmRate != null && 
//         oneOfTheLastFirstFilm != '' && oneOfTheLastFirstFilmRate != '' && oneOfTheLastFirstFilm.length < 50) {
//         personalMovieDB.movies[oneOfTheLastFirstFilm] = oneOfTheLastFirstFilmRate;
//         console.log('done');
//         questions--;
//     } else {
//         console.log('error');
//     }
// } while (questions !== 0);
