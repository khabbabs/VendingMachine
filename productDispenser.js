
/****************************************************
 *creates an array which holds all the items which
 *are dispensed.
 *when its clicked the item gets dispensed,
 *displaying an alert msg for the item.
 ************************************************/
var dispensing = document.getElementById("dispTable");
var tr,td;
var dispArray = new Array();
tr = document.createElement("tr");
tr.id ="dispensingTr";
td = document.createElement("td");
td.id="dispensingTd";
dispensing.appendChild(tr);
tr.appendChild(td);
dispImg = document.createElement("img");
dispImg.style.width='90px';
dispImg.style.height='152px';
td.appendChild(dispImg);


function addToDispenser(prod){
    dispArray.push(prod);
    dispImg.src = dispArray[dispArray.length-1].image;
}

td.onclick = function(){
    var tempProd = dispArray.pop();
    alert("temp prod is : "+tempProd.name);
    if(dispArray[dispArray.length-1]==null){
    dispImg.src = null;
    }
    else{
        dispImg.src = dispArray[dispArray.length-1].image;
    }
}





