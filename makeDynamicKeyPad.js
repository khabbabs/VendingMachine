var rows = 4;

var table = document.getElementById("keypadTable");
var temptr,temptd;
for(var i =0;i<rows;i++){
    temptr = document.createElement("tr");
    table.appendChild(temptr);
    
    
    
    for(var j = 0;j<2;j++){
       
    temptd = document.createElement("td");
    temptr.appendChild(temptd);
    if(j==0){
        if(i==0){
          temptd.id="1_dollar";
        }else if(i==1)
        {
        temptd.id="50_cent";
        }else if(i==2)
        {
        temptd.id="25_cent";
        }
        else {
       temptd.id="10_cent";
        } 
     }else if(j==1){
        if(i==0){
          temptd.id="1_euro";
        }else if(i==1)
        {
        temptd.id="50_pence";
        }else if(i==2)
        {
        temptd.id="20_pence";
        }
        else {
       temptd.id="10_pence";
        }
     }
    }    
}
