/**
 * Created by spankiticus on 7/30/15.
 */
/*
Travis Johnson
July/30/2015
Final Exam
 */

//user prompts and validate
var itemCost=prompt("Please enter the cost of the item.");
while(itemCost==="" || isNaN(itemCost)){
    if(itemCost===""){
        itemCost=prompt("Please do not leave blank and only enter a number\nWhat is the cost of the item?")
    }else if(isNaN(itemCost)){
        itemCost=prompt("Please only enter a number\nWhat is the cost of the item?");
    }
}

var itemDiscountPercent=prompt("Please enter discount percent");
while(itemDiscountPercent===""||isNaN(itemDiscountPercent)||itemDiscountPercent>100||itemDiscountPercent<0){
    if(itemDiscountPercent===""){
        itemDiscountPercent=prompt("Please do not leave blank.\nWhat is the discount percent?")
    }else if(isNaN(itemDiscountPercent)){
        itemDiscountPercent=prompt("Please only enter a number\nWhat is the discount percent?");
    }else if(itemDiscountPercent>100){
        itemDiscountPercent=prompt("Please do not enter a number greater than 100.\nWhat is the discount percent?");
    }else{
        itemDiscountPercent=prompt("Please do not enter a number less than 0\nWhat is the discount percent?");
    }

}
//function
function finalPrice(cost,discount){
    var discount=cost*(discount/100);
    var total=cost-discount;
    return total
}
//function call
var cost=finalPrice(itemCost,itemDiscountPercent);
//console log
console.log("The final cost of an item that costs $"+itemCost+" with a discount of "+itemDiscountPercent+"% is $" +cost);
/*
Test
Entered 100 for cost
Entered 10 for discount percent
Returned 90
Entered 100 for cost
Entered 90 for discount percent
Returned 10
 */