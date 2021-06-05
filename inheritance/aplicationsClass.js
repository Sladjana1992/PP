class App {
    constructor (name, licence, stars) {
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }

    like() {
        return this.stars++;
    }

    showStars() {
        return this.stars;
    }
}


class WebApp extends App {
    constructor (name, url, technologies, licence, stars) {
        super(name, licence, stars)

        this.url = url;
        this.technologies = technologies;
       
    }

    getData() {
        return this.name + " " + this.url + " " + this.technologies + " " + 
        this.licence + " " + this.stars;
    }

    reactBased() {
        if(this.technologies === "React") {
            return "One of the used technologies is React."
        } else {
            return "One of the used technologies is not React."
        }
    }

    isCCLicence() {
        if(this.licence === "CC") {
            return "The licence of the application is CC (Creative Commons).";
        }else {
            return "The licence of the application is not CC (Creative Commons).";
        }
    }

}

class MobileApp extends App {
    constructor (name, platforms, licence, stars) {
        super(name, licence, stars)

        this.platforms = platforms;
        
    }

    getData() {
        return this.name + " " + this.platforms + " " + this.licence + " " + this.stars;
    }

    forAndroid() {
        if(this.platforms === "Android") {
            return "It is for Android."
        } else {
            return "It is not for Android."
        }
    }
}

var chrome = new WebApp ("google", "www.google.rs", "React", "CC", 7);
var samsung = new MobileApp ("viber", "android", "CC", 9)

console.log(chrome.getData());
chrome.like();
chrome.like();
console.log(chrome.getData());


console.log(samsung.getData());
samsung.like();
console.log(samsung.getData());