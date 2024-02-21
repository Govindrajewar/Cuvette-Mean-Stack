var x = 10;
console.log("x = ",x);
console.log("typeof x is: ",typeof(x));

console.log("Using DOM");

document.getElementById('header2').innerText = 'New Header Added'

document.getElementById('para2').innerHTML =
'<h3 style="color=green;"> This is updated text after using DOM Manipulation.</h3>'
document.getElementById('para1').innerText = "Error Occured."