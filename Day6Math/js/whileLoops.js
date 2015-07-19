
 /*
Travis Johnson
Section 00
07/18/15
Day 6 while loops
 */


//alert("Testing");
 //Initialize counter variable
 var counter = 0

 //while loop with condition
 //will run as long as condition is true
 while(counter < 200){
     console.log("The current value is " + counter);
     //change the value of the counter variable
     counter++;
     //Must change the value or you will loop forever
 }

 //Do while looop
 //This loop will always run at least one time before checking the condition

 //Create counting variable
 var i = 0;

 do{
     //This code will always run at least once
     console.log("the value of i is " + i);
     //increment of change
     i++;

 }while(i<10);