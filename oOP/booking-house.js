
(function () {

    function Country (name, odds) {
        if(!name || !odds){
            throw new Error ("Input name or surname are required.");
        }
        this.listOfContinents = ["EU", "AS", "AF", "SA", "NA", "AU"];
        this.name = name;
        this.odds = odds;
    }

    function Person (name, surname, dateOfBirth) {
        if(!name || !surname || !dateOfBirth) {
            throw new Error ("Input name or surname are required.");
        }
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date (dateOfBirth);
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
    }
    
    function BettingPlace (address) {
        if(!address || !(address instanceof Address)) {
            throw new Error ("Invalid address input.")
        }

        this.address = address;
        this.listOfPlayers = [];
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

    console.log(person1);
})();