
 /*
Travis Johnson
Section 00
07/14/15
Day 4 logical
 */


//alert("Testing");

 //check the price of a scooter
 var scooterCost = 700;
 var budget = 800;
 var paycheck = 500;

 //if the price of the scooter is less than our budget than we can buy it
 //And if our paycheck is over 400


 if(scooterCost<budget){
     console.log("You can buy the scooter!");

 } else{
     console.log("Cost is too high for our budget");
 }

 if(paycheck>400){
     console.log("We can buy the scooter!");

 } else{
     console.log("Our paycheck is too small to buy the scooter");
 }


 //use the && logical operator to test both conditions at one time
 if(scooterCost<budget && paycheck>400){
     console.log("Both the scooter is in budget and our paycheck is high enough");

 } else{
     console.log("Sorry you can not buy the scooter");
 }

 //|| or logical operator
 //Either one must be true for it to be true

 //If the scooter is less than or equal to our budget or if we won the lottery
 var wonLottery = false;

 if(scooterCost<=budget || wonLottery){
     console.log("You have enough money to buy the scooter or you won the lottery")

 } else{
     console.log("You do not have enough money keep playing the lottery")
 }