/**
 * Commands:
 * cd .\Day-to-Day\2024-02-19
 * node .\conditionals.js
 */

console.log("using if else");

var a = 10;
console.log("a = ",a);

if(a<20){
    console.log("a is less than 20.");
} else{
    console.log("a is greater than 20.");
}


console.log("Ternary Operator:");
(a < 20) ? (console.log("a is less than 20.")) : (console.log("a is greater than 20."));