// Task 1. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
// Sample numbers: 3, -7, 2 
// Output: The sign is - 

var a = 3;
var b = -7;
var c = 2;

if (a > 0 && b > 0 && c > 0) {
    console.log('The sign is +');
} else if (a > 0 && b > 0 && c < 0){
    console.log('The sign is +');
} else if (a > 0 && b < 0 && c < 0){
    console.log('The sign is +');
} else if (a < 0 && b > 0 && C > 0){
    console.log('The sign is +');
} else if (a < 0 && b < 0 && c < 0){
    console.log('The sign is +');
} else if (a < 0 && b > 0 && c < 0){
    console.log('The sign is +');
} else{
    console.log('The sign is -');
}

// Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
// Sample numbers: -5, -2, -6, 0, -1 
// Output: 0 

a = -5;
b = -2;
c = -6;
var d = 0;
var e = -1;

if (a > b && a > c && a > d && a > e){
    console.log(a);
} else if (b > a && b > c && b > d && b > e){
    console.log(b);
} else if (c > a && c > b && c > d && c > e){
    console.log(c);
} else if (d > a && d > b && d > c && d > e){
    console.log(d);
} else {
    console.log(e);
}

// Task 3. Write a conditional statement to print three numbers as sorted number list.
// Sample numbers : 0, -1, 4 
// Output : 4, 0, -1 

a = 4;
b = 0;
c = -1;

if (a > b && b > c){
    console.log(a, b, c);
} else if (a > b && c > b){
    console.log(a, b, c);
} else if (a < b && a > c){
    console.log(b, a, c);
} else if (a < b && a < c){
    console.log(b, c, a);
} else if (a < b && b < c){
    console.log(c, b, a);
} else {
    console.log(c, a, b);
}

// Task 4. Write a program to check if the variable is a number and if it’s a number, 
//check if it is divisible by 2. If it is, print the result, if not, show “X”.
// Sample input: 10  					Sample input: 7
// Output: 10 / 2 = 5					Output: X  

a = 10;
var result = a/2

if (typeof a === 'number' && a % 2 === 0){
    console.log(a + '/' + '2' + '=' + result);
} else {
    console.log('X');
}

//Task 5. Write a program that compares two numbers and displays the larger. 
//Display the result in the console.

a = 40;
b = 12;

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

// Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
// Sample Input: 60°C
// 	Output : 60°C is 140 °F


c = 60;

var formulaForF = (9*c/5)+32;

console.log(c + 'C' + ' je ' + formulaForF + 'F.');

// Task 7. Write a JavaScript program to get the difference between a given number and 13, 
//if the number is greater than 13 return double difference between that number and 13.
// 	Sample Input: 11					Sample Input: 32
// 	Output : 2						Output : 38

a = 11;
result = 13 - a;
var result1 = (a - 13)*2;

if (a <= 13){
    console.log(result);
} else {
    console.log(result1);
}

// Task 8. Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are same, then returns triple their sum.
// 	Sample Input: 12,5					Sample Input: 8,8
// 	Output : 17	                        Output : 48

a = 8;
b = 8;
var sum = a+b;

if (a !== b){
    console.log(sum);
} else {
    console.log(sum*3);
}

// Task 9. Write a JavaScript program to check two given numbers and print “true” if one 
// of the number is 50 or if their sum is 50.
// 	Sample Input: 5,54			Sample Input: 6,50			Sample Input: 40,10
// 	Output : -				Output : true				Output : true

a = 6;
b = 50;
sum = a+b;

if (a === 50 || b === 50 || sum === 50){
    console.log(true);
} else {
    console.log('-');
}