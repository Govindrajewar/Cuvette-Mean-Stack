/**
 * Command to execute file:
 * 1. cd .\Day-to-Day\2024-02-29
 * 2. node .\promiseChanining.js
 */


const promise = new Promise( function (resolve, reject) {
    // resolve("Hi there");
    reject("Sorry, I don't like you");
})


promise
    .then( function( result ) {
        console.log(result);

        // we can do chaining only if first .then() is returning a promise.
        return result;
    })
    .then( function (result){
        console.log(result + " :) ");
    })
    .catch( function (result){
        console.log(result + " :( ");
    })