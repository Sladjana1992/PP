"use strict";

(function () {

    console.log("Hi");


    function Person (name, surname) {
        if(!name || !surname) {
            throw new Error ("Input name or surname are required.");
        }
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.surname = surname.charAt(0).toUpperCase() + surname.slice(1);


        this.getData = function () {
            return this.name + " " + this.surname;
        }
    }

    function Seat (number, category) {
        category = category || "e";
        
        if(!["b", "e"].includes(category)){
            throw new Error ("Invalid category input.");
        }
        this.number = number || (Math.floor(Math.random() * (100 - 10) + 10));
        this.category = category;

        this.getData = function () {
            return this.number + ", " + this.category.toUpperCase();
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
            return this.seat.getData() + ", " + this.person.getData();
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
            var day = this.date.getDate();
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();
            var result  = "\t" + day + "." + month + "." + year + ", " + this.relation + "\n";
            this.listOfPassenger.forEach(function (passengers){
                result += "\t\t" + passengers.getData() + "\n";
            })
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
            var count = 0;
            this.listOfFlight.forEach(function (flight) {
                count += flight.listOfPassenger.length;
            })
            return count;
        }
        this.getData = function () {
            var result = "Airport: " + this.name + ", " + "total passanger: " + this.passengersNumber() + "\n";
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
        var person = new Person (firstName, lastName);
        var seat = new Seat (number, category);
        return new Passenger (person, seat); 
    }

    
    try {
    
    var nikolaTesla = new Airport();

    var belgradeNewYork = createFlight("Belgrade - New York", "Oct 25 2017");
    var barcelonaBelgrade = createFlight("Barcelona - Belgrade", "Nov 11 2017");

    var passengers1 = createPassenger("John", "Snow", 1, "b");
    var passengers2 = createPassenger("Cersei", "Lannister", 2, "b");
    var passengers3 = createPassenger("Daenerys", "Targaryen", 14);
    var passengers4 = createPassenger("Tyrion", "Lannister");
     
    belgradeNewYork.addPassenger(passengers1);
    belgradeNewYork.addPassenger(passengers2);
    barcelonaBelgrade.addPassenger(passengers3);
    barcelonaBelgrade.addPassenger(passengers4);

    nikolaTesla.addFlight(belgradeNewYork);
    nikolaTesla.addFlight(barcelonaBelgrade);
    
    console.log(nikolaTesla.getData());

    } catch (error) {
        console.log("Error message: " + error.message);
    }
   
    }
)();