
 /*
Travis Johnson
Section 00
07/25/15
Day 9 random number generator
 */


//alert("Testing");


 //create a function that will take in user prompt max and min and return a random number between them

 //Create a variable for the min value
 var min =prompt("We are going to find a random number between two values. \nWhat is the minimum value?");
 while(min==="" || isNaN(min)){
     if(isNaN(min)){
         min=prompt("Please only enter a number. What is the minimum value?");

     }else{
         min=prompt("Please do not leave blank what is the min value?");
     }
 }

 //number cast or parseint
 min=Number(min);

 //variable for max
 var max=prompt("What is the max value?");
 while((max==="" || isNaN(max) || max<=min)){
     if(isNaN(max)){
         max=prompt("Please only enter a number. What is the minimum value?");

     }else if(max<=min && max!=""){
         max=prompt("Please make sure the max value is greater than the min value of " + min+" Please enter the max value?");

     }else{
         max=prompt("Please do not leave blank what is the min value?");
     }
 }

 //number cast