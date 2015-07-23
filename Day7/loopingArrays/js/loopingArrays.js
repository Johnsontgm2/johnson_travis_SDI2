/**
 * Created by spankiticus on 7/21/15.
 */
/*
 Travis Johnson
 Section 00
 07/21/15
 Day 7 loop arrays
 */


//alert("Testing");

// Tell each member of the scooby gang that they solved a mystery

// Create an array of gang members
var scoobyGang = ["Scooby Doo", "Shaggy", "Velma", "Daphne", "Fred"];

//Add scrappy to the gang
scoobyGang.push("Scrappy");

// create for loop to cycle through the array
for(var i = 0; i < scoobyGang.length; i ++){
    //Call out scooby and shaggy to get a scooby snack
    if(scoobyGang[i] === "Scooby Doo" || scoobyGang[i] === "Shaggy"){
        console.log("Good job " + scoobyGang[i] + " You get a scooby snack");

    } else{
        //console.log each person
        console.log("You solved the case " + scoobyGang[i] + "!");
        console.log(scoobyGang[i]);
    }



}

//Keep track of our bills and get the total and average
var bills = [50,10,5,20,10];

//create variable for total and average
var total = 0;
var average = 0;

//create variable to track item total
var numItems = 0;
//J because i already exist
for(var j = 0; j < bills.length; j++){

    // only add them if they are equal too or over 15 dollars
    if(bills[j]>=15){
        //Add each bill to the total
        total += bills[j];
        numItems ++;
    }



}
console.log("The total is " + total);

//calculate the average
average = total / numItems;
console.log("The average is " + average);