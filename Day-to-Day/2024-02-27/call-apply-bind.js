const student = {
    firstName: 'Raj',
    lastName: 'Kapoor',
    age: 25
}


console.log("call apply bind without parameters");
const fullName = function (){
    console.log(this.firstName + ' ' + this.lastName);
}
//fullName();         //undefined undefined

// call:
fullName.call(student);                         // Raj Kapoor
// apply:
fullName.apply(student);                        // Raj Kapoor
// bind:
const bindedFullName = fullName.bind(student);
bindedFullName();                               // Raj Kapoor


console.log("call apply bind with parameters");
const fullNameWithParameters = function (state, country){
    console.log(this.firstName + ' ' + this.lastName + ' ' + state + ' ' + country);
}

// call:
fullNameWithParameters.call(student, "MH", "India");        // Raj Kapoor MH India
// apply:
fullNameWithParameters.apply(student, ["MH", "India"]);     // Raj Kapoor MH India
// bind:
const bindedFullNameWithParameter = fullNameWithParameters.bind(student, "MH",  "India");
bindedFullNameWithParameter();                              // Raj Kapoor MH India

