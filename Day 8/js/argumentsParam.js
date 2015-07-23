
 /*
Travis Johnson
Section 00
07/23/15
Day 8 Arguments and Parameters
 */


//alert("Testing");

 //arguments - go in the function call these are the specific values
 //parameters - go in the function definition and they catch the arguments(generic containers)

 //Create variables for width and height
 var width=10;
 var height=20;


 //create a function for area of a retangle
 function calcArea(){
     //create variables
     var width=10;
     var height=20;

     //calculate the area
     var area = width*height;

     //console log area
     console.log("The area of a rectange with a width of " + width + " and a height of " + height + " is " + area);
 }
 //call the function
 calcArea();
 calcArea();