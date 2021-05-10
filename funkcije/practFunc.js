// 1. Write a function that checks if a given string contains digit 5.
// Input: “1b895abd” 
// Output: true


// Input: “1bser9re”
// Output: false

function contain(string){
    var con = false;
    for(var i = 0; i < string.length; i++){
        if(string[i] === "5"){
            con = true;
        }
    }
    return con;
}

console.log(contain("1b895abd"));
console.log(contain("1bser9re"));


// 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

var replaces = function (string){
    var replecesString = "";
    for(var i = 0; i < string.length; i++){
        if(string[i] === "J" || string[i] === "S"){
            replecesString += "*";
        } else {
            replecesString += string[i];
        }
    }
    return replecesString;
}

console.log(replaces("Programming in JS is super interesting!"));

// 3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’ 
// Output: “Good morning”

function insert(string, position, letter){
    var output = "";
    for(var i = 0; i < string.length; i++){
        if(i === (position - 1)){
            output += letter;
            output += " ";
        }else {
            output += string[i];
        }
    }
    return output;
}

console.log(insert("Goo morning", 4, "d"));

// 4. Write a function that deletes a character from the given position in the string. 
// Input: “Goodd morning!”, 3 
// Output: “Good morning!” 


function deletes(string, position){
    var returnString = "";
    for(var i = 0; i < string.length; i++){
        if(i === position){
            continue;
        }else {
            returnString += string[i];
        }
    }
    return returnString;
}

console.log(deletes("Goodd morning!", 3));

// 5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]


function deletesElement(array){
    var outputArr = [];
    for(var i = 0; i < array.length; i++){
        if(i % 2 === 0){
            outputArr[outputArr.length] = array[i];
        }
    }
    return outputArr;
}

console.log(deletesElement([3, 5, 1, 8, 90, -4, 23, 1, 67]));

// 6. Write a function that replaces the elements of the given array between two positions 
// with their doubled values. 
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]

function replacesNumbers(array, position1, position2){
    var outputArr = [];
    for(var i = 0; i < array.length; i++){
        if(i >= position1 && i <= position2){
            outputArr[outputArr.length] = array[i] * 2;
        }else {
            outputArr[outputArr.length] = array[i];
        }
    }
    return outputArr;
}

console.log(replacesNumbers([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

// 7. Write a function that checks if a given object has a given property with the given value. 
// Input: {x: 20, y: 30}, “x”, 20 
// Output: true


// Input: {x: 20, y: 30}, “z”, 20 
// Output: false 

// Input: {x: 20, y: 30}, “x”, 10 
// Output: false

// nismo jos radili

// 8. Write a function that checks if every element of the first array is contained in the second array. 
// Be careful with repetitions! 
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true

function checks(arr1, arr2){
    var newArray = [];
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                break;
            }
        }if(j === arr2.length){
            return false;
        }
    }
    return newArray;
}

console.log(checks([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));

// 9. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
// Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]


function sorts(arrayOfStrings){
    var newArrayOfString = [];
    for(var i = 0; i < arrayOfStrings.length; i++){
        if(arrayOfStrings[i][i] === "a" || arrayOfStrings[i][i] === "A"){

        }
    }
}

// 10. Write a function that prints out the date of the next day. 
// Output:  25. 10. 2018. 

