function Movie (
    name,
    year,
    durationInMinute,
    genre,
    actors,
    director,
    wonOscar,
    rate,
    story,
    language
) {
    this.name = name;
    this.year = year;
    this.durationInMinute = durationInMinute;
    this.genre = genre;
    this.actors = actors;
    this.director = director;
    this.wonOscar = wonOscar;
    this.rate = rate;
    this.story = story;
    this.language = language;
    
    this.printMovieTitle = function () {
        return "Movie name: " + this.name, "director: " + this.director, "Actors: " + this.firstName + 
        " " + this.lastName;
    };

    this.changeGenre = function (newGenre) {
        return this.genre = newGenre;
    };

    this.deleteActor = function (changeName) {
        var list = [];
        for (var i = 0; i < actors.length; i++) {
            if (actors[i].firstName !== changeName.firstName && actors[i].lastName !== changeName.lastName){
                list[list.length] = actors[i];
            }
        }
        this.actors = list;
    };

    this.isWonOscar = function () {
        if(wonOscar) {
            return "The movie won the Oscar."
        } else {
            return "THe movie is not won the Oscar."
        }
    };
}

var newMovie = new Movie (
    "Titanik",
    "1997",
    194,
    [
        "drama",
        "romance"
    ],
    [
        {
            firstName: "Leondardo",
            lastName: "DiCaprio"
        },
        {
            firstName: "Kate",
            lastName: "Winslet"
        },
        {
            firstName: "Billy",
            lastName: "Zane"
        },
        {
            firstName: "Gloria",
            lastName: "Stuart"
        }
    ],
    [
        {
            firstName: "James",
            lastName: "Cameron"
        }
    ],
        true,
        7.8,
    [
        "84 years later, a 100 year-old woman named Rose DeWitt Bukater",
        "tells the story to her granddaughter Lizzy Calvert, Brock Lovett,",
        "Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh",
        "about her life set in April 10th 1912, on a ship called Titanic when",
        "young Rose boards the departing ship with the upper-class passengers and her mother",
        "Ruth DeWitt Bukater, and her fiancé, Caledon Hockley."
    ],
        "English"
);

console.log(newMovie);