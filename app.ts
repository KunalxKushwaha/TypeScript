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
