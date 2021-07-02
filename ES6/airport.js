"use strict";

(function () {

    console.log("Hi");


    function Person (name, surname) {
        if(!name || !surname) {
            throw new Error ("Input name or surname are required.");
        }
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.surname = surname.charAt(0).toUpperCase() + surname.slice(1);


        this.getData = function() {
            return `${this.name} ${this.surname}`;
        }
    }

    function Seat (number=(Math.floor(Math.random() * (100 - 10) + 10)), category = "e") {        
        if(!["b", "e"].includes(category)){
            throw new Error ("Invalid category input.");
        }
        this.number = number;
        this.category = category;

        this.getData = function () {
            return `${this.number}, ${this.category.toUpperCase()}`;
        }

    }

    function Passenger (person, seat) {
        if(!person || !(person instanceof Person)){
            throw new Error ("Invalid person input.");
        }

        if(!seat || !(seat instanceof Seat)){
            throw new Error ("Invalid seat input.");
        }

        this.person = person;
        this.seat = seat;

        this.getData = function () {
            return `${this.seat.getData()}, ${this.person.getData()}`;
        }
    }


    function Flight (relation, date) {
        if(!relation || !date) {
            throw new Error ("Input relation or date are required.")
        }
        this.relation = relation;
        this.date = new Date (date);
        this.listOfPassenger = [];

        this.addPassenger = function (passengers) {
            if(!passengers || !(passengers instanceof Passenger)){
                throw new Error ("Invalid passenger date.")
            }
            this.listOfPassenger.push(passengers);
        }

        this.getData = function () {
            let day = this.date.getDate();
            let month = this.date.getMonth() + 1;
            let year = this.date.getFullYear();
            let result  = ` ${day}.${month}.${year}, 
    ${this.relation}`
            this.listOfPassenger.forEach(function (passengers){
            result += `     
        ${passengers.getData()}`})        
            return result;
        }
    }

    function Airport () {
        this.name = "Nikola Tesla";
        this.listOfFlight = [];

        this.addFlight = function (flight) {
            if(!flight || !(flight instanceof Flight)){
                throw new Error ("Invalid flight date.");
            }
            this.listOfFlight.push(flight);
        }

        this.passengersNumber = function () {
            let count = 0;
            this.listOfFlight.forEach(function (flight) {
                count += `${flight.listOfPassenger.length}`;
            })
            return count;
        }
        this.getData = function () {
            let result = `Airport: ${this.name}, totalpassanger: ${this.passengersNumber()}
            `;
            this.listOfFlight.forEach(function(flight) {
                result += flight.getData();
            })
            return result;
        }
    }


    function createFlight (relation, date){
        return new Flight (relation, date);
    }

    function createPassenger (firstName, lastName, number, category){
        let person = new Person (firstName, lastName);
        let seat = new Seat (number, category);
        return new Passenger (person, seat); 
    }

    
    try {
    
    let nikolaTesla = new Airport();

    let belgradeNewYork = createFlight("Belgrade - New York", "Oct 25 2017");
    let barcelonaBelgrade = createFlight("Barcelona - Belgrade", "Nov 11 2017");

    let passengers1 = createPassenger("John", "Snow", 1, "b");
    let passengers2 = createPassenger("Cersei", "Lannister", 2, "b");
    let passengers3 = createPassenger("Daenerys", "Targaryen", 14);
    let passengers4 = createPassenger("Tyrion", "Lannister");
     
    belgradeNewYork.addPassenger(passengers1);
    belgradeNewYork.addPassenger(passengers2);
    barcelonaBelgrade.addPassenger(passengers3);
    barcelonaBelgrade.addPassenger(passengers4);

    nikolaTesla.addFlight(belgradeNewYork);
    nikolaTesla.addFlight(barcelonaBelgrade);
    
    console.log(nikolaTesla.getData());

    } catch (error) {
        console.log(`Error message: ${error.message}`);
    }
   
    }
)();