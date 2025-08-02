"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getdetails = getdetails;
exports.addPayment = addPayment;
function getdetails() { }
function addPayment(val) {
    console.log("Payment added: " + val);
}
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
}
exports.default = Payment;
