/**
 * Command to execute file:
 * 1. cd .\Day-to-Day\2024-02-29
 * 2. node promises.js
 */


const promise = new Promise( function (resolve, reject){
    resolve();
})

promise
    .then( function() {
        console.log("Promise resolved");
    })
    .catch( function(){
        console.log("Promise rejected");
    })
