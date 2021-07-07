  
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
        if(!country && !city || !postalCode || !street || !number) {
            throw new Error ("Input country, city, postalCode, street or number are required.");
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
            this.address.city + ", sum of all bets: " + this.sumOfAllBets() + "eur"

            return result;
        }

        this.sumOfAllBets = function () {
            var count = 0;
            for(var i = 0; i < this.listOfPlayers.length; i++){
                count += this.listOfPlayers[i].betAmount;
            }
            return count;
        }
        this.addPlayers = function (player) {
            return this.listOfPlayers.push(player);
        }

    }

    function BettingHouse (competition) {
        if(!competition) {
            throw new Error ("Invalid competition input.")
        }
        
        this.competition = competition;
        this.numberOfPlayers = 0;
        this.listOfBettingPlaces = [];

        // this.addPlayers = function (player) {
        //     if(!player || !(player instanceof Person)){
        //         throw new Error ("Invalid player input.")
        //     }
        //     return this.listOfBettingPlaces.push(player);
        // }

        this.addBatingPlaces = function(bettingPlace) {
            this.listOfBettingPlaces.push(bettingPlace);
            // this.numberOfPlayers = bettingPlace.listOfPlayers.length;
            // this.sumOfAllBets = bettingPlace.sumOfAllBets();
        }

        
        this.getDate = function() {
            var second = "";
            for (var i = 0; i < this.listOfBettingPlaces.length; i++){
                second += this.listOfBettingPlaces[i].getAdress();
            }
            var result = this.competition + ", " + this.listOfBettingPlaces.length + " betting places, "
            + this.numberOfPlayers.length + "\n";
            this.listOfBettingPlaces.forEach(function (bettingPlaceElement) {
                result += '\t' + bettingPlaceElement.getData() + '\n'
                bettingPlaceElement.listOfPlayers.forEach(function (playerElement) {
                    result += '\t\t' + playerElement.getData() + '\n'
                })        
            })       
            return result;

            return result;
        }
       
    }




    function createPlayers (person, betAmount, country) {
        return new Player(person, betAmount, country);
    }

    function createBettingPlace(address) {
        return new BettingPlace (address);
    }

    

    //testing

    var createBettingHouse = new BettingHouse("Football World Cup Winner", 4);

    var serbia = new Country ("SR" , 0.5, continent.EUROPA);
    var italia = new Country ("IT", 1.3, continent.EUROPA);
    var gana = new Country ("GA", 1.05, continent.AFRICA);

    var pera = new Person ("Pera", "Peric", "Nov 12 1982");
    var marko = new Person ("Marko", "Markovic", "Oct 25 1975");
    var ilija = new Person ("Ilija", "Ilic", "Jan 02 1997");
    var nikola = new Person ("Nikola", "Nikolic", "Feb 05 1991");

    var player1 = createPlayers(pera, 1000, serbia);
    var player2 = createPlayers(marko, 1000, serbia);
    var player3 = createPlayers(ilija, 1000, italia);
    var player4 = createPlayers(nikola, 1000, gana);

    var address1 = new Address ("SR", "Beograd", "11000", "Nemanjina", "11");
    var address2 = new Address ("SR", "Novi Sad", "11000", "Zeleznicka", "3");

    var bettingPlace1 = createBettingPlace(address1);
    var bettingPlace2 = createBettingPlace(address2);

    bettingPlace1.addPlayers(player1);
    bettingPlace1.addPlayers(player2);
    bettingPlace2.addPlayers(player3);
    bettingPlace2.addPlayers(player4);



    createBettingHouse.addBatingPlaces(bettingPlace1);
    createBettingHouse.addBatingPlaces(bettingPlace2);

    console.log(createBettingHouse.getDate());
    
    // console.log(person1.getAdress());
    // console.log(player.getAdress());
  

})();

// Football World Cup Winner, 2 betting places, 4 bets
// 	Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// 		SR, 1050.00 eur, Pera Peric, 29 years
// 		SR, 1050.00 eur, Pera Peric, 29 years
// Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
// 		GR, 1050.00 eur, Pera Peric, 29 years
// 		SR, 1050.00 eur, Pera Peric, 29 years
// There are 3 bets on Serbia
