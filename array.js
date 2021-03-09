// 1. Write an array of months in a year. Using console.log display June, October and January
// from the array.

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log(months[5] + ' ' + months[9] + ' ' + months[0]);

// 2. Write an arrays of days in a week. Using console.log display Sunday from the array.

var daysInWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log(daysInWeek[6]);

// 3. Print all negative elements from the array [2, -4, 5, -2, -11].

var a = [2, -4, 5, -2, -11];
 
console.log(a[1], a[3], a[4]);

// 4. Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18,
//72, 14, 9].

var b = [5, 15, -5, 20, 12, 18, 72, 14, 9];

console.log(b[1], b[4], b[5], b[6], b[8]);

// 5. What is the index of number 24 in the following array?
// [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3,
// 10, 26, 7]];

var longArr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

console.log(longArr[0][3]);

// Using console.log:
// ● Display the 3rd element of the array,
// ● Display the 2nd element of the 3rd element.

console.log(longArr[2]);
console.log(longArr[2][1]);