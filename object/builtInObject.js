// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

console.log("---------------------Exer 1 -----------------------");

var duplicates = function (arr) {
    var newArr =[];
        arr.forEach( function(el) {
            newArr.push(el, el);
        });
    return newArr;
}

console.log(duplicates([2, 4, 7, 11, -2, 1]));


// 2. Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]

console.log("---------------------Exer 2 -----------------------");

var removeDupli = function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i]);
        }
    }
    
    newArr.sort(function (a, b) {
        return a - b;
      });
    
    return newArr;
    
}


console.log(removeDupli([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));

//3a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

console.log("---------------------Exer 3a -----------------------");

function check (arr) {
    var oddNumber = false;
    if (arr.length % 2 !== 0) {
        oddNumber = true;
    }
    return oddNumber;
}

var givenArr = check([1, 2, 9, 2, 1]);
var givenArr1 = check([1, 2, 2, 1]);
var givenArr2 = check([]);
console.log(givenArr);
console.log(givenArr1);
console.log(givenArr2);


// something else

function oddElement (array) {
    var finedEle = array.find(function (element){
        return element % 2 !== 0;
    });
    if (finedEle) {
        return true;
    } else {
        return false;
    }
} 

var element = oddElement([1, 2, 9, 2, 1]);
var element1 = oddElement([6, 2, 2, 4]);
var element2 = oddElement([]);
console.log(element);
console.log(element1);
console.log(element2);

// 3b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

console.log("---------------------Exer 3b -----------------------");

var lessMiddleEle = function (array) {
    if (array.length % 2 === 0) {
        return "Error."
    }
    var middle = Math.floor(array.length / 2);
    var count = 0;
    for (var i = 0; i < array.length; i++){
        if(array[i] < array[middle]){
            count++;
        }
    }
    return count;

}

console.log(lessMiddleEle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));

// 4. Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }

console.log("---------------------Exer 4 -----------------------");

function smallEl (arr) {
    var obj = {};
    var min = Math.min(...arr);
    var minLastIndex = arr.lastIndexOf(min);
    obj = {min, minLastIndex}
    return obj;
}

console.log(smallEl([1, 4, -2, 11, 8, 1, -2, 3]));

// 5a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]

console.log("---------------------Exer 5a -----------------------");


function givenArray (arr, a) {
    var newArr = arr.filter(function (el) {
        return el < a
    });
    return newArr;
}

console.log(givenArray([2, 3, 8, -2, 11, 4], 6));

// 5b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

console.log("---------------------Exer 5b -----------------------");


function findEl (arr) {
    var a = "pro";
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if(a === arr[i].toLowerCase().slice(0 , 3)) {
            newArr.push(arr[i]);
        } 
    }
    return newArr;
}

console.log(findEl(["JavaScript", "Programming", "fun", "product"]));

// 5c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.

console.log("---------------------Exer 5c -----------------------");

