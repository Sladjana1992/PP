
console.log("*****************Exer 1******************");

// Write a function that capitalizes the first letter of each string argument it receives.  
// Function arguments: ['hello', 'there', 'ES', 6]
// Output: ['Hello', 'There', 'ES']

let capitalizeLetter = (...args) => {
    let newArrList = [];
    args.forEach(ele => {
        if(typeof ele === "string"){
            newArrList.push(ele.charAt(0).toUpperCase() + ele.slice(1));
        }
    })
    return newArrList;
}

console.log(capitalizeLetter("hello", "there", "ES", 6));

console.log("*****************Exer 2******************");


// Write a function that calculates sale tax that should be paid for the product of the given price. 
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
// 	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
// 	Output2: [ 24, 20 ] // tax only

const products = [{ name: "Banana", price: 120 }, { name: "Orange", price: 100 }];

const productWithTax = products.map(product => {

    const { price: productPrice } = product;
    const { name: nesto} = product;
    
    const newProd = {
        //...product
        name: nesto,
        price: Number.parseFloat(productPrice),
        priceWithTax: productPrice * 0.2 + productPrice,
        tax: productPrice * 0.2
    }
    return newProd;
})


// let productWithTax = (...args) => {
//     args.map(product => {
//         const priceNew = product.price;
    
//         const newProd = {
//             ...args,
//             price: priceNew * 1.2
//         }
//         return newProd;
//     })
// }
// console.log(products);
console.log(productWithTax([{ name: "Banana", price: 120 }, { name: "Orange", price: 100 }]));

console.log("*****************Exer 3******************");

// Write a function that increases each element of the given array by the given value. 
// If the value is omitted, increase each element of the array by 1.  
// 	Input: [4, 6, 11, -9, 2.1], 2
// 	Output: [6, 8, 13, -7, 4.1]

const arr = [4, 6, 11, -9, 2.1];

const newArr = (arr, ele) => {
    if(!ele) {
        let increArr = arr.map(e => { 
            return e + 1;
        })
        return increArr;
    } else {
        let incereArrNew = arr.map(e => {
            return e + ele;
        })
        return incereArrNew;
    }
}

console.log(newArr(arr, 2));
console.log(newArr(arr));


console.log("*****************Exer 4******************");

// Write a function that filters all even elements of the array.
// 	Input: [6, 11, 9, 0, 3]
// 	Output: [6, 0]


const array = [6, 11, 9, 0, 3];

let filtArr = array.filter(element => {
    return (element % 2 === 0);
})

console.log(filtArr);

console.log("*****************Exer 5******************");


// Write a function that filters all the strings from the given array that contain substring JS or js.
// 	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
// 	Output: ['babel.js, 'JS standard']

let arrString = ["compiler", "transpiler", "babel.js", "JS standard", "linter"];
let newArrStr = [];

let filterArr = arrString.filter(element => {
    for(let i = 0; i < element.length; i++){
        if((element[i] === "j" || element[i] === "J") && (element[i + 1 ] === "s" || element[i + 1] === "S")){
            newArrStr.push(element)
            return newArrStr;
        }
    }
})

console.log(filterArr);


console.log("*****************Exer 6******************");


// Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// 	Output: [7, 8]

let arrInput = [1.6, 11.34, 9.23, 7, 3.11, 8];

let integerNumber = arrInput.filter(element => {
    return (Number.isInteger(element));
})

console.log(integerNumber);


console.log("*****************Exer 7******************");

// Write a function that filters all integer arguments that contain digit 5.
// 	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
// 	Output: [45, 553]


let arrArg = [23, 11.5, 9, "abc", 45, 28, 553];
let newArrInte = [];

let findNumberFive = arrArg.filter(element => {
    let integerNum = (Number.isInteger(element));
    if(integerNum) {
        let num = element.toString();
        for(let i = 0; i < num.length; i++){
            if(num[i] === "5"){
                newArrInte.push(num);
                return newArrInte;
            }
        }
    }
    
})

console.log(findNumberFive);

console.log("*****************Exer 8******************");


// Write a function that returns indexes of the elements greater than 10. 
// 	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
// 	Output: 1, 2, 5

let index =  ""; 

let indefOfEleGreaterThenTen = (arr) => {
    arr.forEach(e => {
       if(e > 10) {
        index += `${arr.indexOf(e)}, `;
       }
       return index;
    })    
}

indefOfEleGreaterThenTen([1.6, 11.34, 29.23, 7, 3.11, 18])
console.log(index);

console.log("*****************Exer 9******************");


// Create an array of persons. A person should be an object with name and age 
// properties. Experiment with enhanced object literals. 
// Write a function that prints out the names of persons older than 25. 
// Write a function that check if there is a person older than 40.
// Write a function that checks if all persons are older than 20.  

const arrObj = [
    {name: "Sladjana", age: 28}, 
    {name:"Sara", age: 10}, 
    {name: "Jelena", age: 30},
    {name: "Zeljko", age: 40}    
];

let personOlderThan25 = arr => {
    let personNew = "";
    for (let i = 0; i < arr.length; i++){
        if(arr[i].age > 25){
           personNew += `${arr[i].name}, `
        }
    }
    return personNew;
}

console.log(personOlderThan25(arrObj));

let personOlderThan40 = arr =>{
    let older = arr.filter(person => {
        if(person.age > 40) {
            return true;
        }
    })
    older.forEach(ele => {
        console.log(ele.name);
    })
}

console.log(personOlderThan25(arrObj));


console.log("*****************Exer 10******************");


// Write a function that checks if the given array is an array of positive integer values. 
// 	Input: [3, 11, 9, 5, 6]
// 	Output: yes

let filterArrNew = (arr) => {
    arr.forEach(e => e >= 0)
    return "yes";
    

}
 console.log(filterArrNew([3, 11, 9, 5, 6]));

 console.log("*****************Exer 11******************");


//  Write a function that calculates the product of the elements of the array.
//  Input: [2, 8, 3]
//  Output: 48

let arr = [2, 8, 3];

let arrProd = (arr) => {
    let first = arr[0];
    for (let i = 1; i < arr.length; i++){
        first *= arr[i];
    }
    return first;
}

console.log(arrProd(arr));


console.log("*****************Exer 12******************");


// Write a function that calculates the maximum of the given array. 
//     Input: [2, 7, 3, 8, 5.4] 
// 	Output: 8

let arr = [2, 7, 3, 8, 5.4];

let maxNumber = arr => {
    return Math.max(...arr);
}

console.log(maxNumber(arr));