

function Festival() {
    this.listOfAllMovies = [];
    this.listOfProgram = [];
} 


function Movie (title, length, genre) {
    if(!title || !length || !genre) {
        throw new Error ("Title, length and genre are required.")
    }
    this.title = title;
    this.length = parseInt(genre);
    this.genre = genre;

}

Movie.prototype.getGenreShort = function() {
    var firstLetter = this.genre.charAt(0).toUpperCase();
    var lastLetter = this.genre.charAt(this.genre.length - 1).toUpperCase();

    return firstLetter + lastLetter;
}

Movie.prototype.getDate = function() {
    return this.title + ", " + this.length + "min," + this.genre;
}

function Program(date) {
    this.date = new Date (date);
    this.listOfMovies = [];
}

Program.prototype.addMovie = function(movie) {
    if(!movie || !(movie instanceof Movie)){
        throw new Error ("Invalid input.");
    }
    return this.listOfMovies.push(movie);
}

Program.prototype.sumOfAllMovies = function() {
    var sumOfMovies = 0;
    for (var i = 0; i < this.listOfMovies.length; i++){
        sumOfMovies += this.listOfMovies.length;
    }

    return sumOfMovies;
}

Program.prototype.getSumOfDuration = function() {

}
