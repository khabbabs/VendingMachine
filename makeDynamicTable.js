




function makeDynamicTable(width, height){

//document.getElementById("mainBody").innerHTML="is gettin the mainBody";

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
           tempTextNode = document.createTextNode(" "+j+i);
           temptd.id = "Data "+j+" "+i;
           temptr.appendChild(temptd)
           temptd.appendChild(tempTextNode);
        }
    }
    
    //document.createTextNode("text")
    console.log();
     console.log("table height:"+width+" height :"+height);
     
    



}