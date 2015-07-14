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
//Setup given variables
var CarMPG = 15;
var GasTankCapacity = 22;
var GaugeReading = 65;
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

if(EnterUserName === UserName){

}else console.log("User not found try again.");

if(parseInt(EnterPassword) === Password){

}else console.log("Password does not match our records");
