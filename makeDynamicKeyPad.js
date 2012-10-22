var rows = 4;

var table = document.getElementById("keypadTable");
var temptr,temptd;
for(var i =0;i<rows;i++){
    temptr = document.createElement("tr");
    temptd = document.createElement("td");
    if(i==0){
        temptd.id="1_dollar";
    }else if(i==1){
        temptd.id="25_cent";
    }else if(i==2){
        temptd.id="10_cent";
    }
    else {
        temptd.id="change";
    }
    table.appendChild(temptr);
    temptr.appendChild(temptd);
}
