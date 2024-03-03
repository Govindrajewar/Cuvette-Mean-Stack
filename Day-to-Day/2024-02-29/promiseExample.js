const promise = new Promise( function (resolve, reject) {

    // console.log(promise);       //ReferenceError: Cannot access 'promise' before initialization

    console.log("Promise pending....");

    // only one resolve/reject gets executed.
    // resolve("success");
    // reject("failed");

});

// console.log(promise);


// fetch API display
fetch('https://reqres.in/api/users')
    .then( function (res){
        // response in not in JSON format
        console.log(res);

        return  res.json();  // returns a promise that resolves to the result of parsing text as JSON
    })
    .then (function (res){
        console.log(res);
        return res.data;    //return data from response
    })
    .then( function (res){
        console.log(res);

        // retrieving full name & email from data
        res.forEach(element => {

            document.getElementById('data').innerHTML +=
            `<table>
                <tr>
                    <td>${element.first_name}</td>
                    <td>${element.last_name}</td>
                    <td>${element.email}</td>
                </tr>
            </table>`
        });
    })



// Promise setTimeout:
/*
promise
    .then( function (result) {

        setTimeout( function(){
            console.log("Promise " + result);
        }, 5000)
    })
    .catch( function(result){
        setTimeout( function(){
            console.log("Promise "+ result);
        },3000)
    })
*/



// Promise Chaining:
/*
promise
    .then( function(result){
        console.log("Promise pending...");
        console.log(promise);
        return result;
    })
    .then( function(result){
        console.log("Promise "+ result);
    })
    .catch( function(result){
        console.log("Promise "+ result);
        console.log(promise);
    })
*/


