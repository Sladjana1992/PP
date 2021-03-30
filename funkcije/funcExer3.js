// 1. Write a program to insert a string within a string at a particular position (default is 1, 
//    beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insert(string, ins, position){
    var newString = "";
    if (position === undefined){
        position = 0;
    }
    for (var i = 0; i < string.length; i++){
        if (i !== position){
            newString += string[i]; 
         } 
        else{
            newString += ins; 
            newString += " ";
            newString += string[position];
        }
    }
    return newString;
}
console.log(insert("My random string", "JS", 10));

// 2. Write a program to join all elements of the array into a string skipping elements that are
// undefined, null, NaN or Infinity.
// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function array(arr){
    var arr1 = "";
    for (var i = 0; i < arr.length; i++){
        if(isFinite(arr[i]) &&  arr[i] !== null){
           arr1 += arr[i];
        }
    }
    return arr1;
}

console.log(array([NaN, 0, 15, false, -22, '', undefined, 47, null]));

// 3. Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function filter(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i]){
            newArr[newArr.length] = arr[i]; 
        }
    }
    return newArr;
}

console.log(filter([NaN, 0, 15, false, -22, '', undefined, 47, null]))

// 4. Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number

function reverses(number){
    
    var reversesNumber = number + "";
    var someString = "";
    var number1 = 0;
    for (var i = reversesNumber.length-1; i >= 0; i--){
       someString += reversesNumber[i];
    }
    number1 = parseInt(someString);
    return number1;
}

console.log(reverses(25874));


// 5. Write a function to get the last element of an array. Passing a parameter 'n' will return 
// the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]

function element(arr, n){
    var arr1 = [];
    var j = 0;
    if (n === undefined){
        return arr[arr.length-1];
    }
    for (var i = arr.length-n; i < arr.length; i++){
            arr1[j] = arr[i];
            j++;            
    }
    return arr1;
}

console.log(element([7, 9, 0, -2], 2));

// 6. Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 

function numberOfElement(p, value){
    if (value === undefined){
        value = null;
    }
    var array = [];
    for (var i = 0; i < p; i++){
        array[array.length] = value;
    }
    return array;
}


console.log(numberOfElement(2));

// 7. Write a function that says whether a number is perfect.

// 28 -> 28 is a perfect number.
// Note: According to Wikipedia: In number theory, a perfect number is a positive integer 
// that is equal to the sum of its proper positive divisors, that is, the sum of its positive 
// divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect 
// number is a number that is half the sum of all of its positive divisors (including itself).

// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, 
// and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: 
// (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the 
// perfect numbers 496 and 8128.

function perfectNumber(n){
    var sum = 0;
    for (var i = 1; i < n; i++){
        if(n % i === 0){
            sum += i;
        } 
    }
    if(sum === n){
        return n + " is a perfect number";
    }
    else {
        return "Is not a perfect number."
    }
}

console.log(perfectNumber(28));

// 8. Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

function find(string, word){
    var word1 = "";
    string += " ";
    var j = 0;
    for (var i = 0; i < string.length; i++){
        if(string[i] !== " "){
            word1 += string[i];   
        }else if (word1 === word){
            j++;
        }else {
            word1 = "";
        }
     
    }
    
    return word + " was found " + j + " times."
}

console.log(find("aa bb cc dd aa", "aa"));

// 9. Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

function hide(email){
    var newEmail = "";
    var p = "";
    for (var i = 0; i < email.length; i++){
        if(i < 3){
            newEmail += email[i];
            p = newEmail;
        } else if (email[i] === "@"){
            p += "..." + email[i];
            newEmail = p;
        } else{
           newEmail += email[i];
        }
    
    }
   return newEmail; 
}

console.log(hide("myemailaddress@bgit.rs"));

// 10.  Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function frequent(arr){
    var newArr = [];
    var count = 0;
    var mostFre = 1;
    for (var i = 0; i < arr.length; i++){
        for (var j = i; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }
            if(mostFre < count){
                newArr = arr[i];
                mostFre = count;
                console.log(count)
            }
        }
        count = 0;
    }
    return newArr;
}   

console.log(frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));