
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
        document.getElementById("curDisp").innerHTML = (currBlance-currPrice);
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