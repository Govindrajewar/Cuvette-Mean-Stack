/**
 * Commands:
 * cd .\Day-to-Day\2024-02-20
 * node .\array.js
 */


var intArray = [10, 20, 50, 30, 40, 70];
console.log(intArray);

var strArray = ['Abhi', 'Raj', 'Rahul'];
console.log(strArray);

var iplTeam = [7, "M. S. Dhoni"];
console.log(iplTeam);

console.log(".length");
var arrayLength = intArray.length;
console.log(arrayLength);

console.log(".sort");
var sortedArray = intArray.sort();
console.log(sortedArray);

console.log(".push");
var pushArray = intArray.push(85,74,96);
console.log(pushArray);

console.log(".pop");
var popArray = intArray.pop();
console.log(popArray);

console.log(".map");
var mappedArray =
intArray.map( (element)=>{
    return element /2 ;
    }
);
console.log(mappedArray);

console.log(".filter");
var filteredArray =
intArray.filter( (element) => {
    return element > 75;
    }
);
console.log(filteredArray);


console.log(".find");
var findArray =
intArray.find( (element) => {
    return element>80;
    }
);
console.log(findArray);


console.log(".forEach");
var stringArr = strArray.forEach(element => {
    console.log(element);
    }
);


