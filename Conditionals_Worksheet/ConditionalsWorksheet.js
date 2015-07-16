/**
 * Created by spankiticus on 7/14/15.
 */

/*
Travis Johnson
14July2015
Conditionals Worksheet
 */

//alert("Testing");


//Group 1 problem
//Setup variables prompt user for input and validate
var CarMPG = prompt("What is your vehicles Miles Per Gallon?");
while(CarMPG === "" || isNaN(CarMPG)){
    CarMPG = prompt("Please do not leave blank and only enter a number \n What is your vehicles Miles Per Gallon?");
}
var GasTankCapacity = prompt("What is your vehicles gas tank capacity?");
while(GasTankCapacity === "" || isNaN(GasTankCapacity)){
    GasTankCapacity = prompt("Please do not leave blank and only enter a number \n What is your vehicles gas tank capacity?")
}
var GaugeReading = prompt("What is the gas gauge reading on your vehicle? Use only numbers");
while(GaugeReading === "" || isNaN(GaugeReading)){
    GaugeReading = prompt("Please do not leave blank and only enter a number \n What is the gas gauge reading on your vehicle?")
}
var GaugeReadingDecimal = GaugeReading / 100;
var RemainingGas = GaugeReadingDecimal * GasTankCapacity;
var DistanceToGo = 200;

//Setup conditional with output
if(GasTankCapacity * GaugeReadingDecimal * CarMPG >= DistanceToGo){
    console.log("Yes you can make it without stopping for gas.")

}else{console.log("You only have " + RemainingGas + " gallons left in your tank, better get gas while you can!")
}

//Group 2 problem
//Setup given variables
var UserName = "Spankiticus";
var Password = 1234;
var EnterUserName = prompt("Please enter your user name.");
var EnterPassword = prompt("Please enter your password.");

//if else statements for login
if(EnterUserName === UserName){

}else console.log("User not found try again.");

if(parseInt(EnterPassword) === Password){

}else console.log("Password does not match our records");

if(EnterUserName === UserName && parseInt(EnterPassword) === Password){
    console.log("Welcome " + UserName )
}

//Group 3 problem
//Prompt for tire pressure and validate
var TirePressureTireOne = prompt("Please enter the tire pressure of the front driver side tire?");
while(TirePressureTireOne === "" || isNaN(TirePressureTireOne) ) {
    TirePressureTireOne =prompt("Please do not leave blank and only enter a number \n Please enter the tire pressure of the front driver side tire.")
}
var TirePressureTireTwo = prompt("Please enter the tire pressure of the front passenger side tire?");
while(TirePressureTireTwo === "" || isNaN(TirePressureTireTwo)){
    TirePressureTireTwo = prompt("Please do not leave blank and only enter a number \n Please enter the tire pressure of the front driver side tire.");
}
var TirePressureTireThree = prompt("Please enter the tire pressure of the rear driver side tire.");
while(TirePressureTireThree === "" || isNaN(TirePressureTireThree)){
    TirePressureTireThree = prompt("Please do not leave blank and only enter a number \n Please enter the tire pressure of the rear driver side tire.");
}
var TirePressureTireFour = prompt("Please enter the the tire pressure of the rear passenger side tire.");
while(TirePressureTireFour === "" || isNaN(TirePressureTireFour)){
    TirePressureTireFour = prompt("Please do not leave blank and only enter a number \n Please enter the tire pressure of the rear passenger side tire.")
}
//array for tire pressures
var TirePressure = [parseInt(TirePressureTireOne),parseInt(TirePressureTireTwo),parseInt(TirePressureTireThree),parseInt(TirePressureTireFour)];

//if else statements for tire pressure
if(TirePressure[0] === TirePressure[1] && TirePressure[2] === TirePressure[3]){
    console.log("The tires pass spec.")
}else {console.log("Tires do not pass spec.")};


/*
Tested group1 problem
all prompts validated
car mpg = 15
tank capacity = 22
gauge reading = 65
returned "Yes you can make it without stopping for gas"
car mpg = 17
tank capacity = 20
gauge reading = 20
returned "You only have 4 gallons left in your tank, better get gas while you can!"

Tested group2 problem
Entered cat for username and correct password
Returned "User not found"
Entered correct username and incorrect password
Returned "Password does not match our records"
Entered correct username and password
Returned "Welcome Spankiticus"

Tested group3
all prompts validated
43,43,36,36
Returned "The tires pass spec
42,43,36,36
Returned "Tires do not pass spec"
 */
