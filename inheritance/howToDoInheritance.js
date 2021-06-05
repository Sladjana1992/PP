// person constructor function

function Person (name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.fullName = function () {
    return this.name + " " + this.surname;
};

Person.prototype.printInfo = function () {
    console.log(this.fullName);
}

var pera = new Person ("Pera", "Peric");
var john = new Person ("John", "Peric");

//inheritance (nasledjivanje)

function Programmer (name, surname, favoriteLanguange) {
    Person.call(this, name, surname);
    this.favoriteLanguange = favoriteLanguange;
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

var peraProgramer = new Programmer ("Pera", "Peric", "js");
console.log(peraProgramer);

function BackEndProgrammer (name, surname, favoriteLanguange, datebase) {
    Programmer.call(name, surname, favoriteLanguange);
    this.datebase = datebase;
} 

BackEndProgrammer.prototype = Object.create(Programmer.prototype);
BackEndProgrammer.prototype.constructor = BackEndProgrammer;

var peraBProgramer = new BackEndProgrammer ("Pera", "Peric", "js", "monoDb");
console.log(peraBProgramer);