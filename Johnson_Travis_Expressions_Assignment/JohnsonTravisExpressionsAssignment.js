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
alert("This calculator will tell you the average number of FIFA games played per week, and average hours played per day with the game on  default game time settings");

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
