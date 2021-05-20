// 1. Write a JavaScript function that reverses a number. typeof result of the function should
// be “number”.
// 12345 - 54321

console.log("--------------------- 1 --------------------");

function reverses (number) {
    number = number + "";
    var reverseNum = number.split("").reverse().join("");

    return parseInt(reverseNum);

}

console.log(reverses(12345));
console.log(typeof reverses(67895));

// 2. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” - “abeemrstw”

console.log("--------------------- 2 --------------------");

function letterInAlpha (string) {
    string = string.toLowerCase();
    return string;
}

console.log(letterInAlpha("WebmasteR"));

// 3. Write a function to alphabetize words of a given string. Alphabetizing a string means
// rearranging the letters so they are sorted from A to Z.
// "Republic Of Serbia" - "Rbceilpu Of Sabeir"

console.log("--------------------- 3 --------------------");

function sortName (string) {
    var str = string.split(" ");
    var strSort = str.map(function (el) {
        return el.split("").sort().join("");
    });
    
    return strSort.join(" ");
}

console.log(sortName("Republic Of Serbia"));

// 4. Write a function to split a string and convert it into an array of words.
// "John Snow" [ "John", "Snow"]

console.log("--------------------- 4 --------------------");


function arrayWords (string) {
    var str = string.split(" ");
    return str;
}

console.log(arrayWords("John Snow"));

// 5. Write a function to convert a string to its abbreviated form.
// "John Snow" - "John S."

console.log("--------------------- 5 --------------------");

function sortName (string) {
    var str = string.split(" ");
    var newString = str[0] + " " + str[1].charAt(0) + ".";
    
    return newString;
} 

console.log(sortName("John Snow"));

// 6. Write a function that adds string to the left or right of string, by replacing it’s characters.
// "0000", "123", "1" -- 0123
// "00000000", "123", "r" -- 12300000

console.log("--------------------- 6 --------------------");
