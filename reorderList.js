

/*********************************************************
 *Looks for the re order table on the dom, then it goes
 *through the array of products to see if any of them is
 *less then 5 (max value for demo purposes).
 *
 *  determines the amount needed to be order based on
 *  its comparison to max value(5).
 *  @author Khabba Saleem  khabbabs@gmail.com  
 *
 *
 *************************************************/


var reOrderButton = document.getElementById("reOrder");
var list;
var amtToOrder;
var maxVolume = 5;
reOrderButton.onclick = function(){
    list = undefined+"\n";
    for(var i=0;i<productArray.length;i++){
        //alert(productArray[i].name+"\n");
        amtToOrder = maxVolume- productArray[i].quantity;
        list += productArray[i].name +" : " + amtToOrder +"\n";
    }
    alert(list);
}