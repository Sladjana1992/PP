// 1.	Write a function that converts an array of strings into an array of numbers. 
// Filter out all non-numeric values.

// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]

function array(a){
    var newA = [];
    for (var i = 0; i < a.length; i++){
        if(isFinite(parseFloat(a[i]))){
            newA[newA.length] = a[i];
        }
    }
    return newA;
}

console.log(array(["1", "21", undefined, "42", "1e+3", Infinity]));

// 2.	Write a program to join all elements of the array into a string skipping
//  elements that are undefined, null, NaN or Infinity.

// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// 	Output: “015false-2247”

function ele(a){
    var newA = "";
    for (var i = 0; i < a.length; i++){
        if(isFinite(a[i]) && a[i] !== null){
            newA += a[i];
        }
    }
    return newA;
}

console.log(ele([NaN, 0, 15, false, -22, '', undefined, 47, null]));

// 3.	Write a program to filter out falsy values from the array.

// 	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: [15, -22, 47]

function notFalsy(a){
    var b = [];
    for (var i = 0; i < a.length; i++){
        if(a[i] === parseInt(a[i])){
            b[b.length] = a[i];
        }
    }
    return b;
}

console.log(notFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));

// 4.	Write a program that calculates a number of integer values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3

function int(a){
    var count = 0;
    for (var i = 0; i < a.length; i++){
        if(parseInt(a[i]) === a[i]){
        count++;
        }
    }
    return count;
}

console.log(int([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));


// 5.	Write a program that calculates a number of float values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2


function float(s){
    var count = 0;
    for (var i = 0; i < s.length; i++){
        if(parseFloat(s[i]) === s[i]){
            count++;
        }
    }
    return count;
}

console.log(float([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));