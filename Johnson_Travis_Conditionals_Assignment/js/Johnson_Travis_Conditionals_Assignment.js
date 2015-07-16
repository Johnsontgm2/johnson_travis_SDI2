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
For an arrow, the kinetic energy is calculated by taking the weight in grains, multiplying it by the square of the speed in feet per second, and dividing by the constant 450800. This calculator will also help you determine an estimated bow speed by calculating draw length, arrow weight in grains and bow string weight.Adjustments:For every inch of draw length under 30″, subtract 10 fps, every inch over 30″ add 10 fps.For every 3 grains of total arrow weight above 5 grains per pound of draw weight, subtract 1 fps.For every 3 grains of weight on the bow string, subtract 1 fps. Bow ratings are done at 70 lbs but quite often they are shot at 60 lbs.  This will usually result in the bow performing at 3-4 fps slower, assuming that the arrow remains at 5 grains per pound draw weight.
 */

//Tell user what calculator is for
alert("This calculator will determine the kinetic energy of your arrow based on its speed and weight is grains, Also this calculator will help you with an estimated bow speed by asking for draw length, arrow weight, and bow string weight.");

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
var BowWeight = prompt("What is the weight of the bow string?");
while(BowWeight === "" || isNaN(BowWeight)){
    BowWeight = prompt("Please do not leave blank and only enter a number \n What is the weight of the bow string?")
}

//Calculations for draw length affecting manufacturer bow speed
var AdjustedBowSpeed;
if(DrawLength === 30){
    AdjustedBowSpeed = ManufacturerBowSpeed

}else if (DrawLength > 30){
    var DrawLengthForCalc = (DrawLength - 30) * 10;
    AdjustedBowSpeed = parseInt(ManufacturerBowSpeed) + parseInt(DrawLengthForCalc)
} else if(DrawLength < 30){
    var DrawLengthForCalc = (30 - DrawLength) * 10;
     AdjustedBowSpeed = parseInt(ManufacturerBowSpeed) - parseInt(DrawLengthForCalc)
}

//Calculations for total arrow weight affecting manufacturer bow speed

console.log(AdjustedBowSpeed);










//User prompts for kinetic energy, validate each prompt
var WeightInGrains = prompt("What is the weight of the arrow head in grains? \n Please only enter a number");
while(WeightInGrains === "" || isNaN(WeightInGrains)){
    WeightInGrains = prompt("Please do not leave blank and only enter a number \n Please enter the weight of the arrow head in grains.")
}
var ArrowSpeed = prompt("What is the speed of the arrow in feet per second? \n Please only enter a number.");
while(ArrowSpeed === "" || isNaN(ArrowSpeed)){
    ArrowSpeed = prompt("Please do not leave blank and only enter number \n Please enter the speed of the arrow is feet per second.")
}

//Calculation for kinetic energy
var KineticEnergy = WeightInGrains * ArrowSpeed * ArrowSpeed / 450800;

console.log(KineticEnergy);