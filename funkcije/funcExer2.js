//1. Write a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false

// function isString1(a){
//     if(a !== parseInt(a) && a !== parseFloat(a) && a !== isFinite(a) && a === isNaN(a)){
//         return true;
//     } else {
//         return false;
//     }
// }

// var m = NaN;
// var result = isString1(m);
// console.log(result);

function isStr (a){
    if (typeof a === "string"){
        return true;
    } else {
        return false;
    }
}

var strin = "nesto";
var result1 = isStr(strin);
console.log(result1);

// 2. Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function isBlank(a){
    if (a === " "){
        return true;
    } else {
        return false;
    }
}
var str = "My rendom string";
var result = isBlank(str);
console.log(result);

// 3. Write a function that concatenates a given string n times (default is 1).
// "Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function conca(b, n){
   var times = b;
   for (var i = 1; i < n; i++){
       times = times + b;
   } 
   return times;
}

var ser = "Ha";
var t = 3;
var result = conca(ser, t);
console.log(result);

// 4. Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function letter(string, letterInString){
    var string1 = [];
    for (var i = 0; i < string.length; i++){
        if(string[i] === letterInString){
            string1[string1.length] = string[i];       
        }
    }
    return string1.length;
}

var sent = "My random string";
var lett = "y";
var result = letter(sent, lett);
console.log(result);

// 5. Write a function to find the position of the first occurrence of a character in a string. 
// The result should be the position of character. If there are no occurrences of the character, 
// the function should return -1.

function first(string, chara){
    var position = 0;
    for (var i = 0; i < string.length; i++){
        if(string[i] === chara){
            position = i;
            break;
        }else{
            return -1;
        }
    }
    return position;
}
var w = "dooontttt knowww";
var char = "y";
var maybe = first(w, char);
console.log(maybe);

// 6. Write a function to find the position of the last occurrence of a character in a string. 
// The result should be in human numeration form. If there are no occurrences of the character, 
// function should return -1.

function lastOccurr(string, position){
    var posit = -1;
    for (var i = 0; i < string.length; i++){
        if (string[i] === position){
            posit = i;
    }
}
    return posit;
}
var newString = "aaalllooo aallooooo";
var char = "l";
var result = lastOccurr(newString, char);
console.log(result);

/* 7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
"My random string" --> ["M", "y", null, "r", "a"]
"Random" --> ["R", "a", "n", "d", "o", "m"] */

function random(string){
    var array = [];
    for (var i = 0; i < string.length; i++){
        if (string[i] === " "){
            array[array.length] = "null";
        } else{
            array[array.length] = string[i];
        }
    }
    return array;
}

console.log(random("My random string"));

/* 8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself. */

function accept(m){
    var number = 0;
    for (var i = 2; i < m; i++){
        if (m % i === 0 && m !== 0){
          number++;
        }
    }
    if (number > 0){
        return "It is not a prime number.";
    } else {
        return "It is a prime number.";
    }
    
}

console.log(accept(3));
/*
9. Write a function that replaces spaces in a string with provided separator. If separator is not provided,
use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"
*/

function spaces (sentence, separator){
    var newSentence = "";
    if (separator === undefined){
        separator = "-"
    }
    for (var i = 0; i < sentence.length; i++){
        if(sentence[i] === " "){
            newSentence += separator;
        }else {
            newSentence += sentence[i];
        }
    }
    return newSentence;
}

console.log(spaces("My random string", "*"));

// 10. Write a function to get the first n characters and add “...” at the end of newly created string.

function add(string, n){
    var ad = "";
    if (n <= string.length) {
        for (var i = 0; i <= n; i++){
            ad += string[i]
        }
        ad += "...";
    return ad;
    }
}
console.log(add("majjjjjjj", 4));

/* 11. Write a function that converts an array of strings into an array of numbers. 
Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000] */

function parse(arrayString){
    var arrayNumber = [];
    for (var i = 0; i < arrayString.length; i++){
        if(isFinite(arrayString[i])) {
            arrayNumber[arrayNumber.length] = parseFloat(arrayString[i]);
        }
    }
    return arrayNumber;
}

console.log(parse(["1", "21", undefined, "42", "1e+3", NaN, Infinity]));

// 12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

function retirement(yearNew ,yearOfBirth, gender){
    var years = yearNew - yearOfBirth
    var left = 65 - years;
    var left2 = 60 - years;
    if(gender === "male" && years < 65){
        return left + " years left until retirement."
    } else if (gender === "female" && years < 60){     
        return left2 + " years left until retirement."
    } else {
        return "The person is retired."
    }
}

console.log(retirement("2018", "1952", "female"));

// 13. Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 - 1st
// 11 - 11th

function format(number){
    if(number % 100 >= 11 && number % 100 <= 13){
        return number + "th";
    }
    switch (number % 10) {
        case 1:
            return number + "st";
        case 2:
            return number + "nd"; 
        case 3:
            return number + "rd";
    }
    return number + "th";
}

console.log(format(204551));