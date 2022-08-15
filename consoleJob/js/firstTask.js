'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let oneOfTheLastFirstFilm = '',
    oneOfTheLastFirstFilmRate = '';
let questions = 2;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// point: for (let i = 0; i < questions; i++) {
//     oneOfTheLastFirstFilm = prompt('Один из последних просмотренных фильмов?', '');
//     oneOfTheLastFirstFilmRate = prompt('На сколько оцените его?', '');

//     if (oneOfTheLastFirstFilm != null && oneOfTheLastFirstFilmRate != null && 
//         oneOfTheLastFirstFilm != '' && oneOfTheLastFirstFilmRate != '' && oneOfTheLastFirstFilm.length < 50) {
//         personalMovieDB.movies[oneOfTheLastFirstFilm] = oneOfTheLastFirstFilmRate;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

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

do {
    oneOfTheLastFirstFilm = prompt('Один из последних просмотренных фильмов?', '');
    oneOfTheLastFirstFilmRate = prompt('На сколько оцените его?', '');

    if (oneOfTheLastFirstFilm != null && oneOfTheLastFirstFilmRate != null && 
        oneOfTheLastFirstFilm != '' && oneOfTheLastFirstFilmRate != '' && oneOfTheLastFirstFilm.length < 50) {
        personalMovieDB.movies[oneOfTheLastFirstFilm] = oneOfTheLastFirstFilmRate;
        console.log('done');
        questions--;
    } else {
        console.log('error');
    }
} while (questions !== 0);

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);
