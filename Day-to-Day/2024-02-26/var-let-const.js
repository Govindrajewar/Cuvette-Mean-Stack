// VAR:
var x1 = 10;
{
    x1 = 20;
    console.log(x1);     // 20
}
console.log(x1);         // 20


var x2 = 10;
{
    var x2 = 20;
    console.log(x2);     // 20
}
console.log(x2);         // 20


var x2 = 30;
console.log(x2);         // 30



// LET:
let y1 = 10;
{
    y1 = 20;
    console.log(y1);     // 20
}
console.log(y1);         // 20


let y2 = 10;
{
    let y2 = 20;
    console.log(y2);     // 20
}
console.log(y2);         // 10


/*
let y2 = 30;            // SyntaxError: Identifier 'y2' has already been declared
console.log(y2);
*/



// CONST: can not be re-assigned
/*
const z1 = 10;
{
    z1 = 20;             // TypeError: Assignment to constant variable.
    console.log(z1);     // 20
}
console.log(z1);         // 10
*/


const z2 = 10;
{
    const z2 = 20;
    console.log(z2);     // 20
}
console.log(z2);         // 10


/*
const z2 = 30;          // SyntaxError: Identifier 'z2' has already been declared
console.log(z2);         // Error occurs @lineNo.58
*/

