var festival = new Festival();


var ulListForAddMovieNode = document.getElementById("put-movie");
var getButtonToCreateMovieNode = document.getElementById("create-movie-btn");
var addMovieToListInProgramNode = document.getElementById("movie-dropdown-list");
var getUlListForProgramNode = document.getElementById("program-list");
var selectProgramListNode = document.getElementById("program-dropdown-list")
var getCreateButtonProgramNode = document.getElementById("create-program-btn");
var getAddMovieToProgramButtonNode = document.getElementById("addMovieToProgram-btn");
var writeErrMessNode = document.getElementById("mess-error");




//get value of input
var titleNode = document.getElementById("title-id");
var lengthNode = document.getElementById("length-id");
var genreNode = document.getElementById("genre-id");
var dateNode = document.getElementById("date-id");

//function for create movie

function createMovie() {
    //create new movie
    var movieObject = new Movie (titleNode.value, lengthNode.value, genreNode.value);
    
    
    if(!titleNode.value){
        alert("Title is empty");
    } else if(!lengthNode.value){
        alert("Length is empty");
    } else if(genreNode.value === "-"){
        alert("You must chose genre");
    }
    
    var index = festival.addMovie(movieObject);
    //create li element to put list of movie
    var createLiElementNode = document.createElement("li");

    //add text to li
    createLiElementNode.textContent = movieObject.getData();

    //add li in list
    ulListForAddMovieNode.appendChild(createLiElementNode);

    //add movie to movie list in program
    var createOptionNode = document.createElement("option");
    createOptionNode.textContent = movieObject.getData();
    createOptionNode.setAttribute("value", index);
    addMovieToListInProgramNode.appendChild(createOptionNode);

    //clear value
    titleNode.value = "";
    lengthNode.value = "";
    genreNode.value = "-";
}

//create program

function createProgram() {
    
    var date = new Date (dateNode.value);

    if(date.getTime() < Date.now()) {
        writeErrMessNode.textContent = "Date can not be older than now."
        return;
    }

    var newProgram = new Program (date);

    var index = festival.addProgram(newProgram);
    //create li
    var liListOfProgram = document.createElement("li");

    //add content
    liListOfProgram.textContent = newProgram.getData();

    //add li in ul
    getUlListForProgramNode.appendChild(liListOfProgram);

    //add program to the list
    var createOptionProgramNode = document.createElement("option");
    createOptionProgramNode.textContent = newProgram.getData();
    createOptionProgramNode.setAttribute("value", index);
    selectProgramListNode.appendChild(createOptionProgramNode);
}

function addMovieToProgram() {
    //find value of movie-dropdown and program-dropdown
    var selectedMovieIndex = document.getElementById("movie-dropdown-list").value;
    var selectedProgramIndex = document.getElementById("program-dropdown-list").value;
    
    console.log(selectedMovieIndex, selectedProgramIndex);

    var selectedMovie = festival.listOfAllMovies[selectedMovieIndex];
    var selectedProgram = festival.listOfAllPrograms[selectedProgramIndex];


    var oldProgramData = selectedProgram.getData();

    selectedProgram.addMovie(selectedMovie);

    var allLiNode = document.querySelectorAll("li");

    allLiNode.forEach(function (li){
        if(li.textContent === oldProgramData){
            li.textContent = selectedProgram.getData();   
            
        }
    })
    
    document.getElementById("movie-dropdown-list").value = "-";
    document.getElementById("program-dropdown-list").value = "-";
    


}

getButtonToCreateMovieNode.addEventListener("click", createMovie);
getCreateButtonProgramNode.addEventListener("click", createProgram);
getAddMovieToProgramButtonNode.addEventListener("click", addMovieToProgram);


















