
 /*
Travis Johnson
07/21/15
Array loop worksheet
 */


//alert("Testing");

//Determine total miles per day a vehicle is being driven by multiple people and time to reach 100,000 miles
 //Setup given variables
 var totalMiles = 0;
 var milesDriven = [];
 var maxMiles = 100000;
 var milesTraveled = 0;

 //User prompt for miles per day the vehicle was driven by each person and parse int
 milesDriven[0] = parseInt(prompt("How many miles did driver one drive today?"));
 while( milesDriven[0] === "" || isNaN(milesDriven[0] || milesDriven[0 >= 100000])){
     milesDriven[0] = prompt("Please do not leave blank, only enter a number and do not enter a number over 100,000 \n How many miles did driver one drive today?")
 }

 milesDriven[1] = parseInt(prompt("How many miles did driver two drive today?"));
 while(milesDriven[1] === "" || isNaN(milesDriven[1] || milesDriven[1] >= 100000)){
     milesDriven[1] = prompt("Please do not leave blank, only enter a number and do not enter more than 100,000\n How many miles did driver two drive today?");
 }

 milesDriven[2] = parseInt(prompt("How many miles did driver three drive today?"));
 while(milesDriven[2] === "" || isNaN(milesDriven[2] || milesDriven[2] >= 100000)){
     milesDriven[2] = prompt("Please do not leave blank, only enter a number and do not enter more than 100,000\n How many miles did drive three drive today?");
 }


 //create loop to add and average array
 for(var i = 0; i < milesDriven.length; i++){
    totalMiles += milesDriven[i];
 }
 //console log total miles driven for the day
 console.log("The vehicle was driven " + totalMiles + " miles today.");

 //Find out how long it will take the vehicle to reach 100,000 miles with mileage input from that day
 var numDays = 0;

 //While loop to find amount of days
 while(milesTraveled <= maxMiles){
     milesTraveled += totalMiles;
     numDays++;


 }
 //console log how many days it will take to reach 100,000 miles
console.log("With a daily mileage total of " + totalMiles + " It will take " + numDays + " days to reach 100,000 miles.");

/*
Test
validated all prompts
Entered 333
Entered 333
Entered 334
returned 3 miles for total miles driven and 33334 days to reach 100,000 miles
entered 10000
entered 10000
entered 10000
returned 30,000 miles total and 4 days to reach 100,000 miles.
 */