function someFunc (arr, str) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if(str === arr[i].toLowerCase().slice(0, 4)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function callBack (arr, str, func){
    return func(arr, str);
}

console.log(callBack(["JAva", "jaVa", "programming", "something"], "java", someFunc));

// 6a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [
// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]

console.log("---------------------Exer 6a -----------------------");

function List (name, price) {
    this.name = name,
    this.price = price
}

var list = [];
var list1 = new List ("milk", 85);
var list2 = new List ("sugar", 70);
var list3 = new List ("oil", 155);
var list4 = new List ("bread", 55);
list.push(list1);
list.push(list2);
list.push(list3);
list.push(list4);
console.log(list);

//6b. Write a function that calculates the total price of your shopping list.

console.log("---------------------Exer 6b -----------------------");

function totalPrice (total) {
    var sum = 0;
    for (var i = 0; i < total.length; i++){
        sum += total[i].price;
    }
    return "Total price is: " + sum;
}

console.log(totalPrice(list));

// 6c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.

console.log("---------------------Exer 6c -----------------------");

var average = function (shopping) {
    var sum = 0;
    for (var i = 0; i < shopping.length; i++){
        sum += shopping[i].price;
    }
    return sum;
}

var avg = average(list) / list.length;
console.log(avg.toFixed(3));

// 6d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.

console.log("---------------------Exer 6d -----------------------");

list.sort(function (a, b) {
    return a.price - b.price;
})

var mostExe = list[list.length - 1].name.toUpperCase();
console.log(mostExe);

// 7a. Write a function that checks if a given string is written in all capitals.

console.log("---------------------Exer 7a -----------------------");

function check (string){
    return string === string.toUpperCase();
}

console.log(check("Something"));
console.log(check("SOMETHING"));


// 7b. Write a function that checks if a given string contains any digits.

console.log("---------------------Exer 7b -----------------------");


function checkDigit (string) {
    var count = 0;
    for (var i = 0; i < string.length; i++){
        if (isNaN(parseInt(string[i])) !== true){
            count++;
        } 
    }
    if (count > 0){
        return "Contains digits."
    } else {
        return "Doesnt contains digits."
    }
}

console.log(checkDigit("house1"));
console.log(checkDigit("house"));

// 7c.Write a function that checks if a given string is a valid hexadecimal color.

console.log("---------------------Exer 7c -----------------------");

function valid (string) {
    var newString = "";
    if (string.length > 7) {
        return "The given string has more than 7 digits."
    } else if (string[0] !== "#") {
        return "Fist digit must be #."
    } else {
        newString += string[0];
        for (var i = 1; i <= 6; i++){
            if((string[i] === "A" || string[i] === "a") || 
            (string[i] === "B" || string[i] === "b") || (string[i] === "C" || string[i] === "c") ||
            (string[i] === "D" || string[i] === "d") || (string[i] === "E" || string[i] === "e") ||
            (string[i] === "F" || string[i] === "f") || (string[i] >= 0 || string[i] <= 9)){
                newString += string[i];
            } else {
                return "Some digit is not correct. Mast be between A-Z, a-z and 0-9."
            }
        }
    }
    return newString;
}


console.log(valid("#4ae57e"));
console.log(valid("#4aesse"));

// 7d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.

console.log("---------------------Exer 7d -----------------------");

function ifNumberBelongs (number) {
    if (number >= 1900 && number <= 2018){
        return true;
    } else {
        return false;
    }
}

console.log(ifNumberBelongs(1950));
console.log(ifNumberBelongs(2021));


// 7e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).

console.log("---------------------Exer 7e -----------------------");

function validator(stringValidator, passwordValidator, colorValidator, yearValidator) {
    return {
        string: check(stringValidator),
        password: checkDigit(passwordValidator),
        color: valid(colorValidator),
        year: ifNumberBelongs(yearValidator),
    }
}

console.log(validator("Programming", "sara2011", "#457fda", 2015));
console.log(validator("SAra", "sara", "#457fdb", 2015));
console.log(validator("Sara", "sara2011", "#47fds", 2015));
console.log(validator("Sara", "sara2011", "#457fds", 2025));

// 8. Write a function that calculates a number of days to your birthday.

// Input: 25 February
// Output: 5 days

console.log("---------------------Exer 8 -----------------------");


function calculator1(birthday) {
    var dayToday = new Date ();
    var dayBirthday = new Date (birthday);

    var restDays = dayBirthday.getTime() - dayToday.getTime();

    return Math.round(restDays / (1000 * 3600 * 24)) + " days.";
}

console.log(calculator1("12/21/2021"));

// 9. Write a function that for a given departure and arrival time calculates the time the trip
// takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds

console.log("---------------------Exer 9 -----------------------");

function airplan (departure, arrival) {
    var timeDepar = new Date (departure);
    var timeArr = new Date (arrival);
    var hoursLeft = timeArr.getHours() - timeDepar.getHours();
    var minutesLeft = timeArr.getMinutes() - timeDepar.getMinutes();
    var secondsLeft = timeArr.getSeconds() - timeDepar.getSeconds();

    return hoursLeft + " hours " + minutesLeft + " minutes " + secondsLeft + " seconds"; 
}

console.log(airplan("May 15, 21 8:22:13", "May 15, 21 11:43:22"));

// something difrent

function newAirplan (departure, arrival) {
    var hoursDep = departure.split(":");
    var hoursAri = arrival.split(":");

    var restSec = 0;
    if(hoursAri[2] > hoursDep[2]){
        restSec = hoursAri[2] - hoursDep[2];
    } else {
        restSec = hoursAri[2] - hoursDep[2] + 60;
    }

    var restMin = 0;
    if(hoursAri[1] > hoursDep[1]){
        restMin = hoursAri[1] - hoursDep[1];
    } else {
        restMin = hoursAri[1] - hoursDep[1] + 59;
    }

    var restHours = 0;
    if(hoursAri[0] > hoursDep[0]){
        restHours = hoursAri[0] - hoursDep[0];
    } else {
        restHours = hoursAri[0] - hoursDep[0] + 23;
    }

    return restHours + " hours " + restMin + " minutes " + restSec + " seconds.";
}

console.log(newAirplan("08:22:13", "11:23:18"));
console.log(newAirplan("08:22:13", "07:20:08"));


// 10a. Write a constructor function that creates points in space. Each point in space has
// its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.


console.log("---------------------Exer 10a -----------------------");


function Points (x, y, z) {
    this.x = x,
    this.y = y,
    this.z = z
}

var coordinate_1 = new Points (1, 7, 2);
var coordinate_2 = new Points (2, 8, 1);

console.log(coordinate_1);
console.log(coordinate_2);

// 10b. Write a function that calculates the distance between two points in the space.

console.log("---------------------Exer 10b -----------------------");

// 11a. Write a function that generates a random integer value between 5 and 20.

console.log("---------------------Exer 11a -----------------------");

// ((max - min) * Math.random()) + min - formula

function random5_20 (max, min) {
    var f = ((max - min) * Math.random()) + min;
    return Math.round(f);
}

console.log(random5_20(5, 20))

// 11b. Write a function that generates a random integer value between 50 and 100.

console.log("---------------------Exer 11b -----------------------");


function random50_100 () {
    var f = (50 * Math.random()) + 50;
    return Math.round(f);
}

console.log(random50_100());

// 11c. Write a function which expects a number and a callback generator function and
// returns an array of numbers produced by the generator function.

console.log("---------------------Exer 11c -----------------------");

function generator (arrlength, func) {
    var newArr = [];
    for (var i = 0; i < arrlength; i++){
        newArr.push(func());
    }
    return newArr;
}

console.log(generator(7, random50_100));

// 12. Write a function that shuffles the elements of a given array.

// Input: [3, 6, 11, 2, 9, 1]

// Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)

function shuffles (arr) {
    for (var i = arr.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}

console.log(shuffles([3, 6, 11, 2, 9, 1]));