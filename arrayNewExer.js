//1.  Get the sum of two arrays…actually the sum of all their elements.

var a = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
var b = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];

var sumA = 0;
var sumB = 0;

for (var i = 0; i < a.length; i++){
    sumA += a[i];
}
for (var i = 0; i < b.length; i++){
    sumB += b[i];
}

console.log(sumA + sumB);

// 2. Using a for loop output the elements in reverse order

var arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
var newArr = [];

for (var i = arr.length - 1; i >= 0; i--){
    newArr[newArr.length] = arr[i];
}
console.log(newArr);

// 3. Using a for loop print all even numbers up to and including n. Don’t include 0.

// var a = 12;
// var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
// var arrNew = [];

// for (var i = 1; i < arr.length; i++){
//     if (arr[i] % 2 === 0 && arr[i] <= a ){
//         arrNew[arrNew.length] = arr[i];
//     }
// }

// console.log(arrNew);

var a = 22;

for (var i = 1; i <= a; i++){
    if (i % 2 === 0){
        console.log(i + " ");
    }
}

// 4. Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.

var b = [4, 6, 7];
var c = [1, 3, 4];
var d = [];

for (var i = 0; i < b.length; i++){
    d[d.length] = b[i] + c[i];
}

console.log(d);

// 5. Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.

var string = "javascript";
var newString = "";

for (var i = 0; i < string.length; i++){
    if((i+1) % 2 !== 0){
        newString += string[i];
        newString += "Z";
    } 
}

console.log(newString);

// 6. Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

var str = "don’t know why";
var letter = "y";
var cont = "no";

for (var i = 0; i < str.length; i++){
    if(letter === str[i]){
        cont = "yes";
    }
}
console.log(cont);

// 7. Given a number n Calculate the factorial of the number

var n = 3;
var fact = 0;

for (var i = 1; i <= n; i++){
    fact *= i;
}
console.log(fact);