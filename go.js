



let numberOfFilms; 



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt ('Сколько фильмов посмотрел?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt ('Сколько фильмов посмотрел?', '');
    } },
    rememberMyFilms: function () {

        for (let i = 0; i < 2; i++) {
    
            const a = prompt("Один из просмотренных фильмов?", ''),
                b = prompt("Kak ocenish?", '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                
            } else {
                console.log('error');
                i--;
            }        
        }
    },
   
    detectPersonalLevel: function () {if (personalMovieDB.count < 10) {
        console.log("Мало просмотрено");
    } 	else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log ("Вы классический зритель");	
    } 	else if (personalMovieDB.count >= 30) {
        console.log ("Киноман");
    }	else {
        console.log("Oshybka tvoju mat'");
    }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false
        } else {
            personalMovieDB.privat = true
        }
        
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {            
            let genres = prompt(`Введите любимые жанры через запятую ${i}`).toLowerCase();
            
            if (genres === '' || genres == null) {
                console.log('Nepravilno');
                i--;
            } else {
                personalMovieDB.genres = genres.split(',');
                personalMovieDB.genres.sort();
            }
             }
             personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1}:  внутри массива ${item}`);}
             )}
    

};
   







/*const answers = [];

answers[0] = prompt('Go?', '');
answers[1] = prompt('Ne Go?', '');
answers[2] = prompt('A esli Go?', '');

document.write(answers);*/