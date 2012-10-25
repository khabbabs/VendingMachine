/*********************************************
 *action listeners for the main product table
 *upon click it calls the function located in
 *initializeProduct.js.
 *@author Khabbab Saleem khabbabs@unm.edu
 *******************************************/







var mainTable = document.getElementById("table").getElementsByTagName("td");
console.log("checking prod listen:"+productArray);
for(var i=0;i<mainTable.length;i++){
    mainTable[i].onclick = function(){
        //console.log(this.getElementsByTagName("img")[0].id);
                decrementQty(this.getElementsByTagName("img")[0].id);
    };
}