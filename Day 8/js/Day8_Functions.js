
 /*
Travis Johnson
Section 00
07/23/15
Day 8 function
 */


//alert("Testing");
 //Basic function structure
 //function functionName(){//code to run goes here}
printHello();
 //create function that will console log something
 function printHello(){
     //this code will run when the function runs
     console.log("This function is working!");

 }

 //create a function call that will start our printHello function
 printHello();
//function call
 printHello();


 //create a function that console logs a different string
 function printMore(){
     console.log("This is different text");
 }
//function call
 printMore();

 //create a function that calculates the area of a triangle
 function calcArea(){
     //Create variables for width, height and area
     var width = 20;
     var height = 30;
     var area = width*height;

     console.log("The are of the rectangle is " + area)
 }
//function call
 calcArea();