
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

 //create function
 function calcCircumferenceOfCircle(r){
     var circumference = 2*Math.PI*r;
     return circumference
 }

 //create variable to catch circumference
 var results = calcCircumferenceOfCircle(userRadius);

 //console.log results
 console.log("The circumference of the circle is " + Math.round(results));

 /*
  Test
  Prompts Validate
  Entered 12
  Returned 75
  Entered 211
  Returned 1326
  */

 //How many bee stings does it take to die
 //User input for weight
 var userWeight =parseInt(prompt("This calculator will tell you how many bee stings it will take to kill you based on weight of the victim. Please enter the victims weight"));
 //Validate
 while(userWeight === "" || isNaN(userWeight)){
     userWeight=prompt("Please do not leave blank and only enter a number \n What is the weight of the victim")
 }
 function deathByBees(weight){
     //calculate number of bee stings till death
     var death = weight*8.7;
     return death
 }














