/**
 * Commands:
 * cd .\Day-to-Day\2024-02-20
 * node .\function.js
 */


console.log("Anonymous Function");

var anonymousFunction = function (){
    console.log("Anonymous Function evoked");
}

anonymousFunction();


console.log("Nested Function");

function abc(){
    console.log("ABC");

    function def(){
        console.log("DEF");
    }
    def();
}

abc();