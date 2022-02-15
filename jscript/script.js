 "use strict";

 
const number0films  = +prompt('Скольок фильмов вы уже посмотрели', '');



 const personalMoviedb = {
    count: number0films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


 const a = prompt ('Один из последних просмотренных фильмов?', ''),
    b = prompt ('На сколько очените его?', ''),
    c = prompt ('Один из последних просмотренных просмотренных фильмов?', ''),
    d = prompt ('На сколько очените его?', '');

personalMoviedb.movies[a]=b;
personalMoviedb.movies[c]=d;

console.log(personalMoviedb);

   




