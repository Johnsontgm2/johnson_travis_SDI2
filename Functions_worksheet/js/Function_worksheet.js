
 /*
Travis Johnson
Section 00
07/23/15
Functions Worksheet
 */


//alert("Testing");

 //Create function for circumference of a circle
 //User input for radius
 var userRadius = parseInt(prompt("This will calculate the circumference of a circle. \n Please enter the radius of the circle"));
 //validate
 while(userRadius === "" || isNaN(userRadius)){
     userRadius=prompt("Please do not leave blank and only enter a number \n What is the radius of the circle");
 }

 