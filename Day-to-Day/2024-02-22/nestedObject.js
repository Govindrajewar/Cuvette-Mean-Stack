/**
 * Commands to execute this file via Terminal.
 * 1. cd .\Day-to-Day\2024-02-22
 * 2. node .\nestedObject.js
 */


var student = {
    firstName: "Abhi",
    lastName: "Rajewar",
    email: "abhi@gmail.com",
    address: {
        streetNo: 222,
        landmark: "Near BSNL Exchange",
        city: "Nanded",
        pinCode: 431605
    },
    getAddress: function(){
        console.log(`Stree No: ${this.address.streetNo} landmark: ${this.address.landmark} city: ${this.address.city} PinCode: ${this.address.pinCode}`);
    }
}

console.log(student.address.city);
student.getAddress();