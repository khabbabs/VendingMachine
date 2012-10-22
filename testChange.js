

var totalChange=0;
function calChange(curValue){
    if(curValue == .25){
        setChange(.25);
    }
}

function setChange(value){
    totalChange =+value;
    document.getElementById("derp").innerHTML(totalChange);
}