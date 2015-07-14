
 /*
Travis Johnson
Section 00
07/14/15
Day 4 conditionals
 */


//alert("Testing");

//Basic conditional if statement
 // if(condition to test){Code to run if true}

 //Create a boolean variable
 var oldEnough = true;

 //if child is old enough, tell him he can ride the coaster
 //else{} this will run if the if statement does not run, catch all
 if(oldEnough){
     //Code inside of the {} will run if old enough is a boolean of true
     console.log("You can ride the coaster!!");

 } else{
     //This code will run if the if block does not run
     //If old enough evaluates to a boolean of false
     console.log("Sorry you are too young to ride.");
 }

//Relational expressions - operators
 //Test kids height to see if he can ride the ride

 var kidHeight = prompt("How tall are you in inches?");
 var sneakerLift = 2;

 //If the child is 48 inches or taller they can ride the ride
 if(kidHeight >= 48){
     //Code inside of here will run if child is 48 inches or taller
     console.log("Congrats, you are tall enough to ride the coaster!");

 } else if(Number(kidHeight) + sneakerLift >= 48){
     console.log("You can ride the roller coaster with sneakers")

 } else{
     console.log("Sorry you are too short to ride the roller coaster.");
 }

 console.log("This text is after the code block");