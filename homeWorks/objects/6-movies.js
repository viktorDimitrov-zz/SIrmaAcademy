function collectMovies(arrCommands) {
    for (const line of arrCommands) {
        if (line.includes('addMovie')) {
            let words = line.split(' ');
            words.shift();
            let movieName = words.join(' ');

            let movie = { name: movieName };
            //console.log(movieName);
        }
    }
}


collectMovies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Spinderman 2onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);

collectMovies([
    'addMovie The Avengers',
    'addMovieSpiderman',
    'The Avengers directedByPeshoPeshov',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo',
    'The Avengers directedBy Anthony Russo',
]
);