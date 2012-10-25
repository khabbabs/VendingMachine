
/****************************************************************************
 * Makes a Dynamic(added to the DOM using javaScript) Table.
 * based on given parameters of Height and Width.
 * the id of the 1st element(top left) is always : table 0 0
 * """"""""""""""last"""""""(bottom right) is alays : table w-1 h-1
 *@author Khabbab Saleem khabbabs@unm.edu
 ****************************************************************************/
function makeDynamicTable(width, height){



var mainTable = document.getElementById("table");
//console.log(document.getElementById("table").innerHTML);
//var newTable = document.createElement("table","border=4");
var temptr,temptd,tempTextNode;

    for(var i = 0;i<height;i++){
        temptr = document.createElement("tr");
        temptr.id ="row"+i;
        mainTable.appendChild(temptr);
        for(var j =0;j<width;j++){
           temptd = document.createElement("td")
           //tempTextNode = document.createTextNode(" "+j+i);
           temptd.id = "table "+j+" "+i;
           temptr.appendChild(temptd)
           //temptd.appendChild(tempTextNode);
           
        }
    }
    
    //document.createTextNode("text")
    console.log();
     console.log("table height:"+width+" height :"+height);
}