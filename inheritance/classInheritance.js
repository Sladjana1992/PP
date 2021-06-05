class Person {
    constructor (name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    sayHi() {
        console.log("Hi");
    }

    getInfo() {
        return "Hi I`m " + this.name;
    }
}

class Programmer extends Person {
    constructor (name, surname, age, position, experience, language){
        super(name, surname, age)

        this.position = position;
        this.experience = experience;
        this.language = language;
    }

    getInfo() {
        var personInfo = super.getInfo()
        console.log(personInfo + " " + this.language);
    }

    writeCode() {
        console.log("Typing " + this.language + " code.");
    }
}

class Tester extends Person {
    constructor(name, surname, age, position, experience) {
        super (name, surname, age)

        this.position = position;
        this.experience = experience;
    }

    test() {
        console.log(this.position, "Bug detected do it again");
    }

    getInfo() {
        console.log(super.getInfo(), this.position);
    }
}

var peraPro = new Programmer ("Pera", "Peric", 30, "Frontend", 1, "JavaScript");
var lazaTester = new Tester ("Laza", "Lazic", 30, "QA", 3)

lazaTester.getInfo();
lazaTester.test();
peraPro.getInfo();
peraPro.writeCode();