  
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

        this.getAdress = function () {
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

        this.getAdress = function () {
            var result = this.address.street + ", " + this.address.postalCode + " " +
            this.address.city + ", sum of all bets: " + + "eur"
        }

        this.sumOfAllBets = function () {
            var count = 0;
            for(var i = 0; i < this.listOfPlayers.length; i++){
                count += this.listOfPlayers[i].betAmount;
            }
        }
    }

    function BettingHouse (competition, numberOfPlayers) {
        if(!competition || !numberOfPlayers) {
            throw new Error ("Invalid competition input.")
        }
        
        this.competition = competition;
        this.numberOfPlayers = numberOfPlayers;
        this.listOfBettingPlaces = [];

        this.addPlayers = function (player) {
            if(!player || !(player instanceof Person)){
                throw new Error ("Invalid player input.")
            }
            return this.listOfBettingPlaces.push(player);
        }
    }

    function createPlayers (name, surname, dateOfBirth) {
        return new Player(name, surname, dateOfBirth);
    }

    function createBettingPlace(competition, numberOfPlayers) {
        return new BettingHouse (competition, numberOfPlayers);
    }

    //testing
    var person1 = new Person ("Sladjana", "Culum", "Dec 21 1992")
    var country1 = new Country ("SR" , 0.5, continent.ASIA)
    var player = new Player (person1, 1250, country1);
     

    console.log(person1.getAdress());
    console.log(player.getAdress());
    console.log(country1);

})();

// Football World Cup Winner, 2 betting places, 4 bets
// 	Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// 		SR, 1050.00 eur, Pera Peric, 29 years
// 		SR, 1050.00 eur, Pera Peric, 29 years
// Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// 		GR, 1050.00 eur, Pera Peric, 29 years
// 		SR, 1050.00 eur, Pera Peric, 29 years
// There are 3 bets on Serbia
