console.log("***********************************************************");

var blog = {
    description: "blog portal",
    language: "Javascript",
    gitUrl: "http://github/",
    isInDev: true,
    printRepository: function () {
        console.log(gitUrl);
    },
    isJavaScript: function () {
        return lang === "JavaScript";
    },
    isDevelopment: function () {
        return dev ? "project is in development" : "priject is not in development";
    }
}
console.log(blog);

console.log("***********************************************************");


var calculator = {
    description: "prog",
    language: "c#",
    gitUrl: "http://github/",
    isInDev: false,
    printRepository: function () {
        console.log(getUrl);
    },
    isJavaScript: function () {
        return lang === "JavaScript";
    },
    isDevelopment: function () {
        return dev ? "project is in development" : "priject is not in development";
    }
}
console.log(calculator);

console.log("***********************************************************");


function createProject (desc, lang, gitUrl, dev) {
    var project = {
        description: desc,
        language: lang,
        gitUrl: gitUrl,
        isInDev: dev,
        printRepository: function () {
            console.log(gitUrl);
        },
        isJavaScript: function () {
            return lang === "JavaScript";
        },
        isDevelopment: function () {
            return dev ? "project is in development" : "priject is not in development";
        }
    }
    return project;
}

calculator = createProject("program that calculates", "JavaScript", "https://github.com/DarioDado/card-app", true);
blog = createProject("blog poral", "JavaScript", "https://github", true);

console.log(calculator);
console.log(blog);
calculator.printRepository();
blog.printRepository();

console.log("***********************************************************");

var someArray = [1,2,3,4];
var someOtherArray = someArray;


console.log(someArray);
console.log(someOtherArray);

someOtherArray[4] = 5;

console.log(someArray);
console.log(someOtherArray);

console.log("***********************************************************");

var b = [1,2,3];
var a = b;

console.log(a == b);

function sum (a, b) {
    return a + b;
}

function addElementToArray (arr, element) {
    arr[arr.element] = element;
}

var someArray = [1, 2, 3];

addElementToArray(someArray, 100);

console.log(someArray);

console.log("***********************************************************");

//push

var someArray1 = [12, 33, 44];

// someArray1.push(22);

// console.log(someArray1);
var newLen = someArray1.push(22, 33, 44);
var newLen = someArray1.push([22, 33, 44]);

console.log(someArray1);
console.log(newLen);

console.log("***********************************************************");


//pop




