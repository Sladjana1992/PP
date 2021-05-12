// Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared for 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

function Recipe (name, typeOFcusine, complexity, listOfIngredients, preparingTime, preparingInstruction) {
    this.nam = name;
    this.cusine = typeOFcusine;
    this.comp = complexity;
    this.ingredients = listOfIngredients;
    this.time = preparingTime;
    this.prep = preparingInstruction;
    
    this.printIngre = function (){
        console.log(listOfIngredients);
    };
    this.prepTime = function () {
        return preparingTime  < 15;
    };
    this.changeType = function (newType) {
        this.cusine = newType;
    };
    this.printNewList = function (deletedIngre) {
        var list = [];
        for (var i = 0; i < listOfIngredients.length; i++){
            if(listOfIngredients[i] !== deletedIngre){
                list[list.length] = listOfIngredients[i];
            }
        }
        this.ingredients = list;
    }

}

var newRecept = new Recipe (
    "pica",
    "italijanska",
    4,
    ["kecap", "kvasac", "sir", "salama"],
    12,
    "umestit testo"
);

console.log(newRecept);

console.log(newRecept.ingredients);

newRecept.changeType("francuska")
console.log(newRecept);

newRecept.printNewList("kecap")
console.log(newRecept.ingredients);
console.log(newRecept);

// Create an object that represents your favourite coffee. Please include coffee name, strength, 
// flavour, milk, sugar, … everything you like!

var coffee = {
    name: "irish",
    strength: "strong",
    flavour: "chocolate",
    milk: true,
    sugar: true,
};

console.log(coffee);
console.log(coffee.flavour);

// Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 


var favouriteMovie = {
    title: "Pirates of the Caribbean",
    actor: {
        firstName: "Johnny",
        lastName: "Depp",
    },
    director: {
        firstName: "Gore",
        lastName: "Verbinski",
    },
    genre: "action",
    popularity: 10,
    series: 7,
};

console.log(favouriteMovie);
console.log(favouriteMovie.actor.lastName);

// Write a function that creates an object that represents a project. Each project is described by: description,  
// programming language, git repository, boolean status that says if the project is in development or not. 
// Add a method that prints out the project's repository,  a method that checks if the project is written in 
// JavaScript as well as a method that checks if the project is in development or not.

function project(description, programmingLang, gitRepo, development){
    return {
        desc: description,
        progr: programmingLang,
        url: gitRepo,
        isDev: development,
        printRepos: function () {
            console.log(url);
        },
        checkProgr: function () {
            return this.progr === "JavaScript";
        },
        ckeckIsDev: function () {
            if(this.isDev) {
                return "The project is in dev.";
            } else {
                return "THe project is not in dev.";
            }
        },
    };
}

var calculator = project("calculator", "JavaScript", "http://github.com", true);
console.log(calculator);
console.log(calculator.ckeckIsDev);