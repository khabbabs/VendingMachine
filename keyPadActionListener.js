//var padElements= document.getElementById("keypadTable").attributes.length;
//console.log("elements"+padElements[0]);
var dollar,_25cents,_10cents,change;
var totalAmount=0;
dollar   = document.getElementById("1_dollar");
_25cents = document.getElementById("25_cent");
_10cents = document.getElementById("10_cent");
change   = document.getElementById("change");


dollar.onclick = function (){
    updateTotalAmmount(1);
};


_25cents.onclick = function (){
    updateTotalAmmount(.25);
};


_10cents.onclick = function (){
    updateTotalAmmount(.10);
};

change.onclick = function (){
    updateTotalAmmount("clear");
};


function updateTotalAmmount(value){
    if(value!="clear"){
    totalAmount+=value;
    document.getElementById("curDisp").innerHTML=Math.round(totalAmount*100)/100;
    }else if(value=="clear"){
        alert("your total change is : $"+Math.round(totalAmount*100)/100);
        document.getElementById("curDisp").innerHTML=0.00;
        totalAmount=0;
    }
}
