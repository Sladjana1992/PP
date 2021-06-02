'use strict';

(function () {

    function Genre (name) {
        if(!name) {
            throw new Error ("Input name is required.")
        }
        
        this.name = name;

        this.getDate = function () {
            var nameGenre = this.name.charAt(0).toUpperCase() + 
            this.name.charAt(this.name.length - 1).toUpperCase();

            return nameGenre;
        }
    }

    function Movie (title, genre, length){
        if(!title || !length) {
            throw new Error ("Input title or length are required.")
        }
        if(!genre || !(genre instanceof Genre)) {
            throw new Error ("Input genre is invalid.")
        }

        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    function Program (date, totalNumberOfMovie){
        if(!date || !totalNumberOfMovie) {
            throw new Error ("Input date or totalNumberOfMovie are required.")
        }

        this.date = new Date(date);
        this.totalNumberOfMovie = totalNumberOfMovie;
        this.listOfMovies = [];
    }

    function Festival (name, numberOfMoviesInAllPrograms) {
        if(!name || !numberOfMoviesInAllPrograms) {
            throw new Error ("Input name or numberOfMoviesInAllPrograms are required.")
        }

        this.name = name;
        this.numberOfMoviesInAllPrograms = numberOfMoviesInAllPrograms;
        this.listOfProgram = [];
    }

    // var genre = new Genre ("sara");
    // console.log(genre.getDate());
   



})();