// 1. Write a program that calculates the maximum of two given numbers. 

function maximum(a, b){
    if (a === b) {
        return "numbers are equal";
    } else if (a > b) {
        return a;
    } else {
        return b;
    }
}

var result = maximum(4, 4);
console.log(result);

// 2. Write a program that checks if a given number is odd. 

function odd(a){
    if (a === 0){
        return "it can\'t be zero";
    } else if (a % 2 === 0){
        return "even";
    } else {
        return "odd";
    }
}

var result = odd(5);
console.log(result);

// 3. Write a program that checks if a given number is a three digit long number.

function long(a){
    if (a > 99 && a < 1000){
        return "yes";
    } else {
        return "no";
    }
}

var result = long(4000);
console.log(result);

// 4. Write a program that calculates an arithmetic mean of four numbers.

function ariMean (a, b, c, d){
    var sum = a + b + c + d;
    var arit = sum/4;
    return arit;
}

var result = ariMean(1, 2, 3, 4);
console.log(result);

// 5. Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
// *****
// *    *
// *    *
// *    *
// *****

function makeSquare(n){
    var result = "";
    var space = " ";
    var star = "*";
    var newLine = "\n";

    for (var i = 0; i < n; i++){
        // result += star;
        // result += star;
        // result += star;
        // result += star;
        // result += star;
        // result += star;
        // result += star;
        // result += newLine;
        for (var j = 0; j < n; j++){
            if(i === 0 || i === n-1 || j === 0 || j === n-1){
                result += star;
            }else {
                result += space;
            }
        }
        result += newLine;
    }
    return result;
}

console.log(makeSquare(7));

// function square(m){
//     var row = "";
//     for (var i = 1; i <= m; i++){
//         if (i === 1 || i === m-1) { 
//         for (var j = 1; j <= m; j++){
//                 row += "*";
//         } row = row + "\n";
//     } else {
//                 row += " ";
//             }
//         }
    
    
//     return row;
// }

// var result = square(5);
// console.log(result);

// 6.	Write a program that draws a horizontal chart representing three given values. 
// For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

function makeChart() {
    var result = "";

    for(var i = 0; i < arguments.length; i++){
        for(var j = 0; j < arguments[i]; j++){
            result += "*";
        }
        result += "\n";
    }
    return result;
}

console.log(makeChart(6, 5, 4, 3));

// 7. Write a program that calculates a number of digits of a given number. 

function digit(array){
    var stri = "";
    var result = stri + array.length;
    return result;
}
console.log(digit("458"));

// 8. Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

function appear(a){
    var number = 0;
    var e = 7;
    for (var i = 0; i < a.length; i++){
        if (e === a[i]){
            number++;
        }
    }
    return number;
}

var b = [2, 4, 7, 8, 7, 7, 1];
var result = appear(b);
console.log(result);

// 9. Write a program that calculates the sum of odd elements of a given array.

function sumOdd(a){
    var sum = 0;
    for (i = 0; i < a.length; i++){
        if(a[i] % 2 !== 0){
            sum += a[i];
        }
    }
    return sum;
}

var m = [3, 1, 1, 5];
var result = sumOdd(m);
console.log(result);

// 10. Write a program that calculates the number of appearances of a letter a in a given string. 
// Modify the program so it calculates the number of both letters a and A.

function letter(a){
    var newString = [];
    var res = "";
    for (var i = 0; i < a.length; i++){
        if(a[i] === "a" || a[i] === "A"){
            newString[newString.length] = a[i] + res;
        }
    }
    return newString.length;
}

var newStr = "arraaaaay";
var result = letter(newStr);
console.log(result);

// 11. Write a program that concatenates a given string given number of times. 
// For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 

// function print(a){
//     var res = a + a + a + a;
//     return res;
// }
// var arr = "mina";
// var result = print(arr);
// console.log(result);

function print2(br, a){
    var res1 = a;
    for (var i = 1; i < br; i++){
        res1 = res1 + a;
    }
    return res1;
}

var arr1 = "abc";
var number = 4;
var result1 = print2(number, arr1);
console.log(result1);


