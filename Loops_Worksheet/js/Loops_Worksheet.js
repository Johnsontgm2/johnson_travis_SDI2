
 /*
Travis Johnson
07/18/15
Loops Worksheet
 */


//alert("Testing");



 // Set variable with prompt and validate
 var raffleTickets = prompt("Please enter the last raffle ticket number given");
 while(raffleTickets === "" || isNaN(raffleTickets)){
     prompt("Please do not leave blank, and only enter a number \n Enter the last raffle ticket number going ")

 }
 while(raffleTickets >= 20){
     prompt("ticket 20 is the last ticket \n Please enter the last raffle ticket number")
 }

 raffleTickets ++;
 //give remaining tickets with while loop
 while(raffleTickets <= 20){
     console.log("ticket number " + raffleTickets + " is still available");

     raffleTickets ++

 }
 /*
  Tested all prompts
  Entered ticket 19
  Returned ticket 20
  Entered 21
  Returned
  */

//prompt user for input on place in line and validate
 var seatNumber = prompt("What number are you in line?");
 while(isNaN(seatNumber) || seatNumber === "" || seatNumber > 20){
     seatNumber = prompt("Please only enter a number and do not leave blank \n What number are you in line?");

 }


 //do while loop for seat numbers still available
 do{
     console.log("The seats that are still available are " + seatNumber);
     seatNumber ++

 }while(seatNumber <= 20);

/*
Test
All prompts validate
Entered 21 returns there are only 20 seats available
entered 19 returns that seats 19 and 20 are available.
 */

//prompt user for input on what positions each person will play
 var toPlayorNot = prompt("Are you going to play soccer? \n Please only enter yes or no");
 while(toPlayorNot.toLowerCase() != "yes" && toPlayorNot != "no"){
     prompt("Please only enter yes or no \n Are you going to play soccer?")
 }
 if(toPlayorNot === "no"){
     console.log("You should play soccer")
 } else if(toPlayorNot === "yes"){
//for loop for what position each player will play
     for(var whatPositiontoPlay=0; whatPositiontoPlay <= 5; whatPositiontoPlay ++){
         if(whatPositiontoPlay === 0){
             console.log("Player 1 you get to play Striker");

         } else if(whatPositiontoPlay === 1){
             console.log("Player 2 you get to play Winger")

         } else if(whatPositiontoPlay === 2){
             console.log("Player 3 you get to play  Attacking Midfield")

         } else if(whatPositiontoPlay === 3){
             console.log("Player 4 you get to play Defensive Midfield")

         } else if(whatPositiontoPlay === 4){
             console.log("Player 5 you get to play Defense");

         } else if(whatPositiontoPlay === 5){
             console.log("Player 6 You get to play Goalie (Good Luck)")

         }

     }
 }

 /*
 Test
 all prompts validate
 Entered no Returns you should play soccer
 Entered yes returns the positions each player gets to play
  */


