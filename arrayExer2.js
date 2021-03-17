// 1. Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no

var e = 3;
var a = [5, -4.2, 3, 7];
var res = "no";

for (i = 0; i < a.length; i++) {
        if (e === a[i]){
            res = "yes";
        } 
}
console.log(res);

var c = 3; 
var b = [5, -4.2, 5, 7];
var res = "no";

for (i = 0; i < b.length; i++){
    if (c === b[i]){
        res = "yes";
    }
}
console.log(res);


// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

var d = [-3, 11, 5, 3.4, -8];


for (i = 0; i < d.length; i++) {
    if (d[i] > 0){
        d[i] = d[i]*2;
    }
}
console.log(d);

// 3. Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

var f = [4, 2, 2, -1, 6];
var min = f[0];
var index = 0;

for (i = 0; i < f.length; i++){
    if (f[i] < min) {
        min = f[i];
        index = i;
    }
}
console.log(min, index);

// 4. Write‌ ‌a‌ ‌program‌ ‌that‌ ‌finds‌ ‌the‌ ‌first‌ ‌element‌ ‌larger‌ ‌than‌ ‌minimum‌ ‌and‌ ‌prints‌ ‌out‌ ‌its‌ ‌value.‌ ‌ ‌
// Input‌ ‌array:‌ ‌[4,‌ ‌2,‌ ‌2,‌ ‌-1,‌ ‌6]‌ ‌
// Output:‌ ‌2‌

var array = [4, 2, 2, -1, 6];
var min = array[0];

for (i = 1; i < array.length; i++) { // ovde smo trazili min vrednost
    if (array[i] < min){
        min = array[i];
    }
}

var secMin = array[0]; // ovde trazimo vrednost koja je sledece najmanja
for (j = 1; j < array.length; j++) { // koristimo varijablu j jer smo i vec koristili i, imamo novu petlju
    if (array[j] < secMin && array[j] !== min){ // ponovo trazimo najmanju vrednost s tim da ovaj
        secMin = array[j];                      // put imamo i uslov da ta vrednost nije min
    }
}
console.log(secMin);

// 5. Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

var v = [3, 11, -5, -3, 2];
var sum1 = 0;

for (i = 0; i < v.length; i++){ // prolazimo kroz petlju 
    if (v[i] > 0){              // trazimo samo pozitivne brojeve
        sum1 += v[i];            // dodajemo ih sumi
    }
}
console.log(sum1);

// 6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read 
// the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.

var h = [2, 4, -2, 7, -2, 4, 2];
var start = h[0];
var end = h[h.length-1];
var isSymet = true;;

for (start, end; start < end; start++, end--){
    if(start !== end){
        isSymet = false;
    }
}

if (isSymet){
    console.log("The array is symmetric.");
} else {
    console.log("The array isn\'t symmetric.");
}

var a = [3, 4, 12, 8];
var isSym = true;

for (var start = 0, end = a.length - 1; start < end; start++, end--){
    if (a[start] !== a[end]){
        isSym = false;
    }
}
if (isSym) {
    console.log("The array is symmetric.")
} else {
    console.log("The array isn\'t symmetric.")
}


// 7. Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var k = [4, 5, 6, 2];
var j = [3, 8, 11, 9];
var m = [];   // prazan niz u koji cemo da slazemo predhodna dva

for (i = 0; i < k.length; i++){
    m[m.length] = k[i];         // m.length odredjuje se duzina niza m
    m[m.length] = j[i];
}
console.log(m);

// 8. Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var con = [];

for (i = 0; i < array1.length; i++){ //ovde se rade dve petlje jer ne znamo kolike su duzine nizovi
    con[con.length] = array1[i];
}
console.log(con);

for (j = 0; j < array2.length; j++){ 
    con[con.length] = array2[j];
}
console.log(con);

// 9. Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

var r = 2;
var array3 = [4, 6, 2, 8, 2, 2];
var newArray = [];

for (i = 0; i < array3.length; i++){  //trazimo sve brojeve koji nisu 2 i stavljamo ih u novi niz
    if (array3[i] !== r){
        newArray[newArray.length] = array3[i];
    }   
}
console.log(newArray);

// 10. Write a program that inserts a given element e on the given position p in the array a. 
// If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

var t = 78;
var positOfIndex = 3;
var a1 = [2, -2, 33, 12, 5, 8];
var a2 = [];
var j = 0;

if (positOfIndex < a1.length) {
    for (i = 0; i < a1.length; i++){
        if (positOfIndex === i) {
            a2[j] = t;
            a2[j + 1] = a1[i];
            j += 2
        } else {
            a2[j] = a1[i];
            j++
        }
    } 
} 


var t = 78;
var positOfIndex = 3;
var a1 = [2, -2, 33, 12, 5, 8];
var a2 = [];

for (var i = 0; i < a1.length; i++){
    if (positOfIndex === i){
        a2[positOfIndex] = t;
    }
    a2[a2.length] = a1[i];
}
console.log(a2);
