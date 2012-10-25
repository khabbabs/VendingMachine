//var padElements= document.getElementById("keypadTable").attributes.length;
//console.log("elements"+padElements[0]);
var dollar,_50cents,_25cents,_10cents,change,euro,_50pence,_20pence,_10pence;
var totalAmount=0;
dollar   = document.getElementById("1_dollar");
_25cents = document.getElementById("25_cent");
_50cents = document.getElementById("50_cent");
_10cents = document.getElementById("10_cent");
change = document.getElementById("change");

euro   = document.getElementById("1_euro");
_20pence = document.getElementById("20_pence");
_50pence = document.getElementById("50_pence");
_10pence = document.getElementById("10_pence");




dollar.onclick = function (){
    updateTotalAmmount(1);
};


_50cents.onclick = function (){
    updateTotalAmmount(.50);
};

_25cents.onclick = function (){
    updateTotalAmmount(.25);
};


_10cents.onclick = function (){
    updateTotalAmmount(.10);
};


euro.onclick = function (){
    updateTotalAmmount(1*(1.66));
};


_50pence.onclick = function (){
    updateTotalAmmount(.50*(1.66));
};

_20pence.onclick = function (){
    updateTotalAmmount(.20*(1.66));
};


_10pence.onclick = function (){
    updateTotalAmmount(.10*(1.66));
};

change.onclick = function (){
    updateTotalAmmount("clear");
};


function updateTotalAmmount(value){
    
    totalAmount = parseFloat(document.getElementById("curDisp").innerHTML);
    if(value!="clear"){
    totalAmount+=parseFloat(value);
    document.getElementById("curDisp").innerHTML=Math.round(totalAmount*100)/100;
    }else if(value=="clear"){
        alert("your total change is : $"+Math.round(totalAmount*100)/100);
        document.getElementById("curDisp").innerHTML=0.00;
        totalAmount=0;
    }
    console.log("here :"+totalAmount);
}
