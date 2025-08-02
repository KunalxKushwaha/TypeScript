export function getdetails(){}
export function addPayment(val:number){
    console.log("Payment added: " + val);
}

export default class Payment{
    constructor(public amount: number) {}
}
