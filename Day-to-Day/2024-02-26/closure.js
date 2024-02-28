// self invoking function:
(
    function () {
        console.log("Self invoking function invoked...");
    }
)  ( )
/*  ▲ 
*   |____ function call:
*/



// closure:
let outer = function () {
    let x = 11;

    let inner = function () {
        console.log(x);
    }

    return inner;
}

let def = outer();
def();



// Arrow function:
// Way 1:
let sum = (a, b) => {
    return a + b;
}
console.log( sum(10, 20) );

// Way 2:   in single line:
let multi = (a, b) => a*b;
console.log(multi(5, 4));

