// Throw an exception if age is below 18 (print "Access denied"). If age is 18 or older, print "Access granted"

function exerErrors (age) {
    try {
        if(age < 18) throw "You must be at least 18 years old";
    } catch (error) {
        console.log(error);
    }
    return "You can enter."
}

console.log(exerErrors(17));

console.log("****************************************");


function err (age) {
    var text = "";
    if (age < 18) {
        text += "You must be at least 18 years old";
    } else {
        text += "You are old enough";
    }

    try {
        if(typeof age !== "number") throw "Input must be a number";
    } catch (error) {
        console.log(error);
    }
    return text;
}

console.log(err("a"));

console.log("****************************************");


var age = 17;
try {
    if(typeof age !== "number") throw "Input must be a number";
} catch (error) {
    console.log(error);
}
if (age < 18) {
    console.log("You must be at least 18 years old");
} else {
    console.log("You are old enough");
}


console.log("****************************************");


function maximum(a, b){
    try {
        if(a === b) throw "numbers are equal.";
    } catch (error) {
        console.log(error);
    }
    if (a > b) {
        return a;
    } else {
        return b;
    }
}


var result = maximum(4, 4);
console.log(result);

console.log("****************************************");


var a = 4;
var b = 4;
try {
    if(a === b) throw "numbers are equal.";
} catch (error) {
    console.log(error);
}
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

console.log("****************************************");


var n = "h";

try {
    if (typeof n !== "number") throw new Error ("not valid");
} catch (err) {
    console.log(err.message);
}

if (n < 18) {
console.log("Access denied");
}else if (n > 18) {
console.log("Access granted");
}


console.log("****************************************");


a = 4;
b = 3;

try{
    console.log(a + b);
    xxx;
    throw new Error ('error')
  }
  catch(error){
    console.log(error.message)
  }

  console.log(a - b);
