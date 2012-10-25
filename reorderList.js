




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