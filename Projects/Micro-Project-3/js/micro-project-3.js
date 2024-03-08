let display = document.getElementById('displayScreen');


// calculate input
function calculate() {
    display.value = eval(display.value);
}


// Delete last element
function deleteLastInput(){
    display.value = display.value.slice(0,-1);
}


// Reset input
function resetInput(){
    display.value = 0;
}


// Append element at last
function updateInput(input){

    if(display.value == 0){
        display.value = input;
    } else{
        display.value += input;
    }
}

