// 1 . Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no

function element(array, e){
    var givenElement = "no";
    for (var i = 0; i < array.length; i++){
        if(array[i] === e){
            givenElement = "yes";
        }
    }
    return givenElement;
}

console.log(element([5, -4.2, 3, 7], 7));

// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function mult(arr){
    var arr1 = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
        arr1[arr1.length] = arr[i]*2;
        }else {
            arr1[arr1.length] = arr[i];
        }
    }
    return arr1;
}

console.log(mult([-3, 11, 5, 3.4, -8]));

// 3. Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function min(a){
    var min = a[0];
    var m = 0;
    for (var i = 0; i < a.length; i++){
        if (a[i] < min){
            min = a[i];
            m = i;
        }  
    }
    return min, m;
}
console.log(min([4, 2, 2, -1, 6]))

// 4.	Write a program that finds the second smallest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2

function find(b){
    var min = b[0];
    var nextMin = b[0];
    for (var i = 0; i < b.length; i++){
        if(min > b[i]){
            min = b[i];
        }
    }
    for (var i = 0; i < b.length; i++){
        if (nextMin > b[i] && b[i]  !== min){
            nextMin = b[i];
        }
    }
    return nextMin;
}

console.log(find([4, 8, 5, -1, 6]));

// 5.	Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function sumPos(c){
    var sum = 0;
    for (var i = 0; i < c.length; i++){
        if (c[i] > 0){
            sum += c[i];
        }
    }
    return sum;
}
console.log(sumPos([3, 11, -5, -3, 2]));

// 6.	Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.

function symmetric(d){
    var isSyme = true;
    for (var i = 0, j = d.length - 1; i < j; i++, j--){
        if (d[i] !== d[j]){
            isSyme = false;
        }
    }
    if (isSyme){
        return "The array is symmetric."
    }else {
        return "The array is not symmetric."
    }
}

console.log(symmetric([2, 4, -2, 7, -2, 4, 1]));

// 7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function iner(e, f){
    var m = [];
    for (var i = 0; i < e.length; i++){
            m[m.length] = e[i];
            m[m.length] = f[i];
    }
    return m;
}

console.log(iner([4, 5, 6, 2], [3, 8, 11, 9]));

// 8.	Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function arrays(m, p){
    var s = [];
    for (var i = 0; i < m.length; i++){
        s[s.length] = m[i];
    }
    for (var i = 0; i < p.length; i++){
        s[s.length] = p[i];
    }
    return s;
}

console.log(arrays([4, 5, 6, 2], [3, 8, 11, 9]));


// 9.	Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]

function del(g, e){
    var k = [];
    for (var i = 0; i < g.length; i++){
        if (g[i] !== e){
            k[k.length] = g[i];
        }
    }
    return k;
}

console.log(del([4, 6, 2, 8, 2, 2], 2));

// 10.	Write a program that inserts a given element e on the given position p in the array a. 
// If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

function element(e, p, a){
    var h = [];
    for (var i = 0; i < a.length; i++){
        if (i === p) {
            h[p] = e;
            h[p+1] = a[i];

        }else {
            h[h.length] = a[i];

        }
    }
    return h;
}

console.log(element(78, 3, [2, -2, 33, 12, 5, 8]));