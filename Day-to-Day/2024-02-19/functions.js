/**
 * Commands:
 * cd .\Day-to-Day\2024-02-19
 * node .\functions.js
 */


// Normal Function:
function xyz(){
    console.log("xyz");
}

xyz();



console.log("Anonymous Function:");

var anonymousFunction = function (){
    console.log("Anonymous Function evoked");
}

anonymousFunction();


console.log("Nested Function:");
function abc(){
    console.log("ABC");

    function def(){
        console.log("DEF");
    }
    def();
}

abc();


console.log("Parameterized function:");
var sum = function (a, b){
    console.log("sum = ", a+b);
}

sum(7,10);