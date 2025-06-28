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

function abcd(obj : Person) {
}

abcd({name : "sushant", age: 23,}); // This will not throw an error because 'city' is not a required property in the interface