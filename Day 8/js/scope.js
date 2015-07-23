
 /*
Travis Johnson
Section 00
07/23/15
Day 8 scope
 */


//alert("Testing");

 //variable scope
 //variable inside of a function
 var width = 5;
 //console log
 console.log("The starting width is " + width);

 //create variable changeMe scoped to main code
 var changeMe = 7;
 console.log("The starting value of change me is " + changeMe);


 // create function that calculates the perimeter of a rectangle

 function calcPeri(){
     //create variables for width and height and perimeter
     //try not to reuse variable names
     //but its impossible with larger files

     //this variable is scoped to the function calcPeri
     var width = 10;
     console.log("Width inside function is " + width);
     var height = 20;
     var perimeter = width*2 + height*2;

     //change value of change me
     changeMe =15;
     console.log("inside of the function change me is " + changeMe)

     //console log perimeter
     console.log(perimeter);
 }

 //function call for calcperi
 calcPeri();