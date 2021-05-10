// 1.	Find the min and max element in the following array and switch their places. 
// Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

function element(g){
    var min = g[0];
    var max = g[0];
    var minIndex = 0;
    var maxIndex = 0;
    for (var i = 0; i < g.lenght; i++){
        if(min > g[i]){
            min = g[i];
            minIndex = i;
        }
        if(max < g[i]){
            max = g[i];
            maxIndex = i;
        }
    }
    g[minIndex] = max;
    g[maxIndex] = min;
    return g;
}

console.log(element([3, 500, 12, 149, 53, 414, 1, 19]));

// 2.	Use the following array to make a new one by dividing its values by two and adding 5. 
// If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

function newOne(j){
    for (var i = 0; i < j.length; i++){
        j[i] = j[i]/2 + 5;
        if(j[i] === 0){
            j[i] = 20;
        }
    }
    return j;
}

console.log(newOne([3, 500, -10, 149, 53, 414, 1, 19]));

// 3.	Initialize two arrays. The first one should contain student names, the second one the number 
// of points for each student. Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input: 
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output: 
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

function grade(arr, arr1){
    var result = "";
    for (var i = 0; i < arr.length; i++){
        if(arr1[i] < 51){
            result += arr[i] + " acquired " + arr1[i] + " points and failed to coplete the exam.\n"
        }else if(arr1[i] <= 60) {
            result += arr[i] + " acquired " + arr1[i] + " points and earned 6.\n"
        }else if(arr1[i] <= 70){
            result += arr[i] + " acquired " + arr1[i] + " points and earned 7.\n"
        }else if(arr1[i] <= 80){
            result += arr[i] + " acquired " + arr1[i] + " points and earned 8.\n"
        }else if(arr1[i] <= 90){
            result += arr[i] + " acquired " + arr1[i] + " points and earned 9.\n"
        }else{
            result += arr[i] + " acquired " + arr1[i] + " points and earned 10.\n"
        }

    }
    return result;
}

console.log(grade([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]));

// 4.	Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts 
// all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 
// and displayed in console.
// Output: 2350000

function number(n){
    var sumEven = 0;
    var sumOdd = 0;
    for (var i = 1; i <= n; i++){
        if(i % 2 === 0){
            sumEven += i;
        }else if (i % 2 !== 0 && i <= 500){
            sumOdd += i;
        }
    }
    return (sumEven - sumOdd) * 12.5;
}

console.log(number(1000));

// 5.	Define a 10 element array. Take the first two letters from every string 
// (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

// Output: AnStJoJoDaMa

function string(arrStrign){
    var str = "";
    for (var i = 0; i < arrStrign.length; i++){
        if(typeof arrStrign[i] === "string" && arrStrign[i].length >= 2){
            str += arrStrign[i][0];
            str += arrStrign[i][1];
        }
    
    }
    return str;
}

console.log(string([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]));

// 6.	Write a program that takes a string and prints its characters out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

function reversed(string){
    var someString = "";
    for (var i = string.length - 1; i >= 0; i--){
        someString += string[i];
    }
    return someString;
}

console.log(reversed("Belgrade Institute of Technology"));

// 7.	Write a program that displays all the combinations of two numbers between 1 and 7. 
// Don't display two of the same numbers at the same time. Display the number of possible combinations, 
// as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

function combinations(n){
    var com = "";
    for (var i = 0; i <= n; i++){
        for (var j = 0; j <= n; j++){
            if(i !== j){
                com += "(" + i + " , " + j + "), ";
            }
        }
    }
    return com;
}
console.log(combinations(7));

// 8.	Write a program that checks if the entered number is a prime number 
// (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false

function primeNumber(p){
    var prime = true;
    for (var i = 2; i < p; i++){
        if (p % i === 0){
            prime = false;
        }
    }
    return prime;
}

console.log(primeNumber(15));

// 9. Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true

function polindrome(string){
    var newString = "";
    var isPol = true;
    for (var i = 0; i < string.length; i++){
        if(string[i] !== " "){
            newString += string[i];
        }
    }
    for (var j = 0, e = newString.length - 1; j < e; j++, e--){
        if(newString[j] !== newString[e]){
            isPol = false;
            break;
        }
    }
    
    return isPol;
}

console.log(polindrome("a nut for a jar of tuna"));

// 10.	Write a program that calculates the greatest common divisor of two integers. 
// Note: The greatest common divisor of two non-zero integers is the greatest positive 
// number that divides both numbers with no remainder.
// Input:  192 42 | 81 9
// Output: 6      | 9

function great(a, b){
    var p;
    if(a < b){
        p = b;
    }else {
        p = a;
    }
    var divi = 0;
    for (var i = p; i > 0; i--){
        if(b % i === 0 & a % i === 0){
            divi = i;
            break;
        }
    }
    return divi;
}
console.log(great(192, 42));
console.log(great(81, 9));

// 11. Sort a previously defined array. Place its sorted values into a new array whose values are 
// equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

function sort(arr){
    var k;
    for (var i = 0; i < arr.length; i++){
        for(var j = i+1; j < arr.lenght; j++){
            if(a[j] < a[i]){
                k = a[i];
                a[i] = a[j];
                a[j] = k;
            }
        }
    }
    return arr;
}

console.log(sort([ 13, 11, 15, 5, 6, 1, 8, 12 ]));

//drugi nacin

// function sortAndMulti(array) {
    
//     var newArray = [];
//     var min = array[0];
//     var index = 0;

//     for (var i = 0; i < array.length; i++) {
//         for (var j = 0; j <array.length; j++) {
//             if (array[j] < min ) {
//                 min = array[j]
//                 index = j;
//             }
//         }
        
//         newArray[i] = min * 2;
//         array[index] = Infinity;
//         min = Infinity;
//     }

//     return newArray;
// }

// console.log(sortAndMulti([13, 11, 15, 5, 6, 1, 8, 12]));


// 12. Sort a previously defined array in a descending order and display it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

function order(array){
    var n;
    for(var i = 0; i < array.length; i++){
        for(var j = i + 1; j < array.length; j++){
            if(array[i] < array[j]){
                n = array[i];
                array[i] = array[j];
                array[j] = n;
            }
        }
    }
    return array;
}

console.log(order([ 13, 11, 15, 5, 6, 1, 8, 12 ]));


(
    function sum(arr){
    var sum1 = 0;
    for(var i = 0; i < arr.length; i++){
        sum1 += arr[i];
    }
    return sum1;
    
}
)();