
function Festival () {
    this.listOfAllMovies = [];
    this.listOfAllPrograms = [];
}

Festival.prototype.addMovie = function(movie) {
    this.listOfAllMovies.push(movie);

    return this.listOfAllMovies.length - 1;
}

Festival.prototype.addProgram = function(program) {
    this.listOfAllPrograms.push(program);

    return this.listOfAllPrograms.length - 1;
}
// constructor for Movie
function Movie (title, length, genre) {
    this.title = title;
    this.length = parseInt(length);
    this.genreMovie = genre.charAt(0).toUpperCase() + genre.charAt(genre.length-1).toUpperCase();

    this.getData = function() {        
        return this.title + ", " + this.length + " min, " + this.genreMovie;
    }
}

//testing
//var some = new Movie ("supermen", "Action", 120);
//console.log(some);




function Program(date) {
    this.date = new Date (date);
    this.listOfMovies = [];

    this.addMovie = function(movie) {
        this.listOfMovies.push(movie);
    }
    
    this.getData = function () {
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        var date = day + "." + month + "." + year;
        var sumOfAllMovieDuration = 0;
        this.listOfMovies.forEach(function (duration) {
            sumOfAllMovieDuration += parseInt(duration.length);
        })
        var result = date + ", " + this.listOfMovies.length + ", duration: " + sumOfAllMovieDuration;

        return result;
       
    }

    this.getDate = function () {
        return this.date.toDateString()
    }


}

