/**
 * Command to execute file:
 * 1. cd .\Day-to-Day\2024-02-29
 * 2. node .\promisewithTimeout.js
 */


const promise = new Promise( function (resolve, reject){

    setTimeout( function(){
        console.log("Promise state before resolve/reject");
        console.log(promise);
        /*
        Promise {<pending>}
        [[Prototype]]       :  Promise
        [[PromiseState]]    : "fulfilled"
        [[PromiseResult]]   : undefined
         */

        reject();
    }, 3000)
})


promise
    .then( function(){
        console.log("Promise state after resolve");
        console.log(promise);
        /*
        Promise {<fulfilled>: undefined}
        [[Prototype]]       : Promise
        [[PromiseState]]    : "fulfilled"
        [[PromiseResult]]   : undefined
        */

    })
    .catch( function(){
        console.log("Promise state after reject");
        console.log(promise);
        /*
        Promise {<rejected>: undefined}
        [[Prototype]]       : Promise
        [[PromiseState]]    : "rejected"
        [[PromiseResult]]   : undefined
        */
    })

