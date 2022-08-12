const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const oneOfTheLastFirstFilm = prompt('Один из последних просмотренных фильмов?', ''),
    oneOfTheLastFirstFilmRate = prompt('На сколько оцените его?', '');

const oneOfTheLastSecondFilm = prompt('Один из последних просмотренных фильмов?', ''),
    oneOfTheLastSecondFilmRate = prompt('На сколько оцените его?', '');

personalMovieDB.movies[oneOfTheLastFirstFilm] = oneOfTheLastFirstFilmRate;
personalMovieDB.movies[oneOfTheLastSecondFilm] = oneOfTheLastSecondFilmRate;
