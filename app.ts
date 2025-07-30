// var a = 12;
// var b = 4;
// let c = "sushant";
// let d = true;
// const r = 13
// let arr = [1, 2, 3, 4, 5, 'harsh'];
// const obj = {
//     name: "sushant",
//     age : 23,
// }
interface Person {
    name: string;
    age: number;
    gender?: string; // optional property
}

interface Employee extends Person {
    empId?: number;
}

function abcd(obj : Employee) {
}

abcd({name : "sushant", age: 23, gender : "male", empId: 101});

class Device{
    name = "LG";
    price = 1000;
    Model = "LG-1234";
}

let D1 = new Device();
let D2 = new Device();

class BottleMaker{
    constructor(public name: string , public price: number, public material: string = "Plastic") {
        if(!material){
            this.material = "Glass"; // default value if material is not provided
        }

    }
}
const b1 = new BottleMaker("Milton", 1223, "");

class Music {
    constructor(public name: string, public artist : string, public lenght : number, public thumbnail : string = "SVG.png",public isfree: boolean) {
        if(!thumbnail){
            this.thumbnail = "default.png"; // default value if thumbnail is not provided
        }
    }
}

let m1 = new Music("Ek raat", "Vilen", 120,"", true);
m1.name = "Churake";
let m2 = new Music("Tum mile", "Neha Kakkar", 150, "tum_mile.png", false);
m2.lenght = 230;

class Human {
    constructor(public name: string, public age: number, public height: number, public weight: number) {

    }
}

let h1 = new Human("Sushant", 23, 5.8, 70);
h1.name = "Sushant Kumar";

// Access Modifiers..

class User{
    constructor(public _name: string, public age: number, private password: string, protected email: string) {
}

    get name() {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

}

 let u1 = new User("Sushant", 23, "12345", "xyz@123gmail.com");

 class Payments {
    constructor(public account : string , public amount : number, private _pin: string) {
    }
    isPaymentValid(amount: number) {
        return this.amount >= 0;
    }
 }

 class paytm extends Payments{
    // Abstract Class...
 }