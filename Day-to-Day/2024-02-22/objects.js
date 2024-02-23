var person = {
    firstName : "Abhi",
    lastName : "Rajewar",
    age : 25
}

// console.log(person);


// console.log("Accessing using dot operator:");
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);


// console.log("Accessing using Square bracket:");
// console.log(person['firstName']);
// console.log(person['lastName']);
// console.log(person['age']);


// console.log("Adding new property to object using dot operator");
// person.gmail = "abhi.rajewar@gmail.com";
// person.contactNo = 9876543210;
// console.log(person);


console.log("Adding new property to object using square bracket & key");
person['college'] = "MPGI COE";
person['city'] = "Nanded";
person['currentCity'] = 'Nanded';
console.log(person);


// console.log("Deleting property from object");
// delete person.age;
// console.log(person);


// console.log("Delete Property using square bracket and key name");
// delete person['lastName'];
// console.log(person);


// console.log("Update values using dot operator");
person.currentCity = 'Pune';
// console.log(person);


// console.log("Update values using square brackets & key");
// person['age'] = 26;
// console.log(person);


// console.log("Convert object to string");
// var strPerson = JSON.stringify(person);
// console.log(person);            // Original
// console.log(strPerson);         // Converted


// console.log("Converting back the string to Object");
// var objPerson = JSON.parse(strPerson);
// console.log(person);            // Original
// console.log(strPerson);         // Converted str
// console.log(objPerson);         // Converted obj


// console.log("Check all keys available in object");
// var keys = Object.keys(person);
// console.log(keys);

// console.log("check all values available in object");
// var values = Object.values(person);
// console.log(values);

// console.log("check all entries of key value pairs");
// var allEntries = Object.entries(person);
// console.log(allEntries);



// console.log("Iterate through object using forEach:");
// Object.keys(person).forEach(function (key) {
//     console.log(`${key}: ${person[key]}`);
// });

// Object.keys(person).forEach(function (key) {
//     console.log(key);
// });


// console.log("Iterate through object using for-of loop");
// for (let keys of Object.keys(person)){
//     console.log(keys +" : "+ person[keys] );
// }


// console.log("Iterate through object using for-in loop");
// for (let key in person){
//     console.log(key +" : "+ person[key]);
// }


