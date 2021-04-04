// 1. Write a function to count vowels in a provided string. 
// Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 

function vowels(string){
    var smallBig = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var count = 0;
    for (var i = 0; i < string.length; i++){
        for (var j = 0; j < smallBig.length; j++){
            if(string[i] === smallBig[j]){
                count++;
            }
        }
    }
    return count;
}

console.log(vowels("ZeljAna Kuvezdanin"));

// 2. Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

function combine(letter, number){
    var newArr = [];
    for (var i = 0, j = 0; i < letter.length, j < number.length; i++, j++){
        newArr[newArr.length] = letter[i];
        newArr[newArr.length] = number[j];
    }
    return newArr;
}

console.log(combine(["a", "b", "c"], [1,2,3]));

// 3. Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]


function rotate(arr, k){
    var o = [];
    var m = [];
    for (var i = 0; i < arr.length; i++){
        if(i < k){
            o[o.length] = arr[i];
        } else {
            m[m.length] = arr[i];
        }
    }
    for (var i = 0; i < o.length; i++){
        m[m.length] = o[i];
    }
    
    return m;
}

console.log(rotate([1,2,3,4,5,6], 1));

// 4.	Write a function that takes a number and returns array of its digits.

function digit(n){
    var array = [];
    for (var i = 1; i <= n; i++){
        array[array.length] = i;
    }
    return array;
}

console.log(digit(10));

// 5.	Write a program that prints a multiplication table for numbers up to 12.

function num(l){
    var some = "";
    for (var i = 1; i <= l; i++){
        some += i + " * " + i + " = " + (i*i) + "\n";
    }
   return some;
}

console.log(num(12));

// 6.	Write a function to input temperature in Centigrade and convert to Fahrenheit.

function temp(c){
    return c + " C " + " is " + (c * 9/5 + 32) + " F.";
}

console.log(temp(1));

// 7.	Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

function max(m){
    var maxEle = m[0];
    for(var i = 0; i < m.length; i++){
        if(maxEle < m[i] && typeof m[i] === "number"){
            maxEle = m[i];
        }
        }
      
    return maxEle;
}

console.log(max([1, 2, 3, 4, NaN, "7", "s", "25"]));


// 8.	Write a function to find the maximum and minimum elements. Function returns an array.

function minMax(m){
    var min = m[0];
    var max = m[0];
    var newM = [];
    for (var i = 0; i < m.length; i++){
        if (min > m[i]){
            min = m[i];
        }
        if (max < m[i]){
            max = m[i];
        }
        
    }
    newM[newM.length] = min;
    newM[newM.length] = max;

    return newM;
}

console.log(minMax([1, 8, 12, 25, -8]));

// 9.	Write a function to find the median element of array.

// 10.	Write a function to find the element that occurs most frequently.

function mostFreq(s){
    var k = [];
    var count = 0;
    var elemApea = 1;
    for (var i = 0; i < s.length; i++){
        for (var j = i; j < s.length; j++){
            if(s[i] === s[j]){
                count++;
            }
            if(elemApea < count){
                k = s[i];
                elemApea = count;
                // console.log(count);
            }
        }
        count = 0;
    }
    return k;
}

console.log(mostFreq(['a', 7, 7, 8, 1, NaN, Infinity, 'm', 's']));

// 11.	Write a function to find and return the first, middle and last element of an array if 
// the array has odd number of elements. If number of elements is even, return just the first 
// and the last. In other cases (empty array), input array should be returned.

function element(array){
    var a = [];
    
    if(array.length === 1){
        a[a.length] = array[0];
    }else if(array.length % 2 !== 0){
        a[a.length] = array[0];
        a[a.length] = array[(array.length - 1) / 2];
        a[a.length] = array[array.length - 1];
    }else if(array.length % 2 === 0){
        a[a.length] = array[0];
        a[a.length] = array[array.length - 1];
    }

    if(array.length < 1){
         a = 0;
    
    }
    return a;   
}

console.log(element([]));

// 12.	Write a function to find the average of N elements. Make the function flexible to receive 
// dynamic number or parameters.

function avg(a){
    var sum = 0;
    var average;
    for (var i = 0; i < a.length; i++){
        sum += a[i];
    }
    average = sum / a.length;
    return average;
}

console.log(avg([3, 3, 3]));

