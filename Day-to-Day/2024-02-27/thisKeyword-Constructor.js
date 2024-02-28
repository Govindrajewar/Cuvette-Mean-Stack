// this Keyword:
const studentDetails = {
    firstName: "Abhi",
    lastName: "Rajewar",
    email: "abhi@gmail.com",
    fullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

studentDetails.fullName();


// constructor:
function Student(firstName, age, batch){
    this.firstName = firstName;
    this.age = age;
    this.batch = batch;
}

let abhiDetails = new Student("Abhi", 25, "MERN");
console.log(abhiDetails);

let rajDetails = new Student("Raj", 24, "MEAN");
console.log(rajDetails);

