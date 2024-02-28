//Event handling:
function onClick(){
    console.log("single click button clicked");
}


function onDblClick(){
    console.log("Double click button clicked");
}


// Mouse Events:

function onMouseEnterParent(){
    console.log("Mouse Enter in Parent div");

}

function onMouseEnterChild(){
    console.log("Mouse Enter in Child div");
}

function onMouseMove(){
    console.log("Mouse Moving...");
}



// Key Events:
function keyPressed(){
    console.log("Key pressed");
}


function keyUp(){
    console.log("Key Up");
}


function keyDown(){
    console.log("Key Down");
}


// addEventListner:

document.getElementById("btn-1").addEventListener(
    "click",
    function(){
        console.log("click event");
        document.getElementById("btn-2").style.backgroundColor = "purple";
    }
)


document.getElementById("btn-2").addEventListener(
    "mousemove",
    function (){

        const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
        document.getElementById("btn-1").style.backgroundColor = randomColor;

    }
)


// Event Propagation / Event Bubbling:

document.getElementById("outer").addEventListener(
    "click",
    function(event){
        console.log("outer div clicked");
    }
)


document.getElementById("inner").addEventListener(
    "click",
    function(){
        console.log("inner div clicked");
        // event is fired when the outer div is clicked
        event.stopPropagation();
    }
)


