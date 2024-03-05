let promise = new Promise( function (resolve, reject){
    setTimeout(function(){
        //resolve("Resolved");
        reject("Rejected");
    }, 3000)
})

async function demo(){
    console.log("Start");
    let result = await promise;
    console.log(result);
    console.log("End");
}
//demo();

// In above example, if our promise is rejected then the code execution will stop and an error will be thrown.
// We can use try-catch to overcome the occurring the error.

async function test(){
    console.log("Start");
        try{
            let result = await promise;
            console.log(result);
        } catch(error) {
            console.log(error);
        }
    console.log("End");
}
//test();


// Throw:
try{
    for(let i=1 ; i<=10 ; i++) {
        if(i==5) {
            throw new Error("i==5 is => new error occurred");
        }
        console.log(i);
    }

} catch(error){
    console.log(error);
}
