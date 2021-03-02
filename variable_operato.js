// 1. Create several variables using different letter cases and beginning characters. 
// Check if they still exist if you refer to them in different case - does case matter here? 
// Try to declare a variable starting with number as the first character.

var Name =  'Sladjana';
console.log(Name);

var name = 'Sladjana';
console.log(name);




// 2. Save a string (text) describing your current mood in a variable and print it out in console.

var mood = 'nenaspavana';
console.log(mood);

// 4. Play around in the console: add, subtract, 
// multiply and divide some numbers. Use numbers stored in variables 
// you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3. 
// Why do we get these results? 

var a = 5;
var b = 3;
var c = 14;
var d = 2;

var result1 = a - b - c;
console.log(result1);

var result2 = a * b - c/d;
console.log(result2);

var result3 = a*3.14 + b*d - c;
console.log(result3);

// 5. How many grams weight 1.2kg of bananas? 

var bananasKg = 1.2;
var gram = 1000;
var bananasGr = bananasKg * gram;


console.log('1.2 kg banana iznosi ' + bananasGr + ' grama');

// 6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? 
// What about Tom who is being late half an hour? It is hard to be on time these days…

var annaMinutes = 5;
var sec = 60;
var days = 3;
var tomMinutes = 30;

console.log('Anu cekamo ' + annaMinutes*sec*days + ' sekundi dodatno.');
console.log('A Toma cekamo ' +  tomMinutes*sec*days + ' sekundi dodatno.');

/* 7. How many MB of additional memory we have if we buy a 4GB USB stick? 
How many news articles each in size 98KB can fit in it?*/

var memoryGb = 4;
var memoryMb = 1000;
var memoryKb = 1000;
var articlesKb = 98;

console.log('Ukupno imamo ' + memoryGb*memoryMb + ' MB.');
console.log('Ukupno moze da stane ' + (memoryGb*memoryMb*memoryKb)/articlesKb + ' novih artikala.');

// 9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?

a = 25;
b = 13;
c = -5;
d = -9;

console.log(d = d - c);
console.log(b = ++a);
console.log(a = a*b - d/c);

/* 10. Create the following variables:
	- a variable containing your name,
	- a variable containing your age,
	- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types. */

name = 'Sladjana';
var _age = 28;
var $cat = false;

console.log('Ime ' + name + ' godine ' + _age + ' macka ' + $cat);
console.log(typeof name);
console.log(typeof _age);
console.log(typeof $cat);


/* 11. Check which type are these values:
	- “number”
	- true
	- null
	- “false”
	- 56 */

var check = 'number';
var check1 = true;
var check2 = null;
var check3 = 'false';
var check4 = 56;

console.log(typeof check);
console.log(typeof check1);
console.log(typeof check2);
console.log(typeof check3);
console.log(typeof check4);

// 13. Use the console to check the results you think should go in the following table:

// p	q	   p && q	p || q
// true	true		
// true	false		
// false true		
// false false	

var p = true;
var q = true;

if (p === true && q === true){
    console.log(true);
}else {
    console.log(false);
}

if (p === true || q === true){
    console.log(true);
}else {
    console.log(false);
}

// 14. If the variable age stores the information about user’s age, 
//     how we can check whether it contains a correct value? Write expressions for checking:
// ●	Is age negative value
// ●	Is age greater than 120 

age = 30;

if (age < 0){
    console.log('Vrednost je negativan broj')
}else{
    console.log('Starost korisnika je ' + age + ' godina.');
}

console.log(age>120);

// 15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. 
// If we store the current speed value in the variable speed. 
// Write an expression which will check if we are driving drive safely or not? 
// (true if we are driving safe and false if not)   

var speed = 70;

console.log(speed >= 60 && speed <= 120);















