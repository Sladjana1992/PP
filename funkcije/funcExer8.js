// 1 Write IIFE that replaces the first and the last element of the given array and prints out its elements. 

//  Input array: [4, 5, 11, 9]
// 	Output array: [ 9, 5, 11, 4]

(
    function (array) {
        var newArray = [];
        
        for (var i = 0; i < array.length; i++){
            if(i === 0){
                newArray[i] = array[array.length - 1]
            } else if(i === array.length - 1){
                newArray[i] = array[0];
            } else {
                newArray[i] = array[i];
            }
            
            
        }
        return console.log(newArray);
        
    }
    
)([4, 5, 11, 9]);


// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
// Input: 4 5
// Output: 20 


(
    function (num1, num2){
        var result = num1 * num2;
        return console.log(result);
    }
)(5, 7);

// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the number 
// of replacements. 
// 	Input: prograMming
// 	Output: progra**ing, 2

(
    function (string){
        var newString = "";
        var count = 0;
        for(var i = 0; i < string.length; i++){
            if(string[i] === "m" || string[i] === "M"){
                newString += "*";
                count++;
            }else {
                newString += string[i];
            }
        }
        return console.log(newString + ", " + count)
    }
)("prograMming");

// 4. Write a function with parameters name and surname that returns a function that suggests 
// an email in the form name.surname@gmail.com. 
// Input: pera peric
// 	Output: pera.peric@gmail.com

(
    function (name, surname){
        var email = "@gmail.com";
        return console.log(name + surname + email);
    }
)("pera", "peric");

// 5. Write a function that returns a function that calculates a decimal value of the given octal number. 
// Input: 034
// Output: 28

(
    function (octalNumber){
        return console.log(parseFloat(octalNumber));
    }
)(034);

// 6. Write a function that checks if a given string is valid password. 
// The password is valid if it is at least 6 characters long and contains at least one digit. 
// The function should receive two callbacks named successCallback and errorCallback that should be 
// called in case password is correct or invalid. 
// Input: JSGuru 
// Output: Your password is invalid!

// 	Input: JSGuru123
// 	Output: Your password is cool! 

(
    function (pass){
        var successCallback = "Your password is cool!";
        var errorCallback = "Your password is invalid!";
        var conte = "no";
        for(var j = 0; j < pass.length; j++){
            if(pass[j] >= 0 || pass[j] <= 9){
                conte = "yes";
            }
        }

        for(var i = 0; i < pass.length; i++){
            if(pass.length >= 6 && conte === "yes"){
                return console.log(successCallback);
            }else {
                return console.log(errorCallback);
            }
        }
    }
)("JSGuru-1");

// 7. Write a function that filters elements of the given array so that they satisfy 
// a condition given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3] 

(
    function (arr){
        var newArr = []
        for(var i = 0; i < arr.length; i++){
            if(arr[i] % 2 !== 0){
                newArr[newArr.length] = arr[i];
            }
        }
        return console.log(newArr);
    }
)([2, 8, 11, 4, 9, 3]);

