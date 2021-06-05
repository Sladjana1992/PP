//constructor App

function App (name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

App.prototype.like = function() {
    return this.stars++;
}

App.prototype.showStars = function() {
    return this.stars;
}
//constructor WebApp

function WebApp (name, url, technologies, licence, stars){
    App.call(this, name, licence, stars)
    this.url = url;
    this.technologies = technologies;
    
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function() {
    return this.name + " " + this.url + " " + this.technologies + " " + this.licence + " "
    + this.stars;
}

WebApp.prototype.reactBased = function() {
    if(this.technologies === "React") {
        return "One of the used technologies is React."
    } else {
        return "One of the used technologies is not React."
    }
}

WebApp.prototype.isCCLicence = function() {
    if(this.licence === "CC") {
        return "The licence of the application is CC (Creative Commons).";
    } else {
        return "The licence of the application is not CC (Creative Commons).";
    }
}

//testing 
var chrome = new WebApp("chrome", "www.google.rs", "React", "CC", 5);
chrome.like();
console.log(chrome.showStars()); 
console.log(chrome.getData());

//constructor MobileApp

function MobileApp (name, platforms, licence, stars) {
    App.call(this, name, licence, stars)
    this.platforms = platforms;
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function() {
    return this.name + " " + this.platforms + " " + this.licence + " " + this.stars;
}

MobileApp.prototype.forAndroid = function() {
    if(this.platforms === "Android") {
        return "It is for Android."
    } else {
        return "It is not for Android."
    }
}

// testing
var mobile = new MobileApp ("samsung", "Android", "CC", 6);
mobile.like();
console.log(mobile.showStars());
console.log(mobile.getData());
console.log(mobile.forAndroid());

