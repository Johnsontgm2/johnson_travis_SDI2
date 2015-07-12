/**
 * Created by spankiticus on 7/11/15.
 */

/*
Travis Johnson
7/11/15
Expressions Assignment
 */

//Test connection
//alert("Testing");

//This calculator will tell you the average number of FIFA games per week and average hours played per day

//Tell user what calculator is for
alert("This calculator will tell you the average number of FIFA games played per day, and average hours played per day with the game on  default game time settings");

//Prompt user for games played per day, and match times to figure our hours played, each prompt will be validated
var FIFAMon = prompt("How many games of FIFA did you play on Monday?");
while(FIFAMon === "" || isNaN(FIFAMon) ){
    FIFAMon = prompt("Please do not leave blank and only enter a number.If 0 games were played enter 0")
}
var FIFATue = prompt("How many games of FIFA did you play on Tuesday?");
while(FIFATue === "" || isNaN(FIFATue)){
    FIFATue = prompt("Please do not leave blank and only enter a number.If 0 games were played enter 0")
}
var FIFAWed = prompt("How many games of FIFA did you play on Wednesday?");
while(FIFAWed === "" || isNaN(FIFAWed)){
    FIFAWed = prompt("Please do not leave blank and only enter a number.If 0 games were played enter 0")
}
var FIFAThur = prompt("How many games of FIFA did you play on Thursday?");
while(FIFAThur === "" || isNaN(FIFAThur)){
    FIFAThur = prompt("Please do not leave blank and only enter a number.If 0 games were played enter 0")
}
var FIFAFri = prompt("How many games of FIFA did you play on Friday?");
while(FIFAFri === "" || isNaN(FIFAFri)){
    FIFAFri = prompt("Please do not leave blank and only enter a number.If 0 games were played enter 0")
}
var FIFASat = prompt("How many games of FIFA did you play on Saturday?");
while(FIFASat === "" || isNaN(FIFASat)){
    FIFASat = prompt("Please do not leave blank and only enter a number.If 0 games were played enter 0")
}
var FIFASun = prompt("How many games of FIFA did you play on Sunday?");
while(FIFASun === "" || isNaN(FIFASun)){
    FIFASun = prompt("Please do not leave blank and only enter a number.If 0 games were played enter 0")
}

//Take data from user and enter into an array
var FIFAGamesPlayed = [0];
FIFAGamesPlayed[0]=parseInt(FIFAMon);
FIFAGamesPlayed[1]=parseInt(FIFATue);
FIFAGamesPlayed[2]=parseInt(FIFAWed);
FIFAGamesPlayed[3]=parseInt(FIFAThur);
FIFAGamesPlayed[4]=parseInt(FIFAFri);
FIFAGamesPlayed[5]=parseInt(FIFASat);
FIFAGamesPlayed[6]=parseInt(FIFASun);

//Display to user what was entered for games played per day
console.log(" Monday games played " + FIFAGamesPlayed[0] + " \n Tuesday games played " + FIFAGamesPlayed[1] + " \n Wednesday games played " + FIFAGamesPlayed[2] + "\n Thursday games played " + FIFAGamesPlayed[3] + "\n Friday games played " + FIFAGamesPlayed[4] + "\n Saturday games played " + FIFAGamesPlayed[5] + "\n Sunday games played " + FIFAGamesPlayed[6]);

//Find average number of games per week using array and display
var FIFAGamesPerWeek = FIFAGamesPlayed[0] + FIFAGamesPlayed[1] + FIFAGamesPlayed[2] + FIFAGamesPlayed[3] + FIFAGamesPlayed[4] + FIFAGamesPlayed[5] + FIFAGamesPlayed[6];
console.log("You played " + FIFAGamesPerWeek + " FIFA games this week");

//Find out average numbers of hours played per week (Normal settings is 15 minute games)
var HoursPlayed = FIFAGamesPerWeek * 15 / 60;
console.log("The number of hours you spent playing FIFA this Week is " + HoursPlayed);

var AverageFIFAGamesPerWeek = FIFAGamesPerWeek /= 7;
//display games played that week
console.log("You averaged " + AverageFIFAGamesPerWeek + " FIFA games per day this week");

/*
Test calculator
Tested prompts for blanks and not a number
Entered 2 for each day
Displayed each day as 2
Total of 14 games
Average of 2 games per day
Returned 3.5 hours played Each game on standard settings is 15 minutes
Entered 3 for each fay
Displayed each day as 3
Total of 21 games
Average of 3 games per day
Returned 5.25 hours played
 */



