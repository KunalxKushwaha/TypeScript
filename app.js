"use strict";
function abcd(obj) {
}
abcd({ name: "sushant", age: 23, gender: "male", empId: 101 });
class Device {
    constructor() {
        this.name = "LG";
        this.price = 1000;
        this.Model = "LG-1234";
    }
}
let D1 = new Device();
let D2 = new Device();
class BottleMaker {
    constructor(name, price, material = "Plastic") {
        this.name = name;
        this.price = price;
        this.material = material;
        if (!material) {
            this.material = "Glass"; // default value if material is not provided
        }
    }
}
const b1 = new BottleMaker("Milton", 1223, "");
class Music {
    constructor(name, artist, lenght, thumbnail = "SVG.png", isfree) {
        this.name = name;
        this.artist = artist;
        this.lenght = lenght;
        this.thumbnail = thumbnail;
        this.isfree = isfree;
        if (!thumbnail) {
            this.thumbnail = "default.png"; // default value if thumbnail is not provided
        }
    }
}
let m1 = new Music("Ek raat", "Vilen", 120, "", true);
m1.name = "Churake";
let m2 = new Music("Tum mile", "Neha Kakkar", 150, "tum_mile.png", false);
m2.lenght = 230;
class Human {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
}
let h1 = new Human("Sushant", 23, 5.8, 70);
h1.name = "Sushant Kumar";
// Access Modifiers..
class User {
    constructor(_name, age, password, email) {
        this._name = _name;
        this.age = age;
        this.password = password;
        this.email = email;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
let u1 = new User("Sushant", 23, "12345", "xyz@123gmail.com");
class Payments {
    constructor(account, amount, _pin) {
        this.account = account;
        this.amount = amount;
        this._pin = _pin;
    }
    isPaymentValid(amount) {
        return this.amount >= 0;
    }
}
class paytm extends Payments {
}
function abcdef(name, age, cb) {
    cb("Hey!!");
}
abcdef("Sushant", 23, (msg) => {
    console.log(msg);
    console.log("Callback function executed");
});
function Identity(name, age, gender = "Not to be Disclosed") {
}
Identity("Kunal Kushwaha", 20, "Male");
Identity("Lababdar", 10);
