/**
 * Created by spankiticus on 7/28/15.
 */
/*
Travis Johnson
July/28/2015
Day 10 Review
 */

//alert("Testing");

//Figure out how much pizza costs per slice and the cost per square inch of pizza

//prompt the user for the radius of the pizza

var pizzaRadius = prompt("Welcome lets calculate the cost of your pizza. What is the radius of your pizza");
while(pizzaRadius === "" || isNaN(pizzaRadius)){
    //reprompt user
    pizzaRadius = prompt("Please do not leave blank and only use numbers\nWhat is the radius of your pizza")

}

//prompt the user for cost of whole pizza
do{
    var pizzaCost = prompt("How much does your pizza cost in total?\nPlease do not leave blank and only use numbers");

} while(pizzaCost === "" || isNaN(pizzaCost));

//prompt the user for how many slices are in their pizza
do{
    var pizzaSlices = prompt("How many slices are in your pizza\nPlease do not leave blank and only use numbers")
} while(pizzaSlices === "" || isNaN(pizzaSlices));

//Function call to lordFunction
var results = lordFunction(pizzaRadius,pizzaCost,pizzaSlices);

//console log info to user
console.log("Your pizza cost $"+ results[0] + "per square inch or $"+results[1] + "per slice");





//Create a function that will round all of the other functions
function lordFunction(radius,cost,slices){
    //function will call other three functions and return values

    //call the area function and capture the answer
    var area = pizzaArea(radius);

    //call the function for square inch cost
    var areaCost = pizzaSquareInchCost(area,cost);

    //call slice per cslice
    var slicePrice = pricePerSlice(slices,cost);

    //return these answers to our main code
    return [areaCost,slicePrice];

}








//A function that calculates the are of pizza
function pizzaArea(r){
    //area = r*r*Pi
    var area = r*r*Math.PI;
    return area

}

//Function that calculates the price per square inch of pizza
function pizzaSquareInchCost(price,area){
    // price / area
    var costPerSquareInch = price / area;

    //We should round this number to 2 decimal places
    costPerSquareInch = costPerSquareInch.toFixed(2);
    return costPerSquareInch
}

//Function that calculates the price per slice
function pricePerSlice(slices,price){
    //price / slices
    var costPerSlice = price/slices;
    //Round
    costPerSlice = costPerSlice.toFixed(2);
    return costPerSlice
}



