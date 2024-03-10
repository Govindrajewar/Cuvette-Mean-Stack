// default visibility of rules & result is "hidden"
hideRules();
hideResult();
hideNextBtn();


function displayResult(input){

    // user selected input:
    userSelected(0, input);

    // generate random number for Computer Selection
    let randomNumber = generateRandomNumber(1,4);
    userSelected(1, randomNumber);

    // compare user and computer selection
    updateResult(input, randomNumber);

    // display result
    display();
}


// Hide Result:
function hideResult() {
    document.getElementsByClassName('display-result')[0].style.visibility = 'hidden';
    document.getElementsByClassName('replay-btn')[0].style.visibility = 'hidden';

    hideNextBtn();
}


// Hide Rules:
function hideRules(){
    document.getElementsByClassName('game-rules')[0].style.visibility = 'hidden';
    document.getElementsByClassName('hide-btn')[0].style.visibility = 'hidden';
}


// Show Rules
function showRules(){
    document.getElementsByClassName('game-rules')[0].style.visibility = 'visible';
    document.getElementsByClassName('hide-btn')[0].style.visibility = 'visible';
}


function userSelected(user, input){

    switch(input){
        case 1:
            document.getElementsByClassName('result-icon')[user].innerText = '✊';
            break;
        case 2:
            document.getElementsByClassName('result-icon')[user].innerText = '✌';
            break;
        case 3:
            document.getElementsByClassName('result-icon')[user].innerText = '✋';
            break;
    }
}


// generate random number
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


// checking condition to show result
function updateResult(input, randomNumber){
    if(input == randomNumber){
        draw();
    }

    else if(input == 1 && randomNumber == 2 ||
            input == 2 && randomNumber == 3 ||
            input == 3 && randomNumber == 1
    ){
        userWin();
    }
    else if(input == 2 && randomNumber == 1 ||
            input == 3 && randomNumber == 2 ||
            input == 1 && randomNumber == 3
    ){
        computerWin();
    }
}


function display(){
    document.getElementsByClassName('display-result')[0].style.visibility = 'visible';
    document.getElementsByClassName('replay-btn')[0].style.visibility = 'visible';
}


// Display result:
function draw(){
    document.getElementById('result').innerHTML = '<div><h1>TIE UP<h1></div>';
    document.getElementsByClassName('replay-btn')[0].innerText = 'REPLAY';
}

function  userWin(){
    document.getElementById('result').innerHTML = '<div><h1>YOU WIN<h1> <h3>AGAINST PC</h3></div>';
    document.getElementsByClassName('replay-btn')[0].innerText = 'PLAY AGAIN';

    // enable next button after user wins
    document.getElementsByClassName('next-btn')[0].style.visibility = 'visible';
    document.getElementsByClassName('rules-btn')[0].style.right = '200px';
}

function computerWin(){
    document.getElementById('result').innerHTML = '<div><h1>YOU LOST<h1> <h3>AGAINST PC</h3></div>';
    document.getElementsByClassName('replay-btn')[0].innerText = 'PLAY AGAIN';
}


// hide next button & change position of rules button
function hideNextBtn(){
    document.getElementsByClassName('next-btn')[0].style.visibility = 'hidden';
    document.getElementsByClassName('rules-btn')[0].style.right = '50px';
    document.getElementsByClassName('next')[0].style.visibility = 'hidden';
}


// display next screen as you won the game
function nextScreen(){
    document.getElementsByClassName('next')[0].style.visibility = 'visible';
    document.getElementsByClassName('replay-btn')[0].style.visibility = 'visible';

    document.getElementsByClassName('next-btn')[0].style.visibility = 'hidden';
    document.getElementsByClassName('rules-btn')[0].style.right = '50px';

}