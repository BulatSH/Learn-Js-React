'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let questions = 2;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms () {
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
}

rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}` , '');
    }
}

writeYourGenres();

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
