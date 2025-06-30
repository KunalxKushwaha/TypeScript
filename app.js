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
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
const b1 = new BottleMaker("Milton", 1223);
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
