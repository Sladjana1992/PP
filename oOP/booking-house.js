  
'use strict';


(function () {


    var continent = {
        EUROPA: "EU",
        ASIA: "AS",
        AFRICA: "AF",
        SOUTH_AMERICA: "SA",
        NORTH_AMERICA: "NA",
        AUSTRALIA: "AU"
    };


    function Country (name, odds, continent) {
        if(!name || !odds || !continent){
            throw new Error ("Input name, odds, or continent are required.");
        }
        this.continent = continent;
       
        this.name = name;
        this.odds = odds;
    }

    function Person (name, surname, dateOfBirth) {
        if(!name || !surname || !dateOfBirth) {
            throw new Error ("Input name or surname are required.");
        }
        this.name = name.charAt(0).toUpperCase() + name.slice(1);
        this.surname = surname.charAt(0).toUpperCase() + surname.slice(1);
        this.dateOfBirth = new Date (dateOfBirth);

        this.getDate = function () {
            var day = this.dateOfBirth.getDate();
            var month = this.dateOfBirth.getMonth() + 1;
            var year = this.dateOfBirth.getFullYear();
            var result = this.name + " " + this.surname + " " + day + "." + month + "." + year +".";
            return result;
        }

        this.getYear = function () {
            var today = new Date ();
            return (today.getFullYear() - this.dateOfBirth.getFullYear());
        }
    }

    function Player (person, betAmount, country) {
        if(!person || !(person instanceof Person)){
            throw new Error ("Invalid person input.");
        }
        if(!betAmount) {
            throw new Error ("Input betAmount is required.");
        }
        if(!country || !(country instanceof Country)){
            throw new Error ("Invalid country input.");
        }
        
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;

        this.getDate = function () {
            var result = this.country.name + ", " + (this.country.odds * this.betAmount).toFixed(2) + 
            " eur, " + this.person.name + " " + this.person.surname + " " + this.person.getYear() + 
            " years";
            return result;
        }
    }

    function Address (country, city, postalCode, street, number) {
        if(!country || !(country instanceof Country)){
            throw new Error ("Invalid country input.");
        }
        if(!city || !postalCode || !street || !number) {
            throw new Error ("Input city, postalCode, street or number are required.");
        }

        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;

        this.getAdress = function () {
            var result = this.street + " " + this.number +", " + this.postalCode + " " + this.city
            + this.country;
            return result;

        }
    }
    
    function BettingPlace (address) {
        if(!address || !(address instanceof Address)) {
            throw new Error ("Invalid address input.")
        }

        this.address = address;
        this.listOfPlayers = [];

        this.getData = function () {
            var result = this.address.street + ", "
        }
    }

    function BettingHouse (competition, numberOfPlayers) {
        if(!competition || !numberOfPlayers) {
            throw new Error ("Invalid competition input.")
        }
        
        this.competition = competition;
        this.numberOfPlayers = numberOfPlayers;
        this.listOfBettingPlaces = [];
    }

    //testing
    var person1 = new Person ("Sladjana", "Culum", "Dec 21 1992")
    var country1 = new Country ("SR" , 0.5, continent.ASIA)
    var player = new Player (person1, 1250, country1);
     

    console.log(person1.getDate());
    console.log(player.getDate());
    console.log(country1);

})();