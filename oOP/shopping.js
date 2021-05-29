"use strict";

(function (){
    function Product (name, price, expirationDate) {
        if(!name || !price || !expirationDate) {
            throw new Error ("Input name, price or expirationDate are required.");
        }
        this.id = Math.floor(Math.random() * (100000 - 1) + 1);
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expirationDate = new Date (expirationDate);

        this.getInfo = function () {
            var result = this.name.charAt(0).toUpperCase() + 
            this.name.charAt(this.name.length - 1).toUpperCase() + this.id + ", "
            + this.name + ", " + this.price;
            return result;
        }

        
    }
        
    function ShoppingBag () {
        this.listOfProduct = [];

        this.addProduct = function (product) {
            if(!product || !(product instanceof Product)) {
                throw new Error ("Input is not valid.")
            }
            if (product.expirationDate > new Date()) {
                this.listOfProduct.push(product);
            } 
        }

        this.averageProduct = function () {
            var count = 0;
            
            for(var i = 0; i < this.listOfProduct.length; i++){
                count += parseFloat(this.listOfProduct[i].price);
            }
            return  (count / this.listOfProduct.length).toFixed(3);
        }

        this.getMostExpensive = function () {
            var mostExpensive = this.listOfProduct[0].price;
            console.log(mostExpensive);
            var index = 0;
            for (var i = 1; i < this.listOfProduct.length; i++){
                if(mostExpensive < this.listOfProduct[i].price){
                    mostExpensive = this.listOfProduct[i].price;
                    index = i;
                }

            }
            return "Most expensive product is: " + this.listOfProduct[index].getInfo();
        }

        this.calculateTotalPrice = function() {
            var totalPrice = 0;
            for(var i = 0; i < this.listOfProduct.length; i++){
                totalPrice += parseFloat(this.listOfProduct[i].price);
            }
            return totalPrice;
        }
    }

    function PaymentCard (accountBalans, status, validDate) {
        if(!accountBalans || !status || !validDate){
            throw new Error ("Input accountBalans, status or validDate are required.");
        }
        this.accountBalans = accountBalans.toFixed(2);
        this.status = status;
        this.validDate = new Date (validDate);
    }


    function checkoutAndBuy (shoppingBag, cardBalans) {
        var product = shoppingBag.calculateTotalPrice();
        var card = parseFloat(cardBalans.accountBalans);
        var result = "";
        if(card >= product) {
            result += "Your purchase is succsessful";
        } 
        else {
            result += ("You are missing: " + (product - card).toFixed(2));
            
        }
        
        return result;

    }

    //testing
    var product1 = new Product ("Banana", 10, "Oct 15 2025");
    // console.log(product1.getInfo());
    var product2 = new Product ("Kafa", 20, "Nov 25 2025");
    // console.log(product2.getInfo());
    var product3 = new Product ("Jafa", 5, "Nov 25 2025");
    // console.log(product3.getInfo());


    var shopping = new ShoppingBag ();
    shopping.addProduct(product1);
    shopping.addProduct(product2);
    shopping.addProduct(product3);
    // console.log(shopping);

    // console.log(shopping.averageProduct());
    console.log(shopping.getMostExpensive());
    // console.log(shopping.calculateTotalPrice());

    var payment1 = new PaymentCard (20, "inactiv", "Dec 25 2022");
    // console.log(payment1);
    var payment2 = new PaymentCard (1000, "activ", "Dec 25 2022");
    // console.log(payment2);

    var shop1 = checkoutAndBuy(shopping, payment1);
    console.log(shop1);
})();
