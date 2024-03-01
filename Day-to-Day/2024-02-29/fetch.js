const API = fetch('https://reqres.in/api/users');

API
    .then ( function (res){
        // console.log(res);
        return res.json();
    })
    .then( function (res){
        // console.log(res);
        // console.log(res.total);
        console.log(res.data);
    })


// instead of using the variable, we can directly use .then().catch() with fetch()
/*
fetch('https://reqres.in/api/users')
    .then ( function (res){
        return res.json();
    })
    .then( function ( res){
        console.log(res.data);
    })
*/
