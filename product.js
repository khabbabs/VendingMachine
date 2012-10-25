/************************
 *this is prodcut object
 *holds all relavent parameters
 *needed for the product.
 *@author khabbab Saleem khabbabs@unm.edu
 **********************/
var name,image,quantity,date,price;

function product(name,image,quantity,date,price){
    this.name=name;
    this.image=image;
    this.quantity=quantity;
    this.date=date;
    this.price=price;
}

