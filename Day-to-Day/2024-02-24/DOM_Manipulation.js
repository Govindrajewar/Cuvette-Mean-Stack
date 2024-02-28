//console.log("Using following methods we can manipulate DOM.");

// getElementByID:
document.getElementById("main-header").innerText = "ANIMAL"

// getElementsByClassName:
document.getElementsByClassName("sub-header")[0].innerText = "Sub-Header 1";
document.getElementsByClassName("sub-header")[1].innerHTML = "Sub-Header 2";

// getElementsByTagName:
document.getElementsByTagName('p')[0].innerText = "Paragraph 1 after manipulation"
document.getElementsByTagName('p')[1].innerText = "Paragraph 2 after manipulation"


// querySelector('#id'):
document.querySelector('#main-header').innerText = "Main-Header"

// querySelector('.class'):
document.querySelector('.sub-header').innerText = "Sub-Header"

// querySelector('tag'):
document.querySelector('p').innerHTML = "<b>This is manipulated using querySelector('p')</b>"


// Apply CSS to DOM element using JavaScript:
// Way 1:
document.getElementsByClassName("sub-header")[0].style.color = "violet"
document.getElementsByTagName("p")[1].style.color = "red"


// Way 2:
document.querySelector('#main-header').style.cssText = 'background-color: black; color: white'