
/**************************
 * main place for everything products;
 *  -adds in new products to the main array.
 *  -displays all the relevent data to the display(images)
 *
 *  lets the action listener calls the fucntions which
 *  then calls the dispenser object to do its job.
 *  
 ******************************/



// initializing the main product object array.

var productArray = new Array();
var table = document.getElementById("table").getElementsByTagName("td");
productArray[0] = new product("snicker","img/snicker.jpg",5,new Date(2012,5,5),1.50);
productArray[1] = new product("milkyway","img/milkway.jpg",5,new Date(2013,11,25),1.50);
productArray[2] = new product("butterfinger","img/butterfinger.jpg",5,new Date(2013,11,5),1.50);
productArray[3] = new product("3 musketeer","img/3musketeer.jpg",5,new Date(2013,11,15),1.50);
productArray[4] = new product("reeses","img/reeses.jpg",5,new Date(2013,11,25),1.50);
productArray[5] = new product("Doritos: spricy Chilly","img/doritos1.jpeg",5,new Date(2013,5,15),1.25);
productArray[6] = new product("Doritos: Cool Ranch","img/doritos2.jpeg",5,new Date(2013,5,15),1.25);
productArray[7] = new product("Doritos: Nacho Cheese","img/doritos3.jpeg",5,new Date(2013,5,15),1.25);
productArray[8] = new product("Doritos: Pizze Supreme","img/doritos4.jpeg",5,new Date(2013,5,15),1.25);
productArray[9] = new product("Doritos: Collisions","img/doritos5.jpeg",5,new Date(2013,5,15),1.25);
productArray[10] = new product("Lays: Classic","img/lays1.jpeg",5,new Date(2014,2,2),1.25);
productArray[11] = new product("Lays : Salt & vinegar","img/lays2.jpeg",5,new Date(2013,5,15),1.25);
productArray[12] = new product("Lays : BBQ","img/lays3.jpeg",5,new Date(2013,5,15),1.25);
productArray[13] = new product("Lays : Wavy Ranch","img/lays4.jpeg",5,new Date(2013,5,15),1.25);
productArray[14] = new product("Lays : Dill Pickle","img/lays5.jpeg",5,new Date(2013,5,15),1.25);
productArray[15] = new product("Monster : Green 16 Oz","img/monster1.jpeg",5,new Date(2015,2,15),2.50);
productArray[16] = new product("Monster : Green 32 Oz","img/monster2.jpeg",5,new Date(2015,5,18),3.50);
productArray[17] = new product("Red Bull : 16 Oz","img/redbull1.jpeg",5,new Date(2015,5,18),3.00);
productArray[18] = new product("Red Bull : sugar free 16 Oz","img/redbull2.jpeg",5,new Date(2015,5,18),3.00);
productArray[19] = new product("5 Hour Energy","img/5hour.jpeg",5,new Date(2015,5,18),3.00);
productArray[20] = new product("Aquafina ","img/aqua1.jpeg",5,new Date(2015,5,18),1.50);
productArray[21] = new product("Dr Peper","img/drpeper.jpeg",5,new Date(2015,5,18),.75);
productArray[22] = new product("Pepsi","img/pepsi.jpeg",5,new Date(2015,5,18),.75);
productArray[23] = new product("Coca Cola","img/cocacola.jpeg",5,new Date(2015,5,18),.75);
productArray[24] = new product("Vegeta","img/9000.jpeg",5,new Date(9001,9,9),9001);
// gets the image from the from the product, then
// sends that information to the DOM for it to be
// able to be added to the table.
for(var i =0;i<productArray.length;i++){
    tempimg=document.createElement("img");
    tempimg.title="Price: $"+(productArray[i].price)+"   Qty :"+productArray[i].quantity+"  Expires: "+productArray[i].date;
    tempimg.id=""+i;
    tempimg.style.width='90px';
    tempimg.style.height='152px';
    tempimg.src = productArray[i].image;
    table[i].appendChild(tempimg);
}
/****************************
 *it called from the productTableActionListener.js
 *takes the product.
 *
 *checks all relavent information such has.
 *-Date
 *-Price
 *before dispensing the product.
 *  -send it to productDispenser.js.
 ******************************/
function decrementQty(value){
    var currBlance = parseFloat(document.getElementById("curDisp").innerHTML);
    var currPrice = parseFloat(productArray[value].price);
    var curDate = new Date();
    
 if(currBlance >= currPrice){
     
    if(productArray[value].date > curDate){    
    if(productArray[value].quantity!=0){
        productArray[value].quantity--;
        document.getElementById(""+value).title="Price: $"+(productArray[value].price)+"   Qty :"+productArray[value].quantity;
        document.getElementById("curDisp").innerHTML = ((currBlance-currPrice)*100)/100;
        addToDispenser(productArray[value]);
        }
        else{
        alert("Out of : "+productArray[value].name+" ,added to the re-order list");
        }
        
    }
    else{
        alert("product is expired");
    }
    }
    else{
        alert("Insufficient funds");
    }
}