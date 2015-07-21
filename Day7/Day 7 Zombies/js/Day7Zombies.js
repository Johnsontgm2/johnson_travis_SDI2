
 /*
Travis Johnson
Section 00
07/21/15
Day 7 zombies
 */


//alert("Testing");

 //We have one zombie here at FullSail
 //It can bite 4 people a day and turn them to zombies the next day
 //The CDC wants to know how many zombies there will be in 8 days

 //Create the givens
 //How many zombies we have
 var numZombies = 1;

 //Number of bites a zombie can make each day
 var numBites = 4;

 //What is our timeline?
 var days = 8;
/*
 for(var i = 1; i <= days; i++){
     //How many zombies get made every day
     var infectedPeople = numZombies * numBites;

     //How many zombies will we have?
     numZombies += infectedPeople;

     console.log("On day #" + i +" there will be " + numZombies + " zombies!");

 }
    */


 //CDC wants to know how many days it will take for their to be a million zombies

 //Variable to count the number of days
 var numDays = 1;

 while(numZombies <= 1000000){
     var infectedPeople = numZombies * numBites;

         //How many zombies will we have?
         numZombies += infectedPeople;

         console.log("On day #" + numDays +" there will be " + numZombies + " zombies!");

     //increment the day
     numDays++;


 }

 console.log("It will take " + (numDays -1) + " to make a million zombies");