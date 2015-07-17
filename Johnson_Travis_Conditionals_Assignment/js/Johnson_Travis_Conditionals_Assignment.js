/**
 * Created by spankiticus on 7/16/15.
 */

/*
Travis Johnson
16JULY2015
Conditionals Assignment
 */


//alert("Test");

/*
This calculator will determine the kinetic energy of your arrow based on its speed and weight in grains
For an arrow, the kinetic energy is calculated by taking the weight in grains, multiplying it by the square of the speed in feet per second, and dividing by the constant 450800. This calculator will also help you determine an estimated bow speed by calculating draw length, arrow weight in grains and bow string weight.Adjustments:For every inch of draw length under 30″, subtract 10 fps, every inch over 30″ add 10 fps.For every 3 grains of total arrow weight above 5 grains per pound of draw weight, subtract 1 fps. Bow ratings are done at 70 lbs but quite often they are shot at 60 lbs.  This will usually result in the bow performing at 3-4 fps slower, assuming that the arrow remains at 5 grains per pound draw weight.
 */
//Tell user what calculator is for
alert(" This calculator will help you with an estimated bow speed by asking for draw length, arrow weight, and draw weight.");

//Find bow speed to calculate kinetic energy validate prompts
var ManufacturerBowSpeed = prompt("What is the manufacturer rated bow speed in feet per second?");
while(ManufacturerBowSpeed === "" || isNaN(ManufacturerBowSpeed)){
    ManufacturerBowSpeed = prompt("Please do not leave blank and only enter a number \n What is the manufacturer rated bow speed in feet per second?")
}
var DrawLength = prompt("What is your draw length in inches? \n please only enter a number.");
while(DrawLength === "" || isNaN(DrawLength)){
    DrawLength = prompt("Please do not leave blank and only enter a number. \n What is your draw length in inches?")
}
var TotalArrowWeight = prompt("What is the total arrow weight in grains");
while(TotalArrowWeight === "" || isNaN(TotalArrowWeight)){
    TotalArrowWeight = prompt("Please do not leave blank and only enter a number \n What is the total arrow weight in grains?")
}
var DrawWeight = prompt("What is the draw weight of the bow?");
while(DrawWeight === "" || isNaN(DrawWeight)){
    DrawWeight = prompt("Please do not leave blank and only enter a number \n What is the draw weight of the bow?")
}

//Calculations for draw length affecting adjusted bow speed
var AdjustedBowSpeed;
var DrawLengthForCalc;
if(parseInt(DrawLength) === 30){
    AdjustedBowSpeed = ManufacturerBowSpeed
}else if (DrawLength > 30){
     DrawLengthForCalc = (DrawLength - 30) * 10;
    AdjustedBowSpeed = parseInt(ManufacturerBowSpeed) + parseInt(DrawLengthForCalc)
} else if(DrawLength < 30){
     DrawLengthForCalc = (30 - DrawLength) * 10;
     AdjustedBowSpeed = parseInt(ManufacturerBowSpeed) - parseInt(DrawLengthForCalc)
}

//Calculate adjusted bow speed with draw weight
var AdjustedDrawWeight;
if(parseInt(DrawWeight >= 70)){
    AdjustedDrawWeight = AdjustedBowSpeed
} else if(DrawWeight < 70){
    AdjustedDrawWeight = (70 - DrawWeight) / 10 * 4;
    AdjustedBowSpeed = AdjustedBowSpeed - AdjustedDrawWeight;
}

//Calculate adjusted bow speed with total arrow weight
//5 grams per pound of draw weight, if any grams leftover every 3 grams subtracts 1 fps
//(Condition to test)? true code : false code;
var AdjustedArrowWeight = TotalArrowWeight / 5;
AdjustedBowSpeed = (AdjustedArrowWeight>DrawWeight) ? (AdjustedArrowWeight - DrawWeight) / 3 + AdjustedBowSpeed : AdjustedBowSpeed;

//Display bow speed to user
console.log("Your estimated bow speed is " + AdjustedBowSpeed + "FPS");


/*
Test1
Validated all prompt for "" || isNaN
ManufacturerBowSpeed = 300
DrawLength = 30
DrawWeight = 70
ArrowWeight = 100
Returned "Your estimated bow speed is 300FPS" which is correct entered information should not change ManufacturerBowSpeed
Test2
ManufacturerBowSpeed = 300
DrawLength = 27 should subtract 10 for every inch under 30
DrawWeight = 60 should subtract 4
ArrowWeight = 450 should add 10FPS
Returned "Your estimated bow speed is 276FPS" which is correct
Test3
ManufacturerBowSpeed = 400
DrawLength = 31 should add 10
DrawWeight = 70 should stay the same
ArrowWeight = 500 should add 10
Returned "Your estimated bow speed is 420FPS which is correct
*/


















